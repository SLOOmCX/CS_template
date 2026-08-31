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
  <div class="cmp-table-wrap"><table class="cmp-table"><thead><tr><th class="cmp-corner">브랜드</th><th class="cmp-blue">첫인사 멘트</th><th class="cmp-corner">브랜드</th><th class="cmp-blue">첫인사 멘트</th></tr></thead><tbody><tr><td class="cmp-row-label">슬룸</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 고객님,
프리미엄 헬스테크 브랜드, 슬룸입니다. 💜</div></td><td class="cmp-row-label">심플리케어</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 고객님,
건강식품의 본질에 집중하는 심플리케어입니다.</div></td></tr><tr><td class="cmp-row-label">얼라인랩</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 고객님,
나를 위한 뷰티케어 브랜드, 얼라인랩입니다.</div></td><td class="cmp-row-label">빌바</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 고객님,
Be Live and Better — 더 나은 나의 라이프, 빌바입니다.</div></td></tr><tr><td class="cmp-row-label">셀올로지</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 고객님,
피부의 근본을 연구하는 셀올로지입니다. 💙</div></td><td class="cmp-row-label">코코다움</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 보호자님,
사랑하는 코코들을 위해, 코코다움입니다. 🐾</div></td></tr><tr><td class="cmp-row-label">12 o'clock</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 고객님,
12 o'clock입니다.</div></td><td class="cmp-row-label">닥터맨즈</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 고객님,
바쁜 남자들을 위한 올인원 솔루션, 닥터맨즈입니다.</div></td></tr><tr><td class="cmp-row-label">와이브닝</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 고객님,
로맨틱한 순간을 위한 페미닌 케어, 와이브닝입니다.</div></td><td class="cmp-row-label">마넬</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 고객님,
마넬입니다.</div></td></tr><tr><td class="cmp-row-label">닥터아망</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 고객님,
아이들의 올바른 성장을 연구하는 닥터아망입니다.</div></td><td class="cmp-row-label"></td><td></td></tr></tbody></table></div>
  <div class="grp-h">[공통] 끝인사 (1:1·FAQ)</div>
  ${macro(D_SHARED["board__001"].name, D_SHARED["board__001"].tag, D_SHARED["board__001"].body, D_SHARED["board__001"].desc, "board__001", "shared")}
  <div class="grp-h" id="b_form_2">[전브랜드] 채팅 상담 유도 (사진·정보·실시간 상담 필요 시)</div>
  ${caution(`문의 내용에 사진·고객 정보·실시간 상담 등이 필요해 채팅 상담으로 유도할 경우 사용`)}
  <div class="cmp-table-wrap"><table class="cmp-table"><thead><tr><th class="cmp-corner">브랜드</th><th class="cmp-blue">채팅 상담 유도 멘트</th></tr></thead><tbody><tr><td class="cmp-row-label">슬룸</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">다만 (목적 기재)를 위해 (사진 또는 고객님 정보 확인 또는 실시간 상담)이 필요하여, 번거로우시겠지만 1:1 문의가 아닌 슬룸 채팅 상담으로 문의해 주시면 확인 후 도와드리겠습니다.
감사합니다.

👉 슬룸 채팅 상담 바로가기 : http://sloom.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr><tr><td class="cmp-row-label">심플리케어</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">다만 (목적 기재)를 위해 (사진 또는 고객님 정보 확인 또는 실시간 상담)이 필요하여, 번거로우시겠지만 1:1 문의가 아닌 심플리케어 채팅 상담으로 문의해 주시면 확인 후 도와드리겠습니다.
감사합니다.

👉 심플리케어 채팅 상담 바로가기 : http://simplicare.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr><tr><td class="cmp-row-label">얼라인랩</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">다만 (목적 기재)를 위해 (사진 또는 고객님 정보 확인 또는 실시간 상담)이 필요하여, 번거로우시겠지만 1:1 문의가 아닌 얼라인랩 채팅 상담으로 문의해 주시면 확인 후 도와드리겠습니다.
감사합니다.

👉 얼라인랩 채팅 상담 바로가기 : http://alignlab.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr><tr><td class="cmp-row-label">빌바</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">다만 (목적 기재)를 위해 (사진 또는 고객님 정보 확인 또는 실시간 상담)이 필요하여, 번거로우시겠지만 1:1 문의가 아닌 빌바 채팅 상담으로 문의해 주시면 확인 후 도와드리겠습니다.
감사합니다.

👉 빌바 채팅 상담 바로가기 : http://bilba.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr><tr><td class="cmp-row-label">셀올로지</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">다만 (목적 기재)를 위해 (사진 또는 고객님 정보 확인 또는 실시간 상담)이 필요하여, 번거로우시겠지만 1:1 문의가 아닌 셀올로지 채팅 상담으로 문의해 주시면 확인 후 도와드리겠습니다.
감사합니다.

👉 셀올로지 채팅 상담 바로가기 : http://cellology.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr><tr><td class="cmp-row-label">코코다움</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">다만 (목적 기재)를 위해 (사진 또는 고객님 정보 확인 또는 실시간 상담)이 필요하여, 번거로우시겠지만 1:1 문의가 아닌 코코다움 채팅 상담으로 문의해 주시면 확인 후 도와드리겠습니다.
감사합니다.

👉 코코다움 채팅 상담 바로가기 : http://cocodaum.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr><tr><td class="cmp-row-label">12 o'clock</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">다만 (목적 기재)를 위해 (사진 또는 고객님 정보 확인 또는 실시간 상담)이 필요하여, 번거로우시겠지만 1:1 문의가 아닌 12 o'clock 채팅 상담으로 문의해 주시면 확인 후 도와드리겠습니다.
감사합니다.

👉 12 o'clock 채팅 상담 바로가기 : http://12oclock.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr><tr><td class="cmp-row-label">닥터맨즈</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">다만 (목적 기재)를 위해 (사진 또는 고객님 정보 확인 또는 실시간 상담)이 필요하여, 번거로우시겠지만 1:1 문의가 아닌 닥터맨즈 채팅 상담으로 문의해 주시면 확인 후 도와드리겠습니다.
감사합니다.

👉 닥터맨즈 채팅 상담 바로가기 : http://drmans.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr><tr><td class="cmp-row-label">와이브닝</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">다만 (목적 기재)를 위해 (사진 또는 고객님 정보 확인 또는 실시간 상담)이 필요하여, 번거로우시겠지만 1:1 문의가 아닌 와이브닝 채팅 상담으로 문의해 주시면 확인 후 도와드리겠습니다.
감사합니다.

👉 와이브닝 채팅 상담 바로가기 : http://yvening.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr><tr><td class="cmp-row-label">마넬</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">다만 (목적 기재)를 위해 (사진 또는 고객님 정보 확인 또는 실시간 상담)이 필요하여, 번거로우시겠지만 1:1 문의가 아닌 마넬 채팅 상담으로 문의해 주시면 확인 후 도와드리겠습니다.
감사합니다.

👉 마넬 채팅 상담 바로가기 : http://pf.kakao.com/_YxcIxexj/chat
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr><tr><td class="cmp-row-label">닥터아망</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">다만 (목적 기재)를 위해 (사진 또는 고객님 정보 확인 또는 실시간 상담)이 필요하여, 번거로우시겠지만 1:1 문의가 아닌 닥터아망 채팅 상담으로 문의해 주시면 확인 후 도와드리겠습니다.
감사합니다.

👉 닥터아망 채팅 상담 바로가기 : http://dramang.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr></tbody></table></div>
  <div class="grp-h" id="b_form_3">[전브랜드] 고객센터 안내 (문자·1:1 문의)</div>
  ${caution(`문자·1:1 문의에 고객센터를 안내할 경우 아래 양식으로 일괄 통일`)}
  <div class="cmp-table-wrap"><table class="cmp-table"><thead><tr><th class="cmp-corner">브랜드</th><th class="cmp-blue">고객센터 안내 멘트</th></tr></thead><tbody><tr><td class="cmp-row-label">슬룸</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁드립니다.

👉 슬룸 채팅 상담 바로가기 : http://sloom.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr><tr><td class="cmp-row-label">심플리케어</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">추가적으로 문의 사항이 있으실 경우 심플리케어 고객센터를 통해 문의 부탁드립니다.

👉 심플리케어 채팅 상담 바로가기 : http://simplicare.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr><tr><td class="cmp-row-label">얼라인랩</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">추가적으로 문의 사항이 있으실 경우 얼라인랩 고객센터를 통해 문의 부탁드립니다.

👉 얼라인랩 채팅 상담 바로가기 : http://alignlab.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr><tr><td class="cmp-row-label">빌바</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">추가적으로 문의 사항이 있으실 경우 빌바 고객센터를 통해 문의 부탁드립니다.

👉 빌바 채팅 상담 바로가기 : http://bilba.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr><tr><td class="cmp-row-label">셀올로지</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">추가적으로 문의 사항이 있으실 경우 셀올로지 고객센터를 통해 문의 부탁드립니다.

👉 셀올로지 채팅 상담 바로가기 : http://cellology.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr><tr><td class="cmp-row-label">코코다움</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">추가적으로 문의 사항이 있으실 경우 코코다움 고객센터를 통해 문의 부탁드립니다.

👉 코코다움 채팅 상담 바로가기 : http://cocodaum.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr><tr><td class="cmp-row-label">12 o'clock</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">추가적으로 문의 사항이 있으실 경우 12 o'clock 고객센터를 통해 문의 부탁드립니다.

👉 12 o'clock 채팅 상담 바로가기 : http://12oclock.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr><tr><td class="cmp-row-label">닥터맨즈</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">추가적으로 문의 사항이 있으실 경우 닥터맨즈 고객센터를 통해 문의 부탁드립니다.

👉 닥터맨즈 채팅 상담 바로가기 : http://drmans.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr><tr><td class="cmp-row-label">와이브닝</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">추가적으로 문의 사항이 있으실 경우 와이브닝 고객센터를 통해 문의 부탁드립니다.

👉 와이브닝 채팅 상담 바로가기 : http://yvening.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr><tr><td class="cmp-row-label">마넬</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">추가적으로 문의 사항이 있으실 경우 마넬 고객센터를 통해 문의 부탁드립니다.

👉 마넬 채팅 상담 바로가기 : http://pf.kakao.com/_YxcIxexj/chat
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr><tr><td class="cmp-row-label">닥터아망</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">추가적으로 문의 사항이 있으실 경우 닥터아망 고객센터를 통해 문의 부탁드립니다.

👉 닥터아망 채팅 상담 바로가기 : http://dramang.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)</div></td></tr></tbody></table></div>
  ${secTitle("📄","문의 유형별 템플릿","자사몰·커머스","b_type")}
  <div class="grp-h" id="b_type_1">[슬룸] 불량 반품·교환·AS 상담 요청</div>
  ${macro(D_SHARED["board__002"].name, D_SHARED["board__002"].tag, D_SHARED["board__002"].body, D_SHARED["board__002"].desc, "board__002", "shared")}
  <div class="grp-h" id="b_type_2">[슬룸] 네이버페이 주문형 환불금 송금 입금 안내</div>
  ${macro(D_SHARED["board__003"].name, D_SHARED["board__003"].tag, D_SHARED["board__003"].body, D_SHARED["board__003"].desc, "board__003", "shared")}
  <div class="grp-h" id="b_type_3">[슬룸] 100% 환불 이벤트 안내</div>
  ${macro(D_SHARED["board__004"].name, D_SHARED["board__004"].tag, D_SHARED["board__004"].body, D_SHARED["board__004"].desc, "board__004", "shared")}
  <div class="grp-h" id="b_type_4">[전브랜드] 교환/반품 사유 확인 필요 시</div>
  ${caution(`반품·교환 사유 확인 등 절차가 필요해 채팅 상담으로 접수 유도할 경우 사용`)}
  <div class="cmp-table-wrap"><table class="cmp-table"><thead><tr><th class="cmp-corner">브랜드</th><th class="cmp-blue">교환/반품 사유 확인 멘트</th></tr></thead><tbody><tr><td class="cmp-row-label">슬룸</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 고객님,
프리미엄 헬스테크 브랜드, 슬룸입니다. 💜

제품의 반품 및 교환 접수는 반품 사유 확인 등 일정한 절차를 거쳐 진행되고 있습니다.
번거로우시겠지만 채팅 상담을 통해 관련 내용을 접수해 주시면 확인 후 최대한 신속하게 도와드리겠습니다.

☞ 슬룸 채팅 상담 바로가기 : http://sloom.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.</div></td></tr><tr><td class="cmp-row-label">심플리케어</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 고객님,
건강식품의 본질에 집중하는 심플리케어입니다.

제품의 반품 및 교환 접수는 반품 사유 확인 등 일정한 절차를 거쳐 진행되고 있습니다.
번거로우시겠지만 채팅 상담을 통해 관련 내용을 접수해 주시면 확인 후 최대한 신속하게 도와드리겠습니다.

☞ 심플리케어 채팅 상담 바로가기 : http://simplicare.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.</div></td></tr><tr><td class="cmp-row-label">얼라인랩</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 고객님,
나를 위한 뷰티케어 브랜드, 얼라인랩입니다.

제품의 반품 및 교환 접수는 반품 사유 확인 등 일정한 절차를 거쳐 진행되고 있습니다.
번거로우시겠지만 채팅 상담을 통해 관련 내용을 접수해 주시면 확인 후 최대한 신속하게 도와드리겠습니다.

☞ 얼라인랩 채팅 상담 바로가기 : http://alignlab.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.</div></td></tr><tr><td class="cmp-row-label">빌바</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 고객님,
Be Live and Better — 더 나은 나의 라이프, 빌바입니다.

제품의 반품 및 교환 접수는 반품 사유 확인 등 일정한 절차를 거쳐 진행되고 있습니다.
번거로우시겠지만 채팅 상담을 통해 관련 내용을 접수해 주시면 확인 후 최대한 신속하게 도와드리겠습니다.

☞ 빌바 채팅 상담 바로가기 : http://bilba.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.</div></td></tr><tr><td class="cmp-row-label">셀올로지</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 고객님,
피부의 근본을 연구하는 셀올로지입니다. 💙

제품의 반품 및 교환 접수는 반품 사유 확인 등 일정한 절차를 거쳐 진행되고 있습니다.
번거로우시겠지만 채팅 상담을 통해 관련 내용을 접수해 주시면 확인 후 최대한 신속하게 도와드리겠습니다.

☞ 셀올로지 채팅 상담 바로가기 : http://cellology.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.</div></td></tr><tr><td class="cmp-row-label">코코다움</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 보호자님,
사랑하는 코코들을 위해, 코코다움입니다. 🐾

제품의 반품 및 교환 접수는 반품 사유 확인 등 일정한 절차를 거쳐 진행되고 있습니다.
번거로우시겠지만 채팅 상담을 통해 관련 내용을 접수해 주시면 확인 후 최대한 신속하게 도와드리겠습니다.

☞ 코코다움 채팅 상담 바로가기 : http://cocodaum.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.</div></td></tr><tr><td class="cmp-row-label">12 o'clock</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 고객님,
12 o'clock입니다.

제품의 반품 및 교환 접수는 반품 사유 확인 등 일정한 절차를 거쳐 진행되고 있습니다.
번거로우시겠지만 채팅 상담을 통해 관련 내용을 접수해 주시면 확인 후 최대한 신속하게 도와드리겠습니다.

☞ 12 o'clock 채팅 상담 바로가기 : http://12oclock.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.</div></td></tr><tr><td class="cmp-row-label">닥터맨즈</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 고객님,
바쁜 남자들을 위한 올인원 솔루션, 닥터맨즈입니다.

제품의 반품 및 교환 접수는 반품 사유 확인 등 일정한 절차를 거쳐 진행되고 있습니다.
번거로우시겠지만 채팅 상담을 통해 관련 내용을 접수해 주시면 확인 후 최대한 신속하게 도와드리겠습니다.

☞ 닥터맨즈 채팅 상담 바로가기 : http://drmans.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.</div></td></tr><tr><td class="cmp-row-label">와이브닝</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 고객님,
로맨틱한 순간을 위한 페미닌 케어, 와이브닝입니다.

제품의 반품 및 교환 접수는 반품 사유 확인 등 일정한 절차를 거쳐 진행되고 있습니다.
번거로우시겠지만 채팅 상담을 통해 관련 내용을 접수해 주시면 확인 후 최대한 신속하게 도와드리겠습니다.

☞ 와이브닝 채팅 상담 바로가기 : http://yvening.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.</div></td></tr><tr><td class="cmp-row-label">마넬</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 고객님,
마넬입니다.

제품의 반품 및 교환 접수는 반품 사유 확인 등 일정한 절차를 거쳐 진행되고 있습니다.
번거로우시겠지만 채팅 상담을 통해 관련 내용을 접수해 주시면 확인 후 최대한 신속하게 도와드리겠습니다.

☞ 마넬 채팅 상담 바로가기 : http://pf.kakao.com/_YxcIxexj/chat
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.</div></td></tr><tr><td class="cmp-row-label">닥터아망</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">안녕하세요 고객님,
아이들의 올바른 성장을 연구하는 닥터아망입니다.

제품의 반품 및 교환 접수는 반품 사유 확인 등 일정한 절차를 거쳐 진행되고 있습니다.
번거로우시겠지만 채팅 상담을 통해 관련 내용을 접수해 주시면 확인 후 최대한 신속하게 도와드리겠습니다.

☞ 닥터아망 채팅 상담 바로가기 : http://dramang.channel.io/
※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.</div></td></tr></tbody></table></div>

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
  <div class="cmp-table-wrap"><table class="cmp-table"><thead><tr><th class="cmp-corner">브랜드</th><th class="cmp-blue">캐치프라이즈</th><th class="cmp-blue">대표번호</th><th class="cmp-blue">채팅</th></tr></thead><tbody><tr><td class="cmp-row-label">슬룸</td><td>프리미엄 헬스테크 브랜드, 슬룸 💜</td><td>1668-2956</td><td><a href="http://sloom.channel.io/" target="_blank">http://sloom.channel.io</a></td></tr><tr><td class="cmp-row-label">심플리케어</td><td>건강식품의 본질에 집중하는 심플리케어</td><td>1668-1406</td><td><a href="http://simplicare.channel.io/" target="_blank">http://simplicare.channel.io</a></td></tr><tr><td class="cmp-row-label">얼라인랩</td><td>나를 위한 뷰티케어 브랜드, 얼라인랩</td><td>1668-3559</td><td><a href="http://alignlab.channel.io/" target="_blank">http://alignlab.channel.io</a></td></tr><tr><td class="cmp-row-label">빌바</td><td>Be Live and Better — 더 나은 나의 라이프, 빌바</td><td>1668-2908</td><td><a href="http://bilba.channel.io/" target="_blank">http://bilba.channel.io</a></td></tr><tr><td class="cmp-row-label">셀올로지</td><td>피부의 근본을 연구하는 셀올로지 💙</td><td>1544-5748</td><td><a href="http://cellology.channel.io/" target="_blank">http://cellology.channel.io</a></td></tr><tr><td class="cmp-row-label">코코다움</td><td>사랑하는 코코들을 위해, 코코다움 🐾</td><td>1668-1376</td><td><a href="http://cocodaum.channel.io/" target="_blank">http://cocodaum.channel.io</a></td></tr><tr><td class="cmp-row-label">12 o'clock</td><td>새로운 하루의 시작인 12시를 기념하며, 투엘브어클락(12 o'clock)</td><td>없음</td><td><a href="http://12oclock.channel.io/" target="_blank">http://12oclock.channel.io</a></td></tr><tr><td class="cmp-row-label">닥터맨즈</td><td>바쁜 남자들을 위한 올인원 솔루션, 닥터맨즈</td><td>1668-0953</td><td><a href="http://drmans.channel.io/" target="_blank">http://drmans.channel.io</a></td></tr><tr><td class="cmp-row-label">와이브닝</td><td>로맨틱한 순간을 위한 페미닌 케어, 와이브닝</td><td>1668-5811</td><td><a href="http://yvening.channel.io/" target="_blank">http://yvening.channel.io</a></td></tr><tr><td class="cmp-row-label">마넬</td><td>눈부신 나를 위한 내추럴 뷰티, 마넬입니다.</td><td>없음</td><td><a href="http://pf.kakao.com/_YxcIxexj/chat" target="_blank">http://pf.kakao.com/_YxcIxexj/chat</a></td></tr><tr><td class="cmp-row-label">닥터아망</td><td>아이들의 올바른 성장을 연구하는 닥터아망</td><td>1668-3342</td><td><a href="http://dramang.channel.io/" target="_blank">http://dramang.channel.io</a></td></tr></tbody></table></div>
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
  ${guide(`자사몰·물류센터(<a href="https://seller.poomgo.com/login?redirect=%2F" target="_blank">품고</a> 또는 정석) 주문내역에서 송장번호 확인 → CJ대한통운 송장 조회로 배송 상태·흐름 확인`)}
  <div class="grid2">${macro(D_SHARED["cmn_all__032"].name, D_SHARED["cmn_all__032"].tag, D_SHARED["cmn_all__032"].body, D_SHARED["cmn_all__032"].desc, "cmn_all__032", "shared")}${macro(D_SHARED["cmn_all__033"].name, D_SHARED["cmn_all__033"].tag, D_SHARED["cmn_all__033"].body, D_SHARED["cmn_all__033"].desc, "cmn_all__033", "shared")}</div>
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
  <div class="cmp-table-wrap"><table class="cmp-table"><thead><tr><th class="cmp-corner">브랜드</th><th class="cmp-blue">대표번호</th><th class="cmp-corner">브랜드</th><th class="cmp-blue">대표번호</th></tr></thead><tbody><tr><td class="cmp-row-label">심플리케어</td><td>1668-1406</td><td class="cmp-row-label">코코다움</td><td>1668-1376</td></tr><tr><td class="cmp-row-label">슬룸</td><td>1668-2956</td><td class="cmp-row-label">얼라인랩</td><td>1668-3559</td></tr><tr><td class="cmp-row-label">닥터아망</td><td>1668-3342</td><td class="cmp-row-label">와이브닝</td><td>1668-5811</td></tr><tr><td class="cmp-row-label">셀올로지</td><td>1544-5748</td><td class="cmp-row-label">빌바</td><td>1668-2908</td></tr><tr><td class="cmp-row-label">닥터맨즈</td><td>1668-0953</td><td class="cmp-row-label"></td><td></td></tr></tbody></table></div>
  ${secTitle("📣","마케팅·제휴 문의",null,"c_mkt")}
  <div class="grid2">${macro(D_SHARED["cmn_all__057"].name, D_SHARED["cmn_all__057"].tag, D_SHARED["cmn_all__057"].body, D_SHARED["cmn_all__057"].desc, "cmn_all__057", "shared")}${macro(D_SHARED["cmn_all__058"].name, D_SHARED["cmn_all__058"].tag, D_SHARED["cmn_all__058"].body, D_SHARED["cmn_all__058"].desc, "cmn_all__058", "shared")}</div>
  ${secTitle("🛒","채팅 주문",null,"c_chat")}
  <div class="grp-h">브랜드별 채팅 주문 유의사항 멘트</div>
  <div class="quote-box"><b>• 배송비는 브랜드별 금액 기준만 상이 (슬룸 제외)
• 무통장 입금으로만 결제 가능, 자사몰 회원 혜택 미제공은 동일
• 채팅 주문은 카드 결제(페이업) 불가 — 개인정보 이슈</b></div>
  <div class="cmp-table-wrap"><table class="cmp-table"><thead><tr><th class="cmp-corner">브랜드</th><th class="cmp-blue">채팅 주문 유의사항 멘트</th></tr></thead><tbody><tr><td class="cmp-row-label">슬룸</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">고객님, 채팅 주문 시 유의사항 먼저 안내드립니다.
회원 가입 시 제공되는 무료배송쿠폰 등의 사용이 제한되며, 적립금 혜택도 적용되지 않습니다.
또한, 무통장 입금으로만 가능합니다.

이 조건으로 주문 계속 진행해도 괜찮을까요?</div></td></tr><tr><td class="cmp-row-label">심플리케어</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">고객님, 채팅 주문 시 유의사항 먼저 안내드립니다.
회원 가입 시 발급되는 웰컴 쿠폰팩 등 쿠폰 사용은 제한되며, 적립금 혜택도 적용되지 않습니다.
또한, 무통장 입금으로만 가능하며, 4만원 미만 주문 시 배송비 3,000원이 추가됩니다.

이 조건으로 주문 계속 진행해도 괜찮을까요?</div></td></tr><tr><td class="cmp-row-label">얼라인랩</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">고객님, 채팅 주문 시 유의사항 먼저 안내드립니다.
회원 가입 시 발급되는 웰컴 쿠폰팩 등 쿠폰 사용은 제한되며, 적립금 혜택도 적용되지 않습니다.
또한, 무통장 입금으로만 가능하며, 9만원 미만 주문 시 배송비 3,000원이 추가됩니다.

이 조건으로 주문 계속 진행해도 괜찮을까요?</div></td></tr><tr><td class="cmp-row-label">빌바</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">고객님, 채팅 주문 시 유의사항 먼저 안내드립니다.
회원 가입 시 발급되는 웰컴 쿠폰팩 등 쿠폰 사용은 제한되며, 적립금 혜택도 적용되지 않습니다.
또한, 무통장 입금으로만 가능하며, 7만원 미만 주문 시 배송비 3,000원이 추가됩니다.

이 조건으로 주문 계속 진행해도 괜찮을까요?</div></td></tr><tr><td class="cmp-row-label">셀올로지</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">고객님, 채팅 주문 시 유의사항 먼저 안내드립니다.
회원 가입 시 발급되는 웰컴 쿠폰팩 등 쿠폰 사용은 제한되며, 적립금 혜택도 적용되지 않습니다.
또한, 무통장 입금으로만 가능하며, 7만원 미만 주문 시 배송비 3,000원이 추가됩니다.

이 조건으로 주문 계속 진행해도 괜찮을까요?</div></td></tr><tr><td class="cmp-row-label">코코다움</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">고객님, 채팅 주문 시 유의사항 먼저 안내드립니다.
회원 가입 시 발급되는 웰컴 쿠폰팩 등 쿠폰 사용은 제한되며, 적립금 혜택도 적용되지 않습니다.
또한, 무통장 입금으로만 가능하며, 3만원 미만 주문 시 배송비 3,000원이 추가됩니다.

이 조건으로 주문 계속 진행해도 괜찮을까요?</div></td></tr><tr><td class="cmp-row-label">닥터맨즈</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">고객님, 채팅 주문 시 유의사항 먼저 안내드립니다.
회원 가입 시 발급되는 웰컴 쿠폰팩 등 쿠폰 사용은 제한되며, 적립금 혜택도 적용되지 않습니다.
또한, 무통장 입금으로만 가능하며, 26,800원 미만 주문 시 배송비 3,000원이 추가됩니다.

이 조건으로 주문 계속 진행해도 괜찮을까요?</div></td></tr><tr><td class="cmp-row-label">와이브닝</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">고객님, 채팅 주문 시 유의사항 먼저 안내드립니다.
회원 가입 시 발급되는 웰컴 쿠폰팩 등 쿠폰 사용은 제한되며, 적립금 혜택도 적용되지 않습니다.
또한, 무통장 입금으로만 가능하며, 5만원 미만 주문 시 배송비 3,000원이 추가됩니다.

이 조건으로 주문 계속 진행해도 괜찮을까요?</div></td></tr><tr><td class="cmp-row-label">닥터아망</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">고객님, 채팅 주문 시 유의사항 먼저 안내드립니다.
회원 가입 시 발급되는 웰컴 쿠폰팩 등 쿠폰 사용은 제한되며, 적립금 혜택도 적용되지 않습니다.
또한, 무통장 입금으로만 가능하며, 4만원 미만 주문 시 배송비 3,000원이 추가됩니다.

이 조건으로 주문 계속 진행해도 괜찮을까요?</div></td></tr></tbody></table></div>
  ${guide(`12 o'clock · 마넬 : 배송비 기준 미확인 → 확인 후 반영 예정`)}
  <div class="grid2">${macro(D_SHARED["cmn_all__059"].name, D_SHARED["cmn_all__059"].tag, D_SHARED["cmn_all__059"].body, D_SHARED["cmn_all__059"].desc, "cmn_all__059", "shared")}${macro(D_SHARED["cmn_all__060"].name, D_SHARED["cmn_all__060"].tag, D_SHARED["cmn_all__060"].body, D_SHARED["cmn_all__060"].desc, "cmn_all__060", "shared")}</div>
  <div class="grp-h">출고 예정 안내 (입금 확인 후)</div>
  <div class="grid2">${macro(D_SHARED["cmn_all__061"].name, D_SHARED["cmn_all__061"].tag, D_SHARED["cmn_all__061"].body, D_SHARED["cmn_all__061"].desc, "cmn_all__061", "shared")}${macro(D_SHARED["cmn_all__062"].name, D_SHARED["cmn_all__062"].tag, D_SHARED["cmn_all__062"].body, D_SHARED["cmn_all__062"].desc, "cmn_all__062", "shared")}</div>
  ${macro(D_SHARED["cmn_all__063"].name, D_SHARED["cmn_all__063"].tag, D_SHARED["cmn_all__063"].body, D_SHARED["cmn_all__063"].desc, "cmn_all__063", "shared")}
  ${guide(`상담 종료 후 <a href="https://docs.google.com/spreadsheets/d/1Bj5stx8hXMoPL8L91EYu6e5TA7pqEAjges4Cejs1wjo/edit?gid=388846546#gid=388846546" target="_blank">[SCM파트 X CX팀] 수기 주문 출고 리스트</a> 시트에 사업자(올릿/리테일/더마) 구분하여 작성, 출고 요청`)}
`;

const COMMON_CALL_ALL = `<div class="no-copy">
  <h1>📞 유선 응대</h1>
      <div class="sub">슬룸 유선(전화) 응대 표준 · 구어체 · 콜백/OB 중심 운영</div>
  ${secTitle("📋","유선 상담 운영 기준",null,"c_ops")}
  <div class="warn-note">⚠️ AS·불량은 증빙(영상·사진) 확인이 필요해 유선 상담을 진행하지 않습니다. → 채팅으로만 접수 안내</div>
  <div class="quote-box"><b>📞 [슬룸] 현재 콜백티켓 중심 운영</b>
대표번호 고객센터 연결 → 고객 문의 유형 선택 → 유형별 요청 정보 기재 후 접수 완료 → 채널톡 팀챗 콜백 티켓 접수건 확인 후 OB 진행</div>
  <div class="cmp-table-wrap"><table class="cmp-table" style="table-layout:fixed"><colgroup><col style="width:190px"><col></colgroup><thead><tr><th class="cmp-corner" style="white-space:nowrap">항목</th><th class="cmp-blue">내용</th></tr></thead><tbody><tr><td class="cmp-row-label" style="white-space:nowrap">AS 유선 요청 시</td><td style="white-space:pre-line;text-align:left;padding:10px 14px;line-height:1.7">AS·불량은 증빙(영상·사진) 확인이 필요해 전화로는 접수할 수 없습니다.
고객님께 채팅으로만 진행 가능함을 안내하고, 아래 워크플로우를 유저챗으로 발송해 주세요.
▶ <a href="https://sloom.channel.io/workflows/789993" target="_blank">[IVR/ALF] 불량 AS 접수 직통 ver.</a> 유저챗 발송</td></tr><tr><td class="cmp-row-label" style="white-space:nowrap">슬룸 유선 운영 방식</td><td style="white-space:pre-line;text-align:left;padding:10px 14px;line-height:1.7">현재 슬룸은 콜백 티켓을 중심으로 유선 상담을 운영하고 있습니다.

콜백티켓 운영 방식 : 🔗 대표번호 고객센터 연결 → 문의 유형 선택 → 요청 정보 입력·접수 → 채널톡 팀챗에서 콜백 티켓으로 접수 → 상담사 OB 진행
(⚠️ 전화 주문 유형만 유선 OB / 그 외 유저챗 오픈하여 진행)</td></tr><tr><td class="cmp-row-label" style="white-space:nowrap">콜백 티켓 접수 유형</td><td style="white-space:pre-line;text-align:left;padding:10px 14px;line-height:1.7">전화 주문 · 주문 취소 · 반품/교환 철회 요청 · 교환 제품 배송 일정 · 반품 환불 일정 · 오배송/미배송(배송 오류) · 재회수 요청 · 취소 후 배송/회수 요청</td></tr><tr><td class="cmp-row-label" style="white-space:nowrap">실시간 상담 연결 유형</td><td style="white-space:pre-line;text-align:left;padding:10px 14px;line-height:1.7">현재 : 전화 주문
추후 확대 예정 : 배송 정보 변경 요청 / 무통장 입금 내역 확인</td></tr></tbody></table></div>
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
  ${secTitle("📞","콜백 · 아웃바운드 (O/B)",null,"c_ob")}
  ${caution(`불필요한 OB는 지양 · 고객이 인입하지 않았으므로 [소속 브랜드명 + OB 사유 + 통화 가능 여부] 반드시 확인 · 필수 유형: 콜백 전화 주문 접수 건 / 교환·반품 장기 미처리`)}
  <div class="grid2">${macro(D_SHARED["call__015"].name, D_SHARED["call__015"].tag, D_SHARED["call__015"].body, D_SHARED["call__015"].desc, "call__015", "shared")}${macro(D_SHARED["call__016"].name, D_SHARED["call__016"].tag, D_SHARED["call__016"].body, D_SHARED["call__016"].desc, "call__016", "shared")}</div>
  ${macro(D_SHARED["call__017"].name, D_SHARED["call__017"].tag, D_SHARED["call__017"].body, D_SHARED["call__017"].desc, "call__017", "shared")}
  ${secTitle("🔄","주문 변경 (취소·배송정보 변경)",null,"c_order")}
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
  ${secTitle("💳","결제 문의 (입금 확인)",null,"c_pay")}
  ${caution(`고객 정보 확인부터 진행 · 정상 입금 시 확인 내용 안내`)}
  ${macro(D_SHARED["call__025"].name, D_SHARED["call__025"].tag, D_SHARED["call__025"].body, D_SHARED["call__025"].desc, "call__025", "shared")}
  <div class="grid2">${macro(D_SHARED["call__026"].name, D_SHARED["call__026"].tag, D_SHARED["call__026"].body, D_SHARED["call__026"].desc, "call__026", "shared")}${macro(D_SHARED["call__027"].name, D_SHARED["call__027"].tag, D_SHARED["call__027"].body, D_SHARED["call__027"].desc, "call__027", "shared")}</div>
  ${macro(D_SHARED["call__028"].name, D_SHARED["call__028"].tag, D_SHARED["call__028"].body, D_SHARED["call__028"].desc, "call__028", "shared")}
  <div class="grid2">${macro(D_SHARED["call__029"].name, D_SHARED["call__029"].tag, D_SHARED["call__029"].body, D_SHARED["call__029"].desc, "call__029", "shared")}${macro(D_SHARED["call__030"].name, D_SHARED["call__030"].tag, D_SHARED["call__030"].body, D_SHARED["call__030"].desc, "call__030", "shared")}</div>
  ${macro(D_SHARED["call__031"].name, D_SHARED["call__031"].tag, D_SHARED["call__031"].body, D_SHARED["call__031"].desc, "call__031", "shared")}
  <div class="grp-h">결제 완료 후 출고 안내</div>
  <div class="grid2">${macro(D_SHARED["call__032"].name, D_SHARED["call__032"].tag, D_SHARED["call__032"].body, D_SHARED["call__032"].desc, "call__032", "shared")}${macro(D_SHARED["call__033"].name, D_SHARED["call__033"].tag, D_SHARED["call__033"].body, D_SHARED["call__033"].desc, "call__033", "shared")}</div>
  ${secTitle("👤","회원 정보 (탈퇴·비밀번호·가입)",null,"c_member")}
  <div class="grp-h">1. 회원 탈퇴 (본인 확인 후 처리)</div>
  ${macro(D_SHARED["call__034"].name, D_SHARED["call__034"].tag, D_SHARED["call__034"].body, D_SHARED["call__034"].desc, "call__034", "shared")}
  <div class="grid2">${macro(D_SHARED["call__035"].name, D_SHARED["call__035"].tag, D_SHARED["call__035"].body, D_SHARED["call__035"].desc, "call__035", "shared")}${macro(D_SHARED["call__036"].name, D_SHARED["call__036"].tag, D_SHARED["call__036"].body, D_SHARED["call__036"].desc, "call__036", "shared")}</div>
  ${macro(D_SHARED["call__037"].name, D_SHARED["call__037"].tag, D_SHARED["call__037"].body, D_SHARED["call__037"].desc, "call__037", "shared")}
  <div class="grp-h">2. 비밀번호 찾기</div>
  <div class="grid2">${macro(D_SHARED["call__038"].name, D_SHARED["call__038"].tag, D_SHARED["call__038"].body, D_SHARED["call__038"].desc, "call__038", "shared")}${macro(D_SHARED["call__039"].name, D_SHARED["call__039"].tag, D_SHARED["call__039"].body, D_SHARED["call__039"].desc, "call__039", "shared")}</div>
  ${macro(D_SHARED["call__040"].name, D_SHARED["call__040"].tag, D_SHARED["call__040"].body, D_SHARED["call__040"].desc, "call__040", "shared")}
  <div class="grp-h">3. 회원가입</div>
  ${macro(D_SHARED["call__041"].name, D_SHARED["call__041"].tag, D_SHARED["call__041"].body, D_SHARED["call__041"].desc, "call__041", "shared")}
  ${secTitle("📣","마케팅·제휴 문의",null,"c_mkt")}
  <div class="grid2">${macro(D_SHARED["call__042"].name, D_SHARED["call__042"].tag, D_SHARED["call__042"].body, D_SHARED["call__042"].desc, "call__042", "shared")}${macro(D_SHARED["call__043"].name, D_SHARED["call__043"].tag, D_SHARED["call__043"].body, D_SHARED["call__043"].desc, "call__043", "shared")}</div>
  ${secTitle("📞","전화 주문",null,"c_call")}
  <div class="grp-h">1) 주문 시 유의사항 안내 (브랜드별)</div>
  <div class="cmp-table-wrap"><table class="cmp-table"><thead><tr><th class="cmp-corner">브랜드</th><th class="cmp-blue">전화 주문 유의사항 멘트</th></tr></thead><tbody><tr><td class="cmp-row-label">슬룸</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">전화로 주문하시는 경우 회원 전용 혜택인 쿠폰, 적립금, 회원 등급 할인 등은 적용되지 않으며, 적립금 사용도 어렵습니다.
안내드린 내용 괜찮으실까요?</div></td></tr><tr><td class="cmp-row-label">심플리케어</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">전화를 통한 주문 시 회원 가입 후 발급되는 웰컴 쿠폰팩 등 회원 전용 혜택과 적립금은 사용이 어렵습니다.
또한 4만원 미만 구매 시에는 배송비 3,000원이 추가로 발생합니다.
안내드린 내용 괜찮으실까요?</div></td></tr><tr><td class="cmp-row-label">얼라인랩</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">전화를 통한 주문 시 회원 가입 후 발급되는 웰컴 쿠폰팩 등 회원 전용 혜택과 적립금은 사용이 어렵습니다.
또한 9만원 미만 구매 시에는 배송비 3,000원이 추가로 발생합니다.
안내드린 내용 괜찮으실까요?</div></td></tr><tr><td class="cmp-row-label">빌바</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">전화를 통한 주문 시 회원 가입 후 발급되는 웰컴 쿠폰팩 등 회원 전용 혜택과 적립금은 사용이 어렵습니다.
또한 7만원 미만 구매 시에는 배송비 3,000원이 추가로 발생합니다.
안내드린 내용 괜찮으실까요?</div></td></tr><tr><td class="cmp-row-label">셀올로지</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">전화를 통한 주문 시 회원 가입 후 발급되는 웰컴 쿠폰팩 등 회원 전용 혜택과 적립금은 사용이 어렵습니다.
또한 7만원 미만 구매 시에는 배송비 3,000원이 추가로 발생합니다.
안내드린 내용 괜찮으실까요?</div></td></tr><tr><td class="cmp-row-label">코코다움</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">전화를 통한 주문 시 회원 가입 후 발급되는 웰컴 쿠폰팩 등 회원 전용 혜택과 적립금은 사용이 어렵습니다.
또한 3만원 미만 구매 시에는 배송비 3,000원이 추가로 발생합니다.
안내드린 내용 괜찮으실까요?</div></td></tr><tr><td class="cmp-row-label">닥터맨즈</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">전화를 통한 주문 시 회원 가입 후 발급되는 웰컴 쿠폰팩 등 회원 전용 혜택과 적립금은 사용이 어렵습니다.
또한 26,800원 미만 구매 시에는 배송비 3,000원이 추가로 발생합니다.
안내드린 내용 괜찮으실까요?</div></td></tr><tr><td class="cmp-row-label">와이브닝</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">전화를 통한 주문 시 회원 가입 후 발급되는 웰컴 쿠폰팩 등 회원 전용 혜택과 적립금은 사용이 어렵습니다.
또한 5만원 미만 구매 시에는 배송비 3,000원이 추가로 발생합니다.
안내드린 내용 괜찮으실까요?</div></td></tr><tr><td class="cmp-row-label">닥터아망</td><td class="cmp-ment"><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">전화를 통한 주문 시 회원 가입 후 발급되는 웰컴 쿠폰팩 등 회원 전용 혜택과 적립금은 사용이 어렵습니다.
또한 4만원 미만 구매 시에는 배송비 3,000원이 추가로 발생합니다.
안내드린 내용 괜찮으실까요?</div></td></tr></tbody></table></div>
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
  <div class="cmp-table-wrap"><table class="cmp-table policy-tb" style="table-layout:fixed"><colgroup><col style="width:120px"><col style="width:150px"><col style="width:150px"><col></colgroup><thead><tr><th class="cmp-corner">브랜드</th><th class="cmp-blue" style="text-align:center">AS</th><th class="cmp-blue" style="text-align:center">100% 환불</th><th class="cmp-blue">톤앤매너</th></tr></thead><tbody><tr><td class="cmp-row-label">슬룸</td><td style="text-align:center"><span style="color:#234A86;font-weight:800">O</span></td><td style="text-align:center"><span style="color:#234A86;font-weight:800">O</span></td><td style="text-align:left;padding-left:14px">쉬운 말·짧게·두괄식, 고령 배려·공감 필수</td></tr><tr><td class="cmp-row-label">심플리케어</td><td style="text-align:center"><span style="color:#9b6829;font-weight:800">X</span></td><td style="text-align:center"><span style="color:#234A86;font-weight:800">O</span></td><td style="text-align:left;padding-left:14px">쉬운 말·짧게, 두괄식+친절</td></tr><tr><td class="cmp-row-label">얼라인랩</td><td style="text-align:center"><span style="color:#234A86;font-weight:800">O</span><div style="font-size:11px;color:#8a94a6;margin-top:3px">(전자제품/디바이스)</div></td><td style="text-align:center"><span style="color:#9b6829;font-weight:800">X</span></td><td style="text-align:left;padding-left:14px">다정·공감, 하트 이모지</td></tr><tr><td class="cmp-row-label">빌바</td><td style="text-align:center"><span style="color:#234A86;font-weight:800">O</span></td><td style="text-align:center"><span style="color:#9b6829;font-weight:800">X</span></td><td style="text-align:left;padding-left:14px">고령 배려·쉬운 말, 공감 필수</td></tr><tr><td class="cmp-row-label">셀올로지</td><td style="text-align:center"><span style="color:#234A86;font-weight:800">O</span><div style="font-size:11px;color:#8a94a6;margin-top:3px">(디바이스)</div></td><td style="text-align:center"><span style="color:#234A86;font-weight:800">O</span></td><td style="text-align:left;padding-left:14px">젊은 톤·이모지</td></tr><tr><td class="cmp-row-label">코코다움</td><td style="text-align:center"><span style="color:#9b6829;font-weight:800">X</span></td><td style="text-align:center"><span style="color:#234A86;font-weight:800">O</span></td><td style="text-align:left;padding-left:14px">다정·이모지, 호칭 ‘보호자님’</td></tr><tr><td class="cmp-row-label">12 o'clock</td><td style="text-align:center"><span style="color:#234A86;font-weight:800">O</span></td><td style="text-align:center"><span style="color:#9b6829;font-weight:800">X</span></td><td style="text-align:left;padding-left:14px">다정·이모지·젊은 톤</td></tr><tr><td class="cmp-row-label">닥터맨즈</td><td style="text-align:center"><span style="color:#9b6829;font-weight:800">X</span></td><td style="text-align:center"><span style="color:#9b6829;font-weight:800">X</span></td><td style="text-align:left;padding-left:14px">젊은 톤·간결</td></tr><tr><td class="cmp-row-label">와이브닝</td><td style="text-align:center"><span style="color:#9b6829;font-weight:800">X</span></td><td style="text-align:center"><span style="color:#234A86;font-weight:800">O</span></td><td style="text-align:left;padding-left:14px">공감 필수·이모지</td></tr><tr><td class="cmp-row-label">마넬</td><td style="text-align:center"><span style="color:#9b6829;font-weight:800">X</span></td><td style="text-align:center"><span style="color:#9b6829;font-weight:800">X</span></td><td style="text-align:left;padding-left:14px">다정·공감 (얼라인랩과 동일)</td></tr><tr><td class="cmp-row-label">닥터아망</td><td style="text-align:center"><span style="color:#9b6829;font-weight:800">X</span></td><td style="text-align:center"><span style="color:#234A86;font-weight:800">O</span></td><td style="text-align:left;padding-left:14px">다정·공감·이모지</td></tr></tbody></table></div>
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
  <tr><td class="cmp-row-label">단순변심 교환·반품</td><td style="text-align:left;padding-left:14px">고객 변심에 의한 교환·반품 신청 접수</td><td style="text-align:left;padding-left:14px">전 브랜드</td></tr>
  <tr><td class="cmp-row-label">100% 환불 이벤트</td><td style="text-align:left;padding-left:14px">만족하지 못한 고객 대상 100% 환불 이벤트 접수</td><td style="text-align:left;padding-left:14px">슬룸·심플리케어·셀올로지·코코다움·와이브닝·닥터아망</td></tr>
  <tr><td class="cmp-row-label">불량 AS · 불량 유형</td><td style="text-align:left;padding-left:14px">파손·작동불량·변질 등 불량 접수<br>· <b>AS</b> 지원: 슬룸·얼라인랩·빌바·셀올로지·12 o'clock (<b>전자제품·디바이스</b>에 한함)<br>· 그 외 브랜드는 <b>불량 유형</b>으로 분류</td><td style="text-align:left;padding-left:14px">전 브랜드</td></tr>
  <tr><td class="cmp-row-label">부작용·상해 VOC</td><td style="text-align:left;padding-left:14px">사용 중 부작용·상해 등 안전 관련 VOC 접수</td><td style="text-align:left;padding-left:14px">전 브랜드</td></tr>
  </tbody></table></div>
  ${guide(`브랜드별 <b>AS · 100% 환불 제공 여부</b>와 <b>톤앤매너</b> 상세는 홈(🏠) 화면의 정책표에서 확인하세요. 특정 멘트는 상단 <b>검색</b>으로 바로 찾을 수 있습니다.`)}
`;

