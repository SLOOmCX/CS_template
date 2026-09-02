/* =========================================================
   웹 편집기 (2026-08-28 도입)
   - 백엔드 없음. GitHub Fine-grained PAT(저장소 단위) + Contents API로 직접 커밋.
   - 실제 보안 경계는 GitHub Collaborator/Write 권한(화이트리스트). /user 조회는 UX용 신원 표시일 뿐.
   - 편집 대상: data-content-key(+data-content-brand) 속성이 붙은 매크로/서브카드 블록의 name·body만.
   - 저장 대상 브랜치: main (고정) — 배포사이트가 main을 보고 있어 즉시 반영을 위해 main에 직접 커밋함.
     개발 작업(hjpark/html-edit)과는 별도 트랙이라, hjpark/html-edit→main 병합 전엔 항상
     `git diff main hjpark/html-edit --stat`로 실제 차이 먼저 확인할 것(프로젝트 기존 표준 절차).
========================================================= */
(function(){
  "use strict";

  const REPO = "SLOOmCX/CS_template";
  const BRANCH = "main";
  const TOKEN_KEY = "olit_editor_pat";
  const API_BASE = "https://api.github.com";

  /* 브랜드(lowercase) → 데이터 상수 참조. data-content-brand 값은 transform 스크립트가
     'D_(\w+)' 매칭에서 뽑아낸 값을 소문자화한 것이라 아래 11개와 정확히 일치함. */
  const BRAND_DATA_REF = {
    sloom:      function(){ return (typeof D_SLOOM      !== "undefined") ? D_SLOOM      : null; },
    simplicare: function(){ return (typeof D_SIMPLICARE !== "undefined") ? D_SIMPLICARE : null; },
    alignlab:   function(){ return (typeof D_ALIGNLAB   !== "undefined") ? D_ALIGNLAB   : null; },
    bilba:      function(){ return (typeof D_BILBA      !== "undefined") ? D_BILBA      : null; },
    cellology:  function(){ return (typeof D_CELLOLOGY  !== "undefined") ? D_CELLOLOGY  : null; },
    cocodaum:   function(){ return (typeof D_COCODAUM   !== "undefined") ? D_COCODAUM   : null; },
    oclock:     function(){ return (typeof D_OCLOCK     !== "undefined") ? D_OCLOCK     : null; },
    drmans:     function(){ return (typeof D_DRMANS     !== "undefined") ? D_DRMANS     : null; },
    yvening:    function(){ return (typeof D_YVENING    !== "undefined") ? D_YVENING    : null; },
    marnell:    function(){ return (typeof D_MARNELL    !== "undefined") ? D_MARNELL    : null; },
    dramang:    function(){ return (typeof D_DRAMANG    !== "undefined") ? D_DRAMANG    : null; },
    shared:     function(){ return (typeof D_SHARED     !== "undefined") ? D_SHARED     : null; }
  };

  function dataPathFor(brand){ return "js/data/" + brand + ".js"; }

  /* ---------- localStorage 토큰 ---------- */
  function getToken(){ try{ return localStorage.getItem(TOKEN_KEY); }catch(e){ return null; } }
  function setToken(t){ try{ localStorage.setItem(TOKEN_KEY, t); }catch(e){} }
  function clearToken(){ try{ localStorage.removeItem(TOKEN_KEY); }catch(e){} }

  /* ---------- UTF-8 안전 base64 ---------- */
  function b64DecodeUtf8(b64){
    const binary = atob(String(b64).replace(/\s/g,""));
    const bytes = new Uint8Array(binary.length);
    for(let i=0;i<binary.length;i++) bytes[i]=binary.charCodeAt(i);
    return new TextDecoder("utf-8").decode(bytes);
  }
  function b64EncodeUtf8(str){
    const bytes = new TextEncoder().encode(str);
    let binary="";
    for(let i=0;i<bytes.length;i++) binary+=String.fromCharCode(bytes[i]);
    return btoa(binary);
  }

  /* ---------- 모달 공통 ---------- */
  function closeModal(){
    const ov = document.getElementById("editorModalOverlay");
    if(ov) ov.remove();
  }
  function openModal(innerHtml){
    closeModal();
    const ov = document.createElement("div");
    ov.className = "editor-modal-overlay";
    ov.id = "editorModalOverlay";
    ov.innerHTML = '<div class="editor-modal">' + innerHtml + '</div>';
    ov.addEventListener("mousedown", function(e){ if(e.target===ov) closeModal(); });
    document.body.appendChild(ov);
    return ov;
  }

  /* ---------- PAT 입력 모달 ---------- */
  function promptForToken(){
    return new Promise(function(resolve){
      const ov = openModal(
        '<h3>GitHub 개인 접근 토큰(PAT) 입력</h3>' +
        '<div class="editor-meta">최초 1회만 입력하면 이 브라우저에 저장되어 이후 자동으로 사용됩니다.</div>' +
        '<label>Fine-grained personal access token</label>' +
        '<input type="password" id="editorPatInput" placeholder="github_pat_로 시작하는 토큰 붙여넣기" autocomplete="off">' +
        '<div class="editor-err" id="editorPatErr"></div>' +
        '<div class="editor-help">' +
          '1) <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener">GitHub 토큰 발급 페이지</a>로 이동<br>' +
          '2) Resource owner: 본인 계정 / Repository access: <b>Only select repositories</b> → <b>' + REPO + '</b> 선택<br>' +
          '3) Repository permissions → <b>Contents: Read and write</b> 로 설정 후 발급<br>' +
          '4) 발급된 토큰을 위 입력창에 붙여넣기 (토큰은 이 브라우저에만 저장되며 서버로 전송되지 않음)' +
        '</div>' +
        '<div class="editor-modal-actions">' +
          '<button class="editor-btn" id="editorPatCancel">취소</button>' +
          '<button class="editor-btn primary" id="editorPatOk">확인</button>' +
        '</div>'
      );
      const input = document.getElementById("editorPatInput");
      input.focus();
      function submit(){
        const v = input.value.trim();
        if(!v){ document.getElementById("editorPatErr").textContent="토큰을 입력해 주세요."; document.getElementById("editorPatErr").style.display="block"; return; }
        closeModal();
        resolve(v);
      }
      document.getElementById("editorPatOk").addEventListener("click", submit);
      input.addEventListener("keydown", function(e){ if(e.key==="Enter") submit(); });
      document.getElementById("editorPatCancel").addEventListener("click", function(){ closeModal(); resolve(null); });
      ov.addEventListener("mousedown", function(e){ if(e.target===ov) resolve(null); });
    });
  }

  /* ---------- GitHub /user 신원 확인 (UX 표시용, 실제 보안 경계 아님) ---------- */
  function fetchGithubUser(token){
    return fetch(API_BASE + "/user", {
      headers:{
        "Authorization":"token " + token,
        "Accept":"application/vnd.github+json"
      }
    }).then(function(r){ return r.ok ? r.json() : null; }).catch(function(){ return null; });
  }

  function renderUserBadge(user){
    const badge = document.getElementById("editorUserBadge");
    if(!badge) return;
    if(!user){ badge.style.display="none"; badge.innerHTML=""; return; }
    badge.style.display="flex";
    badge.innerHTML = '<b>' + (user.login||"?") + '</b>님으로 인증됨 · <button type="button" class="editor-logout" id="editorLogoutBtn">PAT 삭제</button>';
    const lb = document.getElementById("editorLogoutBtn");
    if(lb) lb.addEventListener("click", function(){
      clearToken();
      renderUserBadge(null);
    });
  }

  let cachedUser = null;

  /* 토큰이 이미 저장돼 있으면 조용히 검증만 하고, 없으면 아무 것도 하지 않음(편집 시도 시에만 요청) */
  function silentCheck(){
    const t = getToken();
    if(!t) return;
    fetchGithubUser(t).then(function(user){
      if(user){ cachedUser = user; renderUserBadge(user); }
      else { clearToken(); renderUserBadge(null); }
    });
  }

  /* 편집 시도 시 호출 — 토큰 없으면 모달, 있으면 검증 후 반환 */
  function ensureAuth(){
    const existing = getToken();
    const chain = existing ? Promise.resolve(existing) : promptForToken().then(function(t){ if(t) setToken(t); return t; });
    return chain.then(function(token){
      if(!token) return null;
      return fetchGithubUser(token).then(function(user){
        if(!user){
          clearToken();
          renderUserBadge(null);
          alert("GitHub 인증에 실패했습니다. 토큰이 유효한지, Contents 쓰기 권한이 있는지 확인 후 다시 시도해 주세요.");
          return null;
        }
        cachedUser = user;
        renderUserBadge(user);
        return { token: token, user: user };
      });
    });
  }

  /* ---------- 편집 패널 ---------- */
  function openEditPanel(key, brand){
    const ref = BRAND_DATA_REF[brand];
    const dataObj = ref ? ref() : null;
    if(!dataObj || !dataObj[key]){
      alert("해당 콘텐츠의 원본 데이터를 찾을 수 없습니다 (brand: " + brand + ", key: " + key + "). 페이지를 새로고침한 뒤 다시 시도해 주세요.");
      return;
    }
    const cur = dataObj[key];
    const ov = openModal(
      '<h3>콘텐츠 편집</h3>' +
      '<div class="editor-meta">' + brand + ' · ' + key + ' (라벨·본문만 수정 가능 · 태그는 변경되지 않음)</div>' +
      '<label>라벨 (name)</label>' +
      '<input type="text" id="editorNameInput" value="' + esc(String(cur.name||"")) + '">' +
      '<label>본문 (body — HTML 태그·줄바꿈 그대로 반영됨)</label>' +
      '<textarea id="editorBodyInput">' + esc(String(cur.body||"")) + '</textarea>' +
      '<div class="editor-err" id="editorSaveErr"></div>' +
      '<div class="editor-modal-actions">' +
        '<button class="editor-btn" id="editorCancelBtn">취소</button>' +
        '<button class="editor-btn primary" id="editorSaveBtn">GitHub에 저장</button>' +
      '</div>'
    );
    document.getElementById("editorCancelBtn").addEventListener("click", closeModal);
    document.getElementById("editorSaveBtn").addEventListener("click", function(){
      const newName = document.getElementById("editorNameInput").value;
      const newBody = document.getElementById("editorBodyInput").value;
      if(!newName.trim() && String(cur.name||"").trim()){
        showSaveErr("라벨(name)은 비워둘 수 없습니다.");
        return;
      }
      if(!confirm("정말 저장하시겠습니까?\n실제 운영 페이지(" + BRANCH + " 브랜치)에 바로 반영됩니다.")) return;
      saveEdit(brand, key, newName, newBody);
    });
  }

  function showSaveErr(msg){
    const el = document.getElementById("editorSaveErr");
    if(!el) return;
    el.textContent = msg;
    el.style.display = "block";
  }
  function setSaving(isSaving){
    const btn = document.getElementById("editorSaveBtn");
    if(!btn) return;
    btn.disabled = isSaving;
    btn.textContent = isSaving ? "저장 중..." : "GitHub에 저장";
  }

  /* ---------- 저장 로직 (GitHub Contents API) ---------- */
  function saveEdit(brand, key, newName, newBody){
    setSaving(true);
    ensureAuth().then(function(auth){
      if(!auth){ setSaving(false); return; }
      const path = dataPathFor(brand);
      const url = API_BASE + "/repos/" + REPO + "/contents/" + path + "?ref=" + encodeURIComponent(BRANCH);
      fetch(url, {
        headers:{ "Authorization":"token " + auth.token, "Accept":"application/vnd.github+json" }
      }).then(function(r){
        if(!r.ok) throw new Error("파일 조회 실패 (HTTP " + r.status + "). 저장소 접근 권한을 확인해 주세요.");
        return r.json();
      }).then(function(fileInfo){
        const fileText = b64DecodeUtf8(fileInfo.content);
        const m = fileText.match(/^(const\s+D_[A-Z0-9_]+\s*=\s*)([\s\S]*);\s*$/);
        if(!m) throw new Error("파일 형식을 해석할 수 없습니다 (" + path + "). 수동 확인이 필요합니다.");
        const prefix = m[1];
        let obj;
        try{ obj = JSON.parse(m[2]); }
        catch(e){ throw new Error("파일 파싱 실패: " + e.message); }
        if(!obj[key]) throw new Error("원격 파일에서 key(" + key + ")를 찾을 수 없습니다. 최신 상태와 다를 수 있으니 새로고침 후 다시 시도해 주세요.");
        obj[key].name = newName;
        obj[key].body = newBody;
        const newFileText = prefix + JSON.stringify(obj) + ";\n";
        const newContentB64 = b64EncodeUtf8(newFileText);
        const commitMsg = "웹편집기: " + brand + "/" + key + " 수정 (by " + (auth.user.login||"unknown") + ")";
        return fetch(API_BASE + "/repos/" + REPO + "/contents/" + path, {
          method:"PUT",
          headers:{
            "Authorization":"token " + auth.token,
            "Accept":"application/vnd.github+json",
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            message: commitMsg,
            content: newContentB64,
            sha: fileInfo.sha,
            branch: BRANCH
          })
        });
      }).then(function(r){
        if(!r) return; // 위에서 auth 실패 등으로 중단된 경우
        if(!r.ok){
          return r.json().catch(function(){return {};}).then(function(errBody){
            let extra = "";
            if(r.status===409) extra = " (다른 사람이 방금 같은 파일을 수정했을 수 있습니다. 새로고침 후 다시 시도해 주세요.)";
            if(r.status===403) extra = " (Contents 쓰기 권한이 없는 토큰이거나 저장소 Collaborator 권한이 없을 수 있습니다.)";
            throw new Error("저장 실패 (HTTP " + r.status + ")" + extra + (errBody.message?(" — "+errBody.message):""));
          });
        }
        closeModal();
        alert("저장 완료. 새로고침하여 변경사항을 반영합니다.");
        location.reload();
      }).catch(function(err){
        setSaving(false);
        showSaveErr(err.message || String(err));
      });
    });
  }

  /* ---------- 편집 모드 토글 + 클릭 위임 ---------- */
  function toggleEditMode(){
    const on = document.body.classList.toggle("olit-edit-mode");
    const btn = document.getElementById("editModeBtn");
    if(btn){
      btn.classList.toggle("on", on);
      btn.textContent = on ? "✏️ 편집 모드 (켜짐)" : "✏️ 편집 모드";
    }
    if(on) silentCheck();
  }

  function init(){
    const btn = document.getElementById("editModeBtn");
    if(btn) btn.addEventListener("click", toggleEditMode);

    const page = document.getElementById("page");
    if(page){
      page.addEventListener("click", function(e){
        if(!document.body.classList.contains("olit-edit-mode")) return;
        if(e.target.closest(".copy-btn")) return;
        const el = e.target.closest("[data-content-key]");
        if(!el) return;
        const key = el.getAttribute("data-content-key");
        const brand = el.getAttribute("data-content-brand");
        if(!key || !brand) return;
        e.preventDefault();
        e.stopPropagation();
        ensureAuth().then(function(auth){
          if(auth) openEditPanel(key, brand);
        });
      });
    }
    silentCheck();
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.OlitEditor = { toggleEditMode: toggleEditMode };
})();
