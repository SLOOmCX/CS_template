/* =========================================================
   데이터 (이미지 ④⑤ 기반 샘플 + 문구 다듬음)
   실제 전체 문구는 [공통] IB/OB/CS 엑셀로 교체 예정
========================================================= */
const BRAND_LIST = ["슬룸","심플리케어","얼라인랩","빌바","셀올로지","코코다움","12 o'clock","닥터맨즈","와이브닝","마넬","닥터아망"];
const INQUIRY_TYPES = ["단순변심 교환","단순변심 반품","100%환불이벤트","불량 AS 교환/반품","유상 AS","부작용·상해 VOC"];

/* 이스케이프 (shared-templates.js 등에서 content-build.js 로드 전에 참조하므로 여기서 최우선 정의) */
function esc(s){return String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}

/* 콘텐츠 렌더 함수들 -------------------------------------- */
function macro(name, tag, body, desc, contentKey, contentBrand, noCopy, noHead){
  const _dk = contentKey?` data-content-key="${contentKey}"${contentBrand?` data-content-brand="${contentBrand}"`:""}`:"";
  return `<div class="macro"${_dk}>
    ${noHead?"":`<div class="macro-head">
      ${/^[\u2190-\u2bff\u{1f000}-\u{1faff}]/u.test(name)||/^.{0,2}[\ufe0f\u20e3]/.test(name)||/^(i{1,3}|iv|v)\.\s/.test(name)?"":'<span class="gdot"></span>'}
      <span class="mname">${name}</span>
      <span class="spacer"></span>
      ${tag?`<span class="tag">#${tag}</span>`:""}
      ${noCopy?"":'<button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button>'}
    </div>`}
    ${desc?`<div class="sc-desc">${desc}</div>`:""}
    <div class="macro-body">${body}</div>
  </div>`;
}

/* 알리고 템플릿 토글(아코디언) — 클릭 시 펼쳐지는 매크로 카드. code는 "#" 없이 표시. label은 접두어 없이 그대로 노출.
   행(row)에 복사 버튼을 두어 펼치지 않아도 바로 복사 가능. 템플릿코드는 드래그 선택도 가능(알리고 검색용).
   패널 내부 macro 카드는 복사버튼을 별도로 만들지 않음(noCopy) — 즐겨찾기 id가 행의 코드 기준 하나로 유지되게 함 */
function cbTpl(label, code, body, desc){
  return `<div class="cb-tpl">
    <div class="cb-tpl-row" onclick="cbToggleTpl(this)">
      <span class="cb-tpl-ico">🔻</span>
      <span class="cb-tpl-label">${label}</span>
      ${code?`<span class="tag cb-tpl-code" onclick="event.stopPropagation()" title="드래그하여 템플릿코드 복사 (알리고 검색용)">${code}</span>`:""}
      <span class="spacer"></span>
      <button class="copy-btn" onclick="event.stopPropagation();copyMacro(this)" title="복사">📋</button>
      <span class="cb-tpl-caret">펼치기 ▾</span>
    </div>
    <div class="cb-tpl-panel">${macro(label, null, body, desc, null, null, true, true)}</div>
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
function secTitle(n,t,badge,anchor){ const _id=anchor||("sec"+n); const _cls=/^\d+$/.test(n)?"sec-n":"sec-n sec-n-icon"; return `<div class="sec-title" id="${_id}"><span class="${_cls}">${n}</span>${t}${badge?`<span class="sec-badge common">${badge}</span>`:""}</div>`; }
function secMajor(n,t,badge,anchor){ const _id=anchor||("sec"+n); const _cls=/^\d+$/.test(n)?"sec-n":"sec-n sec-n-icon"; return `<div class="sec-title sec-major" id="${_id}"><span class="${_cls}">${n}</span>${t}${badge?`<span class="sec-badge common">${badge}</span>`:""}</div>`; }
/* 복사 없는 내부 주의/안내 메모 */
function caution(body){ return `<div class="star-note"><div class="star-body">${body}</div></div>`; }
function col(cls,head,inner){ return `<div class="col-card"><div class="col-h ${cls}"><span>${head}</span></div><div class="col-body">${inner}</div></div>`; }
/* 전체/부분 등 2열 비교표. rows[i].keys가 있으면 values[i]와 같은 인덱스로 매칭해 셀별 data-content-key 부여(contentBrand는 표 전체 공통, 2026-08-31 편집기 확장) */
function cmpTable(cols,rows,contentBrand){
  const head=`<tr><th class="cmp-corner"></th>${cols.map(c=>`<th class="${c.cls?`cmp-${c.cls}`:""}">${c.label}</th>`).join("")}</tr>`;
  const body=rows.map(r=>{
    const cells=r.values.map((v,i)=>{
      const k=r.keys&&r.keys[i];
      const _dk=k?` data-content-key="${k}"${contentBrand?` data-content-brand="${contentBrand}"`:""}`:"";
      return `<td${_dk}>${v}</td>`;
    }).join("");
    return `<tr><td class="cmp-row-label">${r.label}</td>${cells}</tr>`;
  }).join("");
  return `<div class="cmp-table-wrap"><table class="cmp-table"><thead>${head}</thead><tbody>${body}</tbody></table></div>`;
}
/* 헤더에 매크로명(#태그)+복사 버튼을 넣고, 본문은 라벨 없이 (공통 안내 섹션용). contentKey/contentBrand는 head(라벨)+body 편집용(2026-08-31 확장) */
function colTag(cls,head,tag,body,contentKey,contentBrand){
  const _dk = contentKey?` data-content-key="${contentKey}"${contentBrand?` data-content-brand="${contentBrand}"`:""}`:"";
  return `<div class="col-card"${_dk}><div class="col-h ${cls}"><span>${head}</span><span class="spacer"></span>${tag?`<span class="ct-tag">#${tag}</span>`:""}<button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button></div><div class="col-body-plain">${body}</div></div>`;
}
function subcard(label,tag,body,desc,contentKey,contentBrand){
  const _dk = contentKey?` data-content-key="${contentKey}"${contentBrand?` data-content-brand="${contentBrand}"`:""}`:"";
  return `<div class="subcard"${_dk}><div class="subcard-h"><span class="sc-label">${label}</span><span class="spacer"></span>${tag?`<span class="tag">#${tag}</span>`:""}<button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button></div>${desc?`<div class="sc-desc">${desc}</div>`:""}<div class="subcard-body">${body}</div></div>`;
}
/* contentKey/contentBrand는 title(라벨)+body 편집용(2026-08-31 확장) */
function starNote(title,body,contentKey,contentBrand){
  const _dk = contentKey?` data-content-key="${contentKey}"${contentBrand?` data-content-brand="${contentBrand}"`:""}`:"";
  return `<div class="star-note"${_dk}><div class="star-h"><b>★ ${title}</b><span class="spacer"></span></div><div class="star-body">${body}</div></div>`;
}
function blueNote(title,body,contentKey,contentBrand){
  const _dk = contentKey?` data-content-key="${contentKey}"${contentBrand?` data-content-brand="${contentBrand}"`:""}`:"";
  return `<div class="blue-note"${_dk}><div class="bn-h"><b>${title}</b><span class="spacer"></span></div><div class="bn-body">${body}</div></div>`;
}
/* 무상 접수 기간 제한 안내 박스 (A그룹 AS 페이지 공통, 2026-08-28 인라인 스타일 → 헬퍼 통합). contentKey/contentBrand는 caseLabel+body 편집용(2026-08-31 확장) */
function limitNotice(caseLabel,body,contentKey,contentBrand){
  const _dk = contentKey?` data-content-key="${contentKey}"${contentBrand?` data-content-brand="${contentBrand}"`:""}`:"";
  return `<div class="limit-notice"${_dk}><div class="limit-notice-h">💡 무상 접수 기간 제한 <span class="limit-notice-sub">· ${caseLabel}</span></div><table class="limit-notice-table"><tbody><tr><td class="limit-notice-day">📅 수령일 7일 이내</td><td class="limit-notice-body">${body}</td></tr></tbody></table></div>`;
}
/* 보증기간 단종 EDGE CASE 2열 비교 (A그룹 AS 페이지 공통, 2026-08-28 인라인 스타일 → 헬퍼 통합). contentKeyIn/contentKeyOut 각각 별도 편집 키(2026-08-31 확장, contentBrand는 두 칸 공통) */
function edgeCaseCompare(bodyIn,bodyOut,contentKeyIn,contentKeyOut,contentBrand){
  const dkIn = contentKeyIn?` data-content-key="${contentKeyIn}"${contentBrand?` data-content-brand="${contentBrand}"`:""}`:"";
  const dkOut = contentKeyOut?` data-content-key="${contentKeyOut}"${contentBrand?` data-content-brand="${contentBrand}"`:""}`:"";
  return `<div class="edge-compare"><div class="edge-compare-col"${dkIn}><div class="edge-compare-h">★ EDGE CASE · 보증기간(1년) '<span class="edge-compare-hi">이내</span>' 단종</div><div class="edge-compare-body">${bodyIn}</div></div><div class="edge-compare-col edge-compare-col-r"${dkOut}><div class="edge-compare-h">★ EDGE CASE · 보증기간(1년) '<span class="edge-compare-hi">경과</span>' 단종</div><div class="edge-compare-body">${bodyOut}</div></div></div>`;
}

/* 슬룸 > 반품 > 단순변심 반품 · 단계별 (이미지 ④⑤ 재구성) */
