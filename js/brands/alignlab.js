const REF_ALIGN = `
  

  <h1>🛠️ 불량 AS 교환/반품</h1>
    <div class="sub">불량 AS로 인한 교환·반품 (자사몰/외부몰)</div>

  
  <div class="h1lvl" id="secFlow">🧭 상담 플로우</div>
  
  <div class="flow-diagram"><div class="fd-box">1. 보증기간 확인</div><div class="fd-arrow">▶</div><div class="fd-box">2. 불량 유형 확인</div><div class="fd-arrow">▶</div><div class="fd-box">3. 증빙(사진·영상) 확인</div><div class="fd-arrow">▶</div><div class="fd-box">4. AS 접수 (무상 / 유상)</div></div>
  <div class="fork fork-split"><div class="fork-branch"><div class="fork-label-row"><span class="fork-label">🛠️ 무상 AS</span><span class="fork-label-line"></span><span class="fork-label-desc">제품 자체 자연적 고장</span></div><div style="margin:16px 0"><span class="free-flow-tag principle">원칙</span><div class="free-flow-box">🔷 무상 교환 안내</div><div class="free-flow-connector">↓ 고객이 반품 요청 시</div><span class="free-flow-tag exception">제품수령일로부터 3개월 이내 건만</span><div class="free-flow-box exception">🔷 무상 반품 안내</div></div></div><div class="fork-branch b2"><div class="fork-label-row"><span class="fork-label">🔧 유상 AS</span><span class="fork-label-line"></span><span class="fork-label-desc">고객 과실에 의한 제품 파손</span></div><div class="flow-diagram"><div class="fd-box">① 유상 비용 안내</div><div class="fd-arrow">▶</div><div class="fd-box">② 자체 폐기 안내</div><div class="fd-arrow">▶</div><div class="fd-box">③ 재출고 안내</div><div class="fd-box">✔️ [유상비용 미입금 시] 상담 종료 유도</div></div></div></div>
    
  <div class="h1lvl" id="asBase">💡 AS 정책 및 기준</div>${guide(`✨ 얼라인랩의 AS 품질 보증은 <b style="color:#E03131">디바이스</b> 제품에만 제공`)}
  
  <div class="blue-note"><div class="bn-body"><div style="display:grid;grid-template-columns:1fr 1fr;gap:0"><div style="padding-right:18px"><b>🛠️ 얼라인랩 디바이스 품질 보증 기간 1년</b><br><b>상품 수령일 기준</b>이며, 유상·무상 서비스 기간을 포함한 전체 기간입니다.<br>(👉🏻 <a href="https://alignlab.co.kr/article/%EA%B3%B5%EC%A7%80%EC%82%AC%ED%95%AD/1/5353/" target="_blank">얼라인랩 자사몰 디바이스 AS 공지사항</a> 참고)</div><div style="padding-left:18px;border-left:2px dashed #C7DAF2"><b>💡 배송비 유의사항</b><br>🛠️ <b>무상 AS</b> (교환·반품) 배송비 고객 부담 <b>X</b><br>🔧 <b>유상 AS</b> (유상 교환) 기존 제품 자체 폐기 안내<br>&nbsp;&nbsp;┗ 수긍 시 편도 3,000원 / 미수긍 시 왕복 6,000원 고객 부담</div></div></div></div>
  <div class="cmp-table-wrap"><table class="cmp-table">
  <colgroup><col style="width:12%"><col style="width:20%"><col style="width:46%"><col style="width:22%"></colgroup>
  <thead><tr>
  <th class="cmp-corner">유/무상</th>
  <th>날짜 기준</th>
  <th>제품 사용 환경</th>
  <th>AS 방법</th>
  </tr></thead>
  <tbody>
  <tr>
  <td class="cmp-row-label" style="color:#234A86;font-weight:800">무상 AS</td>
  <td>상품 수령일로부터 6개월 이내</td>
  <td>정상적 사용 환경·제품 자체의 자연적 고장</td>
  <td>무상 교환<div style="color:#1B3A68;font-weight:700;margin-top:6px;font-size:12px;line-height:1.6">⚠️ 단, 고객이 상품 수령 후 <b>3개월 이내</b> 반품을 요청한 경우에만 <b>무상 반품 가능</b></div></td>
  </tr>
  <tr>
  <td class="cmp-row-label" style="color:#ea2261;font-weight:800">유상 AS</td>
  <td>상품 수령일로부터 6개월 경과 ~ 1년</td>
  <td>제품 이상이 아닌, 고객 과실에 의한 제품 파손, 분실, 사용 부주의 등으로 인한 고장</td>
  <td>유상 교환</td>
  </tr>
  <tr>
  <td class="cmp-row-label" style="color:#ea2261;font-weight:800">유상 AS</td>
  <td>상품 수령일로부터 6개월 경과 ~ 1년</td>
  <td>원인 불문 유상 서비스만 제공 (무상 AS 불가)</td>
  <td>유상 교환</td>
  </tr>
  <tr>
  <td class="cmp-row-label" style="color:#ea2261;font-weight:800">유상 AS</td>
  <td>상품 수령일로부터 1년 경과</td>
  <td>기간 및 신청 횟수 무관 유상 AS 제공</td>
  <td>유상 교환</td>
  </tr>
  </tbody></table></div>
  ${limitNotice("구성품 누락 / 초도 파손 / 이염·오염 case", `✔️ 구성품 누락<br>✔️ 초도 파손 / 이염 / 오염<br>→ 상품 수령일로부터 <b>7일 이내 문의 시에만 무상 접수 가능</b>`)}
  ${edgeCaseCompare(`① 유사 모델을 '1년 이내 유상교환 가격'으로 구매 안내<br>② 고객 거부 시 → 구입가를 자사몰 포인트로 대체 환급`, `① 유사 모델을 '1년 경과 유상교환 가격'으로 구매 안내<br>② 고객 거부 시 → 정액 감가상각한 잔여 금액에 구입가의 10%를 가산 후 자사몰 포인트로 대체 환급`)}


  
  
  
  <div class="h1lvl" id="guar"><span class="num">1</span>보증기간 확인</div>
  <div class="quote-box"><b>어드민 또는 물류 전산에서 주문정보 조회 후 상품 수령일 기준으로 경과 기간을 확인한 뒤,
보증기간 정책에 따라 무상/유상 AS 여부 판단</b>

💡 고객이 변경된 기간별 정책에 대해 이의나 불만을 제기하는 경우 무상 AS·유상 AS의 관련 템플릿을 참고하여 응대</div>
  <div class="h1lvl" id="step1"><span class="num">2</span>불량 유형 확인</div>
  <div class="quote-box"><b>💡 AS·불량은 사과·양해 멘트 선행 필수</b>. 고객 상황에 맞는 공감 멘트 추가하여 케어 진행</div>
  <div class="grid2">${subcard(D_ALIGNLAB["align_as__001"].name, D_ALIGNLAB["align_as__001"].tag, D_ALIGNLAB["align_as__001"].body, D_ALIGNLAB["align_as__001"].desc)}${subcard(D_ALIGNLAB["align_as__002"].name, D_ALIGNLAB["align_as__002"].tag, D_ALIGNLAB["align_as__002"].body, D_ALIGNLAB["align_as__002"].desc)}</div>
  ${guide(`👉🏻 증상에 해당하는 유형으로 이어서 상담 진행 (표 참고)`)}
  <div class="h2lvl">💡 사용법 안내 필요 여부에 따른 유형 구분</div>
  <div class="lvl2-body"><table class="astbl"><thead><tr><th>사용법 안내 여부</th><th>증상</th></tr></thead><tbody><tr><td>A. 사용법 안내 필요</td><td><a class="jump-link" href="#t1" onclick="return jumpTo('t1')">1. 충전/전원/작동</a> (증빙 자료로 판단 가능한 유형 전체)<br><a class="jump-link" href="#t3" onclick="return jumpTo('t3')">2. 진동/EMS 강도</a></td></tr><tr><td>B. 사용법 안내 불필요</td><td><a class="jump-link" href="#tsound" onclick="return jumpTo('tsound')">3. 소음 강도 &amp; 쿠팡/네이버 자동수거</a><br><a class="jump-link" href="#t5" onclick="return jumpTo('t5')">4. 구성품 누락</a><br><a class="jump-link" href="#t6" onclick="return jumpTo('t6')">5. 이염/오염/초도파손/스크래치</a></td></tr></tbody></table></div>
  <div class="h2lvl as-sub" id="groupA">A. 사용법 안내 필요</div>
  <div class="lvl2-body">${guide(`📌 해당 증상 CS건은 <b>사용법 오인으로 인한 불량 문의가 많으므로 제품별 유의사항 또는 사용법 안내가 선행</b>되어야 함\n⚠️ 단, <span style="color:#1B3A68">ALF·워크플로우에서 관련 안내가 완료된 경우에는아래 제품별 유의사항 중복 안내를 생략</span>하고, Flow 및 고객 증빙을 확인하여 미확인 사항만 추가 확인 `)}<div class="typ" id="t1"><span class="tnum">1</span>충전/전원/작동</div><div class="lvl3-body"><div class="quote-box"><b>📌 얼라인랩 디바이스 제품 안내</b>\n· 충전·전원·작동 불량 문의 시 5V 1A 정격전압 사용 여부 확인은 필수입니다.\n· 정격전압이 확인되지 않은 경우에는 반드시 증빙 확인 후 불량 여부 판단</div><div class="quote-box"><b>제품별 유의사항은 <a href="https://docs.google.com/spreadsheets/d/1OwcLG2XuwPUHt7grmSIjpWsZqU8MAhWPrcp-RVykLMI/edit?gid=826394219#gid=826394219" target="_blank">[얼라인랩] 제품별 사용법 템플릿</a> 시트 또는 채널톡 매크로 이용</b></div><div class="grid2">${macro(D_ALIGNLAB["align_as__003"].name, D_ALIGNLAB["align_as__003"].tag, D_ALIGNLAB["align_as__003"].body, D_ALIGNLAB["align_as__003"].desc)}${macro(D_ALIGNLAB["align_as__004"].name, D_ALIGNLAB["align_as__004"].tag, D_ALIGNLAB["align_as__004"].body, D_ALIGNLAB["align_as__004"].desc)}</div><div class="h3lvl">🔴 제품별 정격전압 사용여부 확인</div>
  <div class="lvl3-body"><div class="grid2">${col("blue","◆ 어댑터 미동봉 제품",`<div class="stack">`+subcard(D_ALIGNLAB["align_as__005"].name, D_ALIGNLAB["align_as__005"].tag, D_ALIGNLAB["align_as__005"].body, D_ALIGNLAB["align_as__005"].desc)+subcard(D_ALIGNLAB["align_as__006"].name, D_ALIGNLAB["align_as__006"].tag, D_ALIGNLAB["align_as__006"].body, D_ALIGNLAB["align_as__006"].desc)+`</div>`)}${col("pink","◆ 어댑터 동봉 제품",`<div class="stack">`+subcard(D_ALIGNLAB["align_as__097"].name, D_ALIGNLAB["align_as__097"].tag, D_ALIGNLAB["align_as__097"].body, D_ALIGNLAB["align_as__097"].desc)+subcard(D_ALIGNLAB["align_as__098"].name, D_ALIGNLAB["align_as__098"].tag, D_ALIGNLAB["align_as__098"].body, D_ALIGNLAB["align_as__098"].desc)+`</div>`)}</div>${guide(`✔️ 고객 정상 사용 답변 시 상담 종료 유도 (무응답 종료 포함)\n✔️ 올바르게 사용 주장 + 증빙(사진·영상) 미흡 시 <a class="jump-link" href="#evidCheck" onclick="return jumpTo('evidCheck')">② 증빙 확인 (사진/영상)</a> 단계로 이동\n✔️ 올바르게 사용 주장 + 증빙(사진·영상) 확인 완료 시 <a class="jump-link" href="#step2" onclick="return jumpTo('step2')">3. AS 접수</a> 로 이동`)}</div>
  <div class="h3lvl" id="evidCheck">② 증빙 확인 (사진/영상)</div><div class="lvl3-body">${caution(`⚠️  단, 추가 증빙 자료 요청은 고객이 선첨부한 자료(사진/영상)가 있을 시엔 미흡할 경우에만  진행`)}<div class="grid2">${subcard(D_ALIGNLAB["align_as__007"].name, D_ALIGNLAB["align_as__007"].tag, D_ALIGNLAB["align_as__007"].body, D_ALIGNLAB["align_as__007"].desc)}${subcard(D_ALIGNLAB["align_as__008"].name, D_ALIGNLAB["align_as__008"].tag, D_ALIGNLAB["align_as__008"].body, D_ALIGNLAB["align_as__008"].desc)}</div><div class="grid2">${subcard(D_ALIGNLAB["align_as__009"].name, D_ALIGNLAB["align_as__009"].tag, D_ALIGNLAB["align_as__009"].body, D_ALIGNLAB["align_as__009"].desc)}</div>${guide(`<b>👉🏻 증빙(사진·영상) 확인 완료 시 <a class="jump-link" href="#step2" onclick="return jumpTo('step2')">3. AS 접수</a>로 이동</b>`)}</div><div class="grp-h">🔷 작동 관련 증상</div>${caution(`⚠️ 제품별 작동 관련 증상은 상이 (버튼으로 바람 세기 조절이 안됨, 강도 조절이 안됨 등) 하며 충전/전원 불량이 아닌 사진/영상으로 확인 가능한 모든 작동 불량을 포함함.`)}${macro(D_ALIGNLAB["align_as__010"].name, D_ALIGNLAB["align_as__010"].tag, D_ALIGNLAB["align_as__010"].body, D_ALIGNLAB["align_as__010"].desc)}${guide(`<b>👉🏻 증빙(사진·영상) 확인 완료 시 <a class="jump-link" href="#step2" onclick="return jumpTo('step2')">3. AS 접수</a>로 이동</b>`)}</div><div class="typ" id="t3"><span class="tnum">2</span>진동/EMS 강도</div><div class="lvl3-body"><div class="quote-box"><b>⚠️ 유의사항</b>\n✔️ 본 유형은 진동·EMS 체감 강도 관련 문의에만 적용\n→ 고객 체감에 따른 문의로 사진·영상만으로는 확인이 어려운 유형이므로, 증빙(사진·영상)은 요청하지 않습니다.\n✔️ '리프핏 아이' 제품은 진동 불량(눈가 진동이 느껴지지 않음) 문의 시 응대 기준이 다릅니다.\n→ 아래 제품에 맞는 템플릿을 선택하여 안내\n🔷 리프핏 아이&nbsp;&nbsp;&nbsp;🔷 그 외 제품</div><table style="border-collapse:collapse;width:100%;margin:6px 0 14px;font-size:13px"><thead><tr><th style="background:#9BBB59;color:#fff;padding:9px 12px;text-align:left;border:1px solid #d9d9d9">👉 적용 예시</th><th style="background:#9BBB59;color:#fff;padding:9px 12px;text-align:left;border:1px solid #d9d9d9">👉 미적용 예시 (작동 불량 등으로 진행)</th></tr></thead><tbody><tr><td style="padding:9px 12px;border:1px solid #d9d9d9;vertical-align:top">눈가 진동이 안느껴져요. EMS 자극이 없어요 등</td><td style="padding:9px 12px;border:1px solid #d9d9d9;vertical-align:top">온도·강도 조절 버튼 불량 / EMS 단계 조절 기능 자체 불량 등</td></tr></tbody></table><div class="grp-h">🔷 리프핏 아이</div><div class="quote-box"><b>⚠️ 리프핏 아이(눈가 진동 미체감)는 일반 불량 프로세스와 상이</b>\n· 최초 문의 : 사용법 안내 후 최소 2주 사용 권장\n· 이후 동일 증상 또는 고객 미수긍 시 품질보증기간 기준 교환 접수\n· 회수&검수 안내는 동일하지만, 실제 운영은 회수 완료 후 재출고 교환으로 진행 (검수 결과에 따른 정상/불량 판정 없음)</div><div class="grp-h">① 올바른 사용법 안내</div>${macro(D_ALIGNLAB["align_as__011"].name, D_ALIGNLAB["align_as__011"].tag, D_ALIGNLAB["align_as__011"].body, D_ALIGNLAB["align_as__011"].desc)}<div class="grp-h">② 고객 수긍 여부에 따른 안내</div><div class="grid2"><div>${macro(D_ALIGNLAB["align_as__012"].name, D_ALIGNLAB["align_as__012"].tag, D_ALIGNLAB["align_as__012"].body, D_ALIGNLAB["align_as__012"].desc)}</div><div>${macro(D_ALIGNLAB["align_as__013"].name, D_ALIGNLAB["align_as__013"].tag, D_ALIGNLAB["align_as__013"].body, D_ALIGNLAB["align_as__013"].desc)}${macro(D_ALIGNLAB["align_as__014"].name, D_ALIGNLAB["align_as__014"].tag, D_ALIGNLAB["align_as__014"].body, D_ALIGNLAB["align_as__014"].desc)}</div></div>${guide(`💡 기존 무상 교환과 다르게, 리프핏 아이의 무상 교환의 경우 \n회수&재출고 동시 진행이 아닌, 기존 제품 수거 완료 이후 재출고 처리!`)}${guide(`👉🏻 이후 <a class="jump-link" href="#freeFlow" onclick="return jumpTo('freeFlow')">🛠️ 무상 AS</a>로 이동하여 flow 대로 진행`)}<div class="grp-h">🔷 그 외 제품</div><div class="quote-box"><b>📌  리프핏 아이 외 제품의 진동·EMS 강도 불량 문의</b>\n→ 제품별 올바른 사용법(정격전압·크림 사용 등) 안내 후 재사용 권장\n→ 올바른 방법으로 사용 후에도 동일 증상을 지속 주장하는 경우 제품 회수·검수 후 결과에 따라 처리합니다. (채팅 상담으로 증상 확인 불가)\n\n⚠️ 단, ALF·워크플로우에서 관련 안내가 완료된 경우에는아래 제품별 유의사항 중복 안내를 생략하고, Flow 및 고객 증빙을 확인하여 미확인 사항만 추가 확인</div><div class="grp-h">① 올바른 사용법 안내</div><div class="quote-box"><b>제품별 유의사항은 <a href="https://docs.google.com/spreadsheets/d/1OwcLG2XuwPUHt7grmSIjpWsZqU8MAhWPrcp-RVykLMI/edit?gid=826394219#gid=826394219" target="_blank">[얼라인랩] 제품별 사용법 템플릿</a> 시트 또는 채널톡 매크로 이용</b></div><div class="grid2"><div>${macro(D_ALIGNLAB["align_as__015"].name, D_ALIGNLAB["align_as__015"].tag, D_ALIGNLAB["align_as__015"].body, D_ALIGNLAB["align_as__015"].desc)}</div><div>${macro(D_ALIGNLAB["align_as__016"].name, D_ALIGNLAB["align_as__016"].tag, D_ALIGNLAB["align_as__016"].body, D_ALIGNLAB["align_as__016"].desc)}${macro(D_ALIGNLAB["align_as__017"].name, D_ALIGNLAB["align_as__017"].tag, D_ALIGNLAB["align_as__017"].body, D_ALIGNLAB["align_as__017"].desc)}</div></div>${guide(`✨ 리프핏 숄더는 전용 크림(리프핏 바디 크림)을 사용하는 제품으로 EMS 강도 문의는 아래 별도 사용법 템플릿 사용`)}${macro(D_ALIGNLAB["align_as__018"].name, D_ALIGNLAB["align_as__018"].tag, D_ALIGNLAB["align_as__018"].body, D_ALIGNLAB["align_as__018"].desc)}<div class="grp-h">② 회수·검수 안내</div>${macro(D_ALIGNLAB["align_as__019"].name, D_ALIGNLAB["align_as__019"].tag, D_ALIGNLAB["align_as__019"].body, D_ALIGNLAB["align_as__019"].desc)}${guide(`👉🏻 이후 <a class="jump-link" href="#freeFlow" onclick="return jumpTo('freeFlow')">🛠️ 무상 AS</a>로 이동하여 flow 대로 진행`)}</div></div>
  <div class="h2lvl as-sub" id="groupB">B. 사용법 안내 불필요</div>
  <div class="lvl2-body"><div class="typ" id="tsound"><span class="tnum">3</span>소음 강도 &amp; 쿠팡/네이버 자동수거</div><div class="lvl3-body"><div class="grid2"><div class="quote-box"><b>✔️ 소음 강도 불량</b>\n① 사용자의 '체감 강도(소음)' 관련 문의만 해당함\n→ 육안으로 확인이 어려운 유형으로, 사진/영상 요청은 진행하지 않음\n② 사진/영상으로 확인 불가하므로 회수·검수 후 결과에 따라 진행</div><div class="quote-box"><b>✔️ 쿠팡/네이버 스마트스토어 자동수거 건</b>\n① 쿠팡·네이버 스마트스토어 고객 직접 신청 건 중 자동 수거 진행 중인 건\n→ 각 어드민에서 자동 수거 진행 여부를 확인\n② 자동 수거 진행 중엔 철회가 어려우므로, 회수·검수 후 결과에 따라 처리 가능함을 안내</div></div><table style="border-collapse:collapse;width:100%;margin:6px 0 14px;font-size:13px"><thead><tr><th style="background:#9BBB59;color:#fff;padding:9px 12px;text-align:left;border:1px solid #d9d9d9">👉 소리 강도 불량 적용 예시</th><th style="background:#9BBB59;color:#fff;padding:9px 12px;text-align:left;border:1px solid #d9d9d9">👉 소리 강도 불량 미적용 예시 (작동 불량 등으로 진행)</th></tr></thead><tbody><tr><td style="padding:9px 12px;border:1px solid #d9d9d9;vertical-align:top">소리가 너무 커요 등</td><td style="padding:9px 12px;border:1px solid #d9d9d9;vertical-align:top">작동 시 발생하는 비정상 잡음 등</td></tr></tbody></table><div class="grp-h">① 회수 및 검수 과정 안내</div>${macro(D_ALIGNLAB["align_as__020"].name, D_ALIGNLAB["align_as__020"].tag, D_ALIGNLAB["align_as__020"].body, D_ALIGNLAB["align_as__020"].desc)}${guide(`💡 자동수거 물류센터 회수 내역 조회는 입고 완료 후에만 조회됨\n회수중 상태에서는 물류센터(품고 또는 정석)에서 조회되지 않음`)}<div class="grid2"><div>${macro(D_ALIGNLAB["align_as__021"].name, D_ALIGNLAB["align_as__021"].tag, D_ALIGNLAB["align_as__021"].body, D_ALIGNLAB["align_as__021"].desc)}${guide(`물류센터(품고 또는 정석) 별도반출&불량 검수 시트에 취합 후 검수 결과에 따라\n✔️ '정상'일 경우 → 고객 주소로 반송\n✔️ '불량'일 경우 → 품질보증기간 정책에 따라 진행\n\n👇🏻 고객 회수·검수에 대해 불만 제기할 경우 ② 검수 소요기간 불만 시 참고하여 진행\n\n👉🏻 물류센터별 시트 바로가기\n① <a href="https://docs.google.com/spreadsheets/d/1ZgqMOaFfBW60cln1V6oVRRSmjEeNjZSJrlf1ytdM5V4/edit?pli=1&amp;gid=1560630591#gid=1560630591" target="_blank">[품고/올릿] 별도반출&불량 검수</a>\n② <a href="https://docs.google.com/spreadsheets/d/1X7-VBL7xA8UWJtdHh5elOtYrDaA-qwtrrvc0qrM5_eU/edit?gid=0#gid=0" target="_blank">[정석/올릿] 별도반출&불량 검수</a>`)}</div><div>${macro(D_ALIGNLAB["align_as__022"].name, D_ALIGNLAB["align_as__022"].tag, D_ALIGNLAB["align_as__022"].body, D_ALIGNLAB["align_as__022"].desc)}${guide(`물류센터(품고 또는 정석) 별도반출&불량 검수 시트에 취합 후 검수 결과에 따라\n✔️ '정상'일 경우 → 고객 주소로 반송\n✔️ '불량'일 경우 → 고객 접수한 처리 방안대로 진행\n\n※ 쿠팡 건은 검수 결과 확인 전 쿠팡 자체적으로 기한 내 반품 완료 처리되는 경우가 대부분\n→ 고객 별도 안내 불필요, 시스템만 인지하고 이해하기!\n\n👉🏻 추후 검수 결과에 따라 <a class="jump-link" href="#exNoEvid" onclick="return jumpTo('exNoEvid')">✨ [예외] 증빙 미제출</a> flow 대로 진행\n\n👉🏻 물류센터별 시트 바로가기\n① <a href="https://docs.google.com/spreadsheets/d/1ZgqMOaFfBW60cln1V6oVRRSmjEeNjZSJrlf1ytdM5V4/edit?pli=1&amp;gid=1560630591#gid=1560630591" target="_blank">[품고/올릿] 별도반출&불량 검수</a>\n② <a href="https://docs.google.com/spreadsheets/d/1X7-VBL7xA8UWJtdHh5elOtYrDaA-qwtrrvc0qrM5_eU/edit?gid=0#gid=0" target="_blank">[정석/올릿] 별도반출&불량 검수</a>`)}</div></div><div class="grp-h">② 검수 소요기간 불만 시</div><div class="grid2"><div>${macro(D_ALIGNLAB["align_as__023"].name, D_ALIGNLAB["align_as__023"].tag, D_ALIGNLAB["align_as__023"].body, D_ALIGNLAB["align_as__023"].desc)}</div><div>${macro(D_ALIGNLAB["align_as__024"].name, D_ALIGNLAB["align_as__024"].tag, D_ALIGNLAB["align_as__024"].body, D_ALIGNLAB["align_as__024"].desc)}${macro(D_ALIGNLAB["align_as__025"].name, D_ALIGNLAB["align_as__025"].tag, D_ALIGNLAB["align_as__025"].body, D_ALIGNLAB["align_as__025"].desc)}</div></div>${guide(`※ 사무실 반출 필요 건은 물류센터(품고 또는 정석) 별도반출&불량 검수 요청 시트 M열(구분) 별도반출로 선택 필수 > 매주 화요일에 퀵으로 일괄 반출됨\n\n👉🏻 물류센터별 시트 바로가기\n① <a href="https://docs.google.com/spreadsheets/d/1ZgqMOaFfBW60cln1V6oVRRSmjEeNjZSJrlf1ytdM5V4/edit?pli=1&amp;gid=1560630591#gid=1560630591" target="_blank">[품고/올릿] 별도반출&불량 검수</a>\n② <a href="https://docs.google.com/spreadsheets/d/1X7-VBL7xA8UWJtdHh5elOtYrDaA-qwtrrvc0qrM5_eU/edit?gid=0#gid=0" target="_blank">[정석/올릿] 별도반출&불량 검수</a>`)}${guide(`👉🏻 이후 검수 결과에 따라 <a class="jump-link" href="#exNoEvid" onclick="return jumpTo('exNoEvid')">✨ [예외] 증빙 미제출</a> flow 대로 진행`)}</div><div class="typ" id="t5"><span class="tnum">4</span>구성품 누락</div><div class="lvl3-body"><div class="quote-box"><b>⚠️ 상품 수령일로부터 영업일 7일 이내 문의 시에만 처리 가능</b></div><div class="grp-h">① 배송 완료일자 확인</div><div class="grid2">${macro(D_ALIGNLAB["align_as__026"].name, D_ALIGNLAB["align_as__026"].tag, D_ALIGNLAB["align_as__026"].body, D_ALIGNLAB["align_as__026"].desc)}${macro(D_ALIGNLAB["align_as__027"].name, D_ALIGNLAB["align_as__027"].tag, D_ALIGNLAB["align_as__027"].body, D_ALIGNLAB["align_as__027"].desc)}</div>${guide(`▶ 고객 강하게 미수긍 시 예외 처리 진행`)}${macro(D_ALIGNLAB["align_as__028"].name, D_ALIGNLAB["align_as__028"].tag, D_ALIGNLAB["align_as__028"].body, D_ALIGNLAB["align_as__028"].desc)}<div class="grp-h">2️⃣ 별도 재출고 안내</div>${macro(D_ALIGNLAB["align_as__029"].name, D_ALIGNLAB["align_as__029"].tag, D_ALIGNLAB["align_as__029"].body, D_ALIGNLAB["align_as__029"].desc)}${macro(D_ALIGNLAB["align_as__030"].name, D_ALIGNLAB["align_as__030"].tag, D_ALIGNLAB["align_as__030"].body, D_ALIGNLAB["align_as__030"].desc)}${macro(D_ALIGNLAB["align_as__031"].name, D_ALIGNLAB["align_as__031"].tag, D_ALIGNLAB["align_as__031"].body, D_ALIGNLAB["align_as__031"].desc)}<div class="grp-h">🔔 [예외케이스] 구성품 누락으로 전체 반품 희망</div><div class="quote-box"><b>상품 개봉 여부와 무관하게 제품 회수 및 전액 환불 처리로 진행</b></div>${macro(D_ALIGNLAB["align_as__032"].name, D_ALIGNLAB["align_as__032"].tag, D_ALIGNLAB["align_as__032"].body, D_ALIGNLAB["align_as__032"].desc)}<div class="grp-h">② 결제수단별 환불 안내</div><div class="grid2">${col("blue","◆ 카드결제",subcard(D_ALIGNLAB["align_as__033"].name, D_ALIGNLAB["align_as__033"].tag, D_ALIGNLAB["align_as__033"].body, D_ALIGNLAB["align_as__033"].desc))}${col("pink","◆ 계좌 환불",`<div class="stack">`+subcard(D_ALIGNLAB["align_as__034"].name, D_ALIGNLAB["align_as__034"].tag, D_ALIGNLAB["align_as__034"].body, D_ALIGNLAB["align_as__034"].desc)+subcard(D_ALIGNLAB["align_as__035"].name, D_ALIGNLAB["align_as__035"].tag, D_ALIGNLAB["align_as__035"].body, D_ALIGNLAB["align_as__035"].desc)+`</div>`)}</div></div><div class="typ" id="t6"><span class="tnum">5</span>이염/오염/초도파손/스크래치</div><div class="lvl3-body"><div class="quote-box"><b>⚠️ 상품 수령일로부터 영업일 7일 이내 문의 시에만 처리 가능</b></div><div class="grp-h">① 배송 완료일자 확인</div><div class="grid2">${macro(D_ALIGNLAB["align_as__036"].name, D_ALIGNLAB["align_as__036"].tag, D_ALIGNLAB["align_as__036"].body, D_ALIGNLAB["align_as__036"].desc)}${macro(D_ALIGNLAB["align_as__037"].name, D_ALIGNLAB["align_as__037"].tag, D_ALIGNLAB["align_as__037"].body, D_ALIGNLAB["align_as__037"].desc)}</div>${guide(`▶ 고객 강하게 미수긍 시 예외 처리 진행`)}${macro(D_ALIGNLAB["align_as__038"].name, D_ALIGNLAB["align_as__038"].tag, D_ALIGNLAB["align_as__038"].body, D_ALIGNLAB["align_as__038"].desc)}<div class="grp-h">② 고객 요청 처리 방안 확인</div>${macro(D_ALIGNLAB["align_as__039"].name, D_ALIGNLAB["align_as__039"].tag, D_ALIGNLAB["align_as__039"].body, D_ALIGNLAB["align_as__039"].desc)}${guide(`⚠️ 상품수령일로부터 7일 이내 이염/오염/초도파손은 고객이 원하는 처리 방안(교환 또는 반품) 확인 후 진행 (단, 기간별 정책에 따라만 진행 가능)\n👉🏻 교환 요청 시 <a class="jump-link" href="#freeBranch" onclick="return jumpTo('freeBranch')">🔷 무상 교환 안내</a> 로 이동\n👉🏻 반품 요청 시 <a class="jump-link" href="#freePack" onclick="return jumpTo('freePack')">🔷 무상 반품 안내</a> 로 이동`)}</div></div>
  <div class="h2lvl" id="t4">🔁 재불량 (교환품 동일 증상)</div>
  <div class="lvl2-body">${caution(`👉 [예시] 2026.01.01 리프핏 아이 충전 불량으로 무상 교환 진행 → 2026.03.02 교환 제품에서 동일 증상(충전 불량)으로 재문의\n⚠️ 2번 연속으로 동일 증상 불량 주장 건(충전 불량으로 교환 받은 제품이 또 충전 불량 주장)의 경우 추가적인 교환 없이 반품 진행`)}<div class="grp-h">💡 공통 안내</div>${macro(D_ALIGNLAB["align_as__040"].name, D_ALIGNLAB["align_as__040"].tag, D_ALIGNLAB["align_as__040"].body, D_ALIGNLAB["align_as__040"].desc)}${macro(D_ALIGNLAB["align_as__041"].name, D_ALIGNLAB["align_as__041"].tag, D_ALIGNLAB["align_as__041"].body, D_ALIGNLAB["align_as__041"].desc)}<div class="grid2">${macro(D_ALIGNLAB["align_as__042"].name, D_ALIGNLAB["align_as__042"].tag, D_ALIGNLAB["align_as__042"].body, D_ALIGNLAB["align_as__042"].desc)}${macro(D_ALIGNLAB["align_as__043"].name, D_ALIGNLAB["align_as__043"].tag, D_ALIGNLAB["align_as__043"].body, D_ALIGNLAB["align_as__043"].desc)}</div>${macro(D_ALIGNLAB["align_as__044"].name, D_ALIGNLAB["align_as__044"].tag, D_ALIGNLAB["align_as__044"].body, D_ALIGNLAB["align_as__044"].desc)}<div class="grp-h">③ 결제수단별 환불 안내</div><div class="grid2">${col("blue","◆ 카드결제",subcard(D_ALIGNLAB["align_as__045"].name, D_ALIGNLAB["align_as__045"].tag, D_ALIGNLAB["align_as__045"].body, D_ALIGNLAB["align_as__045"].desc))}${col("pink","◆ 계좌 환불",`<div class="stack">`+subcard(D_ALIGNLAB["align_as__046"].name, D_ALIGNLAB["align_as__046"].tag, D_ALIGNLAB["align_as__046"].body, D_ALIGNLAB["align_as__046"].desc)+subcard(D_ALIGNLAB["align_as__047"].name, D_ALIGNLAB["align_as__047"].tag, D_ALIGNLAB["align_as__047"].body, D_ALIGNLAB["align_as__047"].desc)+`</div>`)}</div></div>
  <div class="h1lvl" id="step2"><span class="num">3</span>AS 접수</div>
  <div class="h2lvl as-major" id="freeFlow">🛠️ 무상 AS</div><div class="lvl2-body"><div class="h3lvl" id="freeBranch">🔷 무상 교환 안내</div><div class="lvl3-body"><div class="quote-box"><b>⚠️ 상품 수령일로부터 6개월 이내 제품 자체 고장은 원칙적으로 무상 교환으로 안내</b>

✔️ 만약 고객이 반품을 요청할 경우, 아래 기간에 따라 응대
· 상품 수령일 3개월 이내 → ② 무상 반품 접수
· 상품 수령일 3개월 경과 → ⚠️ [예외] 3개월 경과 건이나 무상 반품 요청 (아래 템플릿 안내)</div><table class="astbl"><thead><tr><th style="width:210px">구분</th><th>안내</th></tr></thead><tbody><tr><td>수령일로부터 3개월 경과건<br>👉🏻 무상 반품 요청할 경우</td><td class="cmp-ment"><span class="tag">#ALAS_3개월경과_반품요청</span><button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button><div class="cmp-ment-body">고객님, 이용에 불편을 드려 죄송합니다. 🙏🏻\n확인 결과, 고객님의 제품은 수령일로부터 3개월이 경과한 것으로 확인되었습니다.\n\n얼라인랩은 공정거래위원회 소비자분쟁해결기준을 토대로, 품질보증기간 내 정상 사용 중 발생한 하자에 대해 기간별 AS 정책을 운영하고 있습니다.\n이에 따라 수령 후 3개월 이후에는 무상 반품이 아닌 무상 교환으로 진행되며, 고객님의 제품도 해당 기준에 따라 동일 제품으로 무상 교환을 도와드리는 점 양해 부탁드립니다.</div></td></tr><tr><td>수령일로부터 3개월 이내<br>👉🏻 무상 반품 요청할 경우</td><td><a class="jump-link" href="#freePack" onclick="return jumpTo('freePack')">🔷 무상 반품 안내</a> 로 이동하여 안내</td></tr></tbody></table>${macro(D_ALIGNLAB["align_as__048"].name, D_ALIGNLAB["align_as__048"].tag, D_ALIGNLAB["align_as__048"].body, D_ALIGNLAB["align_as__048"].desc)}<div class="grp-h">a. 포장 및 회수 안내</div>${col("gray",`🔹 전체·부분 동일`,subcard(D_ALIGNLAB["align_as__049"].name, D_ALIGNLAB["align_as__049"].tag, D_ALIGNLAB["align_as__049"].body, D_ALIGNLAB["align_as__049"].desc) + caution(`🎁 증정품 회수 X`))}${macro(D_ALIGNLAB["align_as__050"].name, D_ALIGNLAB["align_as__050"].tag, D_ALIGNLAB["align_as__050"].body, D_ALIGNLAB["align_as__050"].desc)}${macro(D_ALIGNLAB["align_as__051"].name, D_ALIGNLAB["align_as__051"].tag, D_ALIGNLAB["align_as__051"].body, D_ALIGNLAB["align_as__051"].desc)}<div class="grp-h">b. 검수 및 재출고 안내</div><div class="grid2"><div class="quote-box"><b>⚠️ 유의사항</b>\n① 접수 시간 기준으로 안내 필요\n② 불량으로 인한 재출고는 회수 접수와 동시에 재출고 접수\n⚠️ 단, 리프핏 아이 진동 강도 불량의 경우 회수·검수 완료 후 재출고 가능</div>${guide(`🔗 <a href="https://docs.google.com/spreadsheets/d/1t7Oa-rKPY2aYgphNugE5K5gMCP7Hn3joaJYp-bbh7Jw/edit?gid=1012913860#gid=1012913860" target="_blank">[자사/외부몰] 통합 교환/반품 관리</a> 시트에 리스트업 필수!\n👉🏻 회수·재출고 자동 등록`)}</div><div class="grid2">${subcard(D_ALIGNLAB["align_as__052"].name, D_ALIGNLAB["align_as__052"].tag, D_ALIGNLAB["align_as__052"].body, D_ALIGNLAB["align_as__052"].desc)}${subcard(D_ALIGNLAB["align_as__053"].name, D_ALIGNLAB["align_as__053"].tag, D_ALIGNLAB["align_as__053"].body, D_ALIGNLAB["align_as__053"].desc)}</div>${macro(D_ALIGNLAB["align_as__054"].name, D_ALIGNLAB["align_as__054"].tag, D_ALIGNLAB["align_as__054"].body, D_ALIGNLAB["align_as__054"].desc)}</div><div class="h3lvl" id="freePack">🔷 무상 반품 안내</div><div class="lvl3-body"><div class="grp-h">a. 포장 및 회수 안내</div><div class="grid2">${col("blue",`🔹 전체 반품`,subcard(D_ALIGNLAB["align_as__055"].name, D_ALIGNLAB["align_as__055"].tag, D_ALIGNLAB["align_as__055"].body, D_ALIGNLAB["align_as__055"].desc) + caution(`🎁 증정품 회수 O`))}${col("pink",`🔹 부분 반품`,subcard(D_ALIGNLAB["align_as__056"].name, D_ALIGNLAB["align_as__056"].tag, D_ALIGNLAB["align_as__056"].body, D_ALIGNLAB["align_as__056"].desc) + caution(`🎁 증정품 회수 X`))}</div>${macro(D_ALIGNLAB["align_as__057"].name, D_ALIGNLAB["align_as__057"].tag, D_ALIGNLAB["align_as__057"].body, D_ALIGNLAB["align_as__057"].desc)}<div class="stack">${col("gray",`💡 복합 유형 (불량 반품 + 단순변심 반품)`,subcard(D_ALIGNLAB["align_as__058"].name, D_ALIGNLAB["align_as__058"].tag, D_ALIGNLAB["align_as__058"].body, D_ALIGNLAB["align_as__058"].desc) + caution(`🎁 증정품 회수 O`))}</div><div class="grid2">${macro(D_ALIGNLAB["align_as__059"].name, D_ALIGNLAB["align_as__059"].tag, D_ALIGNLAB["align_as__059"].body, D_ALIGNLAB["align_as__059"].desc)}${macro(D_ALIGNLAB["align_as__060"].name, D_ALIGNLAB["align_as__060"].tag, D_ALIGNLAB["align_as__060"].body, D_ALIGNLAB["align_as__060"].desc)}</div><div class="grp-h">b. 결제수단별 환불 안내</div><div class="grid2">${col("blue","◆ 카드결제",subcard(D_ALIGNLAB["align_as__061"].name, D_ALIGNLAB["align_as__061"].tag, D_ALIGNLAB["align_as__061"].body, D_ALIGNLAB["align_as__061"].desc))}${col("pink","◆ 계좌 환불",`<div class="stack">`+subcard(D_ALIGNLAB["align_as__062"].name, D_ALIGNLAB["align_as__062"].tag, D_ALIGNLAB["align_as__062"].body, D_ALIGNLAB["align_as__062"].desc)+subcard(D_ALIGNLAB["align_as__063"].name, D_ALIGNLAB["align_as__063"].tag, D_ALIGNLAB["align_as__063"].body, D_ALIGNLAB["align_as__063"].desc)+`</div>`)}</div></div></div><div class="h2lvl as-major" id="paidFlow">🔧 유상 AS</div>
  <div class="lvl2-body">
  <div class="h3lvl" id="paidCost">① 유상 비용 안내</div>
  <div class="lvl3-body">${macro(D_ALIGNLAB["align_as__064"].name, D_ALIGNLAB["align_as__064"].tag, D_ALIGNLAB["align_as__064"].body, D_ALIGNLAB["align_as__064"].desc)}
  ${macro(D_ALIGNLAB["align_as__065"].name, D_ALIGNLAB["align_as__065"].tag, D_ALIGNLAB["align_as__065"].body, D_ALIGNLAB["align_as__065"].desc)}
  <div class="quote-box"><b>📌 유상 AS 금액은 신규 제품 출시에 따라 수시 업데이트될 수 있으므로, 브랜드/SKU별 금액은 아래 SOP에서 확인 후 안내</b>\n👉🏻 <a href="https://app.notion.com/p/6cdd64378d488334b67f8101402f1a39?v=589d64378d4883d7bcdc08232a3040f8&source=copy_link" target="_blank">SOP 브랜드/SKU별 유상 AS 금액</a>\n(배송비 : 자체폐기 3,000원 / 회수 6,000원 별도)</div></div>
  <div class="h3lvl" id="paidDiscard">② 자체 폐기 안내</div>
  <div class="lvl3-body">
  <div class="h3lvl">자체 폐기 안내 (수긍 시)</div>
  ${macro(D_ALIGNLAB["align_as__066"].name, D_ALIGNLAB["align_as__066"].tag, D_ALIGNLAB["align_as__066"].body, D_ALIGNLAB["align_as__066"].desc)}
  ${guide(`👉🏻 고객 수긍 시 → 입금 확인 후 [입금자 성함·수령인 성함·주소·핸드폰번호] 회신 받고 ③ 비용 입금 안내로 진행\n👉🏻 미수긍(회수 희망) 시 → 아래 ② 회수 진행 안내로 전환`)}
  <div class="h3lvl">✔️ 회수 진행 안내 (미수긍 시)</div>
  ${macro(D_ALIGNLAB["align_as__067"].name, D_ALIGNLAB["align_as__067"].tag, D_ALIGNLAB["align_as__067"].body, D_ALIGNLAB["align_as__067"].desc)}
  ${guide(`👉🏻 미수긍 매크로 발송 후 고객이 회수까지 수긍하면 → 왕복 배송비 6,000원 기준으로 ③ 비용 입금 안내 진행 (포장·회수 안내는 위 ③ 재출고 안내 상단 절차 준용)`)}
  <div class="h3lvl">✔️ 1년 경과 유상 비용 불만 대응</div>
  ${macro(D_ALIGNLAB["align_as__068"].name, D_ALIGNLAB["align_as__068"].tag, D_ALIGNLAB["align_as__068"].body, D_ALIGNLAB["align_as__068"].desc)}
  ${caution(`💡 공감·양해 멘트나 문구 등은 고객이 언급한 불만 내용에 따라 변형하여 유연하게 응대`)}
  </div>
  <div class="h3lvl" id="paidReship">③ 재출고 안내</div>
  <div class="lvl3-body">${guide(`💡 입금 확인 후 상담 시점 기준으로 재출고 진행`)}
  <div class="grid2">${subcard(D_ALIGNLAB["align_as__069"].name, D_ALIGNLAB["align_as__069"].tag, D_ALIGNLAB["align_as__069"].body, D_ALIGNLAB["align_as__069"].desc)}${subcard(D_ALIGNLAB["align_as__070"].name, D_ALIGNLAB["align_as__070"].tag, D_ALIGNLAB["align_as__070"].body, D_ALIGNLAB["align_as__070"].desc)}</div>
  ${macro(D_ALIGNLAB["align_as__071"].name, D_ALIGNLAB["align_as__071"].tag, D_ALIGNLAB["align_as__071"].body, D_ALIGNLAB["align_as__071"].desc)}
  </div>
  <div class="h3lvl" id="paidDeposit">✔️ [유상비용 미입금 시] 상담 종료 유도</div>
  <div class="lvl3-body">${macro(D_ALIGNLAB["align_as__072"].name, D_ALIGNLAB["align_as__072"].tag, D_ALIGNLAB["align_as__072"].body, D_ALIGNLAB["align_as__072"].desc)}</div>
  </div>
  <div class="h2lvl" id="edgeDiscon">🚨 [단종] EDGE CASE</div>
  <div class="lvl2-body"><div class="h3lvl" id="edgeIn">① 품질보증기간(1년) 이내 단종</div><div class="lvl3-body"><div class="quote-box"><b>📌 응대 가이드</b>\n동일 제품이 단종되어 교환이 불가능한 경우 적용\n① 유사 모델을 '유상교환 가격' 으로 구매 안내\n② 고객이 구매를 원하지 않는 경우 단종 보상 기준에 따라 <b>구입가를 자사몰 포인트로 대체 환급</b></div>${macro(D_ALIGNLAB["align_as__073"].name, D_ALIGNLAB["align_as__073"].tag, D_ALIGNLAB["align_as__073"].body, D_ALIGNLAB["align_as__073"].desc)}${guide(`💡 1년 이내 유상 비용 금액으로 반영`)}<div class="grid2"><div class="flowgroup">${subcard(D_ALIGNLAB["align_as__074"].name, D_ALIGNLAB["align_as__074"].tag, D_ALIGNLAB["align_as__074"].body, D_ALIGNLAB["align_as__074"].desc)}${subcard(D_ALIGNLAB["align_as__075"].name, D_ALIGNLAB["align_as__075"].tag, D_ALIGNLAB["align_as__075"].body, D_ALIGNLAB["align_as__075"].desc)}</div>${subcard(D_ALIGNLAB["align_as__076"].name, D_ALIGNLAB["align_as__076"].tag, D_ALIGNLAB["align_as__076"].body, D_ALIGNLAB["align_as__076"].desc)}</div>${guide(`👉🏻 i. 유사 제품 구매 동의_입금 안내 시 접수 시점에 따라 출고 안내`)}<div class="grid2">${subcard(D_ALIGNLAB["align_as__077"].name, D_ALIGNLAB["align_as__077"].tag, D_ALIGNLAB["align_as__077"].body, D_ALIGNLAB["align_as__077"].desc)}${subcard(D_ALIGNLAB["align_as__078"].name, D_ALIGNLAB["align_as__078"].tag, D_ALIGNLAB["align_as__078"].body, D_ALIGNLAB["align_as__078"].desc)}</div>${macro(D_ALIGNLAB["align_as__079"].name, D_ALIGNLAB["align_as__079"].tag, D_ALIGNLAB["align_as__079"].body, D_ALIGNLAB["align_as__079"].desc)}</div><div class="h3lvl" id="edgeOut">② 품질보증기간(1년) 경과 단종</div><div class="lvl3-body"><div class="quote-box"><b>📌 응대 가이드</b>\n동일 제품이 단종되어 교환이 불가능한 경우 적용\n① 동일 부위·동일 용도의 유사 제품이 있는지 확인\n<span class="sub-ex">(예: 넥숄더프로 → 넥숄더힐링케어 V2)</span>\n② 유사 제품을 품질보증기간(1년) 경과 유상 교환 비용으로 구매할 수 있도록 안내\n③ 고객이 유사 제품 구매를 원하지 않는 경우, <b>감가상각을 반영한 잔여 금액에 구입가의 10%를 가산</b>하여 자사몰 포인트로 환급</div>${macro(D_ALIGNLAB["align_as__080"].name, D_ALIGNLAB["align_as__080"].tag, D_ALIGNLAB["align_as__080"].body, D_ALIGNLAB["align_as__080"].desc)}${guide(`💡 1년 경과 유상 비용 금액으로 반영`)}<div class="grid2"><div class="flowgroup">${subcard(D_ALIGNLAB["align_as__081"].name, D_ALIGNLAB["align_as__081"].tag, D_ALIGNLAB["align_as__081"].body, D_ALIGNLAB["align_as__081"].desc)}${subcard(D_ALIGNLAB["align_as__082"].name, D_ALIGNLAB["align_as__082"].tag, D_ALIGNLAB["align_as__082"].body, D_ALIGNLAB["align_as__082"].desc)}</div><div class="flowgroup">${subcard(D_ALIGNLAB["align_as__083"].name, D_ALIGNLAB["align_as__083"].tag, D_ALIGNLAB["align_as__083"].body, D_ALIGNLAB["align_as__083"].desc)}${subcard(D_ALIGNLAB["align_as__084"].name, D_ALIGNLAB["align_as__084"].tag, D_ALIGNLAB["align_as__084"].body, D_ALIGNLAB["align_as__084"].desc)}</div></div></div></div>
  ${blueNote(`💰 환급금 계산 가이드`,`<div class="refund-guide-grid"><div style="padding-right:18px">① 구입가 확인\n② 사용개월 확인\n③ 아래 계산식 적용\n\n<b>감가상각비</b> = (사용개월 ÷ 60개월) × 구입가\n<b>잔여금</b> = 구입가 - 감가상각비\n<b>최종 환급금</b> = 잔여금 + 구입가의 10%\n\n※ 얼라인랩 제품의 내용연수는 60개월로 적용합니다.<div class="quote-box" style="margin-top:14px"><b>예시)</b> 목베개플러스 · 구입가 99,000원 · 구입일 2024년 7월 · AS 문의일 2026년 7월 · 사용기간 24개월\n\n· 감가상각비 = (24개월 ÷ 60개월) × 99,000원 = 39,600원\n· 잔여금 = 99,000원 - 39,600원 = 59,400원\n· 구입가의 10% = 99,000원 × 10% = 9,900원\n· <b>최종 환급금</b> = 59,400원 + 9,900원 = <b>69,300원</b></div></div><div style="padding-left:18px;border-left:2px dashed #C7DAF2"><div class="refund-calc" style="margin-top:0"><div class="refund-calc-h">🧮 자동 계산기 (숫자만 입력)</div><div class="refund-calc-row"><label>구입가</label><input type="text" inputmode="numeric" data-role="price" placeholder="예: 99000" oninput="this.value=this.value.replace(/[^0-9]/g,'');calcRefund(this)"><span class="unit">원</span></div><div class="refund-calc-row"><label>사용개월</label><input type="text" inputmode="numeric" data-role="months" placeholder="예: 24" oninput="this.value=this.value.replace(/[^0-9]/g,'');calcRefund(this)"><span class="unit">개월</span></div><div class="refund-calc-err"></div><div class="refund-calc-out"><div><span>감가상각비</span><b data-out="dep">0원</b></div><div><span>잔여금</span><b data-out="rem">0원</b></div><div><span>구입가의 10%</span><b data-out="add">0원</b></div><div class="final"><span>최종 환급금</span><b data-out="final">0원</b></div></div></div></div></div><details class="legal-fold"><summary>※ 관련 기준 보기</summary><p>공정거래위원회 소비자분쟁해결기준에 따라 품질보증기간이 경과한 후 부품보유기간 내 수리가 불가능한 경우, 정액 감가상각한 잔여 금액에 구입가의 10%를 가산하여 환급합니다.</p></details>`)}
  <div class="h2lvl" id="secProof">📸 증빙 제출 불만에 따른 대응</div>
  <div class="lvl2-body"><div class="quote-box"><b>✔️ 증빙(영상/사진)이 필요한 유형이나 지속 미수긍, 불만 제기 시 아래 flow로 진행</b></div><div class="grp-h">① 방어 멘트 1차</div>${guide(`👉 1번, 2번 중 선택하여 사용`)}<div class="grid2"><div>${macro(D_ALIGNLAB["align_as__085"].name, D_ALIGNLAB["align_as__085"].tag, D_ALIGNLAB["align_as__085"].body, D_ALIGNLAB["align_as__085"].desc)}</div><div>${macro(D_ALIGNLAB["align_as__086"].name, D_ALIGNLAB["align_as__086"].tag, D_ALIGNLAB["align_as__086"].body, D_ALIGNLAB["align_as__086"].desc)}</div></div><div class="grp-h">② 방어 멘트 2차</div>${guide(`👉 ① 방어 멘트 진행 시에도 미수긍할 경우`)}${macro(D_ALIGNLAB["align_as__087"].name, D_ALIGNLAB["align_as__087"].tag, D_ALIGNLAB["align_as__087"].body, D_ALIGNLAB["align_as__087"].desc)}<div class="grp-h">③ 채팅 상담 유지 안내 (지금 촬영 불가 시)</div>${guide(`ex. 영상 미첨부로 촬영 후 재인입해야하거나, 채팅 전송 영상 미흡으로 재 촬영 필요 시 모두 포함`)}${macro(D_ALIGNLAB["align_as__088"].name, D_ALIGNLAB["align_as__088"].tag, D_ALIGNLAB["align_as__088"].body, D_ALIGNLAB["align_as__088"].desc)}<div class="grid2">${guide(`⚠️ 단, 아래와 같은 경우에는 [채팅 상담 유지 안내] 후 채널톡 보류 처리로 진행\n(예시) 상담 중 촬영이 어려운 상황 / 외부에 있어 확인이 어려운 경우 등`)}<div class="quote-box"><b>📌 상담 보류 처리 기준</b>\n· 보류 기간 : 상담 진행 내일 오전까지\n→ 해당 기간 내 회신이 없을 경우, 장시간 무응답 매크로를 활용하여 상담 종료\n· 고객이 기존 보류 채팅창이 아닌 새로운 채팅창으로 재문의할 수 있음\n→ 해당 경우, 중복 상담 매크로를 활용하여 보류 및 상담 종료\n※ 매크로 사용 시 상황에 맞게 멘트 수정 필수</div></div><div class="grp-h">④ 회수 후 검수로 진행 안내 (①, ②, ③ 미수긍 시)</div><div class="grid2"><div class="quote-box"><b>👉 ①, ②, ③ 미수긍 시에만 제품 회수 후 물류센터 검수 절차로 진행</b>\n\n· 고객 희망하는 처리 방안(반품 or 교환)은 채널톡 워크플로우 및 우측 메모리값에서 확인 가능</div><div class="quote-box"><b>· 물류센터(품고 또는 정석) 별도반출&불량 검수 시트에 취합 후 검수 결과에 따라</b>\n✔️ '정상'일 경우 → 고객 주소로 반송\n✔️ '불량'일 경우 → 고객 원하는 방향으로 '교환' 또는 '반품' 처리\n\n👉🏻 물류센터별 시트 바로가기\n① <a href="https://docs.google.com/spreadsheets/d/1ZgqMOaFfBW60cln1V6oVRRSmjEeNjZSJrlf1ytdM5V4/edit?pli=1&amp;gid=1560630591#gid=1560630591" target="_blank">[품고/올릿] 별도반출&불량 검수</a>\n② <a href="https://docs.google.com/spreadsheets/d/1X7-VBL7xA8UWJtdHh5elOtYrDaA-qwtrrvc0qrM5_eU/edit?gid=0#gid=0" target="_blank">[정석/올릿] 별도반출&불량 검수</a></div></div>${macro(D_ALIGNLAB["align_as__089"].name, D_ALIGNLAB["align_as__089"].tag, D_ALIGNLAB["align_as__089"].body, D_ALIGNLAB["align_as__089"].desc)}<div class="grp-h">🔴 수거 미수긍/불만 제기 시 — 1번 또는 2번 중 선택</div><div class="grid2"><div>${macro(D_ALIGNLAB["align_as__090"].name, D_ALIGNLAB["align_as__090"].tag, D_ALIGNLAB["align_as__090"].body, D_ALIGNLAB["align_as__090"].desc)}</div><div>${macro(D_ALIGNLAB["align_as__091"].name, D_ALIGNLAB["align_as__091"].tag, D_ALIGNLAB["align_as__091"].body, D_ALIGNLAB["align_as__091"].desc)}</div></div><div class="grp-h">💸 고객 반품 요청 & 결제수단 무통장/가상계좌일 경우에만, 환불 계좌 선탐색</div>${macro(D_ALIGNLAB["align_as__092"].name, D_ALIGNLAB["align_as__092"].tag, D_ALIGNLAB["align_as__092"].body, D_ALIGNLAB["align_as__092"].desc)}${guide(`👉🏻 이후, <a class="jump-link" href="#exNoEvid" onclick="return jumpTo('exNoEvid')">✨ [예외] 증빙 미제출</a>로 이동하여 이어 진행`)}</div>
  <div class="h2lvl" id="exNoEvid">✨ [예외] 증빙 미제출</div>
  <div class="lvl2-body"><div class="quote-box"><b>✔️ 사진/영상 확인 시, 정상 제품으로 확인되거나 사용법 문제로 확인될 경우 → 증상별 올바른 사용법 재안내 후 재사용 시도 유도</b>\n⚠️ 아래 flow는 사진/영상 촬영 지속 미수긍으로 회수 후 검수 예외 처리 진행에 동의한 경우에만 이어서 안내</div><div class="h3lvl">❌ 검수 결과 — 불량 확인</div><div class="lvl3-body">${guide(`※ 채널톡 이전 상담 내역에 교환/반품 처리 방안 확인`)}<div class="grp-h">A. 고객 반품 요청 · 반품 안내 유저챗 발송</div><div class="grid2">${macro(D_ALIGNLAB["align_as__093"].name, D_ALIGNLAB["align_as__093"].tag, D_ALIGNLAB["align_as__093"].body, D_ALIGNLAB["align_as__093"].desc)}${macro(D_ALIGNLAB["align_as__094"].name, D_ALIGNLAB["align_as__094"].tag, D_ALIGNLAB["align_as__094"].body, D_ALIGNLAB["align_as__094"].desc)}</div><div class="grp-h">B. 고객 교환 요청 · 재출고 안내 유저챗 발송</div>${macro(D_ALIGNLAB["align_as__095"].name, D_ALIGNLAB["align_as__095"].tag, D_ALIGNLAB["align_as__095"].body, D_ALIGNLAB["align_as__095"].desc)}</div><div class="h3lvl">⭕ 검수 결과 — 정상 제품</div><div class="lvl3-body">${macro(D_ALIGNLAB["align_as__096"].name, D_ALIGNLAB["align_as__096"].tag, D_ALIGNLAB["align_as__096"].body, D_ALIGNLAB["align_as__096"].desc)}</div></div>

  
  `;

const ALIGNLAB_SIDE = `

  <h1>🚨 부작용·상해 VOC</h1>
    <div class="sub">제품 사용 후 이상 증상·트러블·상해 등 VOC 응대 (자사몰/외부몰)</div>
    <div class="sub-ex">예) 사용 후 피부 트러블·이상 반응 · 상해(상처·화상 등) 등이 얼라인랩 제품으로 인해 발생했다고 인정되는 경우</div>

  ${secTitle("🧭","상담 플로우",null,"secFlow")}
  ${caution(`🚨 보상금 요구 여부에 따라 Edge Case로 분류되므로, [📌 <a href="https://docs.google.com/spreadsheets/d/1a-hNnO4f-TUJ0n4maDUh3xxmzwBW9XwJW-Z5OKZU0r8/edit?pli=1&amp;gid=1968732770#gid=1968732770" target="_blank">고객 보상&Critical Issue 처리 Process 시트</a>]를 참고하여 진행`)}
  <div class="grp-h">공통 플로우</div>
  <div class="flow-diagram"><div class="fd-box">1. 선제적 사과 멘트</div><div class="fd-arrow">▶</div><div class="fd-box">2. 제품 결함 아님 및 서류 안내</div></div>
  <div class="fork"><div class="fork-branch"><span class="fork-label">🔹 a. 서류 미수긍</span><div class="flow-diagram"><div class="fd-box">전액 환불 처리 안내</div></div></div><div class="fork-branch b2"><span class="fork-label">🔹 b. 서류 수긍</span><div class="flow-diagram"><div class="fd-box">서류 안내·제출</div><div class="fd-arrow">▶</div><div class="fd-box">전액 환불 처리 안내</div></div></div></div>
  <div class="flow-diagram"><div class="fd-box">3. 포장 및 회수 안내</div><div class="fd-arrow">▶</div><div class="fd-box">4. 결제수단별 환불 안내</div></div>
  <div style="margin:8px 0 4px 2px;font-size:12px;color:#8a6d1a">⚠️ 병원 진료·진료비 보상 요청 등 클레임/민원 발생 시 → 아래 [예외케이스] 그룹 참고</div>

  ${secTitle("1","선제적 사과 멘트",null,"sec_apology")}
  ${macro(D_ALIGNLAB["alignlab_side__001"].name, D_ALIGNLAB["alignlab_side__001"].tag, D_ALIGNLAB["alignlab_side__001"].body, D_ALIGNLAB["alignlab_side__001"].desc)}
  ${secTitle("2","제품 결함 아님 및 서류 안내",null,"sec_env")}
  ${caution(`⚠️ 단, 고객 최초부터 강하게 항의/민원 제기 or 크리티컬한 단어 언급 등으로 Risk 등급 높을 경우 → 기존 Critical Issue 처리에 따라 예외적 반품 처리 진행`)}
  ${macro(D_ALIGNLAB["alignlab_side__002"].name, D_ALIGNLAB["alignlab_side__002"].tag, D_ALIGNLAB["alignlab_side__002"].body, D_ALIGNLAB["alignlab_side__002"].desc)}
  <div class="grp-h grp-major">🔹 a. 고객 서류 미수긍 시</div>
  ${guide(`👉🏻 고객 증빙 서류 미수긍 시 예외적으로 전액 환불 처리 안내`)}
  ${macro(D_ALIGNLAB["alignlab_side__003"].name, D_ALIGNLAB["alignlab_side__003"].tag, D_ALIGNLAB["alignlab_side__003"].body, D_ALIGNLAB["alignlab_side__003"].desc)}
  <div class="grp-h grp-major">🔹 b. 고객 서류 수긍 시</div>
  ${macro(D_ALIGNLAB["alignlab_side__004"].name, D_ALIGNLAB["alignlab_side__004"].tag, D_ALIGNLAB["alignlab_side__004"].body, D_ALIGNLAB["alignlab_side__004"].desc)}
  ${macro(D_ALIGNLAB["alignlab_side__005"].name, D_ALIGNLAB["alignlab_side__005"].tag, D_ALIGNLAB["alignlab_side__005"].body, D_ALIGNLAB["alignlab_side__005"].desc)}
  <div style="margin:8px 0 4px 2px;font-size:12px;color:#8a6d1a">👉🏻 이후 공통 : 아래 [3. 포장 및 회수 안내] → [4. 결제수단별 환불 안내] 순으로 진행</div>
  ${secTitle("3","포장 및 회수 안내",null,"sec_pack")}
  ${macro(D_ALIGNLAB["alignlab_side__006"].name, D_ALIGNLAB["alignlab_side__006"].tag, D_ALIGNLAB["alignlab_side__006"].body, D_ALIGNLAB["alignlab_side__006"].desc)}
  ${subcard(D_ALIGNLAB["alignlab_side__007"].name, D_ALIGNLAB["alignlab_side__007"].tag, D_ALIGNLAB["alignlab_side__007"].body, D_ALIGNLAB["alignlab_side__007"].desc)}
  ${secTitle("4","결제수단별 환불 안내",null,"sec_refund")}
  <div class="grid2">
${col("blue","환불 안내 (카드·삼성페이·네이버페이)",
subcard(D_ALIGNLAB["alignlab_side__008"].name, D_ALIGNLAB["alignlab_side__008"].tag, D_ALIGNLAB["alignlab_side__008"].body, D_ALIGNLAB["alignlab_side__008"].desc)
)}
${col("blue","환불 안내 (계좌·무통장/가상계좌)",
subcard(D_ALIGNLAB["alignlab_side__009"].name, D_ALIGNLAB["alignlab_side__009"].tag, D_ALIGNLAB["alignlab_side__009"].body, D_ALIGNLAB["alignlab_side__009"].desc) + subcard(D_ALIGNLAB["alignlab_side__010"].name, D_ALIGNLAB["alignlab_side__010"].tag, D_ALIGNLAB["alignlab_side__010"].body, D_ALIGNLAB["alignlab_side__010"].desc)
)}
</div>
  ${secTitle("🔺","[예외케이스] 클레임/민원/보상 요청",null,"sec_exception")}
  ${caution(`예) 부작용으로 인한 병원 진료, 진료비 보상 요청 or 부작용 정도가 심하여 진료비 보상 요청`)}
  ${macro(D_ALIGNLAB["alignlab_side__011"].name, D_ALIGNLAB["alignlab_side__011"].tag, D_ALIGNLAB["alignlab_side__011"].body, D_ALIGNLAB["alignlab_side__011"].desc)}
  ${macro(D_ALIGNLAB["alignlab_side__012"].name, D_ALIGNLAB["alignlab_side__012"].tag, D_ALIGNLAB["alignlab_side__012"].body, D_ALIGNLAB["alignlab_side__012"].desc)}
  ${macro(D_ALIGNLAB["alignlab_side__013"].name, D_ALIGNLAB["alignlab_side__013"].tag, D_ALIGNLAB["alignlab_side__013"].body, D_ALIGNLAB["alignlab_side__013"].desc)}
  ${caution(`⚠️ 고객 서류 미수긍/지속 치료비 보상 요구\n★ 증빙 서류 없이 치료비 보상은 불가`)}
  ${guide(`💡 병원 내원 및 치료 안내 진행 시 팀 리드 공유 필수`)}
  ${secTitle("💠","[공통] 서류 제출 후",null,"sec_submit")}
  ${macro(D_ALIGNLAB["alignlab_side__014"].name, D_ALIGNLAB["alignlab_side__014"].tag, D_ALIGNLAB["alignlab_side__014"].body, D_ALIGNLAB["alignlab_side__014"].desc)}
  ${macro(D_ALIGNLAB["alignlab_side__015"].name, D_ALIGNLAB["alignlab_side__015"].tag, D_ALIGNLAB["alignlab_side__015"].body, D_ALIGNLAB["alignlab_side__015"].desc)}
  ${guide(`<b style="color:#d32f2f;">증빙 서류 기반으로 건보 급여 항목 전액 보상</b>
⚠️ 팀 리드 공유 필수
📌 <a href="https://docs.google.com/spreadsheets/d/1a-hNnO4f-TUJ0n4maDUh3xxmzwBW9XwJW-Z5OKZU0r8/edit?pli=1&amp;gid=1968732770#gid=1968732770" target="_blank">고객 보상&Critical Issue 처리 Process 시트</a>의 Critical Issue(EDGE Case) 보상금 flex 워크플로우 작성법 참고하여 등록`)}
`;



const ALIGNLAB_REFUND = `
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
    "<b>제품을 개봉 후 작동·사용한 경우 '사용 제품'으로 간주되어 단순변심 반품 불가.</b>",
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
      subcard(D_ALIGNLAB["alignlab_refund__001"].name, D_ALIGNLAB["alignlab_refund__001"].tag, D_ALIGNLAB["alignlab_refund__001"].body, D_ALIGNLAB["alignlab_refund__001"].desc)
      + subcard(D_ALIGNLAB["alignlab_refund__002"].name, D_ALIGNLAB["alignlab_refund__002"].tag, D_ALIGNLAB["alignlab_refund__002"].body, D_ALIGNLAB["alignlab_refund__002"].desc)
      + subcard(D_ALIGNLAB["alignlab_refund__003"].name, D_ALIGNLAB["alignlab_refund__003"].tag, D_ALIGNLAB["alignlab_refund__003"].body, D_ALIGNLAB["alignlab_refund__003"].desc)
    )}
    ${col("pink","🔹 부분 반품",
      subcard(D_ALIGNLAB["alignlab_refund__004"].name, D_ALIGNLAB["alignlab_refund__004"].tag, D_ALIGNLAB["alignlab_refund__004"].body, D_ALIGNLAB["alignlab_refund__004"].desc)
      + subcard(D_ALIGNLAB["alignlab_refund__005"].name, D_ALIGNLAB["alignlab_refund__005"].tag, D_ALIGNLAB["alignlab_refund__005"].body, D_ALIGNLAB["alignlab_refund__005"].desc)
      + subcard(D_ALIGNLAB["alignlab_refund__006"].name, D_ALIGNLAB["alignlab_refund__006"].tag, D_ALIGNLAB["alignlab_refund__006"].body, D_ALIGNLAB["alignlab_refund__006"].desc)
      + starNote("고객이 정가 차감에 미동의할 경우",
`구매하신 옵션은 1개 이상 구매 시 적용되는 구성입니다.
부분 반품 시 개봉된 상품 수량만큼 정상가로 간주되어 원물 금액에서 차감됩니다.
반품 전 꼭 확인 부탁드립니다.`)
    )}
  </div>

  ${secTitle("3", "포장 및 회수 안내",null,"sec3")}
  <div class="grid2">
    ${col("blue","🔹 전체 반품",
      subcard(D_ALIGNLAB["alignlab_refund__007"].name, D_ALIGNLAB["alignlab_refund__007"].tag, D_ALIGNLAB["alignlab_refund__007"].body, D_ALIGNLAB["alignlab_refund__007"].desc)
      + caution(`🎁 증정품 회수 O`)
    )}
    ${col("pink","🔹 부분 반품",
      subcard(D_ALIGNLAB["alignlab_refund__008"].name, D_ALIGNLAB["alignlab_refund__008"].tag, D_ALIGNLAB["alignlab_refund__008"].body, D_ALIGNLAB["alignlab_refund__008"].desc)
      + caution(`🎁 증정품 회수 X`)
    )}
  </div>
  <div class="stack">
    ${col("gray","💡 복합 유형 (예: 불량 반품 + 단순변심 반품)",
      subcard(D_ALIGNLAB["alignlab_refund__009"].name, D_ALIGNLAB["alignlab_refund__009"].tag, D_ALIGNLAB["alignlab_refund__009"].body, D_ALIGNLAB["alignlab_refund__009"].desc)
    )}
  </div>
  <div class="grid2">
    ${subcard(D_ALIGNLAB["alignlab_refund__011"].name, D_ALIGNLAB["alignlab_refund__011"].tag, D_ALIGNLAB["alignlab_refund__011"].body, D_ALIGNLAB["alignlab_refund__011"].desc)}
  </div>

  ${secTitle("4", "결제수단별 환불 안내","전체·부분 공통","sec4")}
  <div class="grid2">
    ${col("blue","🔹 카드결제",
      subcard(D_ALIGNLAB["alignlab_refund__012"].name, D_ALIGNLAB["alignlab_refund__012"].tag, D_ALIGNLAB["alignlab_refund__012"].body, D_ALIGNLAB["alignlab_refund__012"].desc)
    )}
    ${col("blue","🔹 계좌 환불",
      subcard(D_ALIGNLAB["alignlab_refund__013"].name, D_ALIGNLAB["alignlab_refund__013"].tag, D_ALIGNLAB["alignlab_refund__013"].body, D_ALIGNLAB["alignlab_refund__013"].desc)
      + subcard(D_ALIGNLAB["alignlab_refund__014"].name, D_ALIGNLAB["alignlab_refund__014"].tag, D_ALIGNLAB["alignlab_refund__014"].body, D_ALIGNLAB["alignlab_refund__014"].desc)
    )}
  </div>
`;

const ALIGNLAB_EXCHANGE = `

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
subcard(D_ALIGNLAB["alignlab_exchange__001"].name, D_ALIGNLAB["alignlab_exchange__001"].tag, D_ALIGNLAB["alignlab_exchange__001"].body, D_ALIGNLAB["alignlab_exchange__001"].desc)
)}
${col("pink","🔹 부분 교환",
subcard(D_ALIGNLAB["alignlab_exchange__002"].name, D_ALIGNLAB["alignlab_exchange__002"].tag, D_ALIGNLAB["alignlab_exchange__002"].body, D_ALIGNLAB["alignlab_exchange__002"].desc)
)}
</div>
  ${caution(`▶ (전체 교환) 고객이 반품 희망 시 → '단순변심 반품' 페이지로 이동하여 안내
▶ 교환 희망 시 → 2부터 진행`)}
  ${secTitle("2", "교환 배송비 안내","전체·부분","sec2")}
  <div class="grid2">
${col("blue","🔹 전체 교환",
subcard(D_ALIGNLAB["alignlab_exchange__003"].name, D_ALIGNLAB["alignlab_exchange__003"].tag, D_ALIGNLAB["alignlab_exchange__003"].body, D_ALIGNLAB["alignlab_exchange__003"].desc)
)}
${col("pink","🔹 부분 교환",
subcard(D_ALIGNLAB["alignlab_exchange__004"].name, D_ALIGNLAB["alignlab_exchange__004"].tag, D_ALIGNLAB["alignlab_exchange__004"].body, D_ALIGNLAB["alignlab_exchange__004"].desc) + subcard(D_ALIGNLAB["alignlab_exchange__005"].name, D_ALIGNLAB["alignlab_exchange__005"].tag, D_ALIGNLAB["alignlab_exchange__005"].body, D_ALIGNLAB["alignlab_exchange__005"].desc)
)}
</div>
  ${guide(`→ 입금자명·입금금액 확인 후 IBK 기업은행 계좌 조회
🔗 IBK기업은행 : https://www.ibk.co.kr/`)}
  ${secTitle("3", "포장 및 회수 안내","전체·부분","sec3")}
  <div class="grid2">
${col("blue","🔹 전체 교환",
subcard(D_ALIGNLAB["alignlab_exchange__006"].name, D_ALIGNLAB["alignlab_exchange__006"].tag, D_ALIGNLAB["alignlab_exchange__006"].body, D_ALIGNLAB["alignlab_exchange__006"].desc) + caution(`🎁 증정품 회수 O`)
)}
${col("pink","🔹 부분 교환",
subcard(D_ALIGNLAB["alignlab_exchange__007"].name, D_ALIGNLAB["alignlab_exchange__007"].tag, D_ALIGNLAB["alignlab_exchange__007"].body, D_ALIGNLAB["alignlab_exchange__007"].desc) + caution(`🎁 증정품 회수 X`)
)}
</div>
  <div class="warn-note">⚠️ 고객 동의 / 교환 배송비 입금 완료 후 진행</div>
  ${secTitle("4", "검수 및 재출고 안내","전체·부분 공통","sec4")}
  ${macro(D_ALIGNLAB["alignlab_exchange__009"].name, D_ALIGNLAB["alignlab_exchange__009"].tag, D_ALIGNLAB["alignlab_exchange__009"].body, D_ALIGNLAB["alignlab_exchange__009"].desc)}
  ${guide(`▶ 상품 수거·검수 후 이상 없을 시 <a href="https://docs.google.com/spreadsheets/d/1Bj5stx8hXMoPL8L91EYu6e5TA7pqEAjges4Cejs1wjo/edit?gid=388846546#gid=388846546" target="_blank">SCM-CX/CS팀 수기 시트</a>에 재출고 요청`)}
`;

/* === 단순변심 교환/반품 통합판 (2026-08-27) — 슬룸 SLM_MERGE_TEMPLATE 구조(5단계+상담플로우)만 참고, 콘텐츠는 얼라인랩 기존 ALIGNLAB_REFUND, ALIGNLAB_EXCHANGE 내용을 그대로 재배치.
   새 데이터 항목 없이 위 D_ALIGNLAB 기존 키(alignlab_refund__NNN, alignlab_exchange__NNN)를 그대로 재사용함.
   얼라인랩은 100%환불이벤트 카테고리가 없는 브랜드이므로, 분류 매트릭스에도 해당 행을 넣지 않음(기존 ALIGNLAB_REFUND의 2행 구조 그대로 유지) === */
const ALIGNLAB_MERGE_TEMPLATE = `
  <h1>🔄 단순변심 교환/반품</h1>
    <div class="sub">고객 변심에 의한 교환·반품 · 유형별 응대 (자사몰/외부몰)</div>

  ${notice([
    "<b>제품을 개봉 후 작동·사용한 경우 '사용 제품'으로 간주되어 단순변심 반품 불가.</b>",
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
    subcard(D_ALIGNLAB["alignlab_exchange__001"].name, D_ALIGNLAB["alignlab_exchange__001"].tag, D_ALIGNLAB["alignlab_exchange__001"].body, D_ALIGNLAB["alignlab_exchange__001"].desc)
    + subcard(D_ALIGNLAB["alignlab_exchange__002"].name, D_ALIGNLAB["alignlab_exchange__002"].tag, D_ALIGNLAB["alignlab_exchange__002"].body, D_ALIGNLAB["alignlab_exchange__002"].desc)
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
      subcard(D_ALIGNLAB["alignlab_refund__001"].name, D_ALIGNLAB["alignlab_refund__001"].tag, D_ALIGNLAB["alignlab_refund__001"].body, D_ALIGNLAB["alignlab_refund__001"].desc)
      + subcard(D_ALIGNLAB["alignlab_refund__002"].name, D_ALIGNLAB["alignlab_refund__002"].tag, D_ALIGNLAB["alignlab_refund__002"].body, D_ALIGNLAB["alignlab_refund__002"].desc)
      + subcard(D_ALIGNLAB["alignlab_refund__003"].name, D_ALIGNLAB["alignlab_refund__003"].tag, D_ALIGNLAB["alignlab_refund__003"].body, D_ALIGNLAB["alignlab_refund__003"].desc)
    )}
    ${col("pink","🔹 부분 반품",
      subcard(D_ALIGNLAB["alignlab_refund__004"].name, D_ALIGNLAB["alignlab_refund__004"].tag, D_ALIGNLAB["alignlab_refund__004"].body, D_ALIGNLAB["alignlab_refund__004"].desc)
      + subcard(D_ALIGNLAB["alignlab_refund__005"].name, D_ALIGNLAB["alignlab_refund__005"].tag, D_ALIGNLAB["alignlab_refund__005"].body, D_ALIGNLAB["alignlab_refund__005"].desc)
      + subcard(D_ALIGNLAB["alignlab_refund__006"].name, D_ALIGNLAB["alignlab_refund__006"].tag, D_ALIGNLAB["alignlab_refund__006"].body, D_ALIGNLAB["alignlab_refund__006"].desc)
      + starNote("고객이 정가 차감에 미동의할 경우",
`구매하신 옵션은 1개 이상 구매 시 적용되는 구성입니다.
부분 반품 시 개봉된 상품 수량만큼 정상가로 간주되어 원물 금액에서 차감됩니다.
반품 전 꼭 확인 부탁드립니다.`)
    )}
  </div>
  <div class="grp-h">🔹 교환 배송비</div>
  <div class="grid2">
    ${col("blue","🔹 전체 교환",
      subcard(D_ALIGNLAB["alignlab_exchange__003"].name, D_ALIGNLAB["alignlab_exchange__003"].tag, D_ALIGNLAB["alignlab_exchange__003"].body, D_ALIGNLAB["alignlab_exchange__003"].desc)
    )}
    ${col("pink","🔹 부분 교환",
      subcard(D_ALIGNLAB["alignlab_exchange__004"].name, D_ALIGNLAB["alignlab_exchange__004"].tag, D_ALIGNLAB["alignlab_exchange__004"].body, D_ALIGNLAB["alignlab_exchange__004"].desc)
      + subcard(D_ALIGNLAB["alignlab_exchange__005"].name, D_ALIGNLAB["alignlab_exchange__005"].tag, D_ALIGNLAB["alignlab_exchange__005"].body, D_ALIGNLAB["alignlab_exchange__005"].desc)
    )}
  </div>
  ${guide(`→ 입금자명·입금금액 확인 후 IBK 기업은행 계좌 조회
🔗 IBK기업은행 : https://www.ibk.co.kr/`)}

  ${secTitle("4", "포장 및 회수 안내",null,"sec4")}
  <div class="grp-h">🔹 반품</div>
  <div class="grid2">
    ${col("blue","🔹 전체 반품",
      subcard(D_ALIGNLAB["alignlab_refund__007"].name, D_ALIGNLAB["alignlab_refund__007"].tag, D_ALIGNLAB["alignlab_refund__007"].body, D_ALIGNLAB["alignlab_refund__007"].desc)
      + caution(`🎁 증정품 회수 O`)
    )}
    ${col("pink","🔹 부분 반품",
      subcard(D_ALIGNLAB["alignlab_refund__008"].name, D_ALIGNLAB["alignlab_refund__008"].tag, D_ALIGNLAB["alignlab_refund__008"].body, D_ALIGNLAB["alignlab_refund__008"].desc)
      + caution(`🎁 증정품 회수 X`)
    )}
  </div>
  <div class="stack">
    ${col("gray","💡 복합 유형 (예: 불량 반품 + 단순변심 반품)",
      subcard(D_ALIGNLAB["alignlab_refund__009"].name, D_ALIGNLAB["alignlab_refund__009"].tag, D_ALIGNLAB["alignlab_refund__009"].body, D_ALIGNLAB["alignlab_refund__009"].desc)
    )}
  </div>
  <div class="grid2">
    ${subcard(D_ALIGNLAB["alignlab_refund__011"].name, D_ALIGNLAB["alignlab_refund__011"].tag, D_ALIGNLAB["alignlab_refund__011"].body, D_ALIGNLAB["alignlab_refund__011"].desc)}
  </div>
  <div class="grp-h">🔹 교환</div>
  <div class="grid2">
    ${col("blue","🔹 전체 교환",
      subcard(D_ALIGNLAB["alignlab_exchange__006"].name, D_ALIGNLAB["alignlab_exchange__006"].tag, D_ALIGNLAB["alignlab_exchange__006"].body, D_ALIGNLAB["alignlab_exchange__006"].desc) + caution(`🎁 증정품 회수 O`)
    )}
    ${col("pink","🔹 부분 교환",
      subcard(D_ALIGNLAB["alignlab_exchange__007"].name, D_ALIGNLAB["alignlab_exchange__007"].tag, D_ALIGNLAB["alignlab_exchange__007"].body, D_ALIGNLAB["alignlab_exchange__007"].desc) + caution(`🎁 증정품 회수 X`)
    )}
  </div>
  <div class="warn-note">⚠️ 고객 동의 / 교환 배송비 입금 완료 후 진행</div>

  ${secTitle("5", "교환/반품 안내",null,"step5")}
  ${secTitle("🔄","교환 시","재출고 안내","exchangeFlow")}
  ${macro(D_ALIGNLAB["alignlab_exchange__009"].name, D_ALIGNLAB["alignlab_exchange__009"].tag, D_ALIGNLAB["alignlab_exchange__009"].body, D_ALIGNLAB["alignlab_exchange__009"].desc)}
  ${guide(`▶ 상품 수거·검수 후 이상 없을 시 <a href="https://docs.google.com/spreadsheets/d/1Bj5stx8hXMoPL8L91EYu6e5TA7pqEAjges4Cejs1wjo/edit?gid=388846546#gid=388846546" target="_blank">SCM-CX/CS팀 수기 시트</a>에 재출고 요청`)}
  ${secTitle("💰","반품 시","환불 안내","refundFlow")}
  <div class="grid2">
    ${col("blue","🔹 카드결제",
      subcard(D_ALIGNLAB["alignlab_refund__012"].name, D_ALIGNLAB["alignlab_refund__012"].tag, D_ALIGNLAB["alignlab_refund__012"].body, D_ALIGNLAB["alignlab_refund__012"].desc)
    )}
    ${col("blue","🔹 계좌 환불",
      subcard(D_ALIGNLAB["alignlab_refund__013"].name, D_ALIGNLAB["alignlab_refund__013"].tag, D_ALIGNLAB["alignlab_refund__013"].body, D_ALIGNLAB["alignlab_refund__013"].desc)
      + subcard(D_ALIGNLAB["alignlab_refund__014"].name, D_ALIGNLAB["alignlab_refund__014"].tag, D_ALIGNLAB["alignlab_refund__014"].body, D_ALIGNLAB["alignlab_refund__014"].desc)
    )}
  </div>
`;