#!/usr/bin/env node
/*
 * 업데이트 내역 생성 스크립트
 * - main 배포 이력(1차 부모 경로, 머지 1회 = 배포 1회)을 읽어 js/data/changelog.js 생성
 * - js/data/*.js(매크로 데이터)는 커밋 직전 버전과 비교해 카드 단위(추가/삭제/이름·매크로명·본문 변경)로 정리
 * - 그 외 파일은 "화면·구조 변경"으로 요약
 * 실행: node tools/build-changelog.js   (저장소 루트에서, 전체 히스토리 필요: git fetch --unshallow)
 * GitHub Actions(.github/workflows/deploy-pages.yml)가 배포 때마다 자동 실행함.
 */
"use strict";
const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const OUT = path.join("js", "data", "changelog.js");
const MAX_TEXT = 3000;          // 전/후 문구 최대 길이(초과분은 잘라서 표시)
const BULK_LIMIT = 150;         // 한 파일에서 이 개수 초과로 추가/삭제되면 목록 대신 요약

function git(args) {
  return execFileSync("git", args, { encoding: "utf8", maxBuffer: 1024 * 1024 * 512 });
}

/* ── 표시용 이름 ── */
const BRAND = {
  slm: "슬룸", sloom: "슬룸", align: "얼라인랩", alignlab: "얼라인랩", bilba: "빌바",
  cel: "셀올로지", cellology: "셀올로지", oclock: "12 o'clock", simplicare: "심플리케어",
  cocodaum: "코코다움", dramang: "닥터아망", drmans: "닥터맨즈", marnell: "마넬", yvening: "와이브닝"
};
const SECTION = {
  as: "불량·AS", refund: "단순변심 반품", exchange: "단순변심 교환", "100refund": "100% 환불 이벤트",
  side: "부작용", simplemerge: "단순변심(통합)", cond: "조건 안내"
};
const SHARED_SECTION = {
  cmn_all: "공통 · 채팅 표준 응대", call: "공통 · 유선 응대", board: "공통 · 게시판",
  ib: "공통 · IB", ob: "공통 · OB"
};
function describeId(id) {
  const base = id.replace(/__\d+$/, "");
  if (SHARED_SECTION[base]) return { brand: "공통", section: SHARED_SECTION[base] };
  let m = base.match(/^cmp_[a-z_]+__([a-z0-9_]+)$/);
  if (m) return { brand: BRAND[m[1]] || "공통", section: "공통 구성요소" };
  m = base.match(/^([a-z]+)_([a-z0-9]+)$/);
  if (m) return { brand: BRAND[m[1]] || m[1], section: SECTION[m[2]] || m[2] };
  return { brand: "공통", section: base };
}
function describeFile(f) {
  let m;
  if ((m = f.match(/^js\/brands\/(\w+)\.js$/))) return `${BRAND[m[1]] || m[1]} 화면 구성`;
  if (f === "js/core/shared-templates.js") return "공통 화면 구성";
  if (f === "js/content-build.js") return "메뉴·검색 구조";
  if (f === "js/core/helpers.js") return "카드 표시 방식";
  if (f === "js/core/editor.js") return "웹 편집기";
  if (f === "js/core/changelog-view.js") return "업데이트 내역 화면";
  if (f === "index.html") return "사이트 레이아웃·디자인";
  if (f.startsWith(".github/") || f.startsWith("tools/")) return "배포 자동화";
  if (f === "js/data/changelog.js") return null; // 자기 자신은 제외
  return f;
}

/* ── 데이터 파일 파싱 ── */
function parseData(src) {
  if (!src) return null;
  const m = src.match(/^\s*const\s+D_\w+\s*=\s*([\s\S]*?);?\s*$/);
  if (!m) return null;
  try { return JSON.parse(m[1]); } catch (e) { return null; }
}
function showFile(rev, file) {
  try { return git(["show", `${rev}:${file}`]); } catch (e) { return null; }
}
const clip = s => (s == null ? "" : (s.length > MAX_TEXT ? s.slice(0, MAX_TEXT) + " …(이하 생략)" : s));

function diffData(file, before, after) {
  if (!before && after) return { list: [], summary: [`데이터 파일 신규 생성 (카드 ${Object.keys(after).length}개)`] };
  if (before && !after) return { list: [], summary: [`데이터 파일 삭제 (카드 ${Object.keys(before).length}개)`] };
  const A = before || {}, B = after || {};
  const out = [];
  const ids = new Set([...Object.keys(A), ...Object.keys(B)]);
  for (const id of ids) {
    const a = A[id], b = B[id];
    const d = describeId(id);
    const base = { id, brand: d.brand, section: d.section };
    if (!a && b) { out.push({ ...base, type: "add", name: b.name || "", tag: b.tag || "" }); continue; }
    if (a && !b) { out.push({ ...base, type: "del", name: a.name || "", tag: a.tag || "" }); continue; }
    const fields = [];
    if ((a.name || "") !== (b.name || "")) fields.push({ field: "카드명", before: a.name || "", after: b.name || "" });
    if ((a.tag || "") !== (b.tag || "")) fields.push({ field: "매크로명", before: a.tag || "", after: b.tag || "" });
    if ((a.body || "") !== (b.body || "")) fields.push({ field: "본문" });
    if ((a.desc || "") !== (b.desc || "")) fields.push({ field: "설명" });
    if (fields.length) out.push({ ...base, type: "mod", name: b.name || a.name || "", tag: b.tag || "", fields });
  }
  // 대량 추가/삭제(예: 데이터 파일 신규 생성)는 요약
  const adds = out.filter(x => x.type === "add"), dels = out.filter(x => x.type === "del");
  const summary = [];
  let list = out;
  if (adds.length > BULK_LIMIT) { list = list.filter(x => x.type !== "add"); summary.push(`카드 ${adds.length}개 일괄 추가`); }
  if (dels.length > BULK_LIMIT) { list = list.filter(x => x.type !== "del"); summary.push(`카드 ${dels.length}개 일괄 삭제`); }
  return { list, summary };
}

/* ── 배포 단위 수집 ──
 * main 의 1차 부모 경로(first-parent) 커밋 하나 = 배포 1회
 *  - 일반 커밋(웹편집기 등 main 직접 커밋): 그 커밋 1개
 *  - 머지 커밋(브랜치를 main 에 합침): 그 머지로 들어온 커밋 전부를 한 묶음으로
 * 날짜·시각 = main 에 반영된 시각(커밋/머지의 committer date)
 * 카드 변경 = 배포 직전 main 상태 ↔ 배포 후 상태 비교(순 변경) */
const SEP = "\u001e", FS = "\u001f";
const FMT = `--pretty=format:${SEP}%H${FS}%h${FS}%an${FS}%cI${FS}%P${FS}%s${FS}%b`;
function parseLog(raw) {
  return raw.split(SEP).filter(c => c.trim()).map(chunk => {
    const [hash, short, an, date, parents, subject, body] = chunk.split(FS);
    const by = (subject.match(/\(by ([^)]+)\)/) || [])[1];   // 웹편집기 커밋은 (by 계정)이 담당자
    return { hash, short, author: (by || an || "").trim(), date,
      parents: (parents || "").trim().split(/\s+/).filter(Boolean), subject: subject.trim(), body: (body || "").trim() };
  });
}
const mainline = parseLog(git(["log", "--first-parent", "--date=iso-strict", FMT]));
const deploys = [];
for (const d of mainline) {
  const base = d.parents[0] || null;
  let included;
  if (d.parents.length > 1) {
    included = parseLog(git(["log", "--no-merges", "--date=iso-strict", FMT, `${base}..${d.hash}`]))
      .map(c => ({ short: c.short, author: c.author, subject: c.subject, body: c.body }));
  } else {
    included = [{ short: d.short, author: d.author, subject: d.subject, body: d.body }];
  }
  let files = [];
  try {
    const args = base ? ["diff", "--name-only", base, d.hash] : ["show", "--name-only", "--pretty=format:", d.hash];
    files = git(args).split("\n").map(s => s.trim()).filter(Boolean);
  } catch (e) { files = []; }
  const changes = [], summaries = [], structure = [];
  for (const f of files) {
    if (/^js\/data\/(?!changelog\.js$)[\w-]+\.js$/.test(f)) {
      const before = base ? parseData(showFile(base, f)) : null;
      const after = parseData(showFile(d.hash, f));
      if (!before && !after) { structure.push(f); continue; }
      const { list, summary } = diffData(f, before, after);
      changes.push(...list);
      const key = f.replace(/^js\/data\/|\.js$/g, "");
      summary.forEach(s => summaries.push(`${key === "shared" ? "공통" : (BRAND[key] || key)}: ${s}`));
    } else {
      const label = describeFile(f);
      if (label) structure.push(label);
    }
  }
  if (!included.length && !changes.length && !structure.length) continue; // 빈 머지 등은 생략
  deploys.push({ hash: d.hash, short: d.short, date: d.date, merged: d.parents.length > 1,
    authors: [...new Set(included.map(c => c.author).filter(Boolean))], commits: included,
    structure: [...new Set(structure)], summaries, changes });
}

const out = { generatedAt: new Date().toISOString(), deploys };
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, "const CHANGELOG = " + JSON.stringify(out) + ";\n", "utf8");
console.log(`changelog: ${deploys.length} deploys, ${deploys.reduce((n, c) => n + c.changes.length, 0)} card changes → ${OUT}`);
