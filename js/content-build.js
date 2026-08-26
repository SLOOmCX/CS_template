const CONTENT = {
  "simplicare_as":SIMPLICARE_DEFECT,
  "cocodaum_as":COCODAUM_DEFECT,
  "drmans_as":DRMANS_DEFECT,
  "yvening_as":YVENING_DEFECT,
  "marnell_as":MARNELL_DEFECT,
  "dramang_as":DRAMANG_DEFECT,
  "slm_refund":REF_SIMPLE,
  "slm_100refund":REF_100REFUND, "cellology_100refund":CELLOLOGY_100, "dramang_100refund":DRAMANG_100, "yvening_100refund":YVENING_100, "cocodaum_100refund":COCODAUM_100, "simplicare_100refund":SIMPLICARE_100,
  "slm_as":REF_AS,
  "cel_as":REF_CEL,
  "align_as":REF_ALIGN,
  "bilba_as":REF_BILBA,
  "oclock_as":REF_OCLOCK,
  "slm_exchange":REF_EXCHANGE,
  "slm_simplemerge":SLM_MERGE_TEMPLATE,
  "slm_side":REF_SIDE, "simplicare_side":SIMPLICARE_SIDE, "alignlab_side":ALIGNLAB_SIDE, "bilba_side":BILBA_SIDE, "cellology_side":CELLOLOGY_SIDE, "cocodaum_side":COCODAUM_SIDE, "oclock_side":OCLOCK_SIDE, "drmans_side":DRMANS_SIDE, "yvening_side":YVENING_SIDE, "marnell_side":MARNELL_SIDE, "dramang_side":DRAMANG_SIDE,
  "cmn_all":COMMON_ALL, "ib":COMMON_IB, "ob":COMMON_OB, "call":COMMON_CALL_ALL, "board":BOARD_ALL
};

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
  "유선 표준 응대":{__content:"call", __sections:[
    {group:true, label:"📋 유선 상담 운영 기준", anchor:"c_ops"},
    {group:true, label:"💡 공통 기본", anchor:"c_basic"},
    {label:"1. 인사말", anchor:"c_basic_1"},
    {label:"2. 사전/사후 대기", anchor:"c_basic_2"},
    {label:"3. 호응 표현", anchor:"c_basic_3"},
    {label:"4. 추가 문의", anchor:"c_basic_4"},
    {label:"🚨 상담 종료 경고", anchor:"c_warn"},
    {group:true, label:"📞 콜백·아웃바운드(O/B)", anchor:"c_ob"},
    {group:true, label:"🔄 주문 변경", anchor:"c_order"},
    {label:"1. 취소 후 배송", anchor:"c_order_1"},
    {label:"2. 배송 정보 변경", anchor:"c_order_2"},
    {group:true, label:"💳 결제 문의", anchor:"c_pay"},
    {group:true, label:"👤 회원 정보", anchor:"c_member"},
    {group:true, label:"📣 마케팅·제휴", anchor:"c_mkt"},
    {group:true, label:"📞 전화 주문", anchor:"c_call"}
  ]}
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
    {sub:true, label:"✨ [허편케V2] 사용법 오인", anchor:"b_ext_3"},
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
    {sub:true, label:"1. 충전/전원 불량", anchor:"t1"},
    {sub:true, label:"2. 작동/제작 불량", anchor:"t2"},
    {label:"B. 사용법 안내 불필요", anchor:"groupB"},
    {sub:true, label:"4. 스크래치/이물질", anchor:"t6"},
    {sub:true, label:"5. 구성품 누락", anchor:"t5"},
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
    {sub:true, label:"1. 불량 증상 확인", anchor:"cos_symptom"},
    {sub:true, label:"2. 불량 접수", anchor:"cos_intake"},
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
    {sub:true, label:"1. 충전/전원/작동", anchor:"t1"},
    {sub:true, label:"2. 진동/EMS 강도", anchor:"t3"},
    {label:"B. 사용법 안내 불필요", anchor:"groupB"},
    {sub:true, label:"3. 소음 강도 & 쿠팡/네이버 자동수거", anchor:"tsound"},
    {sub:true, label:"4. 구성품 누락", anchor:"t5"},
    {sub:true, label:"5. 이염/오염/초도파손/스크래치", anchor:"t6"},
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
    {sub:true, label:"1. 전원/작동", anchor:"t1"},
    {label:"B. 사용법 안내 불필요", anchor:"groupB"},
    {sub:true, label:"2. 소음 강도 & 쿠팡/네이버 자동수거", anchor:"t3"},
    {sub:true, label:"3. 구성품 누락", anchor:"t5"},
    {sub:true, label:"4. 이염/오염/초도파손", anchor:"t6"},
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
    {sub:true, label:"1. 충전/전원/작동", anchor:"t1"},
    {label:"B. 사용법 안내 불필요", anchor:"groupB"},
    {sub:true, label:"2. 소음·온열 강도 & 쿠팡/네이버 자동수거", anchor:"t3"},
    {sub:true, label:"3. 구성품 누락", anchor:"t5"},
    {sub:true, label:"4. 이염/오염/초도파손/스크래치", anchor:"t6"},
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


/* === 슬룸 외 브랜드 단순변심 반품/교환 자동 반영 === */
(function(){
  var RS=[{label:"💡 기준 및 조건",anchor:"secGuide"},{label:"1. 7일 경과 여부 및 사유 확인",anchor:"sec1"},{label:"2. 반품 배송비 안내",anchor:"sec2"},{label:"3. 포장 및 회수 안내",anchor:"sec3"},{label:"4. 결제수단별 환불 안내",anchor:"sec4"}];
  var XS=[{label:"💡 기준 및 조건",anchor:"secGuideX"},{label:"1. 교환 방식 안내",anchor:"sec1"},{label:"2. 교환 배송비 안내",anchor:"sec2"},{label:"3. 포장 및 회수 안내",anchor:"sec3"},{label:"4. 검수 및 재출고 안내",anchor:"sec4"}];
  var ACC="075-09598004-017 (\uc608\uae08\uc8fc: \uc62c\ub9bf\ub9ac\ud14c\uc77c)", NOTE="\uc804\uc790\uc81c\ud488\uc740 \uc5b4\ub311\ud130 \uc5f0\uacb0\u00b7\uc791\ub3d9\uc744 \ud55c \ubc88\uc774\ub77c\ub3c4 \ud588\ub2e4\uba74 '\uc0ac\uc6a9 \uc81c\ud488'\uc73c\ub85c \uac04\uc8fc\ub418\uc5b4 \ub2e8\uc21c\ubcc0\uc2ec \ubc18\ud488 \ubd88\uac00.", EX="(\uc608: \ud5c8\ub9ac\ud3b8\ud55c\ucf00\uc5b4 + \ubaa9\ud3b8\ud55c\ucf00\uc5b4 \uad6c\ub9e4 \u2192 \ud5c8\ub9ac\ud3b8\ud55c\ucf00\uc5b4\ub9cc \uc0ac\uc6a9 \uc2dc, \ubaa9\ud3b8\ud55c\ucf00\uc5b4\ub9cc \ubd80\ubd84 \ubc18\ud488)";
  function mk(tpl,b){
    var t=tpl.split(ACC).join(b.acct+" (예금주: "+b.holder+")");
    t=t.split(NOTE).join(b.note);
    t=t.split(EX).join("(예: 2개 구매 후 1개만 개봉·"+b.use+" 시, 미개봉 제품만 부분 반품)");
    // 브랜드별 회수 구성품 문구 (슬룸외_회수상세 반영)
    if(b.k==="alignlab") t=t.split("(케이블·설명서 등)").join("(아이크림·패치 등)");
    else if(b.k==="bilba") t=t.split("(케이블·설명서 등)").join("(계량컵·설명서 등)");
    else if(["drmans","yvening","dramang"].indexOf(b.k)>=0){ t=t.split("■ 제품 구성품(케이블·설명서 등)\n").join(""); t=t.split("■ 해당 제품 구성품(케이블·설명서 등)\n").join(""); }
    else if(b.k==="cocodaum"){ t=t.split("■ 제품 구성품(케이블·설명서 등)\n").join(""); t=t.split("■ 해당 제품 구성품(케이블·설명서 등)\n").join(""); t=t.split("■ 제품\n").join("■ 제품 박스 전체 (남은 포·스틱 포함)\n"); t=t.split("■ 미개봉 반품 제품\n").join("■ 반품 제품 박스 전체 (남은 포·스틱 포함)\n"); t=t.split("■ 미개봉 교환 제품\n").join("■ 교환 제품 박스 전체 (남은 포·스틱 포함)\n"); }
    else if(b.k==="simplicare"){ t=t.split("■ 제품 구성품(케이블·설명서 등)\n").join(""); t=t.split("■ 해당 제품 구성품(케이블·설명서 등)\n").join(""); t=t.split("■ 제품\n").join("■ 제품 전체 (남은 내용물 포함)\n"); t=t.split("■ 미개봉 반품 제품\n").join("■ 반품 제품 전체 (남은 내용물 포함)\n"); t=t.split("■ 미개봉 교환 제품\n").join("■ 교환 제품 전체 (남은 내용물 포함)\n"); }
    // 셀올로지·12 o'clock: (케이블·설명서 등) 유지
    if(b.k==="cellology"){ t=t.replace(/(<div class="star-body">[^<]*증정품[^<]*)<\/div><\/div>/g, '$1\n\n📌 디바이스 외 제품(화장품 등)은 구성품(케이블·설명서 등) 문구 제외 안내</div></div>'); }
    // 전자기기 아닌 브랜드(심플리케어·닥터맨즈·와이브닝·마넬·닥터아망): 회수 안내 문구 중 "케이블·설명서" 표현이 부적절하게 남아있던 것 수정 (코코다움은 별도 처리)
    if(["simplicare","drmans","yvening","marnell","dramang"].indexOf(b.k)>=0){
      t=t.split("※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.").join("※ 회수 제품의 본품 패키지 구성품(설명서 등)을 모두 함께 포장해 주세요.");
    }
    // 불량AS 태그: "<b>[불량]</b>" 단독 표기 → "[ 불량 / CJ대한통운 / 브랜드명 ]" 정식 포맷 + 받침 유무에 따른 이라고/라고 (전 브랜드 공통)
    (function(){
      var TAG_BRAND={simplicare:"심플리케어",alignlab:"얼라인랩",bilba:"빌바",cellology:"셀올로지",cocodaum:"코코다움",oclock:"12 o'clock",drmans:"닥터맨즈",yvening:"와이브닝",marnell:"마넬",dramang:"닥터아망"};
      var TAG_ENDING={simplicare:"부탁드립니다",alignlab:"부탁드립니다",bilba:"부탁드립니다",cellology:"부탁드려요",cocodaum:"부탁드려요",oclock:"부탁드려요",drmans:"부탁드립니다",yvening:"부탁드립니다",marnell:"부탁드립니다",dramang:"부탁드립니다"};
      if(TAG_BRAND[b.k]){
        t=t.split("<b>[불량]</b>이라고 기재해 주세요.").join("<b>[ 불량 / CJ대한통운 / "+TAG_BRAND[b.k]+" ]</b> 표기 "+TAG_ENDING[b.k]+".");
      }
    })();
    // 슬룸 외: 채널톡 사전취합 미고도화 → 회수지 질문을 포장·회수 안내 하단에 포함하고 별도 회수지 카드는 제거
    t=t.split("수거가 거부됩니다.</div>").join("수거가 거부됩니다.\n\n🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?</div>");
    t=t.split("수거 거부됩니다.</div>").join("수거 거부됩니다.\n\n🙋‍♀️ 마지막으로, 제품 회수와 배송은 기존 주소지로 접수해 드리면 될까요?</div>");
    t=t.replace(/<div class="subcard"><div class="subcard-h"><span class="sc-label">회수지 확인 필요 시<\/span>[\s\S]*?괜찮을까요\?<\/div><\/div>/, "");
    // 100% 환불 미대상 브랜드: 분기 카드의 100% 행·노트 제거
    if(["alignlab","bilba","oclock","drmans","marnell"].indexOf(b.k)>=0){
      t=t.split('<tr><td class="cond">수령일 7일 이내 · <b>사용</b></td><td class="ar">→</td><td><span class="bdg b-amber">100% 환불 이벤트</span></td></tr>').join('');
      t=t.split('<tr><td class="cond">수령일 7일 경과 · <b>미사용</b></td><td class="ar">→</td><td><span class="bdg b-amber">100% 환불 이벤트</span></td></tr>').join('');
      t=t.split('<div class="branch-note">※ 100% 환불 이벤트는 신청 이력이 없는 경우에만 가능합니다.</div>').join('');
    }
    return t;
  }
  var B=[{"n": "심플리케어", "k": "simplicare", "acct": "078-221425-01-020", "holder": "주식회사 올릿", "use": "섭취", "device": false, "note": "개봉 후 섭취한 제품은 '사용 제품'으로 간주되어 단순변심 반품 불가."}, {"n": "얼라인랩", "k": "alignlab", "acct": "078-221425-01-044", "holder": "주식회사 올릿", "use": "사용", "device": true, "note": "제품을 개봉 후 작동·사용한 경우 '사용 제품'으로 간주되어 단순변심 반품 불가."}, {"n": "빌바", "k": "bilba", "acct": "078-213475-04-028", "holder": "주식회사 올릿리테일", "use": "사용", "device": true, "note": "제품을 개봉 후 작동·사용한 경우 '사용 제품'으로 간주되어 단순변심 반품 불가."}, {"n": "셀올로지", "k": "cellology", "acct": "078-219021-04-021", "holder": "주식회사 더마", "use": "사용", "device": true, "note": "제품을 개봉 후 작동·사용한 경우 '사용 제품'으로 간주되어 단순변심 반품 불가."}, {"n": "코코다움", "k": "cocodaum", "acct": "078-221425-01-037", "holder": "주식회사 올릿", "use": "급여", "device": false, "note": "개봉 후 급여한 제품은 '사용 제품'으로 간주되어 단순변심 반품 불가."}, {"n": "12 o'clock", "k": "oclock", "acct": "075-09598004-017", "holder": "주식회사 올릿리테일", "use": "사용", "device": true, "note": "제품을 개봉 후 작동·사용한 경우 '사용 제품'으로 간주되어 단순변심 반품 불가."}, {"n": "닥터맨즈", "k": "drmans", "acct": "078-213475-04-011", "holder": "주식회사 올릿리테일", "use": "사용", "device": false, "note": "개봉 후 사용한 제품은 '사용 제품'으로 간주되어 단순변심 반품 불가."}, {"n": "와이브닝", "k": "yvening", "acct": "078-213475-04-042", "holder": "주식회사 올릿리테일", "use": "사용", "device": false, "note": "개봉 후 사용한 제품은 '사용 제품'으로 간주되어 단순변심 반품 불가."}, {"n": "마넬", "k": "marnell", "acct": "078-221425-01-012", "holder": "주식회사 올릿", "use": "사용", "device": false, "note": "개봉 후 사용한 제품은 '사용 제품'으로 간주되어 단순변심 반품 불가."}, {"n": "닥터아망", "k": "dramang", "acct": "078-221425-01-051", "holder": "주식회사 올릿", "use": "사용", "device": false, "note": "개봉 후 사용한 제품은 '사용 제품'으로 간주되어 단순변심 반품 불가."}];
  B.forEach(function(b){
    CONTENT[b.k+"_refund"]=mk(REF_SIMPLE,b);
    CONTENT[b.k+"_exchange"]=mk(REF_EXCHANGE,b);
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

/* 슬룸(slm_refund)은 B.forEach(mk()) 대상이 아니라 REF_SIMPLE 원문을 그대로 사용 → "<b>[불량]</b>" 단독 표기 브랜드명 보정 별도 처리 */
;(function(){
  if(CONTENT["slm_refund"]){
    CONTENT["slm_refund"]=CONTENT["slm_refund"].split("<b>[불량]</b>이라고 기재해 주세요.").join("<b>[ 불량 / CJ대한통운 / 슬룸 ]</b> 표기 부탁드립니다.");
  }
})();

/* [F열 반영] 12 o'clock 단순변심 반품/교환 — 톤앤매너 최종본 매칭 (2026-08) */
(function(){
  var EDITS=[
    {id:"oclock_refund", o:"네이버페이 결제는 시스템상 반품 배송비 차감 처리가 어려워, 반품 배송비 6,000원 입금 후 반품 접수가 가능합니다. 🥹\n\n✅ 반품 배송비 : 6,000원\n🏦 기업은행 075-09598004-017 (예금주: 주식회사 올릿리테일)\n\n입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드리겠습니다. 😊", n:"네이버페이 결제는 시스템상 반품 배송비 차감 처리가 어려워, 반품 배송비 6,000원 입금 후 반품 접수가 가능해요. 🥹\n\n✅ 반품 배송비 : 6,000원\n🏦 기업은행 075-09598004-017 (예금주: 주식회사 올릿리테일)\n\n입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드릴게요. 😊"},
    {id:"oclock_refund", o:"반품 배송비 6,000원 제외 후 반품 진행됩니다.", n:"반품 배송비 6,000원 제외 후 반품 진행돼요."},
    {id:"oclock_refund", o:"쿠팡 주문은 시스템상 반품 배송비 차감 처리가 어려워, 반품 배송비 6,000원 입금 후 반품 접수가 가능합니다. 🥹\n\n✅ 반품 배송비 : 6,000원\n🏦 기업은행 075-09598004-017 (예금주: 주식회사 올릿리테일)\n\n입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드리겠습니다. 😊", n:"쿠팡 주문은 시스템상 반품 배송비 차감 처리가 어려워, 반품 배송비 6,000원 입금 후 반품 접수가 가능해요. 🥹\n\n✅ 반품 배송비 : 6,000원\n🏦 기업은행 075-09598004-017 (예금주: 주식회사 올릿리테일)\n\n입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드릴게요. 😊"},
    {id:"oclock_refund", o:"네이버페이 결제는 시스템상 부분 취소가 어려워, 반품 배송비 3,000원과 계속 사용하실 제품의 금액을 먼저 입금해 주신 후 반품 접수가 가능합니다. 🥹\n\n✅ 반품 배송비 : 3,000원\n✅ (제품명) : (가격)\n🏦 기업은행 075-09598004-017 (예금주: 주식회사 올릿리테일)\n\n입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드리겠습니다. 😊", n:"네이버페이 결제는 시스템상 부분 취소가 어려워, 반품 배송비 3,000원과 계속 사용하실 제품의 금액을 먼저 입금해 주신 후 반품 접수가 가능해요. 🥹\n\n✅ 반품 배송비 : 3,000원\n✅ (제품명) : (가격)\n🏦 기업은행 075-09598004-017 (예금주: 주식회사 올릿리테일)\n\n입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드릴게요. 😊"},
    {id:"oclock_refund", o:"쿠팡 주문은 시스템상 부분 취소가 어려워, 반품 배송비 3,000원과 계속 사용하실 제품의 금액을 먼저 입금해 주신 후 반품 접수가 가능합니다. 🥹\n수거 및 검수 완료 후 주문 금액은 전액 환불 처리됩니다.\n\n💳 입금 금액\n• 반품 배송비 : 3,000원\n• (제품명) : (가격)\n🏦 기업은행 075-09598004-017 (예금주: 주식회사 올릿리테일)\n\n입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드리겠습니다. 😊", n:"쿠팡 주문은 시스템상 부분 취소가 어려워, 반품 배송비 3,000원과 계속 사용하실 제품의 금액을 먼저 입금해 주신 후 반품 접수가 가능해요. 🥹\n수거 및 검수 완료 후 주문 금액은 전액 환불 처리돼요.\n\n💳 입금 금액\n• 반품 배송비 : 3,000원\n• (제품명) : (가격)\n🏦 기업은행 075-09598004-017 (예금주: 주식회사 올릿리테일)\n\n입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드릴게요. 😊"},
    {id:"oclock_refund", o:"반품 접수 도와드리겠습니다.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드립니다.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부됩니다.\n\n🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?", n:"반품 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부돼요.\n\n🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?"},
    {id:"oclock_refund", o:"부분 반품 접수 도와드리겠습니다.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n※ 사은품·증정품 및 그 외 구매한 부속품과 제품은 보내지 않으셔도 됩니다.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드립니다.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부됩니다.\n\n🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?", n:"부분 반품 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n※ 사은품·증정품 및 그 외 구매한 부속품과 제품은 보내지 않으셔도 돼요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부돼요.\n\n🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?"},
    {id:"oclock_refund", o:"전액 환불 접수 도와드리겠습니다.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n✍🏽 불량 제품은 박스 윗면에만 <b>[불량]</b>이라고 기재해 주세요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드립니다.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부됩니다.\n\n🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?", n:"전액 환불 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n✍🏽 불량 제품은 박스 윗면에만 <b>[불량]</b>이라고 기재해 주세요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부돼요.\n\n🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?"},
    {id:"oclock_refund", o:"네이버를 통해 반품 기사님을 신청해 주신 점 확인되었습니다. :)\n미개봉 제품은 전체 다시 택배 박스에 포장해 주시고, 기사님 방문 시 전달해 주시면 수거가 진행될 예정입니다.", n:"네이버를 통해 반품 기사님을 신청해 주신 점 확인되었습니다. :)\n미개봉 제품은 전체 다시 택배 박스에 포장해 주시고, 기사님 방문 시 전달해 주시면 수거가 진행될 예정이에요."},
    {id:"oclock_refund", o:"환불은 아래 절차를 거쳐 진행되며, 영업일 기준 약 6~8일 정도 소요됩니다.\n\n📦 <b>제품 수거 → 검수 → 반품 완료 (환불 승인)</b>\n\n결제수단에 따라 실제 카드 승인 취소(환불 완료)까지는 반품 완료 시점으로부터 영업일 기준 3~6일 추가 소요될 수 있습니다.", n:"환불은 아래 절차를 거쳐 진행되며, 영업일 기준 약 6~8일 정도 소요돼요.\n\n📦 <b>제품 수거 → 검수 → 반품 완료 (환불 승인)</b>\n\n결제수단에 따라 실제 카드 승인 취소(환불 완료)까지는 반품 완료 시점으로부터 영업일 기준 3~6일 추가 소요될 수 있어요."},
    {id:"oclock_refund", o:"환불은 아래 절차를 거쳐 진행되며, 영업일 기준 약 6~8일 정도 소요됩니다.\n\n📦 <b>제품 수거 → 검수 → 반품 완료 (환불 승인)</b>\n\n다만 (무통장 입금 / 가상계좌 결제)로 결제해 주신 점 확인되어, 환불을 위해 아래 계좌 정보 전달 부탁드립니다.\n\n🏦 <b>은행 / 계좌번호 / 예금주</b>", n:"환불은 아래 절차를 거쳐 진행되며, 영업일 기준 약 6~8일 정도 소요돼요.\n\n📦 <b>제품 수거 → 검수 → 반품 완료 (환불 승인)</b>\n\n다만 (무통장 입금 / 가상계좌 결제)로 결제해 주신 점 확인되어, 환불을 위해 아래 계좌 정보 전달 부탁드려요.\n\n🏦 <b>은행 / 계좌번호 / 예금주</b>"},
    {id:"oclock_refund", o:"소중한 정보 확인 감사합니다.\n해당 계좌로 환불 계좌 등록이 완료되었습니다.\n\n💸 <b>입금 안내</b>\n실제 반품 완료 처리 후 영업일 기준 1~2일 내 입금 예정\n\n※ 은행 점검 시간 또는 공휴일에 따라 입금이 지연될 수 있습니다.", n:"소중한 정보 확인 감사해요.\n해당 계좌로 환불 계좌 등록이 완료되었습니다.\n\n💸 <b>입금 안내</b>\n실제 반품 완료 처리 후 영업일 기준 1~2일 내 입금 예정\n\n※ 은행 점검 시간 또는 공휴일에 따라 입금이 지연될 수 있어요."},
    {id:"oclock_exchange", o:"교환은 기존 제품 회수 후 저희 입고 및 검수 완료 시 희망 제품으로 재출고되는 방식으로 진행됩니다.\n입고 및 검수에는 영업일 기준 6~8일 정도 소요되며, 교환 제품 금액이 더 높은 경우에는 차액 결제가 필요합니다.\n\n검수 및 재출고까지 시간이 소요되는 만큼, 기존 주문은 반품으로 접수하시고 원하시는 제품을 새로 주문하시는 방법을 권장드립니다.\n\n어떻게 도와드릴까요? 🙂", n:"교환은 기존 제품 회수 후 저희 입고 및 검수 완료 시 희망 제품으로 재출고되는 방식으로 진행돼요.\n입고 및 검수에는 영업일 기준 6~8일 정도 소요되며, 교환 제품 금액이 더 높은 경우에는 차액 결제가 필요해요.\n\n검수 및 재출고까지 시간이 소요되는 만큼, 기존 주문은 반품으로 접수하시고 원하시는 제품을 새로 주문하시는 방법을 권장드려요.\n\n어떻게 도와드릴까요? 😊"},
    {id:"oclock_exchange", o:"교환은 기존 제품 회수 후 저희 입고 및 검수가 완료되면, 요청하신 제품으로 재출고되는 방식으로 진행됩니다.\n\n제품 입고부터 검수 완료까지는 영업일 기준 6~8일 정도 소요되며, 교환을 원하시는 제품의 가격이 더 높은 경우 차액 결제가 필요합니다.\n\n이 점 양해 부탁드립니다.", n:"교환은 기존 제품 회수 후 저희 입고 및 검수가 완료되면, 요청하신 제품으로 재출고되는 방식으로 진행돼요.\n\n제품 입고부터 검수 완료까지는 영업일 기준 6~8일 정도 소요되며, 교환을 원하시는 제품의 가격이 더 높은 경우 차액 결제가 필요해요.\n\n이 점 양해 부탁드려요."},
    {id:"oclock_exchange", o:"교환 시 왕복 배송비 6,000원이 발생하며, 입금 확인 후 교환 접수를 도와드립니다.\n\n✅ 교환 왕복 배송비 : 6,000원\n🏦 기업은행 075-09598004-017 (예금주: 주식회사 올릿리테일)\n\n입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드리겠습니다. 😊", n:"교환 시 왕복 배송비 6,000원이 발생하며, 입금 확인 후 교환 접수를 도와드려요.\n\n✅ 교환 왕복 배송비 : 6,000원\n🏦 기업은행 075-09598004-017 (예금주: 주식회사 올릿리테일)\n\n입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드릴게요. 😊"},
    {id:"oclock_exchange", o:"부분 교환 시 사용하실 제품은 회수하지 않으며, 해당 제품 금액은 최종 결제 금액에서 차감됩니다.\n\n네이버페이 결제 건은 시스템상 부분 결제 처리가 어려워, 사용하실 제품 금액과 교환 왕복 배송비를 함께 입금해 주셔야 합니다.\n\n💳 입금 금액\n• 교환 왕복 배송비 : 3,000원\n• (제품명) : (가격)\n🏦 기업은행 075-09598004-017 (예금주: 주식회사 올릿리테일)\n\n입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드리겠습니다. 😊", n:"부분 교환 시 사용하실 제품은 회수하지 않으며, 해당 제품 금액은 최종 결제 금액에서 차감돼요.\n\n네이버페이 결제 건은 시스템상 부분 결제 처리가 어려워, 사용하실 제품 금액과 교환 왕복 배송비를 함께 입금해 주셔야 해요.\n\n💳 입금 금액\n• 교환 왕복 배송비 : 3,000원\n• (제품명) : (가격)\n🏦 기업은행 075-09598004-017 (예금주: 주식회사 올릿리테일)\n\n입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드릴게요. 😊"},
    {id:"oclock_exchange", o:"부분 교환 시 사용하실 제품은 회수하지 않으며, 해당 제품 금액은 최종 결제 금액에서 차감됩니다.\n\n교환을 원하시는 제품에 대해서는 왕복 배송비 6,000원이 발생하며, 입금 확인 후 교환 접수를 도와드립니다.\n\n✅ 교환 왕복 배송비 : 6,000원\n🏦 기업은행 075-09598004-017 (예금주: 주식회사 올릿리테일)\n\n입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드리겠습니다. 😊", n:"부분 교환 시 사용하실 제품은 회수하지 않으며, 해당 제품 금액은 최종 결제 금액에서 차감돼요.\n\n교환을 원하시는 제품에 대해서는 왕복 배송비 6,000원이 발생하며, 입금 확인 후 교환 접수를 도와드려요.\n\n✅ 교환 왕복 배송비 : 6,000원\n🏦 기업은행 075-09598004-017 (예금주: 주식회사 올릿리테일)\n\n입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드릴게요. 😊"},
    {id:"oclock_exchange", o:"교환 접수 도와드리겠습니다.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드립니다.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거 거부됩니다.\n\n🙋‍♀️ 마지막으로, 제품 회수와 배송은 기존 주소지로 접수해 드리면 될까요?", n:"교환 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요.\n\n🙋‍♀️ 마지막으로, 제품 회수와 배송은 기존 주소지로 접수해 드리면 될까요?"},
    {id:"oclock_exchange", o:"부분 교환 접수 도와드리겠습니다.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n※ 사은품·증정품 및 그 외 구매한 부속품과 제품은 보내지 않으셔도 됩니다.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드립니다.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거 거부됩니다.\n\n🙋‍♀️ 마지막으로, 제품 회수와 배송은 기존 주소지로 접수해 드리면 될까요?", n:"부분 교환 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n※ 사은품·증정품 및 그 외 구매한 부속품과 제품은 보내지 않으셔도 돼요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요.\n\n🙋‍♀️ 마지막으로, 제품 회수와 배송은 기존 주소지로 접수해 드리면 될까요?"},
    {id:"oclock_exchange", o:"📦 교환 진행 일정 안내드리겠습니다.\n\n· 검수 및 재출고 : 제품 입고 후 영업일 기준 6~8일 소요\n· 배송 : 재출고일로부터 영업일 기준 2~3일 소요\n· 택배사 : CJ대한통운\n\n※ 주말 및 공휴일에는 검수·출고가 진행되지 않습니다.", n:"📦 교환 진행 일정 안내드릴게요.\n\n· 검수 및 재출고 : 제품 입고 후 영업일 기준 6~8일 소요\n· 배송 : 재출고일로부터 영업일 기준 2~3일 소요\n· 택배사 : CJ대한통운\n\n※ 주말 및 공휴일에는 검수·출고가 진행되지 않아요."},
  ];
  EDITS.forEach(function(e){
    if(!CONTENT[e.id]) return;
    CONTENT[e.id]=CONTENT[e.id].split(e.o).join(e.n);
  });
})();

/* [F열 반영] 빌바 단순변심 반품/교환 — 톤앤매너 최종본(정중혼합형) 매칭 (2026-08) */
(function(){
  var EDITS=[
    {id:"bilba_refund", o:"네이버페이 결제는 시스템상 반품 배송비 차감 처리가 어려워, 반품 배송비 6,000원 입금 후 반품 접수가 가능합니다. 🥹\n\n✅ 반품 배송비 : 6,000원\n🏦 기업은행 078-213475-04-028 (예금주: 주식회사 올릿리테일)\n\n입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드리겠습니다. 😊", n:"네이버페이 결제는 시스템상 반품 배송비 차감 처리가 어려워, 반품 배송비 6,000원 입금 후 반품 접수가 가능합니다.\n\n✅ 반품 배송비 : 6,000원\n🏦 기업은행 078-213475-04-028 (예금주: 주식회사 올릿리테일)\n\n입금 후 ‘입금자명’을 말씀해 주시면 확인 후 접수 도와드릴게요. 🥲"},
    {id:"bilba_refund", o:"쿠팡 주문은 시스템상 반품 배송비 차감 처리가 어려워, 반품 배송비 6,000원 입금 후 반품 접수가 가능합니다. 🥹\n\n✅ 반품 배송비 : 6,000원\n🏦 기업은행 078-213475-04-028 (예금주: 주식회사 올릿리테일)\n\n입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드리겠습니다. 😊", n:"쿠팡 주문은 시스템상 반품 배송비 차감 처리가 어려워, 반품 배송비 6,000원 입금 후 반품 접수가 가능합니다.\n\n✅ 반품 배송비 : 6,000원\n🏦 기업은행 078-213475-04-028 (예금주: 주식회사 올릿리테일)\n\n입금 후 ‘입금자명’을 말씀해 주시면 확인 후 접수 도와드릴게요. 🥲"},
    {id:"bilba_refund", o:"네이버페이 결제는 시스템상 부분 취소가 어려워, 반품 배송비 3,000원과 계속 사용하실 제품의 금액을 먼저 입금해 주신 후 반품 접수가 가능합니다. 🥹\n\n✅ 반품 배송비 : 3,000원\n✅ (제품명) : (가격)\n🏦 기업은행 078-213475-04-028 (예금주: 주식회사 올릿리테일)\n\n입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드리겠습니다. 😊", n:"네이버페이 결제는 시스템상 부분 취소가 어려워, 반품 배송비 3,000원과 계속 사용하실 제품의 금액을 먼저 입금해 주신 후 반품 접수가 가능합니다.\n\n✅ 반품 배송비 : 3,000원\n✅ (제품명) : (가격)\n🏦 기업은행 078-213475-04-028 (예금주: 주식회사 올릿리테일)\n\n입금 후 ‘입금자명’을 말씀해 주시면 확인 후 접수 도와드릴게요. 🥲"},
    {id:"bilba_refund", o:"반품 배송비 3,000원과 개봉하여 반품이 어려운 (제품명) (가격) 제외 후 반품 진행돼요.", n:"반품 배송비 3,000원과 개봉하여 반품이 어려운 (제품명) (가격) 제외 후 반품 진행됩니다."},
    {id:"bilba_refund", o:"쿠팡 주문은 시스템상 부분 취소가 어려워, 반품 배송비 3,000원과 계속 사용하실 제품의 금액을 먼저 입금해 주신 후 반품 접수가 가능합니다. 🥹\n수거 및 검수 완료 후 주문 금액은 전액 환불 처리됩니다.\n\n💳 입금 금액\n• 반품 배송비 : 3,000원\n• (제품명) : (가격)\n🏦 기업은행 078-213475-04-028 (예금주: 주식회사 올릿리테일)\n\n입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드리겠습니다. 😊", n:"쿠팡 주문은 시스템상 부분 취소가 어려워, 반품 배송비 3,000원과 계속 사용하실 제품의 금액을 먼저 입금해 주신 후 반품 접수가 가능합니다.\n수거 및 검수 완료 후 주문 금액은 전액 환불 처리됩니다.\n\n💳 입금 금액\n• 반품 배송비 : 3,000원\n• (제품명) : (가격)\n🏦 기업은행 078-213475-04-028 (예금주: 주식회사 올릿리테일)\n\n입금 후 ‘입금자명’을 말씀해 주시면 확인 후 접수 도와드릴게요. 🥲"},
    {id:"bilba_refund", o:"반품 접수 도와드리겠습니다.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(계량컵·설명서 등)도 모두 함께 포장해 주세요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드립니다.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부됩니다.\n\n🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?", n:"반품 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(계량컵·설명서 등)도 모두 함께 포장해 주세요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드립니다.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부됩니다.\n\n🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?"},
    {id:"bilba_refund", o:"부분 반품 접수 도와드리겠습니다.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(계량컵·설명서 등)도 모두 함께 포장해 주세요.\n※ 사은품·증정품 및 그 외 구매한 부속품과 제품은 보내지 않으셔도 됩니다.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드립니다.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부됩니다.\n\n🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?", n:"부분 반품 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(계량컵·설명서 등)도 모두 함께 포장해 주세요.\n※ 사은품·증정품 및 그 외 구매한 부속품과 제품은 보내지 않으셔도 됩니다.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드립니다.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부됩니다.\n\n🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?"},
    {id:"bilba_refund", o:"전액 환불 접수 도와드리겠습니다.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(계량컵·설명서 등)도 모두 함께 포장해 주세요.\n✍🏽 불량 제품은 박스 윗면에만 <b>[불량]</b>이라고 기재해 주세요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드립니다.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부됩니다.\n\n🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?", n:"전액 환불 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(계량컵·설명서 등)도 모두 함께 포장해 주세요.\n✍🏽 불량 제품은 박스 윗면에만 <b>[불량]</b>이라고 기재해 주세요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드립니다.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부됩니다.\n\n🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?"},
    {id:"bilba_refund", o:"환불은 아래 절차를 거쳐 진행되며, 영업일 기준 약 6~8일 정도 소요됩니다.\n\n📦 <b>제품 수거 → 검수 → 반품 완료 (환불 승인)</b>\n\n다만 (무통장 입금 / 가상계좌 결제)로 결제해 주신 점 확인되어, 환불을 위해 아래 계좌 정보 전달 부탁드립니다.\n\n🏦 <b>은행 / 계좌번호 / 예금주</b>", n:"환불은 아래 절차를 거쳐 진행되며, 영업일 기준 약 6~8일 정도 소요됩니다.\n\n📦 <b>제품 수거 → 검수 → 반품 완료 (환불 승인)</b>\n\n다만 (무통장 입금 / 가상계좌 결제)로 결제해 주신 점 확인되어, 환불을 위해 아래 계좌 정보 전달 부탁드려요.\n\n🏦 <b>은행 / 계좌번호 / 예금주</b>"},
    {id:"bilba_exchange", o:"교환은 기존 제품 회수 후 저희 입고 및 검수 완료 시 희망 제품으로 재출고되는 방식으로 진행됩니다.\n입고 및 검수에는 영업일 기준 6~8일 정도 소요되며, 교환 제품 금액이 더 높은 경우에는 차액 결제가 필요합니다.\n\n검수 및 재출고까지 시간이 소요되는 만큼, 기존 주문은 반품으로 접수하시고 원하시는 제품을 새로 주문하시는 방법을 권장드립니다.\n\n어떻게 도와드릴까요? 🙂", n:"교환은 기존 제품 회수 후 저희 입고 및 검수 완료 시 희망 제품으로 재출고되는 방식으로 진행됩니다.\n입고 및 검수에는 영업일 기준 6~8일 정도 소요되며, 교환 제품 금액이 더 높은 경우에는 차액 결제가 필요합니다.\n\n검수 및 재출고까지 시간이 소요되는 만큼, 기존 주문은 반품으로 접수하시고 원하시는 제품을 새로 주문하시는 방법을 권장드립니다.\n\n어떻게 도와드릴까요? 😊"},
    {id:"bilba_exchange", o:"교환은 기존 제품 회수 후 저희 입고 및 검수가 완료되면, 요청하신 제품으로 재출고되는 방식으로 진행됩니다.\n\n제품 입고부터 검수 완료까지는 영업일 기준 6~8일 정도 소요되며, 교환을 원하시는 제품의 가격이 더 높은 경우 차액 결제가 필요합니다.\n\n이 점 양해 부탁드립니다.", n:"교환은 기존 제품 회수 후 저희 입고 및 검수가 완료되면, 요청하신 제품으로 재출고되는 방식으로 진행됩니다.\n\n제품 입고부터 검수 완료까지는 영업일 기준 6~8일 정도 소요되며, 교환을 원하시는 제품의 가격이 더 높은 경우 차액 결제가 필요합니다.\n\n이 점 너른 양해 부탁드려요."},
    {id:"bilba_exchange", o:"교환 시 왕복 배송비 6,000원이 발생하며, 입금 확인 후 교환 접수를 도와드립니다.\n\n✅ 교환 왕복 배송비 : 6,000원\n🏦 기업은행 078-213475-04-028 (예금주: 주식회사 올릿리테일)\n\n입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드리겠습니다. 😊", n:"교환 시 왕복 배송비 6,000원이 발생하며, 입금 확인 후 교환 접수를 도와드립니다.\n\n✅ 교환 왕복 배송비 : 6,000원\n🏦 기업은행 078-213475-04-028 (예금주: 주식회사 올릿리테일)\n\n입금 후 ‘입금자명’을 말씀해 주시면 확인 후 접수 도와드릴게요. 😊"},
    {id:"bilba_exchange", o:"부분 교환 시 사용하실 제품은 회수하지 않으며, 해당 제품 금액은 최종 결제 금액에서 차감됩니다.\n\n네이버페이 결제 건은 시스템상 부분 결제 처리가 어려워, 사용하실 제품 금액과 교환 왕복 배송비를 함께 입금해 주셔야 합니다.\n\n💳 입금 금액\n• 교환 왕복 배송비 : 3,000원\n• (제품명) : (가격)\n🏦 기업은행 078-213475-04-028 (예금주: 주식회사 올릿리테일)\n\n입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드리겠습니다. 😊", n:"부분 교환 시 사용하실 제품은 회수하지 않으며, 해당 제품 금액은 최종 결제 금액에서 차감됩니다.\n\n네이버페이 결제 건은 시스템상 부분 결제 처리가 어려워, 사용하실 제품 금액과 교환 왕복 배송비를 함께 입금해 주셔야 합니다.\n\n💳 입금 금액\n• 교환 왕복 배송비 : 3,000원\n• (제품명) : (가격)\n🏦 기업은행 078-213475-04-028 (예금주: 주식회사 올릿리테일)\n\n입금 후 ‘입금자명’을 말씀해 주시면 확인 후 접수 도와드릴게요. 😊"},
    {id:"bilba_exchange", o:"부분 교환 시 사용하실 제품은 회수하지 않으며, 해당 제품 금액은 최종 결제 금액에서 차감됩니다.\n\n교환을 원하시는 제품에 대해서는 왕복 배송비 6,000원이 발생하며, 입금 확인 후 교환 접수를 도와드립니다.\n\n✅ 교환 왕복 배송비 : 6,000원\n🏦 기업은행 078-213475-04-028 (예금주: 주식회사 올릿리테일)\n\n입금 후 '입금자명'을 말씀해 주시면 확인 후 접수 도와드리겠습니다. 😊", n:"부분 교환 시 사용하실 제품은 회수하지 않으며, 해당 제품 금액은 최종 결제 금액에서 차감됩니다.\n\n교환을 원하시는 제품에 대해서는 왕복 배송비 6,000원이 발생하며, 입금 확인 후 교환 접수를 도와드립니다.\n\n✅ 교환 왕복 배송비 : 6,000원\n🏦 기업은행 078-213475-04-028 (예금주: 주식회사 올릿리테일)\n\n입금 후 ‘입금자명’을 말씀해 주시면 확인 후 접수 도와드릴게요. 😊"},
    {id:"bilba_exchange", o:"교환 접수 도와드리겠습니다.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(계량컵·설명서 등)도 모두 함께 포장해 주세요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드립니다.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거 거부됩니다.\n\n🙋‍♀️ 마지막으로, 제품 회수와 배송은 기존 주소지로 접수해 드리면 될까요?", n:"교환 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(계량컵·설명서 등)도 모두 함께 포장해 주세요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드립니다.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있습니다.\n\n🙋‍♀️ 마지막으로, 제품 회수와 배송은 기존 주소지로 접수해 드리면 될까요?"},
    {id:"bilba_exchange", o:"부분 교환 접수 도와드리겠습니다.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(계량컵·설명서 등)도 모두 함께 포장해 주세요.\n※ 사은품·증정품 및 그 외 구매한 부속품과 제품은 보내지 않으셔도 됩니다.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드립니다.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거 거부됩니다.\n\n🙋‍♀️ 마지막으로, 제품 회수와 배송은 기존 주소지로 접수해 드리면 될까요?", n:"부분 교환 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(계량컵·설명서 등)도 모두 함께 포장해 주세요.\n※ 사은품·증정품 및 그 외 구매한 부속품과 제품은 보내지 않으셔도 됩니다.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드립니다.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있습니다.\n\n🙋‍♀️ 마지막으로, 제품 회수와 배송은 기존 주소지로 접수해 드리면 될까요?"},
    {id:"bilba_exchange", o:"📦 교환 진행 일정 안내드리겠습니다.\n\n· 검수 및 재출고 : 제품 입고 후 영업일 기준 6~8일 소요\n· 배송 : 재출고일로부터 영업일 기준 2~3일 소요\n· 택배사 : CJ대한통운\n\n※ 주말 및 공휴일에는 검수·출고가 진행되지 않습니다.", n:"📦 교환 진행 일정 안내드릴게요.\n\n· 검수 및 재출고 : 제품 입고 후 영업일 기준 6~8일 소요\n· 배송 : 재출고일로부터 영업일 기준 2~3일 소요\n· 택배사 : CJ대한통운\n\n※ 주말 및 공휴일에는 검수·출고가 진행되지 않습니다."},
  ];
  EDITS.forEach(function(e){
    if(!CONTENT[e.id]) return;
    CONTENT[e.id]=CONTENT[e.id].split(e.o).join(e.n);
  });
})();

/* [톤 샘플] 코코다움 단순변심 — 보호자님·부드러운 어미·🐾 (승인 후 타 카테고리/브랜드 확대) */
(function(){
  ["cocodaum_refund","cocodaum_exchange"].forEach(function(id){
    if(!CONTENT[id]) return;
    var t=CONTENT[id];
    t=t.split("고객님").join("보호자님");
    t=t.split("부탁드리겠습니다").join("부탁드려요");
    t=t.split("부탁드립니다").join("부탁드려요");
    t=t.split("도와드리겠습니다").join("도와드릴게요");
    t=t.split("안내드리겠습니다").join("안내드릴게요");
    t=t.split("진행하겠습니다").join("진행할게요");
    t=t.split("입금해 주셔야 합니다.").join("입금해 주셔야 해요. 💛");
    t=t.split("반품이 어렵습니다.").join("반품이 어려워요. 😿");
    t=t.split("대상에서 제외됩니다.").join("대상에서 제외돼요. 😿");
    t=t.split("전달드립니다 :)").join("전달드립니다. 😸");
    t=t.split("만족을 드리지 못해 안타깝습니다.").join("만족을 드리지 못해 안타깝습니다. 😿");
    t=t.split("🥹").join("😿");
    t=t.split("도와드릴게요.").join("도와드릴게요. 💛");
    t=t.split("안내드릴게요.").join("안내드릴게요. 💛");
    t=t.split("괜찮을까요?").join("괜찮을까요? 🐾");
    CONTENT[id]=t;
  });
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
  if(typeof BOARD_TREE!=="undefined") walk(BOARD_TREE,"","board","게시판");
}

let curRail="dash";
let CUR_CID="";

/* 이스케이프 / 하이라이트 / 경로표시 */
function esc(s){return String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}
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
  }else if(cfg.type==="tree"){
    tree.innerHTML=buildTree(curRail==="board"?BOARD_TREE:CALL_TREE,"");
    tree.querySelectorAll(".node").forEach(n=>n.classList.add("open"));
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
    const card=btn.closest(".macro,.subcard,.col-card,.cmp-ment");
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
  const box=btn.closest(".macro,.subcard,.col-card,.star-note,.blue-note,.cmp-ment");
  const text=box.querySelector(".macro-body,.subcard-body,.col-body-plain,.star-body,.bn-body,.cmp-ment-body").innerText;
  navigator.clipboard.writeText(text).then(()=>{
    const orig=btn.innerHTML;
    btn.innerHTML="✓";btn.classList.add("done");
    setTimeout(()=>{btn.innerHTML=orig;btn.classList.remove("done");},1400);
  });
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
  if(active) active.click(); else openHomeDefault();
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

/* ===== CEL_TONE_OVERRIDE : 셀올로지 전체 템플릿 톤앤매너(F열) 반영 (2026-08 / 엑셀 기반) ===== */
;(function(){
  var MAP={"cellology_exchange": [{"i": 0, "html": "교환은 기존 제품을 회수한 뒤 입고 및 검수가 완료되면, 원하시는 제품으로 다시 보내드리는 방식이에요.\n입고 및 검수에는 영업일 기준 6~8일 정도 소요되며, 교환 제품의 금액이 더 높은 경우에는 차액 결제가 필요해요.\n\n검수와 재출고까지 시간이 소요되는 만큼, 기존 주문은 반품으로 접수하고 원하시는 제품을 새로 주문하시는 방법을 권장드려요.\n\n어떤 방법으로 도와드리면 좋을까요?💙"}, {"i": 1, "html": "교환은 기존 제품을 회수한 뒤 입고 및 검수가 완료되면, 요청하신 제품으로 다시 보내드리는 방식이에요.\n\n제품 입고부터 검수 완료까지 영업일 기준 6~8일 정도 소요되며, 교환을 원하시는 제품의 가격이 더 높은 경우에는 차액 결제가 필요해요.\n\n이 점 너른 양해 부탁드려요. 💙"}, {"i": 2, "html": "교환 시 왕복 배송비 6,000원이 발생하며, 입금 확인 후 교환 접수를 도와드려요.\n\n✅ 교환 왕복 배송비 : 6,000원\n🏦 기업은행 078-219021-04-021 (예금주: 주식회사 더마)\n\n입금 후 ‘입금자명’을 말씀해 주시면 확인해서 접수 도와드릴게요. 💙"}, {"i": 3, "html": "부분 교환 시 사용하실 제품은 회수하지 않으며, 해당 제품 금액은 최종 결제 금액에서 차감돼요.\n\n네이버페이 결제 건은 시스템상 부분 결제 처리가 어려워, 사용하실 제품 금액과 교환 왕복 배송비를 함께 입금해 주셔야 해요.\n\n💳 입금 금액\n• 교환 왕복 배송비 : 3,000원\n• (제품명) : (가격)\n🏦 기업은행 078-219021-04-021 (예금주: 주식회사 더마)\n\n입금 후 ‘입금자명’을 말씀해 주시면 확인해서 접수 도와드릴게요. 💙"}, {"i": 4, "html": "부분 교환 시 사용하실 제품은 회수하지 않으며, 해당 제품 금액은 최종 결제 금액에서 차감돼요.\n\n교환을 원하시는 제품에 대해서는 왕복 배송비 6,000원이 발생하며, 입금 확인 후 교환 접수를 도와드려요.\n\n✅ 교환 왕복 배송비 : 6,000원\n🏦 기업은행 078-219021-04-021 (예금주: 주식회사 더마)\n\n입금 후 ‘입금자명’을 말씀해 주시면 확인해서 접수 도와드릴게요. 💙"}, {"i": 5, "html": "교환 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요.\n\n🙋‍♀️ 마지막으로, 제품 회수와 배송은 기존 주소지로 접수해 드리면 될까요?"}, {"i": 6, "html": "부분 교환 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n※ 사은품·증정품 및 그 외 구매한 부속품과 제품은 보내지 않으셔도 돼요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요.\n\n🙋‍♀️ 마지막으로, 제품 회수와 배송은 기존 주소지로 접수해 드리면 될까요?"}, {"i": 7, "html": "📦 교환 진행 일정 안내드릴게요.\n\n· 검수 및 재출고 : 제품 입고 후 영업일 기준 6~8일 소요\n· 배송 : 재출고일로부터 영업일 기준 2~3일 소요\n· 택배사 : CJ대한통운\n\n※ 주말 및 공휴일에는 검수·출고가 진행되지 않습니다."}], "cellology_refund": [{"i": 0, "html": "네이버페이 결제는 시스템상 반품 배송비를 차감하기 어려워, 반품 배송비 6,000원을 입금해 주신 후 반품 접수가 가능해요.\n\n✅ 반품 배송비 : 6,000원\n🏦 기업은행 078-219021-04-021 (예금주: 주식회사 더마)\n\n입금 후 ‘입금자명’을 말씀해 주시면 확인해서 접수 도와드릴게요. 💙"}, {"i": 1, "html": "반품 배송비 6,000원 제외 후 반품으로 진행해 드려요."}, {"i": 2, "html": "쿠팡 주문은 시스템상 반품 배송비를 차감하기 어려워, 반품 배송비 6,000원을 입금해 주신 후 반품 접수가 가능해요.\n\n✅ 반품 배송비 : 6,000원\n🏦 기업은행 078-219021-04-021 (예금주: 주식회사 더마)\n\n입금 후 ‘입금자명’을 말씀해 주시면 확인해서 접수 도와드릴게요. 💙"}, {"i": 3, "html": "네이버페이 결제는 시스템상 부분 취소가 어려워, 반품 배송비 3,000원과 계속 사용하실 제품의 금액을 먼저 입금해 주신 후 반품 접수가 가능해요.\n\n✅ 반품 배송비 : 3,000원\n✅ (제품명) : (가격)\n🏦 기업은행 078-219021-04-021 (예금주: 주식회사 더마)\n\n입금 후 ‘입금자명’을 말씀해 주시면 확인해서 접수 도와드릴게요. 💙"}, {"i": 4, "html": "반품 배송비 3,000원과 개봉하여 반품이 어려운 (제품명) (가격) 제외 후 반품으로 진행해 드려요."}, {"i": 5, "html": "쿠팡 주문은 시스템상 부분 취소가 어려워, 반품 배송비 3,000원과 계속 사용하실 제품의 금액을 먼저 입금해 주신 후 반품 접수가 가능해요.\n수거 및 검수 완료 후 주문 금액은 전액 환불 처리돼요.\n\n💳 입금 금액\n• 반품 배송비 : 3,000원\n• (제품명) : (가격)\n🏦 기업은행 078-219021-04-021 (예금주: 주식회사 더마)\n\n입금 후 ‘입금자명’을 말씀해 주시면 확인해서 접수 도와드릴게요. 💙"}, {"i": 6, "html": "반품 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요.\n\n🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?"}, {"i": 7, "html": "부분 반품 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n※ 사은품·증정품 및 그 외 구매한 부속품과 제품은 보내지 않으셔도 돼요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요.\n\n🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?"}, {"i": 8, "html": "전액 환불 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n\n✍🏽 불량 제품은 박스 윗면에만 <b>[ 불량 / CJ대한통운 / 셀올로지 ]</b> 표기 부탁드려요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요.\n\n🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?"}, {"i": 9, "html": "네이버를 통해 반품 기사님을 신청해 주신 점 확인되었어요. 💙\n미개봉 제품은 전체 다시 택배 박스에 포장해 주시고, 기사님 방문 시 전달해 주시면 수거가 진행될 예정이에요."}, {"i": 10, "html": "환불은 아래 절차를 거쳐 진행되며, 영업일 기준 약 6~8일 정도 소요돼요.\n\n📦 제품 수거 → 검수 → 반품 완료 (환불 승인)\n\n결제수단에 따라 실제 카드 승인 취소(환불 완료)까지는 반품 완료 시점으로부터 영업일 기준 3~6일 추가 소요될 수 있어요."}, {"i": 11, "html": "환불은 아래 절차를 거쳐 진행되며, 영업일 기준 약 6~8일 정도 소요돼요.\n\n📦 제품 수거 → 검수 → 반품 완료 (환불 승인)\n\n다만 (무통장 입금 / 가상계좌 결제)로 결제해 주신 점 확인되어, 환불을 위해 아래 계좌 정보 전달해 주세요.\n\n🏦 은행 / 계좌번호 / 예금주"}, {"i": 12, "html": "정보 확인해 주셔서 감사해요. 💙\n해당 계좌로 환불 계좌 등록이 완료되었어요.\n\n💸 입금 안내\n실제 반품 완료 처리 후 영업일 기준 1~2일 내 입금 예정\n\n※ 은행 점검 시간 또는 공휴일에 따라 입금이 지연될 수 있어요."}], "cellology_100refund": [{"i": 0, "html": "네, 고객님. 제품 사용 후 기대하신 만족을 드리지 못해 정말 안타까워요. 💧\n\n다만 앞서 안내드린 것처럼, 개봉 후 사용하신 제품은 원칙적으로 단순 변심에 의한 반품이 어려워요.\n\n다만, 공식몰에서 구매하신 첫 구매 고객님께는 [100% 환불 이벤트]를 운영하고 있어요.\n상품 수령일로부터 30일 이내 사용 후 만족스럽지 않으신 경우, 이벤트 조건 충족 시 환불 신청이 가능해요.\n\n조금 더 사용해 보신 후에도 만족스럽지 않으시다면, 기간 내 채팅 상담으로 환불 신청 부탁드려요. 💙"}, {"i": 1, "html": "는 제품을 30일간 꾸준히 사용하신 경우, 배송 완료 후 40일 이내 신청 가능해요💙\n\n해당 서비스는 첫 구매 고객님을 위한 1회 한정 체험 혜택으로, 1회 이상 환불 이력이 있을 경우 대상에서 제외돼요.\n\n또한, 구매하신 제품 구성에 따라 적용 조건이 다를 수 있으니 자세한 내용은 아래 링크를 꼭 참고 부탁드려요.\n\n👉🏻 100% 환불 이벤트 상세 조건 : https://cellology.cafe24.com/skin-skin4/article/%EA%B3%B5%EC%A7%80%EC%82%AC%ED%95%AD/1/76/"}, {"i": 2, "html": "네, 고객님. 이용에 번거로움을 드려 죄송합니다. 🙏🏻\n\n 상세 조건이 안내된 페이지도 함께 전달드려요. 💙\n내용 확인 후, 기간 내 신청 부탁드려요.\n\n궁금하신 점이나 어려우신 부분 있으시면 언제든 편하게 말씀해 주세요💙\n\n👉🏻 상세 조건 : https://cellology.cafe24.com/skin-skin4/article/%EA%B3%B5%EC%A7%80%EC%82%AC%ED%95%AD/1/76/\n👉🏻 셀올로지 채팅 상담 바로가기 : http://cellology.channel.io/\n※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)"}, {"i": 3, "html": "남겨주신 반품 사유와 같이 이미 개봉·사용하신 뒤 불만족으로 반품을 희망하시는 경우, 공식몰에서 주문하신 고객님에 한하여 [100% 환불이벤트]를 진행해드리고 있어요.\n\n30일 이내 무조건 반품이 아닌, 수령하신 뒤 30일 이후 ~ 40일 이내 접수 가능해요.\n(*공식몰 주문 건에 한하여 단 1회, 상품 1종 적용 가능)\n\n[100% 환불 이벤트]는 제품을 꾸준히 사용해 보신 후에도 만족하시지 못한 경우, 수령일 기준 30~40일 이내 환불을 도와드리는 서비스입니다. (*왕복 배송비 6,000원 차감)\n\n따라서 번거로우시겠지만, 이벤트 기간인 (주문 건별 신청 가능일자 기재) 내 다시 접수가 필요해요.\n현재 고객님의 접수 가능 기간이 아니기에 접수가 어려운 상황으로, 불만족 시 이벤트 기간 내 채팅 상담으로 접수 부탁드려요.\n\n👉🏻 셀올로지 채팅 상담 바로가기 : http://cellology.channel.io/\n※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)"}, {"i": 4, "html": "고객님, 제품은 꾸준히 사용하실수록 만족도가 높다는 후기가 많아 꾸준한 사용을 권장드리고 있어요.\n\n만약 사용법에 맞게 지속적으로 사용하셨음에도 만족스럽지 않으셨다면,  기간 내 문의 주시는 경우 이벤트 조건에 맞춰 환불 절차 안내 도와드리고 있어요.\n\n저희 셀올로지를 믿고 조금만 더 사용해 보신 뒤 기간 내 채팅 상담으로 접수 부탁드려요💙\n\n👉🏻 셀올로지 채팅 상담 바로가기 : http://cellology.channel.io/\n※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)"}, {"i": 5, "html": "더불어 개봉 후 사용하신 제품은 남겨주신 반품 사유와 같이 사용 후 불만족으로 인해 원칙적으로 반품이 불가한 품목입니다. 💧\n\n아래 유사한 소비자원 사례 전달드리며, 말씀드린 내용처럼 본래 반품이 불가한 상황이나 꾸준히 사용해 보셨음에도 불만족하시는 경우 예외 반품을 도와드리는 100% 환불 이벤트를 진행하고 있으니 해당 기간에 맞춰 신청을 부탁드릴게요."}, {"i": 6, "html": "네, 고객님. 이용에 번거로움을 드려 죄송합니다. 🙏🏻\n\n 상세 조건이 안내된 페이지도 함께 전달드려요. 💙\n내용 확인 후, 기간 내 채팅 상담으로 접수 부탁드려요.\n\n궁금하신 점이나 어려우신 부분 있으시면 언제든 편하게 말씀해 주세요💙\n\n👉🏻 상세 조건 : https://cellology.cafe24.com/skin-skin4/article/%EA%B3%B5%EC%A7%80%EC%82%AC%ED%95%AD/1/76/\n👉🏻 셀올로지 채팅 상담 바로가기 : http://cellology.channel.io/\n※ 상담 가능 시간 : 월–금 09:30-17:00 (점심시간 12:30-13:30 / 주말·공휴일 휴무)"}, {"i": 7, "html": "네, 고객님. 제품 사용 후 기대하신 만족을 드리지 못해 안타까워요. 💧\n다만 앞서 안내드린 것처럼, 개봉하여 사용하신 제품은 원칙적으로 반품이 어려워요.\n\n또한 셀올로지에서 운영 중인 는 제품군별로 신청·환불 기준이 다릅니다.\n· 디바이스 : 배송 완료 후 40일 이내 신청 / 수령 후 30일 동안 꾸준히 사용\n· 화장품 : 배송 완료 후 40일 이내 신청 / 수령 후 30일 이내, 2/3 사용\n\n고객님의 경우 (배송 완료일) 배송 완료 기준으로 신청 가능 기간이 경과되어 환불 도움을 드리기 어려운 점 양해 부탁드려요."}, {"i": 8, "html": "네, 고객님. 제품 사용 후 기대하신 만족을 드리지 못해 안타까워요. 💧\n\n현재 셀올로지에서는 첫 구매 고객님을 위한 를 운영 중입니다💙\n수령일 기준 30일간 꾸준히 사용하신 뒤에도 만족하지 못하신 경우, 해당 조건에 따라 환불을 도와드리고 있어요.\n\n 참여를 원하신다면 바로 안내 도와드릴게요!"}, {"i": 9, "html": "는 제품을 30일간 꾸준히 사용하신 경우, 배송 완료 후 40일 이내 신청 가능해요💙\n\n해당 서비스는 첫 구매 고객님을 위한 1회 한정 체험 혜택으로, 1회 이상 환불 이력이 있을 경우 대상에서 제외돼요.\n\n또한, 구매하신 제품 구성에 따라 적용 조건이 다를 수 있으니 자세한 내용은 아래 링크를 꼭 참고 부탁드려요.\n\n👉🏻 상세 조건 확인하기 : https://cellology.cafe24.com/skin-skin4/article/%EA%B3%B5%EC%A7%80%EC%82%AC%ED%95%AD/1/76/"}, {"i": 10, "html": "네이버페이 결제는 부분 취소가 어려워 반품 배송비 6,000원 입금 후 반품이 가능해요.\n\n반품 배송비 : 6,000원\n🏦 기업은행 078-219021-04-021 (예금주: 주식회사 더마)\n\n위 계좌로 송금해 주신 다음 '입금자명'을 말씀해 주시면 확인 후 도와드리겠습니다."}, {"i": 11, "html": "반품 배송비 6,000원 제외 후 반품으로 진행해 드려요."}, {"i": 12, "html": "접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 제품 전체\n■ 구성품 전체 (케이블·설명서 등)\n■ 사은품·증정품(받으신 경우)\n\n✍🏽 택배 박스 윗면에 [★100% 환불★] 기재 부탁드려요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요.\n\n※ 화장품은 케이블·설명서 등 별도 구성품이 없는 경우 해당 항목에서 제외해 주세요."}, {"i": 13, "html": "고객님, 동일한 상품을 1개 이상 구매하신 경우에는 체험용 1개 외 나머지 상품은 개봉 또는 손상 없이 보관된 경우에만 전액 환불이 가능해요.\n\n체험 상품 1개를 제외하고, 나머지 상품 모두 미개봉 상태가 맞으실까요? 확인 부탁드려요. 💙"}, {"i": 14, "html": "네이버페이 결제는 부분 취소가 어려워 반품 배송비 6,000원 입금 후 반품이 가능해요.\n\n반품 배송비 : 6,000원\n🏦 기업은행 078-219021-04-021 (예금주: 주식회사 더마)\n\n위 계좌로 송금해 주신 다음 '입금자명'을 말씀해 주시면 확인 후 도와드리겠습니다."}, {"i": 15, "html": "반품 배송비 6,000원 제외 후 반품으로 진행해 드려요."}, {"i": 16, "html": "접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n※ 사은품·증정품 및 그 외 구매한 부속품과 제품은 보내지 않으셔도 돼요.\n\n✍🏽 택배 박스 윗면에 [★100% 환불★] 기재 부탁드려요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요."}, {"i": 17, "html": "확인해 주셔서 감사해요. 💙\n\n다만, 동일 상품을 1개 이상 또는 세트로 구매하신 경우 체험 상품 1개 외에는 미개봉 상태일 때만 전액 환불이 가능해요.\n\n현재 (개봉된 박스 개수 기재)개 개봉된 상태로 확인되어, 개봉 상품에 대해서는 차감 후 환불이 가능해요.\n(상품명) (개봉된 박스 개수 기재) (금액)과 반품 배송비 6,000원을 제외한 환불 금액 안내 도와드릴게요."}, {"i": 18, "html": "네이버페이 결제는 부분 취소가 어려워, 사용하신 제품 금액과 반품 배송비를 입금해 주신 후 반품 처리가 가능해요.\n\n(제품명) : (가격)\n반품 배송비 : 6,000원\n🏦 기업은행 078-219021-04-021 (예금주: 주식회사 더마)\n\n위 계좌로 송금해 주신 다음 '입금자명'을 말씀해 주시면 확인 후 도와드리겠습니다."}, {"i": 19, "html": "반품 배송비 6,000원과 개봉하여 반품이 어려운 (사용할 제품명) (정가) 제외 후 반품으로 진행해 드려요."}, {"i": 20, "html": "접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 제품 전체\n■ 구성품 전체 (케이블·설명서 등)\n■ 사은품·증정품(받으신 경우)\n\n✍🏽 택배 박스 윗면에 [★100% 환불★] 기재 부탁드려요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요.\n\n※ 화장품은 케이블·설명서 등 별도 구성품이 없는 경우 해당 항목에서 제외해 주세요."}, {"i": 22, "html": "구성이 다른 세트 상품을 구매해 주셨기 때문에, 각 상품을 모두 개봉해 체험하신 경우에도 왕복 배송비를 제외한 전액 환불이 가능해요."}, {"i": 23, "html": "네이버페이 결제는 부분 취소가 어려워 반품 배송비 6,000원 입금 후 반품이 가능해요.\n\n반품 배송비 : 6,000원\n🏦 기업은행 078-219021-04-021 (예금주: 주식회사 더마)\n\n위 계좌로 송금해 주신 다음 '입금자명'을 말씀해 주시면 확인 후 도와드리겠습니다."}, {"i": 24, "html": "반품 배송비 6,000원 제외 후 반품으로 진행해 드려요."}, {"i": 25, "html": "접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 제품 전체\n■ 구성품 전체 (케이블·설명서 등)\n■ 사은품·증정품(받으신 경우)\n\n✍🏽 택배 박스 윗면에 [★100% 환불★] 기재 부탁드려요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요."}, {"i": 26, "html": "고객님의 경우, 하나의 주문에서 여러 제품을 구매하신 세트 구성 형태가 아닌 개별 주문건으로 확인되고 있어요.\n\n는 공지사항에 안내된 대로 회원당 1회만 신청 가능한 첫 구매 체험 서비스이기 때문에, 주문 1건에 한해서만 이벤트 신청이 가능한 점 양해 부탁드려요."}, {"i": 27, "html": "고객님의 경우, 셀올로지에서 제공하는 세트 구성 상품이 아닌 원하시는 제품을 개별로 선택해 구매하신 주문건으로 확인돼요.\n\n는 공지사항에 안내된 대로, 상품명에 '세트(SET)'가 포함된 세트 구성만 '구성이 다른 세트 상품'에 해당되는 점 양해 부탁드려요."}, {"i": 29, "html": "환불은 아래 절차를 거쳐 진행되며, 영업일 기준 약 6~8일 정도 소요돼요.\n\n📦 제품 수거 → 검수 → 반품 완료 (환불 승인)\n\n결제수단에 따라 실제 카드 승인 취소(환불 완료)까지는 반품 완료 시점으로부터 영업일 기준 3~6일 추가 소요될 수 있어요."}, {"i": 30, "html": "환불은 아래 절차를 거쳐 진행되며, 영업일 기준 약 6~8일 정도 소요돼요.\n\n📦 제품 수거 → 검수 → 반품 완료 (환불 승인)\n\n다만, (결제수단 안내 - 무통장 입금 or 가상계좌 결제)로 결제해 주신 점 확인되어, 환불을 위해 아래 계좌 정보 전달해 주세요.\n\n🏦 은행 / 계좌번호 / 예금주"}, {"i": 31, "html": "정보 확인해 주셔서 감사해요. 💙\n해당 계좌로 환불 계좌 등록이 완료되었어요.\n\n💸 입금 안내\n실제 반품 완료 처리 후 영업일 기준 1~2일 내 입금 예정\n\n※ 은행 점검 시간 또는 공휴일에 따라 입금이 지연될 수 있어요."}], "cel_as": [{"i": 0, "html": "제품 사용 후 만족스러운 경험을 드리지 못해 정말 죄송합니다. 🙏🏻"}, {"i": 1, "html": "고객님, 번거로우시겠지만\n불량으로 의심되는 증상에 대해 조금 더 자세히 말씀해 주실 수 있을까요?\n\n말씀해 주신 내용을 바탕으로 정확하게 안내 도와드릴게요. 💙"}, {"i": 2, "html": "고객님, 문의주신 (제품명)의 올바른 사용법 먼저 안내드려요.\n\n사용법과 다르게 사용하실 경우 정상 작동이 어려울 수 있어, 안내드린 방식대로 사용해 보셨는지 확인 부탁드려요. 💙"}, {"i": 4, "html": "(제품명)은 정격 전압이 5V 2A 제품으로, 고속 충전기 사용 시 기기가 고장 날 수 있어요.\n\n동봉된 전용 케이블과 함께 5V 2A 어댑터 (셀올로지 전용 어댑터 사용 가능) 또는 PC/노트북의 USB 포트를 이용해 충전해 주세요.\n\n또한 해당 제품은 무선 제품으로, 충전 중에는 작동되지 않습니다.\n번거로우시겠지만, 위 안내 방식대로 충전 및 사용해주셨는지 확인 부탁드려요. 💙"}, {"i": 5, "html": "휴대폰 충전용 고속 충전기를 사용하실 경우, 기기 고장의 원인이 될 수 있어요.\n\n번거로우시겠지만,\n동봉된 전용 케이블과 함께 5V 2A 어댑터 (셀올로지 전용 어댑터 사용 가능) 또는 PC/노트북의 USB 포트를 이용해 충전해 주세요."}, {"i": 6, "html": "(제품명)은 정격 전압이 5V 1A 제품으로, 고속 충전기 사용 시 기기가 고장 날 수 있어요.\n\n동봉된 전용 케이블과 함께 5V 1A 어댑터 또는 PC/노트북의 USB 포트를 이용해 충전해 주세요.\n\n또한 해당 제품은 무선 제품으로, 충전 중에는 작동되지 않습니다.\n번거로우시겠지만, 위 안내 방식대로 충전 및 사용해주셨는지 확인 부탁드려요. 💙"}, {"i": 7, "html": "(제품명)은 정격 전압이 5V 1A 제품으로, 고속 충전기 사용 시 기기가 고장 날 수 있어요.\n\n동봉된 전용 케이블과 함께 5V 1A 어댑터 또는 PC/노트북의 USB 포트를 이용해 충전해 주세요.\n\n또한 해당 제품은 무선 제품으로, 충전 중에는 작동되지 않습니다.\n번거로우시겠지만, 위 안내 방식대로 충전 및 사용해주셨는지 확인 부탁드려요. 💙"}, {"i": 8, "html": "(ex. 충전이 안 돼요. 충전하는데 빨간불이 안들어와요 등)\n\n📷 고객님, 정확한 불량 증상 확인을 위해\n번거로우시겠지만 아래 4가지가 모두 확인되도록 촬영 부탁드려요.\n\n1️⃣ 충전 중인 제품 상태\n2️⃣ 충전기(어댑터) 정격전압의 ( 5V 2A or 5V 1A ) 표시\n3️⃣ 전용 케이블 연결 상태 (케이블선이 연결된 모습 포함)\n4️⃣ 충전 시 LED 표시등 작동 여부"}, {"i": 9, "html": "(ex. 충전 후 전원을 눌러도 작동이 안 돼요 등)\n\n📷 고객님, 정확한 불량 증상 확인을 위해\n번거로우시겠지만 아래 3가지가 모두 확인되도록 촬영 부탁드려요.\n\n1️⃣ 충전기(어댑터) 정격전압의 ( 5V 2A or 5V 1A ) 표시\n2️⃣ 충전 시 사용된 케이블\n3️⃣ 케이블선 제거 후 제품 버튼을 눌러도 작동하지 않는 장면"}, {"i": 10, "html": "고객님, 첨부해주신 사진/영상은 확인되었어요💙\n다만, 정격전압 확인이 어려워 어댑터의 ( 5V 2A or 5V 1A ) 표기가 보이도록 추가 촬영 부탁드려요 🙏🏽\n\n※ 적정 정격전압이 아닌 충전기 사용 시 제품 작동 이상이나 고장의 원인이 될 수 있어 확인이 필요한 점 양해 부탁드려요.\n\n※ 숫자와 표기가 선명하게 보이도록 가까이서 촬영 부탁드려요."}, {"i": 11, "html": "📷 고객님, 정확한 불량 증상 확인을 위해\n번거로우시겠지만 아래 2가지가 모두 확인되도록 촬영 부탁드려요.\n\n1️⃣ 불량 증상이 나타나는 장면 (작동 시도 영상)\n2️⃣ 충전기(어댑터) 정격전압의 5V 2A 표시\n\n※ 정격전압이 아닌 충전기 사용 시 제품 오작동 및 고장의 원인이 될 수 있어 확인이 필요한 점 양해 부탁드려요."}, {"i": 12, "html": "고객님, 번거로우시겠지만 수령하신 제품의 (스크래치·이물질) 상태가 확인되도록 사진을 보내주시면 빠르게 확인 후 안내드릴게요. 💙"}, {"i": 13, "html": "제품 (스크래치·이물질)의 경우, 제품 수령 후 영업일 기준 7일 이내에 문의 주셔야 처리가 가능해요.\n고객님 주문 건의 경우 접수 가능 기간이 경과되어 처리가 어려운 점 양해 부탁드려요. 💧"}, {"i": 14, "html": "고객님, 앞서 안내드린 것처럼 제품 (스크래치·이물질)의 경우, 제품 수령 후 영업일 기준 7일 이내에 문의 주셔야 처리가 가능해요.\n다만, 불편하셨던 상황 충분히 이해되어 이번 건은 예외적으로 도와드리겠습니다.\n\n번거로우시겠지만, 수령하신 제품의 스크래치·이물질 상태가 확인되도록 사진 전송 부탁드려요.\n확인 후 안내드릴게요. 💙"}, {"i": 15, "html": "불편을 드려 죄송합니다. 🙏🏻\n새 제품으로 교환 또는 반품 중 원하시는 방식으로 도움드리고 있어요.\n어떤 방법으로 진행해 드릴까요?💙"}, {"i": 16, "html": "고객님, 번거로우시겠지만 수령하신 제품의 구성품 전체가 확인되도록 사진을 보내주시면\n빠르게 확인 후 안내드릴게요. 💙"}, {"i": 17, "html": "구성품 누락의 경우, 제품 수령 후 영업일 기준 7일 이내에 문의 주셔야 처리가 가능해요.\n고객님 주문 건의 경우 접수 가능 기간이 경과되어 처리가 어려운 점 양해 부탁드려요. 💧"}, {"i": 18, "html": "고객님, 앞서 안내드린 것처럼 구성품 누락의 경우, 제품 수령 후 영업일 기준 7일 이내에 문의 주셔야 처리가 가능해요.\n다만, 불편하셨던 상황 충분히 이해되어 이번 건은 예외적으로 도와드리겠습니다.\n\n번거로우시겠지만, 수령하신 제품의 구성품 전체가 확인되도록 사진 전송 부탁드려요.\n확인 후 안내드릴게요. 💙"}, {"i": 19, "html": "확인해 주셔서 감사해요. 💙\n이용에 불편을 드려 정말 죄송합니다. 🙏🏻\n누락된 (구성품명)은 재출고로 진행해 드리겠습니다."}, {"i": 21, "html": "확인해 주셔서 감사해요. 💙\n\n🚚 재출고 일정 안내드릴게요.\n\n· 출고 : 영업일 2일 이내\n· 배송 : 접수일로부터 영업일 5~6일 소요\n· 택배사 : CJ대한통운\n\n※ 구성품만 별도 출고되는 경우에는 다소 시간이 소요될 수 있는 점 양해 부탁드려요."}, {"i": 22, "html": "전액 환불 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n\n✍🏽 택배 박스 윗면에 <b>[ 불량 / CJ대한통운 / 셀올로지 ]</b> 표기 부탁드려요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우, 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요."}, {"i": 23, "html": "환불은 아래 절차를 거쳐 진행되며,\n영업일 기준 약 6~8일 정도 소요돼요.\n\n📦 제품 수거 → 검수 → 반품 완료 (환불 승인)\n\n결제수단에 따라 실제 카드 승인 취소(환불 완료)까지는\n반품 완료 시점으로부터 영업일 기준 3~6일 추가 소요될 수 있어요.\n\n이용에 불편을 드려 다시 한 번 죄송합니다. 🙏🏻"}, {"i": 24, "html": "환불은 아래 절차를 거쳐 진행되며,\n영업일 기준 약 6~8일 정도 소요돼요.\n📦 제품 수거 → 검수 → 반품 완료 (환불 승인)\n\n다만, (결제수단 안내 - 무통장 입금 or 가상계좌 결제)로 결제해 주신 점 확인되어,\n환불을 위해 아래 계좌 정보 전달해 주세요.\n\n🏦 은행 / 계좌번호 / 예금주\n\n이용에 불편을 드려 다시 한 번 죄송합니다. 🙏🏻"}, {"i": 25, "html": "정보 확인해 주셔서 감사해요. 💙\n해당 계좌로 환불 계좌 등록이 완료되었어요.\n\n💸 입금 안내\n실제 반품 완료 처리 후 영업일 기준 1~2일 내 입금 예정\n\n※ 은행 점검 시간 또는 공휴일에 따라 입금이 지연될 수 있어요."}, {"i": 26, "html": "교환 받으신 제품에서도 동일한 증상이 발생하여 많이 당황스러우셨을 것 같아요.\n다시 한 번 불편을 드리게 된 점 진심으로 사과드려요. 💧"}, {"i": 27, "html": "불편을 드려 죄송합니다. 🙏🏻\n새 제품으로 교환 또는 반품 중 원하시는 방식으로 도움드리고 있어요.\n어떤 방법으로 진행해 드릴까요?💙"}, {"i": 28, "html": "불량 증상 확인되어 교환 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n※ 사은품·증정품 및 그 외 구매한 부속품과 제품은 보내지 않으셔도 돼요.\n\n✍🏽 택배 박스 윗면에 <b>[ 불량 / CJ대한통운 / 셀올로지 ]</b> 표기 부탁드려요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우, 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요."}, {"i": 30, "html": "🚚 교환 제품 재출고 일정 안내드릴게요.\n\n· 출고 : 오늘 출고 예정\n· 배송 : 출고일로부터 영업일 기준 2~3일 소요\n· 택배사 : CJ대한통운"}, {"i": 31, "html": "🚚 교환 제품 재출고 일정 안내드릴게요.\n\n· 출고 : 오늘 출고 마감으로 내일 출고 예정\n· 배송 : 출고일로부터 영업일 기준 2~3일 소요\n· 택배사 : CJ대한통운"}, {"i": 32, "html": "🚚 교환 제품 재출고 일정 안내드릴게요.\n\n· 출고 : 오늘 출고 마감으로 차주 월요일 출고 예정\n· 배송 : 출고일로부터 영업일 기준 2~3일 소요\n· 택배사 : CJ대한통운\n\n※ 주말/공휴일 출고 미진행"}, {"i": 33, "html": "불량 증상 확인되어 전액 환불 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n\n✍🏽 택배 박스 윗면에 <b>[ 불량 / CJ대한통운 / 셀올로지 ]</b> 표기 부탁드려요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우, 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요."}, {"i": 34, "html": "불량 증상 확인되어 부분 환불 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n※ 사은품·증정품 및 그 외 구매한 부속품과 제품은 보내지 않으셔도 돼요.\n\n✍🏽 택배 박스 윗면에 <b>[ 불량 / CJ대한통운 / 셀올로지 ]</b> 표기 부탁드려요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우, 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요."}, {"i": 35, "html": "전액 환불 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n\n✍🏽 불량 제품은 박스 윗면에만 <b>[ 불량 / CJ대한통운 / 셀올로지 ]</b> 표기 부탁드려요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요."}, {"i": 37, "html": "네이버를 통해 반품 기사님을 신청해 주신 점 확인되었어요. 💙\n미개봉 제품은 전체 다시 택배 박스에 포장해 주시고, 기사님 방문 시 전달해 주시면 수거가 진행될 예정이에요."}, {"i": 38, "html": "환불은 아래 절차를 거쳐 진행되며,\n영업일 기준 약 6~8일 정도 소요돼요.\n\n📦 제품 수거 → 검수 → 반품 완료 (환불 승인)\n\n결제수단에 따라 실제 카드 승인 취소(환불 완료)까지는\n반품 완료 시점으로부터 영업일 기준 3~6일 추가 소요될 수 있어요.\n\n이용에 불편을 드려 다시 한 번 죄송합니다. 🙏🏻"}, {"i": 39, "html": "환불은 아래 절차를 거쳐 진행되며,\n영업일 기준 약 6~8일 정도 소요돼요.\n📦 제품 수거 → 검수 → 반품 완료 (환불 승인)\n\n다만, (결제수단 안내 - 무통장 입금 or 가상계좌 결제)로 결제해 주신 점 확인되어,\n환불을 위해 아래 계좌 정보 전달해 주세요.\n\n🏦 은행 / 계좌번호 / 예금주\n\n이용에 불편을 드려 다시 한 번 죄송합니다. 🙏🏻"}, {"i": 40, "html": "정보 확인해 주셔서 감사해요. 💙\n해당 계좌로 환불 계좌 등록이 완료되었어요.\n\n💸 입금 안내\n실제 반품 완료 처리 후 영업일 기준 1~2일 내 입금 예정\n\n※ 은행 점검 시간 또는 공휴일에 따라 입금이 지연될 수 있어요."}, {"i": 41, "html": "셀올로지 디바이스의 AS 품질 보증 기간은 상품 수령일 기준 1년이며, 이는 무상·유상 AS를 모두 포함한 전체 기간입니다.\n\n상세 AS 기준은 아래와 같아요.\n\n■ 상품 수령 후 6개월 이내\n • 제품 자체 고장 → 무상 AS\n • 소비자 과실 → 유상 AS (유상 교환)\n\n■ 상품 수령 후 6개월 ~ 1년 이내\n • 원인 불문 → 유상 AS (유상 교환)\n\n셀올로지의 유상 AS는 동일한 새 제품 교환으로 진행돼요.\n\n✅ 기존 제품은 별도 회수 없이,\n고객님께서 자체 폐기해 주시면 감사하겠습니다."}, {"i": 42, "html": "제품을 수령하신 지 1년이 경과하여 공식 품질보증기간은 종료된 것으로 확인돼요.\n\n다만 보증기간이 지나 제품에 대한 서비스를 받지 못하신 채 그대로 폐기하시거나, 새 제품을 다시 구매하시기에는 비용적으로 많이 부담스러우실 것 같아요.\n\n이러한 고객님의 부담을 덜어드리고자, 보증기간이 경과한 제품이라도 유상 AS(유상 교환) 서비스를 통해 지속해서 제품을 사용하실 수 있도록 도와도와드리려고 해요."}, {"i": 43, "html": "우선 {주문일시} 주문 건으로 무상 보증기간이 경과하여,\n제품 불량 확인 후 유상AS로만 접수 가능한 점 양해 부탁드려요.\n\n결제는 무통장 입금으로만 가능하며,\n배송비 3,000원을 포함해 총 ({제품별 유상금액}+3000)원입니다.\n\n이 부분 진행 의사가 있다 하시면\n\n▶ 기업은행 078-219021-04-021 (예금주: 더마)\n\n위 계좌로 송금해 주신 다음\n[입금자 성함, 수령인 성함, 주소, 핸드폰번호]를 답장으로 말씀해 주세요."}, {"i": 44, "html": "고객님, 기존 제품 회수도 가능하나,\n회수 진행 시 수거비 3,000원이 추가돼요.\n\n이 경우 왕복 배송비 6,000원(수거+배송)을 포함해 총 {(제품별 유상금액) + 6000}원입니다.\n\n기존 제품 회수까지 함께 진행해 드릴까요?"}, {"i": 45, "html": "고객님, 유상 교환 비용이 부담스럽게 느껴지실 수 있는 점 충분히 충분히 이해합니다. 🥲\n\n셀올로지 제품의 AS 품질보증기간은 상품 수령일로부터 1년이며, 해당 기간 내에는 품질보증 기준에 따라 무상 또는 유상 AS를 제공하고 있어요.\n다만, 품질보증기간이 경과한 이후에도 제품을 계속 사용하고자 하시는 고객님들을 위해 유상 AS (유상 교환 서비스)를 운영하고 있어요.\n\n현재 안내드린 금액은 품질보증기간 경과 후 유상 교환 서비스를 이용하실 때 적용되는 비용인 점 양해 부탁드려요."}, {"i": 46, "html": "🚚 입금이 정상적으로 확인되어 새 제품 출고를 진행해 드리겠습니다.\n\n· 출고 : 오늘 출고 예정\n· 배송 : 출고일로부터 영업일 기준 2~3일 소요\n· 택배사 : CJ대한통운\n\n※ 제품의 안전한 사용을 위해 동봉된 사용설명서와 정격 전압 어댑터(전용 케이블) 사용을 꼭 안내드려요."}, {"i": 47, "html": "🚚 입금이 정상적으로 확인되어 새 제품 출고를 진행해 드리겠습니다.\n\n· 출고 : 오늘 출고 마감으로 내일 출고 예정\n· 배송 : 출고일로부터 영업일 기준 2~3일 소요\n· 택배사 : CJ대한통운\n\n※ 제품의 안전한 사용을 위해 동봉된 사용설명서와 정격 전압 어댑터(전용 케이블) 사용을 꼭 안내드려요."}, {"i": 48, "html": "🚚 입금이 정상적으로 확인되어 새 제품 출고를 진행해 드리겠습니다.\n\n· 출고 : 오늘 출고 마감으로 차주 월요일 출고 예정\n· 배송 : 출고일로부터 영업일 기준 2~3일 소요\n· 택배사 : CJ대한통운\n\n※ 주말/공휴일 출고 미진행\n※ 제품의 안전한 사용을 위해 동봉된 사용설명서와 정격 전압 어댑터(전용 케이블) 사용을 꼭 안내드려요."}, {"i": 49, "html": "고객님, 안내드린 계좌로 입금이 확인되지 않아 이번 유상 교환 접수는 종료돼요.\n\n편하게 고민해 보시고 의사가 있다 하시면, 위 안내드린 계좌에 입금해 주신 후 다시 문의 부탁드려요. 💙"}, {"i": 50, "html": "고객님, 현재 해당 제품은 단종되어 동일 제품으로는 교환이 어려운 점 양해 부탁드려요.\n\n다만 현재 판매 중인 제품 가운데 사용하시던 제품의 기능과 사용 목적을 종합적으로 고려하여 가장 유사한 (추천 제품명)을 추천드려요.\n\n사용을 원하신다면, (추천 제품명)을 품질보증기간(1년) 이내 유상 교환 기준을 적용한 ({1년 이내 기준 유상금액}+3000)원으로 접수 도와드릴게요.\n\n아래 주요 기능과 셀올로지 공식몰 판매 페이지를 확인해 보시고, 편하게 말씀해 주세요.\n\n(셀올로지 자사몰 추천 제품 판매 페이지 바로가기 첨부)\n(채널톡 내 부위별 제품 주요 차이점 이미지 첨부)"}, {"i": 51, "html": "네, 고객님. 이해해 주셔서 감사해요. 💙\n구매를 원하시는 제품 금액과 배송비를 아래 계좌로 입금해 주시면 확인 후 출고를 도와드릴게요.\n\n💳 입금 금액\n• 배송비 : 3,000원\n• (제품명) : (품질보증기간 1년 이내 유상 교환 금액)\n🏦 기업은행 078-219021-04-021 (예금주 : 더마)\n\n입금 후 입금자명을 말씀해 주시면 확인 후 접수 도와드릴게요."}, {"i": 53, "html": "고객님, 다시 한번 불편을 드려 죄송합니다. 🙏🏻\n다른 제품으로 교환을 원치 않으시다면, 구입가를 공식몰 포인트로 환급해 드리겠습니다.\n포인트는 주문하신 계정과 동일한 계정으로 지급되며, 지급까지는 영업일 기준 1~2일 정도 소요돼요."}, {"i": 54, "html": "🚚 교환 제품 재출고 일정 안내드릴게요.\n\n· 출고 : 오늘 출고 예정\n· 배송 : 출고일로부터 영업일 기준 2~3일 소요\n· 택배사 : CJ대한통운"}, {"i": 55, "html": "🚚 교환 제품 재출고 일정 안내드릴게요.\n\n· 출고 : 오늘 출고 마감으로 내일 출고 예정\n· 배송 : 출고일로부터 영업일 기준 2~3일 소요\n· 택배사 : CJ대한통운"}, {"i": 56, "html": "🚚 교환 제품 재출고 일정 안내드릴게요.\n\n· 출고 : 오늘 출고 마감으로 차주 월요일 출고 예정\n· 배송 : 출고일로부터 영업일 기준 2~3일 소요\n· 택배사 : CJ대한통운\n\n※ 주말/공휴일 출고 미진행"}, {"i": 57, "html": "고객님, 현재 해당 제품은 단종되어 동일 제품으로는 교환이 어려운 점 양해 부탁드려요.\n\n다만 현재 판매 중인 제품 가운데 사용하시던 제품의 기능과 사용 목적을 종합적으로 고려하여 가장 유사한 (추천 제품명)을 추천드려요.\n\n사용을 원하신다면, (추천 제품명)을 품질보증기간(1년) 경과 유상 교환 기준을 적용한 ({1년 경과 기준 유상금액}+3000)원으로 접수 도와드릴게요.\n\n아래 주요 기능과 셀올로지 공식몰 판매 페이지를 확인해 보시고, 편하게 말씀해 주세요.\n\n(셀올로지 자사몰 추천 제품 판매 페이지 바로가기 첨부)\n(채널톡 내 부위별 제품 주요 차이점 이미지 첨부)"}, {"i": 58, "html": "네, 고객님. 이해해 주셔서 감사해요. 💙\n\n구매를 원하시는 제품 금액과 배송비를 아래 계좌로 입금해 주시면 확인 후 출고를 도와드릴게요.\n\n💳 입금 금액\n• 배송비 : 3,000원\n• (제품명) : (품질보증기간 1년 경과 유상 교환 금액)\n🏦 기업은행 078-219021-04-021 (예금주 : 더마)\n\n입금 후 입금자명을 말씀해 주시면 확인 후 접수 도와드릴게요."}, {"i": 60, "html": "고객님, 다시 한번 불편을 드려 죄송합니다. 🙏🏻\n\n문의주신 주문 건은 현재 품질보증기간 1년이 경과한 상태로, 구매 당시 결제 금액과 사용 기간을 반영한 기준에 따라 환급을 도와드릴게요.\n\n고객님께 적용되는 환불 예정 금액은 (환불예정금액)원이며, 영업일 기준 1~2일 정도 소요돼요.\n환불을 위해 아래 계좌 정보 전달해 주세요.\n\n🏦 은행 / 계좌번호 / 예금주"}, {"i": 61, "html": "정보 확인해 주셔서 감사해요. 💙\n해당 계좌로 환불 계좌 등록이 완료되었어요.\n\n💸 입금 안내\n영업일 기준 1~2일 내 입금 예정\n\n※ 은행 점검 시간 또는 공휴일에 따라 입금이 지연될 수 있어요."}, {"i": 62, "html": "안녕하세요 고객님, 셀올로지 고객센터입니다.\n\n요청하신 제품의 검수 결과 안내드려요.\n\n■ 제품명 :\n■ 확인 결과 : 불량\n\n전액 환불로 처리해 드리겠습니다.\n\n카드 승인 취소(환불 완료)까지 영업일 기준 3~5일 소요될 수 있어요.\n\n추가 문의 사항이 있으실 경우 아래 채널을 통해 문의 부탁드려요.\n\n👉🏻 셀올로지 채팅상담\n(※ 월–금 09:30-17:00 / 점심시간 12:30-13:30 / 주말·공휴일 휴무)\n\n다시 한번 이용에 불편을 드려 정말 죄송합니다. 🙏🏻"}, {"i": 63, "html": "안녕하세요 고객님, 셀올로지 고객센터입니다.\n\n요청하신 제품의 '검수 결과'를 안내드려요.\n\n■ 제품명 :\n■ 확인 결과 : 불량\n\n전액 환불로 처리해 드리겠습니다.\n\n접수 시 말씀해주신 고객님 명의 계좌로 환불 등록해 드렸으며,\n입금까지 영업일 기준 1~2일 소요될 수 있는 점 참고 부탁드려요.\n\n추가 문의 사항이 있으실 경우 아래 채널을 통해 문의 부탁드려요.\n\n👉🏻 셀올로지 채팅상담\n(※ 월–금 09:30-17:00 / 점심시간 12:30-13:30 / 주말·공휴일 휴무)\n\n다시 한번 이용에 불편을 드려 정말 죄송합니다. 🙏🏻"}, {"i": 64, "html": "안녕하세요 고객님, 셀올로지 고객센터입니다.\n\n요청하신 제품의 검수 결과 안내드려요.\n\n■ 제품명 :\n■ 확인 결과 : 불량\n\n교환 제품은 접수 시 요청하신 주소로 발송 예정이에요.\n\n🚚 재출고 일정\n· 출고 : 내일 출고 예정\n· 배송 : 출고일로부터 영업일 기준 2~3일 소요\n· 택배사 : CJ대한통운\n\n추가 문의 사항이 있으실 경우 아래 채널을 통해 문의 부탁드려요.\n\n👉🏻 셀올로지 채팅상담\n(※ 월–금 09:30-17:00 / 점심시간 12:30-13:30 / 주말·공휴일 휴무)\n\n다시 한번 이용에 불편을 드려 정말 죄송합니다. 🙏🏻"}, {"i": 65, "html": "안녕하세요 고객님, 셀올로지 고객센터입니다.\n\n요청하신 제품의 검수 결과 안내드려요.\n\n■ 제품명 :\n■ 확인 결과 : 정상\n\n※ 정상 제품은 수거 시 등록된 주소로 재발송 진행 예정이며,\n시간이 다소 소요되어 불편을 드린 점 정말 죄송합니다. 🙏🏻\n\n추가 문의 사항이 있으실 경우 아래 채널을 통해 문의 부탁드려요.\n\n👉🏻 셀올로지 채팅상담\n(※ 월–금 09:30-17:00 / 점심시간 12:30-13:30 / 주말·공휴일 휴무)\n\n다시 한번 이용에 불편을 드려 정말 죄송합니다. 🙏🏻"}, {"i": 66, "html": "제품 사용 후 기대하신 만족을 드리지 못해 정말 죄송합니다. 🙏🏻"}, {"i": 67, "html": "고객님, 번거로우시겠지만\n불량으로 의심되는 증상에 대해 조금 더 자세히 말씀해 주실 수 있을까요?\n\n말씀해 주신 내용을 바탕으로 정확하게 안내 도와드릴게요. 💙"}, {"i": 68, "html": "고객님, 버블이 잘 생성되지 않아 많이 당황스러우셨을 것 같아요. 💧\n\n혹시 사용하실 때 얼굴이나 손에 물기가 남아있는 상태에서 사용하셨을까요?\n\n율무 톡스 버블팩은 물기가 없는 마른 얼굴에 사용해야 버블이 정상적으로 생성돼요.\n물기가 있는 상태에서 사용하시면 버블이 약하게 올라오거나 생성되지 않을 수 있어요.\n\n번거로우시겠지만, 아래 순서대로 다시 한번 사용해 보시길 부탁드려요.\n\n📋 올바른 사용 방법\n\n① 세안 후 얼굴의 물기를 완전히 닦아냅니다.\n② 물기가 없는 얼굴에 적당량을 골고루 펴 발라줍니다.\n③ 약 2~3분 후 버블이 충분히 올라오면, 손에 물을 살짝 묻혀 부드럽게 롤링하며 마사지한 뒤 미온수로 깨끗하게 헹궈주세요.\n\n위와 같이 물기가 없는 상태에서 사용하셨음에도 버블이 전혀 생성되지 않는다면, 다시 말씀해 주세요.\n제품 상태를 빠르게 확인하여 안내 도와드릴게요. 💙"}, {"i": 69, "html": "고객님, 번거로우시겠지만 말씀해주신 증상이 확인될 수 있는 사진이나 영상을 보내주실 수 있을까요?\n보내주신 자료를 확인한 후 정확한 안내 도와드릴게요. 💙"}, {"i": 70, "html": "불편을 드려 죄송합니다. 🙏🏻\n새 제품으로 교환 또는 반품 중 원하시는 방식으로 도움드리고 있어요.\n어떤 방법으로 진행해 드릴까요?💙"}, {"i": 71, "html": "불량 증상 확인되어 교환 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n※ 사은품·증정품 및 그 외 구매한 부속품과 제품은 보내지 않으셔도 돼요.\n\n✍🏽 택배 박스 윗면에 <b>[ 불량 / CJ대한통운 / 셀올로지 ]</b> 표기 부탁드려요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우, 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요."}, {"i": 73, "html": "🚚 교환 제품 재출고 일정 안내드릴게요.\n\n· 출고 : 오늘 출고 예정\n· 배송 : 출고일로부터 영업일 기준 2~3일 소요\n· 택배사 : CJ대한통운"}, {"i": 74, "html": "🚚 교환 제품 재출고 일정 안내드릴게요.\n\n· 출고 : 오늘 출고 마감으로 내일 출고 예정\n· 배송 : 출고일로부터 영업일 기준 2~3일 소요\n· 택배사 : CJ대한통운"}, {"i": 75, "html": "🚚 교환 제품 재출고 일정 안내드릴게요.\n\n· 출고 : 오늘 출고 마감으로 차주 월요일 출고 예정\n· 배송 : 출고일로부터 영업일 기준 2~3일 소요\n· 택배사 : CJ대한통운\n\n※ 주말/공휴일 출고 미진행"}, {"i": 76, "html": "불량 증상 확인되어 전액 환불 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n\n✍🏽 택배 박스 윗면에 <b>[ 불량 / CJ대한통운 / 셀올로지 ]</b> 표기 부탁드려요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우, 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요."}, {"i": 77, "html": "불량 증상 확인되어 부분 환불 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n※ 사은품·증정품 및 그 외 구매한 부속품과 제품은 보내지 않으셔도 돼요.\n\n✍🏽 택배 박스 윗면에 <b>[ 불량 / CJ대한통운 / 셀올로지 ]</b> 표기 부탁드려요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우, 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요."}, {"i": 78, "html": "전액 환불 접수 도와드릴게요.\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상: {상담마다 회수가 필요한 제품을 확인하여 직접 기재}\n※ 회수 대상 제품의 구성품(케이블·설명서 등)도 모두 함께 포장해 주세요.\n\n✍🏽 불량 제품은 박스 윗면에만 <b>[ 불량 / CJ대한통운 / 셀올로지 ]</b> 표기 부탁드려요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요."}, {"i": 80, "html": "네이버를 통해 반품 기사님을 신청해 주신 점 확인되었어요. 💙\n미개봉 제품은 전체 다시 택배 박스에 포장해 주시고, 기사님 방문 시 전달해 주시면 수거가 진행될 예정이에요."}, {"i": 81, "html": "환불은 아래 절차를 거쳐 진행되며,\n영업일 기준 약 6~8일 정도 소요돼요.\n\n📦 제품 수거 → 검수 → 반품 완료 (환불 승인)\n\n결제수단에 따라 실제 카드 승인 취소(환불 완료)까지는\n반품 완료 시점으로부터 영업일 기준 3~6일 추가 소요될 수 있어요.\n\n이용에 불편을 드려 다시 한 번 죄송합니다. 🙏🏻"}, {"i": 82, "html": "환불은 아래 절차를 거쳐 진행되며,\n영업일 기준 약 6~8일 정도 소요돼요.\n📦 제품 수거 → 검수 → 반품 완료 (환불 승인)\n\n다만, (결제수단 안내 - 무통장 입금 or 가상계좌 결제)로 결제해 주신 점 확인되어,\n환불을 위해 아래 계좌 정보 전달해 주세요.\n\n🏦 은행 / 계좌번호 / 예금주\n\n이용에 불편을 드려 다시 한 번 죄송합니다. 🙏🏻"}, {"i": 83, "html": "정보 확인해 주셔서 감사해요. 💙\n해당 계좌로 환불 계좌 등록이 완료되었어요.\n\n💸 입금 안내\n실제 반품 완료 처리 후 영업일 기준 1~2일 내 입금 예정\n\n※ 은행 점검 시간 또는 공휴일에 따라 입금이 지연될 수 있어요."}, {"i": 84, "html": "네, 고객님. (쿠팡 또는 네이버)를 통해 회수 진행 중인 점 확인되었어요.\n다만, 상품이 물류센터에 입고된 뒤 검수 절차를 거쳐야 하므로 즉시 처리는 어려운 점 양해 부탁드려요. 💙\n\n회수 완료 후 영업일 기준 2~3일 정도 소요될 수 있으니 참고 부탁드려요."}, {"i": 85, "html": "고객님께서 말씀해주신 증상을 기준으로 검수 도와드릴 예정이에요.\n\n번거로우시겠지만\n불량 증상에 대해 조금 더 자세히 말씀해주실 수 있을까요?\n\n말씀해 주신 내용을 바탕으로 정확한 접수 도와드릴게요. 💙\n\n예: 충전했는데 전원이 켜지지 않음 / 버튼 눌러도 반응 없음 등"}, {"i": 86, "html": "물류센터로 고객님의 제품이 입고되면,\n접수해 주신 증상을 바탕으로 검수를 진행하여 최종 불량 여부를 확인하게 돼요.\n\n📦 제품 수거 → 검수 → 반품 완료 (환불 승인)\n\n검수는 회수 완료 후 영업일 기준 2~3일 정도 소요되며,\n불량으로 확인될 경우 문자 안내 후 결제하신 수단으로 환불을 도와드릴게요.\n\n최대한 빠르게 처리될 수 있도록 노력하겠습니다. 🙂\n\n※ 검수 결과는 문자로 별도 안내드려요.\n※ 정상 제품으로 확인될 경우에는 제품이 고객님께 반송될 수 있어요."}, {"i": 87, "html": "네, 고객님. (쿠팡 또는 네이버)를 통해 회수 진행 중인 점 확인되었어요.\n상품이 물류센터에 입고되면, 말씀해주신 증상을 기준으로 검수를 진행할 예정이에요.\n\n번거로우시겠지만, 어떤 증상이 있었는지 조금 더 자세히 알려주시면 감사하겠습니다💙"}, {"i": 88, "html": "고객님께서 말씀해 주신 불량 증상을 바탕으로 교환 처리 도와드릴게요.\n이용에 불편을 드려 정말 죄송합니다. 🙏🏻"}],};
  function closeOf(s,start){var depth=0,re=/<div\b|<\/div>/g;re.lastIndex=start;var m;while((m=re.exec(s))){depth+=(m[0]==='</div>'?-1:1);if(depth===0)return re.lastIndex;}return s.length;}
  Object.keys(MAP).forEach(function(key){
    var s=CONTENT[key]; if(!s) return;
    var re=/<div class="(?:macro-body|subcard-body)">/g,mm,list=[];
    while((mm=re.exec(s))){list.push({open:mm.index,innerStart:mm.index+mm[0].length});}
    var reps=MAP[key].filter(function(x){return x.i<list.length;}).slice().sort(function(a,b){return b.i-a.i;});
    reps.forEach(function(rep){var it=list[rep.i];var end=closeOf(s,it.open);s=s.slice(0,it.innerStart)+rep.html+s.slice(end-6);});
    CONTENT[key]=s;
  });
})();


/* ===== CO_TONE_FINAL : 코코다움 전체 템플릿 톤앤매너(F열) 반영 — 최종 엑셀(코코다움_전체템플릿_톤앤매너_최종.xlsx) 기반, 2026-08-12 재생성 =====
   생성 방식: 엑셀 "기존 템플릿"(E열) ↔ 현재 index.html 각 macro-body/subcard-body 텍스트를 순서 정렬 + 유사도(difflib) 검증으로 1:1 매칭 후,
   "톤앤매너 반영 템플릿"(F열) 텍스트로 전량 교체. 온점(.) 뒤 이모지 붙는 경우 공백 1칸 규격 반영 완료.
   대상: 단순변심 교환(9) · 단순변심 반품(14) · 100%환불이벤트(31) · 부작용 VOC(19) = 총 73건. (100%환불이벤트 카테고리 내 엑셀에 없는 안내문구 1건은 원문 유지)
   ⚠️ 이 파일은 검토용 사본입니다. cs_template/index.html(본진, git 추적)에는 반영되지 않았습니다. 승인 후 본진에 덧씌워야 합니다. */
;(function(){
  var MAP={"cocodaum_exchange": [{"i": 0, "html": "교환은 기존 제품을 회수한 뒤 입고 및 검수가 완료되면, 원하시는 제품으로 다시 보내드리는 방식이에요.\n입고 및 검수에는 영업일 기준 6~8일 정도 소요되며, 교환 제품의 금액이 더 높은 경우에는 차액 결제가 필요해요.\n\n검수와 재출고까지 시간이 소요되는 만큼, 기존 주문은 반품으로 접수하고 원하시는 제품을 새로 주문하시는 방법을 권장드려요.\n\n어떤 방법으로 도와드리면 좋을까요?😊"}, {"i": 1, "html": "교환은 기존 제품을 회수한 뒤 입고 및 검수가 완료되면, 요청하신 제품으로 다시 보내드리는 방식이에요.\n\n제품 입고부터 검수 완료까지 영업일 기준 6~8일 정도 소요되며, 교환을 원하시는 제품의 가격이 더 높은 경우에는 차액 결제가 필요해요.\n\n이 점 너른 양해 부탁드려요. 💛"}, {"i": 2, "html": "교환 시 왕복 배송비 6,000원이 발생하며, 입금 확인 후 교환 접수를 도와드려요.\n\n✅ 교환 왕복 배송비 : 6,000원\n🏦 기업은행 078-221425-01-037 (예금주: 주식회사 올릿)\n\n입금 후 ‘입금자명’을 말씀해 주시면 확인해서 접수 도와드릴게요. 💛"}, {"i": 3, "html": "부분 교환 시 사용하실 제품은 회수하지 않으며, 해당 제품 금액은 최종 결제 금액에서 차감돼요.\n\n네이버페이 결제 건은 시스템상 부분 결제 처리가 어려워, 사용하실 제품 금액과 교환 왕복 배송비를 함께 입금해 주셔야 해요. 💛\n\n💳 입금 금액\n• 교환 왕복 배송비 : 3,000원\n• (제품명) : (가격)\n🏦 기업은행 078-221425-01-037 (예금주: 주식회사 올릿)\n\n입금 후 ‘입금자명’을 말씀해 주시면 확인해서 접수 도와드릴게요. 💛"}, {"i": 4, "html": "부분 교환 시 사용하실 제품은 회수하지 않으며, 해당 제품 금액은 최종 결제 금액에서 차감돼요.\n\n교환을 원하시는 제품에 대해서는 왕복 배송비 6,000원이 발생하며, 입금 확인 후 교환 접수를 도와드려요.\n\n✅ 교환 왕복 배송비 : 6,000원\n🏦 기업은행 078-221425-01-037 (예금주: 주식회사 올릿)\n\n입금 후 ‘입금자명’을 말씀해 주시면 확인해서 접수 도와드릴게요. 💛"}, {"i": 5, "html": "교환 접수 도와드릴게요. 💛\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상 : {상담마다 직접 회수 필요한 제품 확인하여 기재}\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요.\n\n🙋‍♀️ 마지막으로, 제품 회수와 배송은 기존 주소지로 접수해 드리면 될까요?"}, {"i": 6, "html": "부분 교환 접수 도와드릴게요. 💛\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상 : {상담마다 직접 회수 필요한 제품 확인하여 기재}\n※ 사은품·증정품 및 그 외 구매한 부속품과 제품은 보내지 않으셔도 돼요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요.\n\n🙋‍♀️ 마지막으로, 제품 회수와 배송은 기존 주소지로 접수해 드리면 될까요?"}, {"i": 7, "html": "🙋‍♀️ 마지막으로, 제품 회수와 배송은 기존 주소지로 접수해 드리면 될까요?"}, {"i": 8, "html": "📦 교환 진행 일정 안내드릴게요. 💛\n\n· 검수 및 재출고 : 제품 입고 후 영업일 기준 6~8일 소요\n· 배송 : 재출고일로부터 영업일 기준 2~3일 소요\n· 택배사 : CJ대한통운\n\n※ 주말 및 공휴일에는 검수·출고가 진행되지 않습니다."}], "cocodaum_refund": [{"i": 0, "html": "네이버페이 결제는 시스템상 반품 배송비 차감 처리가 어려워, 반품 배송비 6,000원 입금 후 반품 접수가 가능해요. 😿\n\n✅ 반품 배송비 : 6,000원\n🏦 기업은행 078-221425-01-037 (예금주: 주식회사 올릿)\n\n입금 후 ‘입금자명’을 말씀해 주시면 확인해서 접수 도와드릴게요. 💛"}, {"i": 1, "html": "반품 배송비 6,000원 제외 후 반품으로 진행해 드려요."}, {"i": 2, "html": "쿠팡 주문은 시스템상 반품 배송비 차감 처리가 어려워, 반품 배송비 6,000원 입금 후 반품 접수가 가능해요. 😿\n\n✅ 반품 배송비 : 6,000원\n🏦 기업은행 078-221425-01-037 (예금주: 주식회사 올릿)\n\n입금 후 ‘입금자명’을 말씀해 주시면 확인해서 접수 도와드릴게요. 💛"}, {"i": 3, "html": "네이버페이 결제는 시스템상 부분 취소가 어려워, 반품 배송비 3,000원과 계속 사용하실 제품의 금액을 먼저 입금해 주신 후 반품 접수가 가능해요. 😿\n\n✅ 반품 배송비 : 3,000원\n✅ (제품명) : (가격)\n🏦 기업은행 078-221425-01-037 (예금주: 주식회사 올릿)\n\n입금 후 ‘입금자명’을 말씀해 주시면 확인해서 접수 도와드릴게요. 💛"}, {"i": 4, "html": "반품 배송비 3,000원과 개봉하여 반품이 어려운 (제품명) (가격) 제외 후 반품으로 진행해 드려요."}, {"i": 5, "html": "쿠팡 주문은 시스템상 부분 취소가 어려워, 반품 배송비 3,000원과 계속 사용하실 제품의 금액을 먼저 입금해 주신 후 반품 접수가 가능해요. 😿\n수거 및 검수 완료 후 주문 금액은 전액 환불 처리돼요.\n\n💳 입금 금액\n• 반품 배송비 : 3,000원\n• (제품명) : (가격)\n🏦 기업은행 078-221425-01-037 (예금주: 주식회사 올릿)\n\n입금 후 ‘입금자명’을 말씀해 주시면 확인해서 접수 도와드릴게요. 💛"}, {"i": 6, "html": "반품 접수 도와드릴게요. 💛\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상 : {상담마다 직접 회수 필요한 제품 확인하여 기재}\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부돼요.\n\n🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?"}, {"i": 7, "html": "부분 반품 접수 도와드릴게요. 💛\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상 : {상담마다 직접 회수 필요한 제품 확인하여 기재}\n※ 사은품·증정품 및 그 외 구매한 부속품과 제품은 보내지 않으셔도 돼요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부돼요.\n\n🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?"}, {"i": 8, "html": "전액 환불 접수 도와드릴게요. 💛\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상 : {상담마다 직접 회수 필요한 제품 확인하여 기재}\n\n✍🏽 불량 제품은 박스 윗면에만 <b>[ 불량 / CJ대한통운 / 코코다움 ]</b> 표기 부탁드려요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부돼요.\n\n🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?"}, {"i": 9, "html": "🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?"}, {"i": 10, "html": "네이버를 통해 반품 기사님을 신청해 주신 점 확인되었어요. 😊\n미개봉 제품은 전체 다시 택배 박스에 포장해 주시고, 기사님 방문 시 전달해 주시면 수거가 진행될 예정이에요."}, {"i": 11, "html": "환불은 아래 절차를 거쳐 진행되며, 영업일 기준 약 6~8일 정도 소요돼요.\n\n📦 제품 수거 → 검수 → 반품 완료 (환불 승인)\n\n결제수단에 따라 실제 카드 승인 취소(환불 완료)까지는 반품 완료 시점으로부터 영업일 기준 3~6일 추가 소요될 수 있어요."}, {"i": 12, "html": "환불은 아래 절차를 거쳐 진행되며, 영업일 기준 약 6~8일 정도 소요돼요.\n\n📦 제품 수거 → 검수 → 반품 완료 (환불 승인)\n\n다만 (무통장 입금 / 가상계좌 결제)로 결제해 주신 점 확인되어, 환불을 위해 아래 계좌 정보 전달해 주세요.\n\n🏦 은행 / 계좌번호 / 예금주"}, {"i": 13, "html": "정보 확인해 주셔서 감사해요. 💛\n해당 계좌로 환불 계좌 등록이 완료되었어요.\n\n💸 입금 안내\n실제 반품 완료 처리 후 영업일 기준 1~2일 내 입금 예정\n\n※ 은행 점검 시간 또는 공휴일에 따라 입금이 지연될 수 있어요."}], "cocodaum_100refund": [{"i": 0, "html": "네, 보호자님. 제품을 급여해 보셨지만 기대하신 만족을 드리지 못해 정말 안타까워요. 😿\n\n다만 앞서 안내드린 것처럼, 개봉 후 급여하신 제품은 원칙적으로 단순 변심에 의한 반품이 어려워요.\n\n대신 코코다움 공식몰에서 처음 구매하신 보호자님께는 [100% 환불 이벤트]를 운영하고 있어요.\n상품 수령일로부터 30일간 꾸준히 급여해 보신 후에도 만족스럽지 않으신 경우, 이벤트 조건을 충족하면 환불을 신청하실 수 있어요.\n\n조금 더 꾸준히 급여해 보신 후에도 만족스럽지 않으시다면, 신청 기간 내 채팅 상담으로 문의해 주세요. 😊\n\n👉🏻 코코다움 채팅 상담 바로가기 : http://cocodaum.channel.io/"}, {"i": 1, "html": "[100% 환불 이벤트]는 제품을 30일간 꾸준히 급여하신 경우, 배송 완료 후 40일 이내 신청 가능해요. 😊\n\n해당 서비스는 첫 구매 보호자님을 위한 1회 한정 체험 혜택으로, 1회 이상 환불 이력이 있을 경우 대상에서 제외돼요.\n\n또한 구매하신 제품 구성에 따라 적용 조건이 다를 수 있으니, 자세한 내용은 아래 링크에서 꼭 확인 부탁드려요.\n\n👉🏻 100% 환불 이벤트 상세 조건 : https://cocodaum.com/21/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=12820518&t=board"}, {"i": 2, "html": "네, 보호자님. 이용에 번거로움을 드려 죄송합니다. 😿\n\n[100% 환불 이벤트] 상세 조건이 안내된 페이지도 함께 전달드려요.\n내용 확인 후 신청 기간 내 접수 부탁드려요.\n\n궁금하신 점이나 어려우신 부분이 있으시면 언제든 편하게 말씀해 주세요. 🐾\n\n👉🏻 상세 조건 : https://cocodaum.com/21/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=12820518&t=board\n👉🏻 코코다움 채팅 상담 바로가기 : http://cocodaum.channel.io/"}, {"i": 3, "html": "남겨주신 반품 사유처럼 이미 개봉·급여하신 뒤 불만족으로 반품을 원하시는 경우, 코코다움 공식몰에서 주문하신 보호자님에 한해 [100% 환불 이벤트]를 운영하고 있어요.\n\n수령 후 30일 이내에 바로 반품하는 방식이 아니라, 제품을 30일간 꾸준히 급여하신 후 수령일 기준 30~40일 이내에 접수하실 수 있어요.\n(*공식몰 주문 건에 한하여 단 1회, 상품 1종 적용 가능)\n\n[100% 환불 이벤트]는 제품을 꾸준히 급여해 보신 후에도 만족하지 못하신 경우, 수령일 기준 30~40일 이내 환불을 도와드리는 서비스예요. (*왕복 배송비 6,000원 차감)\n\n번거로우시겠지만 이벤트 신청 기간인 (주문 건별 신청 가능일자 기재)에 다시 접수해 주세요.\n현재는 보호자님의 신청 가능 기간이 아니므로, 불만족하신 경우 이벤트 기간 내 채팅 상담으로 접수 부탁드려요.\n\n👉🏻 코코다움 채팅 상담 바로가기 : http://cocodaum.channel.io/"}, {"i": 4, "html": "보호자님, 제품은 꾸준히 급여하실수록 만족도가 높다는 후기가 많아 일정 기간 꾸준히 급여해 보시길 권장드려요.\n\n안내된 방법대로 급여하셨음에도 만족스럽지 않으시다면, [100% 환불 이벤트] 신청 기간 내 문의해 주시는 경우 이벤트 조건에 맞춰 환불 절차를 안내해 드리고 있어요.\n\n저희 코코다움을 믿고 조금만 더 꾸준히 급여해 보신 후, 신청 기간 내 채팅 상담으로 접수 부탁드려요. 😊\n\n👉🏻 코코다움 채팅 상담 바로가기 : http://cocodaum.channel.io/"}, {"i": 5, "html": "개봉하여 사용하신 제품은 「전자상거래 등에서의 소비자보호에 관한 법률」 제17조 제2항에 따라, 소비자의 사용 또는 일부 소비로 재화 등의 가치가 현저히 감소한 경우에 해당하여 반품이 어려워요. 😿\n\n다만 [100% 환불 이벤트] 신청 기간 내 접수해 주시면 예외적으로 반품을 도와드리고 있으니, 해당 기간에 맞춰 신청 부탁드려요."}, {"i": 6, "html": "네, 보호자님. 이용에 번거로움을 드려 죄송합니다. 😿\n\n[100% 환불 이벤트] 상세 조건이 안내된 페이지도 함께 전달드려요.\n내용 확인 후 신청 기간 내 채팅 상담으로 접수 부탁드려요.\n\n궁금하신 점이나 어려우신 부분이 있으시면 언제든 편하게 말씀해 주세요. 🐾\n\n👉🏻 상세 조건 : https://cocodaum.com/21/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=12820518&t=board\n👉🏻 코코다움 채팅 상담 바로가기 : http://cocodaum.channel.io/"}, {"i": 7, "html": "네, 보호자님. 제품을 급여해 보셨지만 기대하신 만족을 드리지 못해 안타까워요. 😿\n\n다만 앞서 안내드린 것처럼, 개봉하여 급여하신 제품은 원칙적으로 반품이 어려워요.\n\n코코다움의 [100% 환불 이벤트]는 제품을 30일간 꾸준히 급여하신 경우에 한해, 제품 수령 후 40일 이내 신청 가능해요.\n\n보호자님의 경우 (배송 완료일) 배송 완료 기준으로 신청 가능 기간이 경과하여 환불을 도와드리기 어려운 점 양해 부탁드려요."}, {"i": 8, "html": "네, 보호자님. 제품을 급여해 보셨지만 기대하신 만족을 드리지 못해 안타까워요. 😿\n\n현재 코코다움에서는 처음 구매하신 보호자님을 위한 [100% 환불 이벤트]를 운영하고 있어요.\n수령일 기준 30일간 꾸준히 급여하신 후에도 만족하지 못하신 경우, 이벤트 조건에 따라 환불을 도와드려요.\n\n[100% 환불 이벤트] 참여를 원하신다면 바로 안내 도와드릴게요. 😊"}, {"i": 9, "html": "는 제품을 30일간 꾸준히 급여하신 경우, 배송 완료 후 40일 이내 신청 가능해요 😊\n\n해당 서비스는 첫 구매 보호자님을 위한 1회 한정 체험 혜택으로, 1회 이상 환불 이력이 있을 경우 대상에서 제외돼요. 😿\n\n또한, 구매하신 제품 구성에 따라 적용 조건이 다를 수 있으니 자세한 내용은 아래 링크를 꼭 참고 부탁드려요.\n\n👉🏻 상세 조건 확인하기 : https://cocodaum.com/21/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=12820518&t=board"}, {"i": 10, "html": "네이버페이 결제는 부분 취소가 어려워 반품 배송비 6,000원 입금 후 반품이 가능해요. 😿\n\n반품 배송비 : 6,000원\n🏦 기업은행 078-221425-01-037 (예금주: 주식회사 올릿)\n\n위 계좌로 송금해 주신 다음 ‘입금자명’을 말씀해 주시면 확인 후 도와드리겠습니다. 😊"}, {"i": 11, "html": "반품 배송비 6,000원 제외 후 반품으로 진행해 드려요."}, {"i": 12, "html": "접수 도와드릴게요. 💛\n\n📦 <b>제품 포장 안내</b>\n■ 제품 박스 전체 (남은 포·스틱 포함)\n■ 사은품·증정품(받으신 경우)\n\n✍🏽 택배 박스 윗면에 [★100% 환불★] 기재 부탁드려요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요."}, {"i": 13, "html": "보호자님, 동일한 상품을 1개 이상 구매하신 경우에는 체험용 1개 외 나머지 상품은 개봉 또는 손상 없이 보관된 경우에만 전액 환불이 가능해요.\n\n체험 상품 1개를 제외하고, 나머지 상품 모두 미개봉 상태가 맞으실까요? 확인 부탁드려요. 🐾"}, {"i": 14, "html": "네이버페이 결제는 부분 취소가 어려워 반품 배송비 6,000원 입금 후 반품이 가능해요. 😿\n\n반품 배송비 : 6,000원\n🏦 기업은행 078-221425-01-037 (예금주: 주식회사 올릿)\n\n위 계좌로 송금해 주신 다음 ‘입금자명’을 말씀해 주시면 확인 후 도와드리겠습니다. 😊"}, {"i": 15, "html": "반품 배송비 6,000원 제외 후 반품으로 진행해 드려요."}, {"i": 16, "html": "접수 도와드릴게요. 💛\n\n📦 <b>제품 포장 안내</b>\n■ 회수 대상 : {상담마다 직접 회수 필요한 제품 확인하여 기재}\n※ 사은품·증정품 및 그 외 구매한 부속품과 제품은 보내지 않으셔도 돼요.\n\n✍🏽 택배 박스 윗면에 [★100% 환불★] 기재 부탁드려요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요."}, {"i": 17, "html": "확인해 주셔서 감사해요. 💛\n\n다만, 동일 상품을 1개 이상 또는 세트로 구매하신 경우 체험 상품 1개 외에는 미개봉 상태일 때만 전액 환불이 가능해요.\n\n현재 (개봉된 박스 개수 기재)개 개봉된 상태로 확인되어, 개봉 상품에 대해서는 차감 후 환불이 가능해요.\n(상품명) (개봉된 박스 개수 기재) (금액)과 반품 배송비 6,000원을 제외한 환불 금액 안내 도와드릴게요. 💛"}, {"i": 18, "html": "네이버페이 결제는 부분 취소가 어려워, 사용하신 제품 금액과 반품 배송비를 입금해 주신 후 반품 처리가 가능해요. 😿\n\n(제품명) : (가격)\n반품 배송비 : 6,000원\n🏦 기업은행 078-221425-01-037 (예금주: 주식회사 올릿)\n\n위 계좌로 송금해 주신 다음 ‘입금자명’을 말씀해 주시면 확인 후 도와드리겠습니다."}, {"i": 19, "html": "반품 배송비 6,000원과 개봉하여 반품이 어려운 (사용할 제품명) (정가) 제외 후 반품으로 진행해 드려요."}, {"i": 20, "html": "접수 도와드릴게요. 💛\n\n📦 <b>제품 포장 안내</b>\n■ 제품 박스 전체 (남은 포·스틱 포함)\n■ 사은품·증정품(받으신 경우)\n\n✍🏽 택배 박스 윗면에 [★100% 환불★] 기재 부탁드려요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요."}, {"i": 22, "html": "구성이 다른 세트 상품을 구매해 주셨기 때문에, 각 상품을 모두 개봉해 체험하신 경우에도 왕복 배송비를 제외한 전액 환불이 가능해요."}, {"i": 23, "html": "네이버페이 결제는 부분 취소가 어려워 반품 배송비 6,000원 입금 후 반품이 가능해요. 😿\n\n반품 배송비 : 6,000원\n🏦 기업은행 078-221425-01-037 (예금주: 주식회사 올릿)\n\n위 계좌로 송금해 주신 다음 ‘입금자명’을 말씀해 주시면 확인 후 도와드리겠습니다. 😊"}, {"i": 24, "html": "반품 배송비 6,000원 제외 후 반품으로 진행해 드려요."}, {"i": 25, "html": "접수 도와드릴게요. 💛\n\n📦 <b>제품 포장 안내</b>\n■ 제품 박스 전체 (남은 포·스틱 포함)\n■ 사은품·증정품(받으신 경우)\n\n✍🏽 택배 박스 윗면에 [★100% 환불★] 기재 부탁드려요.\n\n🚚 <b>회수 안내</b>\n· 택배사 : CJ대한통운\n· 영업일 기준 2~3일 내 방문\n방문 전 택배사 알림톡 또는 택배 기사 연락이 있을 예정이며, 택배 기사 방문 시 직접 전달 또는 문 앞 보관 부탁드려요.\n\n💡 택배·제품 자체 박스가 없는 경우 대체 가능한 택배 박스에 포장해 주세요.\n⚠️ 박스 포장이 아닐 경우 수거가 거부될 수 있어요."}, {"i": 26, "html": "보호자님의 경우, 하나의 주문에서 여러 제품을 구매하신 세트 구성 형태가 아닌 개별 주문 건으로 확인되고 있어요.\n\n는 공지사항에 안내된 대로 회원당 1회만 신청 가능한 첫 구매 체험 서비스이기 때문에, 주문 1건에 한해서만 이벤트 신청이 가능한 점 양해 부탁드려요."}, {"i": 27, "html": "보호자님의 경우, 코코다움에서 제공하는 세트 구성 상품이 아닌 원하시는 제품을 개별로 선택해 구매하신 주문 건으로 확인돼요.\n\n는 공지사항에 안내된 대로, 상품명에 '세트(SET)'가 포함된 세트 구성만 '구성이 다른 세트 상품'에 해당되는 점 양해 부탁드려요."}, {"i": 28, "html": "🙋‍♀️ 마지막으로, 제품 회수는 기존 주소지로 접수해 드리면 될까요?"}, {"i": 29, "html": "환불은 아래 절차를 거쳐 진행되며, 영업일 기준 약 6~8일 정도 소요돼요.\n\n📦 제품 수거 → 검수 → 반품 완료 (환불 승인)\n\n결제수단에 따라 실제 카드 승인 취소(환불 완료)까지는 반품 완료 시점으로부터 영업일 기준 3~6일 추가 소요될 수 있어요."}, {"i": 30, "html": "환불은 아래 절차를 거쳐 진행되며, 영업일 기준 약 6~8일 정도 소요돼요.\n\n📦 제품 수거 → 검수 → 반품 완료 (환불 승인)\n\n다만, (결제수단 안내 - 무통장 입금 or 가상계좌 결제)로 결제해 주신 점 확인되어, 환불을 위해 아래 계좌 정보 전달해 주세요.\n\n🏦 은행 / 계좌번호 / 예금주"}, {"i": 31, "html": "정보 확인해 주셔서 감사해요. 💛\n해당 계좌로 환불 계좌 등록이 완료되었어요.\n\n💸 입금 안내\n실제 반품 완료 처리 후 영업일 기준 1~2일 내 입금 예정\n\n※ 은행 점검 시간 또는 공휴일에 따라 입금이 지연될 수 있어요."}]};
  function closeOf(s,start){var depth=0,re=/<div\b|<\/div>/g;re.lastIndex=start;var m;while((m=re.exec(s))){depth+=(m[0]==='</div>'?-1:1);if(depth===0)return re.lastIndex;}return s.length;}
  Object.keys(MAP).forEach(function(key){
    var s=CONTENT[key]; if(!s) return;
    var re=/<div class="(?:macro-body|subcard-body)">/g,mm,list=[];
    while((mm=re.exec(s))){list.push({open:mm.index,innerStart:mm.index+mm[0].length});}
    var reps=MAP[key].filter(function(x){return x.i<list.length;}).slice().sort(function(a,b){return b.i-a.i;});
    reps.forEach(function(rep){var it=list[rep.i];var end=closeOf(s,it.open);s=s.slice(0,it.innerStart)+rep.html+s.slice(end-6);});
    CONTENT[key]=s;
  });
})();

