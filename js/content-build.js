const CONTENT = {
  "simplicare_as":SIMPLICARE_DEFECT,
  "cocodaum_as":COCODAUM_DEFECT,
  "drmans_as":DRMANS_DEFECT,
  "yvening_as":YVENING_DEFECT,
  "marnell_as":MARNELL_DEFECT,
  "dramang_as":DRAMANG_DEFECT,
  "slm_refund":SLOOM_REFUND,
  "slm_100refund":REF_100REFUND, "cellology_100refund":CELLOLOGY_100, "dramang_100refund":DRAMANG_100, "yvening_100refund":YVENING_100, "cocodaum_100refund":COCODAUM_100, "simplicare_100refund":SIMPLICARE_100,
  "slm_as":REF_AS,
  "cel_as":REF_CEL,
  "align_as":REF_ALIGN,
  "bilba_as":REF_BILBA,
  "oclock_as":REF_OCLOCK,
  "slm_exchange":SLOOM_EXCHANGE,
  "slm_simplemerge":SLM_MERGE_TEMPLATE,
  "slm_side":REF_SIDE, "simplicare_side":SIMPLICARE_SIDE, "alignlab_side":ALIGNLAB_SIDE, "bilba_side":BILBA_SIDE, "cellology_side":CELLOLOGY_SIDE, "cocodaum_side":COCODAUM_SIDE, "oclock_side":OCLOCK_SIDE, "drmans_side":DRMANS_SIDE, "yvening_side":YVENING_SIDE, "marnell_side":MARNELL_SIDE, "dramang_side":DRAMANG_SIDE,
  "cmn_all":COMMON_ALL, "ib":COMMON_IB, "ob":COMMON_OB, "board":BOARD_ALL,
  "call_all":CALL_ALL, "call_sloomcb":CALL_SLOOMCB
};

CONTENT["simplicare_refund"]=SIMPLICARE_REFUND; CONTENT["simplicare_exchange"]=SIMPLICARE_EXCHANGE;
CONTENT["simplicare_simplemerge"]=SIMPLICARE_MERGE_TEMPLATE;
CONTENT["alignlab_refund"]=ALIGNLAB_REFUND; CONTENT["alignlab_exchange"]=ALIGNLAB_EXCHANGE;
CONTENT["alignlab_simplemerge"]=ALIGNLAB_MERGE_TEMPLATE;
CONTENT["bilba_refund"]=BILBA_REFUND; CONTENT["bilba_exchange"]=BILBA_EXCHANGE;
CONTENT["bilba_simplemerge"]=BILBA_MERGE_TEMPLATE;
CONTENT["cellology_refund"]=CELLOLOGY_REFUND; CONTENT["cellology_exchange"]=CELLOLOGY_EXCHANGE;
CONTENT["cellology_simplemerge"]=CELLOLOGY_MERGE_TEMPLATE;
CONTENT["cocodaum_refund"]=COCODAUM_REFUND; CONTENT["cocodaum_exchange"]=COCODAUM_EXCHANGE;
CONTENT["cocodaum_simplemerge"]=COCODAUM_MERGE_TEMPLATE;
CONTENT["oclock_refund"]=OCLOCK_REFUND; CONTENT["oclock_exchange"]=OCLOCK_EXCHANGE;
CONTENT["oclock_simplemerge"]=OCLOCK_MERGE_TEMPLATE;
CONTENT["drmans_refund"]=DRMANS_REFUND; CONTENT["drmans_exchange"]=DRMANS_EXCHANGE;
CONTENT["drmans_simplemerge"]=DRMANS_MERGE_TEMPLATE;
CONTENT["yvening_refund"]=YVENING_REFUND; CONTENT["yvening_exchange"]=YVENING_EXCHANGE;
CONTENT["yvening_simplemerge"]=YVENING_MERGE_TEMPLATE;
CONTENT["marnell_refund"]=MARNELL_REFUND; CONTENT["marnell_exchange"]=MARNELL_EXCHANGE;
CONTENT["marnell_simplemerge"]=MARNELL_MERGE_TEMPLATE;
CONTENT["dramang_refund"]=DRAMANG_REFUND; CONTENT["dramang_exchange"]=DRAMANG_EXCHANGE;
CONTENT["dramang_simplemerge"]=DRAMANG_MERGE_TEMPLATE;

/* 공통 IB/OB (대분류 맨 위) */
const COMMON_TREE = {
  "채팅 표준 응대":{__content:"cmn_all", __sections:[
    {group:true, label:"💡 공통 기본", anchor:"c_basic"},
    {label:"0. 브랜드별 개요", anchor:"c_basic_0"},
    {label:"1. 인사말", anchor:"c_basic_1"},
    {label:"2. 사전/사후 대기", anchor:"c_basic_2"},
    {label:"3. 호응 표현", anchor:"c_basic_3"},
    {label:"4. 채팅 중 유선 요청", anchor:"c_basic_4"},
    {label:"5. 추가 문의·점심", anchor:"c_basic_5"},
    {label:"🚨 상담 종료 경고", anchor:"c_basic_7"},
    {group:true, label:"🎁 제품 문의", anchor:"c_product"},
    {group:true, label:"📦 배송·출고 문의", anchor:"c_ship"},
    {label:"1. 배송 일정", anchor:"c_ship_1"},
    {label:"2. 미배송·오배송", anchor:"c_ship_2"},
    {label:"3. 분리배송", anchor:"c_ship_3"},
    {group:true, label:"🔄 주문 변경", anchor:"c_order"},
    {label:"1. 주문 취소", anchor:"c_order_1"},
    {label:"2. 배송 정보 변경", anchor:"c_order_2"},
    {group:true, label:"💳 결제 문의", anchor:"c_pay"},
    {group:true, label:"👤 멤버십·회원정보", anchor:"c_member"},
    {group:true, label:"📣 마케팅·제휴", anchor:"c_mkt"},
    {group:true, label:"🛒 채팅 주문", anchor:"c_chat"}
  ]}
};

const CALL_TREE = {
  "유선 표준 응대":{__content:"call_all", __sections:[
    {group:true, label:"📋 유선 상담 운영 기준", anchor:"c_ops"},
    {group:true, label:"💡 공통 기본", anchor:"c_basic"},
    {label:"1. 인사말", anchor:"c_basic_1"},
    {label:"2. 사전/사후 대기", anchor:"c_basic_2"},
    {label:"3. 호응 표현", anchor:"c_basic_3"},
    {label:"4. 추가 문의", anchor:"c_basic_4"},
    {label:"🚨 상담 종료 경고", anchor:"c_warn"},
    {group:true, label:"🔄 주문 변경", anchor:"c_order"},
    {label:"1. 취소 후 배송", anchor:"c_order_1"},
    {label:"2. 배송 정보 변경", anchor:"c_order_2"},
    {group:true, label:"💳 결제 문의", anchor:"c_pay"},
    {group:true, label:"👤 회원 정보 · 마케팅/제휴", anchor:"c_member"},
    {label:"1. 회원 탈퇴", anchor:"c_member_1"},
    {label:"2. 비밀번호 찾기", anchor:"c_member_2"},
    {label:"3. 회원가입", anchor:"c_member_3"},
    {label:"📣 마케팅·제휴 문의", anchor:"c_mkt"},
    {group:true, label:"📞 콜백·아웃바운드 스크립트", anchor:"c_ob"},
    {group:true, label:"📞 전화 주문 유의사항", anchor:"c_call"}
  ]}
};

/* 유선 브랜드별 전용 프로세스 (채팅의 "공통"/"브랜드" 구분과 동일 패턴) */
const CALL_BRAND_TREE = {
  "슬룸":{
    "🎫 콜백 티켓 처리 프로세스":{__content:"call_sloomcb", __sections:[
      {label:"🧭 공통 처리 플로우", anchor:"c_sloomcb_0"},
      {label:"1. 교환·반품 철회 요청", anchor:"c_sloomcb_1"},
      {label:"2. 교환제품 배송일정", anchor:"c_sloomcb_2"},
      {label:"3. 반품·환불일정", anchor:"c_sloomcb_3"},
      {label:"4. 오배송·미배송", anchor:"c_sloomcb_4"},
      {label:"5. 재회수 접수", anchor:"c_sloomcb_5"},
      {label:"6. 전화주문", anchor:"c_sloomcb_6"},
      {label:"7. 주문취소 요청", anchor:"c_sloomcb_7"},
      {label:"8. 취소 후 배송·회수", anchor:"c_sloomcb_8"}
    ]}
  }
};

const BOARD_TREE = {
  "게시판 표준 응대":{__content:"board", __sections:[
    {group:true, label:"📋 1:1·FAQ 공통 양식", anchor:"b_form"},
    {label:"[전브랜드] 첫인사/끝인사", anchor:"b_form_1"},
    {label:"[전브랜드] 채팅 상담 유도", anchor:"b_form_2"},
    {label:"[전브랜드] 고객센터 안내", anchor:"b_form_3"},
    {group:true, label:"📄 문의 유형별 템플릿", anchor:"b_type"},
    {label:"[슬룸] 불량·교환·AS", anchor:"b_type_1"},
    {label:"[슬룸] 네이버페이 환불", anchor:"b_type_2"},
    {label:"[슬룸] 100% 환불 이벤트", anchor:"b_type_3"},
    {label:"[전브랜드] 교환/반품 사유", anchor:"b_type_4"},
    {group:true, label:"📦 [슬룸] 외부몰 유형별 템플릿", anchor:"b_ext"},
    {label:"1. 일반 문의", anchor:"b_ext_1"},
    {label:"2. 제품별 사용법", anchor:"b_ext_2"},
    {label:"🧍 등·허리", anchor:"b_ext_2a"},
    {label:"💆 목·어깨", anchor:"b_ext_2b"},
    {label:"🦵🏻 발·종아리", anchor:"b_ext_2c"},
    {label:"🖐️ 손·눈·팔", anchor:"b_ext_2d"},
    {label:"🧖 전신·바디케어", anchor:"b_ext_2e"},
    {label:"🎁 카카오톡 선물", anchor:"b_ext_2f"},
    {label:"3. 반품·교환·AS", anchor:"b_ext_4"}
  ]}
};

/* 브랜드 트리 (11개 × 동일 중분류 6종) — 자동 생성 */
const BRAND_TREE = {};
BRAND_LIST.forEach(b=>{
  const sub={};
  INQUIRY_TYPES.forEach(t=>{ sub[t]={}; });   // 기본은 빈 leaf(등록 전)
  BRAND_TREE[b]=sub;
});
/* 슬룸 › 단순변심 반품 = 단계별 콘텐츠 연결 (데모) */
BRAND_TREE["슬룸"]["단순변심 반품"]={
  __content:"slm_refund",
  __sections:[
    {label:"💡 기준 및 조건",anchor:"secGuide"},
    {label:"1. 7일 경과 여부 및 사유 확인",anchor:"sec1"},
    {label:"2. 반품 배송비 안내",anchor:"sec2"},
    {label:"3. 포장 및 회수 안내",anchor:"sec3"},
    {label:"4. 결제수단별 환불 안내",anchor:"sec4"}
  ]
};

BRAND_TREE["슬룸"]["100%환불이벤트"]={
  __content:"slm_100refund",
  __sections:[
    {group:true, label:"💡 응대 기준", anchor:"secA"},
    {label:"1. 기간 전 응대", anchor:"secBefore"},
    {label:"2. 기간 경과 응대", anchor:"secAfter"},
    {label:"3. 기간 내 응대", anchor:"secWithin"},
    {group:true, label:"💯 100%환불이벤트 접수", anchor:"secAccept"},
    {label:"🟢 유형별 기준", anchor:"secRef"},
    {label:"1. 상품 1개 단품", anchor:"secSingle"},
    {label:"2. 동일 상품 2개 이상 (1+1 포함)", anchor:"secMulti"},
    {label:"3. 세트 상품", anchor:"secSet"},
    {label:"4. 기타 유형", anchor:"secExc"},
    {label:"💳 [공통] 환불 안내", anchor:"secCommon"}
  ]
};

delete BRAND_TREE["슬룸"]["유상 AS"];
delete BRAND_TREE["셀올로지"]["유상 AS"];
delete BRAND_TREE["얼라인랩"]["유상 AS"];
delete BRAND_TREE["빌바"]["유상 AS"];
delete BRAND_TREE["12 o'clock"]["유상 AS"];
BRAND_TREE["슬룸"]["불량 AS 교환/반품"]={
  __content:"slm_as",
  __sections:[
    {label:"🧭 상담 플로우", anchor:"secFlow"},
    {group:true, label:"💡 AS 정책 및 기준", anchor:"asBase"},
    {group:true, label:"1. 보증기간 확인", anchor:"guar"},
    {group:true, label:"2. 불량 유형 확인", anchor:"step1"},
    {label:"A. 사용법 안내 필요", anchor:"groupA"},
    {sub:true, label:"① 충전/전원", anchor:"t1"},
    {sub:true, label:"② 작동 관련 증상", anchor:"t2"},
    {sub:true, label:"③ 소음·온열·EMS 강도", anchor:"t3"},
    {label:"B. 사용법 안내 불필요", anchor:"groupB"},
    {sub:true, label:"④ 구성품 누락", anchor:"t5"},
    {sub:true, label:"⑤ 이염/오염/초도파손", anchor:"t6"},
    {label:"🔁 재불량", anchor:"t4"},
    {group:true, label:"3. AS 접수", anchor:"step2"},
    {label:"🛠️ 무상 AS", anchor:"freeFlow"},
    {sub:true, label:"🔷 무상 교환 안내", anchor:"freeBranch"},
    {sub:true, label:"🔷 무상 반품 안내", anchor:"freePack"},
    {label:"🔧 유상 AS", anchor:"paidFlow"},
    {sub:true, label:"① 유상 비용 안내", anchor:"paidCost"},
    {sub:true, label:"② 자체 폐기 안내", anchor:"paidDiscard"},
    {sub:true, label:"③ 재출고 안내", anchor:"paidReship"},
    {sub:true, label:"✔️ [유상비용 미입금 시] 상담 종료 유도", anchor:"paidDeposit"},
    {label:"🚨 [단종] EDGE CASE", anchor:"edgeDiscon"},
    {sub:true, label:"① 품질보증기간(1년) 이내", anchor:"edgeIn"},
    {sub:true, label:"② 품질보증기간(1년) 경과", anchor:"edgeOut"},
    {label:"📸 증빙 제출 불만에 따른 대응", anchor:"secProof"},
    {label:"✨ [예외] 증빙 미제출", anchor:"exNoEvid"},
    {group:true, label:"🍏 [외부몰] 자동수거", anchor:"autoPickup"},
    {group:true, label:"🚀 쿠팡 판매자로켓 AS", anchor:"crRocket"}
  ]
};
BRAND_TREE["셀올로지"]["불량 AS 교환/반품"]={
  __content:"cel_as",
  __sections:[
    {label:"🧭 상담 플로우", anchor:"secFlow"},
    {group:true, label:"💡 AS 정책 및 기준", anchor:"asBase"},
    {group:true, label:"1. 보증기간 확인", anchor:"guar"},
    {group:true, label:"2. 불량 유형 확인", anchor:"step1"},
    {label:"A. 사용법 안내 필요", anchor:"groupA"},
    {sub:true, label:"① 충전/전원 불량", anchor:"t1"},
    {sub:true, label:"② 작동/제작 불량", anchor:"t2"},
    {label:"B. 사용법 안내 불필요", anchor:"groupB"},
    {sub:true, label:"③ 스크래치/이물질", anchor:"t6"},
    {sub:true, label:"④ 구성품 누락", anchor:"t5"},
    {label:"🔁 재불량", anchor:"t4"},
    {group:true, label:"3. AS 접수", anchor:"step2"},
    {label:"🛠️ 무상 AS", anchor:"freeFlow"},
    {sub:true, label:"🔷 무상 교환 안내", anchor:"freeBranch"},
    {sub:true, label:"🔷 무상 반품 안내", anchor:"freePack"},
    {label:"🔧 유상 AS", anchor:"paidFlow"},
    {sub:true, label:"① 유상 비용 안내", anchor:"paidCost"},
    {sub:true, label:"② 자체 폐기 안내", anchor:"paidDiscard"},
    {sub:true, label:"③ 재출고 안내", anchor:"paidReship"},
    {sub:true, label:"✔️ [유상비용 미입금 시] 상담 종료 유도", anchor:"paidDeposit"},
    {label:"🚨 [단종] EDGE CASE", anchor:"edgeDiscon"},
    {sub:true, label:"① 품질보증기간(1년) 이내", anchor:"edgeIn"},
    {sub:true, label:"② 품질보증기간(1년) 경과", anchor:"edgeOut"},
    {label:"📸 증빙 제출 불만에 따른 대응", anchor:"secProof"},
    {label:"✨ [예외] 증빙 미제출", anchor:"exNoEvid"},
    {group:true, label:"🔷 [디바이스 외_화장품]", anchor:"cosmetic"},
    {sub:true, label:"① 불량 증상 확인", anchor:"cos_symptom"},
    {sub:true, label:"② 불량 접수", anchor:"cos_intake"},
    {group:true, label:"🍏 [외부몰] 자동수거", anchor:"autoPickup"}
  ]
};
BRAND_TREE["얼라인랩"]["불량 AS 교환/반품"]={
  __content:"align_as",
  __sections:[
    {label:"🧭 상담 플로우", anchor:"secFlow"},
    {group:true, label:"💡 AS 정책 및 기준", anchor:"asBase"},
    {group:true, label:"1. 보증기간 확인", anchor:"guar"},
    {group:true, label:"2. 불량 유형 확인", anchor:"step1"},
    {label:"A. 사용법 안내 필요", anchor:"groupA"},
    {sub:true, label:"① 충전/전원/작동", anchor:"t1"},
    {sub:true, label:"② 진동/EMS 강도", anchor:"t3"},
    {label:"B. 사용법 안내 불필요", anchor:"groupB"},
    {sub:true, label:"③ 소음 강도 & 쿠팡/네이버 자동수거", anchor:"tsound"},
    {sub:true, label:"④ 구성품 누락", anchor:"t5"},
    {sub:true, label:"⑤ 이염/오염/초도파손/스크래치", anchor:"t6"},
    {label:"🔁 재불량", anchor:"t4"},
    {group:true, label:"3. AS 접수", anchor:"step2"},
    {label:"🛠️ 무상 AS", anchor:"freeFlow"},
    {sub:true, label:"🔷 무상 교환 안내", anchor:"freeBranch"},
    {sub:true, label:"🔷 무상 반품 안내", anchor:"freePack"},
    {label:"🔧 유상 AS", anchor:"paidFlow"},
    {sub:true, label:"① 유상 비용 안내", anchor:"paidCost"},
    {sub:true, label:"② 자체 폐기 안내", anchor:"paidDiscard"},
    {sub:true, label:"③ 재출고 안내", anchor:"paidReship"},
    {sub:true, label:"✔️ [유상비용 미입금 시] 상담 종료 유도", anchor:"paidDeposit"},
    {label:"🚨 [단종] EDGE CASE", anchor:"edgeDiscon"},
    {sub:true, label:"① 품질보증기간(1년) 이내", anchor:"edgeIn"},
    {sub:true, label:"② 품질보증기간(1년) 경과", anchor:"edgeOut"},
    {label:"📸 증빙 제출 불만에 따른 대응", anchor:"secProof"},
    {label:"✨ [예외] 증빙 미제출", anchor:"exNoEvid"},
  ]
};
BRAND_TREE["빌바"]["불량 AS 교환/반품"]={
  __content:"bilba_as",
  __sections:[
    {label:"🧭 상담 플로우", anchor:"secFlow"},
    {group:true, label:"💡 AS 정책 및 기준", anchor:"asBase"},
    {group:true, label:"1. 보증기간 확인", anchor:"guar"},
    {group:true, label:"2. 불량 유형 확인", anchor:"step1"},
    {label:"A. 사용법 안내 필요", anchor:"groupA"},
    {sub:true, label:"① 전원/작동", anchor:"t1"},
    {label:"B. 사용법 안내 불필요", anchor:"groupB"},
    {sub:true, label:"② 소음 강도 & 쿠팡/네이버 자동수거", anchor:"t3"},
    {sub:true, label:"③ 구성품 누락", anchor:"t5"},
    {sub:true, label:"④ 이염/오염/초도파손", anchor:"t6"},
    {label:"🔁 재불량", anchor:"t4"},
    {group:true, label:"3. AS 접수", anchor:"step2"},
    {label:"🛠️ 무상 AS", anchor:"freeFlow"},
    {sub:true, label:"🔷 무상 교환 안내", anchor:"freeBranch"},
    {sub:true, label:"🔷 무상 반품 안내", anchor:"freePack"},
    {label:"🔧 유상 AS", anchor:"paidFlow"},
    {sub:true, label:"① 유상 비용 안내", anchor:"paidCost"},
    {sub:true, label:"② 자체 폐기 안내", anchor:"paidDiscard"},
    {sub:true, label:"③ 재출고 안내", anchor:"paidReship"},
    {sub:true, label:"✔️ [유상비용 미입금 시] 상담 종료 유도", anchor:"paidDeposit"},
    {label:"🚨 [단종] EDGE CASE", anchor:"edgeDiscon"},
    {sub:true, label:"① 품질보증기간(1년) 이내", anchor:"edgeIn"},
    {sub:true, label:"② 품질보증기간(1년) 경과", anchor:"edgeOut"},
    {label:"📸 증빙 제출 불만에 따른 대응", anchor:"secProof"},
    {label:"✨ [예외] 증빙 미제출", anchor:"exNoEvid"}
  ]
};
BRAND_TREE["12 o'clock"]["불량 AS 교환/반품"]={
  __content:"oclock_as",
  __sections:[
    {label:"🧭 상담 플로우", anchor:"secFlow"},
    {group:true, label:"💡 AS 정책 및 기준", anchor:"asBase"},
    {group:true, label:"1. 보증기간 확인", anchor:"guar"},
    {group:true, label:"2. 불량 유형 확인", anchor:"step1"},
    {label:"A. 사용법 안내 필요", anchor:"groupA"},
    {sub:true, label:"① 충전/전원/작동", anchor:"t1"},
    {label:"B. 사용법 안내 불필요", anchor:"groupB"},
    {sub:true, label:"② 소음·온열 강도 & 쿠팡/네이버 자동수거", anchor:"t3"},
    {sub:true, label:"③ 구성품 누락", anchor:"t5"},
    {sub:true, label:"④ 이염/오염/초도파손/스크래치", anchor:"t6"},
    {label:"🔁 재불량", anchor:"t4"},
    {group:true, label:"3. AS 접수", anchor:"step2"},
    {label:"🛠️ 무상 AS", anchor:"freeFlow"},
    {sub:true, label:"🔷 무상 교환 안내", anchor:"freeBranch"},
    {sub:true, label:"🔷 무상 반품 안내", anchor:"freePack"},
    {label:"🔧 유상 AS", anchor:"paidFlow"},
    {sub:true, label:"① 유상 비용 안내", anchor:"paidCost"},
    {sub:true, label:"② 자체 폐기 안내", anchor:"paidDiscard"},
    {sub:true, label:"③ 재출고 안내", anchor:"paidReship"},
    {sub:true, label:"✔️ [유상비용 미입금 시] 상담 종료 유도", anchor:"paidDeposit"},
    {label:"🚨 [단종] EDGE CASE", anchor:"edgeDiscon"},
    {sub:true, label:"① 품질보증기간(1년) 이내", anchor:"edgeIn"},
    {sub:true, label:"② 품질보증기간(1년) 경과", anchor:"edgeOut"},
    {label:"📸 증빙 제출 불만에 따른 대응", anchor:"secProof"},
    {label:"✨ [예외] 증빙 미제출", anchor:"exNoEvid"}
  ]
};

BRAND_TREE["슬룸"]["단순변심 교환"]={
  __content:"slm_exchange",
  __sections:[
    {label:"💡 기준 및 조건", anchor:"secGuideX"},
    {label:"1. 교환 방식 안내", anchor:"sec1"},
    {label:"2. 교환 배송비 안내", anchor:"sec2"},
    {label:"3. 포장 및 회수 안내", anchor:"sec3"},
    {label:"4. 검수 및 재출고 안내", anchor:"sec4"}
  ]
};

BRAND_TREE["슬룸"]["부작용·상해 VOC"]={
  __content:"slm_side",
  __sections:[
    {label:"🧭 상담 플로우", anchor:"secFlow"},
    {group:true, label:"☑️ Nomal Case (일반)", anchor:"secNormal"},
    {group:true, label:"🚨 EDGE Case (Critical)", anchor:"secEdge"},
    {label:"💠 [공통] 서류 제출 후", anchor:"sec_submit"}
  ]
};

/* ===== [신규 초안] 6개 AS-less 브랜드 "불량 교환/반품" 콘텐츠 매핑 =====
   (AS 없는 브랜드는 중분류명에 "AS"를 쓰지 않음 — 기본 생성된 빈 leaf를 삭제하고 새 key로 등록) */
delete BRAND_TREE["심플리케어"]["유상 AS"];
delete BRAND_TREE["심플리케어"]["불량 AS 교환/반품"];
BRAND_TREE["심플리케어"]["불량 교환/반품"]={
  __content:"simplicare_as",
  __sections:[
    {label:"🧭 상담 플로우", anchor:"secFlow"},
    {label:"1. 불량 유형 확인", anchor:"sec_type"},
    {label:"2. 불량 유형별 증빙·인정 안내", anchor:"sec_evid"},
    {label:"3. 포장 및 회수 안내", anchor:"sec_pack"},
    {label:"4. 교환/반품 안내", anchor:"sec_refund"}
  ]
};
delete BRAND_TREE["코코다움"]["유상 AS"];
delete BRAND_TREE["코코다움"]["불량 AS 교환/반품"];
BRAND_TREE["코코다움"]["불량 교환/반품"]={
  __content:"cocodaum_as",
  __sections:[
    {label:"🧭 상담 플로우", anchor:"secFlow"},
    {label:"1. 불량 유형 확인", anchor:"sec_type"},
    {label:"2. 불량 유형별 증빙·인정 안내", anchor:"sec_evid"},
    {label:"3. 포장 및 회수 안내", anchor:"sec_pack"},
    {label:"4. 교환/반품 안내", anchor:"sec_refund"}
  ]
};
delete BRAND_TREE["닥터맨즈"]["유상 AS"];
delete BRAND_TREE["닥터맨즈"]["불량 AS 교환/반품"];
BRAND_TREE["닥터맨즈"]["불량 교환/반품"]={
  __content:"drmans_as",
  __sections:[
    {label:"🧭 상담 플로우", anchor:"secFlow"},
    {label:"1. 불량 유형 확인", anchor:"sec_type"},
    {label:"2. 불량 유형별 증빙·인정 안내", anchor:"sec_evid"},
    {label:"3. 포장 및 회수 안내", anchor:"sec_pack"},
    {label:"4. 교환/반품 안내", anchor:"sec_refund"}
  ]
};
delete BRAND_TREE["와이브닝"]["유상 AS"];
delete BRAND_TREE["와이브닝"]["불량 AS 교환/반품"];
BRAND_TREE["와이브닝"]["불량 교환/반품"]={
  __content:"yvening_as",
  __sections:[
    {label:"🧭 상담 플로우", anchor:"secFlow"},
    {label:"1. 불량 유형 확인", anchor:"sec_type"},
    {label:"2. 불량 유형별 증빙·인정 안내", anchor:"sec_evid"},
    {label:"3. 포장 및 회수 안내", anchor:"sec_pack"},
    {label:"4. 교환/반품 안내", anchor:"sec_refund"}
  ]
};
delete BRAND_TREE["마넬"]["유상 AS"];
delete BRAND_TREE["마넬"]["불량 AS 교환/반품"];
BRAND_TREE["마넬"]["불량 교환/반품"]={
  __content:"marnell_as",
  __sections:[
    {label:"🧭 상담 플로우", anchor:"secFlow"},
    {label:"1. 불량 유형 확인", anchor:"sec_type"},
    {label:"2. 불량 유형별 증빙·인정 안내", anchor:"sec_evid"},
    {label:"3. 포장 및 회수 안내", anchor:"sec_pack"},
    {label:"4. 교환/반품 안내", anchor:"sec_refund"}
  ]
};
delete BRAND_TREE["닥터아망"]["유상 AS"];
delete BRAND_TREE["닥터아망"]["불량 AS 교환/반품"];
BRAND_TREE["닥터아망"]["불량 교환/반품"]={
  __content:"dramang_as",
  __sections:[
    {label:"🧭 상담 플로우", anchor:"secFlow"},
    {label:"1. 불량 유형 확인", anchor:"sec_type"},
    {label:"2. 불량 유형별 증빙·인정 안내", anchor:"sec_evid"},
    {label:"3. 포장 및 회수 안내", anchor:"sec_pack"},
    {label:"4. 교환/반품 안내", anchor:"sec_refund"}
  ]
};

delete BRAND_TREE["심플리케어"]["부작용·상해 VOC"];
BRAND_TREE["심플리케어"]["부작용 VOC"]={
  __content:"simplicare_side",
  __sections:[
    {label:"🧭 상담 플로우",anchor:"secFlow"},
    {label:"1. 선제적 사과 멘트",anchor:"sec_apology"},
    {label:"2. 상품 안내 및 재확인",anchor:"sec_env"},
    {label:"3. 포장 및 회수 안내",anchor:"sec_pack"},
    {label:"4. 병원 내원 및 치료 안내",anchor:"sec_hospital"},
    {label:"5. 보상 서류 안내",anchor:"sec_docs2"},
    {label:"6. 결제수단별 환불 안내",anchor:"sec_refund"},
    {label:"7. 보상금 요구 여부",anchor:"sec_branch"},
    {label:"💠 [공통] 서류 제출 후",anchor:"sec_submit"}
  ]
};
BRAND_TREE["얼라인랩"]["부작용·상해 VOC"]={
  __content:"alignlab_side",
  __sections:[
    {label:"🧭 상담 플로우", anchor:"secFlow"},
    {label:"1. 선제적 사과 멘트", anchor:"sec_apology"},
    {label:"2. 제품 결함 아님 및 서류 안내", anchor:"sec_env"},
    {label:"3. 포장 및 회수 안내", anchor:"sec_pack"},
    {label:"4. 결제수단별 환불 안내", anchor:"sec_refund"},
    {label:"🔺 [예외케이스] 클레임/민원/보상 요청", anchor:"sec_exception"},
    {label:"💠 [공통] 서류 제출 후", anchor:"sec_submit"}
  ]
};
BRAND_TREE["빌바"]["부작용·상해 VOC"]={
  __content:"bilba_side",
  __sections:[
    {label:"🧭 상담 플로우", anchor:"secFlow"},
    {label:"1. 선제적 사과 멘트", anchor:"sec_apology"},
    {label:"💡 사용 환경 확인", anchor:"sec_env"},
    {label:"2. 포장 및 회수 안내", anchor:"sec_pack"},
    {label:"3. 결제수단별 환불 안내", anchor:"sec_refund"},
    {label:"4. 병원 내원 및 치료 안내_증빙 서류", anchor:"sec_hospital"},
    {label:"5. 보상금 요구 여부에 따른 응대", anchor:"sec_branch"},
    {label:"💠 [공통] 서류 제출 후", anchor:"sec_submit"}
  ]
};
BRAND_TREE["셀올로지"]["부작용·상해 VOC"]={
  __content:"cellology_side",
  __sections:[
    {label:"🧭 상담 플로우", anchor:"secFlow"},
    {label:"1. 선제적 사과 멘트", anchor:"sec_apology"},
    {label:"2. 제품 결함 아님 및 서류 안내", anchor:"sec_env"},
    {label:"3. 포장 및 회수 안내", anchor:"sec_pack"},
    {label:"4. 결제수단별 환불 안내", anchor:"sec_refund"},
    {label:"🔺 [예외케이스] 클레임/민원/보상 요청", anchor:"sec_exception"},
    {label:"💠 [공통] 서류 제출 후", anchor:"sec_submit"}
  ]
};
delete BRAND_TREE["코코다움"]["부작용·상해 VOC"];
BRAND_TREE["코코다움"]["부작용 VOC"]={
  __content:"cocodaum_side",
  __sections:[
    {label:"🧭 상담 플로우",anchor:"secFlow"},
    {label:"1. 선제적 사과 멘트",anchor:"sec_apology"},
    {label:"2. 상품 안내 및 재확인",anchor:"sec_env"},
    {label:"3. 포장 및 회수 안내",anchor:"sec_pack"},
    {label:"4. 결제수단별 환불 안내",anchor:"sec_refund"},
    {label:"🔺 [예외케이스] 클레임/민원/보상 요청",anchor:"sec_exception"},
    {label:"💠 [공통] 서류 제출 후",anchor:"sec_submit"}
  ]
};
BRAND_TREE["12 o'clock"]["부작용·상해 VOC"]={
  __content:"oclock_side",
  __sections:[
    {label:"🧭 상담 플로우", anchor:"secFlow"},
    {label:"1. 선제적 사과 멘트", anchor:"sec_apology"},
    {label:"💡 사용 환경 확인", anchor:"sec_env"},
    {label:"2. 포장 및 회수 안내", anchor:"sec_pack"},
    {label:"3. 결제수단별 환불 안내", anchor:"sec_refund"},
    {label:"4. 병원 내원 및 치료 안내_증빙 서류", anchor:"sec_hospital"},
    {label:"5. 보상금 요구 여부에 따른 응대", anchor:"sec_branch"},
    {label:"💠 [공통] 서류 제출 후", anchor:"sec_submit"}
  ]
};
delete BRAND_TREE["닥터맨즈"]["부작용·상해 VOC"];
BRAND_TREE["닥터맨즈"]["부작용 VOC"]={
  __content:"drmans_side",
  __sections:[
    {label:"🧭 상담 플로우", anchor:"secFlow"},
    {label:"1. 선제적 사과 멘트", anchor:"sec_apology"},
    {label:"2. 제품 결함 아님 및 서류 안내", anchor:"sec_env"},
    {label:"3. 포장 및 회수 안내", anchor:"sec_pack"},
    {label:"4. 결제수단별 환불 안내", anchor:"sec_refund"},
    {label:"🔺 [예외케이스] 클레임/민원/보상 요청", anchor:"sec_exception"},
    {label:"💠 [공통] 서류 제출 후", anchor:"sec_submit"}
  ]
};
delete BRAND_TREE["와이브닝"]["부작용·상해 VOC"];
BRAND_TREE["와이브닝"]["부작용 VOC"]={
  __content:"yvening_side",
  __sections:[
    {label:"🧭 상담 플로우", anchor:"secFlow"},
    {label:"1. 선제적 사과 멘트", anchor:"sec_apology"},
    {label:"2. 제품 결함 아님 및 서류 안내", anchor:"sec_env"},
    {label:"3. 포장 및 회수 안내", anchor:"sec_pack"},
    {label:"4. 결제수단별 환불 안내", anchor:"sec_refund"},
    {label:"🔺 [예외케이스] 클레임/민원/보상 요청", anchor:"sec_exception"},
    {label:"💠 [공통] 서류 제출 후", anchor:"sec_submit"}
  ]
};
delete BRAND_TREE["마넬"]["부작용·상해 VOC"];
BRAND_TREE["마넬"]["부작용 VOC"]={
  __content:"marnell_side",
  __sections:[
    {label:"🧭 상담 플로우", anchor:"secFlow"},
    {label:"1. 선제적 사과 멘트", anchor:"sec_apology"},
    {label:"2. 제품 결함 아님 및 서류 안내", anchor:"sec_env"},
    {label:"3. 포장 및 회수 안내", anchor:"sec_pack"},
    {label:"4. 결제수단별 환불 안내", anchor:"sec_refund"},
    {label:"🔺 [예외케이스] 클레임/민원/보상 요청", anchor:"sec_exception"},
    {label:"💠 [공통] 서류 제출 후", anchor:"sec_submit"}
  ]
};
delete BRAND_TREE["닥터아망"]["부작용·상해 VOC"];
BRAND_TREE["닥터아망"]["부작용 VOC"]={
  __content:"dramang_side",
  __sections:[
    {label:"🧭 상담 플로우", anchor:"secFlow"},
    {label:"1. 선제적 사과 멘트", anchor:"sec_apology"},
    {label:"2. 제품 결함 아님 및 서류 안내", anchor:"sec_env"},
    {label:"3. 포장 및 회수 안내", anchor:"sec_pack"},
    {label:"4. 결제수단별 환불 안내", anchor:"sec_refund"},
    {label:"🔺 [예외케이스] 클레임/민원/보상 요청", anchor:"sec_exception"},
    {label:"💠 [공통] 서류 제출 후", anchor:"sec_submit"}
  ]
};

BRAND_TREE["셀올로지"]["100%환불이벤트"]={
  __content:"cellology_100refund",
  __sections:[
    {group:true, label:"💡 응대 기준", anchor:"secA"},
    {label:"1. 기간 전 응대", anchor:"secBefore"},
    {label:"2. 기간 경과 응대", anchor:"secAfter"},
    {label:"3. 기간 내 응대", anchor:"secWithin"},
    {group:true, label:"💯 100%환불이벤트 접수", anchor:"secAccept"},
    {label:"🟢 유형별 기준", anchor:"secRef"},
    {label:"1. 상품 1개 단품", anchor:"secSingle"},
    {label:"2. 동일 상품 2개 이상", anchor:"secMulti"},
    {label:"3. 세트 상품", anchor:"secSet"},
    {label:"4. 기타 유형", anchor:"secExc"},
    {label:"💳 [공통] 환불 안내", anchor:"secCommon"}
  ]
};

BRAND_TREE["닥터아망"]["100%환불이벤트"]={
  __content:"dramang_100refund",
  __sections:[
    {group:true, label:"💡 응대 기준", anchor:"secA"},
    {label:"1. 기간 전 응대", anchor:"secBefore"},
    {label:"2. 기간 경과 응대", anchor:"secAfter"},
    {label:"3. 기간 내 응대", anchor:"secWithin"},
    {group:true, label:"💯 100%환불이벤트 접수", anchor:"secAccept"},
    {label:"🟢 유형별 기준", anchor:"secRef"},
    {label:"1. 상품 1개 단품", anchor:"secSingle"},
    {label:"2. 동일 상품 2개 이상", anchor:"secMulti"},
    {label:"3. 세트 상품", anchor:"secSet"},
    {label:"4. 기타 유형", anchor:"secExc"},
    {label:"💳 [공통] 환불 안내", anchor:"secCommon"}
  ]
};
BRAND_TREE["와이브닝"]["100%환불이벤트"]={
  __content:"yvening_100refund",
  __sections:[
    {group:true, label:"💡 응대 기준", anchor:"secA"},
    {label:"1. 기간 전 응대", anchor:"secBefore"},
    {label:"2. 기간 경과 응대", anchor:"secAfter"},
    {label:"3. 기간 내 응대", anchor:"secWithin"},
    {group:true, label:"💯 100%환불이벤트 접수", anchor:"secAccept"},
    {label:"🟢 유형별 기준", anchor:"secRef"},
    {label:"1. 상품 1개 단품", anchor:"secSingle"},
    {label:"2. 동일 상품 2개 이상", anchor:"secMulti"},
    {label:"3. 세트 상품", anchor:"secSet"},
    {label:"4. 기타 유형", anchor:"secExc"},
    {label:"💳 [공통] 환불 안내", anchor:"secCommon"}
  ]
};
BRAND_TREE["코코다움"]["100%환불이벤트"]={
  __content:"cocodaum_100refund",
  __sections:[
    {group:true, label:"💡 응대 기준", anchor:"secA"},
    {label:"1. 기간 전 응대", anchor:"secBefore"},
    {label:"2. 기간 경과 응대", anchor:"secAfter"},
    {label:"3. 기간 내 응대", anchor:"secWithin"},
    {group:true, label:"💯 100%환불이벤트 접수", anchor:"secAccept"},
    {label:"🟢 유형별 기준", anchor:"secRef"},
    {label:"1. 상품 1개 단품", anchor:"secSingle"},
    {label:"2. 동일 상품 2개 이상", anchor:"secMulti"},
    {label:"3. 세트 상품", anchor:"secSet"},
    {label:"4. 기타 유형", anchor:"secExc"},
    {label:"💳 [공통] 환불 안내", anchor:"secCommon"}
  ]
};
BRAND_TREE["심플리케어"]["100%환불이벤트"]={
  __content:"simplicare_100refund",
  __sections:[
    {group:true, label:"💡 응대 기준", anchor:"secA"},
    {label:"1. 기간 전 응대", anchor:"secBefore"},
    {label:"2. 기간 경과 응대", anchor:"secAfter"},
    {label:"3. 기간 내 응대", anchor:"secWithin"},
    {group:true, label:"💯 100%환불이벤트 접수", anchor:"secAccept"},
    {label:"🟢 유형별 기준", anchor:"secRef"},
    {label:"1. 상품 1개 단품", anchor:"secSingle"},
    {label:"2. 동일 상품 2개 이상", anchor:"secMulti"},
    {label:"3. 세트 상품", anchor:"secSet"},
    {label:"4. 기타 유형", anchor:"secExc"},
    {label:"💳 [공통] 환불 안내", anchor:"secCommon"}
  ]
};


/* === 슬룸 외 브랜드 단순변심 반품/교환 → BRAND_TREE 연결 (콘텐츠 자체는 각 브랜드 파일의 {BRAND}_REFUND/{BRAND}_EXCHANGE로 베이킹됨, 2026-08-26 JSON 전환) === */
(function(){
  var RS=[{"label":"💡 기준 및 조건","anchor":"secGuide"},{"label":"1. 7일 경과 여부 및 사유 확인","anchor":"sec1"},{"label":"2. 반품 배송비 안내","anchor":"sec2"},{"label":"3. 포장 및 회수 안내","anchor":"sec3"},{"label":"4. 결제수단별 환불 안내","anchor":"sec4"}];
  var XS=[{"label":"💡 기준 및 조건","anchor":"secGuideX"},{"label":"1. 교환 방식 안내","anchor":"sec1"},{"label":"2. 교환 배송비 안내","anchor":"sec2"},{"label":"3. 포장 및 회수 안내","anchor":"sec3"},{"label":"4. 검수 및 재출고 안내","anchor":"sec4"}];
  var BN=[{"n":"심플리케어","k":"simplicare"},{"n":"얼라인랩","k":"alignlab"},{"n":"빌바","k":"bilba"},{"n":"셀올로지","k":"cellology"},{"n":"코코다움","k":"cocodaum"},{"n":"12 o'clock","k":"oclock"},{"n":"닥터맨즈","k":"drmans"},{"n":"와이브닝","k":"yvening"},{"n":"마넬","k":"marnell"},{"n":"닥터아망","k":"dramang"}];
  BN.forEach(function(b){
    if(BRAND_TREE[b.n]){
      BRAND_TREE[b.n]["단순변심 반품"]={__content:b.k+"_refund",__sections:RS};
      BRAND_TREE[b.n]["단순변심 교환"]={__content:b.k+"_exchange",__sections:XS};
    }
  });
})();

/* === 단순변심 통합 시안 (2026-08-13) — 슬룸에 한해 '단순변심 반품'+'단순변심 교환' → '단순변심 교환/반품' 병합 (사이드바 위치 유지, 5번은 1~4번과 동일 레벨의 단독 항목·하위메뉴 없음) === */
(function(){
  var old = BRAND_TREE["슬룸"];
  var merged = {};
  for (var k in old) {
    if (k === "단순변심 교환") {
      merged["단순변심 교환/반품"] = {
        __content: "slm_simplemerge",
        __sections: [
          {label:"🧭 상담 플로우", anchor:"secFlow"},
          {label:"1. 교환/반품 의사 확인", anchor:"sec1"},
          {label:"2. 전체/부분 방식 안내", anchor:"sec2"},
          {label:"3. 교환/반품 배송비 안내", anchor:"sec3"},
          {label:"4. 포장 및 회수 안내", anchor:"sec4"},
          {label:"5. 교환/반품 안내", anchor:"step5"}
        ]
      };
    } else if (k === "단순변심 반품") {
      // skip: 위 '단순변심 교환/반품'으로 병합됨
    } else {
      merged[k] = old[k];
    }
  }
  BRAND_TREE["슬룸"] = merged;
})();

/* === 단순변심 통합 시안 확장 (2026-08-26) — 심플리케어에 한해 '단순변심 반품'+'단순변심 교환' → '단순변심 교환/반품' 병합
   (슬룸 SLM_MERGE_TEMPLATE의 구조·병합 방식만 참고, 콘텐츠는 심플리케어 기존 SIMPLICARE_REFUND/SIMPLICARE_EXCHANGE를 그대로 재배치한 SIMPLICARE_MERGE_TEMPLATE 사용 — 새 데이터 항목 없음) === */
(function(){
  var old = BRAND_TREE["심플리케어"];
  var merged = {};
  for (var k in old) {
    if (k === "단순변심 교환") {
      merged["단순변심 교환/반품"] = {
        __content: "simplicare_simplemerge",
        __sections: [
          {label:"🧭 상담 플로우", anchor:"secFlow"},
          {label:"1. 교환/반품 의사 확인", anchor:"sec1"},
          {label:"2. 전체/부분 방식 안내", anchor:"sec2"},
          {label:"3. 교환/반품 배송비 안내", anchor:"sec3"},
          {label:"4. 포장 및 회수 안내", anchor:"sec4"},
          {label:"5. 교환/반품 안내", anchor:"step5"}
        ]
      };
    } else if (k === "단순변심 반품") {
      // skip: 위 '단순변심 교환/반품'으로 병합됨
    } else {
      merged[k] = old[k];
    }
  }
  BRAND_TREE["심플리케어"] = merged;
})();

/* === 단순변심 통합 시안 확장 (2026-08-27) — 얼라인랩에 한해 '단순변심 반품'+'단순변심 교환' → '단순변심 교환/반품' 병합
   (슬룸 SLM_MERGE_TEMPLATE의 구조·병합 방식만 참고, 콘텐츠는 얼라인랩 기존 ALIGNLAB_REFUND/ALIGNLAB_EXCHANGE를 그대로 재배치한 ALIGNLAB_MERGE_TEMPLATE 사용 — 새 데이터 항목 없음) === */
(function(){
  var old = BRAND_TREE["얼라인랩"];
  var merged = {};
  for (var k in old) {
    if (k === "단순변심 교환") {
      merged["단순변심 교환/반품"] = {
        __content: "alignlab_simplemerge",
        __sections: [
          {label:"🧭 상담 플로우", anchor:"secFlow"},
          {label:"1. 교환/반품 의사 확인", anchor:"sec1"},
          {label:"2. 전체/부분 방식 안내", anchor:"sec2"},
          {label:"3. 교환/반품 배송비 안내", anchor:"sec3"},
          {label:"4. 포장 및 회수 안내", anchor:"sec4"},
          {label:"5. 교환/반품 안내", anchor:"step5"}
        ]
      };
    } else if (k === "단순변심 반품") {
      // skip: 위 '단순변심 교환/반품'으로 병합됨
    } else {
      merged[k] = old[k];
    }
  }
  BRAND_TREE["얼라인랩"] = merged;
})();

/* === 단순변심 통합 시안 확장 (2026-08-27) — 빌바에 한해 '단순변심 반품'+'단순변심 교환' → '단순변심 교환/반품' 병합
   (슬룸 SLM_MERGE_TEMPLATE의 구조·병합 방식만 참고, 콘텐츠는 빌바 기존 BILBA_REFUND/BILBA_EXCHANGE를 그대로 재배치한 BILBA_MERGE_TEMPLATE 사용 — 새 데이터 항목 없음) === */
(function(){
  var old = BRAND_TREE["빌바"];
  var merged = {};
  for (var k in old) {
    if (k === "단순변심 교환") {
      merged["단순변심 교환/반품"] = {
        __content: "bilba_simplemerge",
        __sections: [
          {label:"🧭 상담 플로우", anchor:"secFlow"},
          {label:"1. 교환/반품 의사 확인", anchor:"sec1"},
          {label:"2. 전체/부분 방식 안내", anchor:"sec2"},
          {label:"3. 교환/반품 배송비 안내", anchor:"sec3"},
          {label:"4. 포장 및 회수 안내", anchor:"sec4"},
          {label:"5. 교환/반품 안내", anchor:"step5"}
        ]
      };
    } else if (k === "단순변심 반품") {
      // skip: 위 '단순변심 교환/반품'으로 병합됨
    } else {
      merged[k] = old[k];
    }
  }
  BRAND_TREE["빌바"] = merged;
})();

/* === 단순변심 통합 시안 확장 (2026-08-27) — 셀올로지에 한해 '단순변심 반품'+'단순변심 교환' → '단순변심 교환/반품' 병합
   (슬룸 SLM_MERGE_TEMPLATE의 구조·병합 방식만 참고, 콘텐츠는 셀올로지 기존 CELLOLOGY_REFUND/CELLOLOGY_EXCHANGE를 그대로 재배치한 CELLOLOGY_MERGE_TEMPLATE 사용 — 새 데이터 항목 없음.
   셀올로지는 100%환불이벤트 카테고리가 있는 브랜드라 분류 매트릭스도 원본 4행 그대로 유지) === */
(function(){
  var old = BRAND_TREE["셀올로지"];
  var merged = {};
  for (var k in old) {
    if (k === "단순변심 교환") {
      merged["단순변심 교환/반품"] = {
        __content: "cellology_simplemerge",
        __sections: [
          {label:"🧭 상담 플로우", anchor:"secFlow"},
          {label:"1. 교환/반품 의사 확인", anchor:"sec1"},
          {label:"2. 전체/부분 방식 안내", anchor:"sec2"},
          {label:"3. 교환/반품 배송비 안내", anchor:"sec3"},
          {label:"4. 포장 및 회수 안내", anchor:"sec4"},
          {label:"5. 교환/반품 안내", anchor:"step5"}
        ]
      };
    } else if (k === "단순변심 반품") {
      // skip: 위 '단순변심 교환/반품'으로 병합됨
    } else {
      merged[k] = old[k];
    }
  }
  BRAND_TREE["셀올로지"] = merged;
})();

/* === 단순변심 통합 시안 확장 (2026-08-27) — 코코다움에 한해 '단순변심 반품'+'단순변심 교환' → '단순변심 교환/반품' 병합
   (슬룸 SLM_MERGE_TEMPLATE의 구조·병합 방식만 참고, 콘텐츠는 코코다움 기존 COCODAUM_REFUND/COCODAUM_EXCHANGE를 그대로 재배치한 COCODAUM_MERGE_TEMPLATE 사용 — 새 데이터 항목 없음.
   코코다움은 100%환불이벤트 카테고리가 있는 브랜드라 분류 매트릭스도 원본 4행 그대로 유지) === */
(function(){
  var old = BRAND_TREE["코코다움"];
  var merged = {};
  for (var k in old) {
    if (k === "단순변심 교환") {
      merged["단순변심 교환/반품"] = {
        __content: "cocodaum_simplemerge",
        __sections: [
          {label:"🧭 상담 플로우", anchor:"secFlow"},
          {label:"1. 교환/반품 의사 확인", anchor:"sec1"},
          {label:"2. 전체/부분 방식 안내", anchor:"sec2"},
          {label:"3. 교환/반품 배송비 안내", anchor:"sec3"},
          {label:"4. 포장 및 회수 안내", anchor:"sec4"},
          {label:"5. 교환/반품 안내", anchor:"step5"}
        ]
      };
    } else if (k === "단순변심 반품") {
      // skip: 위 '단순변심 교환/반품'으로 병합됨
    } else {
      merged[k] = old[k];
    }
  }
  BRAND_TREE["코코다움"] = merged;
})();

/* === 단순변심 통합 시안 확장 (2026-08-27) — 12 o'clock에 한해 '단순변심 반품'+'단순변심 교환' → '단순변심 교환/반품' 병합
   (슬룸 SLM_MERGE_TEMPLATE의 구조·병합 방식만 참고, 콘텐츠는 12 o'clock 기존 OCLOCK_REFUND/OCLOCK_EXCHANGE를 그대로 재배치한 OCLOCK_MERGE_TEMPLATE 사용 — 새 데이터 항목 없음.
   12 o'clock은 100%환불이벤트 카테고리가 없는 브랜드라 분류 매트릭스는 원본 2행 그대로 유지) === */
(function(){
  var old = BRAND_TREE["12 o'clock"];
  var merged = {};
  for (var k in old) {
    if (k === "단순변심 교환") {
      merged["단순변심 교환/반품"] = {
        __content: "oclock_simplemerge",
        __sections: [
          {label:"🧭 상담 플로우", anchor:"secFlow"},
          {label:"1. 교환/반품 의사 확인", anchor:"sec1"},
          {label:"2. 전체/부분 방식 안내", anchor:"sec2"},
          {label:"3. 교환/반품 배송비 안내", anchor:"sec3"},
          {label:"4. 포장 및 회수 안내", anchor:"sec4"},
          {label:"5. 교환/반품 안내", anchor:"step5"}
        ]
      };
    } else if (k === "단순변심 반품") {
      // skip: 위 '단순변심 교환/반품'으로 병합됨
    } else {
      merged[k] = old[k];
    }
  }
  BRAND_TREE["12 o'clock"] = merged;
})();

/* === 단순변심 통합 시안 확장 (2026-08-27) — 닥터맨즈에 한해 '단순변심 반품'+'단순변심 교환' → '단순변심 교환/반품' 병합
   (슬룸 SLM_MERGE_TEMPLATE의 구조·병합 방식만 참고, 콘텐츠는 닥터맨즈 기존 DRMANS_REFUND/DRMANS_EXCHANGE를 그대로 재배치한 DRMANS_MERGE_TEMPLATE 사용 — 새 데이터 항목 없음.
   닥터맨즈는 100%환불이벤트 카테고리가 없는 브랜드라 분류 매트릭스는 원본 2행 그대로 유지) === */
(function(){
  var old = BRAND_TREE["닥터맨즈"];
  var merged = {};
  for (var k in old) {
    if (k === "단순변심 교환") {
      merged["단순변심 교환/반품"] = {
        __content: "drmans_simplemerge",
        __sections: [
          {label:"🧭 상담 플로우", anchor:"secFlow"},
          {label:"1. 교환/반품 의사 확인", anchor:"sec1"},
          {label:"2. 전체/부분 방식 안내", anchor:"sec2"},
          {label:"3. 교환/반품 배송비 안내", anchor:"sec3"},
          {label:"4. 포장 및 회수 안내", anchor:"sec4"},
          {label:"5. 교환/반품 안내", anchor:"step5"}
        ]
      };
    } else if (k === "단순변심 반품") {
      // skip: 위 '단순변심 교환/반품'으로 병합됨
    } else {
      merged[k] = old[k];
    }
  }
  BRAND_TREE["닥터맨즈"] = merged;
})();

/* === 단순변심 통합 시안 확장 (2026-08-27) — 와이브닝에 한해 '단순변심 반품'+'단순변심 교환' → '단순변심 교환/반품' 병합
   (슬룸 SLM_MERGE_TEMPLATE의 구조·병합 방식만 참고, 콘텐츠는 와이브닝 기존 YVENING_REFUND/YVENING_EXCHANGE를 그대로 재배치한 YVENING_MERGE_TEMPLATE 사용 — 새 데이터 없음.
   와이브닝은 100%환불이벤트 카테고리가 있는 브랜드라 분류 매트릭스는 원본 4행 그대로 유지. 이 IIFE는 "단순변심 교환"/"단순변심 반품" 키만 처리하므로 100%환불이벤트 카테고리는 그대로 보존됨) === */
(function(){
  var old = BRAND_TREE["와이브닝"];
  var merged = {};
  for (var k in old) {
    if (k === "단순변심 교환") {
      merged["단순변심 교환/반품"] = {
        __content: "yvening_simplemerge",
        __sections: [
          {label:"🧭 상담 플로우", anchor:"secFlow"},
          {label:"1. 교환/반품 의사 확인", anchor:"sec1"},
          {label:"2. 전체/부분 방식 안내", anchor:"sec2"},
          {label:"3. 교환/반품 배송비 안내", anchor:"sec3"},
          {label:"4. 포장 및 회수 안내", anchor:"sec4"},
          {label:"5. 교환/반품 안내", anchor:"step5"}
        ]
      };
    } else if (k === "단순변심 반품") {
      // skip: 위 '단순변심 교환/반품'으로 병합됨
    } else {
      merged[k] = old[k];
    }
  }
  BRAND_TREE["와이브닝"] = merged;
})();

/* === 단순변심 통합 시안 확장 (2026-08-27) — 마넬에 한해 '단순변심 반품'+'단순변심 교환' → '단순변심 교환/반품' 병합
   (슬룸 SLM_MERGE_TEMPLATE의 구조·병합 방식만 참고, 콘텐츠는 마넬 기존 MARNELL_REFUND/MARNELL_EXCHANGE를 그대로 재배치한 MARNELL_MERGE_TEMPLATE 사용 — 새 데이터 없음.
   마넬은 100%환불이벤트 카테고리가 없는 브랜드라 분류 매트릭스는 2행(단순변심/불량AS교환·반품) 구조로 구성) === */
(function(){
  var old = BRAND_TREE["마넬"];
  var merged = {};
  for (var k in old) {
    if (k === "단순변심 교환") {
      merged["단순변심 교환/반품"] = {
        __content: "marnell_simplemerge",
        __sections: [
          {label:"🧭 상담 플로우", anchor:"secFlow"},
          {label:"1. 교환/반품 의사 확인", anchor:"sec1"},
          {label:"2. 전체/부분 방식 안내", anchor:"sec2"},
          {label:"3. 교환/반품 배송비 안내", anchor:"sec3"},
          {label:"4. 포장 및 회수 안내", anchor:"sec4"},
          {label:"5. 교환/반품 안내", anchor:"step5"}
        ]
      };
    } else if (k === "단순변심 반품") {
      // skip: 위 '단순변심 교환/반품'으로 병합됨
    } else {
      merged[k] = old[k];
    }
  }
  BRAND_TREE["마넬"] = merged;
})();

/* === 단순변심 통합 시안 확장 (2026-08-27) — 닥터아망에 한해 '단순변심 반품'+'단순변심 교환' → '단순변심 교환/반품' 병합
   (슬룸 SLM_MERGE_TEMPLATE의 구조·병합 방식만 참고, 콘텐츠는 닥터아망 기존 DRAMANG_REFUND/DRAMANG_EXCHANGE를 그대로 재배치한 DRAMANG_MERGE_TEMPLATE 사용 — 새 데이터 없음.
   닥터아망은 100%환불이벤트 카테고리가 있는 브랜드라 분류 매트릭스는 원본 4행 그대로 유지. 이 IIFE는 "단순변심 교환"/"단순변심 반품" 키만 처리하므로 100%환불이벤트 카테고리는 그대로 보존됨.
   이 브랜드로 1번+1-1번(단순변심 통합+넘버링 통일) 작업 전체 종료) === */
(function(){
  var old = BRAND_TREE["닥터아망"];
  var merged = {};
  for (var k in old) {
    if (k === "단순변심 교환") {
      merged["단순변심 교환/반품"] = {
        __content: "dramang_simplemerge",
        __sections: [
          {label:"🧭 상담 플로우", anchor:"secFlow"},
          {label:"1. 교환/반품 의사 확인", anchor:"sec1"},
          {label:"2. 전체/부분 방식 안내", anchor:"sec2"},
          {label:"3. 교환/반품 배송비 안내", anchor:"sec3"},
          {label:"4. 포장 및 회수 안내", anchor:"sec4"},
          {label:"5. 교환/반품 안내", anchor:"step5"}
        ]
      };
    } else if (k === "단순변심 반품") {
      // skip: 위 '단순변심 교환/반품'으로 병합됨
    } else {
      merged[k] = old[k];
    }
  }
  BRAND_TREE["닥터아망"] = merged;
})();









/* 100% 환불 이벤트 미대상 브랜드: 카테고리 삭제 */
(function(){["얼라인랩","빌바","12 o'clock","닥터맨즈","마넬"].forEach(function(b){ if(BRAND_TREE[b]) delete BRAND_TREE[b]["100%환불이벤트"]; });})();


/* 검색 인덱스 (데모: 슬룸 단순변심 반품 + 공통) */
let SEARCH_INDEX=[], CID_RAIL={};
function stripText(html){return String(html).replace(/<[^>]+>/g," ").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/\s+/g," ").trim();}
function buildSearchIndex(){
  SEARCH_INDEX=[]; CID_RAIL={}; var seen={};
  var _tmp=document.createElement("div");
  function indexContent(cid, fullPath, rail){
    CID_RAIL[cid]=rail;
    if(seen[cid]||!CONTENT[cid]) return; seen[cid]=1;
    _tmp.innerHTML=CONTENT[cid];
    var cards=_tmp.querySelectorAll(".macro, .subcard");
    var idxMap=new Map(); cards.forEach(function(el,i){idxMap.set(el,i);});
    var nodes=_tmp.querySelectorAll(".sec-title, .h1lvl, .h2lvl, .typ, .grp-h, .macro, .subcard");
    var lastHead="";
    nodes.forEach(function(el){
      if(el.classList.contains("macro")||el.classList.contains("subcard")){
        var nm=el.querySelector(".mname, .sc-label"); var name=nm?nm.textContent.trim():"";
        var bd=el.querySelector(".macro-body, .subcard-body"); var body=bd?bd.textContent.trim():"";
        SEARCH_INDEX.push({cid:cid, card:idxMap.get(el), path:fullPath+(lastHead?" › "+lastHead:""), name:name, text:(name+" "+body).trim()});
      } else {
        lastHead=el.textContent.replace(/\s+/g," ").trim();
      }
    });
    var clone=_tmp.cloneNode(true);
    clone.querySelectorAll(".macro, .subcard").forEach(function(e){e.remove();});
    var rest=stripText(clone.innerHTML);
    if(rest) SEARCH_INDEX.push({cid:cid, card:-1, path:fullPath, name:"", text:rest});
  }
  function walk(obj,prefix,rail,railTitle){
    for(var key in obj){ var val=obj[key]; if(!val||typeof val!=="object")continue;
      var path=prefix?prefix+" › "+key:key;
      if(val.__content){ indexContent(val.__content, railTitle+" › "+path, rail); }
      var ck=Object.keys(val).filter(function(k){return k.indexOf("__")!==0;});
      if(ck.length) walk(val,path,rail,railTitle);
    }
  }
  walk(COMMON_TREE,"","home","채팅");
  walk(BRAND_TREE,"","home","채팅");
  if(typeof CALL_TREE!=="undefined") walk(CALL_TREE,"","call","유선");
  if(typeof CALL_BRAND_TREE!=="undefined") walk(CALL_BRAND_TREE,"","call","유선");
  if(typeof BOARD_TREE!=="undefined") walk(BOARD_TREE,"","board","게시판");
}

let curRail="dash";
let CUR_CID="";

/* 하이라이트 / 경로표시 (esc는 js/core/helpers.js에서 최우선 정의됨) */
function hl(t,q){const i=t.toLowerCase().indexOf(q.toLowerCase());if(!q||i<0)return esc(t);return esc(t.slice(0,i))+"<mark>"+esc(t.slice(i,i+q.length))+"</mark>"+esc(t.slice(i+q.length));}
function pathHtml(p){const a=p.split(" › ");return `<b>${esc(a[0])}</b>`+a.slice(1).map(x=>" › "+esc(x)).join("");}

/* 트리 렌더 (재귀) */
function buildTree(obj, prefix){
  let html="";
  for(const key in obj){
    const val=obj[key];
    const path=prefix?prefix+" › "+key:key;
    const hasContent=("__content" in val);
    const sections=val.__sections;
    const childKeys=Object.keys(val).filter(k=>!k.startsWith("__"));
    if(hasContent && sections && sections.length){
      // 문의유형 페이지 + 섹션(소제목) 하위 목록 · sub 항목은 부모 아래 접기
      const cid=val.__content; let secHtml="", si=0;
      while(si<sections.length){
        const sMk=sections[si];
        const attrs=`data-content="${cid}" data-anchor="${sMk.anchor}" data-path="${path} › ${sMk.label}"`;
        if(sMk.group){ secHtml+=`<div class="leaf leaf-secgrp" ${attrs} onclick="pickLeaf(this)">${sMk.label}</div>`; si++; }
        else if(!sMk.sub){
          let sj=si+1; const kids=[];
          while(sj<sections.length && sections[sj].sub){ kids.push(sections[sj]); sj++; }
          if(kids.length){
            const kidHtml=kids.map(k=>`<div class="leaf leaf-sub" data-content="${cid}" data-anchor="${k.anchor}" data-path="${path} › ${k.label}" onclick="pickLeaf(this)">${k.label}</div>`).join("");
            secHtml+=`<div class="sec-parent"><div class="leaf leaf-sec sec-parent-h" ${attrs} onclick="toggleSecParent(this)"><span class="sec-caret">▸</span>${sMk.label}</div><div class="sec-children">${kidHtml}</div></div>`;
            si=sj;
          }else{ secHtml+=`<div class="leaf leaf-sec" ${attrs} onclick="pickLeaf(this)">${sMk.label}</div>`; si++; }
        }
        else{ secHtml+=`<div class="leaf leaf-sub" ${attrs} onclick="pickLeaf(this)">${sMk.label}</div>`; si++; }
      }
      html+=`<div class="node"><div class="node-toggle" data-content="${cid}" data-path="${path}" onclick="nodeOpenContent(this)"><span class="arrow">▶</span>${key}</div><div class="node-children">${secHtml}</div></div>`;
    }else if(childKeys.length){
      html+=`<div class="node"><div class="node-toggle" onclick="toggleNode(this)"><span class="arrow">▶</span>${key}</div><div class="node-children">${buildTree(val,path)}</div></div>`;
    }else{
      const cid=hasContent?val.__content:"";
      html+=`<div class="leaf" data-content="${cid}" data-path="${path}" onclick="pickLeaf(this)"><span class="dot"></span>${key}</div>`;
    }
  }
  return html;
}

function renderTree(){
  const cfg=RAIL[curRail];
  const _t=document.getElementById("sbTitle"); if(_t)_t.textContent=cfg.title;
  const _d=document.getElementById("sbDesc"); if(_d)_d.textContent=cfg.desc;
  const tree=document.getElementById("tree");
  if(cfg.type==="dash"){ tree.innerHTML=""; setCrumb("홈"); render(DASH_HOME); return; }
  if(cfg.type==="bm"){ renderBookmarks(); return; }
  if(cfg.type==="brand"){
    tree.innerHTML=`<div class="group-label">공통</div>`
      +buildTree(COMMON_TREE,"")
      +`<div class="tree-divider"></div>`
      +`<div class="group-label">브랜드</div>`
      +buildTree(BRAND_TREE,"");
  }else if(curRail==="call"){
    tree.innerHTML=`<div class="group-label">공통</div>`
      +buildTree(CALL_TREE,"")
      +`<div class="tree-divider"></div>`
      +`<div class="group-label">브랜드</div>`
      +buildTree(CALL_BRAND_TREE,"");
  }else if(cfg.type==="tree"){
    tree.innerHTML=buildTree(curRail==="board"?BOARD_TREE:CALL_TREE,"");
    tree.querySelectorAll(":scope > .node").forEach(n=>n.classList.add("open"));
  }else{
    tree.innerHTML=cfg.items.map((it,i)=>
      `<div class="leaf ${i===0?'active':''}" data-key="${it.key}" onclick="pickList(this,'${it.key}','${it.label}')"><span class="dot"></span>${it.label}</div>`).join("");
  }
}

function closeSiblings(node){var pr=node.parentElement; if(!pr)return; for(var i=0;i<pr.children.length;i++){var ch=pr.children[i]; if(ch!==node&&ch.classList&&ch.classList.contains("node")) ch.classList.remove("open");}}
function toggleNode(el){var node=el.parentElement; var willOpen=!node.classList.contains("open"); if(willOpen) closeSiblings(node); node.classList.toggle("open");}
function toggleSecParent(el){
  const parent=el.closest(".sec-parent"); if(!parent) return;
  const willOpen=!parent.classList.contains("open");
  pickLeaf(el);
  if(willOpen){ parent.parentElement.querySelectorAll(".sec-parent.open").forEach(x=>{ if(x!==parent) x.classList.remove("open"); }); }
  parent.classList.toggle("open");
}

/* 문의유형 라벨 클릭 = 펼치기 + 페이지 로드(맨 위) */
function nodeOpenContent(el){
  const node=el.parentElement;
  const willOpen=!node.classList.contains("open");
  if(willOpen) closeSiblings(node);
  node.classList.toggle("open");
  if(node.classList.contains("open")){
    CUR_CID=el.dataset.content||"";
    document.querySelectorAll(".leaf").forEach(l=>l.classList.remove("active"));
    setCrumb(`${RAIL[curRail].title} › ${el.dataset.path}`);
    render(CONTENT[el.dataset.content] || emptyState(el.dataset.path));
    const c=document.querySelector(".content"); if(c) c.scrollTop=0;
    commitView();
  }
}

function pickLeaf(el){
  CUR_CID=el.dataset.content||"";
  document.querySelectorAll(".leaf").forEach(l=>l.classList.remove("active"));
  el.classList.add("active");
  setCrumb(`${RAIL[curRail].title} › ${el.dataset.path}`);
  render(CONTENT[el.dataset.content] || emptyState(el.dataset.path));
  const a=el.dataset.anchor;
  if(a){ const t=document.getElementById(a); if(t) t.scrollIntoView({behavior:"smooth",block:"start"}); }
  else { const c=document.querySelector(".content"); if(c) c.scrollTop=0; }
  commitView();
}
function pickList(el,key,label){
  CUR_CID=key;
  document.querySelectorAll(".leaf").forEach(l=>l.classList.remove("active"));
  el.classList.add("active");
  setCrumb(`${RAIL[curRail].title} › ${label}`);
  render(CONTENT[key] || emptyState(label));
}

/* 트리에서 특정 콘텐츠로 이동 (조상 토글 열기) */
function openTo(cid){
  CUR_CID=cid;
  const nt=document.querySelector(`.node-toggle[data-content="${cid}"]`);
  if(nt){
    let p=nt.parentElement;
    while(p){ if(p.classList&&p.classList.contains("node")) p.classList.add("open"); p=p.parentElement; }
    document.querySelectorAll(".leaf").forEach(l=>l.classList.remove("active"));
    setCrumb(`${RAIL[curRail].title} › ${nt.dataset.path}`);
    render(CONTENT[cid] || emptyState(nt.dataset.path));
    const c=document.querySelector(".content"); if(c) c.scrollTop=0;
    nt.scrollIntoView({block:"nearest"});
    return;
  }
  const leaf=document.querySelector(`.leaf[data-content="${cid}"]`);
  if(!leaf){render(emptyState(""));return;}
  let p=leaf.parentElement;
  while(p){ if(p.classList&&p.classList.contains("node")) p.classList.add("open"); p=p.parentElement; }
  pickLeaf(leaf);
  leaf.scrollIntoView({block:"nearest"});
}

/* 채팅 탭 진입 시 기본 상태: 슬룸 대분류만 펼치고, 하위(단순변심 반품 등)는 접힌 채로 둔다 */
function openHomeDefault(){
  CUR_CID="";
  document.querySelectorAll(".leaf").forEach(l=>l.classList.remove("active"));
  document.querySelectorAll("#tree .node.open").forEach(n=>n.classList.remove("open"));
  setCrumb("채팅 › 개요");
  render(CHAT_HOME);
  const c=document.querySelector(".content"); if(c) c.scrollTop=0;
}

/* 유선 탭 진입 시 기본 상태: 사이드바 토글은 전부 접고, 첫 화면에는 "유선 표준 응대" 본문을 바로 띄운다 */
function openCallDefault(){
  CUR_CID="";
  document.querySelectorAll(".leaf").forEach(l=>l.classList.remove("active"));
  document.querySelectorAll("#tree .node.open").forEach(n=>n.classList.remove("open"));
  setCrumb("유선 › 유선 표준 응대");
  render(CONTENT["call_all"]);
  const c=document.querySelector(".content"); if(c) c.scrollTop=0;
}


/* 검색 결과 화면 */
function renderSearch(query){
  const q=query.trim(); if(!q){restoreView();return;}
  const ql=q.toLowerCase();
  const all=SEARCH_INDEX.filter(r=>r.text.toLowerCase().includes(ql)||r.path.toLowerCase().includes(ql));
  const hits=all.slice(0,60);
  let html=`<div class="sr-title">검색 결과 <span>${all.length}건</span></div>
    <div class="sr-sub">"${esc(q)}" · 브랜드·채널·유형·템플릿 전체 검색`+(all.length>60?` (상위 60건 표시)`:``)+`</div>`;
  if(!hits.length){
    html+=`<div class="sr-none">🔍<br><br>"${esc(q)}"에 대한 결과가 없습니다.</div>`;
  }else{
    html+=hits.map(r=>{
      const t=r.text, li=t.toLowerCase().indexOf(ql);
      let snip;
      if(li<0){ snip=t.slice(0,90); }
      else { const st=Math.max(0,li-30); snip=(st>0?"… ":"")+t.slice(st,li+q.length+60)+" …"; }
      return `<div class="sr-item" onclick="goResult('${r.cid}',${(typeof r.card==="number")?r.card:-1})">
      <div class="sr-path">${pathHtml(r.path)}${r.name?(" › <b>"+r.name.replace(/</g,"&lt;")+"</b>"):""}</div>
      <div class="sr-snip">${hl(snip,q)}</div>
    </div>`;}).join("");
  }
  render(html);
}
function goResult(cid, card){
  document.getElementById("searchInput").value="";
  const rail=CID_RAIL[cid]||"home";
  document.querySelectorAll(".rail-btn").forEach(x=>x.classList.remove("active"));
  const btn=document.querySelector(`.rail-btn[data-rail="${rail}"]`); if(btn)btn.classList.add("active");
  curRail=rail; renderTree(); openTo(cid); commitView();
  if(typeof card==="number" && card>=0){
    setTimeout(function(){
      var pg=document.getElementById("page"); if(!pg) return;
      var els=pg.querySelectorAll(".macro, .subcard"); var el=els[card];
      if(el){ el.scrollIntoView({behavior:"smooth", block:"center"}); el.classList.add("search-flash"); setTimeout(function(){el.classList.remove("search-flash");},2200); }
    },60);
  }
}

function goRail(r){ const b=document.querySelector(`.rail-btn[data-rail="${r}"]`); if(b) b.click(); }

/* 채팅 개요 → 공통/브랜드 바로가기 */
function jumpCommon(){
  function go(){ var nt=document.querySelector('#tree .node-toggle[data-content]'); if(nt) nt.click(); }
  if(curRail!=="home"){ goRail("home"); setTimeout(go,40); } else go();
}
function jumpBrand(name){
  function go(){
    var nodes=document.querySelectorAll('#tree > .node, #tree .node');
    for(var i=0;i<nodes.length;i++){
      var tog=nodes[i].querySelector(':scope > .node-toggle');
      if(!tog) continue;
      if(tog.textContent.replace(/\s+/g,' ').replace(/^▶\s*/,'').trim()===name){
        if(!nodes[i].classList.contains('open')){ closeSiblings(nodes[i]); nodes[i].classList.add('open'); }
        var first=nodes[i].querySelector('.node-children .node-toggle[data-content]');
        if(first){ first.click(); }
        tog.scrollIntoView({block:'nearest'});
        return;
      }
    }
  }
  if(curRail!=="home"){ goRail("home"); setTimeout(go,40); } else go();
}

/* ===================== 북마크(북마크) ===================== */
function loadBM(kind){ try{ return JSON.parse(localStorage.getItem("olit_bm_"+kind))||[]; }catch(e){ return []; } }
function saveBM(kind,arr){ try{ localStorage.setItem("olit_bm_"+kind,JSON.stringify(arr)); }catch(e){} }
function isPageBM(cid){ return loadBM("pages").some(x=>x.cid===cid); }
function isMentBM(id){ return loadBM("ments").some(x=>x.id===id); }
function hashStr(s){ let h=0; for(let i=0;i<s.length;i++){ h=(h*31+s.charCodeAt(i))|0; } return (h>>>0).toString(36); }

/* --- 페이지 북마크 --- */
function currentPageKey(){ if(!CUR_CID) return null; if(curRail==="dash"||curRail==="bm") return null; return CUR_CID; }
function updatePageStar(){
  const btn=document.getElementById("pageStar"); if(!btn) return;
  const cid=currentPageKey();
  if(!cid){ btn.style.display="none"; return; }
  const path=(document.getElementById("crumb").textContent||"").trim();
  const on=isPageBM(cid);
  btn.style.display="inline-flex";
  btn.classList.toggle("on",on);
  btn.textContent=(on?"★":"☆")+" 북마크";
  btn.dataset.cid=cid; btn.dataset.path=path;
}
function togglePageBookmark(){
  const btn=document.getElementById("pageStar"); const cid=btn.dataset.cid; if(!cid) return;
  let arr=loadBM("pages"); const i=arr.findIndex(x=>x.cid===cid);
  if(i>=0) arr.splice(i,1); else arr.push({cid:cid,path:btn.dataset.path||cid});
  saveBM("pages",arr); updatePageStar();
  if(curRail==="bm") renderBookmarks();
}

/* --- 멘트 북마크 (복사버튼 옆 ☆ 주입) --- */
function mentInfo(card){
  const bodyEl=card.querySelector(".macro-body,.subcard-body,.col-body-plain,.star-body,.bn-body,.cmp-ment-body");
  if(!bodyEl) return null;
  const text=(bodyEl.innerText||"").trim(); if(!text) return null;
  const tagEl=card.querySelector(".tag,.ct-tag");
  const labelEl=card.querySelector(".mname,.sc-label,.star-h b,.bn-h b,.col-h span");
  let label=labelEl?labelEl.textContent.trim():"";
  if(!label && card.classList.contains("cmp-ment")){ const tr=card.closest("tr"); const rl=tr&&tr.querySelector(".cmp-row-label"); label=rl?rl.textContent.trim():"표준 멘트"; }
  const tag=tagEl?tagEl.textContent.replace(/^#/,"").trim():"";
  const id=tag?("t:"+tag):("h:"+hashStr((label||"")+"|"+text));
  const path=(document.getElementById("crumb").textContent||"").trim();
  return {id:id, label:label||"(멘트)", text:text, path:path};
}
function toggleMentBM(info){ let a=loadBM("ments"); const i=a.findIndex(x=>x.id===info.id); if(i>=0)a.splice(i,1); else a.push(info); saveBM("ments",a); }
function decorateMentBookmarks(){
  const root=document.getElementById("page"); if(!root) return;
  if(curRail==="bm") return; /* 북마크 화면 내 카드에는 별 미주입 (중복 방지) */
  root.querySelectorAll(".copy-btn").forEach(btn=>{
    const nx=btn.nextElementSibling;
    if(nx && nx.classList && nx.classList.contains("bm-star")) return;
    const card=btn.closest(".macro,.subcard,.col-card,.cmp-ment,.cb-tpl");
    if(!card) return;
    const info=mentInfo(card); if(!info) return;
    const star=document.createElement("button");
    star.type="button"; star.className="bm-star"+(isMentBM(info.id)?" on":"");
    star.title="멘트 북마크"; star.textContent=isMentBM(info.id)?"★":"☆";
    star.addEventListener("click",ev=>{
      ev.stopPropagation(); toggleMentBM(info);
      const on=isMentBM(info.id); star.classList.toggle("on",on); star.textContent=on?"★":"☆";
      if(curRail==="bm") renderBookmarks();
    });
    btn.parentNode.insertBefore(star,btn.nextSibling);
  });
}

/* --- 북마크 화면 --- */
function openBM(cid){
  const rail=CID_RAIL[cid]||"home";
  document.querySelectorAll(".rail-btn").forEach(x=>x.classList.remove("active"));
  const rb=document.querySelector(`.rail-btn[data-rail="${rail}"]`); if(rb)rb.classList.add("active");
  curRail=rail; renderTree(); openTo(cid); commitView();
}
function delBMPage(cid){ saveBM("pages",loadBM("pages").filter(x=>x.cid!==cid)); renderBookmarks(); updatePageStar(); }
function delBMMent(id){ saveBM("ments",loadBM("ments").filter(x=>x.id!==id)); renderBookmarks(); }
function bmMentCard(m){
  return `<div class="subcard"><div class="subcard-h"><span class="sc-label">${esc(m.label)}</span>`
    + `<span style="font-size:11px;color:var(--ink-soft);margin-left:8px">${esc(m.path||"")}</span>`
    + `<span class="spacer"></span>`
    + `<button class="bm-del" onclick="delBMMent('${esc(m.id)}')" title="삭제">✕</button>`
    + `<button class="copy-btn" onclick="copyMacro(this)" title="복사">📋</button></div>`
    + `<div class="subcard-body" style="white-space:pre-line">${esc(m.text)}</div></div>`;
}
function renderBookmarks(){
  const tree=document.getElementById("tree");
  if(tree) tree.innerHTML=`<div class="group-label">북마크</div>`
    +`<div style="padding:8px 14px;font-size:11px;color:var(--ink-soft);line-height:1.6">좌측 아이콘(💬 📞 📝)으로 이동하세요.</div>`;
  const pages=loadBM("pages"), ments=loadBM("ments");
  let html=`<h1>🔖 북마크</h1><div class="sub">내 브라우저에 저장된 북마크 · 각자 계정/PC별로 관리됩니다</div>`;
  html+=`<div class="grp-h" style="margin-top:18px">⭐ 북마크 페이지 <span style="font-weight:500;color:var(--ink-soft);font-size:12px">(${pages.length})</span></div>`;
  html+= pages.length ? `<div class="grid2" style="align-items:start;margin-bottom:0">`+pages.map(p=>
    `<div class="bm-page" style="margin-bottom:0" onclick="openBM('${esc(p.cid)}')"><span class="bm-star on">★</span><span>${esc(p.path||p.cid)}</span>`
    +`<button class="bm-del" onclick="event.stopPropagation();delBMPage('${esc(p.cid)}')" title="삭제">✕</button></div>`).join("")+`</div>`
    : `<div class="bm-empty">아직 없습니다. 페이지 우측 상단의 <b>☆ 북마크</b> 버튼으로 추가하세요.</div>`;
  html+=`<div class="grp-h" style="margin-top:24px">🔖 북마크 멘트 <span style="font-weight:500;color:var(--ink-soft);font-size:12px">(${ments.length})</span></div>`;
  html+= ments.length ? `<div class="grid2" style="align-items:start">`+ments.map(bmMentCard).join("")+`</div>`
    : `<div class="bm-empty">아직 없습니다. 각 카드 복사버튼(📋) 옆 <b style="color:#e0a800">☆</b> 를 눌러 추가하세요.</div>`;
  render(html);
  setCrumb("북마크");
}
function emptyState(path){
  return `<div class="empty"><div class="big">🗂️</div>
    <b>${esc(path||"")}</b><br><br>
    이 항목은 아직 등록 전입니다.<br>
    <span style="font-size:12px;">[공통] IB/OB/CS 엑셀을 주시면 채워 넣겠습니다.</span></div>`;
}
function setCrumb(t){
  const parts=t.split(" › ");
  document.getElementById("crumb").innerHTML=`<b>${parts[0]}</b>`+parts.slice(1).map(p=>" › "+p).join("");
}
function linkifyPage(){
  var page=document.getElementById("page"); if(!page||!document.createTreeWalker) return;
  var walker=document.createTreeWalker(page, NodeFilter.SHOW_TEXT, null), targets=[], n;
  while((n=walker.nextNode())){
    if(!n.nodeValue || n.nodeValue.indexOf('http')<0) continue;
    var pe=n.parentNode; if(pe && pe.closest && pe.closest('a')) continue;
    if(/https?:\/\//.test(n.nodeValue)) targets.push(n);
  }
  targets.forEach(function(node){
    var parts=node.nodeValue.split(/(https?:\/\/[^\s]+)/g);
    if(parts.length<2) return;
    var frag=document.createDocumentFragment();
    parts.forEach(function(p){
      if(/^https?:\/\//.test(p)){
        var url=p, tail=''; var mt=url.match(/[)\]\.,!?]+$/); if(mt){tail=mt[0]; url=url.slice(0,url.length-tail.length);}
        var a=document.createElement('a'); a.href=url; a.target="_blank"; a.rel="noopener"; a.className="auto-link"; a.textContent=url;
        frag.appendChild(a); if(tail) frag.appendChild(document.createTextNode(tail));
      } else if(p){ frag.appendChild(document.createTextNode(p)); }
    });
    node.parentNode.replaceChild(frag,node);
  });
}
function render(html){document.getElementById("page").innerHTML=html; try{decorateMentBookmarks();}catch(e){} try{updatePageStar();}catch(e){} try{linkifyPage();}catch(e){}}

/* 네비게이션 히스토리 (뒤로가기) */
let navHist=[], curView=null;
function curSnap(){return {rail:curRail,
  tree:document.getElementById("tree").innerHTML,
  page:document.getElementById("page").innerHTML,
  crumb:document.getElementById("crumb").innerHTML};}
function commitView(){
  const sn=curSnap();
  if(curView){
    if(curView.rail===sn.rail && curView.crumb===sn.crumb){ curView=sn; updateBackBtn(); return; }
    navHist.push(curView); if(navHist.length>60) navHist.shift();
  }
  curView=sn; updateBackBtn();
}
function goBack(){
  if(!navHist.length) return;
  const sn=navHist.pop();
  curRail=sn.rail;
  document.querySelectorAll(".rail-btn").forEach(x=>x.classList.remove("active"));
  const rb=document.querySelector(`.rail-btn[data-rail="${sn.rail}"]`); if(rb) rb.classList.add("active");
  document.getElementById("tree").innerHTML=sn.tree;
  document.getElementById("page").innerHTML=sn.page;
  document.getElementById("crumb").innerHTML=sn.crumb;
  const c=document.querySelector(".content"); if(c) c.scrollTop=0;
  curView=sn; updateBackBtn();
}
function updateBackBtn(){const bb=document.getElementById("backBtn"); if(bb) bb.style.visibility=navHist.length?"visible":"hidden";}

/* 페이지 내 앵커로 부드럽게 스크롤 이동 (같은 콘텐츠 내 섹션 간 상호 참조 링크용) */
function jumpTo(id){
  const t=document.getElementById(id);
  if(t) t.scrollIntoView({behavior:"smooth",block:"start"});
  return false;
}

/* 다른 콘텐츠 블록(유선 표준 응대)의 앵커로 크로스 이동 — 콜백 티켓 등 다른 화면에서 참조할 때 사용.
   goRail("call")이 항상 openCallDefault()를 거쳐 CALL_ALL을 새로 렌더하므로, 렌더 완료 후 지연 스크롤로 앵커 이동 */
function jumpToOB(){
  goRail("call");
  setTimeout(function(){ jumpTo("c_ob"); }, 60);
  return false;
}

/* 💰 단종 환급금 자동 계산기 (구입가/사용개월 입력 → 감가상각비·잔여금·최종 환급금 자동 산출) */
function calcRefund(el){
  const wrap = el.closest(".refund-calc");
  if(!wrap) return;
  const priceEl = wrap.querySelector('[data-role="price"]');
  const monthEl = wrap.querySelector('[data-role="months"]');
  const errEl = wrap.querySelector(".refund-calc-err");
  let price = parseInt((priceEl.value||"").replace(/[^0-9]/g,""), 10);
  let months = parseInt((monthEl.value||"").replace(/[^0-9]/g,""), 10);
  if(isNaN(price) || price<0) price = 0;
  if(isNaN(months) || months<0) months = 0;
  if(months > 60){
    months = 60;
    errEl.textContent = "※ 사용개월은 내용연수(60개월)까지만 반영됩니다.";
    errEl.style.display = "block";
  } else {
    errEl.style.display = "none";
  }
  const dep = Math.round((months/60) * price);
  const rem = Math.max(price - dep, 0);
  const add = Math.round(price * 0.1);
  const total = rem + add;
  wrap.querySelector('[data-out="dep"]').textContent = dep.toLocaleString()+"원";
  wrap.querySelector('[data-out="rem"]').textContent = rem.toLocaleString()+"원";
  wrap.querySelector('[data-out="add"]').textContent = add.toLocaleString()+"원";
  wrap.querySelector('[data-out="final"]').textContent = total.toLocaleString()+"원";
}

/* 복사 버튼 */
function copyMacro(btn){
  const box=btn.closest(".macro,.subcard,.col-card,.star-note,.blue-note,.cmp-ment,.cb-tpl");
  const text=box.querySelector(".macro-body,.subcard-body,.col-body-plain,.star-body,.bn-body,.cmp-ment-body").innerText;
  navigator.clipboard.writeText(text).then(()=>{
    const orig=btn.innerHTML;
    btn.innerHTML="✓";btn.classList.add("done");
    setTimeout(()=>{btn.innerHTML=orig;btn.classList.remove("done");},1400);
  });
}

/* 콜백 티켓 알리고 템플릿 토글 */
function cbToggleTpl(row){
  const wrap=row.closest(".cb-tpl");
  const panel=wrap.querySelector(".cb-tpl-panel");
  const caret=row.querySelector(".cb-tpl-caret");
  const willOpen=!panel.classList.contains("open");
  panel.classList.toggle("open",willOpen);
  wrap.classList.toggle("open",willOpen);
  if(caret) caret.textContent=willOpen?"접기 ▲":"펼치기 ▾";
}

/* 레일 전환 */
document.querySelectorAll(".rail-btn").forEach(b=>{
  b.addEventListener("click",()=>{
    document.querySelectorAll(".rail-btn").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    curRail=b.dataset.rail;
    renderTree();
    // 첫 항목 자동 선택
    const first=document.querySelector(".tree .leaf");
    if(curRail==="dash"){ commitView(); }
    else if(curRail==="bm"){ commitView(); }
    else if(curRail==="home"){ openHomeDefault(); commitView(); }
    else if(curRail==="call"){ openCallDefault(); commitView(); }
    else if(first){ first.click(); }
  });
});

/* 검색 → 결과 화면 (② 레퍼런스 방식) */
document.getElementById("searchInput").addEventListener("input",e=>{
  const q=e.target.value;
  if(q.trim()) renderSearch(q);
  else restoreView();
});
function restoreView(){
  const active=document.querySelector(".leaf.active");
  if(active) active.click();
  else if(curRail==="call") openCallDefault();
  else openHomeDefault();
}

/* 사이드바 너비 드래그 조절 */
(function(){
  const sb=document.querySelector(".sidebar");
  const rz=document.getElementById("sidebarResizer");
  if(!sb||!rz) return;
  const MIN=160,MAX=520;
  try{ const w=parseInt(localStorage.getItem("olit_sidebar_w"),10);
       if(w>=MIN&&w<=MAX) sb.style.width=w+"px"; }catch(e){}
  let dragging=false;
  rz.addEventListener("mousedown",e=>{
    dragging=true; document.body.classList.add("col-resizing"); rz.classList.add("dragging"); e.preventDefault();
  });
  document.addEventListener("mousemove",e=>{
    if(!dragging) return;
    let w=e.clientX-sb.getBoundingClientRect().left;
    if(w<MIN)w=MIN; if(w>MAX)w=MAX;
    sb.style.width=w+"px";
  });
  document.addEventListener("mouseup",()=>{
    if(!dragging) return;
    dragging=false; document.body.classList.remove("col-resizing"); rz.classList.remove("dragging");
    try{ localStorage.setItem("olit_sidebar_w", parseInt(sb.style.width,10)); }catch(e){}
  });
})();

/* 스크롤 위치에 맞춰 트리 소제목 색인 (스크롤스파이) */
function updateScrollSpy(){
  if(!CUR_CID) return;
  const c=document.querySelector(".content"); if(!c) return;
  const leaves=[];
  document.querySelectorAll(".leaf[data-anchor]").forEach(l=>{ if(l.dataset.content===CUR_CID) leaves.push(l); });
  if(!leaves.length) return;
  const cTop=c.getBoundingClientRect().top;
  let best=null,bestPos=-1e9;
  leaves.forEach(l=>{
    const el=document.getElementById(l.dataset.anchor); if(!el) return;
    const rel=el.getBoundingClientRect().top-cTop;
    if(rel<=110 && rel>bestPos){ bestPos=rel; best=l; }
  });
  if(!best) best=leaves[0];
  if(best.classList.contains("active")) return;
  document.querySelectorAll(".leaf.active").forEach(l=>l.classList.remove("active"));
  best.classList.add("active");
  if(best.classList.contains("leaf-sub")){
    const sp=best.closest(".sec-parent");
    if(sp && !sp.classList.contains("open")){
      sp.parentElement.querySelectorAll(".sec-parent.open").forEach(x=>x.classList.remove("open"));
      sp.classList.add("open");
    }
  }
}
(function(){
  const c=document.querySelector(".content"); if(!c) return;
  let ticking=false;
  c.addEventListener("scroll",()=>{
    if(ticking) return; ticking=true;
    requestAnimationFrame(()=>{ updateScrollSpy(); ticking=false; });
  });
})();

/* 로그인 사용자 배지 (Cloudflare Access identity) */
(function(){
  try{
    fetch("/cdn-cgi/access/get-identity",{credentials:"same-origin"})
      .then(r=>r.ok?r.json():null)
      .then(d=>{
        if(!d||!d.email) return;
        const b=document.getElementById("userBadge"); if(!b) return;
        document.getElementById("ubEmail").textContent=d.email;
        b.style.display="flex";
      }).catch(()=>{});
  }catch(e){}
})();

/* 초기 렌더 */
buildSearchIndex();
renderTree();
commitView();






