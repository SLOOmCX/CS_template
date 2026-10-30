/* =====================================================================
   📘 작성 규칙 화면 (사이드바 최하단, 🕘 업데이트 내역 위)
   - 이 파일이 규칙의 원본임. 규칙이 바뀌면 여기 내용을 수정
   - 사이드바: 항목 목록 / 본문: 선택한 규칙
   ===================================================================== */

(function injectRulesStyle(){
  const css = `
  .rl-wrap{max-width:980px}
  .rl-wrap .sub{margin-bottom:18px}
  .rl-wrap ul,.rl-wrap ol{margin:6px 0 14px;padding-left:20px}
  .rl-wrap li{font-size:13px;line-height:1.8;color:#344054}
  .rl-wrap p{font-size:13px;line-height:1.75;color:#344054;margin:6px 0 12px}
  .rl-wrap code{font-size:12px;background:#F2F4F7;border-radius:4px;padding:1px 5px;color:#1d2939}
  .rl-wrap .astbl{margin-bottom:14px}
  .rl-wrap .grp-h{margin-top:22px}
  .rl-x{color:#B42318;text-decoration:line-through}
  .rl-check li{list-style:none;margin-left:-18px}
  .rl-check li:before{content:"☐ ";color:#667085}
  `;
  const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
})();

const RULES_SECTIONS = [
{ key:"overview", label:"이 문서는", title:"📘 이 문서는", html:`
<p>CS 템플릿 웹사이트와 채널톡 매크로를 누가 수정하든 같은 모양, 같은 이름 규칙을 지키기 위한 기준임. 새 카드를 만들거나 기존 카드를 고칠 때 이 규칙부터 확인함.</p>
<table class="astbl"><thead><tr><th>구분</th><th>어디에 보이나</th><th>예시</th><th>누가 보나</th></tr></thead><tbody>
<tr><td>카드명</td><td>웹사이트 카드 제목</td><td>i. 월-금 오후 2시 이전 상담</td><td>상담원 (화면에서 상황 확인)</td></tr>
<tr><td>매크로명</td><td>웹사이트 카드의 # 태그 = 채널톡 매크로 이름</td><td>#불량_재출고_금일</td><td>상담원 (채널톡에서 검색)</td></tr>
<tr><td>내부 ID</td><td>코드 안에만 있음</td><td>slm_as__036</td><td>수정 담당자만</td></tr>
</tbody></table>
<ul><li>웹 템플릿이 원본이고, 채널톡 매크로는 웹 템플릿을 그대로 따라감.</li>
<li>여기서 '매크로명'은 항상 # 태그(채널톡 이름)를 뜻함. 내부 ID는 규칙 대상이 아님.</li></ul>`},

{ key:"macro", label:"매크로명 규칙", title:"🏷️ 매크로명 규칙", html:`
<p>매크로명만 보고도 '어떤 문의에서, 어떤 상황에 보내는 매크로인지' 알 수 있어야 함. 기본 형식은 <code>분류_상황_세부</code>이고, 각 칸은 밑줄(_)로 구분함.</p>
<div class="grp-h">1. 기본 형식</div>
<ol><li><b>분류</b>: 어떤 문의 유형인지 (아래 분류표에 있는 말만 사용)</li>
<li><b>상황</b>: 무엇에 대한 안내인지 (예: 재출고, 포장회수, 환불)</li>
<li><b>세부</b>: 같은 상황 안에서 갈리는 경우만 (예: 금일/익일, 카드/계좌)</li></ol>
<div class="grp-h">2. 분류표</div>
<table class="astbl"><thead><tr><th>분류</th><th>쓰는 곳</th><th>예시</th></tr></thead><tbody>
<tr><td>불량_</td><td>불량·무상 AS 전반</td><td>불량_사과양해, 불량_재출고_금일</td></tr>
<tr><td>유상AS_</td><td>보증기간 경과·소비자 과실 유상 교환</td><td>유상AS_재출고_익일</td></tr>
<tr><td>유상재불량_</td><td>유상 교환 후 같은 증상 재발생</td><td>유상재불량_2개월이내_가능</td></tr>
<tr><td>재불량_</td><td>무상 교환 후 다시 불량</td><td>재불량_사과양해</td></tr>
<tr><td>구성품_ / 이염_ / 스크래치_</td><td>구성품 누락, 외관 파손 등 수령 직후 문제</td><td>구성품_7일경과_불가</td></tr>
<tr><td>화장품_</td><td>화장품 불량 (전자기기와 문구가 다를 때만)</td><td>화장품_포장회수_전체반품</td></tr>
<tr><td>자동수거_</td><td>쿠팡·네이버 자동수거 건</td><td>자동수거_반품_회수중</td></tr>
<tr><td>검수환불안내_</td><td>검수 후 환불 절차</td><td>검수환불안내_계좌등록</td></tr>
<tr><td>단순반품_ / 교환_</td><td>단순변심 반품·교환</td><td>교환_검수재출고</td></tr>
<tr><td>100프로_</td><td>100% 환불 이벤트 (있는 브랜드만)</td><td>100프로_2개_체험만_포장회수</td></tr>
<tr><td>부작용_</td><td>부작용·상해 VOC</td><td>부작용_서류안내</td></tr>
<tr><td>공통_</td><td>여러 브랜드·여러 유형에서 같이 쓰는 것</td><td>공통_반품_회수지확인</td></tr>
<tr><td>IB_ / OB_</td><td>전화 인바운드·아웃바운드 전용</td><td>IB_첫인사, OB_부재문자</td></tr>
</tbody></table>
<p>공통 화면에서만 쓰는 분류도 있음: <code>게시판_</code>(게시판 응대), <code>외부몰_</code>(외부몰 문의), <code>제품문의_</code>(제품 문의).</p>
<div class="grp-h">3. 하지 않는 것</div>
<ul><li><b>브랜드명·브랜드 약어 금지</b>: 매크로는 이미 브랜드 채널 안에 있음. <span class="rl-x">cocodaum_포장회수</span>, <span class="rl-x">CELAS_1</span> → <code>불량_포장회수</code>, <code>불량_사과양해</code></li>
<li><b>의미 없는 코드 금지</b>: A/B/C, 1/2/3a, 2a/2b 같은 구분자. <span class="rl-x">재출고A</span> → <code>재출고_금일</code>, <span class="rl-x">100환불_2a_포장회수</span> → <code>100프로_2개_체험만_포장회수</code></li>
<li><b>줄임말·별칭 혼용 금지</b>: '100환불' 대신 항상 '100프로', '불량AS_' 대신 항상 '불량_'</li></ul>
<div class="grp-h">4. 시점 표기</div>
<ul><li><b>우리가 다시 보내는 출고(재출고)</b>: 고객에게 안내하는 결과로 씀. <code>_금일</code> / <code>_익일</code> / <code>_차주월요일</code>. 상담원은 14시 출고 마감을 이미 알고 있어서 결과로 쓰는 게 더 빠름.</li>
<li><b>고객 주문 출고 안내</b>: 결제 시점과 출고 시점을 둘 다 씀. <code>공통_{결제시점}결제_{출고시점}</code> → <code>공통_월목2시후결제_익일출고예정</code></li>
<li><b>채팅 주문</b>: 입금 확인 시점 기준. <code>공통_채팅주문_{시점}입금_{출고시점}</code> → <code>공통_채팅주문_금2시후입금_차주월요일출고예정</code></li>
<li>시점 단어는 네 가지만 씀: <code>평일2시전</code> · <code>월목2시후</code> · <code>금2시후</code> · <code>주말</code></li></ul>
<div class="grp-h">5. 같은 이름 · 다른 이름</div>
<ul><li><b>본문이 완전히 같으면 같은 이름</b>: 다른 섹션에 있어도 채널톡에는 1개만 등록. 예: 단종 섹션의 재출고 카드 = <code>불량_재출고_금일</code></li>
<li><b>본문이 다르면 반드시 다른 이름</b>: 같은 이름이면 채널톡에서 하나가 다른 하나를 덮어씀</li>
<li><b>짝이 되는 매크로는 같은 구조</b>: <code>공통_반품배송비_네이버페이_입금</code> / <code>공통_반품배송비_일반결제_차감</code></li></ul>`},

{ key:"examples", label:"출고 매크로 예시", title:"🚚 적용 예시: 출고 안내 매크로", html:`
<p>시점 표기 규칙이 가장 많이 쓰이는 출고 안내 매크로의 현재 이름임 (2026-10-29 정비 기준).</p>
<table class="astbl"><thead><tr><th>언제 쓰나</th><th>고객에게 하는 말</th><th>매크로명</th></tr></thead><tbody>
<tr><td>불량 재출고 · 월-금 14시 전 상담</td><td>오늘 출고</td><td>불량_재출고_금일</td></tr>
<tr><td>불량 재출고 · 월-목 14시 후 상담</td><td>내일 출고</td><td>불량_재출고_익일</td></tr>
<tr><td>불량 재출고 · 금 14시 후 상담</td><td>차주 월요일 출고</td><td>불량_재출고_차주월요일</td></tr>
<tr><td>유상 교환 입금 확인 후</td><td>오늘 / 내일 / 차주 월요일 출고</td><td>유상AS_재출고_금일 / _익일 / _차주월요일</td></tr>
<tr><td>불량 검수 결과 교환</td><td>내일 출고</td><td>불량_검수결과_재출고</td></tr>
<tr><td>평일 2시 전 결제 → 당일 문의</td><td>오늘 출고 예정</td><td>공통_평일2시전결제_금일출고예정</td></tr>
<tr><td>평일 2시 전 결제 → 출고 후 문의</td><td>오늘 출고됨</td><td>공통_평일2시전결제_금일출고완료</td></tr>
<tr><td>월-목 2시 후 결제 → 당일 문의</td><td>내일 출고 예정</td><td>공통_월목2시후결제_익일출고예정</td></tr>
<tr><td>월-목 2시 후 결제 → 다음날 문의</td><td>오늘 출고 예정</td><td>공통_월목2시후결제_금일출고예정</td></tr>
<tr><td>금 2시 후 결제 → 금요일 문의</td><td>차주 월요일 출고 예정</td><td>공통_금2시후결제_차주월요일출고예정</td></tr>
<tr><td>금 2시 후 결제 → 월요일 문의</td><td>오늘 출고됨</td><td>공통_금2시후결제_금일출고완료</td></tr>
<tr><td>주말·공휴일 결제</td><td>(출고 예정일) 출고 예정</td><td>공통_주말결제_출고예정일안내</td></tr>
<tr><td>채팅 주문 · 평일 2시 전 입금</td><td>오늘 출고 예정</td><td>공통_채팅주문_평일2시전입금_금일출고예정</td></tr>
<tr><td>채팅 주문 · 월-목 2시 후 입금</td><td>내일 출고 예정</td><td>공통_채팅주문_월목2시후입금_익일출고예정</td></tr>
<tr><td>채팅 주문 · 금 2시 후 입금</td><td>차주 월요일 출고 예정</td><td>공통_채팅주문_금2시후입금_차주월요일출고예정</td></tr>
</tbody></table>`},

{ key:"typo", label:"타이포그래피", title:"🔤 타이포그래피 규칙", html:`
<p>글자 크기는 아래 표에 있는 단계만 씀. 새 크기를 만들거나 카드마다 따로 크기를 지정하지 않음 (기준: 2026-08-27 정립, 2026-09-03 최종 조정).</p>
<div class="grp-h">1. 제목 단계 (큰 것 → 작은 것)</div>
<table class="astbl"><thead><tr><th>단계</th><th>역할</th><th>크기</th><th>화면 예시</th><th>작성 방법 (개발)</th></tr></thead><tbody>
<tr><td>페이지 제목</td><td>사이드바에서 메뉴를 누르면 나오는 맨 위 제목</td><td>26px</td><td>불량 AS 교환/반품</td><td><code>h1</code></td></tr>
<tr><td>큰 챕터(강조)</td><td>한 페이지 안의 두 번째 대주제</td><td>22px</td><td>💯 100%환불이벤트 접수</td><td><code>secMajor()</code></td></tr>
<tr><td>챕터</td><td>페이지 안 1·2·3 번호 단위</td><td>20px</td><td>① 포장 및 회수 안내</td><td><code>secTitle()</code></td></tr>
<tr><td>AS 대분류</td><td>무상 AS · 유상 AS · [단종] EDGE CASE 전용 (흰 글씨 + 파란 배경)</td><td>18px</td><td>🛠️ 무상 AS</td><td><code>h2lvl as-major</code></td></tr>
<tr><td>소제목</td><td>챕터 안의 그룹·갈래·케이스</td><td>16.5px</td><td>A. 고객 반품 요청</td><td><code>grp-h</code></td></tr>
<tr><td>유형</td><td>불량 유형 번호 (전자기기 브랜드)</td><td>15.5px</td><td>④ 구성품 누락</td><td><code>typ</code></td></tr>
<tr><td>절차</td><td>유형 아래 단계 (전자기기 브랜드)</td><td>15px</td><td>③ 재출고 안내</td><td><code>h3lvl</code></td></tr>
<tr><td>소그룹</td><td>소제목 아래 하위 묶음 (채팅 표준 응대에만)</td><td>13.5px</td><td>첫인사 / 끝인사</td><td><code>grp-h grp-sub</code></td></tr>
</tbody></table>
<ul><li><b>전자기기 브랜드</b>(슬룸·얼라인랩·빌바·셀올로지·12 o'clock)는 AS 분기가 복잡해서 '유형·절차' 단계까지 씀.</li>
<li><b>그 외 브랜드</b>(코코다움·닥터아망·닥터맨즈·마넬·심플리케어·와이브닝)는 '챕터 → 소제목'까지만 씀.</li></ul>
<div class="grp-h">2. 카드·본문</div>
<table class="astbl"><thead><tr><th>요소</th><th>크기</th><th>비고</th></tr></thead><tbody>
<tr><td>카드 제목(카드명)</td><td>13.5px</td><td>매크로·서브카드·비교카드 공통</td></tr>
<tr><td>매크로명 #태그</td><td>11px</td><td>카드 오른쪽 위</td></tr>
<tr><td>고객에게 보내는 문구</td><td>12.5px</td><td>매크로 본문</td></tr>
<tr><td>표 안 글자</td><td>12.5px</td><td>비교표·분기표</td></tr>
<tr><td>안내·경고·팁 박스</td><td>12px</td><td>상담원용 부연 설명</td></tr>
</tbody></table>
<div class="grp-h">3. 작성할 때 지킬 것</div>
<ul><li>글자 크기를 카드나 제목에 직접 지정하지 않음. 표에 없는 모양이 필요하면 먼저 이 규칙에 단계를 추가하고 나서 씀.</li>
<li>챕터 제목은 항상 정해진 제목 도구(<code>secTitle()</code> / <code>secMajor()</code>)로만 만듦. 손으로 흉내 낸 제목은 규칙이 바뀔 때 혼자 남아서 어긋남.</li>
<li>번호 배지(파란 동그라미)는 숫자만 넣음. 이모지 말머리(💡 💯 등)는 배지 없이 글자처럼 표시됨.</li>
<li>표는 정해진 표 스타일(<code>astbl</code> / <code>gridtbl</code>)만 씀. 엑셀에서 복사한 서식을 그대로 붙여넣지 않음.</li>
<li>상담 내용 안에는 웹 기본 제목 태그(h2~h6)를 쓰지 않음.</li></ul>
<div class="grp-h">4. 문장 표기</div>
<table class="astbl"><thead><tr><th>규칙</th><th>❌ 틀림</th><th>⭕ 맞음</th></tr></thead><tbody>
<tr><td>문장부호(<code>.</code> <code>?</code> <code>!</code>) 뒤의 이모지는 한 칸 띄움</td><td>죄송합니다.🙏<br>좋을까요?😊</td><td>죄송합니다. 🙏<br>좋을까요? 😊</td></tr>
</tbody></table>`},

{ key:"process", label:"수정 절차", title:"🛠️ 수정 절차", html:`
<p>웹 템플릿을 먼저 고치고, 같은 내용을 채널톡 매크로에 반영함. 두 곳은 자동으로 연동되지 않아서 사람이 양쪽을 모두 고쳐야 함.</p>
<ol><li>웹 템플릿에서 카드 문구·매크로명 수정 (웹 편집기 또는 코드)</li>
<li>배포 후 사이트 🕘 <b>업데이트 내역</b>에서 바뀐 내용 확인</li>
<li>채널톡에서 같은 매크로를 찾아 이름·본문을 똑같이 수정</li>
<li>급해서 채널톡을 먼저 고쳤다면 가능한 빨리 웹 템플릿에도 반영. 놓친 차이는 2주마다 자동 대조로 확인하고, 분기 1회 전수 대조</li></ol>
<div class="grp-h">새 매크로를 만들 때 확인</div>
<ul class="rl-check"><li>분류표에 있는 분류로 시작하는가</li>
<li>브랜드명·A/B/C·숫자 코드가 없는가</li>
<li>이름만 보고 어떤 상황인지 알 수 있는가</li>
<li>같은 브랜드에 본문이 다른데 이름이 같은 매크로가 없는가</li>
<li>시점이 들어가면 시점 표기 규칙을 따랐는가</li>
<li>카드 글자 크기를 따로 지정하지 않았는가</li>
<li>문장부호 뒤 이모지를 한 칸 띄웠는가</li></ul>`}
];

let RULES_CUR = "overview";
function rulesPick(k){ RULES_CUR = k; renderRules(); commitView(); }
function renderRulesTree(){
  const tree = document.getElementById("tree"); if(!tree) return;
  tree.innerHTML = `<div class="group-label">작성 규칙</div>` + RULES_SECTIONS.map(s=>
    `<div class="leaf ${RULES_CUR===s.key?"active":""}" onclick="rulesPick('${s.key}')"><span class="dot"></span>${s.label}</div>`).join("");
}
function renderRules(){
  renderRulesTree();
  const s = RULES_SECTIONS.find(x=>x.key===RULES_CUR) || RULES_SECTIONS[0];
  render(`<div class="rl-wrap"><h1>${s.title}</h1>${s.html}</div>`);
  setCrumb("작성 규칙 › " + s.label);
  const c = document.querySelector(".content"); if (c) c.scrollTop = 0;
}
