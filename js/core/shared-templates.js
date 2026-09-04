/* === 단순변심 통합 시안 (2026-08-13) — 슬룸 한정 병합 템플릿, 기존 REF_SIMPLE/REF_EXCHANGE 원문 재배치 === */
const COMMON_IB = `
  <h1>📥 인바운드(IB) 공통</h1>
  <div class="sub">고객이 먼저 문의한 경우 · 상황 순서대로</div>
  <div class="hint">💡 <b>순서</b> : 첫인사 → 본인 확인 → 대기/보류 안내 → 상담 종료. 채널톡·유선 공통으로 사용합니다.</div>
  ${macro(D_SHARED["ib__001"].name, D_SHARED["ib__001"].tag, D_SHARED["ib__001"].body, D_SHARED["ib__001"].desc, "ib__001", "shared")}
  ${macro(D_SHARED["ib__002"].name, D_SHARED["ib__002"].tag, D_SHARED["ib__002"].body, D_SHARED["ib__002"].desc, "ib__002", "shared")}
  ${macro(D_SHARED["ib__003"].name, D_SHARED["ib__003"].tag, D_SHARED["ib__003"].body, D_SHARED["ib__003"].desc, "ib__003", "shared")}
  ${macro(D_SHARED["ib__004"].name, D_SHARED["ib__004"].tag, D_SHARED["ib__004"].body, D_SHARED["ib__004"].desc, "ib__004", "shared")}
`;
const COMMON_OB = `
  <h1>📤 아웃바운드(OB) 공통</h1>
  <div class="sub">우리가 먼저 연락하는 경우 · 상황 순서대로</div>
  <div class="hint">💡 <b>순서</b> : 발신 첫인사 → (부재 시) 부재 안내 문자 → 해피콜/재통화 약속.</div>
  ${macro(D_SHARED["ob__001"].name, D_SHARED["ob__001"].tag, D_SHARED["ob__001"].body, D_SHARED["ob__001"].desc, "ob__001", "shared")}
  ${macro(D_SHARED["ob__002"].name, D_SHARED["ob__002"].tag, D_SHARED["ob__002"].body, D_SHARED["ob__002"].desc, "ob__002", "shared")}
  ${macro(D_SHARED["ob__003"].name, D_SHARED["ob__003"].tag, D_SHARED["ob__003"].body, D_SHARED["ob__003"].desc, "ob__003", "shared")}
`;

const BOARD_ALL = `
  <h1>📝 게시판 (비실시간)</h1>
      <div class="sub">1:1 문의·FAQ·댓글 등 비실시간 게시판 응대 템플릿 · 브랜드별 멘트는 복사 버튼 사용</div>
  ${secTitle("📋","1:1·FAQ·댓글 공통 양식","자사몰·커머스","b_form")}
  <div class="grp-h" id="b_form_1">[전브랜드] 첫인사 (1:1·FAQ)</div>
  ${caution(`1:1 문의·FAQ·댓글 응대 시 사용 · 끝인사는 클레임에 사용 금지`)}
  <div class="cmp-table-wrap"><table class="cmp-table"><thead><tr><th class="cmp-corner">브랜드</th><th class="cmp-blue">첫인사 멘트</th><th class="cmp-corner">브랜드</th><th class="cmp-blue">첫인사 멘트</th></tr></thead><tbody><tr><td class="cmp-row-label">슬룸</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_greet__sloom" data-content-brand="shared">${D_SHARED["cmp_greet__sloom"].body}</div></td><td class="cmp-row-label">심플리케어</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_greet__simplicare" data-content-brand="shared">${D_SHARED["cmp_greet__simplicare"].body}</div></td></tr><tr><td class="cmp-row-label">얼라인랩</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_greet__alignlab" data-content-brand="shared">${D_SHARED["cmp_greet__alignlab"].body}</div></td><td class="cmp-row-label">빌바</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_greet__bilba" data-content-brand="shared">${D_SHARED["cmp_greet__bilba"].body}</div></td></tr><tr><td class="cmp-row-label">셀올로지</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_greet__cellology" data-content-brand="shared">${D_SHARED["cmp_greet__cellology"].body}</div></td><td class="cmp-row-label">코코다움</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_greet__cocodaum" data-content-brand="shared">${D_SHARED["cmp_greet__cocodaum"].body}</div></td></tr><tr><td class="cmp-row-label">12 o'clock</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_greet__oclock" data-content-brand="shared">${D_SHARED["cmp_greet__oclock"].body}</div></td><td class="cmp-row-label">닥터맨즈</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_greet__drmans" data-content-brand="shared">${D_SHARED["cmp_greet__drmans"].body}</div></td></tr><tr><td class="cmp-row-label">와이브닝</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_greet__yvening" data-content-brand="shared">${D_SHARED["cmp_greet__yvening"].body}</div></td><td class="cmp-row-label">마넬</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_greet__marnell" data-content-brand="shared">${D_SHARED["cmp_greet__marnell"].body}</div></td></tr><tr><td class="cmp-row-label">닥터아망</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_greet__dramang" data-content-brand="shared">${D_SHARED["cmp_greet__dramang"].body}</div></td><td class="cmp-row-label"></td><td></td></tr></tbody></table></div>
  <div class="grp-h">[공통] 끝인사 (1:1·FAQ)</div>
  ${macro(D_SHARED["board__001"].name, D_SHARED["board__001"].tag, D_SHARED["board__001"].body, D_SHARED["board__001"].desc, "board__001", "shared")}
  <div class="grp-h" id="b_form_2">[전브랜드] 채팅 상담 유도 (사진·정보·실시간 상담 필요 시)</div>
  ${caution(`문의 내용에 사진·고객 정보·실시간 상담 등이 필요해 채팅 상담으로 유도할 경우 사용`)}
  <div class="cmp-table-wrap"><table class="cmp-table"><thead><tr><th class="cmp-corner">브랜드</th><th class="cmp-blue">채팅 상담 유도 멘트</th></tr></thead><tbody><tr><td class="cmp-row-label">슬룸</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_chatlead__sloom" data-content-brand="shared">${D_SHARED["cmp_chatlead__sloom"].body}</div></td></tr><tr><td class="cmp-row-label">심플리케어</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_chatlead__simplicare" data-content-brand="shared">${D_SHARED["cmp_chatlead__simplicare"].body}</div></td></tr><tr><td class="cmp-row-label">얼라인랩</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_chatlead__alignlab" data-content-brand="shared">${D_SHARED["cmp_chatlead__alignlab"].body}</div></td></tr><tr><td class="cmp-row-label">빌바</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_chatlead__bilba" data-content-brand="shared">${D_SHARED["cmp_chatlead__bilba"].body}</div></td></tr><tr><td class="cmp-row-label">셀올로지</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_chatlead__cellology" data-content-brand="shared">${D_SHARED["cmp_chatlead__cellology"].body}</div></td></tr><tr><td class="cmp-row-label">코코다움</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_chatlead__cocodaum" data-content-brand="shared">${D_SHARED["cmp_chatlead__cocodaum"].body}</div></td></tr><tr><td class="cmp-row-label">12 o'clock</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_chatlead__oclock" data-content-brand="shared">${D_SHARED["cmp_chatlead__oclock"].body}</div></td></tr><tr><td class="cmp-row-label">닥터맨즈</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_chatlead__drmans" data-content-brand="shared">${D_SHARED["cmp_chatlead__drmans"].body}</div></td></tr><tr><td class="cmp-row-label">와이브닝</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_chatlead__yvening" data-content-brand="shared">${D_SHARED["cmp_chatlead__yvening"].body}</div></td></tr><tr><td class="cmp-row-label">마넬</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_chatlead__marnell" data-content-brand="shared">${D_SHARED["cmp_chatlead__marnell"].body}</div></td></tr><tr><td class="cmp-row-label">닥터아망</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_chatlead__dramang" data-content-brand="shared">${D_SHARED["cmp_chatlead__dramang"].body}</div></td></tr></tbody></table></div>
  <div class="grp-h" id="b_form_3">[전브랜드] 고객센터 안내 (문자·1:1 문의)</div>
  ${caution(`문자·1:1 문의에 고객센터를 안내할 경우 아래 양식으로 일괄 통일`)}
  <div class="cmp-table-wrap"><table class="cmp-table"><thead><tr><th class="cmp-corner">브랜드</th><th class="cmp-blue">고객센터 안내 멘트</th></tr></thead><tbody><tr><td class="cmp-row-label">슬룸</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_csinfo__sloom" data-content-brand="shared">${D_SHARED["cmp_csinfo__sloom"].body}</div></td></tr><tr><td class="cmp-row-label">심플리케어</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_csinfo__simplicare" data-content-brand="shared">${D_SHARED["cmp_csinfo__simplicare"].body}</div></td></tr><tr><td class="cmp-row-label">얼라인랩</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_csinfo__alignlab" data-content-brand="shared">${D_SHARED["cmp_csinfo__alignlab"].body}</div></td></tr><tr><td class="cmp-row-label">빌바</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_csinfo__bilba" data-content-brand="shared">${D_SHARED["cmp_csinfo__bilba"].body}</div></td></tr><tr><td class="cmp-row-label">셀올로지</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_csinfo__cellology" data-content-brand="shared">${D_SHARED["cmp_csinfo__cellology"].body}</div></td></tr><tr><td class="cmp-row-label">코코다움</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_csinfo__cocodaum" data-content-brand="shared">${D_SHARED["cmp_csinfo__cocodaum"].body}</div></td></tr><tr><td class="cmp-row-label">12 o'clock</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_csinfo__oclock" data-content-brand="shared">${D_SHARED["cmp_csinfo__oclock"].body}</div></td></tr><tr><td class="cmp-row-label">닥터맨즈</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_csinfo__drmans" data-content-brand="shared">${D_SHARED["cmp_csinfo__drmans"].body}</div></td></tr><tr><td class="cmp-row-label">와이브닝</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_csinfo__yvening" data-content-brand="shared">${D_SHARED["cmp_csinfo__yvening"].body}</div></td></tr><tr><td class="cmp-row-label">마넬</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_csinfo__marnell" data-content-brand="shared">${D_SHARED["cmp_csinfo__marnell"].body}</div></td></tr><tr><td class="cmp-row-label">닥터아망</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_csinfo__dramang" data-content-brand="shared">${D_SHARED["cmp_csinfo__dramang"].body}</div></td></tr></tbody></table></div>
  ${secTitle("📄","문의 유형별 템플릿","자사몰·커머스","b_type")}
  <div class="grp-h" id="b_type_1">[슬룸] 불량 반품·교환·AS 상담 요청</div>
  ${macro(D_SHARED["board__002"].name, D_SHARED["board__002"].tag, D_SHARED["board__002"].body, D_SHARED["board__002"].desc, "board__002", "shared")}
  <div class="grp-h" id="b_type_2">[슬룸] 네이버페이 주문형 환불금 송금 입금 안내</div>
  ${macro(D_SHARED["board__003"].name, D_SHARED["board__003"].tag, D_SHARED["board__003"].body, D_SHARED["board__003"].desc, "board__003", "shared")}
  <div class="grp-h" id="b_type_3">[슬룸] 100% 환불 이벤트 안내</div>
  ${macro(D_SHARED["board__004"].name, D_SHARED["board__004"].tag, D_SHARED["board__004"].body, D_SHARED["board__004"].desc, "board__004", "shared")}
  <div class="grp-h" id="b_type_4">[전브랜드] 교환/반품 사유 확인 필요 시</div>
  ${caution(`반품·교환 사유 확인 등 절차가 필요해 채팅 상담으로 접수 유도할 경우 사용`)}
  <div class="cmp-table-wrap"><table class="cmp-table"><thead><tr><th class="cmp-corner">브랜드</th><th class="cmp-blue">교환/반품 사유 확인 멘트</th></tr></thead><tbody><tr><td class="cmp-row-label">슬룸</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_reasonchk__sloom" data-content-brand="shared">${D_SHARED["cmp_reasonchk__sloom"].body}</div></td></tr><tr><td class="cmp-row-label">심플리케어</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_reasonchk__simplicare" data-content-brand="shared">${D_SHARED["cmp_reasonchk__simplicare"].body}</div></td></tr><tr><td class="cmp-row-label">얼라인랩</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_reasonchk__alignlab" data-content-brand="shared">${D_SHARED["cmp_reasonchk__alignlab"].body}</div></td></tr><tr><td class="cmp-row-label">빌바</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_reasonchk__bilba" data-content-brand="shared">${D_SHARED["cmp_reasonchk__bilba"].body}</div></td></tr><tr><td class="cmp-row-label">셀올로지</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_reasonchk__cellology" data-content-brand="shared">${D_SHARED["cmp_reasonchk__cellology"].body}</div></td></tr><tr><td class="cmp-row-label">코코다움</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_reasonchk__cocodaum" data-content-brand="shared">${D_SHARED["cmp_reasonchk__cocodaum"].body}</div></td></tr><tr><td class="cmp-row-label">12 o'clock</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_reasonchk__oclock" data-content-brand="shared">${D_SHARED["cmp_reasonchk__oclock"].body}</div></td></tr><tr><td class="cmp-row-label">닥터맨즈</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_reasonchk__drmans" data-content-brand="shared">${D_SHARED["cmp_reasonchk__drmans"].body}</div></td></tr><tr><td class="cmp-row-label">와이브닝</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_reasonchk__yvening" data-content-brand="shared">${D_SHARED["cmp_reasonchk__yvening"].body}</div></td></tr><tr><td class="cmp-row-label">마넬</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_reasonchk__marnell" data-content-brand="shared">${D_SHARED["cmp_reasonchk__marnell"].body}</div></td></tr><tr><td class="cmp-row-label">닥터아망</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_reasonchk__dramang" data-content-brand="shared">${D_SHARED["cmp_reasonchk__dramang"].body}</div></td></tr></tbody></table></div>

  ${secTitle("📦","[슬룸] 외부몰 유형별 템플릿",null,"b_ext")}
  <div class="quote-box"><b>📌 이 템플릿은 외부몰 고객문의 답변 기준입니다</b>
<span style="color:#9b6829;font-weight:800">고객센터 문의(외부몰 상담사) 답변 시에는 템플릿을 그대로 복사하지 말고, 인사말·문장·톤을 상황에 맞게 수정하여 사용</span><br><br>📌 <b>배송·기타 문의 응대 방법</b><br>별도 템플릿은 사용하지 않으며, 아래 순서대로 조합하여 발송<br>① 외부몰 첫인사 → ② 채팅 표준 응대 템플릿 본문(원문 그대로) → ③ 외부몰 끝인사<br>※ 채팅 표준 응대 템플릿만 원본으로 관리하며, 외부몰에서는 첫인사와 끝인사만 조합하여 사용</div>
  <div class="grp-h" id="b_ext_1">1. 일반 문의</div>
  <div class="grid2">${macro(D_SHARED["board__005"].name, D_SHARED["board__005"].tag, D_SHARED["board__005"].body, D_SHARED["board__005"].desc, "board__005", "shared")}${macro(D_SHARED["board__006"].name, D_SHARED["board__006"].tag, D_SHARED["board__006"].body, D_SHARED["board__006"].desc, "board__006", "shared")}</div>
  <div class="grid2">${macro(D_SHARED["board__007"].name, D_SHARED["board__007"].tag, D_SHARED["board__007"].body, D_SHARED["board__007"].desc, "board__007", "shared")}${macro(D_SHARED["board__008"].name, D_SHARED["board__008"].tag, D_SHARED["board__008"].body, D_SHARED["board__008"].desc, "board__008", "shared")}</div>
  <div class="grp-h" id="b_ext_2">2. 제품별 사용법</div>
  <div class="grp-h" id="b_ext_2a">🧍 등·허리 제품</div>
  <div class="grid2">${macro(D_SHARED["board__009"].name, D_SHARED["board__009"].tag, D_SHARED["board__009"].body, D_SHARED["board__009"].desc, "board__009", "shared")}${macro(D_SHARED["board__010"].name, D_SHARED["board__010"].tag, D_SHARED["board__010"].body, D_SHARED["board__010"].desc, "board__010", "shared")}</div>
  <div class="grid2">${macro(D_SHARED["board__011"].name, D_SHARED["board__011"].tag, D_SHARED["board__011"].body, D_SHARED["board__011"].desc, "board__011", "shared")}${macro(D_SHARED["board__012"].name, D_SHARED["board__012"].tag, D_SHARED["board__012"].body, D_SHARED["board__012"].desc, "board__012", "shared")}</div>
  <div class="v2-nest">
  <div class="grp-h" id="b_ext_3">✨ [허편케V2] 사용법 오인</div>
  <div class="grid2">${macro(D_SHARED["board__013"].name, D_SHARED["board__013"].tag, D_SHARED["board__013"].body, D_SHARED["board__013"].desc, "board__013", "shared")}${macro(D_SHARED["board__014"].name, D_SHARED["board__014"].tag, D_SHARED["board__014"].body, D_SHARED["board__014"].desc, "board__014", "shared")}</div>
  <div class="grid2">${macro(D_SHARED["board__015"].name, D_SHARED["board__015"].tag, D_SHARED["board__015"].body, D_SHARED["board__015"].desc, "board__015", "shared")}${macro(D_SHARED["board__016"].name, D_SHARED["board__016"].tag, D_SHARED["board__016"].body, D_SHARED["board__016"].desc, "board__016", "shared")}</div>
  ${macro(D_SHARED["board__017"].name, D_SHARED["board__017"].tag, D_SHARED["board__017"].body, D_SHARED["board__017"].desc, "board__017", "shared")}
  </div>
  <div class="grp-h" id="b_ext_2b">💆 목·어깨 제품</div>
  <div class="grid2">${macro(D_SHARED["board__018"].name, D_SHARED["board__018"].tag, D_SHARED["board__018"].body, D_SHARED["board__018"].desc, "board__018", "shared")}${macro(D_SHARED["board__019"].name, D_SHARED["board__019"].tag, D_SHARED["board__019"].body, D_SHARED["board__019"].desc, "board__019", "shared")}</div>
  <div class="grid2">${macro(D_SHARED["board__020"].name, D_SHARED["board__020"].tag, D_SHARED["board__020"].body, D_SHARED["board__020"].desc, "board__020", "shared")}${macro(D_SHARED["board__021"].name, D_SHARED["board__021"].tag, D_SHARED["board__021"].body, D_SHARED["board__021"].desc, "board__021", "shared")}</div>
  <div class="grid2">${macro(D_SHARED["board__022"].name, D_SHARED["board__022"].tag, D_SHARED["board__022"].body, D_SHARED["board__022"].desc, "board__022", "shared")}${macro(D_SHARED["board__023"].name, D_SHARED["board__023"].tag, D_SHARED["board__023"].body, D_SHARED["board__023"].desc, "board__023", "shared")}</div>
  <div class="grid2">${macro(D_SHARED["board__024"].name, D_SHARED["board__024"].tag, D_SHARED["board__024"].body, D_SHARED["board__024"].desc, "board__024", "shared")}${macro(D_SHARED["board__025"].name, D_SHARED["board__025"].tag, D_SHARED["board__025"].body, D_SHARED["board__025"].desc, "board__025", "shared")}</div>
  <div class="grp-h" id="b_ext_2c">🦵🏻 발·종아리 제품</div>
  <div class="grid2">${macro(D_SHARED["board__026"].name, D_SHARED["board__026"].tag, D_SHARED["board__026"].body, D_SHARED["board__026"].desc, "board__026", "shared")}${macro(D_SHARED["board__027"].name, D_SHARED["board__027"].tag, D_SHARED["board__027"].body, D_SHARED["board__027"].desc, "board__027", "shared")}</div>
  ${macro(D_SHARED["board__028"].name, D_SHARED["board__028"].tag, D_SHARED["board__028"].body, D_SHARED["board__028"].desc, "board__028", "shared")}
  <div class="grp-h" id="b_ext_2d">🖐️ 손·눈·팔 제품</div>
  <div class="grid2">${macro(D_SHARED["board__029"].name, D_SHARED["board__029"].tag, D_SHARED["board__029"].body, D_SHARED["board__029"].desc, "board__029", "shared")}${macro(D_SHARED["board__030"].name, D_SHARED["board__030"].tag, D_SHARED["board__030"].body, D_SHARED["board__030"].desc, "board__030", "shared")}</div>
  ${macro(D_SHARED["board__031"].name, D_SHARED["board__031"].tag, D_SHARED["board__031"].body, D_SHARED["board__031"].desc, "board__031", "shared")}
  <div class="grp-h" id="b_ext_2e">🧖 전신·바디케어 제품</div>
  <div class="grid2">${macro(D_SHARED["board__032"].name, D_SHARED["board__032"].tag, D_SHARED["board__032"].body, D_SHARED["board__032"].desc, "board__032", "shared")}${macro(D_SHARED["board__033"].name, D_SHARED["board__033"].tag, D_SHARED["board__033"].body, D_SHARED["board__033"].desc, "board__033", "shared")}</div>
  <div class="grp-h" id="b_ext_2f">🎁 카카오톡 선물하기</div>
  ${macro(D_SHARED["board__034"].name, D_SHARED["board__034"].tag, D_SHARED["board__034"].body, D_SHARED["board__034"].desc, "board__034", "shared")}
  <div class="grp-h" id="b_ext_4">3. 반품·교환·AS</div>
  <div class="grid2">${macro(D_SHARED["board__035"].name, D_SHARED["board__035"].tag, D_SHARED["board__035"].body, D_SHARED["board__035"].desc, "board__035", "shared")}${macro(D_SHARED["board__036"].name, D_SHARED["board__036"].tag, D_SHARED["board__036"].body, D_SHARED["board__036"].desc, "board__036", "shared")}</div>
`;

/* =========================================================
   메뉴 구성
========================================================= */



const COMMON_ALL = `

  <h1>💬 채팅 표준 응대</h1>
    <div class="sub">전 브랜드 공통 응대 · 브랜드별 차이는 표/카드로 표기</div>

  ${secTitle("💡","공통 기본","전 브랜드 공통","c_basic")}
  <div class="grp-h" id="c_basic_0">0. 브랜드별 개요</div>
  <div class="cmp-table-wrap"><table class="cmp-table"><thead><tr><th class="cmp-corner">브랜드</th><th class="cmp-blue">캐치프라이즈</th><th class="cmp-blue">대표번호</th><th class="cmp-blue">채팅</th></tr></thead><tbody><tr><td class="cmp-row-label">슬룸</td><td data-content-key="cmp_catch__sloom" data-content-brand="shared">${D_SHARED["cmp_catch__sloom"].body}</td><td data-content-key="cmp_phone__sloom" data-content-brand="shared">${D_SHARED["cmp_phone__sloom"].body}</td><td data-content-key="cmp_chatlink__sloom" data-content-brand="shared">${D_SHARED["cmp_chatlink__sloom"].body}</td></tr><tr><td class="cmp-row-label">심플리케어</td><td data-content-key="cmp_catch__simplicare" data-content-brand="shared">${D_SHARED["cmp_catch__simplicare"].body}</td><td data-content-key="cmp_phone__simplicare" data-content-brand="shared">${D_SHARED["cmp_phone__simplicare"].body}</td><td data-content-key="cmp_chatlink__simplicare" data-content-brand="shared">${D_SHARED["cmp_chatlink__simplicare"].body}</td></tr><tr><td class="cmp-row-label">얼라인랩</td><td data-content-key="cmp_catch__alignlab" data-content-brand="shared">${D_SHARED["cmp_catch__alignlab"].body}</td><td data-content-key="cmp_phone__alignlab" data-content-brand="shared">${D_SHARED["cmp_phone__alignlab"].body}</td><td data-content-key="cmp_chatlink__alignlab" data-content-brand="shared">${D_SHARED["cmp_chatlink__alignlab"].body}</td></tr><tr><td class="cmp-row-label">빌바</td><td data-content-key="cmp_catch__bilba" data-content-brand="shared">${D_SHARED["cmp_catch__bilba"].body}</td><td data-content-key="cmp_phone__bilba" data-content-brand="shared">${D_SHARED["cmp_phone__bilba"].body}</td><td data-content-key="cmp_chatlink__bilba" data-content-brand="shared">${D_SHARED["cmp_chatlink__bilba"].body}</td></tr><tr><td class="cmp-row-label">셀올로지</td><td data-content-key="cmp_catch__cellology" data-content-brand="shared">${D_SHARED["cmp_catch__cellology"].body}</td><td data-content-key="cmp_phone__cellology" data-content-brand="shared">${D_SHARED["cmp_phone__cellology"].body}</td><td data-content-key="cmp_chatlink__cellology" data-content-brand="shared">${D_SHARED["cmp_chatlink__cellology"].body}</td></tr><tr><td class="cmp-row-label">코코다움</td><td data-content-key="cmp_catch__cocodaum" data-content-brand="shared">${D_SHARED["cmp_catch__cocodaum"].body}</td><td data-content-key="cmp_phone__cocodaum" data-content-brand="shared">${D_SHARED["cmp_phone__cocodaum"].body}</td><td data-content-key="cmp_chatlink__cocodaum" data-content-brand="shared">${D_SHARED["cmp_chatlink__cocodaum"].body}</td></tr><tr><td class="cmp-row-label">12 o'clock</td><td data-content-key="cmp_catch__oclock" data-content-brand="shared">${D_SHARED["cmp_catch__oclock"].body}</td><td>없음</td><td data-content-key="cmp_chatlink__oclock" data-content-brand="shared">${D_SHARED["cmp_chatlink__oclock"].body}</td></tr><tr><td class="cmp-row-label">닥터맨즈</td><td data-content-key="cmp_catch__drmans" data-content-brand="shared">${D_SHARED["cmp_catch__drmans"].body}</td><td data-content-key="cmp_phone__drmans" data-content-brand="shared">${D_SHARED["cmp_phone__drmans"].body}</td><td data-content-key="cmp_chatlink__drmans" data-content-brand="shared">${D_SHARED["cmp_chatlink__drmans"].body}</td></tr><tr><td class="cmp-row-label">와이브닝</td><td data-content-key="cmp_catch__yvening" data-content-brand="shared">${D_SHARED["cmp_catch__yvening"].body}</td><td data-content-key="cmp_phone__yvening" data-content-brand="shared">${D_SHARED["cmp_phone__yvening"].body}</td><td data-content-key="cmp_chatlink__yvening" data-content-brand="shared">${D_SHARED["cmp_chatlink__yvening"].body}</td></tr><tr><td class="cmp-row-label">마넬</td><td data-content-key="cmp_catch__marnell" data-content-brand="shared">${D_SHARED["cmp_catch__marnell"].body}</td><td>없음</td><td data-content-key="cmp_chatlink__marnell" data-content-brand="shared">${D_SHARED["cmp_chatlink__marnell"].body}</td></tr><tr><td class="cmp-row-label">닥터아망</td><td data-content-key="cmp_catch__dramang" data-content-brand="shared">${D_SHARED["cmp_catch__dramang"].body}</td><td data-content-key="cmp_phone__dramang" data-content-brand="shared">${D_SHARED["cmp_phone__dramang"].body}</td><td data-content-key="cmp_chatlink__dramang" data-content-brand="shared">${D_SHARED["cmp_chatlink__dramang"].body}</td></tr></tbody></table></div>
  <div class="grp-h" id="c_basic_1">1. 인사말</div>
  <div class="grp-h grp-sub">첫인사</div>
  ${macro(D_SHARED["cmn_all__001"].name, D_SHARED["cmn_all__001"].tag, D_SHARED["cmn_all__001"].body, D_SHARED["cmn_all__001"].desc, "cmn_all__001", "shared")}
  <div class="grp-h grp-sub">그외 인사</div>
  <div class="grid2">${macro(D_SHARED["cmn_all__002"].name, D_SHARED["cmn_all__002"].tag, D_SHARED["cmn_all__002"].body, D_SHARED["cmn_all__002"].desc, "cmn_all__002", "shared")}${macro(D_SHARED["cmn_all__003"].name, D_SHARED["cmn_all__003"].tag, D_SHARED["cmn_all__003"].body, D_SHARED["cmn_all__003"].desc, "cmn_all__003", "shared")}</div>
  <div class="grp-h grp-sub">끝인사</div>
  <div class="grid2">${macro(D_SHARED["cmn_all__004"].name, D_SHARED["cmn_all__004"].tag, D_SHARED["cmn_all__004"].body, D_SHARED["cmn_all__004"].desc, "cmn_all__004", "shared")}${macro(D_SHARED["cmn_all__005"].name, D_SHARED["cmn_all__005"].tag, D_SHARED["cmn_all__005"].body, D_SHARED["cmn_all__005"].desc, "cmn_all__005", "shared")}</div>
  ${macro(D_SHARED["cmn_all__006"].name, D_SHARED["cmn_all__006"].tag, D_SHARED["cmn_all__006"].body, D_SHARED["cmn_all__006"].desc, "cmn_all__006", "shared")}
  <div class="grid2">${macro(D_SHARED["cmn_all__007"].name, D_SHARED["cmn_all__007"].tag, D_SHARED["cmn_all__007"].body, D_SHARED["cmn_all__007"].desc, "cmn_all__007", "shared")}${macro(D_SHARED["cmn_all__008"].name, D_SHARED["cmn_all__008"].tag, D_SHARED["cmn_all__008"].body, D_SHARED["cmn_all__008"].desc, "cmn_all__008", "shared")}</div>
  <div class="grid2">${macro(D_SHARED["cmn_all__009"].name, D_SHARED["cmn_all__009"].tag, D_SHARED["cmn_all__009"].body, D_SHARED["cmn_all__009"].desc, "cmn_all__009", "shared")}${macro(D_SHARED["cmn_all__010"].name, D_SHARED["cmn_all__010"].tag, D_SHARED["cmn_all__010"].body, D_SHARED["cmn_all__010"].desc, "cmn_all__010", "shared")}</div>
  ${macro(D_SHARED["cmn_all__011"].name, D_SHARED["cmn_all__011"].tag, D_SHARED["cmn_all__011"].body, D_SHARED["cmn_all__011"].desc, "cmn_all__011", "shared")}
  <div class="grp-h" id="c_basic_2">2. 사전/사후 대기</div>
  ${caution(`★ 고객에게 대기 요청 후 자동 종료 경고 멘트가 나가지 않도록 [종료대기] 설정 필수`)}
  <div class="grid2">${macro(D_SHARED["cmn_all__012"].name, D_SHARED["cmn_all__012"].tag, D_SHARED["cmn_all__012"].body, D_SHARED["cmn_all__012"].desc, "cmn_all__012", "shared")}${macro(D_SHARED["cmn_all__013"].name, D_SHARED["cmn_all__013"].tag, D_SHARED["cmn_all__013"].body, D_SHARED["cmn_all__013"].desc, "cmn_all__013", "shared")}</div>
  ${macro(D_SHARED["cmn_all__014"].name, D_SHARED["cmn_all__014"].tag, D_SHARED["cmn_all__014"].body, D_SHARED["cmn_all__014"].desc, "cmn_all__014", "shared")}
  <div class="grp-h" id="c_basic_3">3. 호응 표현</div>
  ${caution(`고객 말씀 후 상황에 맞는 호응 필수 (단답 '네'는 부적절 / "네, 많이 불편하셨을 것 같습니다" 같은 공감 표현은 적절)`)}
  <div class="grid2">${macro(D_SHARED["cmn_all__015"].name, D_SHARED["cmn_all__015"].tag, D_SHARED["cmn_all__015"].body, D_SHARED["cmn_all__015"].desc, "cmn_all__015", "shared")}${macro(D_SHARED["cmn_all__016"].name, D_SHARED["cmn_all__016"].tag, D_SHARED["cmn_all__016"].body, D_SHARED["cmn_all__016"].desc, "cmn_all__016", "shared")}</div>
  <div class="grp-h" id="c_basic_4">4. 채팅 중 유선(O/B) 요청</div>
  ${caution(`고객이 채팅 인입 후 전화 요청 시 우선 채팅 상담 권유 (불필요한 O/B 감소 목적)`)}
  ${macro(D_SHARED["cmn_all__017"].name, D_SHARED["cmn_all__017"].tag, D_SHARED["cmn_all__017"].body, D_SHARED["cmn_all__017"].desc, "cmn_all__017", "shared")}
  <div class="grid2">${macro(D_SHARED["cmn_all__018"].name, D_SHARED["cmn_all__018"].tag, D_SHARED["cmn_all__018"].body, D_SHARED["cmn_all__018"].desc, "cmn_all__018", "shared")}${macro(D_SHARED["cmn_all__019"].name, D_SHARED["cmn_all__019"].tag, D_SHARED["cmn_all__019"].body, D_SHARED["cmn_all__019"].desc, "cmn_all__019", "shared")}</div>
  <div class="grp-h" id="c_basic_5">5. 추가 문의 / 점심시간</div>
  <div class="grid2">${macro(D_SHARED["cmn_all__020"].name, D_SHARED["cmn_all__020"].tag, D_SHARED["cmn_all__020"].body, D_SHARED["cmn_all__020"].desc, "cmn_all__020", "shared")}${macro(D_SHARED["cmn_all__021"].name, D_SHARED["cmn_all__021"].tag, D_SHARED["cmn_all__021"].body, D_SHARED["cmn_all__021"].desc, "cmn_all__021", "shared")}</div>
  <div class="grp-h" id="c_basic_7">🚨 상담 종료 경고</div>
  ${caution(`고객 욕설·반말·폭언·성희롱 (1회) — 담당 관리자 보고 필수`)}
  <div class="grid2">${macro(D_SHARED["cmn_all__022"].name, D_SHARED["cmn_all__022"].tag, D_SHARED["cmn_all__022"].body, D_SHARED["cmn_all__022"].desc, "cmn_all__022", "shared")}${macro(D_SHARED["cmn_all__023"].name, D_SHARED["cmn_all__023"].tag, D_SHARED["cmn_all__023"].body, D_SHARED["cmn_all__023"].desc, "cmn_all__023", "shared")}</div>
  ${secTitle("🎁","제품 문의",null,"c_product")}
  ${macro(D_SHARED["cmn_all__024"].name, D_SHARED["cmn_all__024"].tag, D_SHARED["cmn_all__024"].body, D_SHARED["cmn_all__024"].desc, "cmn_all__024", "shared")}
  ${secTitle("📦","배송·출고 문의",null,"c_ship")}
  <div class="grp-h" id="c_ship_1">1. 배송 일정 문의</div>
  ${caution(`오후 2시 이전 결제 건 당일 출고 기준 · 결제일자+시간 확인 필수 · 금요일 2시 이후/주말·공휴일 결제는 공휴일 출고 미진행`)}
  <div class="grid2">${macro(D_SHARED["cmn_all__025"].name, D_SHARED["cmn_all__025"].tag, D_SHARED["cmn_all__025"].body, D_SHARED["cmn_all__025"].desc, "cmn_all__025", "shared")}${macro(D_SHARED["cmn_all__026"].name, D_SHARED["cmn_all__026"].tag, D_SHARED["cmn_all__026"].body, D_SHARED["cmn_all__026"].desc, "cmn_all__026", "shared")}</div>
  <div class="grid2">${macro(D_SHARED["cmn_all__027"].name, D_SHARED["cmn_all__027"].tag, D_SHARED["cmn_all__027"].body, D_SHARED["cmn_all__027"].desc, "cmn_all__027", "shared")}${macro(D_SHARED["cmn_all__028"].name, D_SHARED["cmn_all__028"].tag, D_SHARED["cmn_all__028"].body, D_SHARED["cmn_all__028"].desc, "cmn_all__028", "shared")}</div>
  <div class="grid2">${macro(D_SHARED["cmn_all__029"].name, D_SHARED["cmn_all__029"].tag, D_SHARED["cmn_all__029"].body, D_SHARED["cmn_all__029"].desc, "cmn_all__029", "shared")}${macro(D_SHARED["cmn_all__030"].name, D_SHARED["cmn_all__030"].tag, D_SHARED["cmn_all__030"].body, D_SHARED["cmn_all__030"].desc, "cmn_all__030", "shared")}</div>
  ${macro(D_SHARED["cmn_all__031"].name, D_SHARED["cmn_all__031"].tag, D_SHARED["cmn_all__031"].body, D_SHARED["cmn_all__031"].desc, "cmn_all__031", "shared")}
  <div class="grp-h" id="c_ship_2">2. 미배송 / 오배송 문의</div>
  ${guide(`자사몰·물류센터(<a href="https://seller.poomgo.com/login?redirect=%2F" target="_blank">품고</a> 또는 정석) 주문내역에서 송장번호 확인 → CJ대한통운 송장 조회로 배송 상태·흐름 확인<br><br>💡 배송 흐름 정상 여부에 따라 분기 : <b>사과 표현</b> 템플릿 공통 사용 후, <b>정상 흐름</b>이면 '배송완료 상태 안내', <b>비정상 흐름</b>이면 '물류사 확인 안내' 템플릿 사용`)}
  <div class="grid2">${macro(D_SHARED["cmn_all__032"].name, D_SHARED["cmn_all__032"].tag, D_SHARED["cmn_all__032"].body, D_SHARED["cmn_all__032"].desc, "cmn_all__032", "shared")}${macro(D_SHARED["cmn_all__033"].name, D_SHARED["cmn_all__033"].tag, D_SHARED["cmn_all__033"].body, D_SHARED["cmn_all__033"].desc, "cmn_all__033", "shared")}</div>
  <div class="grid2">${macro(D_SHARED["cmn_all__064"].name, D_SHARED["cmn_all__064"].tag, D_SHARED["cmn_all__064"].body, D_SHARED["cmn_all__064"].desc, "cmn_all__064", "shared")}</div>
  <div class="grp-h" id="c_ship_3">3. 분리배송 안내</div>
  ${macro(D_SHARED["cmn_all__034"].name, D_SHARED["cmn_all__034"].tag, D_SHARED["cmn_all__034"].body, D_SHARED["cmn_all__034"].desc, "cmn_all__034", "shared")}
  ${secTitle("🔄","주문 변경 (취소·배송정보 변경)",null,"c_order")}
  <div class="grp-h" id="c_order_1">1. 주문 취소</div>
  <div class="warn-note">📦 물류센터(<a href="https://seller.poomgo.com/login?redirect=%2F" target="_blank">품고</a> 또는 정석) 출고 상태 확인 필수
· 취소 가능 : 송장 상태가 '마감됨'을 제외한 전체
· 취소 불가 : 송장 상태가 '마감됨'</div>
  <div class="grid2">${col("blue","취소 가능",
subcard(D_SHARED["cmn_all__035"].name, D_SHARED["cmn_all__035"].tag, D_SHARED["cmn_all__035"].body, D_SHARED["cmn_all__035"].desc, "cmn_all__035", "shared") + subcard(D_SHARED["cmn_all__036"].name, D_SHARED["cmn_all__036"].tag, D_SHARED["cmn_all__036"].body, D_SHARED["cmn_all__036"].desc, "cmn_all__036", "shared") + subcard(D_SHARED["cmn_all__037"].name, D_SHARED["cmn_all__037"].tag, D_SHARED["cmn_all__037"].body, D_SHARED["cmn_all__037"].desc, "cmn_all__037", "shared")
)}${col("pink","취소 불가",
subcard(D_SHARED["cmn_all__038"].name, D_SHARED["cmn_all__038"].tag, D_SHARED["cmn_all__038"].body, D_SHARED["cmn_all__038"].desc, "cmn_all__038", "shared")
)}</div>
  <div class="grp-h">[예외] 취소했으나 배송된 경우</div>
  <div class="grid2">${macro(D_SHARED["cmn_all__039"].name, D_SHARED["cmn_all__039"].tag, D_SHARED["cmn_all__039"].body, D_SHARED["cmn_all__039"].desc, "cmn_all__039", "shared")}${macro(D_SHARED["cmn_all__040"].name, D_SHARED["cmn_all__040"].tag, D_SHARED["cmn_all__040"].body, D_SHARED["cmn_all__040"].desc, "cmn_all__040", "shared")}</div>
  <div class="grp-h" id="c_order_2">2. 배송 정보 변경</div>
  <div class="warn-note">📦 물류센터(<a href="https://seller.poomgo.com/login?redirect=%2F" target="_blank">품고</a> 또는 정석) 출고 상태 확인 필수
· 변경 가능 : 송장 상태가 '마감됨'을 제외한 전체
· 변경 불가 : 송장 상태가 '마감됨'</div>
  <div class="grid2">${col("blue","변경 가능",
subcard(D_SHARED["cmn_all__041"].name, D_SHARED["cmn_all__041"].tag, D_SHARED["cmn_all__041"].body, D_SHARED["cmn_all__041"].desc, "cmn_all__041", "shared") + subcard(D_SHARED["cmn_all__042"].name, D_SHARED["cmn_all__042"].tag, D_SHARED["cmn_all__042"].body, D_SHARED["cmn_all__042"].desc, "cmn_all__042", "shared")
)}${col("pink","변경 불가",
subcard(D_SHARED["cmn_all__043"].name, D_SHARED["cmn_all__043"].tag, D_SHARED["cmn_all__043"].body, D_SHARED["cmn_all__043"].desc, "cmn_all__043", "shared")
)}</div>
  ${secTitle("💳","결제 문의 (입금 확인)",null,"c_pay")}
  ${caution(`고객 정보 확인부터 진행 · 정상 입금 시 확인 내용 안내`)}
  ${macro(D_SHARED["cmn_all__044"].name, D_SHARED["cmn_all__044"].tag, D_SHARED["cmn_all__044"].body, D_SHARED["cmn_all__044"].desc, "cmn_all__044", "shared")}
  <div class="grid2">${macro(D_SHARED["cmn_all__045"].name, D_SHARED["cmn_all__045"].tag, D_SHARED["cmn_all__045"].body, D_SHARED["cmn_all__045"].desc, "cmn_all__045", "shared")}${macro(D_SHARED["cmn_all__046"].name, D_SHARED["cmn_all__046"].tag, D_SHARED["cmn_all__046"].body, D_SHARED["cmn_all__046"].desc, "cmn_all__046", "shared")}</div>
  <div class="grid2">${macro(D_SHARED["cmn_all__047"].name, D_SHARED["cmn_all__047"].tag, D_SHARED["cmn_all__047"].body, D_SHARED["cmn_all__047"].desc, "cmn_all__047", "shared")}${macro(D_SHARED["cmn_all__048"].name, D_SHARED["cmn_all__048"].tag, D_SHARED["cmn_all__048"].body, D_SHARED["cmn_all__048"].desc, "cmn_all__048", "shared")}</div>
  ${secTitle("👤","멤버십·회원정보·쿠폰",null,"c_member")}
  ${macro(D_SHARED["cmn_all__049"].name, D_SHARED["cmn_all__049"].tag, D_SHARED["cmn_all__049"].body, D_SHARED["cmn_all__049"].desc, "cmn_all__049", "shared")}
    <div class="grp-h">웰컴 쿠폰팩 안내</div>
  <div class="warn-note">⚠️ 슬룸은 2026년 6월 11일(목)부로 멤버십 혜택이 변경되어 웰컴 쿠폰팩이 제공되지 않습니다.</div>
  <div class="grp-h">(1) 쿠폰팩이란? (예: 쿠폰팩이 뭔가요?)</div>
  <div class="grid2">${macro(D_SHARED["cmn_all__050"].name, D_SHARED["cmn_all__050"].tag, D_SHARED["cmn_all__050"].body, D_SHARED["cmn_all__050"].desc, "cmn_all__050", "shared")}${macro(D_SHARED["cmn_all__051"].name, D_SHARED["cmn_all__051"].tag, D_SHARED["cmn_all__051"].body, D_SHARED["cmn_all__051"].desc, "cmn_all__051", "shared")}</div>
  <div class="grp-h">(2) 쿠폰팩 재발급 가능 문의</div>
  ${macro(D_SHARED["cmn_all__052"].name, D_SHARED["cmn_all__052"].tag, D_SHARED["cmn_all__052"].body, D_SHARED["cmn_all__052"].desc, "cmn_all__052", "shared")}
  <div class="grp-h">(3) 회원 가입·탈퇴·비밀번호 문의</div>
  <div class="grid2">${macro(D_SHARED["cmn_all__053"].name, D_SHARED["cmn_all__053"].tag, D_SHARED["cmn_all__053"].body, D_SHARED["cmn_all__053"].desc, "cmn_all__053", "shared")}${macro(D_SHARED["cmn_all__054"].name, D_SHARED["cmn_all__054"].tag, D_SHARED["cmn_all__054"].body, D_SHARED["cmn_all__054"].desc, "cmn_all__054", "shared")}</div>
  ${macro(D_SHARED["cmn_all__055"].name, D_SHARED["cmn_all__055"].tag, D_SHARED["cmn_all__055"].body, D_SHARED["cmn_all__055"].desc, "cmn_all__055", "shared")}
  <div class="grp-h">🚨 [예외] 회원탈퇴·비번초기화 (유선 O/B)</div>
  ${guide(`⚠️ 이메일 사용 불가로 비밀번호 초기화가 필요하거나 로그인 불가하여 수동 탈퇴 필요시엔, 개인정보 보호를 위해 <b>유선 O/B로만 진행</b> (본인 확인 후 처리 필수)
👇🏻 상담사가 아래 멘트 송출 후 통화 가능한 연락처 확보 → 유선O/B 진행`)}
  ${macro(D_SHARED["cmn_all__056"].name, D_SHARED["cmn_all__056"].tag, D_SHARED["cmn_all__056"].body, D_SHARED["cmn_all__056"].desc, "cmn_all__056", "shared")}
    <div class="grp-h">브랜드별 대표번호</div>
  <div class="cmp-table-wrap"><table class="cmp-table"><thead><tr><th class="cmp-corner">브랜드</th><th class="cmp-blue">대표번호</th><th class="cmp-corner">브랜드</th><th class="cmp-blue">대표번호</th></tr></thead><tbody><tr><td class="cmp-row-label">심플리케어</td><td data-content-key="cmp_phone__simplicare" data-content-brand="shared">${D_SHARED["cmp_phone__simplicare"].body}</td><td class="cmp-row-label">코코다움</td><td data-content-key="cmp_phone__cocodaum" data-content-brand="shared">${D_SHARED["cmp_phone__cocodaum"].body}</td></tr><tr><td class="cmp-row-label">슬룸</td><td data-content-key="cmp_phone__sloom" data-content-brand="shared">${D_SHARED["cmp_phone__sloom"].body}</td><td class="cmp-row-label">얼라인랩</td><td data-content-key="cmp_phone__alignlab" data-content-brand="shared">${D_SHARED["cmp_phone__alignlab"].body}</td></tr><tr><td class="cmp-row-label">닥터아망</td><td data-content-key="cmp_phone__dramang" data-content-brand="shared">${D_SHARED["cmp_phone__dramang"].body}</td><td class="cmp-row-label">와이브닝</td><td data-content-key="cmp_phone__yvening" data-content-brand="shared">${D_SHARED["cmp_phone__yvening"].body}</td></tr><tr><td class="cmp-row-label">셀올로지</td><td data-content-key="cmp_phone__cellology" data-content-brand="shared">${D_SHARED["cmp_phone__cellology"].body}</td><td class="cmp-row-label">빌바</td><td data-content-key="cmp_phone__bilba" data-content-brand="shared">${D_SHARED["cmp_phone__bilba"].body}</td></tr><tr><td class="cmp-row-label">닥터맨즈</td><td data-content-key="cmp_phone__drmans" data-content-brand="shared">${D_SHARED["cmp_phone__drmans"].body}</td><td class="cmp-row-label"></td><td></td></tr></tbody></table></div>
  ${secTitle("📣","마케팅·제휴 문의",null,"c_mkt")}
  <div class="grid2">${macro(D_SHARED["cmn_all__057"].name, D_SHARED["cmn_all__057"].tag, D_SHARED["cmn_all__057"].body, D_SHARED["cmn_all__057"].desc, "cmn_all__057", "shared")}${macro(D_SHARED["cmn_all__058"].name, D_SHARED["cmn_all__058"].tag, D_SHARED["cmn_all__058"].body, D_SHARED["cmn_all__058"].desc, "cmn_all__058", "shared")}</div>
  ${secTitle("🛒","채팅 주문",null,"c_chat")}
  <div class="grp-h">브랜드별 채팅 주문 유의사항 멘트</div>
  <div class="quote-box"><b>• 배송비는 브랜드별 금액 기준만 상이 (슬룸 제외)
• 무통장 입금으로만 결제 가능, 자사몰 회원 혜택 미제공은 동일
• 채팅 주문은 카드 결제(페이업) 불가 — 개인정보 이슈</b></div>
  <div class="cmp-table-wrap"><table class="cmp-table"><thead><tr><th class="cmp-corner">브랜드</th><th class="cmp-blue">채팅 주문 유의사항 멘트</th></tr></thead><tbody><tr><td class="cmp-row-label">슬룸</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_chatorder__sloom" data-content-brand="shared">${D_SHARED["cmp_chatorder__sloom"].body}</div></td></tr><tr><td class="cmp-row-label">심플리케어</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_chatorder__simplicare" data-content-brand="shared">${D_SHARED["cmp_chatorder__simplicare"].body}</div></td></tr><tr><td class="cmp-row-label">얼라인랩</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_chatorder__alignlab" data-content-brand="shared">${D_SHARED["cmp_chatorder__alignlab"].body}</div></td></tr><tr><td class="cmp-row-label">빌바</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_chatorder__bilba" data-content-brand="shared">${D_SHARED["cmp_chatorder__bilba"].body}</div></td></tr><tr><td class="cmp-row-label">셀올로지</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_chatorder__cellology" data-content-brand="shared">${D_SHARED["cmp_chatorder__cellology"].body}</div></td></tr><tr><td class="cmp-row-label">코코다움</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_chatorder__cocodaum" data-content-brand="shared">${D_SHARED["cmp_chatorder__cocodaum"].body}</div></td></tr><tr><td class="cmp-row-label">닥터맨즈</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_chatorder__drmans" data-content-brand="shared">${D_SHARED["cmp_chatorder__drmans"].body}</div></td></tr><tr><td class="cmp-row-label">와이브닝</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_chatorder__yvening" data-content-brand="shared">${D_SHARED["cmp_chatorder__yvening"].body}</div></td></tr><tr><td class="cmp-row-label">닥터아망</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_chatorder__dramang" data-content-brand="shared">${D_SHARED["cmp_chatorder__dramang"].body}</div></td></tr></tbody></table></div>
  ${guide(`12 o'clock · 마넬 : 배송비 기준 미확인 → 확인 후 반영 예정`)}
  <div class="grid2">${macro(D_SHARED["cmn_all__059"].name, D_SHARED["cmn_all__059"].tag, D_SHARED["cmn_all__059"].body, D_SHARED["cmn_all__059"].desc, "cmn_all__059", "shared")}${macro(D_SHARED["cmn_all__060"].name, D_SHARED["cmn_all__060"].tag, D_SHARED["cmn_all__060"].body, D_SHARED["cmn_all__060"].desc, "cmn_all__060", "shared")}</div>
  <div class="grp-h">출고 예정 안내 (입금 확인 후)</div>
  <div class="grid2">${macro(D_SHARED["cmn_all__061"].name, D_SHARED["cmn_all__061"].tag, D_SHARED["cmn_all__061"].body, D_SHARED["cmn_all__061"].desc, "cmn_all__061", "shared")}${macro(D_SHARED["cmn_all__062"].name, D_SHARED["cmn_all__062"].tag, D_SHARED["cmn_all__062"].body, D_SHARED["cmn_all__062"].desc, "cmn_all__062", "shared")}</div>
  ${macro(D_SHARED["cmn_all__063"].name, D_SHARED["cmn_all__063"].tag, D_SHARED["cmn_all__063"].body, D_SHARED["cmn_all__063"].desc, "cmn_all__063", "shared")}
  ${guide(`상담 종료 후 <a href="https://docs.google.com/spreadsheets/d/1Bj5stx8hXMoPL8L91EYu6e5TA7pqEAjges4Cejs1wjo/edit?gid=388846546#gid=388846546" target="_blank">[SCM파트 X CX팀] 수기 주문 출고 리스트</a> 시트에 사업자(올릿/리테일/더마) 구분하여 작성, 출고 요청`)}
`;

const CALL_ALL = `<div class="no-copy">
  <h1>📞 유선 표준 응대</h1>
  <div class="sub">전 브랜드 공통 전화 응대 · 슬룸 콜백티켓 중심 운영</div>

  ${secTitle("📋","유선 상담 운영 기준",null,"c_ops")}
  <div class="warn-note">⚠️ AS·불량은 증빙(영상·사진) 확인이 필요해 유선 상담을 진행하지 않습니다. → 채팅으로만 접수 안내</div>
  <div class="quote-box"><b>📞 [슬룸] 현재 콜백티켓 중심 운영</b>
대표번호 고객센터 연결 → 고객 문의 유형 선택 → 유형별 요청 정보 기재 후 접수 완료 → 채널톡 팀챗 콜백 티켓 접수건 확인 후 OB 진행
👉 「콜백 티켓 처리 프로세스」의 유형별 가이드라인에 따라 알림톡·문자 안내 또는 필요 시 유선 OB 진행</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:190px"><col></colgroup><thead><tr><th class="cmp-corner" style="white-space:nowrap">항목</th><th class="cmp-blue">내용</th></tr></thead><tbody><tr><td class="cmp-row-label" style="white-space:nowrap">AS 유선 요청 시</td><td style="white-space:pre-line;text-align:left;padding:10px 14px;line-height:1.7" data-content-key="cmp_callops__as" data-content-brand="shared">${D_SHARED["cmp_callops__as"].body}</td></tr><tr><td class="cmp-row-label" style="white-space:nowrap">슬룸 유선 운영 방식</td><td style="white-space:pre-line;text-align:left;padding:10px 14px;line-height:1.7" data-content-key="cmp_callops__opmode" data-content-brand="shared">${D_SHARED["cmp_callops__opmode"].body}</td></tr><tr><td class="cmp-row-label" style="white-space:nowrap">콜백 티켓 접수 유형</td><td style="white-space:pre-line;text-align:left;padding:10px 14px;line-height:1.7" data-content-key="cmp_callops__cbtypes" data-content-brand="shared">${D_SHARED["cmp_callops__cbtypes"].body}</td></tr><tr><td class="cmp-row-label" style="white-space:nowrap">실시간 상담 연결 유형</td><td style="white-space:pre-line;text-align:left;padding:10px 14px;line-height:1.7" data-content-key="cmp_callops__livetypes" data-content-brand="shared">${D_SHARED["cmp_callops__livetypes"].body}</td></tr></tbody></table></div>

  ${secTitle("💡","공통 기본","전 브랜드 공통","c_basic")}
  <div class="grp-h" id="c_basic_1">1. 인사말</div>
  ${macro(D_SHARED["call__001"].name, D_SHARED["call__001"].tag, D_SHARED["call__001"].body, D_SHARED["call__001"].desc, "call__001", "shared")}
  ${macro(D_SHARED["call__002"].name, D_SHARED["call__002"].tag, D_SHARED["call__002"].body, D_SHARED["call__002"].desc, "call__002", "shared")}
  <div class="grid2">${macro(D_SHARED["call__003"].name, D_SHARED["call__003"].tag, D_SHARED["call__003"].body, D_SHARED["call__003"].desc, "call__003", "shared")}${macro(D_SHARED["call__004"].name, D_SHARED["call__004"].tag, D_SHARED["call__004"].body, D_SHARED["call__004"].desc, "call__004", "shared")}</div>
  <div class="grid2">${macro(D_SHARED["call__005"].name, D_SHARED["call__005"].tag, D_SHARED["call__005"].body, D_SHARED["call__005"].desc, "call__005", "shared")}${macro(D_SHARED["call__006"].name, D_SHARED["call__006"].tag, D_SHARED["call__006"].body, D_SHARED["call__006"].desc, "call__006", "shared")}</div>
  <div class="grp-h" id="c_basic_2">2. 사전/사후 대기</div>
  ${caution(`★ 대기 요청 후 자동 종료 경고 멘트가 나가지 않도록 [종료대기] 설정 필수`)}
  <div class="grid2">${macro(D_SHARED["call__007"].name, D_SHARED["call__007"].tag, D_SHARED["call__007"].body, D_SHARED["call__007"].desc, "call__007", "shared")}${macro(D_SHARED["call__008"].name, D_SHARED["call__008"].tag, D_SHARED["call__008"].body, D_SHARED["call__008"].desc, "call__008", "shared")}</div>
  ${macro(D_SHARED["call__009"].name, D_SHARED["call__009"].tag, D_SHARED["call__009"].body, D_SHARED["call__009"].desc, "call__009", "shared")}
  <div class="grp-h" id="c_basic_3">3. 호응 표현</div>
  ${caution(`고객 말씀 후 상황에 맞는 호응 필수 (단답 '네'는 부적절 / "네, 많이 불편하셨을 것 같습니다" 같은 공감 표현은 적절)`)}
  <div class="grid2">${macro(D_SHARED["call__010"].name, D_SHARED["call__010"].tag, D_SHARED["call__010"].body, D_SHARED["call__010"].desc, "call__010", "shared")}${macro(D_SHARED["call__011"].name, D_SHARED["call__011"].tag, D_SHARED["call__011"].body, D_SHARED["call__011"].desc, "call__011", "shared")}</div>
  <div class="grp-h" id="c_basic_4">4. 추가 문의</div>
  ${macro(D_SHARED["call__012"].name, D_SHARED["call__012"].tag, D_SHARED["call__012"].body, D_SHARED["call__012"].desc, "call__012", "shared")}
  <div class="grp-h" id="c_warn">🚨 상담 종료 경고</div>
  ${caution(`고객 욕설·반말·폭언·성희롱 (1회) — 담당 관리자 보고 필수`)}
  <div class="grid2">${macro(D_SHARED["call__013"].name, D_SHARED["call__013"].tag, D_SHARED["call__013"].body, D_SHARED["call__013"].desc, "call__013", "shared")}${macro(D_SHARED["call__014"].name, D_SHARED["call__014"].tag, D_SHARED["call__014"].body, D_SHARED["call__014"].desc, "call__014", "shared")}</div>

  ${secTitle("🔄","주문 변경",null,"c_order")}
  <div class="grp-h" id="c_order_1">1. 취소 후 배송</div>
  ${guide(`물류센터(품고 또는 정석) 조회로 취소 가능 확인 후 취소했으나 실제 배송된 경우 · ①~⑤ 순서로 응대`)}
  <div class="grid2">${macro(D_SHARED["call__018"].name, D_SHARED["call__018"].tag, D_SHARED["call__018"].body, D_SHARED["call__018"].desc, "call__018", "shared")}${macro(D_SHARED["call__019"].name, D_SHARED["call__019"].tag, D_SHARED["call__019"].body, D_SHARED["call__019"].desc, "call__019", "shared")}</div>
  <div class="grid2">${macro(D_SHARED["call__020"].name, D_SHARED["call__020"].tag, D_SHARED["call__020"].body, D_SHARED["call__020"].desc, "call__020", "shared")}${macro(D_SHARED["call__021"].name, D_SHARED["call__021"].tag, D_SHARED["call__021"].body, D_SHARED["call__021"].desc, "call__021", "shared")}</div>
  ${guide(`⑤ 상담 종료 유도 후, 끝인사 멘트하고 종료`)}
  <div class="grp-h" id="c_order_2">2. 배송 정보 변경</div>
  <div class="warn-note">📦 물류센터(<a href="https://seller.poomgo.com/login?redirect=%2F" target="_blank">품고</a> 또는 정석) 출고 상태 확인 필수
· 변경 가능 : 송장 상태가 '마감됨'을 제외한 전체
· 변경 불가 : 송장 상태가 '마감됨'</div>
  <div class="grid2">${col("blue","변경 가능",
subcard(D_SHARED["call__022"].name, D_SHARED["call__022"].tag, D_SHARED["call__022"].body, D_SHARED["call__022"].desc, "call__022", "shared") + subcard(D_SHARED["call__023"].name, D_SHARED["call__023"].tag, D_SHARED["call__023"].body, D_SHARED["call__023"].desc, "call__023", "shared"))}${col("pink","변경 불가",
subcard(D_SHARED["call__024"].name, D_SHARED["call__024"].tag, D_SHARED["call__024"].body, D_SHARED["call__024"].desc, "call__024", "shared"))}</div>
  ${blueNote("📩 통화 종료 후 문자 발송 · 배송정보 문자 템플릿",
`[브랜드명]
안녕하세요, (브랜드명)입니다.

배송 정보 안내드립니다.

▶ 운송장번호 : (기재)
▶ 배송사원 : (성함/연락처)
▶ CJ대한통운 고객센터 : 1588-1255

감사합니다.`)}

  ${secTitle("💳","결제 문의",null,"c_pay")}
  ${caution(`고객 정보 확인부터 진행 · 정상 입금 시 확인 내용 안내`)}
  ${macro(D_SHARED["call__025"].name, D_SHARED["call__025"].tag, D_SHARED["call__025"].body, D_SHARED["call__025"].desc, "call__025", "shared")}
  <div class="grid2">${macro(D_SHARED["call__026"].name, D_SHARED["call__026"].tag, D_SHARED["call__026"].body, D_SHARED["call__026"].desc, "call__026", "shared")}${macro(D_SHARED["call__027"].name, D_SHARED["call__027"].tag, D_SHARED["call__027"].body, D_SHARED["call__027"].desc, "call__027", "shared")}</div>
  ${macro(D_SHARED["call__028"].name, D_SHARED["call__028"].tag, D_SHARED["call__028"].body, D_SHARED["call__028"].desc, "call__028", "shared")}
  <div class="grid2">${macro(D_SHARED["call__029"].name, D_SHARED["call__029"].tag, D_SHARED["call__029"].body, D_SHARED["call__029"].desc, "call__029", "shared")}${macro(D_SHARED["call__030"].name, D_SHARED["call__030"].tag, D_SHARED["call__030"].body, D_SHARED["call__030"].desc, "call__030", "shared")}</div>
  ${macro(D_SHARED["call__031"].name, D_SHARED["call__031"].tag, D_SHARED["call__031"].body, D_SHARED["call__031"].desc, "call__031", "shared")}
  <div class="grp-h">결제 완료 후 출고 안내</div>
  <div class="grid2">${macro(D_SHARED["call__032"].name, D_SHARED["call__032"].tag, D_SHARED["call__032"].body, D_SHARED["call__032"].desc, "call__032", "shared")}${macro(D_SHARED["call__033"].name, D_SHARED["call__033"].tag, D_SHARED["call__033"].body, D_SHARED["call__033"].desc, "call__033", "shared")}</div>

  ${secTitle("👤","회원 정보 · 마케팅/제휴",null,"c_member")}
  <div class="grp-h" id="c_member_1">1. 회원 탈퇴 (본인 확인 후 처리)</div>
  ${macro(D_SHARED["call__034"].name, D_SHARED["call__034"].tag, D_SHARED["call__034"].body, D_SHARED["call__034"].desc, "call__034", "shared")}
  <div class="grid2">${macro(D_SHARED["call__035"].name, D_SHARED["call__035"].tag, D_SHARED["call__035"].body, D_SHARED["call__035"].desc, "call__035", "shared")}${macro(D_SHARED["call__036"].name, D_SHARED["call__036"].tag, D_SHARED["call__036"].body, D_SHARED["call__036"].desc, "call__036", "shared")}</div>
  ${macro(D_SHARED["call__037"].name, D_SHARED["call__037"].tag, D_SHARED["call__037"].body, D_SHARED["call__037"].desc, "call__037", "shared")}
  <div class="grp-h" id="c_member_2">2. 비밀번호 찾기</div>
  <div class="grid2">${macro(D_SHARED["call__038"].name, D_SHARED["call__038"].tag, D_SHARED["call__038"].body, D_SHARED["call__038"].desc, "call__038", "shared")}${macro(D_SHARED["call__039"].name, D_SHARED["call__039"].tag, D_SHARED["call__039"].body, D_SHARED["call__039"].desc, "call__039", "shared")}</div>
  ${macro(D_SHARED["call__040"].name, D_SHARED["call__040"].tag, D_SHARED["call__040"].body, D_SHARED["call__040"].desc, "call__040", "shared")}
  <div class="grp-h" id="c_member_3">3. 회원가입</div>
  ${macro(D_SHARED["call__041"].name, D_SHARED["call__041"].tag, D_SHARED["call__041"].body, D_SHARED["call__041"].desc, "call__041", "shared")}
  <div class="grp-h" id="c_mkt">📣 마케팅·제휴 문의</div>
  <div class="grid2">${macro(D_SHARED["call__042"].name, D_SHARED["call__042"].tag, D_SHARED["call__042"].body, D_SHARED["call__042"].desc, "call__042", "shared")}${macro(D_SHARED["call__043"].name, D_SHARED["call__043"].tag, D_SHARED["call__043"].body, D_SHARED["call__043"].desc, "call__043", "shared")}</div>

  ${secTitle("📞","콜백 · 아웃바운드 (O/B) 스크립트",null,"c_ob")}
  ${caution(`불필요한 OB는 지양 · 고객이 인입하지 않았으므로 [소속 브랜드명 + OB 사유 + 통화 가능 여부] 반드시 확인 · 필수 유형: 콜백 전화 주문 접수 건 / 교환·반품 장기 미처리`)}
  <div class="grid2">${macro(D_SHARED["call__015"].name, D_SHARED["call__015"].tag, D_SHARED["call__015"].body, D_SHARED["call__015"].desc, "call__015", "shared")}${macro(D_SHARED["call__016"].name, D_SHARED["call__016"].tag, D_SHARED["call__016"].body, D_SHARED["call__016"].desc, "call__016", "shared")}</div>
  ${macro(D_SHARED["call__017"].name, D_SHARED["call__017"].tag, D_SHARED["call__017"].body, D_SHARED["call__017"].desc, "call__017", "shared")}
  ${secTitle("📞","전화 주문 유의사항",null,"c_call")}
  <div class="grp-h">1) 주문 시 유의사항 안내 (브랜드별)</div>
  <div class="cmp-table-wrap"><table class="cmp-table"><thead><tr><th class="cmp-corner">브랜드</th><th class="cmp-blue">전화 주문 유의사항 멘트</th></tr></thead><tbody><tr><td class="cmp-row-label">슬룸</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_callorder__sloom" data-content-brand="shared">${D_SHARED["cmp_callorder__sloom"].body}</div></td></tr><tr><td class="cmp-row-label">심플리케어</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_callorder__simplicare" data-content-brand="shared">${D_SHARED["cmp_callorder__simplicare"].body}</div></td></tr><tr><td class="cmp-row-label">얼라인랩</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_callorder__alignlab" data-content-brand="shared">${D_SHARED["cmp_callorder__alignlab"].body}</div></td></tr><tr><td class="cmp-row-label">빌바</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_callorder__bilba" data-content-brand="shared">${D_SHARED["cmp_callorder__bilba"].body}</div></td></tr><tr><td class="cmp-row-label">셀올로지</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_callorder__cellology" data-content-brand="shared">${D_SHARED["cmp_callorder__cellology"].body}</div></td></tr><tr><td class="cmp-row-label">코코다움</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_callorder__cocodaum" data-content-brand="shared">${D_SHARED["cmp_callorder__cocodaum"].body}</div></td></tr><tr><td class="cmp-row-label">닥터맨즈</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_callorder__drmans" data-content-brand="shared">${D_SHARED["cmp_callorder__drmans"].body}</div></td></tr><tr><td class="cmp-row-label">와이브닝</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_callorder__yvening" data-content-brand="shared">${D_SHARED["cmp_callorder__yvening"].body}</div></td></tr><tr><td class="cmp-row-label">닥터아망</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body" data-content-key="cmp_callorder__dramang" data-content-brand="shared">${D_SHARED["cmp_callorder__dramang"].body}</div></td></tr></tbody></table></div>
  ${guide(`12 o'clock · 마넬 : 배송비 기준 미확인 → 확인 후 반영 예정`)}
  <div class="grid2">${macro(D_SHARED["call__044"].name, D_SHARED["call__044"].tag, D_SHARED["call__044"].body, D_SHARED["call__044"].desc, "call__044", "shared")}${macro(D_SHARED["call__045"].name, D_SHARED["call__045"].tag, D_SHARED["call__045"].body, D_SHARED["call__045"].desc, "call__045", "shared")}</div>
  <div class="grp-h">a. 무통장 결제</div>
  <div class="grid2">${macro(D_SHARED["call__046"].name, D_SHARED["call__046"].tag, D_SHARED["call__046"].body, D_SHARED["call__046"].desc, "call__046", "shared")}${macro(D_SHARED["call__047"].name, D_SHARED["call__047"].tag, D_SHARED["call__047"].body, D_SHARED["call__047"].desc, "call__047", "shared")}</div>
  ${macro(D_SHARED["call__048"].name, D_SHARED["call__048"].tag, D_SHARED["call__048"].body, D_SHARED["call__048"].desc, "call__048", "shared")}
  ${macro(D_SHARED["call__049"].name, D_SHARED["call__049"].tag, D_SHARED["call__049"].body, D_SHARED["call__049"].desc, "call__049", "shared")}
  <div class="grid2">${macro(D_SHARED["call__050"].name, D_SHARED["call__050"].tag, D_SHARED["call__050"].body, D_SHARED["call__050"].desc, "call__050", "shared")}${macro(D_SHARED["call__051"].name, D_SHARED["call__051"].tag, D_SHARED["call__051"].body, D_SHARED["call__051"].desc, "call__051", "shared")}</div>
  <div class="grp-h">b. 카드 결제 (<a href="https://cp.payup.co.kr/login.do" target="_blank">페이업</a>)</div>
  ${guide(`① 구매 희망 제품·옵션·가격 안내
· 배송비 발생 시 해당 금액을 포함하여 안내 (필수)
· 홈페이지(자사몰) 기준 가격으로 안내하며, 행사 중이면 행사명 포함 (예: 가정의 달 특가)
· 5만원 이상 결제 시 할부 여부 확인 후 <a href="https://cp.payup.co.kr/login.do" target="_blank">페이업</a>에서 진행`)}
  <div class="grid2">${macro(D_SHARED["call__052"].name, D_SHARED["call__052"].tag, D_SHARED["call__052"].body, D_SHARED["call__052"].desc, "call__052", "shared")}${macro(D_SHARED["call__053"].name, D_SHARED["call__053"].tag, D_SHARED["call__053"].body, D_SHARED["call__053"].desc, "call__053", "shared")}</div>
  <div class="grid2">${macro(D_SHARED["call__054"].name, D_SHARED["call__054"].tag, D_SHARED["call__054"].body, D_SHARED["call__054"].desc, "call__054", "shared")}${macro(D_SHARED["call__055"].name, D_SHARED["call__055"].tag, D_SHARED["call__055"].body, D_SHARED["call__055"].desc, "call__055", "shared")}</div>
  ${guide(`상담 종료 후 <a href="https://docs.google.com/spreadsheets/d/1Bj5stx8hXMoPL8L91EYu6e5TA7pqEAjges4Cejs1wjo/edit?gid=388846546#gid=388846546" target="_blank">[SCM파트 X CX팀] 수기 주문 출고 리스트</a> 시트에 사업자(올릿/리테일/더마) 구분하여 작성, 출고 요청`)}
</div>`;

const CALL_SLOOMCB = `<div class="no-copy">
  <h1>🎫 콜백 티켓 처리 프로세스</h1>
      <div class="sub">유형별 접수 처리 표준 · 공통 처리 원칙 + 유형별 프로세스</div>
  <div class="quote-box"><b>콜백 티켓은 고객이 유선(IVR)을 통해 인입, 문의 유형에 따른 필수 정보를 남기면 담당자가 접수 내용을 확인하여 후속 처리하는 방식입니다.
모든 콜백 티켓에 유선 OB를 진행하는 것은 아니며, 유형별 가이드에 따라 처리 후 알림톡·문자로 안내하거나 필요한 경우에만 유선 OB를 진행합니다. <span style="color:#ea2261;font-weight:800">(단, 전화 주문은 유선 OB 필수)</span></b></div>
  <div class="grp-h" id="c_sloomcb_0">🧭 공통 처리 플로우</div>
  <div class="flow-diagram"><div class="fd-box">1. 고객 IVR 콜백 티켓 접수</div><div class="fd-arrow">▶</div><div class="fd-box">2. 문의 유형별 팀챗 알림 확인</div><div class="fd-arrow">▶</div><div class="fd-box">3. 처리 담당자 ✅ 표시<br>(중복 처리 방지)</div><div class="fd-arrow">▶</div><div class="fd-box">4. 신규 건 URL 클릭 후<br>우측 사이드바 상담 내역 확인</div></div>
  <div style="text-align:center;color:var(--trust-blue);font-weight:800;font-size:14px;margin:-6px 0">▼</div>
  <div class="flow-diagram"><div class="fd-box">5. 담당자를 '나'로 배정</div><div class="fd-arrow">▶</div><div class="fd-box">6. 고객 연락처 기준<br>주문·접수 내역 조회</div><div class="fd-arrow">▶</div><div class="fd-box">7. 유형별 프로세스에 따라 처리<br>(알리고·유저챗 안내 또는 필요 시 유선 OB)</div><div class="fd-arrow">▶</div><div class="fd-box">8. 상담 설명 작성 및<br>태그 후처리</div></div>
  <div class="grp-h" id="c_sloomcb_principle">📌 공통 처리 원칙</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:170px"><col></colgroup><tbody>
  <tr><td class="cmp-row-label">담당자 지정</td><td style="white-space:pre-line;padding:10px 14px;line-height:1.7">처리 예정인 팀원은 팀챗 알림에 ✅ 이모지를 표시하여 중복 처리를 방지합니다.</td></tr>
  <tr><td class="cmp-row-label">고객 정보 확인</td><td style="white-space:pre-line;padding:10px 14px;line-height:1.7">고객이 IVR에서 입력한 연락처를 기준으로 주문 및 접수 내역을 조회합니다.</td></tr>
  <tr><td class="cmp-row-label">고객 안내</td><td style="white-space:pre-line;padding:10px 14px;line-height:1.7">① 처리 결과 안내가 필요한 경우 알리고에 등록된 템플릿을 우선 사용하여 발송합니다.
② 상황에 적합한 알리고 템플릿이 없는 경우 기본 뼈대 템플릿을 활용하여 채널톡 유저챗으로 발송합니다.</td></tr>
  <tr><td class="cmp-row-label">알림톡/유저챗/유선OB</td><td style="white-space:pre-line;padding:10px 14px;line-height:1.7">콜백 티켓은 기본적으로 확인 및 후처리 후 알리고 알림톡·채널톡 유저챗으로 안내합니다.
전화주문, 추가 정보 확인 필요, 유형별 가이드에서 별도 OB가 명시된 경우에만 유선 연락을 진행합니다.
⚠️ 단, 전화 주문은 유선으로 OB 진행합니다.</td></tr>
  <tr><td class="cmp-row-label">후처리</td><td style="white-space:pre-line;padding:10px 14px;line-height:1.7">채널톡을 사용하여 유저챗 또는 유선 OB 진행 후 상담 설명 작성 및 상담 태그 반영은 필수입니다

✅ 콜백 상담 태그 기준 : <b>콜백OB</b> + 문의 유형에 맞는 태그 선택</td></tr>
  </tbody></table></div>
  <div class="grp-h" id="c_sloomcb_types">📌 유형별 처리 프로세스</div>
  <div class="cmp-table-wrap"><table class="cmp-table"><tbody>
  <tr><td style="padding:12px 16px;font-weight:700"><a class="jump-link" href="#c_sloomcb_1" onclick="return jumpTo('c_sloomcb_1')">1. 교환·반품 철회 요청</a></td><td style="padding:12px 16px;font-weight:700"><a class="jump-link" href="#c_sloomcb_5" onclick="return jumpTo('c_sloomcb_5')">5. 재회수 접수</a></td></tr>
  <tr><td style="padding:12px 16px;font-weight:700"><a class="jump-link" href="#c_sloomcb_2" onclick="return jumpTo('c_sloomcb_2')">2. 교환제품 배송일정</a></td><td style="padding:12px 16px;font-weight:700"><a class="jump-link" href="#c_sloomcb_6" onclick="return jumpTo('c_sloomcb_6')">6. 전화주문</a></td></tr>
  <tr><td style="padding:12px 16px;font-weight:700"><a class="jump-link" href="#c_sloomcb_3" onclick="return jumpTo('c_sloomcb_3')">3. 반품·환불일정</a></td><td style="padding:12px 16px;font-weight:700"><a class="jump-link" href="#c_sloomcb_7" onclick="return jumpTo('c_sloomcb_7')">7. 주문취소 요청</a></td></tr>
  <tr><td style="padding:12px 16px;font-weight:700"><a class="jump-link" href="#c_sloomcb_4" onclick="return jumpTo('c_sloomcb_4')">4. 오배송·미배송</a></td><td style="padding:12px 16px;font-weight:700"><a class="jump-link" href="#c_sloomcb_8" onclick="return jumpTo('c_sloomcb_8')">8. 취소 후 배송·회수</a></td></tr>
  </tbody></table></div>

  <div class="h1lvl" id="c_sloomcb_1"><span class="num">1</span>교환·반품 철회 요청</div>
  <div class="quote-box"><b>☑️ 교환 또는 반품 신청 건에 대한 철회 요청</b></div>
  <div class="grid2">
  <div class="star-note"><div class="star-h"><b>🔎 확인 기준</b><span class="spacer"></span></div><div class="star-body">고객이 남긴 연락처로 주문 정보를 조회하여 현재 진행 중인 교환/반품 접수 건 유무 및 회수 상태를 확인합니다.<br>⚠️ 제품 회수(수거) 전 건에 한해 철회가 가능합니다.</div></div>
  <div class="branch-box">
    <div class="branch-h">💡 접수 건 유무·회수 상태에 따라 분기</div>
    <table class="branch-tbl"><tbody>
    <tr><td class="cond">접수 건 있음 · <b>회수 진행 전</b></td><td class="ar">→</td><td><span class="bdg b-blue">CASE 1 · 철회 가능</span></td></tr>
    <tr><td class="cond">접수 건 있음 · <b>회수 진행 중</b></td><td class="ar">→</td><td><span class="bdg b-amber">CASE 2 · 철회 불가</span></td></tr>
    <tr><td class="cond">접수 건 <b>없음</b></td><td class="ar">→</td><td><span class="bdg b-pink">CASE 3 · 확인 불가</span></td></tr>
    </tbody></table>
  </div>
  </div>

  <div class="grp-h">CASE 1 · 접수 건 있음 (회수 진행 전) → 철회 가능</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:50%"><col></colgroup><thead><tr><th class="cmp-corner">프로세스</th><th class="cmp-blue">알리고 템플릿</th></tr></thead><tbody>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">① 어드민(아임웹) 주문 상태 원복
② 후처리 시트 J열(반품 메모) 기재 (ex: 0826 반품철회)
③ 고객 연락처로 철회 완료 알림톡(알리고) 발송</td><td style="padding:12px">${cbTpl(`[CS] 슬룸_콜백_교환·반품 철회 완료`, `UH_8982`,
`안녕하세요 고객님, 슬룸 고객센터입니다.

요청하신 교환·반품 철회가 완료되었습니다.

다른 문의 사항이 있으실 경우 슬룸 채팅 상담으로 문의 부탁 드립니다.

※ 슬룸은 채팅 상담을 카카오톡으로 진행하지 않습니다. 사칭 채널에 유의해주세요.
→ 대화창 내 [혜택 보기] > [고객센터] 클릭`)}</td></tr>
  </tbody></table></div>

  <div class="grp-h">CASE 2 · 접수 건 있음 (회수 진행 중) → 철회 불가</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:50%"><col></colgroup><thead><tr><th class="cmp-corner">프로세스</th><th class="cmp-blue">유저챗 템플릿</th></tr></thead><tbody>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">① 고객 연락처로 접수된 교환/반품 회수 건 회수 송장 조회
② 고객 연락처로 "새 상담 열기" 안내 메시지 발송
③ 태그 : 콜백OB + 교환/반품 철회요청</td><td style="padding:12px">${cbTpl(`[유저챗] 교환반품_철회요청_철회불가`, null,
`안녕하세요 고객님, 슬룸 고객센터입니다.

요청하신 교환/반품 철회 요청은 이미 제품이 회수되어 반송 중인 상태로 철회가 어렵습니다.`, null, true)}
    <div class="ph" style="margin-top:10px">👉 회수 진행 중으로 철회 불가 안내 후, 기존 교환/반품 접수 유형에 따른 후속 처리 절차 안내<br>※ 기존 <b>교환_재출고</b> / <b>반품_환불</b> 안내 멘트 기반으로 발송 문구 작성</div>
  </td></tr>
  </tbody></table></div>

  <div class="grp-h">CASE 3 · 접수 건 없음 → 확인 불가</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:50%"><col></colgroup><thead><tr><th class="cmp-corner">프로세스</th><th class="cmp-blue">알리고 템플릿</th></tr></thead><tbody>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">① 고객 연락처로 교환/반품 접수 이력 확인 불가 안내 알림톡(알리고) 발송</td><td style="padding:12px">${cbTpl(`[CS] 슬룸_콜백_교환반품_확인불가`, `UE_4486`,
`안녕하세요 고객님, 슬룸 고객센터입니다.

접수된 주문자 정보로 교환·반품 접수 이력이 확인되지 않습니다.

교환·반품 접수 접수는 슬룸 채팅 상담으로 문의 부탁 드립니다.


※ 슬룸은 채팅 상담을 카카오톡으로 진행하지 않습니다. 사칭 채널에 유의해주세요.
→ 대화창 내 [혜택 보기] > [고객센터] 클릭`)}</td></tr>
  </tbody></table></div>

  <div class="h1lvl" id="c_sloomcb_2"><span class="num">2</span>교환제품 배송일정</div>
  <div class="quote-box"><b>☑️ 교환 접수 건의 출고(배송) 일정 문의</b></div>
  <div class="grid2">
  <div class="star-note"><div class="star-h"><b>🔎 확인 기준</b><span class="spacer"></span></div><div class="star-body">고객이 남긴 연락처로 주문 정보를 조회하여 진행 중인 교환 접수 건 유무를 확인합니다.</div></div>
  <div class="branch-box">
    <div class="branch-h">💡 접수 건 유무에 따라 분기</div>
    <table class="branch-tbl"><tbody>
    <tr><td class="cond">교환 접수 건 <b>있음</b></td><td class="ar">→</td><td><span class="bdg b-blue">CASE 1 · 교환 현황 확인</span></td></tr>
    <tr><td class="cond">교환 접수 건 <b>없음</b></td><td class="ar">→</td><td><span class="bdg b-pink">CASE 2 · 확인 불가</span></td></tr>
    </tbody></table>
  </div>
  </div>

  <div class="grp-h">CASE 1 · 교환 접수 건 있음 → 교환 현황 확인</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:50%"><col></colgroup><thead><tr><th class="cmp-corner">프로세스</th><th class="cmp-blue">유저챗 템플릿</th></tr></thead><tbody>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">① 수기 출고 시트에서 출고 송장 조회
② 고객 연락처로 "새 상담 열기" 안내 메시지 발송
（단, 고객 지역에 아직 도착하지 않아 배송기사 정보 없는 경우에는 템플릿 내용 수정하여 안내）
③ 태그 : 콜백OB + 교환 현황 확인</td><td style="padding:12px">${cbTpl(`[유저챗] 교환현황확인_배송완료안내 (상담 템플릿 준용)`, null,
`안녕하세요 고객님,
슬룸 고객센터입니다.

이전 교환 안내받으신 제품의 배송 일정 안내드립니다.

고객님의 교환 제품은 (배송완료 날짜) 정상 배송완료로 확인됩니다.
정확한 확인을 위해 운송장 번호와 배송 사원 정보 안내드리겠습니다.

▶ 운송장번호 : (기재)
▶ 배송사원 : (성함/연락처)
▶ CJ대한통운 콜센터 : 1588-1255

해당 내용 참고를 부탁드리며, 이 외의 자세한 배송 문의는 위 택배사측으로 문의를 부탁드립니다.
감사합니다.`)}</td></tr>
  </tbody></table></div>

  <div class="grp-h">CASE 2 · 교환 접수 건 없음 → 확인 불가</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:50%"><col></colgroup><thead><tr><th class="cmp-corner">프로세스</th><th class="cmp-blue">알리고 템플릿</th></tr></thead><tbody>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">① 고객 연락처로 교환 접수 이력 확인 불가 안내 알림톡(알리고) 발송</td><td style="padding:12px">${cbTpl(`[CS] 슬룸_콜백_교환반품_확인불가`, `UE_4486`,
`안녕하세요 고객님, 슬룸 고객센터입니다.

접수된 주문자 정보로 교환·반품 접수 이력이 확인되지 않습니다.

교환·반품 접수는 슬룸 채팅 상담으로 문의 부탁 드립니다.

※ 슬룸은 채팅 상담을 카카오톡으로 진행하지 않습니다. 사칭 채널에 유의해주세요.
→ 대화창 내 [혜택 보기] > [고객센터] 클릭`)}</td></tr>
  </tbody></table></div>

  <div class="h1lvl" id="c_sloomcb_3"><span class="num">3</span>반품·환불일정</div>
  <div class="quote-box"><b>☑️ 반품 접수 건의 환불(처리) 일정 문의</b></div>
  <div class="grid2">
  <div class="star-note"><div class="star-h"><b>🔎 확인 기준</b><span class="spacer"></span></div><div class="star-body">고객이 남긴 연락처로 후처리 시트의 반품 접수 내역을 조회하여 진행 상태를 확인합니다.<br>⚠️ 검품 완료 상태이나 환불이 지연된 경우 반품 처리 후 안내가 필요합니다.</div></div>
  <div class="branch-box">
    <div class="branch-h">💡 접수 건 유무에 따라 분기</div>
    <table class="branch-tbl"><tbody>
    <tr><td class="cond">반품 접수 건 <b>있음</b></td><td class="ar">→</td><td><span class="bdg b-blue">CASE 1 · 상태별 안내</span></td></tr>
    <tr><td class="cond">반품 접수 건 <b>없음</b></td><td class="ar">→</td><td><span class="bdg b-pink">CASE 2 · 확인 불가</span></td></tr>
    </tbody></table>
  </div>
  </div>

  <div class="grp-h">CASE 1 · 반품 접수 건 있음 → 상태에 맞춰 알림톡 발송</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:50%"><col></colgroup><thead><tr><th class="cmp-corner">상태</th><th class="cmp-blue">알리고 템플릿</th></tr></thead><tbody>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">접수 후 거절</td><td style="padding:12px">${cbTpl(`[CS] 슬룸_교환반품_사유확인필요`, `UI_4803`,
`안녕하세요 고객님,
슬룸 고객센터입니다.

요청하신 교환·반품은 아래 사유로 진행이 어렵습니다.

■ 불가 사유 : 신청 사유 재확인 필요
■ 단순 변심 교환·반품 승인 조건 :
- 제품 수령일로부터 7일 이내
- 미개봉 또는 개봉 후 미작동

※ 상품의 구성 확인을 위해 포장만 단순 개봉한 경우 신청이 가능합니다.
※ 개봉 후 사용 제품은 교환·반품이 불가하며, 슬룸 공식몰 구매자 대상으로는 &lt;100%환불이벤트&gt;를 진행 중입니다. 하단의 [100%환불이벤트 공지] 버튼을 클릭하여 확인해주세요.

관련해서 추가 문의 사항이 있으실 경우 슬룸 고객센터로 문의 부탁드립니다.

※ 슬룸은 채팅 상담을 카카오톡으로 진행하지 않습니다. 사칭 채널에 유의해 주세요.
→ 대화창 내 [채팅방 메뉴] 클릭 &gt; [고객센터] 클릭`)}</td></tr>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">AS 접수 필요</td><td style="padding:12px">${cbTpl(`[CS] 슬룸_AS접수안내`, `UE_4473`,
`안녕하세요 고객님, 슬룸 고객센터입니다.

요청하신 교환·반품은 아래 사유로 즉시 진행이 어렵습니다.

■ 불가 사유 : A/S 접수 필요
■ A/S 접수 링크 클릭 → 불량 증상 선택 → 제품 선택 → 상세 증상 선택 → 구매하신 쇼핑몰 선택 → 원하시는 처리 방안 선택 후 간편 접수

■ 아래의 A/S 접수 전 유의 사항도 꼭 확인 부탁드립니다.
1. A/S는 구매 후 6개월 이내는 무상, 6개월부터 최대 1년까지는 유상으로 진행되며, 1년 이후에는 보증 기간 만료로 인해 접수할 수 없습니다.
2. 제품 회수 전에는 직접 확인이 어려운 온라인 판매 특성 상, 사용 미숙으로 인한 작동의 어려움이 있을 수 있습니다.
2-1. 특히, 정상품의 경우 다시 반송되기에 불필요하게 제품을 사용하지 못하는 번거로움이 발생할 수 있기에 정확한 안내를 위해 불량 증상 영상이나 사진을 꼭 함께 전달 부탁드립니다.

관련해서 추가 문의 사항이 있으실 경우 슬룸 고객센터로 문의 부탁 드립니다.

※ 슬룸은 채팅 상담을 카카오톡으로 진행하지 않습니다. 사칭 채널에 유의해주세요.`)}</td></tr>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">배송비 입금 필요</td><td style="padding:12px">${cbTpl(`[CS] 슬룸_반품배송비 안내`, `UE_4475`,
`안녕하세요 고객님, 슬룸 고객센터입니다.

요청하신 교환·반품은 네이버페이 결제로, 반품 배송비 입금 후 접수 가능하여 안내드립니다.

■ 반품 배송비 및 계좌 정보
- 배송비 : 6,000원
- 계좌 : 기업은행 075-095980-04-017
- 예금주 : 주식회사 올릿리테일
* 입금은 영업일 기준 1일 내 확인되며, 확인 후 반품 접수 및 수거가 순차적으로 진행됩니다.

관련해서 추가 문의 사항이 있으실 경우 슬룸 고객센터로 문의 부탁 드립니다.

※ 슬룸은 채팅 상담을 카카오톡으로 진행하지 않습니다. 사칭 채널에 유의해주세요.
→ 대화창 내 [혜택 보기] > [고객센터] 클릭`)}</td></tr>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">반품 완료</td><td style="padding:12px">${cbTpl(`[CS] 슬룸_반품완료`, `UE_4476`,
`안녕하세요 고객님, 슬룸 고객센터입니다.

요청하신 제품의 '반품 처리가 완료'되어 안내드립니다.

■ 환불 관련 안내
- 신용/체크카드: 승인 취소 또는 계좌 환급까지 영업일 기준 3~5일 소요됩니다.
※ 네이버페이 결제일 경우, 네이버페이 환불 금액을 확인해주세요.
- 무통장/가상 계좌 결제: 영업일 기준 1~2일 이내 환불 처리됩니다.
- 유효기간이 남아있는 쿠폰 및 적립금은 자동으로 환급됩니다.

관련해서 추가 문의 사항이 있으실 경우 슬룸 고객센터로 문의 부탁 드립니다.

※ 슬룸은 채팅 상담을 카카오톡으로 진행하지 않습니다. 사칭 채널에 유의해주세요.
→ 대화창 내 [혜택 보기] > [고객센터] 클릭`)}</td></tr>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">검수 시간양해 필요</td><td style="padding:12px">${cbTpl(`[CS] 슬룸_콜백_환불일정_시간양해`, `UE_4488`,
`안녕하세요 고객님, 슬룸 고객센터입니다.

접수된 주문자 정보로 확인 시, 회수 상품이 도착 전 또는 검수가 완료되지 않은 것으로 확인됩니다.

상품이 도착하더라도 검수 이후 환불되며, 검수 완료 후 최종 확인까지는 영업일 기준 2~3일 정도 소요될 수 있는 점 양해 부탁드립니다.

최대한 신속하게 처리해드릴 수 있도록 노력하겠습니다.

관련해서 추가 문의 사항이 있으실 경우 슬룸 고객센터로 문의 부탁 드립니다.

※ 슬룸은 채팅 상담을 카카오톡으로 진행하지 않습니다. 사칭 채널에 유의해주세요.
→ 대화창 내 [혜택 보기] > [고객센터] 클릭`)}</td></tr>
  </tbody></table></div>

  <div class="grp-h">CASE 2 · 반품 접수 건 없음 → 확인 불가</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:50%"><col></colgroup><thead><tr><th class="cmp-corner">프로세스</th><th class="cmp-blue">알리고 템플릿</th></tr></thead><tbody>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">① 고객 연락처로 반품 접수 이력 확인 불가 안내 알림톡(알리고) 발송</td><td style="padding:12px">${cbTpl(`[CS] 슬룸_콜백_교환반품_확인불가`, `UE_4486`,
`안녕하세요 고객님, 슬룸 고객센터입니다.

접수된 주문자 정보로 교환·반품 접수 이력이 확인되지 않습니다.

교환·반품 접수는 슬룸 채팅 상담으로 문의 부탁 드립니다.

※ 슬룸은 채팅 상담을 카카오톡으로 진행하지 않습니다. 사칭 채널에 유의해주세요.
→ 대화창 내 [혜택 보기] > [고객센터] 클릭`)}</td></tr>
  </tbody></table></div>

  <div class="h1lvl" id="c_sloomcb_4"><span class="num">4</span>오배송·미배송</div>
  <div class="quote-box"><b>☑️ 오배송 또는 미배송 문의이나 다른 옵션이 배송된 오배송 탐색 미진행 상황으로, 미배송 유형만 다룸</b></div>
  <div class="grid2">
  <div class="star-note"><div class="star-h"><b>🔎 확인 기준</b><span class="spacer"></span></div><div class="star-body">정상 출고 내역 확인 후 배송 흐름을 조회합니다.<br>⚠️ 도착지가 고객 입력 주소지가 맞는지와 반송 이력 유무를 확인합니다.</div></div>
  <div class="branch-box">
    <div class="branch-h">💡 주문 건 유무·배송 흐름 정상 여부에 따라 분기</div>
    <table class="branch-tbl"><tbody>
    <tr><td class="cond">미배송 · 주문 건 있음 · <b>정상 흐름</b></td><td class="ar">→</td><td><span class="bdg b-blue">CASE 1 · 배송 정보 안내</span></td></tr>
    <tr><td class="cond">미배송 · 주문 건 있음 · <b>비정상 흐름</b></td><td class="ar">→</td><td><span class="bdg b-amber">CASE 2 · 물류사 확인 안내</span></td></tr>
    <tr><td class="cond">주문 건 <b>없음</b></td><td class="ar">→</td><td><span class="bdg b-pink">CASE 3 · 확인 불가</span></td></tr>
    </tbody></table>
  </div>
  </div>

  <div class="grp-h">CASE 1 · 미배송 : 주문 건 있음 (정상 흐름) → 배송 정보 안내</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:50%"><col></colgroup><thead><tr><th class="cmp-corner">프로세스</th><th class="cmp-blue">유저챗 템플릿</th></tr></thead><tbody>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">① 정상 출고 내역 확인 후 배송 흐름 확인, 반송 이력 여부 체크
② 택배사 배송조회 내역 확인
③ 고객 연락처로 "새 상담 열기" 안내 메시지 발송
④ 태그 : 콜백OB + 미배송</td><td style="padding:12px">${cbTpl(`[유저챗] 미배송_배송완료안내 (상담 템플릿 준용)`, null,
`안녕하세요 고객님,
슬룸 고객센터입니다.

고객님 주문건 확인 시 (배송완료 날짜) 정상 배송완료로 확인됩니다.
정확한 확인을 위해 운송장 번호와 배송 사원 정보 안내드리겠습니다. 🥲

▶ 운송장번호 : (기재)
▶ 배송사원 : (성함/연락처)
▶ CJ대한통운 콜센터 : 1588-1255

번거로우시겠지만 해당 정보로 택배사 측에 기사 과실에 따른 주소 오배송·분실 여부 문의 부탁드립니다.`)}</td></tr>
  </tbody></table></div>

  <div class="grp-h">CASE 2 · 미배송 : 주문 건 있음 (비정상 흐름) → 물류사 확인 안내</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:50%"><col></colgroup><thead><tr><th class="cmp-corner">프로세스</th><th class="cmp-blue">유저챗 템플릿</th></tr></thead><tbody>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">① 정상 출고 내역 확인 후 배송 흐름 확인, 반송 이력 여부 체크
② 물류사(품고/정석 등) 확인 요청
③ 고객 연락처로 "새 상담 열기" 안내 메시지 발송 후 채팅 보류 설정
④ 내부 공유된 배송 건(출고누락, 파손 반송 등) 확인된 답변 추가 안내
⑤ 태그 : 콜백OB + 미배송</td><td style="padding:12px">${cbTpl(`[유저챗] 미배송_물류사확인 안내`, null,
`안녕하세요 고객님,
슬룸 고객센터입니다.

먼저 기대하고 주문하신 제품 배송으로 불편을 드려 죄송합니다.

고객님 주문건 확인 시 배송 흐름 이상이 확인됩니다.
이에 물류사에 상세한 확인 요청을 전달하였으며,
답변이 오는 즉시 고객님께 정확한 내용으로 안내드릴 수 있도록 하겠습니다.

물류사 → 택배사의 확인 답변을 전달받아 안내드리는 구조 상,
확인에 시간이 소요되어 즉각적인 답변 도와드리지 못하는 점 너른 이해를 부탁드립니다.`)}</td></tr>
  </tbody></table></div>

  <div class="grp-h">CASE 3 · 주문 건 없음 → 확인 불가</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:50%"><col></colgroup><thead><tr><th class="cmp-corner">프로세스</th><th class="cmp-blue">알리고 템플릿</th></tr></thead><tbody>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">① 고객 연락처로 배송 문제 확인 불가 안내 알림톡(알리고) 발송</td><td style="padding:12px">${cbTpl(`[CS] 슬룸_콜백_배송이슈_확인불가`, `UE_4484`,
`안녕하세요 고객님, 슬룸 고객센터입니다.

접수된 주문자 정보로 배송 문제로 접수 가능한 주문건이 확인되지 않습니다.

다른 문의가 있으시다면, 슬룸 채팅 상담으로 문의 부탁 드립니다.

※ 슬룸은 채팅 상담을 카카오톡으로 진행하지 않습니다. 사칭 채널에 유의해주세요.
→ 대화창 내 [혜택 보기] > [고객센터] 클릭`)}</td></tr>
  </tbody></table></div>

  <div class="h1lvl" id="c_sloomcb_5"><span class="num">5</span>재회수 접수</div>
  <div class="quote-box"><b>☑️ 기존 교환·반품 접수 건의 재회수(재수거) 요청</b></div>
  <div class="grid2">
  <div class="star-note"><div class="star-h"><b>🔎 확인 기준</b><span class="spacer"></span></div><div class="star-body">후처리 시트의 교환/반품 접수 이력을 확인하여 접수 일자를 기준으로 분기합니다.</div></div>
  <div class="branch-box">
    <div class="branch-h">💡 접수 건 유무·경과일에 따라 분기</div>
    <table class="branch-tbl"><tbody>
    <tr><td class="cond">접수 건 있음 · <b>3영업일 이내</b></td><td class="ar">→</td><td><span class="bdg b-blue">CASE 1 · 수거 안내</span></td></tr>
    <tr><td class="cond">접수 건 있음 · <b>3영업일 이후</b></td><td class="ar">→</td><td><span class="bdg b-amber">CASE 2 · 재회수 접수 안내</span></td></tr>
    <tr><td class="cond">접수 건 <b>없음</b></td><td class="ar">→</td><td><span class="bdg b-pink">CASE 3 · 확인 불가</span></td></tr>
    </tbody></table>
  </div>
  </div>

  <div class="grp-h">CASE 1 · 접수 건 있음 (3영업일 이내) → 수거 안내</div>
  ${caution(`💡 접수일로부터 3영업일 이내면 기존 수거 신청(운송장)이 아직 유효한 상태 — 최초 접수 시와 동일한 수거 안내만 다시 발송`)}
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:50%"><col></colgroup><thead><tr><th class="cmp-corner">프로세스</th><th class="cmp-blue">알리고 템플릿</th></tr></thead><tbody>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">① 후처리 시트의 교환/반품 접수 이력 확인
② 접수 일자에 맞게 알림톡(알리고) 발송</td><td style="padding:12px">${cbTpl(`[CS] 슬룸_교환반품_수거안내_CJ`, `UI_9966`,
`안녕하세요 고객님, 슬룸 고객센터입니다.

요청하신 교환·반품의 '수거 접수가 완료'되었습니다.

■ 수거 안내
1. 영업일 기준 1~3일 내 배송 진행한 택배사(CJ대한통운)에서 연락 후 방문 수거 예정입니다.
2. 제품은 택배 박스에 포장 후 기사 방문 시 전달 부탁드립니다.
* 사은품·증정품 포함 전체 포장
3. 수거 후, 반품 완료까지는 영업일 기준 약 5일 소요될 수 있습니다.
4. 수거 후, 교환 제품 재출고는 영업일 기준 약 5일 소요될 수 있습니다.

관련해서 추가 문의 사항이 있으실 경우 슬룸 고객센터로 문의 부탁 드립니다.

※ 슬룸은 채팅 상담을 카카오톡으로 진행하지 않습니다. 사칭 채널에 유의해주세요.
→ 대화창 내 [혜택 보기] > [고객센터] 클릭`)}</td></tr>
  </tbody></table></div>

  <div class="grp-h">CASE 2 · 접수 건 있음 (3영업일 이후) → 재회수 접수 안내</div>
  ${caution(`💡 접수일로부터 3영업일이 지나면 기존 운송장이 만료·폐기되어 무조건 재회수(수거 재신청)가 필요한 상태`)}
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:50%"><col></colgroup><thead><tr><th class="cmp-corner">프로세스</th><th class="cmp-blue">알리고 템플릿</th></tr></thead><tbody>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">① 후처리 시트의 교환/반품 접수 이력 확인
② 3영업일 경과로 재회수접수 안내 알림톡(알리고) 발송</td><td style="padding:12px">${cbTpl(`[CS] 슬룸_콜백_교환반품_재회수접수_CJ`, `UH_6710`,
`안녕하세요 고객님, 슬룸 고객센터입니다.

요청하신 재회수 접수가 완료되었습니다.

■ 수거 안내
1. 영업일 기준 1~3일 내 배송 진행한 택배사(CJ대한통운)에서 연락 후 방문 수거 예정입니다.
2. 제품은 택배 박스에 포장 후 기사 방문 시 전달 부탁드립니다.
3. 수거 후, 반품 완료까지는 영업일 기준 약 5일 소요될 수 있습니다.
4. 수거 후, 교환 제품 재출고는 영업일 기준 약 5일 소요될 수 있습니다.

번거롭게 해드려 대단히 죄송합니다. 관련해서 추가 문의 사항이 있으실 경우 슬룸 고객센터로 문의 부탁 드립니다.

※ 슬룸은 채팅 상담을 카카오톡으로 진행하지 않습니다. 사칭 채널에 유의해주세요.
→ 대화창 내 [혜택 보기] > [고객센터] 클릭`)}</td></tr>
  </tbody></table></div>

  <div class="grp-h">CASE 3 · 접수 건 없음 → 확인 불가</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:50%"><col></colgroup><thead><tr><th class="cmp-corner">프로세스</th><th class="cmp-blue">알리고 템플릿</th></tr></thead><tbody>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">① 고객 연락처로 교환/반품 접수 이력 확인 불가 안내 알림톡(알리고) 발송</td><td style="padding:12px">${cbTpl(`[CS] 슬룸_콜백_교환반품_확인불가`, `UE_4486`,
`안녕하세요 고객님, 슬룸 고객센터입니다.

접수된 주문자 정보로 교환·반품 접수 이력이 확인되지 않습니다.

교환·반품 접수는 슬룸 채팅 상담으로 문의 부탁 드립니다.

※ 슬룸은 채팅 상담을 카카오톡으로 진행하지 않습니다. 사칭 채널에 유의해주세요.
→ 대화창 내 [혜택 보기] > [고객센터] 클릭`)}</td></tr>
  </tbody></table></div>

  <div class="h1lvl" id="c_sloomcb_6"><span class="num">6</span>전화주문</div>
  <div class="quote-box"><b>☑️ 전화 주문 요청 · OB 필요</b></div>
  <div class="grid2">
  <div class="star-note"><div class="star-h"><b>🔎 확인 기준</b><span class="spacer"></span></div><div class="star-body">고객이 남긴 연락처로 온라인 주문 이력 유무를 확인합니다.<br>⚠️ 실제 전화 주문 건은 유선 OB가 필수입니다.</div></div>
  <div class="branch-box">
    <div class="branch-h">💡 주문 건 유무에 따라 분기</div>
    <table class="branch-tbl"><tbody>
    <tr><td class="cond">주문 건 <b>없음</b></td><td class="ar">→</td><td><span class="bdg b-blue">CASE 1 · OB 진행 후 전화 주문 안내</span></td></tr>
    <tr><td class="cond">주문 건 <b>있음</b></td><td class="ar">→</td><td><span class="bdg b-pink">CASE 2 · 확인 불가</span></td></tr>
    </tbody></table>
  </div>
  </div>

  <div class="grp-h">CASE 1 · 주문 건 없음 → OB 진행 후 전화 주문 안내</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:50%"><col></colgroup><thead><tr><th class="cmp-corner">프로세스</th><th class="cmp-blue">참고 사항</th></tr></thead><tbody>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">① 고객 연락처로 알림톡(알리고) 발송
② 유선 OB 진행하여 전화 구매 안내
（실제 전화 주문이 아닌 경우 채팅 상담으로 유도）
③ 태그 : 콜백OB + 전화 주문</td><td style="padding:20px 12px;text-align:center;color:var(--muted,#9aa0a8);font-size:13px;line-height:1.6"><a href="#" onclick="return jumpToOB()" style="color:var(--acc,#4a8cff);text-decoration:underline">유선 표준 응대 가이드</a>를 참고하여 OB 진행</td></tr>
  </tbody></table></div>

  <div class="grp-h">CASE 2 · 주문 건 있음 → 확인 불가</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:50%"><col></colgroup><thead><tr><th class="cmp-corner">프로세스</th><th class="cmp-blue">알리고 템플릿</th></tr></thead><tbody>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">① 고객 연락처로 온라인 주문이력 확인 알림톡(알리고) 발송</td><td style="padding:12px">${cbTpl(`[CS] 슬룸_콜백_전화주문_확인불가`, `UH_8560`,
`안녕하세요 고객님, 슬룸 고객센터입니다.

전화 주문 문의주셨으나 온라인 주문이력이 확인되어 문자 발송드립니다.

다른 문의 사항이 있으실 경우 슬룸 채팅 상담으로 문의 부탁 드립니다.

※ 슬룸은 채팅 상담을 카카오톡으로 진행하지 않습니다. 사칭 채널에 유의해주세요.
→ 대화창 내 [혜택 보기] > [고객센터] 클릭`)}</td></tr>
  </tbody></table></div>

  <div class="h1lvl" id="c_sloomcb_7"><span class="num">7</span>주문취소 요청</div>
  <div class="quote-box"><b>☑️ 주문 취소 요청</b></div>
  <div class="grid2">
  <div class="star-note"><div class="star-h"><b>🔎 확인 기준</b><span class="spacer"></span></div><div class="star-body">고객 연락처로 주문 내역을 조회하여 품고(출고 준비) 상태에 따라 취소 가능 여부를 확인합니다.</div></div>
  <div class="branch-box">
    <div class="branch-h">💡 주문 건 유무·취소 가능 여부에 따라 분기</div>
    <table class="branch-tbl"><tbody>
    <tr><td class="cond">주문 건 있음 · <b>취소 가능</b></td><td class="ar">→</td><td><span class="bdg b-blue">CASE 1 · 취소 승인</span></td></tr>
    <tr><td class="cond">주문 건 있음 · <b>취소 불가</b></td><td class="ar">→</td><td><span class="bdg b-amber">CASE 2 · 취소 불가</span></td></tr>
    <tr><td class="cond">주문 건 <b>없음</b></td><td class="ar">→</td><td><span class="bdg b-pink">CASE 3 · 확인 불가</span></td></tr>
    </tbody></table>
  </div>
  </div>

  <div class="grp-h">CASE 1 · 주문 건 있음 (취소 가능) → 취소 승인</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:50%"><col></colgroup><thead><tr><th class="cmp-corner">프로세스</th><th class="cmp-blue">알리고 템플릿</th></tr></thead><tbody>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">① 품고 조회 후 취소 가능 상태 확인
② 고객 연락처로 취소 승인 알림톡(알리고) 발송</td><td style="padding:12px">${cbTpl(`[CS] 슬룸_콜백_주문취소_승인`, `UE_4489`,
`안녕하세요 고객님, 슬룸 고객센터입니다.

요청하신 주문 취소가 완료되어 안내드립니다.

■ 환불 관련 안내
- 신용/체크카드: 승인 취소 또는 계좌 환급까지 영업일 기준 3~5일 소요됩니다.
※ 네이버페이 결제일 경우, 네이버페이 환불 금액을 확인해주세요.
- 무통장/가상 계좌 결제: 영업일 기준 1~2일 이내 환불 처리됩니다.
- 유효기간이 남아있는 쿠폰 및 적립금은 자동으로 환급됩니다.

관련해서 추가 문의 사항이 있으실 경우 슬룸 고객센터로 문의 부탁 드립니다.

※ 슬룸은 채팅 상담을 카카오톡으로 진행하지 않습니다. 사칭 채널에 유의해주세요.
→ 대화창 내 [혜택 보기] > [고객센터] 클릭`)}</td></tr>
  </tbody></table></div>

  <div class="grp-h">CASE 2 · 주문 건 있음 (취소 불가) → 취소 불가 안내</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:50%"><col></colgroup><thead><tr><th class="cmp-corner">프로세스</th><th class="cmp-blue">알리고 템플릿</th></tr></thead><tbody>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">① 품고 조회 후 취소 불가(출고 완료) 상태 확인
② 고객 연락처로 취소 불가 알림톡(알리고) 발송</td><td style="padding:12px">${cbTpl(`[CS] 슬룸_콜백_주문취소_불가`, `UE_4490`,
`안녕하세요 고객님, 슬룸 고객센터입니다.

요청하신 주문 취소는 아래 사유로 진행이 어렵습니다.

■ 불가 사유 : 출고 완료
※ 출고가 완료된 이후 취소 요청 시, 제품 수령 후 '단순변심'으로 반품 접수가 필요하며 왕복 택배비 6,000원이 발생합니다.

관련해서 추가 문의 사항이 있으실 경우 슬룸 고객센터로 문의 부탁 드립니다.

※ 슬룸은 채팅 상담을 카카오톡으로 진행하지 않습니다. 사칭 채널에 유의해주세요.
→ 대화창 내 [혜택 보기] > [고객센터] 클릭`)}</td></tr>
  </tbody></table></div>

  <div class="grp-h">CASE 3 · 주문 건 없음 → 확인 불가</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:50%"><col></colgroup><thead><tr><th class="cmp-corner">프로세스</th><th class="cmp-blue">알리고 템플릿</th></tr></thead><tbody>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">① 고객 연락처로 주문 취소 접수 가능 건 확인 불가 알림톡(알리고) 발송</td><td style="padding:12px">${cbTpl(`[CS] 슬룸_콜백_주문취소_확인불가`, `UH_8983`,
`안녕하세요 고객님, 슬룸 고객센터입니다.

접수된 주문자 정보로 주문 취소 접수가 가능한 주문 건이 확인되지 않습니다.

다른 문의 사항이 있으실 경우 슬룸 채팅 상담으로 문의 부탁 드립니다.

※ 슬룸은 채팅 상담을 카카오톡으로 진행하지 않습니다. 사칭 채널에 유의해주세요.
→ 대화창 내 [혜택 보기] > [고객센터] 클릭`)}</td></tr>
  </tbody></table></div>

  <div class="h1lvl" id="c_sloomcb_8"><span class="num">8</span>취소 후 배송·회수</div>
  <div class="quote-box"><b>☑️ 취소 처리 이후 이미 출고된 주문 건의 회수</b></div>
  <div class="grid2">
  <div class="star-note"><div class="star-h"><b>🔎 확인 기준</b><span class="spacer"></span></div><div class="star-body">고객 연락처로 취소 후 배송 진행 이력을 조회합니다.<br>⚠️ 취소 요청 시점과 출고 시스템 간 시간차로 이미 출고된 경우에 해당합니다.</div></div>
  <div class="branch-box">
    <div class="branch-h">💡 취소 후 출고 건 유무에 따라 분기</div>
    <table class="branch-tbl"><tbody>
    <tr><td class="cond">취소 후 배송 건 <b>있음</b></td><td class="ar">→</td><td><span class="bdg b-blue">CASE 1 · 회수 안내</span></td></tr>
    <tr><td class="cond">취소 후 배송 건 <b>없음</b></td><td class="ar">→</td><td><span class="bdg b-pink">CASE 2 · 확인 불가</span></td></tr>
    </tbody></table>
  </div>
  </div>

  <div class="grp-h">CASE 1 · 취소 후 배송 건 있음 → 회수 안내</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:50%"><col></colgroup><thead><tr><th class="cmp-corner">프로세스</th><th class="cmp-blue">알리고 템플릿</th></tr></thead><tbody>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">① 고객 연락처로 취소 후 배송(회수 필요) 안내 알림톡(알리고) 발송</td><td style="padding:12px">${cbTpl(`[CS] 슬룸_취소후배송_안내`, `UE_4709`,
`안녕하세요 고객님, 슬룸 고객센터입니다.

고객님께서 신청해주신 주문 취소 건 관련하여 안내드립니다.

신청해주신 주문은 취소 요청 시점과 출고 시스템 간의 시간 차로 인해 이미 출고가 진행된 상태로 확인됩니다.

현재 시스템상 취소 처리는 완료되었으나, 제품 회수가 필요한 상황입니다.

번거로우시겠지만, 제품 수령 후 택배 포장 그대로 보관해 주시고, 회수 예정 택배기사님 연락 시 문 앞 보관 또는 제품 전달을 부탁드립니다.

관련해서 추가 문의 사항이 있으실 경우 슬룸 고객센터로 문의 부탁 드립니다.

※ 슬룸은 채팅 상담을 카카오톡으로 진행하지 않습니다. 사칭 채널에 유의해주세요.
→ 대화창 내 [혜택 보기] > [고객센터] 클릭`)}</td></tr>
  </tbody></table></div>

  <div class="grp-h">CASE 2 · 취소 후 배송 건 없음 → 확인 불가</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:50%"><col></colgroup><thead><tr><th class="cmp-corner">프로세스</th><th class="cmp-blue">알리고 템플릿</th></tr></thead><tbody>
  <tr><td style="white-space:pre-line;padding:14px 16px;line-height:1.9">① 고객 연락처로 취소 후 배송 진행 이력 확인 불가 안내 알림톡(알리고) 발송</td><td style="padding:12px">${cbTpl(`[CS] 슬룸_콜백_취소후배송_확인불가`, `UE_4481`,
`안녕하세요 고객님, 슬룸 고객센터입니다.

접수된 주문자 정보로 주문 취소 후 배송 진행 이력이 확인되지 않습니다.

다른 문의가 있으시다면, 슬룸 채팅 상담으로 문의 부탁 드립니다.

※ 슬룸은 채팅 상담을 카카오톡으로 진행하지 않습니다. 사칭 채널에 유의해주세요.
→ 대화창 내 [혜택 보기] > [고객센터] 클릭`)}</td></tr>
  </tbody></table></div>
</div>`;



const DASH_HOME = `
  <h1>🏠 올릿 CS 응대 템플릿</h1>
  <div class="quote-box"><b>채널별(채팅·유선·게시판) 표준 응대 가이드입니다.
아래 카드를 선택하면 해당 채널의 응대 기준과 템플릿을 확인할 수 있습니다.</b></div>
  <div class="dash-grid">
    <div class="dash-card" onclick="goRail('home')"><div class="dash-ico">💬</div><h3>채팅</h3><p>· 실시간 채팅(채널톡) 상담에 사용하는 표준 응대 모음입니다.<br>· 브랜드별 문의 유형(반품·교환·배송·주문·결제·100% 환불·AS·사용법 등)별 템플릿과 매크로를 확인할 수 있습니다.</p><div class="dash-go">바로가기 →</div></div>
    <div class="dash-card" onclick="goRail('call')"><div class="dash-ico">📞</div><h3>유선</h3><p>· 전화 상담 시 사용하는 표준 스크립트와 운영 기준입니다.<br>· 인사말, 상담 진행 방식, 콜백(O/B), 전화 주문, 유형별 응대 방법을 확인할 수 있습니다.</p><div class="dash-go">바로가기 →</div></div>
    <div class="dash-card" onclick="goRail('board')"><div class="dash-ico">📝</div><h3>게시판 (비실시간)</h3><p>· 1:1 문의·FAQ·댓글 등 비실시간 상담에 사용하는 응대 모음입니다.<br>· 첫인사/끝인사, FAQ 공통 양식, 문의 유형별 템플릿, 제품별 사용법을 확인할 수 있습니다.</p><div class="dash-go">바로가기 →</div></div>
  </div>
  <div class="grp-h">🎨 브랜드별 정책 · 톤앤매너 (내부 참고)</div>
  <div style="font-size:12px;color:var(--ink-soft);margin:-4px 0 10px"><span style="color:#234A86;font-weight:800">O</span> 제공 · <span style="color:#9b6829;font-weight:800">X</span> 미제공</div>
  <div class="cmp-table-wrap"><table class="cmp-table policy-tb" style="table-layout:fixed"><colgroup><col style="width:120px"><col style="width:150px"><col style="width:150px"><col></colgroup><thead><tr><th class="cmp-corner">브랜드</th><th class="cmp-blue" style="text-align:center">AS</th><th class="cmp-blue" style="text-align:center">100% 환불</th><th class="cmp-blue">톤앤매너</th></tr></thead><tbody><tr><td class="cmp-row-label">슬룸</td><td style="text-align:center" data-content-key="cmp_policy_as__sloom" data-content-brand="shared">${D_SHARED["cmp_policy_as__sloom"].body}</td><td style="text-align:center" data-content-key="cmp_policy_refund__sloom" data-content-brand="shared">${D_SHARED["cmp_policy_refund__sloom"].body}</td><td style="text-align:left;padding-left:14px" data-content-key="cmp_policy_tone__sloom" data-content-brand="shared">${D_SHARED["cmp_policy_tone__sloom"].body}</td></tr><tr><td class="cmp-row-label">심플리케어</td><td style="text-align:center" data-content-key="cmp_policy_as__simplicare" data-content-brand="shared">${D_SHARED["cmp_policy_as__simplicare"].body}</td><td style="text-align:center" data-content-key="cmp_policy_refund__simplicare" data-content-brand="shared">${D_SHARED["cmp_policy_refund__simplicare"].body}</td><td style="text-align:left;padding-left:14px" data-content-key="cmp_policy_tone__simplicare" data-content-brand="shared">${D_SHARED["cmp_policy_tone__simplicare"].body}</td></tr><tr><td class="cmp-row-label">얼라인랩</td><td style="text-align:center" data-content-key="cmp_policy_as__alignlab" data-content-brand="shared">${D_SHARED["cmp_policy_as__alignlab"].body}</td><td style="text-align:center" data-content-key="cmp_policy_refund__alignlab" data-content-brand="shared">${D_SHARED["cmp_policy_refund__alignlab"].body}</td><td style="text-align:left;padding-left:14px" data-content-key="cmp_policy_tone__alignlab" data-content-brand="shared">${D_SHARED["cmp_policy_tone__alignlab"].body}</td></tr><tr><td class="cmp-row-label">빌바</td><td style="text-align:center" data-content-key="cmp_policy_as__bilba" data-content-brand="shared">${D_SHARED["cmp_policy_as__bilba"].body}</td><td style="text-align:center" data-content-key="cmp_policy_refund__bilba" data-content-brand="shared">${D_SHARED["cmp_policy_refund__bilba"].body}</td><td style="text-align:left;padding-left:14px" data-content-key="cmp_policy_tone__bilba" data-content-brand="shared">${D_SHARED["cmp_policy_tone__bilba"].body}</td></tr><tr><td class="cmp-row-label">셀올로지</td><td style="text-align:center" data-content-key="cmp_policy_as__cellology" data-content-brand="shared">${D_SHARED["cmp_policy_as__cellology"].body}</td><td style="text-align:center" data-content-key="cmp_policy_refund__cellology" data-content-brand="shared">${D_SHARED["cmp_policy_refund__cellology"].body}</td><td style="text-align:left;padding-left:14px" data-content-key="cmp_policy_tone__cellology" data-content-brand="shared">${D_SHARED["cmp_policy_tone__cellology"].body}</td></tr><tr><td class="cmp-row-label">코코다움</td><td style="text-align:center" data-content-key="cmp_policy_as__cocodaum" data-content-brand="shared">${D_SHARED["cmp_policy_as__cocodaum"].body}</td><td style="text-align:center" data-content-key="cmp_policy_refund__cocodaum" data-content-brand="shared">${D_SHARED["cmp_policy_refund__cocodaum"].body}</td><td style="text-align:left;padding-left:14px" data-content-key="cmp_policy_tone__cocodaum" data-content-brand="shared">${D_SHARED["cmp_policy_tone__cocodaum"].body}</td></tr><tr><td class="cmp-row-label">12 o'clock</td><td style="text-align:center" data-content-key="cmp_policy_as__oclock" data-content-brand="shared">${D_SHARED["cmp_policy_as__oclock"].body}</td><td style="text-align:center" data-content-key="cmp_policy_refund__oclock" data-content-brand="shared">${D_SHARED["cmp_policy_refund__oclock"].body}</td><td style="text-align:left;padding-left:14px" data-content-key="cmp_policy_tone__oclock" data-content-brand="shared">${D_SHARED["cmp_policy_tone__oclock"].body}</td></tr><tr><td class="cmp-row-label">닥터맨즈</td><td style="text-align:center" data-content-key="cmp_policy_as__drmans" data-content-brand="shared">${D_SHARED["cmp_policy_as__drmans"].body}</td><td style="text-align:center" data-content-key="cmp_policy_refund__drmans" data-content-brand="shared">${D_SHARED["cmp_policy_refund__drmans"].body}</td><td style="text-align:left;padding-left:14px" data-content-key="cmp_policy_tone__drmans" data-content-brand="shared">${D_SHARED["cmp_policy_tone__drmans"].body}</td></tr><tr><td class="cmp-row-label">와이브닝</td><td style="text-align:center" data-content-key="cmp_policy_as__yvening" data-content-brand="shared">${D_SHARED["cmp_policy_as__yvening"].body}</td><td style="text-align:center" data-content-key="cmp_policy_refund__yvening" data-content-brand="shared">${D_SHARED["cmp_policy_refund__yvening"].body}</td><td style="text-align:left;padding-left:14px" data-content-key="cmp_policy_tone__yvening" data-content-brand="shared">${D_SHARED["cmp_policy_tone__yvening"].body}</td></tr><tr><td class="cmp-row-label">마넬</td><td style="text-align:center" data-content-key="cmp_policy_as__marnell" data-content-brand="shared">${D_SHARED["cmp_policy_as__marnell"].body}</td><td style="text-align:center" data-content-key="cmp_policy_refund__marnell" data-content-brand="shared">${D_SHARED["cmp_policy_refund__marnell"].body}</td><td style="text-align:left;padding-left:14px" data-content-key="cmp_policy_tone__marnell" data-content-brand="shared">${D_SHARED["cmp_policy_tone__marnell"].body}</td></tr><tr><td class="cmp-row-label">닥터아망</td><td style="text-align:center" data-content-key="cmp_policy_as__dramang" data-content-brand="shared">${D_SHARED["cmp_policy_as__dramang"].body}</td><td style="text-align:center" data-content-key="cmp_policy_refund__dramang" data-content-brand="shared">${D_SHARED["cmp_policy_refund__dramang"].body}</td><td style="text-align:left;padding-left:14px" data-content-key="cmp_policy_tone__dramang" data-content-brand="shared">${D_SHARED["cmp_policy_tone__dramang"].body}</td></tr></tbody></table></div>
`;

const RAIL = {
  dash:{title:"홈", desc:"올릿 CX 응대 템플릿 대시보드", type:"dash"},
  home:{title:"채팅", desc:"💬 채팅 표준 응대 + 브랜드별 템플릿 · 매크로 등록용", type:"brand"},
  call:{title:"유선", desc:"📞 전 브랜드 공통 전화 응대 · 구어체", type:"tree"},
  board:{title:"게시판", desc:"📝 비실시간 1:1·FAQ·게시판 응대 템플릿", type:"tree"},
  bm:{title:"북마크", desc:"⭐ 자주 보는 페이지 · 🔖 멘트 (내 브라우저 저장)", type:"bm"},
};

const CHAT_BRANDS=['슬룸','심플리케어','얼라인랩','빌바','셀올로지','코코다움',"12 o'clock",'닥터맨즈','와이브닝','마넬','닥터아망'];
const CHAT_HOME = `
  <h1>💬 채팅 표준 응대</h1>
  <div class="quote-box"><b>실시간 채팅(채널톡) 상담 표준 응대 모음입니다.</b>
좌측 목차는 <b>공통</b>과 <b>브랜드</b>로 나뉩니다. 아래 개요에서 구조를 먼저 확인하세요.</div>

  <div class="dash-grid">
    <div class="dash-card" onclick="jumpCommon()"><div class="dash-ico">🧩</div><h3>공통</h3><p>· 브랜드 구분 없이 <b>전 브랜드 공통</b>으로 쓰는 응대입니다.<br>· 인사말·대기·호응, 배송·출고, 주문 변경·취소, 결제, 멤버십, 마케팅, 채팅 주문 등 <b>상담 흐름 전반</b>의 표준 멘트가 들어 있습니다.</p><div class="dash-go">공통 열기 →</div></div>
    <div class="dash-card" onclick="jumpBrand('슬룸')"><div class="dash-ico">🏷️</div><h3>브랜드</h3><p>· <b>11개 브랜드</b>별로 <b>문의 유형</b>에 맞춘 응대 템플릿입니다.<br>· 단순변심 교환·반품, 100% 환불 이벤트, 불량 AS·불량 유형, 부작용·상해 VOC 등 브랜드 정책에 맞게 구성돼 있습니다.</p><div class="dash-go">브랜드 열기 →</div></div>
  </div>

  <div class="grp-h">🧩 공통 — 채팅 표준 응대</div>
  <div style="font-size:13px;color:var(--text);line-height:1.9;margin:-2px 0 6px">인사말 · 사전/사후 대기 · 호응 표현 · 채팅 중 유선 요청 · 추가 문의/점심 · 상담 종료 경고<br>제품 문의 · 배송·출고(배송 일정 / 미배송·오배송 / 분리배송) · 주문 변경(취소 / 배송 정보 변경) · 결제 · 멤버십·회원정보 · 마케팅·제휴 · 채팅 주문</div>
  ${guide(`좌측 목차 상단 <b>공통 › 채팅 표준 응대</b>에서 위 항목을 소제목별로 바로 찾을 수 있습니다.`)}

  <div class="grp-h" style="margin-top:22px">🏷️ 브랜드 바로가기</div>
  <div style="font-size:12px;color:var(--ink-soft);margin:-4px 0 10px">브랜드를 누르면 좌측 목차가 열리고 첫 문의 유형이 바로 표시됩니다.</div>
  <div class="chat-brand-grid">${CHAT_BRANDS.map((b,i)=>`<button class="brand-chip" onclick="jumpBrand(CHAT_BRANDS[${i}])">${esc(b)}</button>`).join("")}</div>

  <div class="grp-h" style="margin-top:22px">📌 브랜드별 문의 유형</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:170px"><col><col style="width:230px"></colgroup><thead><tr><th class="cmp-corner">문의 유형</th><th class="cmp-blue">설명</th><th class="cmp-blue">대상 브랜드</th></tr></thead><tbody>
  <tr><td class="cmp-row-label">단순변심 교환·반품</td><td style="text-align:left;padding-left:14px" data-content-key="cmp_inquiry_desc__simple" data-content-brand="shared">${D_SHARED["cmp_inquiry_desc__simple"].body}</td><td style="text-align:left;padding-left:14px" data-content-key="cmp_inquiry_target__simple" data-content-brand="shared">${D_SHARED["cmp_inquiry_target__simple"].body}</td></tr>
  <tr><td class="cmp-row-label">100% 환불 이벤트</td><td style="text-align:left;padding-left:14px" data-content-key="cmp_inquiry_desc__refund100" data-content-brand="shared">${D_SHARED["cmp_inquiry_desc__refund100"].body}</td><td style="text-align:left;padding-left:14px" data-content-key="cmp_inquiry_target__refund100" data-content-brand="shared">${D_SHARED["cmp_inquiry_target__refund100"].body}</td></tr>
  <tr><td class="cmp-row-label">불량 AS · 불량 유형</td><td style="text-align:left;padding-left:14px" data-content-key="cmp_inquiry_desc__as_defect" data-content-brand="shared">${D_SHARED["cmp_inquiry_desc__as_defect"].body}</td><td style="text-align:left;padding-left:14px" data-content-key="cmp_inquiry_target__as_defect" data-content-brand="shared">${D_SHARED["cmp_inquiry_target__as_defect"].body}</td></tr>
  <tr><td class="cmp-row-label">부작용·상해 VOC</td><td style="text-align:left;padding-left:14px" data-content-key="cmp_inquiry_desc__voc" data-content-brand="shared">${D_SHARED["cmp_inquiry_desc__voc"].body}</td><td style="text-align:left;padding-left:14px" data-content-key="cmp_inquiry_target__voc" data-content-brand="shared">${D_SHARED["cmp_inquiry_target__voc"].body}</td></tr>
  </tbody></table></div>
  ${guide(`브랜드별 <b>AS · 100% 환불 제공 여부</b>와 <b>톤앤매너</b> 상세는 홈(🏠) 화면의 정책표에서 확인하세요. 특정 멘트는 상단 <b>검색</b>으로 바로 찾을 수 있습니다.`)}
`;

