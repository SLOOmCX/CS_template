const DRMANS_SIDE = `

  <h1>🚨 부작용·상해 VOC</h1>
    <div class="sub">제품 사용 후 이상 증상·트러블·상해 등 VOC 응대 (자사몰/외부몰)</div>
    <div class="sub-ex">예) 사용 후 피부 트러블·이상 반응 · 상해(상처·화상 등) 등이 닥터맨즈 제품으로 인해 발생했다고 인정되는 경우</div>

  ${secTitle("🧭","상담 플로우",null,"secFlow")}
  ${caution(`🚨 보상금 요구 여부에 따라 Edge Case로 분류되므로, [📌 <a href="https://docs.google.com/spreadsheets/d/1a-hNnO4f-TUJ0n4maDUh3xxmzwBW9XwJW-Z5OKZU0r8/edit?pli=1&amp;gid=1968732770#gid=1968732770" target="_blank">고객 보상&Critical Issue 처리 Process 시트</a>]를 참고하여 진행`)}
  <div class="grp-h">공통 플로우</div>
  <div class="flow-diagram"><div class="fd-box">1. 선제적 사과 멘트</div><div class="fd-arrow">▶</div><div class="fd-box">2. 제품 결함 아님 및 서류 안내</div></div>
  <div class="fork"><div class="fork-branch"><span class="fork-label">🔹 a. 서류 미수긍</span><div class="flow-diagram"><div class="fd-box">전액 환불 처리 안내</div></div></div><div class="fork-branch b2"><span class="fork-label">🔹 b. 서류 수긍</span><div class="flow-diagram"><div class="fd-box">서류 안내·제출</div><div class="fd-arrow">▶</div><div class="fd-box">전액 환불 처리 안내</div></div></div></div>
  <div class="flow-diagram"><div class="fd-box">3. 포장 및 회수 안내</div><div class="fd-arrow">▶</div><div class="fd-box">4. 결제수단별 환불 안내</div></div>
  <div style="margin:8px 0 4px 2px;font-size:12px;color:#8a6d1a">⚠️ 병원 진료·진료비 보상 요청 등 클레임/민원 발생 시 → 아래 [예외케이스] 그룹 참고</div>

  ${secTitle("1","선제적 사과 멘트",null,"sec_apology")}
  ${macro(D_DRMANS["drmans_side__001"].name, D_DRMANS["drmans_side__001"].tag, D_DRMANS["drmans_side__001"].body, D_DRMANS["drmans_side__001"].desc)}
  ${secTitle("2","제품 결함 아님 및 서류 안내",null,"sec_env")}
  ${caution(`⚠️ 단, 고객 최초부터 강하게 항의/민원 제기 or 크리티컬한 단어 언급 등으로 Risk 등급 높을 경우 → 기존 Critical Issue 처리에 따라 예외적 반품 처리 진행`)}
  ${macro(D_DRMANS["drmans_side__002"].name, D_DRMANS["drmans_side__002"].tag, D_DRMANS["drmans_side__002"].body, D_DRMANS["drmans_side__002"].desc)}
  <div class="grp-h grp-major">🔹 a. 고객 서류 미수긍 시</div>
  ${guide(`👉🏻 고객 증빙 서류 미수긍 시 예외적으로 전액 환불 처리 안내`)}
  ${macro(D_DRMANS["drmans_side__003"].name, D_DRMANS["drmans_side__003"].tag, D_DRMANS["drmans_side__003"].body, D_DRMANS["drmans_side__003"].desc)}
  <div class="grp-h grp-major">🔹 b. 고객 서류 수긍 시</div>
  ${macro(D_DRMANS["drmans_side__004"].name, D_DRMANS["drmans_side__004"].tag, D_DRMANS["drmans_side__004"].body, D_DRMANS["drmans_side__004"].desc)}
  ${macro(D_DRMANS["drmans_side__005"].name, D_DRMANS["drmans_side__005"].tag, D_DRMANS["drmans_side__005"].body, D_DRMANS["drmans_side__005"].desc)}
  <div style="margin:8px 0 4px 2px;font-size:12px;color:#8a6d1a">👉🏻 이후 공통 : 아래 [3. 포장 및 회수 안내] → [4. 결제수단별 환불 안내] 순으로 진행</div>
  ${secTitle("3","포장 및 회수 안내",null,"sec_pack")}
  ${macro(D_DRMANS["drmans_side__006"].name, D_DRMANS["drmans_side__006"].tag, D_DRMANS["drmans_side__006"].body, D_DRMANS["drmans_side__006"].desc)}
  ${subcard(D_DRMANS["drmans_side__007"].name, D_DRMANS["drmans_side__007"].tag, D_DRMANS["drmans_side__007"].body, D_DRMANS["drmans_side__007"].desc)}
  ${secTitle("4","결제수단별 환불 안내",null,"sec_refund")}
  <div class="grid2">
${col("blue","환불 안내 (카드·삼성페이·네이버페이)",
subcard(D_DRMANS["drmans_side__008"].name, D_DRMANS["drmans_side__008"].tag, D_DRMANS["drmans_side__008"].body, D_DRMANS["drmans_side__008"].desc)
)}
${col("blue","환불 안내 (계좌·무통장/가상계좌)",
subcard(D_DRMANS["drmans_side__009"].name, D_DRMANS["drmans_side__009"].tag, D_DRMANS["drmans_side__009"].body, D_DRMANS["drmans_side__009"].desc) + subcard(D_DRMANS["drmans_side__010"].name, D_DRMANS["drmans_side__010"].tag, D_DRMANS["drmans_side__010"].body, D_DRMANS["drmans_side__010"].desc)
)}
</div>
  ${secTitle("🔺","[예외케이스] 클레임/민원/보상 요청",null,"sec_exception")}
  ${caution(`예) 부작용으로 인한 병원 진료, 진료비 보상 요청 or 부작용 정도가 심하여 진료비 보상 요청`)}
  ${macro(D_DRMANS["drmans_side__011"].name, D_DRMANS["drmans_side__011"].tag, D_DRMANS["drmans_side__011"].body, D_DRMANS["drmans_side__011"].desc)}
  ${macro(D_DRMANS["drmans_side__012"].name, D_DRMANS["drmans_side__012"].tag, D_DRMANS["drmans_side__012"].body, D_DRMANS["drmans_side__012"].desc)}
  ${macro(D_DRMANS["drmans_side__013"].name, D_DRMANS["drmans_side__013"].tag, D_DRMANS["drmans_side__013"].body, D_DRMANS["drmans_side__013"].desc)}
  ${caution(`⚠️ 고객 서류 미수긍/지속 치료비 보상 요구\n★ 증빙 서류 없이 치료비 보상은 불가`)}
  ${guide(`✔️ 부작용·트러블 유형은 제품, 고객 성향과 증상에 따라 유연하게 응대 필요\n기본적으로 증빙 자료 제출 후 전액 환불 및 급여 항목에 한해 보상 가능`)}
  ${secTitle("💠","[공통] 서류 제출 후",null,"sec_submit")}
  ${macro(D_DRMANS["drmans_side__014"].name, D_DRMANS["drmans_side__014"].tag, D_DRMANS["drmans_side__014"].body, D_DRMANS["drmans_side__014"].desc)}
  ${macro(D_DRMANS["drmans_side__015"].name, D_DRMANS["drmans_side__015"].tag, D_DRMANS["drmans_side__015"].body, D_DRMANS["drmans_side__015"].desc)}
  ${guide(`<b style="color:#d32f2f;">증빙 서류 기반으로 건보 급여 항목 전액 보상</b>
⚠️ 팀 리드 공유 필수
📌 <a href="https://docs.google.com/spreadsheets/d/1a-hNnO4f-TUJ0n4maDUh3xxmzwBW9XwJW-Z5OKZU0r8/edit?pli=1&amp;gid=1968732770#gid=1968732770" target="_blank">고객 보상&Critical Issue 처리 Process 시트</a>의 Critical Issue(EDGE Case) 보상금 flex 워크플로우 작성법 참고하여 등록`)}
`;

const DRMANS_DEFECT = `

  <h1>🔧 불량 교환/반품</h1>
    <div class="sub">제품 파손·작동불량·변질 등 불량 교환/반품 CS 응대(자사몰/외부몰)</div>
    <div class="sub-ex">예) 펌프가 눌리지 않거나, 스틱 심이 부러지거나, 튜브 캡이 눌리지 않거나, 두피 브러시 모가 빠져 있는 등 제품 불량이 확인되는 경우</div>

  ${secTitle("🧭","상담 플로우",null,"secFlow")}
  <div class="flow-diagram"><div class="fd-box">1. 불량 유형 확인</div><div class="fd-arrow">▶</div><div class="fd-box">2. 사진·영상 증빙 요청</div><div class="fd-arrow">▶</div><div class="fd-box">3. 불량 인정/미인정 분기</div><div class="fd-arrow">▶</div><div class="fd-box">4. 포장 및 회수 안내</div><div class="fd-arrow">▶</div><div class="fd-box">5. 교환 : 재출고 일정 안내<br>반품 : 환불 일정 안내</div></div>

  ${secTitle("1","불량 유형 확인",null,"sec_type")}
  <table class="astbl"><thead><tr><th>제품유형</th><th>대표 불량 유형</th></tr></thead><tbody><tr><td rowspan="2" style="width:260px">올인원 로션·바디워시·부활초 샴푸(펌프형)</td><td>펌프 작동 불량(안 눌러짐·공회전)</td></tr><tr><td style="width:auto;font-weight:400;background:#fff;">용기 파손·내용물 변질</td></tr><tr><td style="width:260px">올인원 선스틱·립밤(스틱형)</td><td>스틱 심 불량(부러짐·안 올라옴·과도하게 무름)</td></tr><tr><td style="width:260px">클렌저(튜브형)</td><td>튜브 파손·캡 불량(눌러도 안 나옴)</td></tr><tr><td style="width:260px">딥클렌징 두피 브러쉬(용품)</td><td>브러시 파손(모 빠짐·손잡이 파손·이탈)</td></tr></tbody></table>
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
  <div class="grp-h">1. 올인원 로션·바디워시·부활초 샴푸(펌프형) — 펌프 작동 불량(안 눌러짐·공회전)</div>
  ${macro(D_DRMANS["drmans_as__001"].name, D_DRMANS["drmans_as__001"].tag, D_DRMANS["drmans_as__001"].body, D_DRMANS["drmans_as__001"].desc)}
  ${macro(D_DRMANS["drmans_as__002"].name, D_DRMANS["drmans_as__002"].tag, D_DRMANS["drmans_as__002"].body, D_DRMANS["drmans_as__002"].desc)}
  <div class="grid2">
${col("blue","🔹 불량 인정 시",
subcard(D_DRMANS["drmans_as__003"].name, D_DRMANS["drmans_as__003"].tag, D_DRMANS["drmans_as__003"].body, D_DRMANS["drmans_as__003"].desc)
)}
${col("pink","🔹 불량 미인정(정상 판정) 시",
subcard(D_DRMANS["drmans_as__004"].name, D_DRMANS["drmans_as__004"].tag, D_DRMANS["drmans_as__004"].body, D_DRMANS["drmans_as__004"].desc)
)}
</div>
  ${caution(`📝 근거/비고: 펌프형 3종(로션·바디워시·부활초 엑소좀 샴푸) 공통 유형. 최초 펌프 프라이밍(공회전)은 오상담 빈도 높아 '정상' 분기 추가. 잠금(락) 해제 여부 미확인으로 인한 오상담 방지를 위해 증빙 요청 전 잠금 해제 여부 선확인 단계 추가.`)}

  <div class="grp-h">2. 올인원 로션·바디워시·부활초 샴푸(펌프형) — 용기 파손·내용물 변질</div>
  ${macro(D_DRMANS["drmans_as__005"].name, D_DRMANS["drmans_as__005"].tag, D_DRMANS["drmans_as__005"].body, D_DRMANS["drmans_as__005"].desc)}
  <div class="grid2">
${col("blue","🔹 불량 인정 시",
subcard(D_DRMANS["drmans_as__006"].name, D_DRMANS["drmans_as__006"].tag, D_DRMANS["drmans_as__006"].body, D_DRMANS["drmans_as__006"].desc)
)}
${col("pink","🔹 불량 미인정(정상 판정) 시",
subcard(D_DRMANS["drmans_as__007"].name, D_DRMANS["drmans_as__007"].tag, D_DRMANS["drmans_as__007"].body, D_DRMANS["drmans_as__007"].desc)
)}
</div>
  ${caution(`🕐 [7일 룰 예외] 변질·굳음·결로는 개봉 전에는 확인이 불가능한 유형이므로, 수령일로부터 7일이 경과했더라도 <b>미개봉 상태로 보관</b>했고 <b>보관주의사항을 준수</b>한 경우라면 접수 후 확인하여 처리함(7일 경과를 이유로 즉시 처리 불가 안내하지 않음).`)}
  ${caution(`📝 근거/비고: 펌프형 3종 공통.`)}

  <div class="grp-h">3. 올인원 선스틱·립밤(스틱형) — 스틱 심 불량(부러짐·안 올라옴·과도하게 무름)</div>
  ${macro(D_DRMANS["drmans_as__008"].name, D_DRMANS["drmans_as__008"].tag, D_DRMANS["drmans_as__008"].body, D_DRMANS["drmans_as__008"].desc)}
  <div class="grid2">
${col("blue","🔹 불량 인정 시",
subcard(D_DRMANS["drmans_as__009"].name, D_DRMANS["drmans_as__009"].tag, D_DRMANS["drmans_as__009"].body, D_DRMANS["drmans_as__009"].desc)
)}
${col("pink","🔹 불량 미인정(정상 판정) 시",
subcard(D_DRMANS["drmans_as__010"].name, D_DRMANS["drmans_as__010"].tag, D_DRMANS["drmans_as__010"].body, D_DRMANS["drmans_as__010"].desc)
)}
</div>
  ${caution(`📝 근거/비고: 공식몰 확인 — 선스틱·립밤이 트위스트업 스틱 형태로 확인되어 추가한 유형.`)}

  <div class="grp-h">4. 클렌저(튜브형) — 튜브 파손·캡 불량(눌러도 안 나옴)</div>
  ${macro(D_DRMANS["drmans_as__011"].name, D_DRMANS["drmans_as__011"].tag, D_DRMANS["drmans_as__011"].body, D_DRMANS["drmans_as__011"].desc)}
  <div class="grid2">
${col("blue","🔹 불량 인정 시",
subcard(D_DRMANS["drmans_as__012"].name, D_DRMANS["drmans_as__012"].tag, D_DRMANS["drmans_as__012"].body, D_DRMANS["drmans_as__012"].desc)
)}
${col("pink","🔹 불량 미인정(정상 판정) 시",
subcard(D_DRMANS["drmans_as__013"].name, D_DRMANS["drmans_as__013"].tag, D_DRMANS["drmans_as__013"].body, D_DRMANS["drmans_as__013"].desc)
)}
</div>
  ${caution(`📝 근거/비고: 클렌저 1종 전용 유형(플립캡 튜브 구조).`)}

  <div class="grp-h">5. 딥클렌징 두피 브러쉬(용품) — 브러시 파손(모 빠짐·손잡이 파손·이탈)</div>
  ${macro(D_DRMANS["drmans_as__014"].name, D_DRMANS["drmans_as__014"].tag, D_DRMANS["drmans_as__014"].body, D_DRMANS["drmans_as__014"].desc)}
  <div class="grid2">
${col("blue","🔹 불량 인정 시",
subcard(D_DRMANS["drmans_as__015"].name, D_DRMANS["drmans_as__015"].tag, D_DRMANS["drmans_as__015"].body, D_DRMANS["drmans_as__015"].desc)
)}
${col("pink","🔹 불량 미인정(정상 판정) 시",
subcard(D_DRMANS["drmans_as__016"].name, D_DRMANS["drmans_as__016"].tag, D_DRMANS["drmans_as__016"].body, D_DRMANS["drmans_as__016"].desc)
)}
</div>
  ${caution(`📝 근거/비고: 액체 화장품이 아닌 물리 용품이라 별도 유형 필요. 전동 여부는 실물 확인 후 CS팀 재확인 필요(전동이면 '작동 불량' 유형 추가 필요).`)}

  ${secTitle("3","포장 및 회수 안내",null,"sec_pack")}
  ${macro(D_DRMANS["drmans_as__017"].name, D_DRMANS["drmans_as__017"].tag, D_DRMANS["drmans_as__017"].body, D_DRMANS["drmans_as__017"].desc)}
  ${caution(`📝 [통합판] 화장품류·용품류 두 카테고리에 걸쳐 있어 카테고리 라벨만 구분(용기 형태별 세부 문구는 생략).`)}

  ${secTitle("4","교환/반품 안내",null,"sec_refund")}
  <div class="grid2">
${col("blue","🔹 교환 시 — 재출고 일정 안내",
`<div class="quote-box"><b>⚠️ 유의사항</b>\n① 접수 시간 기준으로 안내 필요\n② 불량으로 인한 재출고는 회수 접수와 동시에 재출고 접수</div>` +
subcard(D_DRMANS["drmans_as__018"].name, D_DRMANS["drmans_as__018"].tag, D_DRMANS["drmans_as__018"].body, D_DRMANS["drmans_as__018"].desc) +
subcard(D_DRMANS["drmans_as__019"].name, D_DRMANS["drmans_as__019"].tag, D_DRMANS["drmans_as__019"].body, D_DRMANS["drmans_as__019"].desc) +
subcard(D_DRMANS["drmans_as__020"].name, D_DRMANS["drmans_as__020"].tag, D_DRMANS["drmans_as__020"].body, D_DRMANS["drmans_as__020"].desc)
)}
${col("pink","🔹 반품 시 — 결제수단별 환불 안내",
subcard(D_DRMANS["drmans_as__021"].name, D_DRMANS["drmans_as__021"].tag, D_DRMANS["drmans_as__021"].body, D_DRMANS["drmans_as__021"].desc) + subcard(D_DRMANS["drmans_as__022"].name, D_DRMANS["drmans_as__022"].tag, D_DRMANS["drmans_as__022"].body, D_DRMANS["drmans_as__022"].desc) + subcard(D_DRMANS["drmans_as__023"].name, D_DRMANS["drmans_as__023"].tag, D_DRMANS["drmans_as__023"].body, D_DRMANS["drmans_as__023"].desc)
)}
</div>

`;




const DRMANS_REFUND = `
  <h1>🔄 단순변심 반품</h1>
  <div class="sub">고객 변심에 의한 반품 · 유형별 응대</div>

  ${secTitle("💡","기준 및 조건",null,"secGuide")}
  ${cmpTable(
    [{cls:"blue",label:"🔹 전체 반품"},{cls:"pink",label:"🔹 부분 반품"}],
    [
      {label:"조건", values:[
        "구매 제품 전체 미사용<br>미개봉 또는 개봉했으나 미사용<br>(예: 박스만 열어보고 다시 닫음)",
        "2개 이상 구매 후 일부만 개봉(사용)<br>(예: 2개 구매 후 1개만 개봉·사용 시, 미개봉 제품만 부분 반품)"
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
    "<b>개봉 후 사용한 제품은 '사용 제품'으로 간주되어 단순변심 반품 불가.</b>",
    "네이버페이·스마트스토어는 어드민에서 반품 배송비 차감 설정 <b>불가</b> → 고객이 직접 반품 접수 시에만 차감 가능",
    `네이버페이-구매확정 건은 아임웹에서 즉시 취소 불가 → <a href="https://docs.google.com/spreadsheets/d/1t7Oa-rKPY2aYgphNugE5K5gMCP7Hn3joaJYp-bbh7Jw/edit?gid=1012913860#gid=1012913860" target="_blank">[자사/외부몰] 통합 교환/반품 관리</a> 시트에 취합 후 네이버 어드민에서 직접 취소`
  ])}

  ${secTitle("1", "7일 경과 여부 및 사유 확인","전체·부분 공통","sec1")}
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
    
    
    <tr><td class="cond">제품 <b>불량</b> (사용·수령일 무관)</td><td class="ar">→</td><td><span class="bdg b-pink">불량 AS 교환/반품</span></td></tr>
    </tbody></table>
    
  </div>

  ${secTitle("2", "반품 배송비 안내",null,"sec2")}
  <div class="grid2">
    ${col("blue","🔹 전체 반품",
      subcard(D_DRMANS["drmans_refund__001"].name, D_DRMANS["drmans_refund__001"].tag, D_DRMANS["drmans_refund__001"].body, D_DRMANS["drmans_refund__001"].desc)
      + subcard(D_DRMANS["drmans_refund__002"].name, D_DRMANS["drmans_refund__002"].tag, D_DRMANS["drmans_refund__002"].body, D_DRMANS["drmans_refund__002"].desc)
      + subcard(D_DRMANS["drmans_refund__003"].name, D_DRMANS["drmans_refund__003"].tag, D_DRMANS["drmans_refund__003"].body, D_DRMANS["drmans_refund__003"].desc)
    )}
    ${col("pink","🔹 부분 반품",
      subcard(D_DRMANS["drmans_refund__004"].name, D_DRMANS["drmans_refund__004"].tag, D_DRMANS["drmans_refund__004"].body, D_DRMANS["drmans_refund__004"].desc)
      + subcard(D_DRMANS["drmans_refund__005"].name, D_DRMANS["drmans_refund__005"].tag, D_DRMANS["drmans_refund__005"].body, D_DRMANS["drmans_refund__005"].desc)
      + subcard(D_DRMANS["drmans_refund__006"].name, D_DRMANS["drmans_refund__006"].tag, D_DRMANS["drmans_refund__006"].body, D_DRMANS["drmans_refund__006"].desc)
      + starNote("고객이 정가 차감에 미동의할 경우",
`구매하신 옵션은 1개 이상 구매 시 적용되는 구성입니다.
부분 반품 시 개봉된 상품 수량만큼 정상가로 간주되어 원물 금액에서 차감됩니다.
반품 전 꼭 확인 부탁드립니다.`)
    )}
  </div>

  ${secTitle("3", "포장 및 회수 안내",null,"sec3")}
  <div class="grid2">
    ${col("blue","🔹 전체 반품",
      subcard(D_DRMANS["drmans_refund__007"].name, D_DRMANS["drmans_refund__007"].tag, D_DRMANS["drmans_refund__007"].body, D_DRMANS["drmans_refund__007"].desc)
      + caution(`🎁 증정품 회수 O`)
    )}
    ${col("pink","🔹 부분 반품",
      subcard(D_DRMANS["drmans_refund__008"].name, D_DRMANS["drmans_refund__008"].tag, D_DRMANS["drmans_refund__008"].body, D_DRMANS["drmans_refund__008"].desc)
      + caution(`🎁 증정품 회수 X`)
    )}
  </div>
  <div class="stack">
    ${col("gray","💡 복합 유형 (예: 불량 반품 + 단순변심 반품)",
      subcard(D_DRMANS["drmans_refund__009"].name, D_DRMANS["drmans_refund__009"].tag, D_DRMANS["drmans_refund__009"].body, D_DRMANS["drmans_refund__009"].desc)
    )}
  </div>
  <div class="grid2">
    ${subcard(D_DRMANS["drmans_refund__011"].name, D_DRMANS["drmans_refund__011"].tag, D_DRMANS["drmans_refund__011"].body, D_DRMANS["drmans_refund__011"].desc)}
  </div>

  ${secTitle("4", "결제수단별 환불 안내","전체·부분 공통","sec4")}
  <div class="grid2">
    ${col("blue","🔹 카드결제",
      subcard(D_DRMANS["drmans_refund__012"].name, D_DRMANS["drmans_refund__012"].tag, D_DRMANS["drmans_refund__012"].body, D_DRMANS["drmans_refund__012"].desc)
    )}
    ${col("blue","🔹 계좌 환불",
      subcard(D_DRMANS["drmans_refund__013"].name, D_DRMANS["drmans_refund__013"].tag, D_DRMANS["drmans_refund__013"].body, D_DRMANS["drmans_refund__013"].desc)
      + subcard(D_DRMANS["drmans_refund__014"].name, D_DRMANS["drmans_refund__014"].tag, D_DRMANS["drmans_refund__014"].body, D_DRMANS["drmans_refund__014"].desc)
    )}
  </div>
`;

const DRMANS_EXCHANGE = `

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
subcard(D_DRMANS["drmans_exchange__001"].name, D_DRMANS["drmans_exchange__001"].tag, D_DRMANS["drmans_exchange__001"].body, D_DRMANS["drmans_exchange__001"].desc)
)}
${col("pink","🔹 부분 교환",
subcard(D_DRMANS["drmans_exchange__002"].name, D_DRMANS["drmans_exchange__002"].tag, D_DRMANS["drmans_exchange__002"].body, D_DRMANS["drmans_exchange__002"].desc)
)}
</div>
  ${caution(`▶ (전체 교환) 고객이 반품 희망 시 → '단순변심 반품' 페이지로 이동하여 안내
▶ 교환 희망 시 → 2부터 진행`)}
  ${secTitle("2", "교환 배송비 안내","전체·부분","sec2")}
  <div class="grid2">
${col("blue","🔹 전체 교환",
subcard(D_DRMANS["drmans_exchange__003"].name, D_DRMANS["drmans_exchange__003"].tag, D_DRMANS["drmans_exchange__003"].body, D_DRMANS["drmans_exchange__003"].desc)
)}
${col("pink","🔹 부분 교환",
subcard(D_DRMANS["drmans_exchange__004"].name, D_DRMANS["drmans_exchange__004"].tag, D_DRMANS["drmans_exchange__004"].body, D_DRMANS["drmans_exchange__004"].desc) + subcard(D_DRMANS["drmans_exchange__005"].name, D_DRMANS["drmans_exchange__005"].tag, D_DRMANS["drmans_exchange__005"].body, D_DRMANS["drmans_exchange__005"].desc)
)}
</div>
  ${guide(`→ 입금자명·입금금액 확인 후 IBK 기업은행 계좌 조회
🔗 IBK기업은행 : https://www.ibk.co.kr/`)}
  ${secTitle("3", "포장 및 회수 안내","전체·부분","sec3")}
  <div class="grid2">
${col("blue","🔹 전체 교환",
subcard(D_DRMANS["drmans_exchange__006"].name, D_DRMANS["drmans_exchange__006"].tag, D_DRMANS["drmans_exchange__006"].body, D_DRMANS["drmans_exchange__006"].desc) + caution(`🎁 증정품 회수 O`)
)}
${col("pink","🔹 부분 교환",
subcard(D_DRMANS["drmans_exchange__007"].name, D_DRMANS["drmans_exchange__007"].tag, D_DRMANS["drmans_exchange__007"].body, D_DRMANS["drmans_exchange__007"].desc) + caution(`🎁 증정품 회수 X`)
)}
</div>
  <div class="warn-note">⚠️ 고객 동의 / 교환 배송비 입금 완료 후 진행</div>
  ${secTitle("4", "검수 및 재출고 안내","전체·부분 공통","sec4")}
  ${macro(D_DRMANS["drmans_exchange__009"].name, D_DRMANS["drmans_exchange__009"].tag, D_DRMANS["drmans_exchange__009"].body, D_DRMANS["drmans_exchange__009"].desc)}
  ${guide(`▶ 상품 수거·검수 후 이상 없을 시 <a href="https://docs.google.com/spreadsheets/d/1Bj5stx8hXMoPL8L91EYu6e5TA7pqEAjges4Cejs1wjo/edit?gid=388846546#gid=388846546" target="_blank">SCM-CX/CS팀 수기 시트</a>에 재출고 요청`)}
`;

/* === 단순변심 교환/반품 통합판 (2026-08-27) — 슬룸 SLM_MERGE_TEMPLATE 구조(5단계+상담플로우)만 참고, 콘텐츠는 닥터맨즈 기존 DRMANS_REFUND, DRMANS_EXCHANGE 내용을 그대로 재배치.
   새 데이터 항목 없이 위 D_DRMANS 기존 키(drmans_refund__NNN, drmans_exchange__NNN)를 그대로 재사용함.
   닥터맨즈는 100%환불이벤트 카테고리가 없는 브랜드이므로(content-build.js에서 delete 처리됨), 분류 매트릭스는 원본 그대로 2행(단순변심/불량 AS 교환/반품) 유지.
   섹션1은 2026-08-27 확립된 표준 구조(파란 "🔄 교환 희망 시" 카드 + 분홍 "💰 반품 희망 시" 카드) 적용 — drmans_exchange__001/002(전 브랜드 공통 콘텐츠)와 DRMANS_REFUND의 기존 사유확인 colTag를 그대로 사용. === */
const DRMANS_MERGE_TEMPLATE = `
  <h1>🔄 단순변심 교환/반품</h1>
    <div class="sub">고객 변심에 의한 교환·반품 · 유형별 응대 (자사몰/외부몰)</div>

  ${notice([
    "<b>개봉 후 사용한 제품은 '사용 제품'으로 간주되어 단순변심 반품 불가.</b>",
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
    subcard(D_DRMANS["drmans_exchange__001"].name, D_DRMANS["drmans_exchange__001"].tag, D_DRMANS["drmans_exchange__001"].body, D_DRMANS["drmans_exchange__001"].desc)
    + subcard(D_DRMANS["drmans_exchange__002"].name, D_DRMANS["drmans_exchange__002"].tag, D_DRMANS["drmans_exchange__002"].body, D_DRMANS["drmans_exchange__002"].desc)
    + caution(`▶ (전체 교환) 고객이 반품 희망 시 → 아래 '💰 반품 희망 시'로 이동해 진행
▶ 교환 진행 희망 시 → 아래 2. 전체/부분 방식 안내(교환)부터 진행`)
  )}
  <div style="margin-top:12px">${col("pink","💰 반품 희망 시",
    colTag("gray","수령일로부터 7일 이내","반품교환_7일이내_사유확인",
`반품을 원하시는 사유가 어떻게 되실까요? :)
개봉 후 사용하지 않은 제품은 반품 가능하지만, 사용한 제품은 반품이 어려운 점 참고 부탁드립니다.
제품 사용 여부도 함께 확인 부탁드립니다.`)
    + colTag("gray","수령일로부터 7일 경과","단순반품_7일경과_사유확인",
`단순 변심에 의한 반품·교환은 배송 완료일로부터 7일 이내에만 신청이 가능합니다.
현재는 신청 가능 기간이 경과되어 도움드리기 어려운 점 양해 부탁드립니다.`)
  )}</div>
  <div class="branch-box" style="margin-top:12px">
    <div class="branch-h">💡 고객이 말씀하신 사유·증상에 따라 알맞은 유형으로 이동하여 응대</div>
    <table class="branch-tbl"><tbody>
    <tr><td class="cond">수령일 7일 이내 · <b>미사용</b></td><td class="ar">→</td><td><span class="bdg b-blue">단순변심</span></td></tr>
    <tr><td class="cond">제품 <b>불량</b> (사용·수령일 무관)</td><td class="ar">→</td><td><span class="bdg b-pink">불량 AS 교환/반품</span></td></tr>
    </tbody></table>
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
        "2개 이상 구매 후 일부만 개봉(사용)<br>(예: 2개 구매 후 1개만 개봉·사용 시, 미개봉 제품만 부분 반품)"
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
      subcard(D_DRMANS["drmans_refund__001"].name, D_DRMANS["drmans_refund__001"].tag, D_DRMANS["drmans_refund__001"].body, D_DRMANS["drmans_refund__001"].desc)
      + subcard(D_DRMANS["drmans_refund__002"].name, D_DRMANS["drmans_refund__002"].tag, D_DRMANS["drmans_refund__002"].body, D_DRMANS["drmans_refund__002"].desc)
      + subcard(D_DRMANS["drmans_refund__003"].name, D_DRMANS["drmans_refund__003"].tag, D_DRMANS["drmans_refund__003"].body, D_DRMANS["drmans_refund__003"].desc)
    )}
    ${col("pink","🔹 부분 반품",
      subcard(D_DRMANS["drmans_refund__004"].name, D_DRMANS["drmans_refund__004"].tag, D_DRMANS["drmans_refund__004"].body, D_DRMANS["drmans_refund__004"].desc)
      + subcard(D_DRMANS["drmans_refund__005"].name, D_DRMANS["drmans_refund__005"].tag, D_DRMANS["drmans_refund__005"].body, D_DRMANS["drmans_refund__005"].desc)
      + subcard(D_DRMANS["drmans_refund__006"].name, D_DRMANS["drmans_refund__006"].tag, D_DRMANS["drmans_refund__006"].body, D_DRMANS["drmans_refund__006"].desc)
      + starNote("고객이 정가 차감에 미동의할 경우",
`구매하신 옵션은 1개 이상 구매 시 적용되는 구성입니다.
부분 반품 시 개봉된 상품 수량만큼 정상가로 간주되어 원물 금액에서 차감됩니다.
반품 전 꼭 확인 부탁드립니다.`)
    )}
  </div>
  <div class="grp-h">🔹 교환 배송비</div>
  <div class="grid2">
    ${col("blue","🔹 전체 교환",
      subcard(D_DRMANS["drmans_exchange__003"].name, D_DRMANS["drmans_exchange__003"].tag, D_DRMANS["drmans_exchange__003"].body, D_DRMANS["drmans_exchange__003"].desc)
    )}
    ${col("pink","🔹 부분 교환",
      subcard(D_DRMANS["drmans_exchange__004"].name, D_DRMANS["drmans_exchange__004"].tag, D_DRMANS["drmans_exchange__004"].body, D_DRMANS["drmans_exchange__004"].desc)
      + subcard(D_DRMANS["drmans_exchange__005"].name, D_DRMANS["drmans_exchange__005"].tag, D_DRMANS["drmans_exchange__005"].body, D_DRMANS["drmans_exchange__005"].desc)
    )}
  </div>
  ${guide(`→ 입금자명·입금금액 확인 후 IBK 기업은행 계좌 조회
🔗 IBK기업은행 : https://www.ibk.co.kr/`)}

  ${secTitle("4", "포장 및 회수 안내",null,"sec4")}
  <div class="grp-h">🔹 반품</div>
  <div class="grid2">
    ${col("blue","🔹 전체 반품",
      subcard(D_DRMANS["drmans_refund__007"].name, D_DRMANS["drmans_refund__007"].tag, D_DRMANS["drmans_refund__007"].body, D_DRMANS["drmans_refund__007"].desc)
      + caution(`🎁 증정품 회수 O`)
    )}
    ${col("pink","🔹 부분 반품",
      subcard(D_DRMANS["drmans_refund__008"].name, D_DRMANS["drmans_refund__008"].tag, D_DRMANS["drmans_refund__008"].body, D_DRMANS["drmans_refund__008"].desc)
      + caution(`🎁 증정품 회수 X`)
    )}
  </div>
  <div class="stack">
    ${col("gray","💡 복합 유형 (예: 불량 반품 + 단순변심 반품)",
      subcard(D_DRMANS["drmans_refund__009"].name, D_DRMANS["drmans_refund__009"].tag, D_DRMANS["drmans_refund__009"].body, D_DRMANS["drmans_refund__009"].desc)
    )}
  </div>
  <div class="grid2">
    ${subcard(D_DRMANS["drmans_refund__011"].name, D_DRMANS["drmans_refund__011"].tag, D_DRMANS["drmans_refund__011"].body, D_DRMANS["drmans_refund__011"].desc)}
  </div>
  <div class="grp-h">🔹 교환</div>
  <div class="grid2">
    ${col("blue","🔹 전체 교환",
      subcard(D_DRMANS["drmans_exchange__006"].name, D_DRMANS["drmans_exchange__006"].tag, D_DRMANS["drmans_exchange__006"].body, D_DRMANS["drmans_exchange__006"].desc) + caution(`🎁 증정품 회수 O`)
    )}
    ${col("pink","🔹 부분 교환",
      subcard(D_DRMANS["drmans_exchange__007"].name, D_DRMANS["drmans_exchange__007"].tag, D_DRMANS["drmans_exchange__007"].body, D_DRMANS["drmans_exchange__007"].desc) + caution(`🎁 증정품 회수 X`)
    )}
  </div>
  <div class="warn-note">⚠️ 고객 동의 / 교환 배송비 입금 완료 후 진행</div>

  ${secTitle("5", "교환/반품 안내",null,"step5")}
  ${secTitle("🔄","교환 시","검수 및 재출고 안내","exchangeFlow")}
  ${macro(D_DRMANS["drmans_exchange__009"].name, D_DRMANS["drmans_exchange__009"].tag, D_DRMANS["drmans_exchange__009"].body, D_DRMANS["drmans_exchange__009"].desc)}
  ${guide(`▶ 상품 수거·검수 후 이상 없을 시 <a href="https://docs.google.com/spreadsheets/d/1Bj5stx8hXMoPL8L91EYu6e5TA7pqEAjges4Cejs1wjo/edit?gid=388846546#gid=388846546" target="_blank">SCM-CX/CS팀 수기 시트</a>에 재출고 요청`)}
  ${secTitle("💰","반품 시","결제수단별 환불 안내","refundFlow")}
  <div class="grid2">
    ${col("blue","🔹 카드결제",
      subcard(D_DRMANS["drmans_refund__012"].name, D_DRMANS["drmans_refund__012"].tag, D_DRMANS["drmans_refund__012"].body, D_DRMANS["drmans_refund__012"].desc)
    )}
    ${col("blue","🔹 계좌 환불",
      subcard(D_DRMANS["drmans_refund__013"].name, D_DRMANS["drmans_refund__013"].tag, D_DRMANS["drmans_refund__013"].body, D_DRMANS["drmans_refund__013"].desc)
      + subcard(D_DRMANS["drmans_refund__014"].name, D_DRMANS["drmans_refund__014"].tag, D_DRMANS["drmans_refund__014"].body, D_DRMANS["drmans_refund__014"].desc)
    )}
  </div>
`;