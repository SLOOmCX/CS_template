/* =====================================================================
   🔗 주소(해시) 라우팅 — 지금 보고 있는 화면을 주소로 공유
   - 주소 형식: #/{메뉴}/{화면ID}/{섹션앵커}
       채팅  #/chat/slm_as/guar      유선  #/call/call_all/c_ops    게시판 #/board/{화면ID}
       작성 규칙 #/rules/macro       업데이트 내역 #/log/2026-10-29  북마크 #/bm
       홈은 해시 없음
   - 화면ID·앵커는 사이드바 데이터(__content / __sections.anchor) 그대로 사용
     → 카드명·섹션명을 바꿔도 링크 유지. ID·앵커를 바꾸면 기존 링크는 해당 메뉴 첫 화면으로 열림
   - 사이드바 클릭 시 주소 변경(뒤로가기 기록 추가), 스크롤로 섹션이 바뀌면 주소만 교체
   ===================================================================== */
(function(){
  const RAIL2SEG = { dash:"", home:"chat", call:"call", board:"board", bm:"bm", log:"log", rules:"rules" };
  const SEG2RAIL = {}; Object.keys(RAIL2SEG).forEach(k=>{ if(RAIL2SEG[k]) SEG2RAIL[RAIL2SEG[k]] = k; });
  let applying = false;      // 주소 → 화면 적용 중에는 기록 추가 안 함
  let spyLockUntil = 0;      // 클릭 직후 부드러운 스크롤 중에는 스크롤 연동 주소 교체 안 함

  /* 현재 화면 → 주소 */
  function routeNow(){
    const seg = RAIL2SEG[curRail];
    if (!seg) return "";
    const parts = [seg];
    if (curRail==="home" || curRail==="call" || curRail==="board"){
      if (CUR_CID){
        parts.push(CUR_CID);
        const a = document.querySelector("#tree .leaf.active");
        if (a && a.dataset.content===CUR_CID && a.dataset.anchor) parts.push(a.dataset.anchor);
      }
    } else if (curRail==="rules"){ if (typeof RULES_CUR!=="undefined") parts.push(RULES_CUR); }
    else if (curRail==="log"){ if (typeof CL_STATE!=="undefined" && CL_STATE.day) parts.push(CL_STATE.day); }
    return "#/" + parts.map(encodeURIComponent).join("/");
  }
  function writeRoute(h, replace){
    const cur = location.hash || "";
    if (cur === h) return;
    const url = location.pathname + location.search + h;
    if (replace || applying) history.replaceState(null, "", url);
    else history.pushState(null, "", url);
  }
  function syncRoute(){ writeRoute(routeNow(), false); spyLockUntil = Date.now() + 1200; }

  /* 주소 → 화면 */
  function setRail(rail){
    document.querySelectorAll(".rail-btn").forEach(x=>x.classList.toggle("active", x.dataset.rail===rail));
    curRail = rail; renderTree();
  }
  function openAncestors(el){
    let p = el.parentElement;
    while (p){ if (p.classList && (p.classList.contains("node") || p.classList.contains("sec-parent"))) p.classList.add("open"); p = p.parentElement; }
  }
  function applyRoute(){
    const parts = (location.hash||"").replace(/^#\/?/,"").split("/").filter(Boolean).map(s=>{ try{ return decodeURIComponent(s); }catch(e){ return s; } });
    const rail = SEG2RAIL[parts[0]] || "dash";
    applying = true;
    try{
      const si = document.getElementById("searchInput"); if (si) si.value = "";
      setRail(rail);
      if (rail==="home" || rail==="call" || rail==="board"){
        const cid = parts[1], anchor = parts[2];
        let done = false;
        if (cid && anchor){
          const el = [...document.querySelectorAll("#tree .leaf[data-content]")].find(l=>l.dataset.content===cid && l.dataset.anchor===anchor);
          if (el){ openAncestors(el); pickLeaf(el); el.scrollIntoView({block:"nearest"}); done = true; }
        }
        if (!done && cid && (document.querySelector(`#tree [data-content="${CSS.escape(cid)}"]`) || CONTENT[cid])){
          openTo(cid);
          if (anchor){ const t = document.getElementById(anchor); if (t) setTimeout(()=>t.scrollIntoView({block:"start"}), 30); }
          done = true;
        }
        if (!done){
          if (rail==="home") openHomeDefault();
          else if (rail==="call") openCallDefault();
          else { const f = document.querySelector("#tree .leaf"); if (f) f.click(); }
        }
      } else if (rail==="rules"){
        if (parts[1] && typeof RULES_SECTIONS!=="undefined" && RULES_SECTIONS.some(s=>s.key===parts[1])){ RULES_CUR = parts[1]; renderRules(); }
      } else if (rail==="log"){
        if (parts[1] && typeof CL_STATE!=="undefined"){ CL_STATE.day = parts[1]; renderChangelog(); }
      }
      commitView();
    } finally { applying = false; }
    spyLockUntil = Date.now() + 1200;
  }

  /* 기존 함수에 연결 */
  const _commitView = commitView;
  commitView = function(){ _commitView(); syncRoute(); };
  const _curSnap = curSnap;
  curSnap = function(){ const s = _curSnap(); s.cid = CUR_CID; s.route = routeNow(); return s; };
  const _goBack = goBack;
  goBack = function(){
    const sn = navHist[navHist.length-1];
    _goBack();
    if (sn){ CUR_CID = sn.cid || ""; writeRoute(sn.route || "", false); }
  };
  /* 스크롤로 섹션이 바뀌면 주소도 해당 섹션으로 교체(기록은 안 늘림) */
  const _spy = updateScrollSpy;
  updateScrollSpy = function(){
    _spy();
    if (applying || Date.now() < spyLockUntil) return;
    writeRoute(routeNow(), true);
  };

  window.addEventListener("popstate", applyRoute);
  if (location.hash && location.hash.length > 2) applyRoute();
  else writeRoute(routeNow(), true);
})();
