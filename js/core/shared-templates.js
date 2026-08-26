const STEP_REF_1 = `
  <h1>1️⃣ 반품 가능 여부 확인</h1>
  <div class="sub">배송 완료 후 7일 경과 여부와 반품 사유부터 확인합니다.</div>

  <div class="chapter">
    <div class="section-title"><span class="ic">📋</span>반품 가능 여부 (기준 요약)</div>
    <div class="grid2">
      <div class="card">
        <div class="card-head ok">⭕ 신청 가능</div>
        <div class="card-body"><ul>
          <li>상품 수령일로부터 <b>7일 이내</b></li>
          <li>미개봉 또는 개봉 후 미사용 상태</li>
          <li>구성 확인 목적으로 <b>포장만</b> 개봉한 경우 (개봉 후 미사용)</li>
          <li class="warn">⚠️ 전자제품은 어댑터 연결·작동 이력이 1회라도 있으면 '미사용'에 해당하지 않습니다.</li>
        </ul></div>
      </div>
      <div class="card">
        <div class="card-head no">❌ 신청 불가</div>
        <div class="card-body"><ul>
          <li>사용 또는 개봉 사용으로 재화 가치가 현저히 감소·훼손된 경우</li>
          <li>수령일로부터 <b>7일이 경과</b>한 경우</li>
          <li>제품 또는 구성품을 분실한 경우</li>
        </ul></div>
      </div>
    </div>
  </div>

  <div class="chapter">
    <div class="section-title"><span class="ic">🧭</span>응대 흐름</div>
    <div class="flow-step"><span class="flow-num">1</span>배송 완료 후 7일 경과 여부 · 사유 확인</div>
    <div class="grid2">
      <div class="card">
        <div class="card-head ok">⭕ 수령일로부터 7일 이내</div>
        <div class="card-body">반품·교환 사유에 따라 <b>유형별 템플릿</b>으로 안내합니다. 사유 미언급 시 사유·사용 여부부터 확인하세요.</div>
      </div>
      <div class="card">
        <div class="card-head no">❌ 수령일로부터 7일 경과</div>
        <div class="card-body">단순 변심 반품·교환은 배송 완료일로부터 7일 이내에만 신청이 가능합니다.</div>
      </div>
    </div>
  </div>

  ${guide(`<ul>
    <li>고객이 사유를 언급하지 않으면 <b>사유·사용 여부</b>부터 확인</li>
    <li>수령일 7일 경과 건은 전산상 단순변심 반품 접수 <b>불가</b> 처리</li>
    <li>사용/개봉 여부 확인 후 <b>2️⃣ 반품 유형</b> 단계로 진행</li>
  </ul>`)}

  ${macro("사유 확인 (사유 미언급 시)","반품_사유확인",
`반품을 원하시는 사유가 어떻게 되실까요? :)
개봉 후 사용하지 않으신 제품은 반품이 가능하지만, 사용하신 제품은 반품이 어려운 점 참고 부탁드립니다.
제품 사용 여부도 함께 확인 부탁드립니다.`)}
  ${macro("7일 경과 안내","반품_7일경과",
`단순 변심에 의한 반품·교환은 배송 완료일로부터 7일 이내에만 신청이 가능합니다.
현재는 신청 가능 기간이 지나 도움드리기 어려운 점 양해 부탁드립니다.`)}
`;

const STEP_REF_2 = `
  <h1>2️⃣ 반품 유형 (전체 / 부분)</h1>
  <div class="sub">전체 반품인지 부분 반품인지 구분해 회수 범위를 정합니다.</div>

  <div class="chapter">
    <div class="section-title"><span class="ic">📦</span>전체 / 부분 반품 기준</div>
    <div class="grid2">
      <div class="card">
        <div class="card-head blue">A. 전체 반품</div>
        <div class="card-body">
          <div class="kv"><b>조건</b><span>주문 건의 제품 전부 미사용 (예: 박스만 열어보고 미사용)</span></div>
          <div class="kv"><b>반품 배송비</b><span>6,000원</span></div>
          <div class="kv"><b>회수 품목</b><span>주문 제품(구성품 포함) · 증정품이 있으면 함께 회수</span></div>
        </div>
      </div>
      <div class="card">
        <div class="card-head pink">B. 부분 반품</div>
        <div class="card-body">
          <div class="kv"><b>조건</b><span>2개 이상 구매 후 일부만 반품 (예: 허리+목 케어 중 목 케어만 반품)</span></div>
          <div class="kv"><b>반품 배송비</b><span>3,000원</span></div>
          <div class="kv"><b>회수 품목</b><span>반품 제품(구성품 포함) · 해당 제품에 딸린 증정품도 함께 회수</span></div>
        </div>
      </div>
    </div>
  </div>

  ${guide(`<ul>
    <li><b>전체</b> = 주문 전 제품 미사용 · <b>부분</b> = 일부만 반품</li>
    <li>회수 품목에 <b>증정품 포함 여부</b> 반드시 확인</li>
    <li>물류센터(품고 또는 정석) 회수 접수 시 유형(전체/부분)을 정확히 선택</li>
  </ul>`)}

  ${macro("부분 반품 회수 품목 안내","반품_부분_회수품목",
`부분 반품 시에는 반품하시는 제품과 함께 받으신 증정품도 같이 회수되는 점 안내드립니다.
회수 품목 : 반품 제품(구성품 포함) + 해당 증정품`)}
`;

const STEP_REF_3 = `
  <h1>3️⃣ 반품 배송비 안내 · 입금 확인</h1>
  <div class="sub">유형별 배송비를 안내하고, 입금 확인 후 회수를 접수합니다.</div>

  <div class="chapter">
    <div class="section-title"><span class="ic">💳</span>반품 배송비 (유형별)</div>
    <div class="grid2">
      <div class="card">
        <div class="card-head blue">전체 반품</div>
        <div class="card-body"><div class="kv"><b>반품 배송비</b><span><b>6,000원</b></span></div></div>
      </div>
      <div class="card">
        <div class="card-head pink">부분 반품</div>
        <div class="card-body"><div class="kv"><b>반품 배송비</b><span><b>3,000원</b></span></div></div>
      </div>
    </div>
  </div>

  ${guide(`<ul>
    <li>네이버페이·스마트스토어는 상담사가 반품 배송비 차감 설정 <b>불가</b> → 고객이 직접 주문내역에서 반품 접수 시에만 설정 가능</li>
    <li>입금 확인 : <b>입금자명·입금금액</b> 대조 후 <a href="https://www.ibk.co.kr" target="_blank">IBK기업은행 계좌 조회</a></li>
    <li>입금이 확인되면 물류센터(<a href="https://seller.poomgo.com/login?redirect=%2F" target="_blank">품고</a> 또는 정석)에서 회수 접수 진행</li>
  </ul>`)}

  ${macro("공식몰 · 네이버페이 / 스마트스토어 (전체 반품)","반품_배송비_전체_네이버",
`네이버페이 결제는 부분 취소가 어려워 반품 배송비 6,000원 입금 후 반품이 가능합니다. 😥

반품 배송비 : 6,000원
▶ 기업은행 075-09598004-017 (예금주: 올릿리테일)

위 계좌로 송금해 주신 다음 '입금자명'을 말씀해 주시면 확인 후 도와드리겠습니다. :)`)}
  ${macro("공식몰 (부분 반품)","반품_배송비_부분",
`부분 반품은 반품 배송비 3,000원 입금 후 진행이 가능합니다.

반품 배송비 : 3,000원
▶ 기업은행 075-09598004-017 (예금주: 올릿리테일)

입금 후 '입금자명'을 남겨 주시면 확인하고 회수를 접수해 드리겠습니다. :)`)}
`;

/* 슬룸 > 단순변심 반품 · 단일 페이지 (레퍼런스 양식) */
const REF_SIMPLE = `
  <h1>🔄 단순변심 반품</h1>
  <div class="sub">고객 변심에 의한 반품 · 유형별 응대</div>

  ${secTitle("💡","기준 및 조건",null,"secGuide")}
  ${cmpTable(
    [{cls:"blue",label:"🔹 전체 반품"},{cls:"pink",label:"🔹 부분 반품"}],
    [
      {label:"조건", values:[
        "구매 제품 전체 미사용<br>미개봉 또는 개봉했으나 미사용<br>(예: 박스만 열어보고 다시 닫음)",
        "2개 이상 구매 후 일부만 개봉(사용)<br>(예: 허리편한케어 + 목편한케어 구매 → 허리편한케어만 사용 시, 목편한케어만 부분 반품)"
      ]},
      {label:"반품 배송비", values:["6,000원","3,000원"]},
      {label:"회수 품목", values:[
        "모든 구성품 + 증정품 포함",
        "사용(개봉) 제품 제외, 미사용(미개봉) 제품과 그 구성품만 회수"
      ]}
    ]
  )}
  <div class="grp-h">🧭 상담 플로우</div>
  <div class="flow-diagram"><div class="fd-box">1. 7일 경과 여부 및 사유 확인</div><div class="fd-arrow">▶</div><div class="fd-box">2. 반품 배송비 안내</div><div class="fd-arrow">▶</div><div class="fd-box">③ 포장 및 회수 안내</div><div class="fd-arrow">▶</div><div class="fd-box">4. 결제수단별 환불 안내</div></div>
  ${notice([
    "<b>전자제품은 어댑터 연결·작동을 한 번이라도 했다면 '사용 제품'으로 간주되어 단순변심 반품 불가.</b>",
    "네이버페이·스마트스토어는 어드민에서 반품 배송비 차감 설정 <b>불가</b> → 고객이 직접 반품 접수 시에만 차감 가능",
    `네이버페이-구매확정 건은 아임웹에서 즉시 취소 불가 → <a href="https://docs.google.com/spreadsheets/d/1t7Oa-rKPY2aYgphNugE5K5gMCP7Hn3joaJYp-bbh7Jw/edit?gid=1012913860#gid=1012913860" target="_blank">[자사/외부몰] 통합 교환/반품 관리</a> 시트에 취합 후 네이버 어드민에서 직접 취소`
  ])}

  ${secTitle("","1. 7일 경과 여부 및 사유 확인","전체·부분 공통","sec1")}
  <div class="grid2">
    ${colTag("gray","수령일로부터 7일 이내","반품교환_7일이내_사유확인",
`반품을 원하시는 사유가 어떻게 되실까요? :)
개봉 후 사용하지 않은 제품은 반품 가능하지만, 사용한 제품은 반품이 어려운 점 참고 부탁드립니다.
제품 사용 여부도 함께 확인 부탁드립니다.`)}
    ${colTag("gray","수령일로부터 7일 경과","단순반품_7일경과_사유확인",
`단순 변심에 의한 반품·교환은 배송 완료일로부터 7일 이내에만 신청이 가능합니다.
현재는 신청 가능 기간이 경과되어 도움드리기 어려운 점 양해 부탁드립니다.`)}
  </div>
  <div class="branch-box">
    <div class="branch-h">💡 고객이 말씀하신 사유·증상에 따라 알맞은 유형으로 이동하여 응대</div>
    <table class="branch-tbl"><tbody>
    <tr><td class="cond">수령일 7일 이내 · <b>미사용</b></td><td class="ar">→</td><td><span class="bdg b-blue">단순변심</span></td></tr>
    <tr><td class="cond">수령일 7일 이내 · <b>사용</b></td><td class="ar">→</td><td><span class="bdg b-amber">100% 환불 이벤트</span></td></tr>
    <tr><td class="cond">수령일 7일 경과 · <b>미사용</b></td><td class="ar">→</td><td><span class="bdg b-amber">100% 환불 이벤트</span></td></tr>
    <tr><td class="cond">제품 <b>불량</b> (사용·수령일 무관)</td><td class="ar">→</td><td><span class="bdg b-pink">불량 AS 교환/반품</span></td></tr>
    </tbody></table>
    <div class="branch-note">※ 100% 환불 이벤트는 신청 이력이 없는 경우에만 가능합니다.</div>
  </div>

  ${secTitle("","2. 반품 배송비 안내",null,"sec2")}
  <div class="grid2">
    ${col("blue","🔹 전체 반품",
      subcard("i. 공식몰 · 네이버페이 / 스마트스토어","단순반품_전체_배송비_네이버",
`네이버페이 결제는 시스템상 반품 배송비 차감 처리가 어려워, 반품 배송비 6,000원 입금 후 반품 접수가 가능합니다. 🥹

✅ 반품 배송비 : 6,000원
🏦 기업은행 075-09598004-017 (예금주: 올릿리테일)

입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드리겠습니다. 😊`)
      + subcard("ii. 공식몰 결제 (신용카드 · 무통장 · 가상계좌)","단순반품_전체_배송비",
`반품 배송비 6,000원 제외 후 반품 진행됩니다.`)
      + subcard("iii. 쿠팡","단순반품_전체_배송비_쿠팡",
`쿠팡 주문은 시스템상 반품 배송비 차감 처리가 어려워, 반품 배송비 6,000원 입금 후 반품 접수가 가능합니다. 🥹

✅ 반품 배송비 : 6,000원
🏦 기업은행 075-09598004-017 (예금주: 올릿리테일)

입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드리겠습니다. 😊`)
    )}
    ${col("pink","🔹 부분 반품",
      subcard("i. 공식몰 · 네이버페이 / 스마트스토어","단순반품_부분_배송비_네이버",
`네이버페이 결제는 시스템상 부분 취소가 어려워, 반품 배송비 3,000원과 계속 사용하실 제품의 금액을 먼저 입금해 주신 후 반품 접수가 가능합니다. 🥹

✅ 반품 배송비 : 3,000원
✅ (제품명) : (가격)
🏦 기업은행 075-09598004-017 (예금주: 올릿리테일)

입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드리겠습니다. 😊`)
      + subcard("ii. 공식몰 결제 (신용카드 · 무통장 · 가상계좌)","단순반품_부분_배송비",
`반품 배송비 3,000원과 개봉하여 반품이 어려운 (제품명) (가격) 제외 후 반품 진행돼요.`)
      + subcard("iii. 쿠팡","단순반품_부분_배송비_쿠팡",
`쿠팡 주문은 시스템상 부분 취소가 어려워, 반품 배송비 3,000원과 계속 사용하실 제품의 금액을 먼저 입금해 주신 후 반품 접수가 가능합니다. 🥹
수거 및 검수 완료 후 주문 금액은 전액 환불 처리됩니다.

💳 입금 금액
• 반품 배송비 : 3,000원
• (제품명) : (가격)
🏦 기업은행 075-09598004-017 (예금주: 올릿리테일)

입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드리겠습니다. 😊`)
      + starNote("고객이 정가 차감에 미동의할 경우",
`구매하신 옵션은 1개 이상 구매 시 적용되는 구성입니다.
부분 반품 시 개봉된 상품 수량만큼 정상가로 간주되어 원물 금액에서 차감됩니다.
반품 전 꼭 확인 부탁드립니다.`)
    )}
  </div>

  ${secTitle("","3. 포장 및 회수 안내",null,"sec3")}
  <div class="grid2">
    ${col("blue","🔹 전체 반품",
      subcard("포장 · 회수 안내","단순_포장회수_전체",
`반품 접수 도와드리겠습니다.

📦 <b>제품 포장 안내</b>
■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}
※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.

🚚 <b>회수 안내</b>
· 택배사 : CJ대한통운
· 영업일 기준 2~3일 내 방문
방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드립니다.

💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.
⚠️ 박스 포장이 아닐 경우 수거가 거부됩니다.`)
      + caution(`🎁 증정품 회수 O`)
    )}
    ${col("pink","🔹 부분 반품",
      subcard("포장 · 회수 안내","단순_포장회수_부분",
`부분 반품 접수 도와드리겠습니다.

📦 <b>제품 포장 안내</b>
■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}
※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.
※ 사은품·증정품 및 그 외 구매한 부속품과 제품은 보내지 않으셔도 됩니다.

🚚 <b>회수 안내</b>
· 택배사 : CJ대한통운
· 영업일 기준 2~3일 내 방문
방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드립니다.

💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.
⚠️ 박스 포장이 아닐 경우 수거가 거부됩니다.`)
      + caution(`🎁 증정품 회수 X`)
    )}
  </div>
  <div class="stack">
    ${col("gray","💡 복합 유형 (예: 불량 반품 + 단순변심 반품)",
      subcard("포장 · 회수 안내","단순_포장회수_복합",
`전액 환불 접수 도와드리겠습니다.

📦 <b>제품 포장 안내</b>
■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}
※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.

✍🏽 불량 제품은 박스 윗면에만 <b>[불량]</b>이라고 기재해 주세요.

🚚 <b>회수 안내</b>
· 택배사 : CJ대한통운
· 영업일 기준 2~3일 내 방문
방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드립니다.

💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.
⚠️ 박스 포장이 아닐 경우 수거가 거부됩니다.`)
    )}
  </div>
  <div class="grid2">
    ${subcard("회수지 확인 필요 시","공통_반품_회수지확인",
`🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?`,
"워크플로우로 인입된 건은 연결 전 정보가 수집되어 별도 확인 불필요 → 사전 수집 안 된 건에만 이 멘트 사용")}
    ${subcard("네이버 스마트스토어 직접 반품 신청 시","포장회수_네이버직접",
`네이버를 통해 반품 기사님을 신청해 주신 점 확인되었습니다. :)
미개봉 제품은 전체 다시 택배 박스에 포장해 주시고, 기사님 방문 시 전달해 주시면 수거가 진행될 예정입니다.`)}
  </div>

  ${secTitle("","4. 결제수단별 환불 안내","전체·부분 공통","sec4")}
  <div class="grid2">
    ${col("blue","🔹 카드결제",
      subcard("i. 카드결제 취소","환불안내_카드취소",
`환불은 아래 절차를 거쳐 진행되며, 영업일 기준 약 6~8일 정도 소요됩니다.

📦 <b>제품 수거 → 검수 → 반품 완료 (환불 승인)</b>

결제수단에 따라 실제 카드 승인 취소(환불 완료)까지는 반품 완료 시점으로부터 영업일 기준 3~6일 추가 소요될 수 있습니다.`)
    )}
    ${col("blue","🔹 계좌 환불",
      subcard("i. 계좌 환불 (무통장 · 가상계좌)","환불안내_계좌환불",
`환불은 아래 절차를 거쳐 진행되며, 영업일 기준 약 6~8일 정도 소요됩니다.

📦 <b>제품 수거 → 검수 → 반품 완료 (환불 승인)</b>

다만 (무통장 입금 / 가상계좌 결제)로 결제해 주신 점 확인되어, 환불을 위해 아래 계좌 정보 전달 부탁드립니다.

🏦 <b>은행 / 계좌번호 / 예금주</b>`)
      + subcard("ii. 이후 계좌 정보 확인","환불안내_계좌확인",
`소중한 정보 확인 감사합니다.
해당 계좌로 환불 계좌 등록이 완료되었습니다.

💸 <b>입금 안내</b>
실제 반품 완료 처리 후 영업일 기준 1~2일 내 입금 예정

※ 은행 점검 시간 또는 공휴일에 따라 입금이 지연될 수 있습니다.`)
    )}
  </div>
`;


const REF_EXCHANGE = `

  <h1>🔁 단순변심 교환</h1>
    <div class="sub">고객 변심에 의한 교환 · 유형별 응대 (자사몰/외부몰)</div>

  ${secTitle("💡","기준 및 조건",null,"secGuideX")}
  ${caution(`※ 미개봉 또는 개봉은 했으나 미사용한 경우에만 교환 가능 (예: 뜯어만 보고 사용 안 함)`)}
  ${cmpTable(
  [{cls:"blue",label:"🔹 전체 교환"},{cls:"pink",label:"🔹 부분 교환"}],
  [
   {label:"대상", values:["구매 상품 전체 교환 희망<br>(2개 이상 구매 후 전체 교환 포함)","2개 이상 구매 후 일부만 개봉 → 개봉 제품만 교환"]},
   {label:"교환 배송비", values:["왕복 6,000원","왕복 배송비 + 사용 제품 금액 차감"]},
   {label:"증정품 회수", values:["회수 O","회수 X"]}
  ]
)}
  <div class="grp-h">🧭 상담 플로우</div>
  <div class="flow-diagram"><div class="fd-box">1. 교환 방식 안내 (전체 / 부분)</div><div class="fd-arrow">▶</div><div class="fd-box">2. 교환 배송비 안내</div><div class="fd-arrow">▶</div><div class="fd-box">③ 포장 및 회수 안내</div><div class="fd-arrow">▶</div><div class="fd-box">4. 검수 및 재출고 안내</div></div>
  ${notice(["미개봉 또는 개봉했으나 미사용한 경우에만 교환 가능","교환 제품 금액이 더 높은 경우 <b>차액 결제</b> 필요","교환은 회수 → 입고 → 검수 → 재출고 방식으로 <b>영업일 기준 6~8일</b> 소요"])}
  ${secTitle("","1. 교환 방식 안내","전체·부분","sec1")}
  <div class="grid2">
${col("blue","🔹 전체 교환",
subcard("반품 후 재주문 권유","교환_전체_안내",
`교환은 기존 제품 회수 후 저희 입고 및 검수 완료 시 희망 제품으로 재출고되는 방식으로 진행됩니다.
입고 및 검수에는 영업일 기준 6~8일 정도 소요되며, 교환 제품 금액이 더 높은 경우에는 차액 결제가 필요합니다.

검수 및 재출고까지 시간이 소요되는 만큼, 기존 주문은 반품으로 접수하시고 원하시는 제품을 새로 주문하시는 방법을 권장드립니다.

어떻게 도와드릴까요? 🙂`)
)}
${col("pink","🔹 부분 교환",
subcard("교환 안내","교환_부분_안내",
`교환은 기존 제품 회수 후 저희 입고 및 검수가 완료되면, 요청하신 제품으로 재출고되는 방식으로 진행됩니다.

제품 입고부터 검수 완료까지는 영업일 기준 6~8일 정도 소요되며, 교환을 원하시는 제품의 가격이 더 높은 경우 차액 결제가 필요합니다.

이 점 양해 부탁드립니다.`)
)}
</div>
  ${caution(`▶ (전체 교환) 고객이 반품 희망 시 → '단순변심 반품' 페이지로 이동하여 안내
▶ 교환 희망 시 → ②부터 진행`)}
  ${secTitle("","2. 교환 배송비 안내","전체·부분","sec2")}
  <div class="grid2">
${col("blue","🔹 전체 교환",
subcard("교환 왕복 배송비","교환_전체_배송비",
`교환 시 왕복 배송비 6,000원이 발생하며, 입금 확인 후 교환 접수를 도와드립니다.

✅ 교환 왕복 배송비 : 6,000원
🏦 기업은행 075-09598004-017 (예금주: 올릿리테일)

입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드리겠습니다. 😊`)
)}
${col("pink","🔹 부분 교환",
subcard("i. 공식몰 · 네이버페이 / 스마트스토어","교환_부분_배송비_네이버",
`부분 교환 시 사용하실 제품은 회수하지 않으며, 해당 제품 금액은 최종 결제 금액에서 차감됩니다.

네이버페이 결제 건은 시스템상 부분 결제 처리가 어려워, 사용하실 제품 금액과 교환 왕복 배송비를 함께 입금해 주셔야 합니다.

💳 입금 금액
• 교환 왕복 배송비 : 3,000원
• (제품명) : (가격)
🏦 기업은행 075-09598004-017 (예금주: 올릿리테일)

입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드리겠습니다. 😊`) + subcard("ii. 공식몰 결제 (신용카드 · 무통장 · 가상계좌)","교환_부분_배송비_카드",
`부분 교환 시 사용하실 제품은 회수하지 않으며, 해당 제품 금액은 최종 결제 금액에서 차감됩니다.

교환을 원하시는 제품에 대해서는 왕복 배송비 6,000원이 발생하며, 입금 확인 후 교환 접수를 도와드립니다.

✅ 교환 왕복 배송비 : 6,000원
🏦 기업은행 075-09598004-017 (예금주: 올릿리테일)

입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드리겠습니다. 😊`)
)}
</div>
  ${guide(`→ 입금자명·입금금액 확인 후 IBK 기업은행 계좌 조회
🔗 IBK기업은행 : https://www.ibk.co.kr/`)}
  ${secTitle("","3. 포장 및 회수 안내","전체·부분","sec3")}
  <div class="grid2">
${col("blue","🔹 전체 교환",
subcard("포장 · 회수 안내","교환_전체_포장회수",
`교환 접수 도와드리겠습니다.

📦 <b>제품 포장 안내</b>
■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}
※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.

🚚 <b>회수 안내</b>
· 택배사 : CJ대한통운
· 영업일 기준 2~3일 내 방문
방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드립니다.

💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.
⚠️ 박스 포장이 아닐 경우 수거 거부됩니다.`) + caution(`🎁 증정품 회수 O`)
)}
${col("pink","🔹 부분 교환",
subcard("포장 · 회수 안내","교환_부분_포장회수",
`부분 교환 접수 도와드리겠습니다.

📦 <b>제품 포장 안내</b>
■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}
※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.
※ 사은품·증정품 및 그 외 구매한 부속품과 제품은 보내지 않으셔도 됩니다.

🚚 <b>회수 안내</b>
· 택배사 : CJ대한통운
· 영업일 기준 2~3일 내 방문
방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드립니다.

💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.
⚠️ 박스 포장이 아닐 경우 수거 거부됩니다.`) + caution(`🎁 증정품 회수 X`)
)}
</div>
  ${subcard("회수지 확인 필요 시","공통_교환_회수지확인",
`🙋‍♀️ 마지막으로, 제품 회수와 배송은 기존 주소지로 접수해 드리면 될까요?`,
`워크플로우로 인입된 건은 연결 전 정보가 수집되어 별도 확인 불필요 → 사전 수집 안 된 건에만 이 멘트 사용`)}
  <div class="warn-note">⚠️ 고객 동의 / 교환 배송비 입금 완료 후 진행</div>
  ${secTitle("","4. 검수 및 재출고 안내","전체·부분 공통","sec4")}
  ${macro("검수 및 재출고 안내","교환_검수재출고",
`📦 교환 진행 일정 안내드리겠습니다.

· 검수 및 재출고 : 제품 입고 후 영업일 기준 6~8일 소요
· 배송 : 재출고일로부터 영업일 기준 2~3일 소요
· 택배사 : CJ대한통운

※ 주말 및 공휴일에는 검수·출고가 진행되지 않습니다.`)}
  ${guide(`▶ 상품 수거·검수 후 이상 없을 시 <a href="https://docs.google.com/spreadsheets/d/1Bj5stx8hXMoPL8L91EYu6e5TA7pqEAjges4Cejs1wjo/edit?gid=388846546#gid=388846546" target="_blank">SCM-CX/CS팀 수기 시트</a>에 재출고 요청`)}
`;




/* === 단순변심 통합 시안 (2026-08-13) — 슬룸 한정 병합 템플릿, 기존 REF_SIMPLE/REF_EXCHANGE 원문 재배치 === */
const COMMON_IB = `
  <h1>📥 인바운드(IB) 공통</h1>
  <div class="sub">고객이 먼저 문의한 경우 · 상황 순서대로</div>
  <div class="hint">💡 <b>순서</b> : 첫인사 → 본인 확인 → 대기/보류 안내 → 상담 종료. 채널톡·유선 공통으로 사용합니다.</div>
  ${macro("첫인사","IB_첫인사",
`안녕하세요, 고객님. 슬룸입니다. :)
무엇을 도와드릴까요?`)}
  ${macro("본인 확인","IB_본인확인",
`확인을 위해 주문하신 성함과 연락처를 남겨 주시겠어요?`)}
  ${macro("대기/보류 안내","IB_대기안내",
`확인에 잠시 시간이 필요합니다. 확인 후 바로 안내드릴 테니 조금만 기다려 주세요. :)`)}
  ${macro("상담 종료","IB_종료",
`문의 주셔서 감사합니다. 더 궁금하신 점이 있으시면 언제든 편히 남겨 주세요. 좋은 하루 보내세요. :)`)}
`;
const COMMON_OB = `
  <h1>📤 아웃바운드(OB) 공통</h1>
  <div class="sub">우리가 먼저 연락하는 경우 · 상황 순서대로</div>
  <div class="hint">💡 <b>순서</b> : 발신 첫인사 → (부재 시) 부재 안내 문자 → 해피콜/재통화 약속.</div>
  ${macro("발신 첫인사","OB_첫인사",
`안녕하세요, 고객님. 슬룸입니다. 문의 주신 건 관련해 안내드리려 연락드렸습니다.`)}
  ${macro("부재 시 안내 문자","OB_부재문자",
`안녕하세요, 슬룸입니다. 문의 주신 건으로 연락드렸으나 부재중이셨습니다.
편하신 시간을 남겨 주시면 다시 연락드리겠습니다. :)`)}
  ${macro("해피콜","OB_해피콜",
`안녕하세요, 슬룸입니다. 이용에 불편하신 점은 없으셨는지 확인차 연락드렸습니다. :)`)}
`;

/* 유선 샘플 */
const CALL_MAIN = `
  <h1>📞 유선 응대</h1>
  <div class="sub">전화 응대 표준 스크립트 (매크로 등록 대상 아님)</div>
  ${note("유선 첫인사",
`네, 고객님. 슬룸 고객센터입니다. 무엇을 도와드릴까요?`)}
  ${note("본인 확인",
`확인을 위해 주문자 성함과 연락처 뒷자리를 말씀해 주시겠어요?`)}
  ${note("보류 안내",
`확인에 잠시 시간이 필요합니다. 잠시만 기다려 주시겠어요?`)}
  ${note("종료 인사",
`문의 주셔서 감사합니다. 좋은 하루 보내세요, 고객님. :)`)}
`;

/* 게시판 샘플 */
const BOARD_MAIN = `
  <h1>📝 게시판</h1>
  <div class="sub">공지 · FAQ · 이벤트 안내 (매크로 등록 대상 아님)</div>
  ${note("배송 지연 공지",
`[배송 안내]
안녕하세요, 올릿리테일입니다.
주문량 증가로 일부 상품의 출고가 지연되고 있습니다.
빠르게 발송해 드리도록 최선을 다하겠습니다. 양해 부탁드립니다.`)}
  ${note("반품/교환 안내 FAQ",
`[반품·교환 안내]
· 단순 변심 : 수령일로부터 7일 이내, 미사용 시 신청 가능
· 제품 불량 : 수령일로부터 30일 이내 신청 가능
· 신청 방법 : 공식몰 채팅으로 주문번호와 함께 남겨 주세요.`)}
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
  ${macro("끝인사 (1:1·FAQ)","게시판_끝인사",
`앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`,
`일반 문의 답변 후 사용 · 클레임에는 사용 X`)}
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
  ${macro("","게시판_불량AS",
`안녕하세요 고객님,
프리미엄 헬스테크 브랜드, 슬룸입니다. 💜

먼저 제품 구매 후 만족스러운 경험을 드리지 못해 대단히 죄송합니다.

슬룸의 AS 접수, 불량 교환·반품은 모두 채널톡 채팅 상담을 통해 진행되고 있으며,
아래 링크 접속 후 순서대로 진행 부탁드립니다.

■ 불량 접수하기 : https://sloom.channel.io/workflows/789993
☞ 불량 증상 선택 → 제품 선택 → 상세 증상 선택 → 구매하신 쇼핑몰 선택 → 원하시는 처리 방안 선택 후 간편 접수

■ AS 접수 전 유의사항도 꼭 확인 부탁드립니다.
1. AS는 상품 수령 후 6개월 이내는 무상, 6개월부터 최대 1년까지는 유상으로 진행되며, 1년 이후에는 보증 기간 만료로 접수할 수 없습니다.
2. 채팅 접수가 어려우시다면 아래 링크에서 간편 접수 방법을 확인해 주세요.
☞ 채팅 상담 방법 확인하기 : https://buly.kr/8ph9bNJ
3. 제품 회수 전에는 직접 확인이 어려운 온라인 판매 특성상, 사용 미숙으로 인한 작동 어려움이 있을 수 있습니다. 정상품은 다시 반송되어 번거로움이 발생할 수 있으니, 정확한 안내를 위해 불량 증상 영상이나 사진을 꼭 함께 전달 부탁드립니다.

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`,
`불량 접수·AS 문의 게시판 응대 시`)}
  <div class="grp-h" id="b_type_2">[슬룸] 네이버페이 주문형 환불금 송금 입금 안내</div>
  ${macro("","게시판_네이버환불",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다. 💜

네이버페이 결제는 부분 취소가 어려워, 반품 배송비 6,000원 입금 후 반품이 가능합니다.

반품 배송비 : 6,000원
▶ 기업은행 075-09598004-017 (예금주 : 올릿리테일)

위 계좌로 송금해 주신 다음 '입금자명'과 '입금 날짜'를 새로운 네이버페이 1:1 문의로 재작성해 주시면, 확인 후 회수 절차 안내 및 도와드리겠습니다. 🙂

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`,
`네이버페이 반품 배송비 입금 안내 시`)}
  <div class="grp-h" id="b_type_3">[슬룸] 100% 환불 이벤트 안내</div>
  ${macro("","게시판_100환불",
`안녕하세요 고객님,
프리미엄 헬스테크 브랜드, 슬룸입니다. 💜

마사지기와 같은 전자제품은 개봉하여 사용·작동하신 경우, 소비자의 제품 사용으로 인한 가치 상실로 보기 때문에 변심 반품/교환이 불가능합니다.

단, 공식몰에서 주문하신 고객님에 한하여 <100% 환불 이벤트> 참여가 가능합니다.

<100% 환불 이벤트>는 제품을 꾸준히 사용해 보신 후에도 만족하지 못하신 경우, 수령일 기준 30일 경과~40일 이내 접수 후 환불을 도와드리는 서비스입니다. (* 왕복 배송비 6,000원 차감)

따라서 번거로우시겠지만, 이벤트 기간인 [날짜 계산하여 기재] 내에 다시 접수가 필요합니다. 꾸준히 사용해 보시고 불만족 시 이벤트 기간 내 재접수해 주시기 바랍니다.

▶ 100% 환불 이벤트 신청 가능 여부 확인 및 신청하기 : https://sloom-refund-v2.onrender.com/

※ 기간 및 대상자에 해당될 경우 직통 링크로 접수 가능합니다.
※ <100% 환불 이벤트>는 네이버페이 주문을 포함한 공식몰 주문에 한하며, 1회 1개 옵션에 적용됩니다.
※ 이전 참여 이력이 있으면 참여가 불가합니다.

▶ 100% 환불 이벤트 상세 안내 : https://sleeplab.co.kr/notice/?page=1#13709226_notice

그 외 자세한 사항은 반드시 이벤트 상세 안내 공지를 참고해 주세요.
감사합니다.`,
`개봉·사용 후 변심 → 100% 환불 이벤트 안내 시`)}
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
  <div class="grid2">${macro("중국 알리와 같은 상품 여부 (허리편한케어)","외부몰_알리",
`안녕하세요 고객님,
프리미엄 헬스테크 브랜드, 슬룸입니다. 💜

허리편한케어 제품은 실제 생산은 중국에서 이루어지며 슬룸에서 직접 기획한 제품으로,
중국 내 슬룸의 기준에 따라 선정된 OEM 전문 업체로 제조사와 협력하여 생산하고 있습니다.

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}${macro("고속충전기 사용 가능 여부 (공통)","외부몰_고속충전",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

먼저 제품 이용에 불편을 드린 점 진심으로 사과드립니다.
문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.

슬룸의 모든 제품 (유/무선 모두)의 경우 정격 전압이 5V 2A 및 1A로, 고속 충전기로 연결 시 기기가 고장날 수 있습니다.

※ 고속 충전기 사용으로 인한 고장의 경우 무상 AS 기준에 해당하지 않습니다.

제품의 안전한 사용을 위해 반드시 동봉된 전용 케이블과 정격 전압에 맞는 어댑터를 이용 부탁 드리며,
슬룸 전용 어댑터를 함께 구매하여 사용하는 것을 권장 드립니다. (5V 1A의 경우 시중에서 구매)

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}</div>
  <div class="grid2">${macro("어댑터 동봉 문의 (어댑터 미동봉 제품)","외부몰_어댑터",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

어댑터는 별도로 동봉되지 않으며, 케이블만 동봉되고 있습니다.

다만 정격 전압에 맞는 슬룸 전용 어댑터를 현재 별도 판매 중이며, 필요하시다면 함께 또는 별도 구매 부탁 드립니다.

<i style="color:#64748d">✏️ (상황에 맞게 수정) 슬룸 전용 어댑터 : 해당 외부몰 판매 링크 첨부 · 판매하지 않을 경우에만 자사몰 링크(https://sleeplab.co.kr/shop/?idx=330) 첨부</i>

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}${macro("발편한케어V1(데일리) 사이즈","외부몰_발편사이즈",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

발편한케어는 M / L 두 가지 사이즈로 구성되어 있으며, 아래와 같은 치수 기준으로 선택하실 수 있습니다.

- M 사이즈: 220–270mm
- L 사이즈: 250–295mm
※ 단, 남성 260-270mm인 경우에는 발등 및 발볼을 고려하여 M보다는 L사이즈를 권장 드립니다.

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}</div>
  <div class="grp-h" id="b_ext_2">2. 제품별 사용법</div>
  <div class="grp-h" id="b_ext_2a">🧍 등·허리 제품</div>
  <div class="grid2">${macro("허리편한케어V1","외부몰_사용법_18",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.

[CHECK 1] 유선 전용 상품이 아닙니다.
일반 가정용 어댑터 (정격 전압 5V 2A) 또는 슬룸 전용 어댑터와 함께 동봉된 케이블로 충전해 주세요.
충전이 완료되면 케이블 제거 후 사용해 주세요.
※ 완충 소요 시간 : 약 2시간 30분

[CHECK 2] 리모컨 배터리 아이콘 점등 여부를 통해 제품 충전 상태만 확인할 수 있습니다. 배터리 잔량은 칸 수로 표시되지 않습니다.
· 충전 중: 리모컨 LED 불빛 점멸
· 충전 완료: 배터리 아이콘 점멸 멈춤

[CHECK 3] 제품이 완전히 충전되면 평평한 곳에 놓고 사용해 주세요.

[CHECK 4] 제품의 전원 버튼을 짧게 누르면 본체에 불빛이 들어오며 준비 상태가 됩니다.

[CHECK 5] EMS 모드는 피부, 맨살 위에 직접 닿아야 자극 효과를 제대로 느낄 수 있습니다.
맨살 사용이 어려운 경우, 얇은 운동복 등을 착용하신 뒤 제품을 최대한 타이트하게 밀착시켜 사용하시길 권장 드립니다.

[TIP!] 슬룸 ★마그네슘 시너지 크림★을 바른 후 제품을 사용하시면, EMS 저주파가 더욱 효과적 전달됩니다.

☞ 허리편한케어V1 전체 사용법 확인하기: https://sleeplab.co.kr/73

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}${macro("허리편한케어V2 기본","외부몰_사용법_19",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.

[CHECK 1] 유선 전용 제품이 아닙니다.
동봉된 전용 어댑터와 케이블로 충전해 주세요. 충전 완료 후 어댑터를 제거하고 사용해 주세요.
※ 반드시 전원을 끈 상태에서 충전해 주세요.
※ 완충 시간: 약 3시간

[CHECK 2] 리모컨 배터리 아이콘으로 충전 상태를 확인할 수 있습니다.
 · 충전 중: 화이트 (깜빡임)
 · 충전 완료: 화이트 (점등)

※ 배터리 잔량 표시
 · 100%: 화이트 (점등)
 · 20% 이하: 아이콘 깜빡임 + 비프음 3회

[CHECK 3] 완충 후, 평평한 곳에 슬룸 로고가 아래로 향하도록 제품을 놓고 사용해 주세요.

[CHECK 4] 전원 버튼을 길게 누르면 제품이 켜지고, 수동 기능을 사용할 수 있습니다.
· 온열 / 진동 / EMS 강도 조절 및 높이조절(↓↑ )버튼으로 리프트 조절이 가능합니다.
 - 온열: 3단계 (38℃ → 40℃ → 42℃)
 - 진동: 3단계
 - EMS: 12단계 (2단계마다 1칸씩, 총 6칸 점등)
※ 각 기능은 동시에 사용 가능하며, 리모컨 디스플레이에서 설정 상태를 확인할 수 있습니다.

[CHECK 5] 마사지 모드를 시작하려면 모드 버튼을 짧게 눌러 주세요.
 · M1(순환) → M2(스트레칭) → M3(맞춤) 순으로 변경됩니다.
 · 각 모드 진입 시 진동 / 온열 / EMS 모두 1단계 적용됩니다.
※ 마사지 모드 실행 중에는 리프트 높이 조절이 불가합니다.

※ 제품의 기본 작동 시간은 10분입니다.

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)`)}</div>
  <div class="grid2">${macro("골반마사지기","외부몰_사용법_골반",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

먼저 제품 이용에 불편을 드린 점 진심으로 사과드립니다.
문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.

[CHECK 1] 무선 제품 (충전형)
 · 일반 어댑터(정격 전압 5V 2A)와 동봉된 케이블로 충전
 · 완충 후 케이블 분리 후 사용 (약 4시간 30분 소요)
 · 완충 시, 약 1시간(60분) 사용 가능
※ 고속 충전기 사용 금지 (고장 위험)

[CHECK 2] 배터리 확인 방법
· 배터리 부족 시 (10% 미만) : 전원버튼 위 LED 등이 빨간색으로 깜빡임
· 배터리 충전 시 : 전원버튼 위 LED 등이 초록색으로 깜빡임
· 배터리 완충 시 : 전원버튼 위 LED 등이 초록색으로 유지됨

[CHECK 3] 착용 방법
· 슬룸 로고가 정방향으로 보이도록 제품을 놓은 뒤, 로고가 있는 쪽에 다리를 두고 앉아주세요.
· 날개 에어백이 접히지 않도록 골반을 바로 대고 앉아주세요.
* 누워서도 사용 가능합니다. 허리 부분에 깔고 누운 후 마사지를 진행해주세요.

[CHECK 4] 리모컨 조작 방법
1. 전원 ON/OFF
· 전원 켜기 : 2초간 누르면 부저음이 울리며 전원이 ON 됩니다 (자동으로 1번 모드(강도 1단계, 온열 1단계, 15분)로 세팅)
· 전원 끄기 : 사용 완료 후 2초간 누르면 부저음이 울리며 전원이 OFF 됩니다. (LED도 OFF)
2. 모드 버튼 (총 3가지 · 짧게 누르면 변경 · LED 색으로 구분)
· 조이기 모드(초록색) : 대둔근·중둔근을 조여 느슨하고 벌어진 골반을 케겔 운동하듯 압박
· 비틀기 모드(파란색) : 골반을 안으로 조이면서 위아래로 비틀어 척추 하부와 고관절 사이를 이완
· 펴주기 모드(빨간색) : 수축된 장요근·골반 전면부를 위로 펴주며 허리부터 골반까지 이완
· 에어백 OFF (LED도 OFF)
3. 강도 버튼 (총 4단계 · LED 색으로 구분)
· 약(초록) / 중(파랑) / 강(주황) / 최강(빨강)
· 에어백 OFF 시 강도도 자동 OFF
4. 온열 버튼 (총 3단계 · LED 색으로 구분)
· 1단계 40°C(초록) 은은한 데일리 힐링 / 2단계 45°C(파랑) 뜨끈한 찜질 / 3단계 50°C(빨강) 강한 열감
· 온열 OFF 시 자동 OFF
5. 타이머 버튼 (2가지 · LED 색으로 구분)
· 15분(초록) / 20분(파랑)

⚠️ 골반을 강하게 조이는 제품으로 임산부는 사용을 권장하지 않습니다. (자연분만 시 2주 후, 제왕절개 시 4~6주 후 권장)
⚠️ 1일 2~3회 이상 사용은 권장하지 않습니다.
⚠️ 제품 위에 방석을 깔고 사용하면 마사지 효과가 떨어질 수 있습니다.

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}${macro("허리베개프로","외부몰_사용법_허리베개프로",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

먼저 제품 이용에 불편을 드린 점 진심으로 사과드립니다.
문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.

[CHECK 1] 허리베개 프로는 '유선 제품'입니다.
동봉된 USB케이블을 정격 전압 5V 2A 어댑터에 꽂고 제품 플러그와 연결된 상태로 사용해 주세요.
플러그 부분이 흔들리지 않도록 손으로 고정 후, USB 케이블을 끝까지 체결해 주시기 바랍니다.

[CHECK 2] 전원을 켠 후, 양쪽 버튼을 3~5초 동안 눌러주세요.
온열 버튼과 진동 버튼을 동시에 누르지 말고, 하나씩 순차적으로 눌러 작동 여부를 점검해 주세요.

[CHECK 3] 1회 기본 작동 시간 : 온열 30분 / 마사지 30분

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}</div>
  <div class="v2-nest">
  <div class="grp-h" id="b_ext_3">✨ [허편케V2] 사용법 오인</div>
  <div class="grid2">${macro("비프음","외부몰_V2_비프",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

사용 중에 비프음이 울리면 충전이 필요한 상태로 불량이 아닙니다.
허리편한케어 V2 충전 완료 시 리모컨 배터리 아이콘이 화이트로 점등되며, 충전 중에는 화이트로 깜빡입니다.

※ 배터리가 완충되었을 때나 부족할 때나 항상 모든 칸이 다 켜져 있는 상태로 표시됩니다.

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}${macro("EMS 단계 표시 안 보임","외부몰_V2_ems",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

EMS 단계는 모두 리모컨 디스플레이에서 표시되지 않습니다. ​

· 총 6칸 표시
· 홀수 단계: 표시등 점등 없음
· 짝수 단계: 표시등 1칸씩 점등
※ 2, 4, 6, 8, 10, 12 단계에서만 디스플레이에 표기됩니다.

따라서 표시등이 보이지 않더라도,
버튼을 누르실 때마다 ‘삑’ 하는 비프음으로 단계 조절이 정상적으로 이루어지고 있는 점 참고 부탁드립니다. 😊

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}</div>
  <div class="grid2">${macro("높이조절 (마사지 모드)","외부몰_V2_높이",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

✅ 현재 제품 작동 상태가 마사지 모드(M1, M2, M3)인지 확인해 주세요.

허리편한케어 V2는 마사지 모드(M1, M2, M3) 사용 시
수동 높이 조절이 불가능하며,
이로 인해 리모컨 디스플레이에 높이 조절 아이콘이 표시되지 않는 것이 정상 작동 상태입니다.

※ 높이 조절 기능을 수동으로 사용하고 싶으시다면, 마사지 모드가 아닌 수동 모드 상태에서 사용해 주세요.
※ 마사지 모드에서는 높이가 프로그램 설정에 따라 작동되며, 수동으로 조절이 불가합니다.

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}${macro("리모컨 배터리 잔량","외부몰_V2_배터리",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

허리편한케어 V2는 배터리 잔량이 따로 표시되지 않습니다.

※ 배터리가 완충되었을 때나 부족할 때나, 항상 모든 칸이 다 켜져 있는 상태로 표시됩니다.

[충전 상태 확인 방법]
리모컨 배터리 아이콘으로 충전 상태 확인 가능
충전 중 : 화이트 (깜빡임)
충전 완료 : 화이트 (점등)

[배터리 잔량 표시]
100%: 화이트 점등
20% 이하: 아이콘 깜빡임 + 비프음 3회

[완충 소요 시간]
약 3시간

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}</div>
  ${macro("에어백 최대 높이","외부몰_V2_높이max",
`안녕하세요 고객님,
프리미엄 헬스테크 브랜드, 슬룸입니다.

허리편한케어V2의 본체 제외 에어백 최대 높이는 6~7cm이며,
에어백 기능을 사용하지 않았을 때 제품 자체의 높이는 약 2cm입니다.
따라서 에어백을 작동하면 전체 높이는 약 8cm까지 올라갑니다.
※ 제품 특성상 ±0.5cm 정도의 오차는 있을 수 있습니다.

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}
  </div>
  <div class="grp-h" id="b_ext_2b">💆 목·어깨 제품</div>
  <div class="grid2">${macro("목마사지베개V2","외부몰_사용법_목베개V2",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

먼저 제품 이용에 불편을 드린 점 진심으로 사과드립니다.
문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.

[CHECK 1] 무선 제품 (충전형)
 · 일반 어댑터(정격 전압 5V 2A)와 동봉된 케이블로 충전
 · 완충 후 케이블 분리 후 사용 (약 3시간 30분 소요)
 · 완충 시 약 2시간 사용 가능
※ 고속 충전기 사용 금지 (고장 위험)

[CHECK 2] U 형태 부분(경추 지지부)을 아래로, 마름모 형태 부분(헤드부)을 위로 가게 놓은 뒤 목과 머리에 맞춰 편히 누워주세요.

[CHECK 3] 컨트롤러 조작 방법
1. 전원 ON/OFF
· 켜기 : 2초간 누르면 켜짐 (자동으로 에어백·진동 M1·온열 1단계, 15분 작동 세팅)
· 끄기 : 사용 중 길게 누르거나 사용 완료 후 2초간 누르면 OFF (LED등 없음)
2. 에어백 버튼 (총 3모드 · 색으로 구분)
· M1(초록) 기본 / M2(파랑) 휴식 / M3(빨강) 복합
3. 진동 버튼 (총 3모드 · 색으로 구분)
· M1(초록) 리듬 : 일정한 리듬으로 굳은 목 긴장 완화
· M2(파랑) 릴렉스 : 부드러운 저자극 진동으로 뻐근한 목 완화
· M3(빨강) 집중 : 일정한 강도로 뭉친 목을 시원하게 완화
4. 온열 버튼 (총 3단계 · 색으로 구분)
· 1단계 38°C(초록) / 2단계 42°C(파랑) / 3단계 46°C(빨강)

[CHECK 4] 자동 타이머가 설정되어 있어 15분 후 자동 종료됩니다.

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}${macro("목베개플러스","외부몰_사용법_15",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

먼저 제품 이용에 불편을 드린 점 진심으로 사과드립니다.
문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.


[CHECK 1] 목베개 플러스는 '유선 제품'입니다.
동봉된 USB케이블을 정격 전압 5V 2A 어댑터에 꽂고 제품 플러그와 연결된 상태로 사용해 주세요.
플러그 부분이 흔들리지 않도록 손으로 고정 후, USB 케이블을 끝까지 체결해 주시기 바랍니다.

[CHECK 2] C커브 형태의 원형 베개 모양 부분(경추부)을 아래로, 마름모 형태 부분(헤드부)을 위로 두고 목과 머리에 맞춰 편히 누워주세요.

[CHECK 3] 수동버튼 혹은 자동버튼을 5초 동안 길게 누르면 제품을 켜고 끌 수 있습니다.
① 수동버튼으로 켰을 경우
· '진동 모드' 부터 시작
· 수동버튼을 짧게 눌러 모드 변경 (파란색 진동 → 녹색 에어리프팅 → 빨간색 온열)
· 수동모드는 한 번에 한 가지 모드만 사용 가능
② 자동버튼으로 켰을 경우
· (진동+온열) → 에어백 순서로 3분마다 패턴 반복

[CHECK 4] 자동 타이머가 설정되어 있어, 30분 후 자동 종료됩니다.

☞ 목베개 플러스 전체 사용법 확인하기: https://sleeplab.co.kr/76

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}</div>
  <div class="grid2">${macro("목편한케어 플라잉","외부몰_사용법_16",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

먼저 제품 이용에 불편을 드린 점 진심으로 사과드립니다.
문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.

[CHECK 1] 유선 전용 상품이 아닙니다.
일반 가정용 어댑터 (정격 전압 5V 2A) 또는 슬룸 전용 어댑터와 함께 동봉된 케이블로 충전해 주세요.
충전이 완료되면 케이블 제거 후 사용해 주세요.
※ 완충 소요 시간 : 약 3시간

[CHECK 2] 사용 전, 제품이 완전히 충전되었는지 확인해 주세요.
· 충전 중: 빨간색 표시등 점멸
· 충전 완료: 빨간색 표시등 점멸이 멈춤 → 녹색 표시등으로 바뀜

[CHECK 3] 제품의 전원 버튼을 2초간 길게 누르면 녹색불이 들어오면서 전원이 켜집니다.

[CHECK 4] 자동 타이머가 설정되어 있어, 15분 후 자동 종료됩니다.

☞ 목편한케어 플라잉 전체 사용법 확인하기: https://sleeplab.co.kr/74

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}${macro("넥숄더힐링케어V1","외부몰_사용법_14",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

먼저 제품 이용에 불편을 드린 점 진심으로 사과드립니다.
문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.

[CHECK 1] 유선 전용 상품이 아닙니다.
일반 가정용 어댑터 (정격 전압 5V 2A) 또는 슬룸 전용 어댑터와 함께 동봉된 케이블로 충전해 주시고, 충전이 완료되면 케이블 제거 후 사용해 주세요.
· 완충 소요 시간 : 약 3시간 (충전 환경에 따라 다를 수 있습니다.)

[CHECK 2] 전원 버튼 위 LED 표시등을 통해 제품 충전 상태를 확인할 수 있습니다.
· 충전 중: 빨간색 표시등 켜짐 (점멸 없이 유지)
· 충전 완료: 하얀색 표시등 켜짐 (점멸 없이 유지)
· 배터리 약 15% 이하 : 빨간색 표시등 점멸

[CHECK 3] 제품 착용 시 스트랩을 본인 체형에 맞게 조절해 주시고, 제품의 헤드 부분이 어깨와 등에 완전히 밀착될 수 있도록 제품의 위치를 조정해 주세요.
스트랩을 몸에 딱 맞게 조일수록 강한 압을 느낄 수 있습니다.

[CHECK 4] 자동 타이머가 설정되어 있어, 10분 후 자동 종료됩니다.

☞ 넥숄더 힐링케어 전체 사용법 확인하기: https://sleeplab.co.kr/77

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}</div>
  <div class="grid2">${macro("넥숄더힐링케어V2","외부몰_사용법_넥힐V2",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

먼저 제품 이용에 불편을 드린 점 진심으로 사과드립니다.
문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.

[CHECK 1] 유선 전용 상품이 아닙니다.
일반 가정용 어댑터(정격 전압 5V 2A) 또는 슬룸 전용 어댑터와 동봉된 케이블로 충전해 주시고, 충전이 완료되면 케이블 제거 후 사용해 주세요.
· 완충 소요 시간 : 약 3시간 (충전 환경에 따라 다를 수 있습니다.)

[CHECK 2] 전원 버튼 위 LED 표시등으로 충전 상태를 확인할 수 있습니다.
· 충전 중 : 빨간색 표시등 켜짐 (점멸 없이 유지)
· 충전 완료 : 초록색 표시등 켜짐 (점멸 없이 유지)
· 배터리 약 15% 이하 : 빨간색 표시등 점멸

[CHECK 3] 제품 착용 시 스트랩을 본인 체형에 맞게 조절하시고, 헤드 부분이 어깨와 등에 완전히 밀착되도록 위치를 조정해 주세요.
스트랩을 몸에 딱 맞게 조일수록 강한 압을 느낄 수 있습니다.

[CHECK 4] 자동 타이머가 설정되어 있어 15분 후 자동 종료됩니다.

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}${macro("넥숄더프로","외부몰_사용법_12",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

먼저 제품 이용에 불편을 드린 점 진심으로 사과드립니다.
문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.


[CHECK 1] 유선 전용 상품이 아닙니다.
일반 가정용 어댑터 (정격 전압 5V 2A) 또는 슬룸 전용 어댑터와 함께 동봉된 케이블로 충전해 주세요.
충전이 완료되면 케이블 제거 후 사용해 주세요.
※ 완충 소요 시간 : 약 2시간~2시간 30분

[CHECK 2] 사용 전, 제품이 완전히 충전되었는지 확인해 주세요.
· 충전 중 : 빨간색 표시등이 깜빡거림
· 충전 완료 :  녹색 표시등

[CHECK 3] 마사지 변경은 총 네 가지 모드로 구성되어 있으며 전원 켜짐과 동시에 모드 1이 작동됩니다. 버튼을 짧게 누르면 전환할 수 있습니다.

[CHECK 4] 전원을 켜면 기본값으로 아래 세 가지 기능이 작동합니다.
· 마사지 : 모드1 (경락모드)
· 온열 : 45℃
· 속도 : 기본 스피드

☞ 넥숄더 프로 전체 사용법 : https://sleeplab.co.kr/80

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}</div>
  <div class="grid2">${macro("목편한케어","외부몰_사용법_17",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

먼저 제품 이용에 불편을 드린 점 진심으로 사과드립니다.
문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.

[CHECK 1] 유선 전용 상품이 아닙니다.
일반 가정용 어댑터 (정격 전압 5V 2A) 또는 슬룸 전용 어댑터와 함께 동봉된 케이블로 충전해 주세요.
충전이 완료되면 케이블 제거 후 사용해 주세요.
※ 완충 소요 시간 : 약 3시간

[CHECK 2] 사용 전, 제품이 완전히 충전되었는지 확인해 주세요.
· 충전 중: 흰색 표시등 점멸
· 충전 완료:  흰색 표시등 점멸 없이 유지

[CHECK 2] 온열과 마사지 기능은 동시에 작동하지 않습니다.
· 온열: 슬룸 로고가 있는 면 / 마사지: 슬룸 로고가 없는 면

[CHECK 3] 제품을 옆에서 봤을 때 역삼각형 형태가 되도록, 머리와 어깨 사이 C커브 공간에 놓고 사용해주세요.

[CHECK 4] 마사지 모드 사용 시 주의사항
슬룸 로고가 없는 면이 바닥과 닿을 경우, 마사지볼이 정상적으로 작동하지 않을 수 있습니다.
마사지볼 작동에 문제가 발생하면 제품 위치를 다시 한번 조정해 주세요.
마사지볼은 양방향으로 작동하며, 한 방향으로 회전한 후 잠시 멈춘 뒤 반대 방향으로 회전합니다.

[CHECK 5] 1회 작동 시간: 온열 10분 / 마사지: 15분

☞ 목편한 케어 전체 사용법 확인하기 : https://sleeplab.co.kr/79

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}${macro("목베개프로","외부몰_사용법_13",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

먼저 제품 이용에 불편을 드린 점 진심으로 사과드립니다.
문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.


[CHECK 1] 목베개 프로는 '유선 제품'입니다.
동봉된 USB케이블을 정격 전압 5V 2A 어댑터에 꽂고 제품 플러그와 연결된 상태로 사용해 주세요.
플러그 부분이 흔들리지 않도록 손으로 고정 후, USB 케이블을 끝까지 체결해 주시기 바랍니다.

[CHECK 2] 별도 전원 버튼이 없는 제품입니다.
온열 혹은 진동 버튼을 3초 이상 눌러 주시면 작동이 시작되며, 온열과 진동 버튼을 반복적으로 눌러 단계(강도)조절이 가능합니다.

[CHECK 3] 온열버튼 + 진동버튼을 동시에 누르면 온열 및 진동모드 함께 즐길 수 있습니다.

[CHECK 4] 자동 타이머가 설정되어 있어, 30분 후 자동 종료됩니다.

☞ 목베개 프로 전체 사용법 확인하기: https://sleeplab.co.kr/78

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}</div>
  <div class="grp-h" id="b_ext_2c">🦵🏻 발·종아리 제품</div>
  <div class="grid2">${macro("발편한케어V1(데일리)","외부몰_사용법_11",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

먼저 제품 이용에 불편을 드린 점 진심으로 사과드립니다.
문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.


[CHECK 1] 무선 제품 (충전형)
 · 일반 어댑터(정격 전압 5V 2A)와 동봉된 케이블로 충전
 · 완충 후 케이블 분리 후 사용 (약 40분 소요)
※ 고속 충전기 사용 금지 (고장 위험)

[CHECK 2] 충전 상태 확인 방법
 · 충전 중 : 빨간 LED
 · 충전 완료 : 완충: 초록 LED

[CHECK 3] 전원 켜는 법
 · EMS 컨트롤러(디바이스) 전원 버튼을 2초간 길게 눌러 전원 ON
※ EMS 컨트롤러: 전원 ON/OFF 모두 가능
※ 리모컨: 전원 ON 불가 / OFF 가능 (리모컨은 강도 조절 및 모드 변경 전용)

[CHECK 4] EMS 표시등 깜빡이며 꺼진다면
→ 컨트롤러 자석이 제대로 부착되었는지 확인해 주세요.

[CHECK 5] EMS 자극이 좌/우 다르게 느껴지신다면
→ 발의 근육량 차이로 생길 수 있는 정상 현상이에요 :)

⚠️ 모드 변경 시 강도가 자동으로 1단계로 바뀌는 것은 고장이 아니에요.
신체에 갑작스럽게 자극이 전달되지 않도록 설계된 정상 작동 방식입니다. 🙏

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}${macro("종아리편한케어","외부몰_사용법_종아리편한",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

먼저 제품 이용에 불편을 드린 점 진심으로 사과드립니다.
문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.

[CHECK 1] 무선 제품 (충전형)
 · 일반 어댑터(정격 전압 5V 2A)와 동봉된 케이블로 충전
 · 완충 후 케이블 분리 후 사용 (약 3시간 40분 소요)
※ 고속 충전기 사용 금지 (고장 위험)

[CHECK 2] 충전 상태 확인 방법
 · 충전 중 : 배터리 잔량 표시등 4개가 순서대로 켜지는 것 반복
 · 충전 완료 : 완충 시 4칸이 모두 점등된 상태에서 깜빡임
● 배터리 잔량 표시 : 사용 중 칸 수가 하나씩 줄어듦 (한 칸당 약 25%)

[CHECK 3] 배터리 완충
 · 완충 시간 : 약 3시간 40분
 · 완충 후 최대 사용 시간 : 약 3시간 30분

[CHECK 4] 착용 방법
1. 제품의 오른쪽/왼쪽 표시를 확인합니다.
2. 벨크로를 풀고 종아리를 제품 중앙에 올려줍니다. (* 괄사패드 사용 시 패드가 종아리 중앙에 오도록 배치)
3. 종아리를 제품에 밀착시킨 뒤 벨크로를 적절한 강도로 감싸주세요.
4. 전원 버튼을 길게 눌러 켜고 원하는 모드·강도·타이머를 설정해 주세요.
5. 설정된 시간이 지나면 자동으로 종료됩니다.
6. 괄사패드는 탈부착이 가능합니다.

[CHECK 5] 조작
 · 전원버튼 길게 누르면 켜지고 마사지 시작
 · 컨트롤 버튼으로 강도·모드·타이머 설정
 · 설정한 타이머 시간이 되면 자동 종료

[CHECK 6] 타이머 10/15/20/25/30분 설정 가능하며 마지막 설정 시간이 자동 저장됩니다.
⚠️ 오른쪽/왼쪽을 구분했으나 개인 취향에 따라 변경 사용 가능합니다.
처음엔 느슨하게 착용 후 점차 본인에게 맞는 강도로 조절해 주세요. 🙏

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}</div>
  ${macro("종아리마사지기","외부몰_사용법_종아리마사지",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

먼저 제품 이용에 불편을 드린 점 진심으로 사과드립니다.
문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.

[CHECK 1] 무선 제품 (충전형)
 · 일반 어댑터(정격 전압 5V 2A)와 동봉된 케이블로 충전
 · 완충 소요 시간 최대 약 1시간 20분
 · 완충 시 약 1시간 10분(70분) 사용 가능
※ 고속 충전기 사용 금지 (고장 위험)

[CHECK 2] 충전 상태 확인 방법
 · 충전 중 : 리모컨 표시등이 한 칸씩 채워지며 차례로 깜빡임
 · 충전 완료 : 숫자 99가 표시된 채 유지

[CHECK 3] 모드 / 타이머 / 강도(속도) / 온열 단계
 · 모드 : 1 안쪽 롤링 / 2 바깥쪽 롤링 / 3 교차 롤링
 · 타이머 : 15분 / 20분 / 30분
 · 강도(속도) : 1 / 2 / 3단계 (마사지볼 속도 차이)
 · 온열 : 1 / 2 / 3단계 / 꺼짐

[CHECK 4] 관리 및 보관
 · 커버 일체형 제품으로 별도 분리·세탁 불가
 · 지나치게 무거운 압력을 가하면 고장 위험이 있으므로 제품에 올라서지 마세요.

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}
  <div class="grp-h" id="b_ext_2d">🖐️ 손·눈·팔 제품</div>
  <div class="grid2">${macro("팔꿈치 마사지기","외부몰_사용법_팔꿈치",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

먼저 제품 이용에 불편을 드린 점 진심으로 사과드립니다.
문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.

[CHECK 1] 무선 제품 (충전형)
 · 일반 저속 어댑터(정격 전압 5V 2A)와 동봉된 케이블로 충전
 · 컨트롤러와 리모컨은 각각 무선 제품으로 충전·사용 시간이 상이합니다.
   * 컨트롤러 : 완충 약 150분 / 사용 약 90분
   * 리모컨 : 완충 약 90분 / 사용 약 11시간
※ 고속 충전기 사용 금지 (고장 위험)

[CHECK 2] 배터리 잔량 확인 방법
· 충전 중 : 빨간색 표시등 켜짐 (점멸 없이 유지)
· 충전 완료 : 초록색 표시등 켜짐 (점멸 없이 유지)
· 배터리 약 15% 이하 : 빨간색 표시등 점멸

[CHECK 3] 착용 방법
1. 팔꿈치에 마그네슘 크림을 충분히 발라주세요.
2. 밴드를 각 버클에 끼워 주세요.
3. 팔꿈치가 홈에 위치하도록 착용해 주세요. (※ 컨트롤러가 아래쪽을 향하도록 착용)

[CHECK 4] 조작 방법
1. 착용 후 본체 컨트롤러로 전원을 켜주세요.
* 전원 ON : 2초간 길게 누르면 켜짐(흰색불 점등) / OFF : 사용 중 2초간 길게 누르면 꺼짐
※ 컨트롤러는 일체형으로 분리되지 않으니 무리하게 잡아당기지 마세요.
2. 리모컨 전원을 켠 후 원하는 모드로 마사지해 주세요.
※ 피부가 건조하면 EMS 자극이 충분히 전달되지 않을 수 있으니 반드시 크림을 바른 후 사용해 주세요.
※ 동일 부위 장시간 사용 시 저온화상이 발생할 수 있으니 사용 시간을 준수해 주세요.
① 리모컨 전원 ON/OFF : 2초 이상 누르면 켜짐/꺼짐 (※ 리모컨만으로는 컨트롤러 전원을 켤 수 없으니 컨트롤러 전원을 먼저 켜주세요)
② EMS+TENS 모드 : 기본 M1, 짧게 눌러 M1 → M2 → M3 → M4 → M5 변경
③ EMS+TENS 강도 : -/+ 버튼으로 0~15단계 조절
④ 에어백 강도 : 기본 1단계(약), 짧게 눌러 1 → 2 → 3단계
⑤ 온열 : 기본 1단계(38도), 짧게 눌러 43도 → 45도 → 48도
⑥ 타이머 : 기본 15분, 누르면 15분 → 25분

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}${macro("손편한케어","외부몰_사용법_손편한",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

먼저 제품 이용에 불편을 드린 점 진심으로 사과드립니다.
문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.

[CHECK 1] 무선 제품 (충전형)
 · 일반 어댑터(정격 전압 5V 2A)와 동봉된 케이블로 충전
 · 완충 후 케이블 분리 후 사용 (약 3시간 30분 소요)
※ 고속 충전기 사용 금지 (고장 위험)

[CHECK 2] 충전 상태 확인 방법
 · 충전 중 : 4칸 단계별로 깜빡
 · 충전 완료 : 완충 시 4칸 점등
● 배터리 잔량 표시
 · 사용 중 칸 수가 하나씩 줄어듦 (한 칸당 약 25%)
 · 잔량 10% 이하 시 마지막 한 칸이 깜빡임 (※ 비프음 없음)

[CHECK 3] 배터리
 · 완충 시간 : 약 3시간 30분
 · 완충 후 최대 사용 시간 : 약 2시간 30분
 · 20분 자동 타이머 기준 약 7.5회 사용 가능 (설정 시간에 따라 상이)

[CHECK 4] 벨크로 위치에 손목을 맞춘 후 손을 제품 안에 넣어주세요.

[CHECK 5] 조작
 · 전원버튼 길게 누르면 켜지고 마사지 시작
 · 컨트롤 버튼으로 강도·모드·타이머·온열 설정
 · 설정한 타이머 시간이 되면 자동 종료

[CHECK 6] 타이머 10/15/20분 설정 가능하며 마지막 설정 시간이 자동 저장됩니다.
⚠️ 좌우 대칭 설계로 오른손·왼손 모두 사용 가능합니다.
한 손당 하루 30분 이상 사용은 권장하지 않습니다. 🙏

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}</div>
  ${macro("눈편한케어","외부몰_사용법_눈편한",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

먼저 제품 이용에 불편을 드린 점 진심으로 사과드립니다.
문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.

[CHECK 1] 눈편한케어는 유선 전용 상품이 아닙니다.
일반 가정용(정격 전압 5V 1A) 어댑터와 동봉된 케이블로 충전해 주세요. 충전 완료 후 케이블 제거 후 사용해 주세요.
※ 완충 소요 시간 : 약 1시간

[CHECK 2] 사용 전, 제품이 완전히 충전되었는지 확인해 주세요.
※ 충전 중 : 빨간색 LED 점등
※ 충전 완료 : 녹색 LED 점등

[CHECK 3] 전원 버튼을 2초간 누르면 부저음과 함께 전원이 켜집니다.
전원이 켜지면 녹색 표시등이 들어오며 기본 모드(온열 1단계, 종합 모드)로 작동이 시작됩니다.

[CHECK 4] 원하는 모드와 온열 단계로 조정한 후 사용해 주세요.
※ 모든 모드의 기본 작동 시간은 10분입니다. (모드 전환 시 시간이 재측정됩니다.)

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}
  <div class="grp-h" id="b_ext_2e">🧖 전신·바디케어 제품</div>
  <div class="grid2">${macro("바디풀고컷","외부몰_사용법_바디풀고컷",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

먼저 제품 이용에 불편을 드린 점 진심으로 사과드립니다.
문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.

[CHECK 1] 무선 제품 (충전형)
· 일반 어댑터(정격 전압 5V 1A)와 동봉된 케이블로 충전
· 완충 후 케이블 분리 후 사용
· 완충 시간 : 약 1시간 30분 (근적외선 ON 약 40분 / OFF 약 300분)
⚠️ 고속 충전기 사용 금지 (제품 고장 위험)
💡 근적외선 사용 시 전력 소모로 배터리 표시가 일시적으로 변할 수 있으며 제품 이상은 아닙니다.

[CHECK 2] 배터리 잔량 확인 방법
· 충전 중 : 표시등이 1~4칸까지 순차 점등
· 충전 완료 : 4칸 모두 점등 유지 (점멸하지 않음)
· 배터리 부족 : 1칸 깜빡임

[CHECK 3] 착용 방법
① 사용 부위에 마그네슘 크림을 충분히 발라주세요.
② 양쪽 손잡이를 잡고 사용 부위에 맞게 사이즈를 조절해 착용해 주세요. (※ 디바이스 화면이 위쪽을 향하도록)

[CHECK 4] 사용 방법
① 전원 ON/OFF : 전원 버튼 1초간 길게 (정상 작동 시 부저음)
② 모드 : 켜면 M1 시작, M 버튼 짧게 눌러 M1 → M2 → M3
③ 강도 : 켜면 1단계 시작, + / - 버튼으로 1~15단계
④ 근적외선 : 켜면 자동 ON / ☀ 버튼 짧게 눌러 ON/OFF
⑤ 주의 : 팔·복부·허벅지·종아리 등 다양한 부위 사용 가능 / 마사지 젤을 바르지 않으면 자극이 거의 느껴지지 않음 / 피부를 과도하게 문지르지 마세요.

[CHECK 5] 관리 및 보관
· 물 세척 불가 / 오염 시 물티슈로 가볍게 닦기
· 제품 위에 무거운 물건 금지
· 장기간 미사용 시 1개월에 1~2회 충전
⚠️ 보관 금지 장소 : 직사광선·고온·고습·물기·연기와 불 근처

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}${macro("멀티 릴렉스 체어 (판매종료)","외부몰_사용법_멀티릴렉스",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

먼저 제품 이용에 불편을 드린 점 진심으로 사과드립니다.
문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.

[CHECK 1] 멀티 릴렉스 체어는 '유선 제품'입니다.
본품의 전원 연결 단자에 동봉된 표준 어댑터가 정확히 접촉된 상태에서 사용해 주세요.
※ 반드시 함께 보내드린 표준 어댑터를 사용해 주세요.
※ 전원 연결 단자는 앉은 방향 기준 오른쪽에 위치해 있습니다.

[CHECK 2] 제품을 소파나 의자 위에 바르게 세우고, 목과 등의 마사지 위치를 확인한 후 방석 위에 편하게 앉아주세요.

[CHECK 3] 전원 연결 부위에 어댑터를 접촉하고, 어댑터 플러그를 전원 공급장치에 꽂아주세요.

[CHECK 4] 리모컨 전원을 켜고 마사지를 시작합니다.

[CHECK 5] 안전한 사용을 위한 15분 자동 타이머로, 작동 15분 후 자동으로 전원이 꺼집니다.

☞ 멀티 릴렉스 체어 전체 사용법 : https://sleeplab.co.kr/93

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}</div>
  <div class="grp-h" id="b_ext_2f">🎁 카카오톡 선물하기</div>
  ${macro("물멍가습기 (판매종료)","외부몰_사용법_물멍",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

먼저 제품 이용에 불편을 드린 점 진심으로 사과드립니다.
문의주신 제품의 올바른 사용법을 아래와 같이 안내드립니다.

[CHECK 1] 충전형이 아닌, 유선 연결하여 사용하는 제품입니다.
※ 정격 전압이 5V 2A로, 고속 충전기로 연결 시 기기가 고장날 수 있습니다.
※ 반드시 가정용 어댑터와 동봉된 케이블을 이용해 주세요.

[CHECK 2] 수조 하단을 돌려 열고 물을 채운 다음, 본체에 수조를 끼우고 전원 버튼을 눌러 작동해 주세요.
※ 지연 시간(30~60초)이 있어 전원 버튼을 누르고 잠시 기다려 주세요.
※ 지연 후에도 작동하지 않으면 전원을 껐다가 다시 켜주세요.
※ 분사가 잘 되지 않을 경우 분무 부분을 면봉에 식초를 적셔 닦아주세요.

[CHECK 3] 올바른 작동과 세균 번식 방지를 위해 정수물이 아닌 수돗물을 사용하고, 적정량까지만 물을 채워주세요.

[CHECK 4] 장시간 사용하지 않거나 보관 시에는 수조와 본체를 분리해 잘 말린 후 보관해 주세요.

추가적으로 문의 사항이 있으실 경우 슬룸 고객센터를 통해 문의 부탁 드립니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/home
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}
  <div class="grp-h" id="b_ext_4">3. 반품·교환·AS</div>
  <div class="grid2">${macro("불량 반품·교환·AS 상담 요청","외부몰_불량AS",
`안녕하세요 고객님,
프리미엄 헬스테크 브랜드, 슬룸입니다. 💜

먼저 제품 구매 후 만족스러운 경험을 드리지 못해 대단히 죄송합니다.
슬룸의 AS 접수는 모두 채널톡 채팅 상담을 통해 진행되고 있으며, 아래 전달 드린 링크 접속 후 순서대로 진행 부탁 드립니다.
■ AS 접수하기 : https://sloom.channel.io/workflows/789993
☞ 불량 증상 선택 → 제품 선택 → 상세 증상 선택 → 구매하신 쇼핑몰 선택 → 원하시는 처리 방안 선택 후 간편 접수
■ 아래의 AS 접수 전 유의 사항도 꼭 확인 부탁드립니다.

1. AS는 상품 수령 후 6개월 이내는 무상, 6개월부터 최대 1년까지는 유상으로 진행되며, 1년 이후에는 보증 기간 만료로 인해 접수할 수 없습니다.
2. 채팅 접수에 어려움이 있으시다면, 아래 링크를 통해 간편 접수 방법을 확인해주세요.
☞ 채팅 상담 방법 확인하기 : https://buly.kr/8ph9bNJ
3. 제품 회수 전에는 직접 확인이 어려운 온라인 판매 특성 상, 사용 미숙으로 인한 작동의 어려움이 있을 수 있습니다. 특히, 정상품의 경우 다시 반송되기에 불필요하게 제품을 사용하지 못하는 번거로움이 발생할 수 있기에 정확한 안내를 위해 불량 증상 영상이나 사진을 꼭 함께 전달 부탁드립니다.


앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}${macro("교환/반품 사유 확인 필요 건 (불량엔 사용 X)","외부몰_교환반품",
`안녕하세요, 고객님.
프리미엄 헬스테크 브랜드, 슬룸입니다.

다만 제품의 반품 및 교환 접수는 반품 사유 확인 등 일정한 절차를 거쳐 진행되고 있습니다.
번거로우시겠지만, 채팅 상담을 통해 관련 내용을 접수해 주시면,
확인 후 최대한 신속하게 도와드릴 수 있도록 하겠습니다.

☞ 슬룸 채팅 상담 바로가기 https://sloom.channel.io/workflows/804269
※ 상담 가능 시간: 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)

앞으로도 고객님께 더 큰 만족을 드릴 수 있도록 최선을 다하겠습니다.
감사합니다.`)}</div>
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
  ${macro("첫인사","",
`(브랜드별 캐치프라이즈)

고객님 안녕하세요, 저는 (브랜드명) CX팀 (이름)입니다.
기다려주셔서 감사합니다. 🙏`,
`브랜드별 캐치프라이즈·브랜드명·본인 이름으로 반영 (0. 브랜드별 개요 표의 브랜드별 캐치프라이즈 반영)`)}
  <div class="grp-h grp-sub">그외 인사</div>
  <div class="grid2">${macro("정보 확인 감사 표현","",
`소중한 정보 확인 감사합니다.
확인해 주셔서 감사합니다.
자세하게 말씀해 주셔서 감사합니다.
상세한 내용 전달해 주셔서 감사합니다.
번거로우셨을 텐데 확인해 주셔서 감사합니다.`,
`고객 정보 확인 후 감사 인사 필수 · 상황에 맞는 문구 선택`)}${macro("추가 확인 안내","",
`확인 후 안내드리겠습니다.
확인하여 안내드리겠습니다.
조회 후 안내드리겠습니다.
확인되는 대로 안내드리겠습니다.
담당 부서 확인 후 안내드리겠습니다.
확인 후 신속하게 안내드리겠습니다.`,
`상황에 맞는 문구 선택`)}</div>
  <div class="grp-h grp-sub">끝인사</div>
  <div class="grid2">${macro("끝인사 · 기본","",
`감사합니다 고객님, (브랜드명)이었습니다.

이번 채팅 상담은 종료됩니다.
문의 사항이 추가로 있다면 언제든 문의 주세요, 감사합니다. 🙏`,
`상담 중인 브랜드명 반영`)}${macro("끝인사 · 중복 상담 종료","",
`(브랜드별 캐치프라이즈)
다른 상담 창구를 통해 답변 드린 것으로 확인되어 해당 상담은 종료 도와드리겠습니다. 🙏
감사합니다 :)
🔗 실제 상담이 필요한 채팅 상담 고객용 링크 추가`,
`이미 다른 창구(전화·게시판 등)에서 답변된 중복 문의 종료 시 · 브랜드별 캐치프라이즈 반영`)}</div>
  ${macro("1차 · 1시간 무응답 리마인드","공통_1차_1시간_무응답_리마인드",
`고객님, 상담 답변을 기다리고 있어 다시 안내드립니다.

문자로 답장을 보내주시면 상담 확인이 어렵습니다.

아래 링크를 눌러 접속해 주시면 기존 상담창으로 바로 연결됩니다.

상담을 계속 원하실 경우, 링크로 접속 후 메시지를 남겨주세요. 🎧

🔗 상담 링크 : 직접 첨부`,
`장시간(1시간 기준) 무응답 시 1차 리마인드 발송용`)}
  <div class="grid2">${macro("불량 접수 · 무응답 종료","공통_불량접수_무응답종료",
`고객님, 장시간 답변이 없으셔서 이번 상담은 종료됩니다. 😢

불량 접수가 이어서 필요하시다면
아래 전용 링크로 다시 접수 부탁 드립니다, 감사합니다.

🔗 불량 접수 링크 : https://sloom.channel.io/workflows/789993`)}${macro("유상 AS 접수 · 무응답 종료","공통_유상AS접수_무응답종료",
`고객님, 장시간 답변이 없으셔서 이번 상담은 종료됩니다. 🎧

유상 A/S 접수를 희망하신다면 위 안내드린 계좌에 입금해 주신 후 아래 전용 링크로 접수 부탁 드립니다, 감사합니다.

🔗 유상 교환 접수 링크 : https://sloom.channel.io/workflows/800803`)}</div>
  <div class="grid2">${macro("일반 교환 접수 · 무응답 종료","공통_일반교환접수_무응답종료",
`고객님, 장시간 답변이 없으셔서 이번 상담은 종료됩니다. 😢

교환 접수가 이어서 필요하시다면
아래 전용 링크로 다시 접수 부탁 드립니다, 감사합니다.

🔗 교환 접수 링크 : https://sloom.channel.io/workflows/823500`)}${macro("일반 반품 접수 · 무응답 종료","공통_일반반품접수_무응답종료",
`고객님, 장시간 답변이 없으셔서 이번 상담은 종료됩니다. 🎧

반품 접수가 이어서 필요하시다면
아래 전용 링크로 다시 접수 부탁 드립니다, 감사합니다.

🔗 반품 접수 링크 : https://sloom.channel.io/workflows/823500`)}</div>
  ${macro("정상 · 무응답 종료","공통_정상_무응답종료",
`고객님, 장시간 추가 답변이 없으셔서 이번 상담은 종료됩니다. 🙅‍♀️

다른 문의 사항이 있다면 언제든 편하게 다시 문의해 주세요. 😊`,
`담당 매니저의 안내가 모두 끝난 후 정상 종료된 경우 · 별도 재접수 링크 불필요`)}
  <div class="grp-h" id="c_basic_2">2. 사전/사후 대기</div>
  ${caution(`★ 고객에게 대기 요청 후 자동 종료 경고 멘트가 나가지 않도록 [종료대기] 설정 필수`)}
  <div class="grid2">${macro("확인 후 안내 (대기 요청)","",
`확인 후 안내 도와 드리겠습니다.
잠시만 기다려주시면 감사하겠습니다. 🙏`)}${macro("추가 대기 안내 (2~3분 경과)","",
`확인에 시간이 소요되고 있습니다.
잠시만 더 기다려주시면 감사하겠습니다. 🙏`)}</div>
  ${macro("확인 완료","공통_대기완료",
`고객님, 기다려주셔서 감사합니다.`)}
  <div class="grp-h" id="c_basic_3">3. 호응 표현</div>
  ${caution(`고객 말씀 후 상황에 맞는 호응 필수 (단답 '네'는 부적절 / "네, 많이 불편하셨을 것 같습니다" 같은 공감 표현은 적절)`)}
  <div class="grid2">${macro("호응 표현","",
`네, 맞습니다.
네, 그렇습니다.
네, 확인되었습니다.`)}${macro("💬 고객 감정이 담긴 상황","",
`네, 많이 불편하셨을 것 같습니다.
네, 많이 당황하셨을 것 같습니다.
네, 충분히 그렇게 생각하실 수 있습니다.
네, 불편을 겪으셔서 많이 속상하셨을 것 같습니다.
네, 답답하셨을 것 같습니다.
네, 걱정되셨을 것 같습니다.`)}</div>
  <div class="grp-h" id="c_basic_4">4. 채팅 중 유선(O/B) 요청</div>
  ${caution(`고객이 채팅 인입 후 전화 요청 시 우선 채팅 상담 권유 (불필요한 O/B 감소 목적)`)}
  ${macro("🚨 전화 상담 불가","공통_전화상담불가",
`전화 ARS 구매 외 모든 문의는 채팅으로만 진행하고 있어, 요청하시는 전화 상담이 어려운 점 양해 부탁드립니다.
※ AS(교환·반품) 상담은 절차상 사진/영상 확인이 필수적으로 채팅으로만 운영됩니다.`,
`AS·교환·반품 신청은 사진/영상 확인이 필수로 채팅으로만 운영합니다.`)}
  <div class="grid2">${macro("i. 인입 목적 불명 + 통화만 요청","공통_통화_목적불명",
`채팅을 통한 상담이 더 빠르게 진행되기에 문의 사항 말씀해 주시면 안내 도와드리겠습니다.
말씀하시는 동안은 대화가 종료되지 않으니, 편히 말씀 부탁드립니다. 🙏`)}${macro("ii. 인입 목적 있음 + 통화 요청","공통_통화_목적있음",
`네 고객님, 많이 불편하셨을 것 같습니다. 🥲
다만 채팅을 통한 상담이 조금 더 빠르기에 안내하고 있으며, 말씀해 주시면 확인 후 안내 도와드리겠습니다.`)}</div>
  <div class="grp-h" id="c_basic_5">5. 추가 문의 / 점심시간</div>
  <div class="grid2">${macro("추가 문의 수행","공통_추가문의",
`오늘 제가 안내해 드린 내용에 대해 추가적으로 더 궁금하신 점 있으실까요? 😊`,
`고객 문의 답변 모두 완료 후 수행`)}${macro("점심시간 양해","공통_점심시간양해",
`고객님, 12시 30분부터 오후 1시 30분까지는 상담 운영 시간이 아니므로, 문의사항을 채팅에 남겨주시면 1시 30분 이후 답변 도와드리겠습니다. 🙏`)}</div>
  <div class="grp-h" id="c_basic_7">🚨 상담 종료 경고</div>
  ${caution(`고객 욕설·반말·폭언·성희롱 (1회) — 담당 관리자 보고 필수`)}
  <div class="grid2">${macro("경고 멘트","공통_종료경고",
`고객님, 2018년 10월부터 산업안전보건법의 고객응대 근로자보호조치가 시행되고 있어, 상담과 무관한 말씀이 지속되면 상담이 불가합니다.`)}${macro("선종료 멘트 (경고 후 동일 지속)","공통_선종료",
`고객님, 죄송하지만 지속된 상담과 무관한 말씀으로 인해 상담이 종료됩니다.`,
`담당 관리자 가이드 하에 진행`)}</div>
  ${secTitle("🎁","제품 문의",null,"c_product")}
  ${macro("제품명 확인 요청","제품문의_이름없어재탐색요청",
`(브랜드명)에는 다양한 제품들이 있어, 번거로우시겠지만 어떤 제품에 대한 문의인지 제품명 또는 제품 특징을 알려주시면 감사하겠습니다. :)`,
`제품명 확인 후 '제품별 KEY Point', 'CS 제품별 FAQ 템플릿' 참고하여 응대`)}
  ${secTitle("📦","배송·출고 문의",null,"c_ship")}
  <div class="grp-h" id="c_ship_1">1. 배송 일정 문의</div>
  ${caution(`오후 2시 이전 결제 건 당일 출고 기준 · 결제일자+시간 확인 필수 · 금요일 2시 이후/주말·공휴일 결제는 공휴일 출고 미진행`)}
  <div class="grid2">${macro("월-금 2시 이전 · 결제 당일","공통_월목2시전_당일출고예정",
`📦 출고 진행 일정 안내드리겠습니다.

고객님의 주문은 (구매날짜+요일) 오후 2시 이전 결제 건으로, 오늘 출고 예정입니다.

· 배송 : 출고일로부터 영업일 기준 2~3일 소요
· 택배사 : CJ대한통운

※ 주말 및 공휴일에는 출고가 진행되지 않습니다.`)}${macro("월-금 2시 이전 · 출고 후","공통_월목2시전_당일출고완료",
`📦 출고 진행 일정 안내드리겠습니다.

고객님의 주문은 (구매날짜+요일) 오후 2시 이전 결제 건으로, 오늘 출고되었습니다.

· 배송 : 출고일로부터 영업일 기준 2~3일 소요
· 택배사 : CJ대한통운

※ 주말 및 공휴일에는 출고가 진행되지 않습니다.`)}</div>
  <div class="grid2">${macro("월-목 2시 이후 · 결제 당일","공통_월목2시후_익일출고예정",
`📦 출고 진행 일정 안내드리겠습니다.

고객님의 주문은 (구매날짜+요일) 오후 2시 이후 결제 건으로, 내일 출고 예정입니다.

· 배송 : 출고일로부터 영업일 기준 2~3일 소요
· 택배사 : CJ대한통운

※ 오후 2시 이전 결제 건까지 당일 출고되며, 주말 및 공휴일에는 출고가 진행되지 않습니다.`)}${macro("월-목 2시 이후 · 다음날 인입","공통_월목2시후_당일출고예정",
`📦 출고 진행 일정 안내드리겠습니다.

고객님의 주문은 (구매날짜+요일) 오후 2시 이후 결제 건으로, 오늘 출고 예정입니다.

· 배송 : 출고일로부터 영업일 기준 2~3일 소요
· 택배사 : CJ대한통운

※ 오후 2시 이전 결제 건까지 당일 출고되며, 주말 및 공휴일에는 출고가 진행되지 않습니다.`)}</div>
  <div class="grid2">${macro("금요일 2시 이후 · 금요일 인입","공통_금2시후_차주월요일출고예정",
`📦 출고 진행 일정 안내드리겠습니다.

고객님의 주문은 금요일 오후 2시 이후 결제 건으로, 출고 마감되어 차주 월요일 출고 예정입니다.

· 배송 : 출고일로부터 영업일 기준 2~3일 소요
· 택배사 : CJ대한통운

※ 오후 2시 이전 결제 건까지 당일 출고되며, 주말 및 공휴일에는 출고가 진행되지 않습니다.`)}${macro("금요일 2시 이후 · 월요일 인입","공통_금2시후_월요일출고완료",
`📦 출고 진행 일정 안내드리겠습니다.

고객님의 주문은 금요일 오후 2시 이후 결제 건으로, 오늘 출고되었습니다.

· 배송 : 출고일로부터 영업일 기준 2~3일 소요
· 택배사 : CJ대한통운

※ 오후 2시 이전 결제 건까지 당일 출고되며, 주말 및 공휴일에는 출고가 진행되지 않습니다.`)}</div>
  ${macro("주말/공휴일 결제","공통_주말_출고예정일안내",
`📦 출고 진행 일정 안내드리겠습니다.

고객님의 주문은 (구매날짜+요일) 결제 건으로, (출고 예정일) 출고 예정입니다.

· 배송 : 출고일로부터 영업일 기준 2~3일 소요
· 택배사 : CJ대한통운

※ 주말 및 공휴일에는 출고가 진행되지 않습니다.`)}
  <div class="grp-h" id="c_ship_2">2. 미배송 / 오배송 문의</div>
  ${guide(`자사몰·물류센터(<a href="https://seller.poomgo.com/login?redirect=%2F" target="_blank">품고</a> 또는 정석) 주문내역에서 송장번호 확인 → CJ대한통운 송장 조회로 배송 상태·흐름 확인`)}
  <div class="grid2">${macro("[공통] 사과 표현","공통_미배송_사과",
`먼저 많이 기다리셨을 텐데, 구매 후 배송으로 불편을 드려 진심으로 죄송하다는 말씀 드립니다.`)}${macro("배송완료 상태 안내","공통_미배송_배송완료안내",
`다만 고객님 주문건 확인 시 (배송완료 날짜) 배송완료로 확인됩니다.
정확한 확인을 위해 운송장 번호와 배송 사원 정보 안내드리겠습니다. 🥲

▶ 운송장번호 : (기재)
▶ 배송사원 : (성함/연락처)
▶ CJ대한통운 콜센터 : 1588-1255

번거로우시겠지만 해당 정보로 택배사 측에 기사 과실에 따른 오배송·분실 여부 문의 부탁드립니다.`,
`최종 미수긍 시 물류센터(<a href="https://seller.poomgo.com/login?redirect=%2F" target="_blank">품고</a> 또는 정석) 문의하여 흐름 확인, 배송 사고 시 재발송 요청`)}</div>
  <div class="grp-h" id="c_ship_3">3. 분리배송 안내</div>
  ${macro("[공통] 분리 배송 안내 & 운송장","공통_분리배송안내",
`각 상품 상세페이지 상단에 안내드리는 것과 같이, 일부 세트 구성 또는 1개 이상 구매 시 제품의 박스 무게·크기 차이로 인한 분실 위험을 줄이고 안전한 배송을 위해 분리 배송을 진행하고 있습니다. 🙏

주문일로부터 영업일 2~3일 내 전 제품 배송 완료되며, 택배사 사정에 따라 출고 송장별 배송 완료 시점이 다소 상이할 수 있는 점 양해 부탁드립니다.

운송장번호 : (기재)

※ 분리 배송으로 진행되어도 배송비는 동일합니다.
※ 분리 배송 시 1개의 대표 운송장 번호만 조회가 가능합니다.`,
`운송장번호는 물류센터(<a href="https://seller.poomgo.com/login?redirect=%2F" target="_blank">품고</a> 또는 정석)에서 확인`)}
  ${secTitle("🔄","주문 변경 (취소·배송정보 변경)",null,"c_order")}
  <div class="grp-h" id="c_order_1">1. 주문 취소</div>
  <div class="warn-note">📦 물류센터(<a href="https://seller.poomgo.com/login?redirect=%2F" target="_blank">품고</a> 또는 정석) 출고 상태 확인 필수
· 취소 가능 : 송장 상태가 '마감됨'을 제외한 전체
· 취소 불가 : 송장 상태가 '마감됨'</div>
  <div class="grid2">${col("blue","취소 가능",
subcard("i. 무통장 제외 모든 결제수단","공통_취소_카드",
`아직 출고 전으로 취소 처리 도와드리겠습니다.
결제수단에 따라 실제 카드 승인 취소까지는 카드사 영업일 기준 3~5일 정도 소요될 수 있습니다.`) + subcard("i. 무통장·가상계좌 (계좌 확인)","공통_취소_계좌",
`아직 출고 전으로 취소 처리 도와드리겠습니다.
다만, 무통장 입금(가상계좌 포함)으로 결제해 주신 점 확인되어, 환불을 위해 아래 계좌 정보를 전달 부탁드립니다.

🏦 <b>은행 / 계좌번호 / 예금주</b>`) + subcard("ii. 계좌 확인 후","공통_취소_계좌확인",
`소중한 정보 확인 감사합니다.
해당 계좌로 환불 계좌 등록이 완료되었습니다.

💸 <b>입금 안내</b>
실제 취소 완료 후 영업일 기준 1~2일 내 입금 예정

※ 은행 점검 시간 또는 공휴일에 따라 입금이 지연될 수 있습니다.`)
)}${col("pink","취소 불가",
subcard("취소 불가 안내","공통_취소불가",
`고객님의 주문은 이미 출고가 완료되어 즉시 취소는 어려운 점 양해 부탁드립니다. 🙏🏻
배송 완료 후 반품 접수로 진행 가능하며, 단순 변심 반품의 경우 왕복 배송비 6,000원이 발생합니다.`)
)}</div>
  <div class="grp-h">[예외] 취소했으나 배송된 경우</div>
  <div class="grid2">${macro("i. 사과 및 개봉 여부 확인","공통_취소예외_사과개봉확인",
`네 고객님, 먼저 취소한 제품이 배송되어 많이 놀라셨을 것 같습니다. 이용에 불편을 드려 대단히 죄송합니다.

회수 진행 예정으로, 번거로우시겠지만 해당 제품 개봉 또는 사용 여부만 확인 부탁드립니다.
제품 전체를 다시 택배박스에 포장 후 반품 기사 방문 시 전달해 주시면 수거 진행됩니다. 기존 배송지와 동일 주소로 반품 기사 방문하도록 도와드리면 될까요?`,
`물류센터(<a href="https://seller.poomgo.com/login?redirect=%2F" target="_blank">품고</a> 또는 정석) 조회 취소 가능 확인 후 취소했으나 실제 배송된 경우`)}${macro("ii. 회수 방식 안내","공통_취소예외_회수방식안내",
`확인 감사합니다. 기존과 동일한 CJ대한통운 택배로 반품 진행되며, 기사 방문 전 알림톡 또는 유선 연락 이후 수거 진행됩니다.`)}</div>
  <div class="grp-h" id="c_order_2">2. 배송 정보 변경</div>
  <div class="warn-note">📦 물류센터(<a href="https://seller.poomgo.com/login?redirect=%2F" target="_blank">품고</a> 또는 정석) 출고 상태 확인 필수
· 변경 가능 : 송장 상태가 '마감됨'을 제외한 전체
· 변경 불가 : 송장 상태가 '마감됨'</div>
  <div class="grid2">${col("blue","변경 가능",
subcard("i. 일반 결제건","공통_주소변경_일반",
`요청하신 (주소/연락처)로 수정 완료되었습니다.

📦 배송 안내
· 배송 : 출고 후 영업일 기준 2~3일 소요
· 택배사 : CJ대한통운`) + subcard("ii. 네이버페이 결제","공통_주소변경_네이버",
`요청하신 (주소/연락처)로 수정 완료되었습니다.
다만, 네이버페이 주문의 경우 배송지 변경이 완료되어도 주문내역에는 변경된 주소가 반영되지 않는 점 참고 부탁드립니다.

📦 배송 안내
· 배송 : 출고 후 영업일 기준 2~3일 소요
· 택배사 : CJ대한통운`)
)}${col("pink","변경 불가",
subcard("변경 불가 안내","공통_주소변경불가",
`고객님의 주문은 이미 출고가 완료되어 (주소/연락처) 변경이 어려운 점 양해 부탁드립니다.
정확한 확인을 위해 운송장 번호를 안내드리오니, 번거로우시더라도 배송사로 직접 변경 요청 부탁드립니다.

🚚 운송장 번호 : (기재)`)
)}</div>
  ${secTitle("💳","결제 문의 (입금 확인)",null,"c_pay")}
  ${caution(`고객 정보 확인부터 진행 · 정상 입금 시 확인 내용 안내`)}
  ${macro("입금대기 / 기한만료 자동취소 확인","공통_입금_확인요청",
`고객님, 기다려주셔서 감사합니다. 🙏🏻
확인 결과, (입금 대기 또는 입금 기한 만료로 인해 주문이 자동 취소)된 것으로 확인됩니다.
이미 입금하셨다면 입금하신 날짜, 시간, 입금자명을 말씀해 주시면 확인 후 안내드리겠습니다.`)}
  <div class="grid2">${macro("i. 입금자명 상이","공통_입금_명불일치",
`고객님, 기다려주셔서 감사합니다. 🙏🏻
주문 시 기재하신 입금자명과 실제 입금자명이 달라 자동으로 입금 확인이 되지 않은 것으로 확인됩니다.
입금 내역은 확인되어 결제 완료 처리 도와드리겠습니다.`)}${macro("ii. 입금액 부족","공통_입금_부족",
`고객님, 기다려주셔서 감사합니다. 🙏🏻
입금 내역은 확인되나, 결제 금액보다 (금액) 부족하게 입금된 것으로 확인됩니다.
동일한 계좌로 (금액) 추가 입금해 주시면 결제 완료 처리 도와드리겠습니다.`)}</div>
  <div class="grid2">${macro("c-1. 1,000원 이하","공통_입금_초과_1000이하",
`고객님, 기다려주셔서 감사합니다. 🙏🏻
입금 내역은 확인되며, 결제 금액보다 (금액) 초과 입금된 것으로 확인됩니다.

적립금으로 환불 도와드려도 괜찮으실까요? 🙂

환불을 위해 고객님 명의의 계좌 정보를 부탁드립니다.
🏦 <b>은행 / 계좌번호 / 예금주</b>`,
`1,000원 이하일 경우 적립금 환불 여부 탐색 후 고객 의사에 따라 진행`)}${macro("c-2. 1,000원 이상","공통_입금_초과_1000이상",
`고객님, 기다려주셔서 감사합니다. 🙏🏻

입금 내역은 확인되며, 결제 금액보다 (금액) 초과 입금된 것으로 확인됩니다.

환불을 위해 고객님 명의의 계좌 정보를 부탁드립니다.
🏦 <b>은행 / 계좌번호 / 예금주</b>`)}</div>
  ${secTitle("👤","멤버십·회원정보·쿠폰",null,"c_member")}
  ${macro("네이버페이 쿠폰 사용","공통_네이버쿠폰안내",
`네이버페이로 구매 시 등급이 적용되지 않으며, 등급에 따른 공식몰 전용 혜택(적립금·쿠폰) 사용이 불가합니다.`)}
    <div class="grp-h">웰컴 쿠폰팩 안내</div>
  <div class="warn-note">⚠️ 슬룸은 2026년 6월 11일(목)부로 멤버십 혜택이 변경되어 웰컴 쿠폰팩이 제공되지 않습니다.</div>
  <div class="grp-h">(1) 쿠폰팩이란? (예: 쿠폰팩이 뭔가요?)</div>
  <div class="grid2">${macro("심플리케어·코코다움·얼라인랩 (2만원)","",
`회원 가입 시 <웰컴 쿠폰팩>이 자동으로 발급됩니다.

웰컴 쿠폰팩은 총 2만원 상당의 할인 쿠폰으로 구성되어 있으며, 각 쿠폰은 할인 금액과 사용 조건에 맞춰 이용 가능합니다.
가입 후 7일간 사용 가능하므로, 기간 내 사용해 주세요.

※ 유효기간(7일) 내 미사용으로 자동 소멸된 쿠폰은 재발급이 어렵습니다.`)}${macro("셀올로지 (5만원)","",
`회원 가입 시 <웰컴 쿠폰팩>이 자동으로 발급됩니다.

웰컴 쿠폰팩은 총 5만원 상당의 할인 쿠폰으로 구성되어 있으며, 각 쿠폰은 할인 금액과 사용 조건에 맞춰 이용 가능합니다.
가입 후 7일간 사용 가능하므로, 기간 내 사용해 주세요.

※ 유효기간(7일) 내 미사용으로 자동 소멸된 쿠폰은 재발급이 어렵습니다.`)}</div>
  <div class="grp-h">(2) 쿠폰팩 재발급 가능 문의</div>
  ${macro("재발급 문의 (심플·얼라인랩·코코·셀올로지 공통)","",
`회원 가입 시 자동으로 발급되는 <웰컴 쿠폰팩>은 가입 후 7일간 사용 가능합니다.

※ 유효기간(7일) 내 미사용으로 자동 소멸된 쿠폰은 재발급이 어려운 점 양해 부탁드립니다.`)}
  <div class="grp-h">(3) 회원 가입·탈퇴·비밀번호 문의</div>
  <div class="grid2">${macro("회원가입 방법","공통_회원가입방법",
`회원 가입은 상담을 통하여 어려우며, 가입 방법 안내드립니다.
■ 회원 가입 방법
- 홈페이지 접속 → 회원 가입 → 카카오 1초 가입 또는 일반 회원 가입`)}${macro("회원탈퇴 방법","공통_회원탈퇴방법",
`고객님의 개인정보로 회원 탈퇴는 상담을 통하여 어려우며, 탈퇴 방법 안내드립니다.
■ 회원 탈퇴 방법
- 홈페이지 접속 → 로그인 → 마이페이지 → 회원탈퇴`)}</div>
  ${macro("비밀번호 찾기","공통_비밀번호찾기",
`고객님의 개인정보로 비밀번호 찾기는 상담을 통하여 어려우며, 방법 안내드립니다.
■ 방법
- 홈페이지 접속 → 로그인 → 아이디/비밀번호 찾기`)}
  <div class="grp-h">🚨 [예외] 회원탈퇴·비번초기화 (유선 O/B)</div>
  ${guide(`⚠️ 이메일 사용 불가로 비밀번호 초기화가 필요하거나 로그인 불가하여 수동 탈퇴 필요시엔, 개인정보 보호를 위해 <b>유선 O/B로만 진행</b> (본인 확인 후 처리 필수)
👇🏻 상담사가 아래 멘트 송출 후 통화 가능한 연락처 확보 → 유선O/B 진행`)}
  ${macro("고객 안내 멘트","공통_전화상담예외",
`고객님, 죄송하게도 고객센터를 통한 (회원 탈퇴 / 비밀번호 초기화)는 고객님의 개인정보 보호를 위해 전화 상담으로만 진행하고 있습니다.
불편을 드려 죄송합니다. 통화 가능한 연락처를 말씀 주시면 본인 확인 후 초기화 도움 드리겠습니다.`)}
    <div class="grp-h">브랜드별 대표번호</div>
  <div class="cmp-table-wrap"><table class="cmp-table"><thead><tr><th class="cmp-corner">브랜드</th><th class="cmp-blue">대표번호</th><th class="cmp-corner">브랜드</th><th class="cmp-blue">대표번호</th></tr></thead><tbody><tr><td class="cmp-row-label">심플리케어</td><td>1668-1406</td><td class="cmp-row-label">코코다움</td><td>1668-1376</td></tr><tr><td class="cmp-row-label">슬룸</td><td>1668-2956</td><td class="cmp-row-label">얼라인랩</td><td>1668-3559</td></tr><tr><td class="cmp-row-label">닥터아망</td><td>1668-3342</td><td class="cmp-row-label">와이브닝</td><td>1668-5811</td></tr><tr><td class="cmp-row-label">셀올로지</td><td>1544-5748</td><td class="cmp-row-label">빌바</td><td>1668-2908</td></tr><tr><td class="cmp-row-label">닥터맨즈</td><td>1668-0953</td><td class="cmp-row-label"></td><td></td></tr></tbody></table></div>
  ${secTitle("📣","마케팅·제휴 문의",null,"c_mkt")}
  <div class="grid2">${macro("셀올로지 · 마케팅·제휴 제안","",
`협찬 및 마케팅 제안의 경우 홈페이지 하단에 기재된 메일로 연락 부탁드립니다.

sales@dermacorp.kr

감사합니다.`)}${macro("그 외 전 브랜드 · 마케팅·제휴 제안","공통_마케팅제휴제안",
`협찬 및 마케팅 제안의 경우 홈페이지 하단에 기재된 메일로 연락 부탁드립니다.

marketing@olit.co.kr

감사합니다.`)}</div>
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
  <div class="grid2">${macro("▶ 홈페이지 결제 희망 시","공통_채팅주문_홈피결제유도",
`네, 고객님.
홈페이지를 통해 직접 주문해 주시면 감사하겠습니다.
다시 전화 주문을 원하실 경우 고객센터로 재연락 부탁드립니다.`)}${macro("계좌·구성 안내 후 결제","공통_채팅주문_계좌안내",
`원하시는 수량만큼 송금해 주신 후, 입금자 성함 / 수령인 성함 / 주소 / 휴대폰 번호를 이 채팅방에 남겨 주세요.`,
`ICS 템플릿으로 가격·구성·계좌 송출 · 무통장 문자 템플릿 시트 참고 가능`)}</div>
  <div class="grp-h">출고 예정 안내 (입금 확인 후)</div>
  <div class="grid2">${macro("월-금 2시 이전 채팅 주문","공통_채팅주문_평일2시전",
`📦 출고 진행 일정 안내드리겠습니다.

고객님의 입금이 정상적으로 확인되어, 오늘 출고 예정입니다.

· 배송 : 출고일로부터 영업일 기준 2~3일 소요
· 택배사 : CJ대한통운

※ 주말 및 공휴일에는 출고가 진행되지 않습니다.`)}${macro("월-목 2시 이후 입금 확인","공통_채팅주문_평일2시후",
`📦 출고 진행 일정 안내드리겠습니다.

고객님의 입금이 정상적으로 확인되어, 내일 출고 예정입니다.

· 배송 : 출고일로부터 영업일 기준 2~3일 소요
· 택배사 : CJ대한통운

※ 오후 2시 이전 결제 건까지 당일 출고되며, 주말 및 공휴일에는 출고가 진행되지 않습니다.`)}</div>
  ${macro("금요일 2시 이후 입금 확인","공통_채팅주문_금요일2시후",
`📦 출고 진행 일정 안내드리겠습니다.

고객님의 입금이 정상적으로 확인되어, 차주 월요일 출고 예정입니다.

· 배송 : 출고일로부터 영업일 기준 2~3일 소요
· 택배사 : CJ대한통운

※ 오후 2시 이전 결제 건까지 당일 출고되며, 주말 및 공휴일에는 출고가 진행되지 않습니다.`)}
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
  ${macro("첫인사","",
`안녕하세요, 고객님. (브랜드명)입니다.
무엇을 도와드릴까요?`,
`고객 IN · 브랜드명 포함하여 안내 · 유선은 상담사 이름 언급 미진행`)}
  ${macro("고객 정보 확인","",
`확인 후 안내드리겠습니다.
고객 정보 확인을 위해 주문하신 제품명과 성함, 연락처를 말씀해 주세요.`,
`정보 확인 후 답변 가능한 경우 사용 · 최소 2가지(성함·연락처) 확인 필수 · 고객이 먼저 언급하도록 유도(이전 이력 선언급 금지)`)}
  <div class="grid2">${macro("i. 고객 정보 불일치","",
`죄송합니다, 고객님. 주문 정보가 확인되지 않습니다.
구매하신 판매처와 성함, 연락처를 다시 한번 확인 부탁드려요.`)}${macro("ii. 고객 정보 일치","",
`정보가 일치하면 바로 다음 단계로 진행합니다.`,
`안내 멘트 없이 바로 문의 응대 진행`)}</div>
  <div class="grid2">${macro("감사 인사 (정보 확인 후)","",
`소중한 정보 확인 감사합니다.`,
`고객 정보 확인 후 감사 인사 필수`)}${macro("끝인사","",
`감사합니다, 고객님. (브랜드명)이었습니다.
추가로 궁금하신 사항이 있으시면 언제든지 고객센터로 연락 부탁드립니다. 좋은 하루 보내세요.`,
`상담 중인 브랜드명 반영`)}</div>
  <div class="grp-h" id="c_basic_2">2. 사전/사후 대기</div>
  ${caution(`★ 대기 요청 후 자동 종료 경고 멘트가 나가지 않도록 [종료대기] 설정 필수`)}
  <div class="grid2">${macro("확인 후 안내 (대기 요청)","",
`확인 후 안내 도와드리겠습니다.
잠시만 기다려주시면 감사하겠습니다. 🙏`)}${macro("추가 대기 안내 (5분 경과)","",
`확인에 시간이 소요되고 있습니다.
잠시만 더 기다려주시면 감사하겠습니다. 🙏`)}</div>
  ${macro("확인 완료","",
`고객님, 기다려주셔서 감사합니다.`)}
  <div class="grp-h" id="c_basic_3">3. 호응 표현</div>
  ${caution(`고객 말씀 후 상황에 맞는 호응 필수 (단답 '네'는 부적절 / "네, 많이 불편하셨을 것 같습니다" 같은 공감 표현은 적절)`)}
  <div class="grid2">${macro("호응 표현","",
`네, 맞습니다.
네, 그렇습니다.
네, 확인되었습니다.
말씀 주셔서 감사합니다.`)}${macro("💬 공감 호응","",
`네, 많이 불편하셨겠습니다.
네, 그러셨군요. 놀라셨을 것 같습니다.
네, 충분히 그러실 수 있습니다.
불편을 드려 죄송합니다. 바로 확인해 드리겠습니다.`)}</div>
  <div class="grp-h" id="c_basic_4">4. 추가 문의</div>
  ${macro("추가 문의 수행","",
`오늘 제가 안내해 드린 내용에 대해 추가적으로 더 궁금하신 점 있으실까요? 😊`,
`고객 문의 답변 모두 완료 후 수행`)}
  <div class="grp-h" id="c_warn">🚨 상담 종료 경고</div>
  ${caution(`고객 욕설·반말·폭언·성희롱 (1회) — 담당 관리자 보고 필수`)}
  <div class="grid2">${macro("경고 멘트","",
`고객님, 2018년 10월부터 산업안전보건법의 고객응대 근로자보호조치가 시행되고 있어, 상담과 무관한 말씀이 지속되면 상담이 불가합니다.`)}${macro("선종료 멘트 (경고 후 동일 지속)","",
`고객님, 죄송하지만 지속된 상담과 무관한 말씀으로 인해 상담 종료하겠습니다.`,
`담당 관리자 가이드 하에 진행`)}</div>
  ${secTitle("📞","콜백 · 아웃바운드 (O/B)",null,"c_ob")}
  ${caution(`불필요한 OB는 지양 · 고객이 인입하지 않았으므로 [소속 브랜드명 + OB 사유 + 통화 가능 여부] 반드시 확인 · 필수 유형: 콜백 전화 주문 접수 건 / 교환·반품 장기 미처리`)}
  <div class="grid2">${macro("콜백 티켓 · 전화 주문","",
`안녕하세요, 고객님. (브랜드명)입니다.
전화 주문 상담 예약을 남겨주셔서 연락드렸습니다. 지금 잠시 통화 괜찮으실까요?`)}${macro("콜백 티켓 · 전화 주문 외","",
`안녕하세요, 고객님. (브랜드명)입니다.
(통화 접수 사유)와 관련하여 연락드렸습니다. 지금 잠시 통화 괜찮으실까요?`)}</div>
  ${macro("교환/반품 장기 미처리","",
`안녕하세요, 고객님. (브랜드명)입니다.
신청하신 (교환/반품) 건과 관련하여 안내드릴 사항이 있어 연락드렸습니다. 지금 잠시 통화 괜찮으실까요?`,
`미회수 등 상황에 따라 상황별 안내 멘트를 이행`)}
  ${secTitle("🔄","주문 변경 (취소·배송정보 변경)",null,"c_order")}
  <div class="grp-h" id="c_order_1">1. 취소 후 배송</div>
  ${guide(`물류센터(품고 또는 정석) 조회로 취소 가능 확인 후 취소했으나 실제 배송된 경우 · ①~⑤ 순서로 응대`)}
  <div class="grid2">${macro("i. 사과 및 안내","",
`먼저 취소하신 상품이 배송되어 많이 당황하셨을 것 같습니다. 불편을 드려 진심으로 죄송합니다.`)}${macro("ii. 수거 가능 여부 확인","",
`회수를 진행해야 하는 건으로, 제품의 개봉 또는 사용 여부를 확인 부탁드립니다.`)}</div>
  <div class="grid2">${macro("iii. 수거 안내","",
`제품과 구성품은 처음 받으셨던 것처럼 전체를 택배 박스에 포장해 두시면, 반품 기사님이 방문하셨을 때 전달만 해주시면 됩니다.
기존 배송지로 반품 기사님 방문 접수를 진행해 드려도 괜찮으실까요?`)}${macro("iv. CJ대한통운 방문 예정 안내","",
`확인 감사합니다.

배송과 동일한 CJ대한통운 기사님이 방문하여 수거를 진행할 예정입니다.
기사 방문 전 알림톡 또는 유선 연락 후 방문드립니다.`)}</div>
  ${guide(`⑤ 상담 종료 유도 후, 끝인사 멘트하고 종료`)}
  <div class="grp-h" id="c_order_2">2. 배송 정보 변경</div>
  <div class="warn-note">📦 물류센터(<a href="https://seller.poomgo.com/login?redirect=%2F" target="_blank">품고</a> 또는 정석) 출고 상태 확인 필수
· 변경 가능 : 송장 상태가 '마감됨'을 제외한 전체
· 변경 불가 : 송장 상태가 '마감됨'</div>
  <div class="grid2">${col("blue","변경 가능",
subcard("i. 일반 결제건","",
`요청하신 (주소/연락처) 변경이 정상적으로 완료되었습니다.

출고 후 배송 완료까지는 영업일 기준 2~3일 정도 소요되며, 배송은 CJ대한통운으로 진행됩니다.`) + subcard("ii. 네이버페이 결제","",
`요청하신 (주소/연락처) 변경이 정상적으로 완료되었습니다.
다만, 네이버페이 주문은 배송지 변경이 완료되어도 주문내역에는 변경된 주소가 반영되지 않는 점 참고 부탁드립니다.

출고 후 배송 완료까지는 영업일 기준 2~3일 정도 소요되며, 배송은 CJ대한통운으로 진행됩니다.`))}${col("pink","변경 불가",
subcard("변경 불가 안내","",
`요청하신 (주소/연락처) 변경을 도와드리려고 확인해 보았는데, 이미 출고가 완료되어 정보 변경이 어려운 것으로 확인되었습니다.
정확한 배송을 위해 운송장 번호를 문자로 보내드리겠습니다.
번거로우시겠지만 CJ대한통운 고객센터 또는 담당 기사님께 직접 변경 요청 부탁드립니다.`))}</div>
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
  ${macro("입금대기 / 기한만료 자동취소 확인","",
`고객님, 기다려주셔서 감사합니다.
확인 결과, (입금 대기 또는 입금 기한 만료로 인한 자동 취소)로 주문이 자동 취소된 것으로 확인됩니다.
이미 입금하셨다면 입금하신 날짜와 시간, 입금자명을 말씀해 주시면 확인 후 안내드릴게요.`)}
  <div class="grid2">${macro("i. 입금자명 상이","",
`고객님, 기다려주셔서 감사합니다.

확인 결과 주문 시 기재하신 입금자명과 실제 입금자명이 달라 자동으로 입금 확인이 되지 않은 것으로 확인됩니다.
입금 내역을 확인하여 결제 완료 처리 도와드릴게요.`)}${macro("ii. 입금액 부족","",
`고객님, 기다려주셔서 감사합니다.

확인 결과, 결제 금액보다 (금액) 부족하게 입금된 것으로 확인됩니다.
동일한 계좌로 (금액)만 추가 입금해 주시면 결제 완료 처리 도와드리겠습니다.`)}</div>
  ${macro("iii. 입금액 초과","",
`고객님, 기다려주셔서 감사합니다.

확인 결과, 결제 금액보다 (금액) 초과 입금된 것으로 확인됩니다.`)}
  <div class="grid2">${macro("c-1. 1,000원 이하","",
`초과 입금된 (금액)은 고객님의 적립금으로 환불 도와드려도 괜찮으실까요?`,
`적립금 환불 거부 시 [1,000원 이상]과 동일하게 계좌 환불로 안내`)}${macro("c-2. 1,000원 이상","",
`초과 입금된 (금액)은 계좌로 환불 도와드리겠습니다.
환불받으실 은행명, 계좌번호, 예금주 성함 말씀 부탁드립니다.`)}</div>
  ${macro("계좌 확인 후","",
`소중한 정보 확인 감사합니다.

해당 계좌로 환불 계좌 등록을 완료해 드렸습니다.
실제 취소 완료 후 영업일 기준 1~2일 내 입금될 예정입니다.`)}
  <div class="grp-h">결제 완료 후 출고 안내</div>
  <div class="grid2">${macro("월-금 오후 2시 이전","",
`고객님, 입금 내역 확인되어 바로 결제 완료 처리 도와드렸습니다.
주문하신 상품은 오늘 출고될 예정이며, 배송은 출고 후 영업일 기준 2~3일 정도 소요됩니다.
배송은 CJ대한통운으로 진행됩니다.`)}${macro("금요일 오후 2시 이후","",
`고객님, 입금 내역 확인되어 결제 완료 처리 도와드렸습니다.
다만 금요일 오후 2시 출고 마감 이후 결제가 완료되어 차주 월요일 출고될 예정입니다.
배송은 출고 후 영업일 기준 2~3일 정도 소요되며, CJ대한통운으로 진행됩니다.`)}</div>
  ${secTitle("👤","회원 정보 (탈퇴·비밀번호·가입)",null,"c_member")}
  <div class="grp-h">1. 회원 탈퇴 (본인 확인 후 처리)</div>
  ${macro("본인 확인 요청","",
`고객님, 불편을 드려 죄송합니다.
회원 탈퇴를 도와드리기 전에 본인 확인이 필요해서 몇 가지만 확인하겠습니다.
고객님의 성함과 생년월일 말씀 부탁드려요.`)}
  <div class="grid2">${macro("i. 고객 정보 일치","",
`네, 확인되었습니다. 감사합니다.
고객님의 개인정보 보호를 위해 예외적으로 회원 탈퇴를 도와드릴 예정인데요, 지금 회원 탈퇴 진행 도와드려도 괜찮으실까요?`)}${macro("ii. 고객 정보 불일치","",
`죄송합니다, 고객님.
말씀해 주신 정보가 등록된 정보와 일치하지 않습니다. 번거로우시겠지만 다시 한번 확인 부탁드리겠습니다.`,
`재확인 후 [a. 정보 일치]로 진행`)}</div>
  ${macro("고객 동의 후 탈퇴 완료","",
`네, 확인 감사합니다.
회원 탈퇴 정상적으로 완료해 드렸습니다.
이용해 주셔서 감사합니다.`,
`상담 종료 후 수동 삭제 처리`)}
  <div class="grp-h">2. 비밀번호 찾기</div>
  <div class="grid2">${macro("일반 안내","",
`고객님의 개인정보 보호를 위해 전화로는 비밀번호 찾기 진행이 어려운 점 양해 부탁드립니다.
홈페이지에 접속하셔서 로그인 > 아이디/비밀번호 찾기를 통해 진행 부탁드리겠습니다.`)}${macro("[예외] 이메일 사용 불가 → 초기화 (본인 확인)","",
`불편을 드려 죄송합니다, 고객님.
비밀번호 초기화를 도와드리기 전에 본인 확인을 위해 몇 가지만 확인하겠습니다.
고객님의 성함과 생년월일을 말씀해 주세요.`)}</div>
  ${macro("[예외] 본인 확인 후 초기화 안내","",
`네, 확인되었습니다. 감사합니다.
비밀번호는 20분 이내에 초기화될 예정이고요. 초기화된 비밀번호는 문자로 보내드리겠습니다.`,
`정보 불일치 시 성함·생년월일 재확인`)}
  <div class="grp-h">3. 회원가입</div>
  ${macro("회원가입 안내","",
`회원 가입은 유선을 통해서 진행이 어려우며, 홈페이지에 접속하셔서 카카오 1초 가입 또는 일반 회원 가입으로 직접 진행 부탁드립니다.`)}
  ${secTitle("📣","마케팅·제휴 문의",null,"c_mkt")}
  <div class="grid2">${macro("셀올로지 · 마케팅·제휴","",
`(마케팅 또는 협찬) 담당자는 유선 직접 연결이 어려워, (마케팅 또는 협찬) 제안의 경우 홈페이지 하단에 기재된 아래 메일로 연락 부탁드려요.

sales@dermacorp.kr`)}${macro("그 외 전 브랜드 · 마케팅·제휴","",
`(마케팅 또는 협찬) 담당자는 유선 직접 연결이 어려워, (마케팅 또는 협찬) 제안의 경우 홈페이지 하단에 기재된 아래 메일로 연락 부탁드려요.

marketing@olit.co.kr`)}</div>
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
  <div class="grid2">${macro("▶ 홈페이지 결제 희망 시","",
`네, 고객님.
홈페이지를 통해 주문해 주시면 됩니다.
혹시 이후에도 전화 주문을 원하시면 언제든지 고객센터로 다시 연락 부탁드립니다.`)}${macro("2) 전화주문 결제 방법 확인","",
`네, 고객님. 전화 주문 계속 도와드리겠습니다.
결제는 카드 또는 무통장 입금으로 가능하신데요, 어떤 방법으로 진행 도와드릴까요?`)}</div>
  <div class="grp-h">a. 무통장 결제</div>
  <div class="grid2">${macro("i. 주소지·연락처·수취인 선확인","",
`배송을 위해 몇 가지 정보 확인 부탁드립니다.
받으실 주소지와 연락처, 수령인 성함 알려주시면 감사하겠습니다.`,
`고객 주소지 말씀 후 주소 재확인 반드시 진행`)}${macro("주소 재확인","",
`주소 한번 확인해 드리겠습니다.
○○○(상세주소 포함)로 확인되는데 맞으실까요?`)}</div>
  ${macro("ii. 계좌 문자 발송","",
`구매하시는 상품의 가격과 구성, 입금 계좌는 통화 종료 후 문자로 안내드리겠습니다.
문자 확인 후 입금해 주시면 확인되는 대로 출고 도와드리겠습니다.
문자 받으실 연락처가 맞는지만 한번 확인 부탁드릴게요.`,
`통화 종료 후 '무통장 입금 문자 템플릿' 시트 확인하여 발송`)}
  ${macro("iii. 출고 예정 안내","",
`네, 확인 감사합니다.
입금 후에는 확인까지 약 30분 정도 소요될 수 있으며, 확인되는 대로 출고 안내 문자를 보내드리겠습니다.`)}
  <div class="grid2">${macro("월-금 오후 2시 이전","",
`오후 2시 이전 입금이 확인되면 오늘 출고될 예정입니다.
배송은 출고 후 영업일 기준 2~3일 정도 소요되며, CJ대한통운으로 진행됩니다.`)}${macro("금요일 오후 2시 이후","",
`금요일 오후 2시 이후 입금이 확인되면 차주 월요일 출고될 예정입니다.
배송은 출고 후 영업일 기준 2~3일 정도 소요되며, CJ대한통운으로 진행됩니다.`)}</div>
  <div class="grp-h">b. 카드 결제 (<a href="https://cp.payup.co.kr/login.do" target="_blank">페이업</a>)</div>
  ${guide(`① 구매 희망 제품·옵션·가격 안내
· 배송비 발생 시 해당 금액을 포함하여 안내 (필수)
· 홈페이지(자사몰) 기준 가격으로 안내하며, 행사 중이면 행사명 포함 (예: 가정의 달 특가)
· 5만원 이상 결제 시 할부 여부 확인 후 <a href="https://cp.payup.co.kr/login.do" target="_blank">페이업</a>에서 진행`)}
  <div class="grid2">${macro("ii. 주소지·연락처·수취인 확인","",
`배송을 위해 몇 가지만 확인하겠습니다.
받으실 주소와 연락처, 수취인 성함 말씀 부탁드립니다.`,
`주소 재확인 반드시 진행`)}${macro("주소 재확인","",
`주소 한번 확인해 드리겠습니다.
○○○(상세주소 포함)로 확인되는데 맞으실까요?`)}</div>
  <div class="grid2">${macro("iii. 카드 결제 진행 (월-금 2시 이전)","",
`결제 정상적으로 완료되었습니다.
주문하신 상품은 오늘 출고될 예정이며, 배송은 출고 후 영업일 기준 2~3일 정도 소요됩니다.
배송은 CJ대한통운으로 진행됩니다.`)}${macro("iv. 카드 결제 진행 (금요일 2시 이후)","",
`결제 정상적으로 완료되었습니다.
금요일 오후 2시 이후 결제가 완료되어 차주 월요일 출고될 예정입니다.
배송은 출고 후 영업일 기준 2~3일 정도 소요되며, CJ대한통운으로 진행됩니다.`)}</div>
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

