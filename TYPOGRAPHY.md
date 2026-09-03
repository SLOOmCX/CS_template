# CS 템플릿 타이포그래피 규칙 (2026-08-27 정립)

`index.html`의 `<style>` 블록에 실제 반영된 값 기준. 새 브랜드 콘텐츠를 작성하거나 기존 콘텐츠를 수정할 때 이 표에 없는 font-size를 새로 만들지 말고 아래 티어 중 하나를 그대로 쓸 것.

## 1. 헤딩(제목) 계층 — 7단계

| 티어 | 역할 | 클래스 | 크기 | 비고 |
|---|---|---|---|---|
| 0 | 페이지 최상단 제목 (사이드바 클릭 시 뜨는 카테고리 제목) | `.page h1` | 26px | 변경 없음. 2026-09-02에 전 브랜드 70개 `<h1>` 전수 확인, 이미 완전히 통일돼 있었음(아래 11번 참고) |
| 1-강조 | 챕터 중 특별히 큰 것(한 페이지 안의 두 번째 대주제 등) | `.sec-title.sec-major` | 22px | sec-title 계열에만 존재하는 변형 |
| 1 | 챕터 (페이지 내 "1. 2. 3." 최상위 넘버링) | `.sec-title` / `.h1lvl` | **20px** | 두 클래스가 같은 역할을 하는 중복(B그룹 브랜드는 sec-title, A그룹은 h1lvl 사용). 2026-08-27 18px 통일 → 2026-08-28 밑줄·뱃지 모양까지 시각 통일(아래 7번) → 2026-09-02 22px로 확대했다가 "너무 크다"는 피드백으로 같은 날 20px로 재조정(아래 11번). 클래스 이름 자체를 하나로 합치는 것(마크업 교체)은 아직 미착수 |
| 2-특수 | AS 플로우 대분류 전용 강조(흰 글씨 + 파란 배경 pill) | `.h2lvl.as-major` | 18px | A그룹(전자기기 등 AS 분기 복잡한 브랜드) 전용, 대응하는 B그룹 클래스 없음. 2026-09-02에 무상AS·유상AS에 더해 [단종] EDGE CASE도 이 클래스로 편입돼 총 3개 헤딩이 이 티어를 씀(아래 11번 참고) — 한때 다른 값(16.5px)으로 실험했다가 원래 스타일로 되돌림 |
| 2 / 2-강조 | 그룹 소제목 + 그룹 내 갈래/케이스 라벨 (통합됨) | `.grp-h` / `.h2lvl`(plain) / `.grp-h.grp-major` / `.h2lvl.as-sub` | **16.5px** | 원래 2단계(15px 일반 소제목 / 16.5px 갈래·케이스 라벨)로 나뉘어 있었으나 2026-09-02에 하나로 통합(아래 11번 참고). `.grp-h`·`.h2lvl`(plain)을 쓰는 전 브랜드 모든 서브헤딩에 공통 적용된 변경 |
| 3 | 유형 (A그룹 전용 심화 하위단계) | `.typ` | 15.5px | 사각 번호뱃지, B그룹엔 대응 없음 |
| 3 | 절차 (A그룹 전용 심화 하위단계) | `.h3lvl` | 15px | 무뱃지, `.typ` 하위에서 쓰임 |
| 2-1 | 그룹 소제목의 하위 소그룹 (예: "인사말" 그룹 안의 "첫인사"/"끝인사") | `.grp-h.grp-sub` | 13.5px | "공통 › 채팅 표준 응대"(`cmn_all`) 페이지에서만 실사용 — 브랜드 파일에는 없어서 최초 조사 때 놓쳤던 티어 (아래 5번 참고) |

**A그룹**(전자기기 등 AS 분기 복잡): 슬룸·알림랩·빌바·셀올로지·오클락 — `.h1lvl`/`.h2lvl`/`.h3lvl`/`.typ` 사용.
**B그룹**(AS 분기 단순): 코코다움·닥터아망·닥터맨즈·마넬·심플리케어·와이브닝 — `.sec-title`/`.grp-h`만 사용.
`.grp-h`/`.grp-h.grp-major`는 두 그룹 모두에서 공통으로 쓰임(그룹 전용 아님).

## 2. 컴포넌트 제목 라벨 — 1단계로 통일

카드/매크로/서브카드/비교카드 등 컴포넌트 헤더에 들어가는 라벨 텍스트는 전부 **13.5px**로 통일.

`.col-h`, `.flow-box-h`, `.notice-h`, `.macro-head .mname`, `.sc-label` 전부 13.5px. (2026-08-27에 먼저 14px로 통일했다가, 2026-08-28에 "생각보다 커 보인다"는 피드백으로 13.5px로 한 단계 낮춤.) `.card-head`/`.guide-head`는 현재 마크업에 실사용 0건 — 죽은 CSS라 이번 조정 대상에서 제외(값 자체는 안 건드림).

## 3. 태그/배지 — 1단계로 통일

`#태그` 형태의 매크로 태그는 전부 **11px**로 통일.

`.macro-head .tag`, `.cmp-ment .tag`, `.col-h .ct-tag`, `.sec-badge`, `.subcard-h .tag`(기존 10.5px였던 것 11px로 맞춤).

(`.bdg`(분류 매트릭스 배지, 12.5px), `.free-flow-tag`(10.5px)는 역할이 다른 별개 컴포넌트라 이번 통일 대상에서 제외.)

## 4. 본문 텍스트 — 3단계 (2026-08-28 2차 개정: 스크립트·표 콘텐츠 값 재조정)

| 티어 | 역할 | 클래스 | 크기 |
|---|---|---|---|
| 표준본문(스크립트) | 고객에게 그대로 발송하는 상담멘트/매크로 본문 | `.macro-body`, `.subcard-body`, `.col-body-plain`, `.cmp-ment-body` | **12.5px** |
| 표준본문(표 콘텐츠) | 비교표·분기표 등 표 안의 텍스트 (스크립트가 아닌 구조화된 데이터) | `.cmp-table th`, `.cmp-table td`, `.astbl`, `.branch-tbl` | **12.5px** |
| 보조·안내박스 | 경고·팁·참고성 부연 텍스트 | `.guide-body`, `.quote-box`, `.notice-box li`, `.star-note`, `.blue-note`, `.hint`, `.warn-note`, `.branch-note`, `.alert-red`, `.sc-desc`, `.flow-sub` | **12px** |

- 2026-08-27에 표준본문 전체를 13.5px, 보조·안내박스를 12.5px로 통일했다가, 2026-08-28 1차 개정에서 "생각보다 커 보인다"는 피드백으로 스크립트 13px / 표 콘텐츠 13.5px / 보조·안내박스 12px로 각각 낮춤.
- 2026-08-28 2차 개정: "상담멘트 스크립트"·"표"를 각각 12.5px로 추가 인하하라는 요청에 따라 두 티어 모두 12.5px로 재조정. 결과적으로 두 티어의 숫자값이 동일해졌으나, 클래스 목록(스크립트용 vs. 표용)은 원인이 다른 별개 컴포넌트군이라 행을 통합하지 않고 유지함 — 추후 둘 중 하나만 다시 조정해야 할 가능성에 대비한 구분.
- `.card-body`, `.pre`는 현재 마크업에 실사용 0건(죽은 CSS) — 값 조정 대상에서 제외. `.sr-snip`은 검색 결과 미리보기용 UI 텍스트라 "상담멘트 스크립트"가 아니라고 판단해 13.5px 그대로 유지.

UI 크롬(버튼·입력창·사이드바 트리·뱃지형 상태 라벨 등)은 콘텐츠 본문이 아니라고 판단해 이번 통일 범위에서 제외함.

## 5. 죽은 코드 정리 (2026-08-27 재검토 후 실행)

지난 조사에서 죽은 코드로 지목했던 것 중 하나가 틀렸던 걸 발견해서 다시 검증함. **`.grp-h.grp-sub`는 죽은 코드가 아니었음** — `js/core/shared-templates.js`의 `COMMON_ALL`(공통 › 채팅 표준 응대 페이지, `content-build.js`에 `"cmn_all":COMMON_ALL`로 등록되고 BRAND_TREE에도 `__content:"cmn_all"`로 연결돼 실제 내비게이션에서 열리는 살아있는 페이지) 안에서 "첫인사"/"그외 인사"/"끝인사" 소제목으로 3번 쓰이고 있었음. 처음 조사할 때 브랜드 파일(`js/brands/*.js`)만 grep하고 공통 파일(`js/core/shared-templates.js`)을 안 봐서 놓친 것 — 위 1번 표에 2-1 티어로 정식 반영함. **삭제하지 않음.**

실제로 죽은 코드였던 것 — `.section-title`/`.section-title .ic`(20px)과 그걸 사용하던 `STEP_REF_1`/`STEP_REF_2`/`STEP_REF_3`(슬룸 반품 3단계 레퍼런스 초안, `js/core/shared-templates.js` 최상단). `content-build.js`의 `CONTENT`/`BRAND_TREE`/`RAIL`/`DASH_HOME` 등 전 파일을 grep해서 이 세 상수를 참조하는 곳이 정말 하나도 없는 것 확인 후 삭제함. 삭제 후 재검증: `node --check`로 구문 확인 통과, v2 방식(파일별 개별 vm.Script) 전체 조립 실행에서 11개 브랜드 BRAND_TREE 정상, `cmn_all` 콘텐츠 정상 렌더링(grp-sub 포함 확인) — 에러 0건.

## 7. 헤딩 시각 스타일 통일 (2026-08-28)

`.h1lvl`(A그룹)과 `.sec-title`(B그룹)을 CSS로 직접 대조한 결과, 폰트 크기(18px)는 같지만 실제로는 다른 컴포넌트였음 — h1lvl은 원형 뱃지+2px 파란 밑줄, sec-title은 각진 뱃지+1px 연회색 밑줄. h2lvl(plain)은 좌측 4px 파란 보더가 있었는데 grp-h는 보더가 없었음. h2lvl.as-sub는 파란 배경 pill 스타일인데 grp-h.grp-major는 하단 보더 스타일로 서로 달랐음.

브랜드가 달라도 계층 구조상 동등한 티어는 시각적으로도 통일하기로 하고, **B그룹 스타일을 기준으로 통일**함:

- `.h1lvl` : 밑줄 2px 파란 → 1px 연회색(`var(--line)`)으로, `.h1lvl .num` 뱃지 모양을 원형(`border-radius:50%`) → 각진 사각형(`border-radius:var(--radius-md)`)으로 변경. `sec-title`/`sec-n`과 시각적으로 동일해짐
- `.h2lvl`(plain) : 좌측 파란 보더(4px)·패딩·글자색(#234A86) 제거, `var(--ink)` 색상으로 변경. `grp-h`와 동일해짐
- `.h2lvl.as-sub` : 파란 배경 pill(둥근 배경+패딩) 제거, `grp-h.grp-major`와 동일한 하단 보더 스타일로 변경

**통일하지 않고 그대로 둔 것**: `.h2lvl.as-major`(AS 대분류 전용 흰 글씨+파란 배경 pill), `.h3lvl`, `.typ` — B그룹에 대응하는 동등 티어 자체가 없어서 통일 대상이 아님.

CSS 값만 변경했고(`index.html`의 `<style>` 블록), 브랜드 파일(`js/brands/*.js`)의 마크업은 건드리지 않음 — `.num`/`.tnum` 등 기존 구조 그대로 유지되며 시각적 결과만 바뀜. 변경 후 검증: 브레이스 밸런스 325/325 유지, `node --check` 통과, A그룹 5개 브랜드 실사용 예시(원형 뱃지 번호형/이모지형 h1lvl, h2lvl.as-sub, h2lvl.as-major, h3lvl 전부 포함) 기준으로 실제 콘텐츠(`slm_as`, `align_as`)를 렌더링해 Playwright로 스크린샷 확인 — 콘솔·페이지 에러 0건, 레이아웃 깨짐 없음.

## 8. `secTitle()`/`secMajor()` 뱃지 유무 통일 (2026-08-28)

전 브랜드 `secTitle()`/`secMajor()` 호출 372건(실제 occurrence 기준 373건 — 계산 차이는 grep 카운트 방식 차이일 뿐 실제 콜사이트는 373건, 아래 수치는 372건 기준 조사) 전수조사 결과, **162건(44%)**이 `secTitle("", "1. 제목", ...)` 형태로 번호를 뱃지가 아니라 제목 텍스트에 직접 박아넣고 뱃지(`n` 파라미터)는 빈 채로 둠 — `.sec-n:empty{display:none;}` 규칙 때문에 뱃지가 아예 안 보임. 나머지 210건은 `secTitle("1", "제목", ...)`처럼 뱃지에 번호를 정상적으로 넣음. 같은 뎁스인데 뱃지 유무가 브랜드/페이지 유형별로 들쭉날쭉한 게 원인.

162건 전부 "숫자. 제목" 패턴인 것 전수 확인(예외 0건) 후, 정규식으로 번호를 추출해 뱃지(`n`)로 옮기고 제목에서 "N. " 접두어 제거 — **A안(뱃지 있는 쪽으로 통일)** 채택. 손대는 콜사이트 수가 더 적고(162<210), 이미 더 많이 쓰이던 뱃지 디자인을 유지하는 방향.

수정 대상: 전 11개 브랜드 파일(`js/brands/*.js`) — sloom 16, alignlab 13, bilba 13, cellology 16, oclock 13, cocodaum 16, dramang 16, drmans 13, marnell 13, simplicare 17, yvening 16 = 총 162건. `h1lvl`은 이 문제 자체가 없었음(26개 전부 아이콘 전용이거나 `<span class="num">` 정상 사용).

검증: 변경 전 파이썬 정규식으로 162건 전부 "숫자.으로 시작" 패턴 확인(anomaly 0건) → 변환 후 `node --check` 11개 파일 전부 통과 → 변환 후 재검색 결과 `secTitle("",`/`secMajor("",` 잔재 0건 → v2 빌드체크(전체 11브랜드 vm.Script 로드) 에러 0건 → 실제 `slm_exchange` 콘텐츠를 렌더링해 스크린샷 확인, 번호 뱃지가 모든 챕터에서 일관되게 표시됨.

## 9. A그룹 AS 페이지 인라인 스타일 박스 정리 (2026-08-28)

A그룹 5개 브랜드(슬룸·알림랩·빌바·셀올로지·오클락) AS 페이지에 `<div style="...">` 형태로 즉석 작성된 "박스형" 컴포넌트 26건 발견. 그 중:

- **2종류(10건)는 5개 브랜드에 거의 동일하게 복붙**돼 있던 것 확인 → `helpers.js`에 `limitNotice(caseLabel, body)`(💡 무상 접수 기간 제한 표 박스), `edgeCaseCompare(bodyIn, bodyOut)`(★ EDGE CASE 단종 2열 비교 박스) 함수로 추출 + 전용 CSS 클래스(`.limit-notice*`, `.edge-compare*`) 신설, 마진 포함. 브랜드별로 다른 문구(예: 셀올로지는 "스크래치·이물질", 오클락은 "계좌로 환급")는 파라미터로 그대로 보존. 5개 브랜드의 인라인 코드를 헬퍼 함수 호출로 교체
- **나머지 16건은 서로 다른 목적의 일회성 레이아웃**(AS 상담 flow 2열 그리드, 품질보증기간 2열 분할, 사용법 유의사항 flex 분할 등)이라 헬퍼화하지 않기로 함. 실제로 열어본 결과 이 16건은 전부 이미 `.blue-note`/`.quote-box` 등 자체 마진이 있는 부모 클래스 안에 있는 내부 레이아웃용 인라인 스타일이라 스페이싱 문제 자체가 없었음(추가 수정 불필요, 확인만 하고 그대로 둠).

원래 사용자가 지적한 "박스끼리 붙어있는" 문제는 정확히 이 2종류(10건) 중 하나였음 — `margin-top:12px`만 있고 `margin-bottom`이 없는 박스와, margin이 아예 없는 박스가 연달아 나오면서 0px 간격으로 붙어있던 것. 헬퍼 함수의 CSS 클래스에 `margin:... 0 var(--space-content)`를 넣어 근본적으로 해결.

검증: `node --check` 11개 파일 전부 통과, 브레이스 밸런스 338/338(신규 CSS 규칙 13개 추가분 반영), v3 빌드체크 에러 0건, 실제 `slm_as` 콘텐츠 렌더링 스크린샷으로 두 박스 사이 간격이 정상적으로 생긴 것 확인.

**추가 수정 (2026-09-02)**: `limitNotice`/`edgeCaseCompare` 헬퍼 CSS를 만들 때 헤더(`.limit-notice-h`, `.edge-compare-h`)에 font-size를 지정하지 않아 브라우저 기본값(16px)으로 렌더링되고 있었음 — 원래 인라인 스타일을 그대로 옮기면서 폰트 크기 지정을 안 넣은 게 원인. 이후 두 차례 진행된 본문 폰트 재조정(위 4번 항목)에도 이 두 컴포넌트는 별개 클래스라 포함되지 않아 계속 방치돼 있었음. 주변 콘텐츠 대비 눈에 띄게 커 보인다는 지적에 따라 라벨 티어(13.5px)·표준본문 스크립트 티어(12.5px) 기준으로 맞춤:

| 요소 | 클래스 | 변경 전 | 변경 후 |
|---|---|---|---|
| 무상 접수 기간 제한 헤더 | `.limit-notice-h` | 16px(미지정, 기본값) | **13.5px** |
| 수령일 라벨("📅 수령일 7일 이내") | `.limit-notice-table`(상속) | 14px | **13.5px** |
| EDGE CASE 헤더 | `.edge-compare-h` | 16px(미지정, 기본값) | **13.5px** |
| EDGE CASE 본문 | `.edge-compare-body` | 13.5px | **12.5px** |

`.limit-notice-sub`(13px)·`.limit-notice-body`(12.5px, 이미 표준본문 티어와 일치)는 그대로 둠 — 눈에 띄게 튀는 값이 아니라고 판단.

검증: 브레이스 밸런스 378/378(기존 규칙에 속성만 추가, 신규 규칙 없음), Playwright computed style로 6개 값 전부 확인, `slm_as` 실제 렌더링 스크린샷으로 두 박스 헤더·라벨 크기가 주변 콘텐츠와 조화롭게 바뀐 것 시각 확인.

## 10. `secTitle()`/`secMajor()` 말머리 아이콘 배지 스타일 분리 (2026-09-02)

`.sec-n`(secTitle/secMajor 말머리 마커)이 숫자 번호("1","2","3"...)든 주제 아이콘 이모지("💡","💯","🟢" 등)든 구분 없이 전부 파란 배경(`var(--trust-blue)`) + `border-radius` 원형 배지 스타일로 렌더링되고 있었음. 사용자 피드백: 번호가 아닌 이모지 마커에 배지 배경까지 겹치니 이모지 자체가 이미 아이콘인데 그 위에 또 마커 디자인이 얹혀서 조잡해 보인다는 지적. 전 브랜드 공통 규칙으로 수정 요청.

**적용 규칙**: `n` 파라미터가 순수 숫자 문자열(정규식 `/^\d+$/`)일 때만 기존 원형 배지 스타일(배경·radius·흰 글자) 유지. 그 외(이모지, 빈 문자열 등)는 `sec-n-icon` 보조 클래스를 추가로 부여해 배경·radius·고정 width/height를 제거하고 이모지 원본 그대로 노출.

- `helpers.js`의 `secTitle()`/`secMajor()`에 `/^\d+$/.test(n)` 판정 추가, `n`이 숫자가 아니면 `class="sec-n sec-n-icon"` 부여.
- `index.html`에 `.sec-n.sec-n-icon{width:auto;height:auto;background:none;border-radius:0;color:inherit;font-size:17px;}` 규칙 추가.
- **판단 필요했던 예외 케이스**: `1️⃣`/`2️⃣` 같은 키캡 숫자 이모지(슬룸 AS 페이지 2건 — `cr_process`/`cr_respond`)는 순서를 나타내는 번호이긴 하지만 문자열 자체가 순수 ASCII 숫자가 아니라서(`/^\d+$/` 불일치) 아이콘 취급(배지 제거)됨. 키캡 이모지는 그 자체로 이미 사각 배지 형태 글리프라 원형 배지를 덧씌우면 이중 배지로 더 조잡해지는 쪽이라 판단해 의도적으로 이렇게 처리함 — 사용자에게 별도 확인은 안 받았으므로, 다르게 보이면 알려주면 즉시 수정 가능.
- `n=""`(빈 문자열, 뱃지 숨김 케이스)도 숫자가 아니므로 `sec-n-icon` 클래스가 붙지만, 기존 `.sec-n:empty{display:none;}` 규칙이 그대로 적용되어 `display:none`이라 시각적 차이 없음.

**작업 중 발견 사항**: 이 작업을 시작하기 전 기기 파일을 재확인한 결과, 2026-08-31 전후로 같은 프로젝트의 다른 세션에서 편집기 기능(`js/core/editor.js` 신규, `helpers.js`/`shared-templates.js`/`content-build.js`에 `contentKey`/`contentBrand` 파라미터 확장, 파비콘·구글 폰트 추가)이 이미 반영돼 있었음. 이번 수정 전에 관련 파일 전부를 기기에서 새로 받아 최신 상태 위에 적용했고, `secTitle`/`secMajor` 출력 문자열을 문자열 그대로 참조하는 곳이 `editor.js`/`content-build.js`/`shared-templates.js`에 없는 것 확인 후 진행함 — 편집기 기능과 충돌 없음.

검증: `node --check` 통과(helpers.js/editor.js/content-build.js), 브레이스 밸런스 378/378, 실제 브라우저(Playwright)에서 `secTitle()` 직접 호출로 숫자("1","12")·이모지("💯")·키캡("1️⃣") 각각의 computed style 확인(숫자만 배경·radius 유지, 나머지는 배경 투명·radius 0) + 실제 콘텐츠(`slm_100refund`) 렌더링 스크린샷으로 "💡 응대 기준" 말머리가 배지 없이 이모지 그대로 표시됨을 시각 확인. 콘솔 에러 0건(무관한 샌드박스 환경 리소스 로그 제외).

**누락 발견 및 수정 (2026-09-03)**: 사용자가 슬룸 "🚨 부작용·상해 VOC"(`slm_side`) 페이지에서 "☑️ Nomal Case (일반)"/"🚨 EDGE Case (Critical)" 두 제목의 말머리 이모지에만 배지 배경이 그대로 남아있다고 지적. 원인 확인 결과, 이 두 제목은 `secTitle()` 헬퍼를 거치지 않고 `js/brands/sloom.js`에 `<div class="sec-title" ... ><span class="sec-n">이모지</span>...</div>` 형태로 직접 하드코딩된 마크업이었음(대형 섹션 구분용으로 `font-size:22px;margin-top:72px` 등 인라인 스타일이 필요해 헬퍼 대신 수기로 작성된 것으로 추정) — 그래서 위 규칙 적용 시점에 `secTitle()` 호출 전수 검토만으로는 잡히지 않았던 사각지대. 프로젝트 전체에서 `class="sec-n"`을 직접 쓰는 마크업을 재검색한 결과 이 2건이 유일했음(그 외는 전부 `secTitle()`/`secMajor()` 경유). 두 `<span>`에 `sec-n-icon` 클래스를 수동으로 추가해 동일 규칙 적용. `node --check` 통과, Playwright로 `slm_side` 렌더링 후 두 제목 모두 배경·radius 제거되고 다른 이모지 말머리와 동일하게 표시됨을 시각 확인.

**추가 확인 및 재수정 (같은 날, 2026-09-03)**: 위 수정 후 재검토하는 과정에서, `secNormal`/`secEdge` 두 제목이 font-size는 22px("1-강조" 티어값)로 우연히 일치하지만 실제로는 `secMajor()`가 아니라 손으로 흉내 낸 마크업이라 밑줄(`border-bottom`)이 남아있고 상단 간격도 72px(표준 `--space-section-major` 44px과 다름)로 임의로 달랐던 것을 추가로 발견. 실제 `secMajor()` 인스턴스(예: "💯 100%환불이벤트 접수")와 computed style 비교로 확인(전자: `border-bottom:none, padding-bottom:0, margin-top:44px` / 후자 수정 전: `border-bottom:1px solid, padding-bottom:11px, margin-top:72px`). 새 예외 클래스를 만들지 않고 **기존 `secMajor()` 호출로 완전히 교체**하는 쪽으로 통일(사용자 지시: "웬만하면 규칙으로 포함시키고 통일 관리해") — `${secMajor("☑️","Nomal Case (일반)",null,"secNormal")}` / `${secMajor("🚨","EDGE Case (Critical)",null,"secEdge")}`로 교체, id(`secNormal`/`secEdge`)는 기존 앵커 링크(`#secNormal`/`#secEdge`)와 호환되도록 그대로 유지. `node --check` 통과, Playwright로 밑줄 제거·margin-top 44px로 정상화됨을 확인.

## 11. 뎁스별 헤딩 폰트 크기 재검증 및 조정 (2026-09-02)

슬룸 3개 실제 플로우("단순변심 교환/반품"·"100%환불이벤트"·"불량 AS 교환/반품")를 예시로, 사용자가 의도한 뎁스별 규칙("대"=페이지 타이틀, "중"=챕터, "소"=챕터 내 갈래/케이스 라벨)이 실제로 반영됐는지 Playwright로 실제 렌더링 후 computed font-size 전수 대조함.

**확인된 것 (정상)**:
- "대" 티어(`.page h1`): 전 브랜드 70개 `<h1>` 태그 전수 확인 결과 이미 26px로 완전히 통일돼 있었음 — 별도 수정 불필요.
- "중" 티어 내부 일관성: 각 페이지의 1·2·3번 챕터 및 "응대 기준"/"유형별 기준" 같은 개괄용 인트로 챕터는 이미 같은 클래스(`.sec-title`/`.h1lvl`)로 일관되게 처리되고 있었음.
- "소" 하위 번호 유형(충전/전원·작동 관련 증상·구성품 누락·이염오염초도파손 등, `.typ`): 15.5px로 전부 일관됨.

**발견된 불일치 및 조치**:

1. **"상담 플로우" 예외 미반영** — "단순변심 교환/반품"(`slm_simplemerge`) 페이지에서 "🧭 상담 플로우"만 `<div class="grp-h" id="secFlow">`로 하드코딩돼 있어 15px(그룹 소제목 티어)로 렌더링되고 있었음. 같은 페이지의 다른 챕터(1~5번)는 전부 `secTitle()` 헬퍼로 22px(중 티어)였는데 이것만 빠짐. `js/brands/sloom.js`에서 `${secTitle("🧭","상담 플로우",null,"secFlow")}`로 교체해 중 티어로 편입.
   - 참고: 같은 "🧭 상담 플로우" 라벨이 "불량 AS 교환/반품"(`slm_as`) 페이지에서는 이미 `.h1lvl`(중 티어)로 정상 처리돼 있었음 — 페이지별로 처리가 갈렸던 것.
   - 참고: sloom.js에 "🧭 상담 플로우"가 하드코딩된 `<div class="grp-h">`(id 없음) 형태로 2건 더 있었으나, 확인 결과 슬룸의 "단순변심 반품"/"단순변심 교환" 단독 페이지(`slm_refund`/`slm_exchange`) 안에 있는 것으로, 2026-08-13 병합 작업 이후 BRAND_TREE에서 슬룸 한정으로 제외된 고아 콘텐츠로 추정됨(내비게이션으로 도달 불가). 이번 수정 범위에서 제외 — 별도 확인 필요 시 처리.

2. **"소" 티어 통일** — 무상 AS/유상 AS(`.h2lvl.as-major`)가 원래 흰 글씨+파란 배경 pill의 18px 전용 강조 스타일로 A/B(`.h2lvl.as-sub`, 16.5px)와 다르게 처리되고 있었음. 사용자 지시에 따라 `.h2lvl.as-major`의 CSS를 `.h2lvl.as-sub`와 동일하게(16.5px, 배경 제거, 하단 보더 스타일) 맞춤 — 마크업은 그대로 두고 CSS만 변경. 전 A그룹 브랜드(슬룸·알림랩·빌바·셀올로지·오클락)에 공통 적용됨(공유 CSS 규칙).
   - **주의**: "소" 티어가 완전히 하나의 값은 아님 — A/B/무상AS/유상AS는 16.5px(`.h2lvl.as-sub`/`.h2lvl.as-major`, "갈래·케이스 라벨" 성격), 재불량/[단종]EDGE CASE는 15px(`.h2lvl` plain, "일반 소제목" 성격)로 여전히 2단계 남아있음. 이번 작업은 "무상/유상 AS의 18px 이탈"만 바로잡은 것이고, 15px vs 16.5px 구분 자체를 없앨지는 별도 확인 필요.

3. **"중" 티어 확대** — `.sec-title`/`.h1lvl`을 18px → **22px**로 확대. 전 11개 브랜드 공유 CSS라 자동 적용됨.
   - **미해결 충돌**: `.sec-title.sec-major`(예: "💯 100%환불이벤트 접수")가 원래도 22px였는데, 이번에 "중" 티어가 22px로 커지면서 두 티어가 같은 크기가 됨. 밑줄 유무로만 구분되는 상태 — sec-major를 더 키울지(예: 26px, 단 "대" 티어와 충돌 위험) 그대로 둘지는 사용자 확인 필요.

검증: 브레이스 밸런스 378/378(속성값만 변경, 신규 규칙 없음), `node --check` 통과(sloom.js), Playwright로 3개 페이지 전체 헤딩 리스트를 재추출해 위 3건 전부 의도대로 반영됨을 확인, `slm_simplemerge` 실제 렌더링 스크린샷으로 "🧭 상담 플로우"와 "1. 교환/반품 의사 확인"이 동일 크기(22px)로 표시됨을 시각 확인.

**즉시 후속 수정 (같은 날, 2026-09-02)**: 위 3건을 실제로 적용해서 보니 22px가 너무 크다는 피드백과 함께 세 가지를 다시 조정함.

- "중" 티어(`.sec-title`/`.h1lvl`): 22px → **20px**. 이 조정만으로 위에서 지적한 "1-강조"(`.sec-title.sec-major`, 22px)와의 충돌도 자연히 해소됨(20px < 22px로 다시 구분됨).
- 무상 AS/유상 AS(`.h2lvl.as-major`): 16.5px 통일을 되돌리고 **원래 스타일(18px, 흰 글씨+파란 배경 pill)로 원복**. 대신 [단종] EDGE CASE를 같은 티어로 새로 편입 — A그룹 5개 브랜드(슬룸·알림랩·빌바·셀올로지·오클락) 전부에서 `<div class="h2lvl" id="edgeDiscon">🚨 [단종] EDGE CASE</div>` → `<div class="h2lvl as-major" id="edgeDiscon">...</div>`로 마크업 수정(5개 파일, 각 1건씩). 결과: 무상AS·유상AS·EDGE CASE 3개가 전부 18px pill 스타일로 통일됨.
- 위에서 남겨뒀던 15px(`.grp-h`/`.h2lvl` plain) vs 16.5px(`.grp-h.grp-major`/`.h2lvl.as-sub`) 구분: **16.5px로 통일**. `.grp-h`·`.h2lvl`(plain) 기본 규칙의 font-size를 15px→16.5px로 올려서 강조형과 합침 — 이건 슬룸 3개 예시에 국한된 게 아니라 `.grp-h`/`.h2lvl`(plain) 클래스 자체를 쓰는 전 브랜드 모든 서브헤딩에 공통 적용됨(예: "🟡 유선 제품", "① 배송 완료일자 확인" 등 다수). 범위가 넓어지는 변경이라 결과 보고에서 별도로 짚음.

최종 티어 사다리(위→아래, 전부 서로 다른 값으로 재확인됨): 대 26px → 1-강조(sec-major) 22px → 중(sec-title/h1lvl) 20px → 2-특수(as-major: 무상AS·유상AS·EDGE CASE) 18px → 2/2-강조 통합(grp-h·h2lvl plain·grp-major·as-sub) 16.5px → 유형(.typ) 15.5px → 절차(.h3lvl) 15px → 2-1(grp-h.grp-sub) 13.5px.

검증: 브레이스 밸런스 378/378 유지, `node --check` 5개 A그룹 브랜드 파일 전부 통과, Playwright로 3개 페이지 헤딩 리스트 재추출해 위 최종 사다리대로 렌더링되는 것 확인(중 20px, AS 3종 18px, grp-h/h2lvl 계열 16.5px로 일관).

## 12. 표(table) 스타일 통일 (2026-09-03)

사용자가 스크린샷과 함께 지적한 두 가지 표 관련 불일치를 확인 후 수정함.

1. **모서리 radius 불일치** — 프로젝트 내 표는 4가지 스타일(`.astbl`, `.branch-tbl`, `.cmp-table`, `.limit-notice-table`)로 나뉘는데, `.branch-tbl`(→`.branch-box`로 감싸짐)·`.cmp-table`(→`.cmp-table-wrap`으로 감싸짐)·`.limit-notice-table`(→`.limit-notice`로 감싸짐)은 감싸는 wrapper div가 `border-radius`+`overflow:hidden`을 제공해 둥근 모서리로 보였지만, `.astbl`(엑셀 붙여넣기 스타일의 초록 헤더 표, 전 브랜드 29건 사용)만 wrapper 없이 표 자체에 각진 모서리(`border-collapse:collapse`, 셀별 개별 border)로 렌더링되고 있었음. 마크업에 wrapper div를 추가하는 대신, CSS만으로 `.astbl`을 `border-collapse:separate;border-spacing:0;border-radius:var(--radius-lg);overflow:hidden`으로 바꾸고 셀 border를 우측/하단만 남기는 방식(`.cmp-table`과 동일한 시각 결과)으로 처리 — 마크업 변경 없이 CSS 한 곳만 수정. Playwright로 실제 렌더링 확인: 4개 모서리 전부 둥글게 처리됨, 헤더 초록 배경도 모서리에 맞춰 클리핑됨, 셀 구분선 유지됨.

2. **`.cmp-table`/`.limit-notice-table` 하단에 붕 뜬 여백** — 원인은 `table{margin:0 0 var(--space-content);}`라는 전역 규칙이 모든 `<table>` 태그에 무조건 적용되고 있었던 것. `.astbl`은 어차피 자체 margin을 별도로 갖고 있어 문제가 없었지만, `.cmp-table-wrap`/`.limit-notice`처럼 `overflow:hidden`으로 감싸는 wrapper 안에 있는 표는 이 전역 margin이 wrapper 테두리 안쪽에 12px 안 보이는 여백을 만들어, 표 내용은 끝났는데 둥근 모서리 박스만 아래로 더 길게 늘어나 "붕 떠있는" 것처럼 보이는 원인이 됨(Playwright 측정: 표 내용 끝~wrapper 하단 border 사이 실제 간격 14.2px). 전역 `table{margin...}` 규칙을 삭제하고 `.astbl`은 이미 자체 `margin:0 0 var(--space-content)`를 갖고 있어 영향 없음을 확인. `.branch-tbl`(→`.branch-box` 안)의 경우도 규칙 삭제 후 다음 요소(`.branch-note`, margin-top:11px 자체 보유)와의 간격이 12px로 정상 유지됨을 확인 — 부작용 없음.

검증: 브레이스 밸런스 380/380(신규 선택자 2개 추가로 378→380, `.astbl th:not(:last-child)`, `.astbl td:not(:last-child)`), Playwright로 `slm_100refund`(cmp-table)·`slm_as`(limit-notice-table)·`align_as`(astbl)·`slm_simplemerge`(branch-tbl) 4개 콘텐츠 실제 렌더링 후 (a) cmp-table/limit-notice 내부 여백이 1px 이내로 해소됨, (b) astbl 4개 모서리 라운드 처리 확인, (c) branch-tbl 이후 요소 간격 정상 유지(12px) 확인. 이 두 수정은 표를 사용하는 전 브랜드·전 콘텐츠(채팅/유선/게시판 포함, 공용 CSS이므로)에 공통 적용됨.

## 13. 헤딩 마크업 작성 규칙 (하드코딩 방지, 2026-09-03)

**배경**: 11번(뎁스별 폰트)·12번(표 스타일) 작업 이후, 사용자가 슬룸 "부작용·상해 VOC" 페이지에서 규칙이 반영 안 된 제목 2건(`secNormal`/`secEdge`)을 추가로 발견함. 원인은 이 두 제목이 `secTitle()`/`secMajor()` 헬퍼를 거치지 않고 마크업에 직접 `<div class="sec-title" style="...">...</div>` 형태로 하드코딩돼 있었던 것 — 헬퍼 함수 호출만 grep해서 검토하는 방식으로는 이런 우회 마크업이 원천적으로 안 잡힘. 헬퍼를 안 쓰고 즉석으로 스타일을 박아 넣는 경로 자체가 존재하는 한 같은 종류의 사각지대가 언제든 다시 생길 수 있음 — 그래서 "발견 시마다 고치기"가 아니라 아래처럼 작성 규칙으로 명문화함.

**규칙**:

1. 새 헤딩·말머리 마커는 항상 아래 정해진 경로 중 하나로만 작성한다. 이 경로를 벗어나 인라인 `style`로 즉석 처리하지 않는다.
   - "챕터"(1)/"1-강조" 티어: `secTitle(n, t, badge, anchor)` / `secMajor(n, t, badge, anchor)` 반드시 호출. `<div class="sec-title">...</div>`를 손으로 직접 작성하지 않는다.
   - A그룹 "챕터"(`.h1lvl`) 숫자 마커: `<span class="num">`은 순수 숫자만 사용(이모지 사용 금지 — 필요하면 `secTitle()`로 전환).
   - A그룹 "유형"(`.typ`) 숫자 마커: `<span class="tnum">`도 순수 숫자만 사용.
   - "그룹 소제목"(2): `<div class="grp-h">...</div>` 직접 작성은 허용(마커 배지가 없는 단순 텍스트 헤딩이라 사각지대 위험 없음). `margin-top` 등 레이아웃 인라인 override는 허용하되 `font-size` 인라인 override는 금지.
2. 페이지 안에서 표준 7단계 티어에 없는 새로운 시각적 예외(예: 더 큰 구분자, 다른 색)가 필요하면, 인라인 스타일로 즉석 처리하지 말고 **먼저** `helpers.js`에 새 헬퍼나 CSS에 새 modifier 클래스를 추가하고 1번 표에 등록한 뒤 그것을 호출한다. "일단 급하게 style로 처리하고 나중에 정리"하는 방식 금지 — 이번 `secNormal`/`secEdge`가 정확히 이 경로로 만들어졌다가 두 차례(배지 문제, 밑줄/margin 문제)나 사각지대로 남았음.
3. 순수 `<h2>`~`<h6>` 네이티브 태그를 상담 콘텐츠 본문에 사용하지 않는다(브라우저 기본 스타일이라 티어 표에 안 걸림). 홈 대시보드 카드처럼 콘텐츠 헤딩 계층과 무관한 별도 UI 컴포넌트에서 쓸 경우 반드시 전용 CSS 선택자로 명시적으로 스타일링해야 하며(예: `.dash-card h3`), 스타일 지정 없이 방치하지 않는다.

**회귀 점검용 명령어**(다음에 재검증할 때 그대로 사용):

```
# 1) secTitle()/secMajor() 우회한 sec-n 하드코딩 검색 (0건이어야 정상)
grep -rn 'class="sec-n"' js/brands/*.js js/core/shared-templates.js

# 2) 헤딩 클래스에 인라인 font-size가 직접 박혀있는 경우 검색 (0건이어야 정상)
grep -noE '<div class="(sec-title|h1lvl|h2lvl|h3lvl|grp-h|typ)[^"]*"[^>]*style="[^"]*font-size[^"]*"' js/brands/*.js js/core/shared-templates.js js/data/*.js

# 3) 상담 콘텐츠 안 원시 h2~h6 태그 검색 (전부 .dash-card 등 별도 UI 컴포넌트여야 정상)
grep -oE '<h[2-6][^>]*>' js/brands/*.js js/core/shared-templates.js js/data/*.js
```

**2026-09-03 시점 전수 검토 결과**: 위 3개 검색 실행 결과, (1) 0건, (3) `<h3>` 5건(전부 `.dash-card` 안, 전용 CSS로 스타일링돼 있어 문제 없음)만 확인됨 — 그 외 위반 없음. `secNormal`/`secEdge`는 10번 항목에서 `secMajor()` 호출로 교체 완료.

**규칙 확장 (같은 날, 2026-09-03 추가 발견 이후)**: 아래 14번에서 발견된 두 종류의 하드코딩(표 인라인 스타일 복제, macro 여백 중복 적용)도 같은 종류의 사각지대라 회귀 점검용 명령어를 2개 추가함.

```
# 4) .astbl/.gridtbl을 안 쓰고 표 자체에 엑셀 붙여넣기 스타일을 인라인으로 직접 복제한 경우 검색 (0건이어야 정상)
grep -n '<table style="border-collapse:collapse' js/brands/*.js js/core/shared-templates.js

# 5) macro-head/desc/body 여백 관련 CSS(.macro:has(...)) 목록 — 새 조건부 규칙 추가 시 기존 규칙과 중복 적용(스태킹)되는지 항상 같이 확인
grep -n ':has(' index.html
```

## 14. 여백(margin/padding) 통일 추가 정비 (2026-09-03)

사용자가 게시판 콘텐츠(`board__003`, 네이버페이 반품 배송비 안내 매크로)의 `.macro-body` 상단 padding이 유독 42px로 크다고 지적. 이 지적을 계기로 표(table) 쪽도 같은 종류의 "일부만 다르게 렌더링되는" 문제가 더 있는지 전수 검사함. 2건 발견 후 수정.

1. **`.macro-body` 상단 padding 중복 적용** — `name`이 빈 문자열인 매크로는 헤더(`.macro-head`)가 절대 위치로 우측 상단에 복사 버튼만 떠 있는 형태로 바뀌고, 이때 본문이 그 떠 있는 헤더와 겹치지 않도록 `.macro:has(.mname:empty) .macro-body{padding-top:42px}` 규칙으로 상단에 여유 공간을 만들어주고 있었음. 그런데 `desc`(💡 노란 안내 박스)가 있는 매크로는 `desc` 자체가 이미 `margin-top:38px`로 떠 있는 헤더를 피해가는 역할을 하고 있어서, 그 뒤에 오는 `.macro-body`는 더 이상 헤더를 피할 필요가 없는데도 규칙이 조건 없이 걸려서 42px가 그대로 또 적용됨 — 즉 "헤더 피하기"가 desc와 body에서 두 번 중복 적용된 것. 실측(Playwright): 수정 전 desc 박스와 본문 사이 간격이 정상(20px)보다 22px 더 벌어져 있었음. `.macro:has(.mname:empty) .sc-desc + .macro-body{padding-top:20px}`(desc 바로 다음에 오는 macro-body만 기본값 20px로 되돌림) 규칙을 추가해 해소. 전체 검색 결과 이 조합(`name` 빈 문자열 + `desc` 있음)은 프로젝트 내 8건(`align_as__004/017/018`, `bilba_as__004`, `slm_as__004`, `board__003`, `oclock_as__004`, `cel_as__004`) — 전부 같은 원인, 공용 CSS 수정 한 번으로 8건 모두 해소됨. `desc` 없이 `name`만 빈 문자열인 나머지 27건은 원래부터 42px가 정확히 필요한 경우라 영향 없음(Playwright로 별도 확인).

2. **표(table) 라운드 처리 사각지대 추가 발견** — 12번에서 `.astbl` 자체는 고쳤지만, 그 외에도 `.astbl`과 시각적으로 완전히 동일한 "엑셀 헤더 표" 디자인(초록/파란 배경 헤더, `#d9d9d9` 테두리, 동일 padding)을 클래스 없이 표 자체에 인라인 `style`로 통째로 복제해 놓은 표가 6건 있었음(`js/brands/alignlab.js` 2건, `bilba.js` 1건, `oclock.js` 1건, `sloom.js` 2건) — 클래스를 안 쓰니 12번 수정이 이 표들에는 전혀 안 먹혀서 여전히 각진 모서리로 남아있었음. `.astbl`을 그대로 재사용하지 않은 이유는, 이 6건이 좌우 대칭 비교용 2~3열 구성이라 `.astbl`의 `:first-child`(첫 열 회색 배경 + 폭 170px 고정, 라벨 열 전용 스타일) 규칙이 적용되면 레이아웃이 깨지기 때문 — 그래서 `:first-child` 규칙만 뺀 신규 공용 클래스 `.gridtbl`을 만들어 6건 모두 인라인 스타일 제거 후 `class="gridtbl"`로 교체(헤더 배경색이 파란색인 1건만 `<th style="background:#234A86">`로 색상만 인라인 유지, 테두리·radius·padding은 전부 `.gridtbl`에서 공급).

검증: `node --check` 4개 파일(alignlab/bilba/oclock/sloom.js) 전부 통과, 브레이스 밸런스 387/387, Playwright로 (a) `board__003` 등 macro-body 간격 8건 중 대표 케이스 정상화(42px→20px) 확인 + `desc` 없는 케이스는 42px 그대로 유지되는 것 확인, (b) `.gridtbl` 4개 모서리 라운드 처리 확인(2열짜리 초록 헤더 표, 3열 rowspan/colspan 포함된 파란 헤더 표 둘 다 스크린샷으로 확인, 테두리·rowspan/colspan 렌더링 이상 없음).

## 15. 다음 단계 (미착수)

`.h1lvl`↔`.sec-title`, `.h2lvl`(plain)↔`.grp-h`(plain) 클래스 이름 자체 통합(마크업에서 A그룹 5개 브랜드 파일의 `<span class="num">` 직접 작성 방식을 `secTitle()`/`grp-h` 방식으로 교체)과, 섹션 소유 콘텐츠를 `.chapter` wrapper로 감싸는 DOM 중첩 구조 개선은 아직 미착수. DOM 중첩 개선은 심플리케어 1개 브랜드에 시범 적용 후 검토하기로 함(다음 작업 예정).
