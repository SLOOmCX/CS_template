const COCODAUM_100 = `

  <h1>💯 100% 환불 이벤트</h1>
    <div class="sub">효과·개인 불만족 반품 · 100% 환불 이벤트 응대 (자사몰 ONLY)</div>

  ${secTitle("💡","응대 기준","자사몰 ONLY","secA")}
  <div class="alert-red">🚫 자사몰(공식몰) 주문에 한해 제공되는 혜택으로, 그 외 외부 채널(쿠팡·네이버 등) 주문 건은 제공되지 않습니다.</div>
  ${caution(`💬 고객 발화 예시
"우리 아이가 안 먹어요" / "급여해도 효과가 없어요" / "아이한테 안 맞는 것 같아요" / "생각보다 별로예요" / "마음에 안 들어요"`)}
  ${cmpTable(
  [{cls:"gray",label:"(1) 이벤트 기간 전"},{cls:"blue",label:"(2) 이벤트 기간 내"},{cls:"pink",label:"(3) 이벤트 기간 경과"}],
  [
   {label:"프로세스", values:[
     "① 100% 환불 이벤트 기간 내 접수 유도 안내<br>② 선적용 예외 접수 불가",
     "① 구매 내역에 따라 100% 환불 이벤트 접수 진행",
     "① 100% 환불 이벤트 접수 불가 양해 안내"
   ]}
  ]
)}
<div class="grid2"><div class="quote-box"><b>📌 코코다움 100% 환불 이벤트 조건</b>
• 코코다움 공식 자사몰 구매 건에 한해 이용 가능 (외부몰 대상 아님)
• 첫 구매 체험 서비스로 단 1회, 상품 1종 1개에 한해 신청 가능
• 세트 또는 동일 상품 1개 이상 구매 시, 체험 1개 외에는 미개봉·손상 없이 보관된 경우에만 전액 환불
• 왕복 배송비 6,000원 보호자 부담 · 2022년 12월 19일 이후 구매자부터 적용</div><div class="quote-box"><b>카테고리별 사용 기준</b>
• 식품 : 40일 이내 신청 / 수령 후 <b>30일 동안 꾸준히 급여</b>
• 용품 : 40일 이내 신청 / 수령 후 <b>30일 동안 꾸준히 사용</b>
• 화장품 : 40일 이내 신청 / 수령 후 <b>30일 이내, 2/3 사용</b>
• 신청 방법 : 별도 신청 페이지 없이 <b>채널톡 채팅 상담</b></div></div>
  ${secTitle("1", "기간 전 응대",null,"secBefore")}
  ${macro(D_COCODAUM["cocodaum_100refund__001"].name, D_COCODAUM["cocodaum_100refund__001"].tag, D_COCODAUM["cocodaum_100refund__001"].body, D_COCODAUM["cocodaum_100refund__001"].desc)}
  ${guide(`① 어드민 메모·상담이력·<a href="https://docs.google.com/spreadsheets/d/1t7Oa-rKPY2aYgphNugE5K5gMCP7Hn3joaJYp-bbh7Jw/edit?gid=607872003#gid=607872003" target="_blank">[전브랜드] 100% 환불 이벤트 이용 LIST</a> 등을 통해 100% 환불 이벤트 신청 이력 확인<br>② imweb·물류센터(<a href="https://seller.poomgo.com/login?redirect=%2F" target="_blank">품고</a> 또는 정석)·배송 택배사(CJ대한통운) 등을 통해 배송완료일자 확인`)}
  ${macro(D_COCODAUM["cocodaum_100refund__002"].name, D_COCODAUM["cocodaum_100refund__002"].tag, D_COCODAUM["cocodaum_100refund__002"].body, D_COCODAUM["cocodaum_100refund__002"].desc)}
  ${macro(D_COCODAUM["cocodaum_100refund__003"].name, D_COCODAUM["cocodaum_100refund__003"].tag, D_COCODAUM["cocodaum_100refund__003"].body, D_COCODAUM["cocodaum_100refund__003"].desc)}
  <div class="grp-h">b. 고객 2차 미수긍 — 아래 두 유형 중 선택</div>
  <div class="grid2">${subcard(D_COCODAUM["cocodaum_100refund__004"].name, D_COCODAUM["cocodaum_100refund__004"].tag, D_COCODAUM["cocodaum_100refund__004"].body, D_COCODAUM["cocodaum_100refund__004"].desc)}${subcard(D_COCODAUM["cocodaum_100refund__005"].name, D_COCODAUM["cocodaum_100refund__005"].tag, D_COCODAUM["cocodaum_100refund__005"].body, D_COCODAUM["cocodaum_100refund__005"].desc)}</div>
  <div class="grp-h">c. 고객 3차 미수긍</div>
  <div class="grid2">${subcard(D_COCODAUM["cocodaum_100refund__006"].name, D_COCODAUM["cocodaum_100refund__006"].tag, D_COCODAUM["cocodaum_100refund__006"].body, D_COCODAUM["cocodaum_100refund__006"].desc)}${subcard(D_COCODAUM["cocodaum_100refund__007"].name, D_COCODAUM["cocodaum_100refund__007"].tag, D_COCODAUM["cocodaum_100refund__007"].body, D_COCODAUM["cocodaum_100refund__007"].desc)}</div>
  ${secTitle("2", "기간 경과 응대",null,"secAfter")}
  ${macro(D_COCODAUM["cocodaum_100refund__008"].name, D_COCODAUM["cocodaum_100refund__008"].tag, D_COCODAUM["cocodaum_100refund__008"].body, D_COCODAUM["cocodaum_100refund__008"].desc)}
  ${secTitle("3", "기간 내 응대",null,"secWithin")}
  ${macro(D_COCODAUM["cocodaum_100refund__009"].name, D_COCODAUM["cocodaum_100refund__009"].tag, D_COCODAUM["cocodaum_100refund__009"].body, D_COCODAUM["cocodaum_100refund__009"].desc)}
  ${guide(`① 어드민 메모·상담이력·<a href="https://docs.google.com/spreadsheets/d/1t7Oa-rKPY2aYgphNugE5K5gMCP7Hn3joaJYp-bbh7Jw/edit?gid=607872003#gid=607872003" target="_blank">[전브랜드] 100% 환불 이벤트 이용 LIST</a> 등을 통해 100% 환불 이벤트 신청 이력 확인<br>② imweb·물류센터(<a href="https://seller.poomgo.com/login?redirect=%2F" target="_blank">품고</a> 또는 정석)·배송 택배사(CJ대한통운) 등을 통해 배송완료일자 확인`)}
  ${macro(D_COCODAUM["cocodaum_100refund__010"].name, D_COCODAUM["cocodaum_100refund__010"].tag, D_COCODAUM["cocodaum_100refund__010"].body, D_COCODAUM["cocodaum_100refund__010"].desc)}
  ${secMajor("💯","100%환불이벤트 접수","자사몰 ONLY","secAccept")}
  ${secTitle("🟢","유형별 기준","자사몰 ONLY","secRef")}
  ${notice([
 "대외민원(소보원 등), 언론·SNS 제보 등 크리티컬 키워드 언급 및 불량·부작용 건과 복합 케이스 등 엣지 케이스가 아닌 경우, 100% 환불 이벤트 기간 전 선적용은 원칙적으로 <b>불가</b>",
 "100% 환불 이벤트 중복 참여는 어떠한 경우에도 <b>불가</b> (예외 적용 불가)",
 "네이버페이·스마트스토어는 어드민에서 반품 배송비 차감 설정이 불가하므로, 고객이 직접 반품 접수한 경우에만 배송비 차감 가능",
 "네이버페이 구매확정 건은 아임웹에서 즉시 취소가 불가하므로, [자사/외부몰] 통합 교환·반품 관리 시트에 취합 후 네이버 어드민에서 직접 취소"
])}
  <div class="cmp-table-wrap"><table class="cmp-table"><thead><tr><th class="cmp-corner">구분</th><th>세부</th><th class="cmp-blue">상세 조건</th><th class="cmp-pink">예시</th></tr></thead><tbody><tr><td class="cmp-row-label">① 상품 1개 단품</td><td>–</td><td>· 100%환불이벤트 기준 부합 시 적용 가능</td><td>다시 편안 스틱 1</td></tr><tr><td class="cmp-row-label" rowspan="2">② 동일 상품 2개 이상</td><td>a. 체험 1개만 사용</td><td>· 미사용(미작동) 제품도 환불 요청 시 전체 환불 가능</td><td>다시 편안 스틱 1+1 → 2개 모두 미개봉 &amp; 미사용</td></tr><tr><td>b. 체험 외 추가 사용</td><td>· 무료 체험은 1개만 적용 가능<br>· 나머지 사용(작동) 제품은 환불 불가<br>· 개봉/손상 상품은 상품 수만큼 차감 후 환불<br>※ 차감 기준 : 자사몰 1개 정가</td><td>다시 편안 스틱 1+1 → 1개 100%환불 신청 → 그 외 1개 추가 개봉·사용</td></tr><tr><td class="cmp-row-label">③ 세트 상품</td><td>–</td><td>· 각 상품 모두 개봉 시에도 전액 환불 가능</td><td>치카포카펜 1 + 치카포카펜 1 → 개봉·사용 여부 무관</td></tr><tr><td class="cmp-row-label" rowspan="2">④ 기타 유형</td><td>a. 여러 주문번호로 각각 구매</td><td>· 세트 구성이 아닌 개별 주문 건, 주문 1건에만 적용</td><td>4/12 다시 편안 스틱 1 · 4/13 치카포카펜 1 (각각 주문)</td></tr><tr><td>b. 동일 주문번호이나 세트구성 아님</td><td>· 개별 구성 주문건, 체험 상품 1개에만 적용<br>※ 그 외 제품 미개봉·무손상 시 단순변심 반품 가능</td><td>한 주문번호에 치카포카펜1 + 치카포카펜1 각각 담아 결제</td></tr></tbody></table></div>
  ${secTitle("1","상품 1개 단품",null,"secSingle")}
  ${col("blue","반품 배송비 안내",
subcard(D_COCODAUM["cocodaum_100refund__011"].name, D_COCODAUM["cocodaum_100refund__011"].tag, D_COCODAUM["cocodaum_100refund__011"].body, D_COCODAUM["cocodaum_100refund__011"].desc) + subcard(D_COCODAUM["cocodaum_100refund__012"].name, D_COCODAUM["cocodaum_100refund__012"].tag, D_COCODAUM["cocodaum_100refund__012"].body, D_COCODAUM["cocodaum_100refund__012"].desc)
)}
  ${guide(`→ 입금자명·입금금액 확인 후 IBK 기업은행 계좌 조회
🔗 IBK기업은행 : https://www.ibk.co.kr/`)}
  ${col("blue","포장 및 회수 안내",
subcard(D_COCODAUM["cocodaum_100refund__013"].name, D_COCODAUM["cocodaum_100refund__013"].tag, D_COCODAUM["cocodaum_100refund__013"].body, D_COCODAUM["cocodaum_100refund__013"].desc)
 + guide(`🎁 증정품 회수 O`))}
  ${secTitle("2","동일 상품 2개 이상 (1+1 포함)",null,"secMulti")}
  ${macro(D_COCODAUM["cocodaum_100refund__014"].name, D_COCODAUM["cocodaum_100refund__014"].tag, D_COCODAUM["cocodaum_100refund__014"].body, D_COCODAUM["cocodaum_100refund__014"].desc)}
  <div class="grid2">${col("pink","a. 체험 제품 1개만 사용 (부분)",
subcard(D_COCODAUM["cocodaum_100refund__015"].name, D_COCODAUM["cocodaum_100refund__015"].tag, D_COCODAUM["cocodaum_100refund__015"].body, D_COCODAUM["cocodaum_100refund__015"].desc) + subcard(D_COCODAUM["cocodaum_100refund__016"].name, D_COCODAUM["cocodaum_100refund__016"].tag, D_COCODAUM["cocodaum_100refund__016"].body, D_COCODAUM["cocodaum_100refund__016"].desc) + subcard(D_COCODAUM["cocodaum_100refund__017"].name, D_COCODAUM["cocodaum_100refund__017"].tag, D_COCODAUM["cocodaum_100refund__017"].body, D_COCODAUM["cocodaum_100refund__017"].desc) + guide(`🎁 증정품 회수 X`)
)}${col("blue","b. 체험 1개 외 추가 사용",
subcard(D_COCODAUM["cocodaum_100refund__018"].name, D_COCODAUM["cocodaum_100refund__018"].tag, D_COCODAUM["cocodaum_100refund__018"].body, D_COCODAUM["cocodaum_100refund__018"].desc) + subcard(D_COCODAUM["cocodaum_100refund__019"].name, D_COCODAUM["cocodaum_100refund__019"].tag, D_COCODAUM["cocodaum_100refund__019"].body, D_COCODAUM["cocodaum_100refund__019"].desc) + subcard(D_COCODAUM["cocodaum_100refund__020"].name, D_COCODAUM["cocodaum_100refund__020"].tag, D_COCODAUM["cocodaum_100refund__020"].body, D_COCODAUM["cocodaum_100refund__020"].desc) + subcard(D_COCODAUM["cocodaum_100refund__021"].name, D_COCODAUM["cocodaum_100refund__021"].tag, D_COCODAUM["cocodaum_100refund__021"].body, D_COCODAUM["cocodaum_100refund__021"].desc) + '<div class="note-tight">' + guide(`🎁 증정품 회수 X`) + guide(`- 체험 1개 외 1개 추가 개봉 → 개봉 제품 2개 중 1개는 고객 부담, 반품 배송비 6,000원 부담
- n개 추가 개봉 → n개-1 (1개는 100% 환불 적용) 만큼 차감
※ 상품 차감 기준 : 자사몰 1개 정가 기준`) + '</div>'
)}</div>
  ${macro(D_COCODAUM["cocodaum_100refund__022"].name, D_COCODAUM["cocodaum_100refund__022"].tag, D_COCODAUM["cocodaum_100refund__022"].body, D_COCODAUM["cocodaum_100refund__022"].desc)}
  ${guide(`💡 반품/교환 접수 시 <a href="https://docs.google.com/spreadsheets/d/1t7Oa-rKPY2aYgphNugE5K5gMCP7Hn3joaJYp-bbh7Jw/edit?gid=1012913860#gid=1012913860" target="_blank">[자사/외부몰] 통합 교환/반품 관리</a> 시트 리스트업 필수 (→ 후처리 관리 시트 통합 가이드 참고)

🟢 동일 상품 2개 이상 구매 후 1개만 체험하고 나머지가 미개봉인 경우
→ 전체 환불 가능. 미개봉 상품은 단순 변심 기간이 지났더라도 예외 반품 가능하며, 주문 건별 확인 필요`)}
  ${secTitle("3","세트 상품",null,"secSet")}
  ${macro(D_COCODAUM["cocodaum_100refund__023"].name, D_COCODAUM["cocodaum_100refund__023"].tag, D_COCODAUM["cocodaum_100refund__023"].body, D_COCODAUM["cocodaum_100refund__023"].desc)}
  ${col("blue","반품 배송비 안내",
subcard(D_COCODAUM["cocodaum_100refund__024"].name, D_COCODAUM["cocodaum_100refund__024"].tag, D_COCODAUM["cocodaum_100refund__024"].body, D_COCODAUM["cocodaum_100refund__024"].desc) + subcard(D_COCODAUM["cocodaum_100refund__025"].name, D_COCODAUM["cocodaum_100refund__025"].tag, D_COCODAUM["cocodaum_100refund__025"].body, D_COCODAUM["cocodaum_100refund__025"].desc)
)}${col("blue","포장 및 회수 안내",
subcard(D_COCODAUM["cocodaum_100refund__026"].name, D_COCODAUM["cocodaum_100refund__026"].tag, D_COCODAUM["cocodaum_100refund__026"].body, D_COCODAUM["cocodaum_100refund__026"].desc)
 + guide(`🎁 증정품 회수 O`))}
  ${secTitle("4","기타 유형",null,"secExc")}
  <div class="grp-h">⚠️ 전액 환불 불가 안내</div>
  <div class="grid2">${col("blue","a. 여러 주문번호로 각각 구매",
subcard(D_COCODAUM["cocodaum_100refund__027"].name, D_COCODAUM["cocodaum_100refund__027"].tag, D_COCODAUM["cocodaum_100refund__027"].body, D_COCODAUM["cocodaum_100refund__027"].desc)
)}${col("pink","b. 동일 주문번호이나 세트구성 아님",
subcard(D_COCODAUM["cocodaum_100refund__028"].name, D_COCODAUM["cocodaum_100refund__028"].tag, D_COCODAUM["cocodaum_100refund__028"].body, D_COCODAUM["cocodaum_100refund__028"].desc)
)}</div>
  ${secTitle("💳","[공통] 환불 안내","모든 구성 공통","secCommon")}
  ${macro(D_COCODAUM["cocodaum_100refund__029"].name, D_COCODAUM["cocodaum_100refund__029"].tag, D_COCODAUM["cocodaum_100refund__029"].body, D_COCODAUM["cocodaum_100refund__029"].desc)}
  <div class="grid2">
${col("blue","환불 안내 (카드 · 삼성페이 · 네이버페이)",
subcard(D_COCODAUM["cocodaum_100refund__030"].name, D_COCODAUM["cocodaum_100refund__030"].tag, D_COCODAUM["cocodaum_100refund__030"].body, D_COCODAUM["cocodaum_100refund__030"].desc)
)}
${col("blue","환불 안내 (계좌 · 무통장/가상계좌)",
subcard(D_COCODAUM["cocodaum_100refund__031"].name, D_COCODAUM["cocodaum_100refund__031"].tag, D_COCODAUM["cocodaum_100refund__031"].body, D_COCODAUM["cocodaum_100refund__031"].desc) + subcard(D_COCODAUM["cocodaum_100refund__032"].name, D_COCODAUM["cocodaum_100refund__032"].tag, D_COCODAUM["cocodaum_100refund__032"].body, D_COCODAUM["cocodaum_100refund__032"].desc)
)}
</div>
  ${guide(`※ '네이버페이-구매확정' 건은 아임웹에서 반품 접수로 변경 불가 → <a href="https://docs.google.com/spreadsheets/d/1t7Oa-rKPY2aYgphNugE5K5gMCP7Hn3joaJYp-bbh7Jw/edit?gid=1012913860#gid=1012913860" target="_blank">[자사/외부몰] 통합 교환/반품 관리</a> 내역과 관리자메모 확인 후 처리
b. 계좌 환불 : flex - 워크플로우 - 지출결의서 사업자별 등록`)}
`;

const COCODAUM_SIDE = `

  <h1>🚨 부작용 VOC</h1>
    <div class="sub">제품 사용 후 이상 증상·트러블 등 VOC 응대 (자사몰/외부몰)</div>
    <div class="sub-ex">예) 급여 후 이상 증상(구토·설사 등) · 사용 후 피부 트러블·이상 반응 등이 코코다움 제품으로 인해 발생했다고 인정되는 경우</div>

  ${secTitle("🧭","상담 플로우",null,"secFlow")}
  ${caution(`🚨 보상금 요구 여부에 따라 Edge Case로 분류되므로, [📌 <a href="https://docs.google.com/spreadsheets/d/1a-hNnO4f-TUJ0n4maDUh3xxmzwBW9XwJW-Z5OKZU0r8/edit?pli=1&amp;gid=1968732770#gid=1968732770" target="_blank">고객 보상&Critical Issue 처리 Process 시트</a>]를 참고하여 진행`)}
  <div class="grp-h">공통 플로우</div>
  <div class="flow-diagram"><div class="fd-box">1. 선제적 사과 멘트</div><div class="fd-arrow">▶</div><div class="fd-box">2. 상품 안내 및 재확인</div></div>
  <div class="fork"><div class="fork-branch"><span class="fork-label">🔹 수긍</span><div class="flow-diagram"><div class="fd-box">상담 종료 유도</div><div class="fd-arrow">▶</div><div class="fd-box">VOC 종결</div></div></div><div class="fork-branch b2"><span class="fork-label">🔹 미수긍</span><div class="flow-diagram"><div class="fd-box">3. 포장 및 회수 안내</div><div class="fd-arrow">▶</div><div class="fd-box">4. 결제수단별 환불 안내</div></div></div></div>
  <div style="margin:8px 0 4px 2px;font-size:12px;color:#8a6d1a">⚠️ 병원 진료·진료비 보상 요청 등 클레임/민원 발생 시 → 아래 [예외케이스] 그룹 참고</div>

  ${secTitle("1","선제적 사과 멘트",null,"sec_apology")}
  ${macro(D_COCODAUM["cocodaum_side__001"].name, D_COCODAUM["cocodaum_side__001"].tag, D_COCODAUM["cocodaum_side__001"].body, D_COCODAUM["cocodaum_side__001"].desc)}
  ${secTitle("2","상품 안내 및 재확인",null,"sec_env")}
  ${caution(`제품군에 따라 확인·안내 내용이 다릅니다`)}
  <div class="grid2">${col("gray","🔹 식품 · 스틱 유형",
subcard(D_COCODAUM["cocodaum_side__002"].name, D_COCODAUM["cocodaum_side__002"].tag, D_COCODAUM["cocodaum_side__002"].body, D_COCODAUM["cocodaum_side__002"].desc))}${col("gray","🔹 식품 · 파우더 유형",
subcard(D_COCODAUM["cocodaum_side__003"].name, D_COCODAUM["cocodaum_side__003"].tag, D_COCODAUM["cocodaum_side__003"].body, D_COCODAUM["cocodaum_side__003"].desc))}</div>
  <div class="grid2">${col("blue","🔹 수긍",
subcard(D_COCODAUM["cocodaum_side__004"].name, D_COCODAUM["cocodaum_side__004"].tag, D_COCODAUM["cocodaum_side__004"].body, D_COCODAUM["cocodaum_side__004"].desc)
)}
${col("pink","🔹 미수긍",
subcard(D_COCODAUM["cocodaum_side__005"].name, D_COCODAUM["cocodaum_side__005"].tag, D_COCODAUM["cocodaum_side__005"].body, D_COCODAUM["cocodaum_side__005"].desc)
)}
</div>
  ${secTitle("3","포장 및 회수 안내",null,"sec_pack")}
  ${macro(D_COCODAUM["cocodaum_side__006"].name, D_COCODAUM["cocodaum_side__006"].tag, D_COCODAUM["cocodaum_side__006"].body, D_COCODAUM["cocodaum_side__006"].desc)}
  ${secTitle("4","결제수단별 환불 안내",null,"sec_refund")}
  <div class="grid2">
${col("blue","환불 안내 (카드·삼성페이·네이버페이)",
subcard(D_COCODAUM["cocodaum_side__007"].name, D_COCODAUM["cocodaum_side__007"].tag, D_COCODAUM["cocodaum_side__007"].body, D_COCODAUM["cocodaum_side__007"].desc)
)}
${col("blue","환불 안내 (계좌·무통장/가상계좌)",
subcard(D_COCODAUM["cocodaum_side__008"].name, D_COCODAUM["cocodaum_side__008"].tag, D_COCODAUM["cocodaum_side__008"].body, D_COCODAUM["cocodaum_side__008"].desc) + subcard(D_COCODAUM["cocodaum_side__009"].name, D_COCODAUM["cocodaum_side__009"].tag, D_COCODAUM["cocodaum_side__009"].body, D_COCODAUM["cocodaum_side__009"].desc)
)}
</div>
  ${secTitle("🔺","[예외케이스] 클레임/민원/보상 요청",null,"sec_exception")}
  ${caution(`예) 부작용으로 인한 병원 진료, 진료비 보상 요청 or 부작용 정도가 심하여 진료비 보상 요청`)}
  ${macro(D_COCODAUM["cocodaum_side__010"].name, D_COCODAUM["cocodaum_side__010"].tag, D_COCODAUM["cocodaum_side__010"].body, D_COCODAUM["cocodaum_side__010"].desc)}
  ${macro(D_COCODAUM["cocodaum_side__011"].name, D_COCODAUM["cocodaum_side__011"].tag, D_COCODAUM["cocodaum_side__011"].body, D_COCODAUM["cocodaum_side__011"].desc)}
  ${macro(D_COCODAUM["cocodaum_side__012"].name, D_COCODAUM["cocodaum_side__012"].tag, D_COCODAUM["cocodaum_side__012"].body, D_COCODAUM["cocodaum_side__012"].desc)}
  ${caution(`*️⃣ 고객 서류 미수긍/지속 보상 요구 시\n★ 구매 제품 전액 환불까지는 예외처리로 진행하고 있기에 서류 없이 보상은 불가`)}
  ${secTitle("💠","[공통] 서류 제출 후",null,"sec_submit")}
  ${macro(D_COCODAUM["cocodaum_side__013"].name, D_COCODAUM["cocodaum_side__013"].tag, D_COCODAUM["cocodaum_side__013"].body, D_COCODAUM["cocodaum_side__013"].desc)}
  ${macro(D_COCODAUM["cocodaum_side__014"].name, D_COCODAUM["cocodaum_side__014"].tag, D_COCODAUM["cocodaum_side__014"].body, D_COCODAUM["cocodaum_side__014"].desc)}
`;

const COCODAUM_DEFECT = `

  <h1>🔧 불량 교환/반품</h1>
    <div class="sub">제품 파손·작동불량·변질 등 불량 교환/반품 CS 응대(자사몰/외부몰)</div>
    <div class="sub-ex">예) 퓨레·파우더가 굳거나 변색되어 있거나, 스틱 파우치가 찢어져 있거나, 치카포카펜 다이얼이 작동하지 않는 등 제품 불량이 확인되는 경우</div>

  ${secTitle("🧭","상담 플로우",null,"secFlow")}
  <div class="flow-diagram"><div class="fd-box">1. 불량 유형 확인</div><div class="fd-arrow">▶</div><div class="fd-box">2. 사진·영상 증빙 요청</div><div class="fd-arrow">▶</div><div class="fd-box">3. 불량 인정/미인정 분기</div><div class="fd-arrow">▶</div><div class="fd-box">4. 포장 및 회수 안내</div><div class="fd-arrow">▶</div><div class="fd-box">5. 교환 : 재출고 일정 안내<br>반품 : 환불 일정 안내</div></div>

  ${secTitle("1","불량 유형 확인",null,"sec_type")}
  <table class="astbl"><thead><tr><th>제품유형</th><th>대표 불량 유형</th></tr></thead><tbody><tr><td style="width:260px">다시 편안 스틱(퓨레형)</td><td>퓨레 굳음·변질·색변화</td></tr><tr><td style="width:260px">다시 편안 스틱 / 다시 초롱 파우더</td><td>스틱 파손·씰링 불량(내용물 샘)</td></tr><tr><td rowspan="2" style="width:260px">치카포카펜</td><td>다이얼 디스펜서 작동 불량(안 돌아감·젤 안 나옴)</td></tr><tr><td style="width:auto;font-weight:400;background:#fff;">실리콘 칫솔모 파손·이탈</td></tr></tbody></table>
  <div class="quote-box"><b>📌 신규 불량 유형 확인 및 상품팀 문의 프로세스</b>

✔️ 동일·유사 사례가 있는 경우
→ Slack #ask_상품 채널에서 동일하거나 유사한 문의 이력이 있는지 먼저 확인
→ 기존에 협의된 처리 방안이 있다면 동일 기준으로 안내
→ 지속 관리 중인 Case(상품팀 공유 지속, 리스트업 진행 등)인 경우 기존 프로세스에 따라 이어서 진행

✔️ 최초 발생 유형인 경우
→ 고객이 전달한 사진·영상 등 증빙 자료를 첨부하여 「상품전략팀·상품팀↔CX팀 협업 프로세스」 양식으로 문의합니다.
→ 문의 시 고객 증상, 발생 상황, 주문 정보, 상담 내용 등을 함께 작성하여 전달합니다.
📑 Slack 문의 양식 : <a href="https://app.notion.com/p/CX-295d64378d488024820af68dc6ea62c2?source=copy_link#2e3d64378d4880a8b3cbf3f27e1a0eba" target="_blank">SOP 상품전략팀·상품팀↔CX팀 협업 프로세스(CX팀 → 상품전략팀·상품팀)</a> 참고</div>
  ${caution(`💡 아래 유형별 증빙 요청·인정/미인정 문구는 초안이며, 실제 CS 접수 사례가 누적되면 세부 문구는 보완될 수 있음. (근거: 브랜드 공식몰 현재 판매 상품 기준 + 구 CS템플릿 PDF 참고)`)}

  ${secTitle("2","불량 유형별 증빙·인정 안내",null,"sec_evid")}
  <div class="quote-box"><b>⚠️ 상품 수령일로부터 영업일 7일 이내 문의 시에만 처리 가능</b><br><span style="font-weight:500;font-size:13px;">※ 단, 변질·굳음·결로 유형은 예외 — 미개봉 보관 + 보관주의사항 준수 시 7일 경과 후에도 확인 후 처리(아래 해당 유형별 안내 참고)</span></div>
  <div class="grp-h">1. 다시 편안 스틱(퓨레형) — 퓨레 굳음·변질·색변화</div>
  ${macro(D_COCODAUM["cocodaum_as__001"].name, D_COCODAUM["cocodaum_as__001"].tag, D_COCODAUM["cocodaum_as__001"].body, D_COCODAUM["cocodaum_as__001"].desc)}
  <div class="grid2">
${col("blue","🔹 불량 인정 시",
subcard(D_COCODAUM["cocodaum_as__002"].name, D_COCODAUM["cocodaum_as__002"].tag, D_COCODAUM["cocodaum_as__002"].body, D_COCODAUM["cocodaum_as__002"].desc)
)}
${col("pink","🔹 불량 미인정(정상 판정) 시",
subcard(D_COCODAUM["cocodaum_as__003"].name, D_COCODAUM["cocodaum_as__003"].tag, D_COCODAUM["cocodaum_as__003"].body, D_COCODAUM["cocodaum_as__003"].desc)
)}
</div>
  ${caution(`🕐 [7일 룰 예외] 변질·굳음·결로는 개봉 전에는 확인이 불가능한 유형이므로, 수령일로부터 7일이 경과했더라도 <b>미개봉 상태로 보관</b>했고 <b>보관주의사항을 준수</b>한 경우라면 접수 후 확인하여 처리함(7일 경과를 이유로 즉시 처리 불가 안내하지 않음).`)}
  ${caution(`📝 근거/비고: 구버전 PDF에도 '파우더는 습도에 민감, 개봉 후 굳음·결로 가능, 급여 지장 없음' 문구 있어 참고. 퓨레형에도 동일 특성 적용.`)}

  <div class="grp-h">2. 다시 편안 스틱 / 다시 초롱 파우더 — 스틱 파손·씰링 불량(내용물 샘)</div>
  ${macro(D_COCODAUM["cocodaum_as__004"].name, D_COCODAUM["cocodaum_as__004"].tag, D_COCODAUM["cocodaum_as__004"].body, D_COCODAUM["cocodaum_as__004"].desc)}
  <div class="grid2">
${col("blue","🔹 불량 인정 시",
subcard(D_COCODAUM["cocodaum_as__005"].name, D_COCODAUM["cocodaum_as__005"].tag, D_COCODAUM["cocodaum_as__005"].body, D_COCODAUM["cocodaum_as__005"].desc)
)}
${col("pink","🔹 불량 미인정(정상 판정) 시",
subcard(D_COCODAUM["cocodaum_as__006"].name, D_COCODAUM["cocodaum_as__006"].tag, D_COCODAUM["cocodaum_as__006"].body, D_COCODAUM["cocodaum_as__006"].desc)
)}
</div>
  ${caution(`📝 근거/비고: 퓨레형은 액상이라 씰링 불량 시 누출 가능성 있어 파우더형보다 접수 빈도 높을 수 있음.`)}

  <div class="grp-h">3. 치카포카펜 — 다이얼 디스펜서 작동 불량(안 돌아감·젤 안 나옴)</div>
  ${macro(D_COCODAUM["cocodaum_as__007"].name, D_COCODAUM["cocodaum_as__007"].tag, D_COCODAUM["cocodaum_as__007"].body, D_COCODAUM["cocodaum_as__007"].desc)}
  <div class="grid2">
${col("blue","🔹 불량 인정 시",
subcard(D_COCODAUM["cocodaum_as__008"].name, D_COCODAUM["cocodaum_as__008"].tag, D_COCODAUM["cocodaum_as__008"].body, D_COCODAUM["cocodaum_as__008"].desc)
)}
${col("pink","🔹 불량 미인정(정상 판정) 시",
subcard(D_COCODAUM["cocodaum_as__009"].name, D_COCODAUM["cocodaum_as__009"].tag, D_COCODAUM["cocodaum_as__009"].body, D_COCODAUM["cocodaum_as__009"].desc)
)}
</div>
  ${caution(`📝 근거/비고: '치카포카펜'은 다이얼을 돌려 젤 치약을 밀어내는 구조. 최초 사용 시 프라이밍 필요해 오상담 가능성 있어 '정상' 분기 추가.`)}

  <div class="grp-h">4. 치카포카펜 — 실리콘 칫솔모 파손·이탈</div>
  ${macro(D_COCODAUM["cocodaum_as__010"].name, D_COCODAUM["cocodaum_as__010"].tag, D_COCODAUM["cocodaum_as__010"].body, D_COCODAUM["cocodaum_as__010"].desc)}
  <div class="grid2">
${col("blue","🔹 불량 인정 시",
subcard(D_COCODAUM["cocodaum_as__011"].name, D_COCODAUM["cocodaum_as__011"].tag, D_COCODAUM["cocodaum_as__011"].body, D_COCODAUM["cocodaum_as__011"].desc)
)}
${col("pink","🔹 불량 미인정(정상 판정) 시",
subcard(D_COCODAUM["cocodaum_as__012"].name, D_COCODAUM["cocodaum_as__012"].tag, D_COCODAUM["cocodaum_as__012"].body, D_COCODAUM["cocodaum_as__012"].desc)
)}
</div>
  ${caution(`📝 근거/비고: 실리콘 브러시 일체형 구조 특유의 유형.`)}

  ${secTitle("3","포장 및 회수 안내",null,"sec_pack")}
  ${macro(D_COCODAUM["cocodaum_as__013"].name, D_COCODAUM["cocodaum_as__013"].tag, D_COCODAUM["cocodaum_as__013"].body, D_COCODAUM["cocodaum_as__013"].desc)}
  ${caution(`📝 [통합판] 브랜드 내에서도 식품류·용품류 두 카테고리에 걸쳐 있어, 카테고리 라벨만 구분해 표기(브랜드별 세부 문구 아님).`)}

  ${secTitle("4","교환/반품 안내",null,"sec_refund")}
  <div class="grid2">
${col("blue","🔹 교환 시 — 재출고 일정 안내",
`<div class="quote-box"><b>⚠️ 유의사항</b>\n① 접수 시간 기준으로 안내 필요\n② 불량으로 인한 재출고는 회수 접수와 동시에 재출고 접수</div>` +
subcard(D_COCODAUM["cocodaum_as__014"].name, D_COCODAUM["cocodaum_as__014"].tag, D_COCODAUM["cocodaum_as__014"].body, D_COCODAUM["cocodaum_as__014"].desc) +
subcard(D_COCODAUM["cocodaum_as__015"].name, D_COCODAUM["cocodaum_as__015"].tag, D_COCODAUM["cocodaum_as__015"].body, D_COCODAUM["cocodaum_as__015"].desc) +
subcard(D_COCODAUM["cocodaum_as__016"].name, D_COCODAUM["cocodaum_as__016"].tag, D_COCODAUM["cocodaum_as__016"].body, D_COCODAUM["cocodaum_as__016"].desc)
)}
${col("pink","🔹 반품 시 — 결제수단별 환불 안내",
subcard(D_COCODAUM["cocodaum_as__017"].name, D_COCODAUM["cocodaum_as__017"].tag, D_COCODAUM["cocodaum_as__017"].body, D_COCODAUM["cocodaum_as__017"].desc) + subcard(D_COCODAUM["cocodaum_as__018"].name, D_COCODAUM["cocodaum_as__018"].tag, D_COCODAUM["cocodaum_as__018"].body, D_COCODAUM["cocodaum_as__018"].desc) + subcard(D_COCODAUM["cocodaum_as__019"].name, D_COCODAUM["cocodaum_as__019"].tag, D_COCODAUM["cocodaum_as__019"].body, D_COCODAUM["cocodaum_as__019"].desc)
)}
</div>

`;




const COCODAUM_REFUND = `
  <h1>🔄 단순변심 반품</h1>
  <div class="sub">고객 변심에 의한 반품 · 유형별 응대</div>

  ${secTitle("💡","기준 및 조건",null,"secGuide")}
  ${cmpTable(
    [{cls:"blue",label:"🔹 전체 반품"},{cls:"pink",label:"🔹 부분 반품"}],
    [
      {label:"조건", values:[
        "구매 제품 전체 미사용<br>미개봉 또는 개봉했으나 미사용<br>(예: 박스만 열어보고 다시 닫음)",
        "2개 이상 구매 후 일부만 개봉(사용)<br>(예: 2개 구매 후 1개만 개봉·급여 시, 미개봉 제품만 부분 반품)"
      ]},
      {label:"반품 배송비", values:["6,000원","3,000원"]},
      {label:"회수 품목", values:[
        "모든 구성품 + 증정품 포함",
        "사용(개봉) 제품 제외, 미사용(미개봉) 제품과 그 구성품만 회수"
      ]}
    ]
  )}
  <div class="grp-h">🧭 상담 플로우</div>
  <div class="flow-diagram"><div class="fd-box">1. 7일 경과 여부 및 사유 확인</div><div class="fd-arrow">▶</div><div class="fd-box">2. 반품 배송비 안내</div><div class="fd-arrow">▶</div><div class="fd-box">3. 포장 및 회수 안내</div><div class="fd-arrow">▶</div><div class="fd-box">4. 결제수단별 환불 안내</div></div>
  ${notice([
    "<b>개봉 후 급여한 제품은 '사용 제품'으로 간주되어 단순변심 반품 불가.</b>",
    "네이버페이·스마트스토어는 어드민에서 반품 배송비 차감 설정 <b>불가</b> → 고객이 직접 반품 접수 시에만 차감 가능",
    `네이버페이-구매확정 건은 아임웹에서 즉시 취소 불가 → <a href="https://docs.google.com/spreadsheets/d/1t7Oa-rKPY2aYgphNugE5K5gMCP7Hn3joaJYp-bbh7Jw/edit?gid=1012913860#gid=1012913860" target="_blank">[자사/외부몰] 통합 교환/반품 관리</a> 시트에 취합 후 네이버 어드민에서 직접 취소`
  ])}

  ${secTitle("1", "7일 경과 여부 및 사유 확인","전체·부분 공통","sec1")}
  <div class="grid2">
    ${colTag("gray","수령일로부터 7일 이내","반품교환_7일이내_사유확인",
`반품을 원하시는 사유가 어떻게 되실까요? :)
개봉 후 사용하지 않은 제품은 반품 가능하지만, 사용한 제품은 반품이 어려운 점 참고 부탁드려요.
제품 사용 여부도 함께 확인 부탁드려요.`)}
    ${colTag("gray","수령일로부터 7일 경과","단순반품_7일경과_사유확인",
`단순 변심에 의한 반품·교환은 배송 완료일로부터 7일 이내에만 신청이 가능합니다.
현재는 신청 가능 기간이 경과되어 도움드리기 어려운 점 양해 부탁드려요.`)}
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

  ${secTitle("2", "반품 배송비 안내",null,"sec2")}
  <div class="grid2">
    ${col("blue","🔹 전체 반품",
      subcard(D_COCODAUM["cocodaum_refund__001"].name, D_COCODAUM["cocodaum_refund__001"].tag, D_COCODAUM["cocodaum_refund__001"].body, D_COCODAUM["cocodaum_refund__001"].desc)
      + subcard(D_COCODAUM["cocodaum_refund__002"].name, D_COCODAUM["cocodaum_refund__002"].tag, D_COCODAUM["cocodaum_refund__002"].body, D_COCODAUM["cocodaum_refund__002"].desc)
      + subcard(D_COCODAUM["cocodaum_refund__003"].name, D_COCODAUM["cocodaum_refund__003"].tag, D_COCODAUM["cocodaum_refund__003"].body, D_COCODAUM["cocodaum_refund__003"].desc)
    )}
    ${col("pink","🔹 부분 반품",
      subcard(D_COCODAUM["cocodaum_refund__004"].name, D_COCODAUM["cocodaum_refund__004"].tag, D_COCODAUM["cocodaum_refund__004"].body, D_COCODAUM["cocodaum_refund__004"].desc)
      + subcard(D_COCODAUM["cocodaum_refund__005"].name, D_COCODAUM["cocodaum_refund__005"].tag, D_COCODAUM["cocodaum_refund__005"].body, D_COCODAUM["cocodaum_refund__005"].desc)
      + subcard(D_COCODAUM["cocodaum_refund__006"].name, D_COCODAUM["cocodaum_refund__006"].tag, D_COCODAUM["cocodaum_refund__006"].body, D_COCODAUM["cocodaum_refund__006"].desc)
      + starNote("고객이 정가 차감에 미동의할 경우",
`구매하신 옵션은 1개 이상 구매 시 적용되는 구성입니다.
부분 반품 시 개봉된 상품 수량만큼 정상가로 간주되어 원물 금액에서 차감됩니다.
반품 전 꼭 확인 부탁드려요.`)
    )}
  </div>

  ${secTitle("3", "포장 및 회수 안내",null,"sec3")}
  <div class="grid2">
    ${col("blue","🔹 전체 반품",
      subcard(D_COCODAUM["cocodaum_refund__007"].name, D_COCODAUM["cocodaum_refund__007"].tag, D_COCODAUM["cocodaum_refund__007"].body, D_COCODAUM["cocodaum_refund__007"].desc)
      + caution(`🎁 증정품 회수 O`)
    )}
    ${col("pink","🔹 부분 반품",
      subcard(D_COCODAUM["cocodaum_refund__008"].name, D_COCODAUM["cocodaum_refund__008"].tag, D_COCODAUM["cocodaum_refund__008"].body, D_COCODAUM["cocodaum_refund__008"].desc)
      + caution(`🎁 증정품 회수 X`)
    )}
  </div>
  <div class="stack">
    ${col("gray","💡 복합 유형 (예: 불량 반품 + 단순변심 반품)",
      subcard(D_COCODAUM["cocodaum_refund__009"].name, D_COCODAUM["cocodaum_refund__009"].tag, D_COCODAUM["cocodaum_refund__009"].body, D_COCODAUM["cocodaum_refund__009"].desc)
    )}
  </div>
  <div class="grid2">
    ${subcard(D_COCODAUM["cocodaum_refund__011"].name, D_COCODAUM["cocodaum_refund__011"].tag, D_COCODAUM["cocodaum_refund__011"].body, D_COCODAUM["cocodaum_refund__011"].desc)}
  </div>

  ${secTitle("4", "결제수단별 환불 안내","전체·부분 공통","sec4")}
  <div class="grid2">
    ${col("blue","🔹 카드결제",
      subcard(D_COCODAUM["cocodaum_refund__012"].name, D_COCODAUM["cocodaum_refund__012"].tag, D_COCODAUM["cocodaum_refund__012"].body, D_COCODAUM["cocodaum_refund__012"].desc)
    )}
    ${col("blue","🔹 계좌 환불",
      subcard(D_COCODAUM["cocodaum_refund__013"].name, D_COCODAUM["cocodaum_refund__013"].tag, D_COCODAUM["cocodaum_refund__013"].body, D_COCODAUM["cocodaum_refund__013"].desc)
      + subcard(D_COCODAUM["cocodaum_refund__014"].name, D_COCODAUM["cocodaum_refund__014"].tag, D_COCODAUM["cocodaum_refund__014"].body, D_COCODAUM["cocodaum_refund__014"].desc)
    )}
  </div>
`;

const COCODAUM_EXCHANGE = `

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
  <div class="flow-diagram"><div class="fd-box">1. 교환 방식 안내 (전체 / 부분)</div><div class="fd-arrow">▶</div><div class="fd-box">2. 교환 배송비 안내</div><div class="fd-arrow">▶</div><div class="fd-box">3. 포장 및 회수 안내</div><div class="fd-arrow">▶</div><div class="fd-box">4. 검수 및 재출고 안내</div></div>
  ${notice(["미개봉 또는 개봉했으나 미사용한 경우에만 교환 가능","교환 제품 금액이 더 높은 경우 <b>차액 결제</b> 필요","교환은 회수 → 입고 → 검수 → 재출고 방식으로 <b>영업일 기준 6~8일</b> 소요"])}
  ${secTitle("1", "교환 방식 안내","전체·부분","sec1")}
  <div class="grid2">
${col("blue","🔹 전체 교환",
subcard(D_COCODAUM["cocodaum_exchange__001"].name, D_COCODAUM["cocodaum_exchange__001"].tag, D_COCODAUM["cocodaum_exchange__001"].body, D_COCODAUM["cocodaum_exchange__001"].desc)
)}
${col("pink","🔹 부분 교환",
subcard(D_COCODAUM["cocodaum_exchange__002"].name, D_COCODAUM["cocodaum_exchange__002"].tag, D_COCODAUM["cocodaum_exchange__002"].body, D_COCODAUM["cocodaum_exchange__002"].desc)
)}
</div>
  ${caution(`▶ (전체 교환) 고객이 반품 희망 시 → '단순변심 반품' 페이지로 이동하여 안내
▶ 교환 희망 시 → 2부터 진행`)}
  ${secTitle("2", "교환 배송비 안내","전체·부분","sec2")}
  <div class="grid2">
${col("blue","🔹 전체 교환",
subcard(D_COCODAUM["cocodaum_exchange__003"].name, D_COCODAUM["cocodaum_exchange__003"].tag, D_COCODAUM["cocodaum_exchange__003"].body, D_COCODAUM["cocodaum_exchange__003"].desc)
)}
${col("pink","🔹 부분 교환",
subcard(D_COCODAUM["cocodaum_exchange__004"].name, D_COCODAUM["cocodaum_exchange__004"].tag, D_COCODAUM["cocodaum_exchange__004"].body, D_COCODAUM["cocodaum_exchange__004"].desc) + subcard(D_COCODAUM["cocodaum_exchange__005"].name, D_COCODAUM["cocodaum_exchange__005"].tag, D_COCODAUM["cocodaum_exchange__005"].body, D_COCODAUM["cocodaum_exchange__005"].desc)
)}
</div>
  ${guide(`→ 입금자명·입금금액 확인 후 IBK 기업은행 계좌 조회
🔗 IBK기업은행 : https://www.ibk.co.kr/`)}
  ${secTitle("3", "포장 및 회수 안내","전체·부분","sec3")}
  <div class="grid2">
${col("blue","🔹 전체 교환",
subcard(D_COCODAUM["cocodaum_exchange__006"].name, D_COCODAUM["cocodaum_exchange__006"].tag, D_COCODAUM["cocodaum_exchange__006"].body, D_COCODAUM["cocodaum_exchange__006"].desc) + caution(`🎁 증정품 회수 O`)
)}
${col("pink","🔹 부분 교환",
subcard(D_COCODAUM["cocodaum_exchange__007"].name, D_COCODAUM["cocodaum_exchange__007"].tag, D_COCODAUM["cocodaum_exchange__007"].body, D_COCODAUM["cocodaum_exchange__007"].desc) + caution(`🎁 증정품 회수 X`)
)}
</div>
  <div class="warn-note">⚠️ 고객 동의 / 교환 배송비 입금 완료 후 진행</div>
  ${secTitle("4", "검수 및 재출고 안내","전체·부분 공통","sec4")}
  ${macro(D_COCODAUM["cocodaum_exchange__009"].name, D_COCODAUM["cocodaum_exchange__009"].tag, D_COCODAUM["cocodaum_exchange__009"].body, D_COCODAUM["cocodaum_exchange__009"].desc)}
  ${guide(`▶ 상품 수거·검수 후 이상 없을 시 <a href="https://docs.google.com/spreadsheets/d/1Bj5stx8hXMoPL8L91EYu6e5TA7pqEAjges4Cejs1wjo/edit?gid=388846546#gid=388846546" target="_blank">SCM-CX/CS팀 수기 시트</a>에 재출고 요청`)}
`;

/* === 단순변심 교환/반품 통합판 (2026-08-27) — 슬룸 SLM_MERGE_TEMPLATE 구조(5단계+상담플로우)만 참고, 콘텐츠는 코코다움 기존 COCODAUM_REFUND, COCODAUM_EXCHANGE 내용을 그대로 재배치.
   새 데이터 항목 없이 위 D_COCODAUM 기존 키(cocodaum_refund__NNN, cocodaum_exchange__NNN)를 그대로 재사용함.
   코코다움은 100%환불이벤트 카테고리가 있는 브랜드이므로(얼라인랩·빌바와 다름), 분류 매트릭스에 원본 그대로 4행(단순변심/100%환불이벤트 2건/불량 교환·반품) + 신청이력 안내 유지.
   branch-box 마지막 행 라벨은 실제 BRAND_TREE 카테고리명("불량 교환/반품", AS 구분 없음)에 맞춰 표기(원본 COCODAUM_REFUND의 "불량 AS 교환/반품" 오기재는 통합판에서만 정정, 원본 파일은 손대지 않음 — 심플리케어 사례와 동일 원칙). === */
const COCODAUM_MERGE_TEMPLATE = `
  <h1>🔄 단순변심 교환/반품</h1>
    <div class="sub">고객 변심에 의한 교환·반품 · 유형별 응대 (자사몰/외부몰)</div>

  ${notice([
    "<b>개봉 후 급여한 제품은 '사용 제품'으로 간주되어 단순변심 반품 불가.</b>",
    "네이버페이·스마트스토어는 어드민에서 반품 배송비 차감 설정 <b>불가</b> → 고객이 직접 반품 접수 시에만 차감 가능",
    `네이버페이-구매확정 건은 아임웹에서 즉시 취소 불가 → <a href="https://docs.google.com/spreadsheets/d/1t7Oa-rKPY2aYgphNugE5K5gMCP7Hn3joaJYp-bbh7Jw/edit?gid=1012913860#gid=1012913860" target="_blank">[자사/외부몰] 통합 교환/반품 관리</a> 시트에 취합 후 네이버 어드민에서 직접 취소`,
    "미개봉 또는 개봉했으나 미사용한 경우에만 교환 가능",
    "교환 제품 금액이 더 높은 경우 <b>차액 결제</b> 필요",
    "교환은 회수 → 입고 → 검수 → 재출고 방식으로 <b>영업일 기준 6~8일</b> 소요"
  ])}

  <div class="grp-h" id="secFlow">🧭 상담 플로우</div>
  <div class="flow-diagram"><div class="fd-box">1. 교환/반품 의사 확인</div><div class="fd-arrow">▶</div><div class="fd-box">2. 전체/부분 방식 안내</div><div class="fd-arrow">▶</div><div class="fd-box">3. 교환/반품 배송비 안내</div><div class="fd-arrow">▶</div><div class="fd-box">4. 포장 및 회수 안내</div><div class="fd-arrow">▶</div><div class="fd-box">5. 교환:재출고 안내 / 반품:환불 안내</div></div>

  ${secTitle("1", "교환/반품 의사 확인","전체·부분 공통","sec1")}
  ${col("blue","🔄 교환 희망 시",
    subcard(D_COCODAUM["cocodaum_exchange__001"].name, D_COCODAUM["cocodaum_exchange__001"].tag, D_COCODAUM["cocodaum_exchange__001"].body, D_COCODAUM["cocodaum_exchange__001"].desc)
    + subcard(D_COCODAUM["cocodaum_exchange__002"].name, D_COCODAUM["cocodaum_exchange__002"].tag, D_COCODAUM["cocodaum_exchange__002"].body, D_COCODAUM["cocodaum_exchange__002"].desc)
    + caution(`▶ (전체 교환) 고객이 반품 희망 시 → 아래 '💰 반품 희망 시'로 이동해 진행
▶ 교환 진행 희망 시 → 아래 2. 전체/부분 방식 안내(교환)부터 진행`)
  )}
  <div style="margin-top:12px">${col("pink","💰 반품 희망 시",
    colTag("gray","수령일로부터 7일 이내","반품교환_7일이내_사유확인",
`반품을 원하시는 사유가 어떻게 되실까요? :)
개봉 후 사용하지 않은 제품은 반품 가능하지만, 사용한 제품은 반품이 어려운 점 참고 부탁드려요.
제품 사용 여부도 함께 확인 부탁드려요.`)
    + colTag("gray","수령일로부터 7일 경과","단순반품_7일경과_사유확인",
`단순 변심에 의한 반품·교환은 배송 완료일로부터 7일 이내에만 신청이 가능합니다.
현재는 신청 가능 기간이 경과되어 도움드리기 어려운 점 양해 부탁드려요.`)
  )}</div>
  <div class="branch-box" style="margin-top:12px">
    <div class="branch-h">💡 고객이 말씀하신 사유·증상에 따라 알맞은 유형으로 이동하여 응대</div>
    <table class="branch-tbl"><tbody>
    <tr><td class="cond">수령일 7일 이내 · <b>미사용</b></td><td class="ar">→</td><td><span class="bdg b-blue">단순변심</span></td></tr>
    <tr><td class="cond">수령일 7일 이내 · <b>사용</b></td><td class="ar">→</td><td><span class="bdg b-amber">100% 환불 이벤트</span></td></tr>
    <tr><td class="cond">수령일 7일 경과 · <b>미사용</b></td><td class="ar">→</td><td><span class="bdg b-amber">100% 환불 이벤트</span></td></tr>
    <tr><td class="cond">제품 <b>불량</b> (사용·수령일 무관)</td><td class="ar">→</td><td><span class="bdg b-pink">불량 교환/반품</span></td></tr>
    </tbody></table>
    <div class="branch-note">※ 100% 환불 이벤트는 신청 이력이 없는 경우에만 가능합니다.</div>
  </div>
  <div style="margin-top:12px">${caution(`▶ 반품 희망 시 → 아래 2. 전체/부분 방식 안내(반품)부터 진행
▶ 교환 희망 시 → 아래 2. 전체/부분 방식 안내(교환)부터 진행`)}</div>

  ${secTitle("2", "전체/부분 방식 안내",null,"sec2")}
  <div class="grp-h">🔹 반품</div>
  ${cmpTable(
    [{cls:"blue",label:"🔹 전체 반품"},{cls:"pink",label:"🔹 부분 반품"}],
    [
      {label:"조건", values:[
        "구매 제품 전체 미사용<br>미개봉 또는 개봉했으나 미사용<br>(예: 박스만 열어보고 다시 닫음)",
        "2개 이상 구매 후 일부만 개봉(사용)<br>(예: 2개 구매 후 1개만 개봉·급여 시, 미개봉 제품만 부분 반품)"
      ]},
      {label:"반품 배송비", values:["6,000원","3,000원"]},
      {label:"회수 품목", values:[
        "모든 구성품 + 증정품 포함",
        "사용(개봉) 제품 제외, 미사용(미개봉) 제품과 그 구성품만 회수"
      ]}
    ]
  )}
  <div class="grp-h">🔹 교환</div>
  ${caution(`※ 미개봉 또는 개봉은 했으나 미사용한 경우에만 교환 가능 (예: 뜯어만 보고 사용 안 함)`)}
  ${cmpTable(
  [{cls:"blue",label:"🔹 전체 교환"},{cls:"pink",label:"🔹 부분 교환"}],
  [
   {label:"대상", values:["구매 상품 전체 교환 희망<br>(2개 이상 구매 후 전체 교환 포함)","2개 이상 구매 후 일부만 개봉 → 개봉 제품만 교환"]},
   {label:"교환 배송비", values:["왕복 6,000원","왕복 배송비 + 사용 제품 금액 차감"]},
   {label:"증정품 회수", values:["회수 O","회수 X"]}
  ]
)}

  ${secTitle("3", "교환/반품 배송비 안내",null,"sec3")}
  <div class="grp-h">🔹 반품 배송비</div>
  <div class="grid2">
    ${col("blue","🔹 전체 반품",
      subcard(D_COCODAUM["cocodaum_refund__001"].name, D_COCODAUM["cocodaum_refund__001"].tag, D_COCODAUM["cocodaum_refund__001"].body, D_COCODAUM["cocodaum_refund__001"].desc)
      + subcard(D_COCODAUM["cocodaum_refund__002"].name, D_COCODAUM["cocodaum_refund__002"].tag, D_COCODAUM["cocodaum_refund__002"].body, D_COCODAUM["cocodaum_refund__002"].desc)
      + subcard(D_COCODAUM["cocodaum_refund__003"].name, D_COCODAUM["cocodaum_refund__003"].tag, D_COCODAUM["cocodaum_refund__003"].body, D_COCODAUM["cocodaum_refund__003"].desc)
    )}
    ${col("pink","🔹 부분 반품",
      subcard(D_COCODAUM["cocodaum_refund__004"].name, D_COCODAUM["cocodaum_refund__004"].tag, D_COCODAUM["cocodaum_refund__004"].body, D_COCODAUM["cocodaum_refund__004"].desc)
      + subcard(D_COCODAUM["cocodaum_refund__005"].name, D_COCODAUM["cocodaum_refund__005"].tag, D_COCODAUM["cocodaum_refund__005"].body, D_COCODAUM["cocodaum_refund__005"].desc)
      + subcard(D_COCODAUM["cocodaum_refund__006"].name, D_COCODAUM["cocodaum_refund__006"].tag, D_COCODAUM["cocodaum_refund__006"].body, D_COCODAUM["cocodaum_refund__006"].desc)
      + starNote("고객이 정가 차감에 미동의할 경우",
`구매하신 옵션은 1개 이상 구매 시 적용되는 구성입니다.
부분 반품 시 개봉된 상품 수량만큼 정상가로 간주되어 원물 금액에서 차감됩니다.
반품 전 꼭 확인 부탁드려요.`)
    )}
  </div>
  <div class="grp-h">🔹 교환 배송비</div>
  <div class="grid2">
${col("blue","🔹 전체 교환",
subcard(D_COCODAUM["cocodaum_exchange__003"].name, D_COCODAUM["cocodaum_exchange__003"].tag, D_COCODAUM["cocodaum_exchange__003"].body, D_COCODAUM["cocodaum_exchange__003"].desc)
)}
${col("pink","🔹 부분 교환",
subcard(D_COCODAUM["cocodaum_exchange__004"].name, D_COCODAUM["cocodaum_exchange__004"].tag, D_COCODAUM["cocodaum_exchange__004"].body, D_COCODAUM["cocodaum_exchange__004"].desc) + subcard(D_COCODAUM["cocodaum_exchange__005"].name, D_COCODAUM["cocodaum_exchange__005"].tag, D_COCODAUM["cocodaum_exchange__005"].body, D_COCODAUM["cocodaum_exchange__005"].desc)
)}
  </div>
  ${guide(`→ 입금자명·입금금액 확인 후 IBK 기업은행 계좌 조회
🔗 IBK기업은행 : https://www.ibk.co.kr/`)}

  ${secTitle("4", "포장 및 회수 안내",null,"sec4")}
  <div class="grp-h">🔹 반품</div>
  <div class="grid2">
    ${col("blue","🔹 전체 반품",
      subcard(D_COCODAUM["cocodaum_refund__007"].name, D_COCODAUM["cocodaum_refund__007"].tag, D_COCODAUM["cocodaum_refund__007"].body, D_COCODAUM["cocodaum_refund__007"].desc)
      + caution(`🎁 증정품 회수 O`)
    )}
    ${col("pink","🔹 부분 반품",
      subcard(D_COCODAUM["cocodaum_refund__008"].name, D_COCODAUM["cocodaum_refund__008"].tag, D_COCODAUM["cocodaum_refund__008"].body, D_COCODAUM["cocodaum_refund__008"].desc)
      + caution(`🎁 증정품 회수 X`)
    )}
  </div>
  <div class="stack">
    ${col("gray","💡 복합 유형 (예: 불량 반품 + 단순변심 반품)",
      subcard(D_COCODAUM["cocodaum_refund__009"].name, D_COCODAUM["cocodaum_refund__009"].tag, D_COCODAUM["cocodaum_refund__009"].body, D_COCODAUM["cocodaum_refund__009"].desc)
    )}
  </div>
  <div class="grid2">
    ${subcard(D_COCODAUM["cocodaum_refund__011"].name, D_COCODAUM["cocodaum_refund__011"].tag, D_COCODAUM["cocodaum_refund__011"].body, D_COCODAUM["cocodaum_refund__011"].desc)}
  </div>
  <div class="grp-h">🔹 교환</div>
  <div class="grid2">
${col("blue","🔹 전체 교환",
subcard(D_COCODAUM["cocodaum_exchange__006"].name, D_COCODAUM["cocodaum_exchange__006"].tag, D_COCODAUM["cocodaum_exchange__006"].body, D_COCODAUM["cocodaum_exchange__006"].desc) + caution(`🎁 증정품 회수 O`)
)}
${col("pink","🔹 부분 교환",
subcard(D_COCODAUM["cocodaum_exchange__007"].name, D_COCODAUM["cocodaum_exchange__007"].tag, D_COCODAUM["cocodaum_exchange__007"].body, D_COCODAUM["cocodaum_exchange__007"].desc) + caution(`🎁 증정품 회수 X`)
)}
  </div>
  <div class="warn-note">⚠️ 고객 동의 / 교환 배송비 입금 완료 후 진행</div>

  ${secTitle("5", "교환/반품 안내",null,"step5")}
  ${secTitle("🔄","교환 시","재출고 안내","exchangeFlow")}
  ${macro(D_COCODAUM["cocodaum_exchange__009"].name, D_COCODAUM["cocodaum_exchange__009"].tag, D_COCODAUM["cocodaum_exchange__009"].body, D_COCODAUM["cocodaum_exchange__009"].desc)}
  ${guide(`▶ 상품 수거·검수 후 이상 없을 시 <a href="https://docs.google.com/spreadsheets/d/1Bj5stx8hXMoPL8L91EYu6e5TA7pqEAjges4Cejs1wjo/edit?gid=388846546#gid=388846546" target="_blank">SCM-CX/CS팀 수기 시트</a>에 재출고 요청`)}
  ${secTitle("💰","반품 시","환불 안내","refundFlow")}
  <div class="grid2">
    ${col("blue","🔹 카드결제",
      subcard(D_COCODAUM["cocodaum_refund__012"].name, D_COCODAUM["cocodaum_refund__012"].tag, D_COCODAUM["cocodaum_refund__012"].body, D_COCODAUM["cocodaum_refund__012"].desc)
    )}
    ${col("blue","🔹 계좌 환불",
      subcard(D_COCODAUM["cocodaum_refund__013"].name, D_COCODAUM["cocodaum_refund__013"].tag, D_COCODAUM["cocodaum_refund__013"].body, D_COCODAUM["cocodaum_refund__013"].desc)
      + subcard(D_COCODAUM["cocodaum_refund__014"].name, D_COCODAUM["cocodaum_refund__014"].tag, D_COCODAUM["cocodaum_refund__014"].body, D_COCODAUM["cocodaum_refund__014"].desc)
    )}
  </div>
`;