/* =====================================================================
   🕘 업데이트 내역 화면
   - 데이터: js/data/changelog.js (배포 때 GitHub Actions 가 자동 생성, CHANGELOG 전역)
   - 사이드바: 날짜 목록(1뎁스) / 본문: 그날의 배포를 시간별 토글로, 펼치면 변경 목록(개조식)
   ===================================================================== */

/* GitHub 계정명(또는 커밋 작성자명) → 표시 이름. 새 담당자가 생기면 여기에 한 줄 추가 */
const CL_AUTHOR_NAMES = {
  "hj.park": "박혜정",
  "hjpark929": "박혜정",
  "hjkim-olit": "김현지",
  "kypark511": "박근영",
  "SLOOmCX": "기업계정",
};
const CL_LIST_MAX = 8;   // 한 묶음에서 카드 이름을 몇 개까지 나열할지 (초과분은 "외 N건")

const CL_STATE = { day: null, open: {} };

(function injectChangelogStyle(){
  const css = `
  .cl-commit{border:1px solid var(--line,#e4e7ec);border-radius:12px;background:#fff;margin-bottom:8px;overflow:hidden}
  .cl-commit-h{display:flex;gap:10px;align-items:center;padding:11px 14px;cursor:pointer}
  .cl-commit-h:hover{background:#F8FAFC}
  .cl-arrow{font-size:11px;color:#98A2B3;width:12px;flex-shrink:0;transition:.15s}
  .cl-commit.open .cl-arrow{transform:rotate(90deg)}
  .cl-time{font-size:13px;font-weight:800;color:var(--primary,#234A86);min-width:44px}
  .cl-subj{flex:1;font-size:13.5px;color:#1d2939;line-height:1.5}
  .cl-who{font-size:11.5px;color:#98A2B3;white-space:nowrap}
  .cl-body{border-top:1px solid var(--line,#e4e7ec);padding:10px 16px 12px 40px;background:#FCFCFD}
  .cl-body ul{margin:0;padding-left:18px}
  .cl-body li{font-size:13px;line-height:1.75;color:#344054}
  .cl-body li li{font-size:12.5px;color:#667085;line-height:1.65}
  .cl-empty{padding:40px;text-align:center;color:#667085}
  .cl-day-cnt{font-size:11px;color:#98A2B3;margin-left:auto;padding-left:6px}
  `;
  const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
})();

function clEsc(s){ return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
function clPlain(s){ return String(s==null?"":s).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").trim(); }
function clName(a){ return CL_AUTHOR_NAMES[a] || a || ""; }
function clKst(iso){
  const p = new Intl.DateTimeFormat("ko-KR",{timeZone:"Asia/Seoul",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:false,weekday:"short"}).formatToParts(new Date(iso));
  const g = t => (p.find(x=>x.type===t)||{}).value || "";
  return { key:`${g("year")}-${g("month")}-${g("day")}`, day:`${g("year")}-${g("month")}-${g("day")} (${g("weekday")})`, time:`${g("hour")}:${g("minute")}` };
}
function clAll(){ return (typeof CHANGELOG!=="undefined" && CHANGELOG && CHANGELOG.deploys) ? CHANGELOG.deploys : []; }
function clByDay(){
  const by = {};
  clAll().forEach(c=>{ const k=clKst(c.date).key; (by[k]=by[k]||[]).push(c); });
  return by;
}

/* 배포 1회 → 제목/담당자 */
function clTitle(d){
  const cs = d.commits||[];
  if (!cs.length) return "변경 사항";
  return cs.length===1 ? cs[0].subject : `${cs[0].subject} 외 ${cs.length-1}건`;
}
function clWho(d){ return [...new Set((d.authors||[]).map(clName))].join(", "); }

/* 배포 1회 → 개조식 변경 목록 */
function clCardLabel(x){ return clPlain(x.name) || (x.tag ? "#"+x.tag : "(제목 없음)"); }
function clBullets(c){
  const items = [];
  // 1) 이번 배포에 포함된 커밋 메시지 (여러 건이면 제목 + 하위에 본문 줄)
  const cs = c.commits||[];
  const lines = b => (b||"").split(/\r?\n/).map(s=>s.replace(/^\s*[-*·•]\s*/,"").trim()).filter(Boolean);
  if (cs.length===1) lines(cs[0].body).forEach(s=>items.push(`<li>${clEsc(s)}</li>`));
  else cs.forEach(k=>{
    const sub = lines(k.body).map(s=>`<li>${clEsc(s)}</li>`).join("");
    items.push(`<li>${clEsc(k.subject)} <span class="cl-who">${clEsc(clName(k.author))}</span>${sub?`<ul>${sub}</ul>`:""}</li>`);
  });
  // 2) 카드 변경: 브랜드 › 섹션 › 변경 종류별로 묶어서
  const groups = {};
  (c.changes||[]).forEach(x=>{
    const kinds = x.type==="add" ? ["카드 추가"] : x.type==="del" ? ["카드 삭제"]
      : (x.fields||[]).map(f=> f.field==="본문" ? "문구 수정" : f.field==="매크로명" ? "매크로명 변경" : f.field==="카드명" ? "카드명 변경" : "설명 수정");
    kinds.forEach(k=>{ const g=`${x.brand} › ${x.section}|${k}`; (groups[g]=groups[g]||[]).push(x); });
  });
  Object.keys(groups).forEach(g=>{
    const [where, kind] = g.split("|"), list = groups[g];
    const sub = list.slice(0, CL_LIST_MAX).map(x=>{
      if (kind==="매크로명 변경"){ const f=(x.fields||[]).find(f=>f.field==="매크로명"); return `<li>${clEsc(clCardLabel(x))}: ${clEsc(f.before)} → ${clEsc(f.after)}</li>`; }
      if (kind==="카드명 변경"){ const f=(x.fields||[]).find(f=>f.field==="카드명"); return `<li>${clEsc(clPlain(f.before))} → ${clEsc(clPlain(f.after))}</li>`; }
      return `<li>${clEsc(clCardLabel(x))}</li>`;
    }).join("") + (list.length>CL_LIST_MAX ? `<li>외 ${list.length-CL_LIST_MAX}건</li>` : "");
    items.push(`<li>[${clEsc(where)}] ${kind} ${list.length}건<ul>${sub}</ul></li>`);
  });
  // 3) 요약·화면 변경
  (c.summaries||[]).forEach(s=>items.push(`<li>${clEsc(s)}</li>`));
  if ((c.structure||[]).length) items.push(`<li>화면·구조 변경: ${c.structure.map(clEsc).join(", ")}</li>`);
  return items.length ? `<ul>${items.join("")}</ul>` : `<div style="font-size:12.5px;color:#667085">세부 변경 정보 없음</div>`;
}

function clToggle(hash){ CL_STATE.open[hash]=!CL_STATE.open[hash]; renderChangelogPage(true); }
function clPickDay(k){ CL_STATE.day=k; renderChangelogTree(); renderChangelogPage(false); commitView(); }

function renderChangelogTree(){
  const tree = document.getElementById("tree"); if(!tree) return;
  const by = clByDay(), days = Object.keys(by).sort().reverse();
  if (!CL_STATE.day || !by[CL_STATE.day]) CL_STATE.day = days[0] || null;
  tree.innerHTML = `<div class="group-label">업데이트 내역</div>` + (days.length ? days.map(k=>
    `<div class="leaf ${CL_STATE.day===k?"active":""}" style="display:flex;align-items:center" onclick="clPickDay('${k}')"><span class="dot"></span>${clEsc(clKst(by[k][0].date).day)}<span class="cl-day-cnt">${by[k].length}</span></div>`).join("")
    : `<div style="padding:8px 14px;font-size:11px;color:var(--ink-soft)">내역 없음</div>`);
}

function renderChangelogPage(keepScroll){
  const by = clByDay(), list = (by[CL_STATE.day]||[]);
  let h;
  if (!clAll().length){
    h = `<h1>🕘 업데이트 내역</h1><div class="cl-empty">아직 업데이트 내역이 없습니다.<br>main 배포 시 자동으로 생성됩니다.</div>`;
  } else {
    h = `<h1>🕘 ${clEsc(list.length?clKst(list[0].date).day:"")} 업데이트</h1><div class="sub">배포 ${list.length}건 · 시간을 누르면 변경 내용이 펼쳐집니다</div><div style="margin-top:16px">`;
    h += list.map(c=>{
      const t = clKst(c.date), open = !!CL_STATE.open[c.hash];
      return `<div class="cl-commit ${open?"open":""}"><div class="cl-commit-h" onclick="clToggle('${c.hash}')">`
        + `<span class="cl-arrow">▶</span><span class="cl-time">${clEsc(t.time)}</span>`
        + `<span class="cl-subj">${clEsc(clTitle(c))}</span><span class="cl-who">${clEsc(clWho(c))}</span></div>`
        + (open ? `<div class="cl-body">${clBullets(c)}</div>` : "") + `</div>`;
    }).join("") + `</div>`;
  }
  const sc = document.querySelector(".content"), top = sc ? sc.scrollTop : 0;
  render(h); setCrumb("업데이트 내역" + (CL_STATE.day ? " › "+CL_STATE.day : ""));
  if (keepScroll && sc) sc.scrollTop = top;
}
function renderChangelog(){ renderChangelogTree(); renderChangelogPage(false); }
