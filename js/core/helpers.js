/* =========================================================
   데이터 (이미지 ④⑤ 기반 샘플 + 문구 다듬음)
   실제 전체 문구는 [공통] IB/OB/CS 엑셀로 교체 예정
========================================================= */
const BRAND_LIST = ["슬룸","심플리케어","얼라인랩","빌바","셀올로지","코코다움","12 o'clock","닥터맨즈","와이브닝","마넬","닥터아망"];
const INQUIRY_TYPES = ["단순변심 교환","단순변심 반품","100%환불이벤트","불량 AS 교환/반품","유상 AS","부작용·상해 VOC"];

/* 이스케이프 (shared-templates.js 등에서 content-build.js 로드 전에 참조하므로 여기서 최우선 정의) */
function esc(s){return String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}

/* 콘텐츠 렌더 함수들 -------------------------------------- */
function macro(name, tag, body, desc){
  return `<div class="macro">
    <div class="macro-head">
      ${/^[\u2190-\u2bff\u{1f000}-\u{1faff}]/u.test(name)||/^.{0,2}[\ufe0f\u20e3]/.test(name)||/^(i{1,3}|iv|v)\.\s/.test(name)?"":'<span class="gdot"></span>'}
      <span class="mname">${name}</span>
      <span class="spacer"></span>
      ${tag?`<span class="tag">#${tag}</span>`:""}
      <button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button>
    </div>
    ${desc?`<div class="sc-desc">${desc}</div>`:""}
    <div class="macro-body">${body}</div>
  </div>`;
}

/* 💡 응대지침 & 전산 업무 (내부용 카드) */
function guide(body){
  return `<div class="guide-card">
    <div class="guide-body">${body}</div>
  </div>`;
}

/* 매크로명 없는 일반 카드 (유선·게시판용) */
function note(title, body){
  return `<div class="macro note">
    <div class="macro-head plain">
      <span class="mname">${title}</span>
      <span class="spacer"></span>
      <button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button>
    </div>
    <div class="macro-body">${body}</div>
  </div>`;
}

/* 그룹형 레이아웃 컴포넌트 */
function flowSummary(steps){
  const nums=["①","②","③","④","⑤","⑥","⑦","⑧"];
  return `<div class="flow-box"><div class="flow-box-h">🧭 상담 플로우</div>
    <ol class="flow-ol">${steps.map((s,i)=>`<li>${nums[i]||(i+1)+"."} ${s}</li>`).join("")}</ol></div>`;
}
function notice(items){
  return `<div class="notice-box"><div class="notice-h">⚠️ 유의사항</div>
    <ul>${items.map(i=>`<li>${i}</li>`).join("")}</ul></div>`;
}
function secTitle(n,t,badge,anchor){ const _id=anchor||("sec"+n); return `<div class="sec-title" id="${_id}"><span class="sec-n">${n}</span>${t}${badge?`<span class="sec-badge common">${badge}</span>`:""}</div>`; }
function secMajor(n,t,badge,anchor){ const _id=anchor||("sec"+n); return `<div class="sec-title sec-major" id="${_id}"><span class="sec-n">${n}</span>${t}${badge?`<span class="sec-badge common">${badge}</span>`:""}</div>`; }
/* 복사 없는 내부 주의/안내 메모 */
function caution(body){ return `<div class="star-note"><div class="star-body">${body}</div></div>`; }
function col(cls,head,inner){ return `<div class="col-card"><div class="col-h ${cls}"><span>${head}</span></div><div class="col-body">${inner}</div></div>`; }
/* 전체/부분 등 2열 비교표 */
function cmpTable(cols,rows){
  const head=`<tr><th class="cmp-corner"></th>${cols.map(c=>`<th class="${c.cls?`cmp-${c.cls}`:""}">${c.label}</th>`).join("")}</tr>`;
  const body=rows.map(r=>`<tr><td class="cmp-row-label">${r.label}</td>${r.values.map(v=>`<td>${v}</td>`).join("")}</tr>`).join("");
  return `<div class="cmp-table-wrap"><table class="cmp-table"><thead>${head}</thead><tbody>${body}</tbody></table></div>`;
}
/* 헤더에 매크로명(#태그)+복사 버튼을 넣고, 본문은 라벨 없이 (공통 안내 섹션용) */
function colTag(cls,head,tag,body){
  return `<div class="col-card"><div class="col-h ${cls}"><span>${head}</span><span class="spacer"></span>${tag?`<span class="ct-tag">#${tag}</span>`:""}<button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button></div><div class="col-body-plain">${body}</div></div>`;
}
function subcard(label,tag,body,desc){
  return `<div class="subcard"><div class="subcard-h"><span class="sc-label">${label}</span><span class="spacer"></span>${tag?`<span class="tag">#${tag}</span>`:""}<button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button></div>${desc?`<div class="sc-desc">${desc}</div>`:""}<div class="subcard-body">${body}</div></div>`;
}
function starNote(title,body){ return `<div class="star-note"><div class="star-h"><b>★ ${title}</b><span class="spacer"></span></div><div class="star-body">${body}</div></div>`; }
function blueNote(title,body){ return `<div class="blue-note"><div class="bn-h"><b>${title}</b><span class="spacer"></span></div><div class="bn-body">${body}</div></div>`; }
/* 무상 접수 기간 제한 안내 박스 (A그룹 AS 페이지 공통, 2026-08-28 인라인 스타일 → 헬퍼 통합) */
function limitNotice(caseLabel,body){
  return `<div class="limit-notice"><div class="limit-notice-h">💡 무상 접수 기간 제한 <span class="limit-notice-sub">· ${caseLabel}</span></div><table class="limit-notice-table"><tbody><tr><td class="limit-notice-day">📅 수령일 7일 이내</td><td class="limit-notice-body">${body}</td></tr></tbody></table></div>`;
}
/* 보증기간 단종 EDGE CASE 2열 비교 (A그룹 AS 페이지 공통, 2026-08-28 인라인 스타일 → 헬퍼 통합) */
function edgeCaseCompare(bodyIn,bodyOut){
  return `<div class="edge-compare"><div class="edge-compare-col"><div class="edge-compare-h">★ EDGE CASE · 보증기간(1년) '<span class="edge-compare-hi">이내</span>' 단종</div><div class="edge-compare-body">${bodyIn}</div></div><div class="edge-compare-col edge-compare-col-r"><div class="edge-compare-h">★ EDGE CASE · 보증기간(1년) '<span class="edge-compare-hi">경과</span>' 단종</div><div class="edge-compare-body">${bodyOut}</div></div></div>`;
}

/* 슬룸 > 반품 > 단순변심 반품 · 단계별 (이미지 ④⑤ 재구성) */
