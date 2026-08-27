# CS 템플릿 타이포그래피 규칙 (2026-08-27 정립)

`index.html`의 `<style>` 블록에 실제 반영된 값 기준. 새 브랜드 콘텐츠를 작성하거나 기존 콘텐츠를 수정할 때 이 표에 없는 font-size를 새로 만들지 말고 아래 티어 중 하나를 그대로 쓸 것.

## 1. 헤딩(제목) 계층 — 7단계

| 티어 | 역할 | 클래스 | 크기 | 비고 |
|---|---|---|---|---|
| 0 | 페이지 최상단 제목 (사이드바 클릭 시 뜨는 카테고리 제목) | `.page h1` | 26px | 변경 없음 |
| 1 | 챕터 (페이지 내 "1. 2. 3." 최상위 넘버링) | `.sec-title` / `.h1lvl` | **18px** | 두 클래스가 같은 역할을 하는 중복(B그룹 브랜드는 sec-title, A그룹은 h1lvl 사용) — 이번에 폰트 크기만 18px로 통일. 클래스 자체를 하나로 합치는 건 이후 DOM 구조 리팩토링 때 처리 |
| 1-강조 | 챕터 중 특별히 큰 것 | `.sec-title.sec-major` | 22px | sec-title 계열에만 존재하는 변형 |
| 2 | 그룹 소제목 (챕터 내부 "a. b. c." 서브그룹) | `.grp-h` / `.h2lvl`(plain) | 15px | 이미 일치돼 있었음(색상·보더만 다름, 폰트 크기는 원래 안 어긋났음) |
| 2-강조 | 그룹 내 갈래/케이스 라벨 | `.grp-h.grp-major` / `.h2lvl.as-sub` | **16.5px** | 같은 역할(예: "a. 고객 서류 미수긍 시" / "A. 사용법 안내 필요")인데 15.5px vs 16.5px로 어긋나 있던 것 통일 |
| 2-특수 | AS 플로우 대분류 전용 강조(흰 글씨 + 파란 배경 pill) | `.h2lvl.as-major` | 18px | A그룹(전자기기 등 AS 분기 복잡한 브랜드) 전용, 대응하는 B그룹 클래스 없음 — 고유 스타일 유지 |
| 3 | 유형 (A그룹 전용 심화 하위단계) | `.typ` | 15.5px | 사각 번호뱃지, B그룹엔 대응 없음 |
| 3 | 절차 (A그룹 전용 심화 하위단계) | `.h3lvl` | 15px | 무뱃지, `.typ` 하위에서 쓰임 |
| 2-1 | 그룹 소제목의 하위 소그룹 (예: "인사말" 그룹 안의 "첫인사"/"끝인사") | `.grp-h.grp-sub` | 13.5px | "공통 › 채팅 표준 응대"(`cmn_all`) 페이지에서만 실사용 — 브랜드 파일에는 없어서 최초 조사 때 놓쳤던 티어 (아래 5번 참고) |

**A그룹**(전자기기 등 AS 분기 복잡): 슬룸·알림랩·빌바·셀올로지·오클락 — `.h1lvl`/`.h2lvl`/`.h3lvl`/`.typ` 사용.
**B그룹**(AS 분기 단순): 코코다움·닥터아망·닥터맨즈·마넬·심플리케어·와이브닝 — `.sec-title`/`.grp-h`만 사용.
`.grp-h`/`.grp-h.grp-major`는 두 그룹 모두에서 공통으로 쓰임(그룹 전용 아님).

## 2. 컴포넌트 제목 라벨 — 1단계로 통일

카드/매크로/서브카드/비교카드 등 컴포넌트 헤더에 들어가는 라벨 텍스트는 전부 **14px**로 통일.

`.card-head`, `.col-h`, `.flow-box-h`, `.notice-h`, `.guide-head`, `.macro-head .mname`(기존 13px), `.subcard-h .sc-label`(기존 12.5px) — 뒤 두 개가 어긋나 있던 걸 14px로 맞춤.

## 3. 태그/배지 — 1단계로 통일

`#태그` 형태의 매크로 태그는 전부 **11px**로 통일.

`.macro-head .tag`, `.cmp-ment .tag`, `.col-h .ct-tag`, `.sec-badge`, `.subcard-h .tag`(기존 10.5px였던 것 11px로 맞춤).

(`.bdg`(분류 매트릭스 배지, 12.5px), `.free-flow-tag`(10.5px)는 역할이 다른 별개 컴포넌트라 이번 통일 대상에서 제외.)

## 4. 본문 텍스트 — 2단계

| 티어 | 역할 | 클래스 | 크기 |
|---|---|---|---|
| 표준본문 | 핵심 콘텐츠 텍스트(매크로 문구, 카드/서브카드 내용, 비교표) | `.macro-body`, `.card-body`, `.subcard-body`, `.col-body-plain`, `.cmp-ment-body`, `.pre`, `.cmp-table`, `.astbl`, `.branch-tbl`, `.sr-snip` | **13.5px** |
| 보조·안내박스 | 경고·팁·참고성 부연 텍스트 | `.guide-body`, `.quote-box`, `.notice-box li`, `.star-note`, `.blue-note`, `.hint`, `.warn-note`, `.branch-note`, `.alert-red`, `.sc-desc`, `.flow-sub` | **12.5px** |

UI 크롬(버튼·입력창·사이드바 트리·뱃지형 상태 라벨 등)은 콘텐츠 본문이 아니라고 판단해 이번 통일 범위에서 제외함.

## 5. 죽은 코드 정리 (2026-08-27 재검토 후 실행)

지난 조사에서 죽은 코드로 지목했던 것 중 하나가 틀렸던 걸 발견해서 다시 검증함. **`.grp-h.grp-sub`는 죽은 코드가 아니었음** — `js/core/shared-templates.js`의 `COMMON_ALL`(공통 › 채팅 표준 응대 페이지, `content-build.js`에 `"cmn_all":COMMON_ALL`로 등록되고 BRAND_TREE에도 `__content:"cmn_all"`로 연결돼 실제 내비게이션에서 열리는 살아있는 페이지) 안에서 "첫인사"/"그외 인사"/"끝인사" 소제목으로 3번 쓰이고 있었음. 처음 조사할 때 브랜드 파일(`js/brands/*.js`)만 grep하고 공통 파일(`js/core/shared-templates.js`)을 안 봐서 놓친 것 — 위 1번 표에 2-1 티어로 정식 반영함. **삭제하지 않음.**

실제로 죽은 코드였던 것 — `.section-title`/`.section-title .ic`(20px)과 그걸 사용하던 `STEP_REF_1`/`STEP_REF_2`/`STEP_REF_3`(슬룸 반품 3단계 레퍼런스 초안, `js/core/shared-templates.js` 최상단). `content-build.js`의 `CONTENT`/`BRAND_TREE`/`RAIL`/`DASH_HOME` 등 전 파일을 grep해서 이 세 상수를 참조하는 곳이 정말 하나도 없는 것 확인 후 삭제함. 삭제 후 재검증: `node --check`로 구문 확인 통과, v2 방식(파일별 개별 vm.Script) 전체 조립 실행에서 11개 브랜드 BRAND_TREE 정상, `cmn_all` 콘텐츠 정상 렌더링(grp-sub 포함 확인) — 에러 0건.

## 6. 다음 단계 (미착수)

`.h1lvl`↔`.sec-title`, `.h2lvl`(plain)↔`.grp-h`(plain) 클래스 자체 통합(마크업에서 A그룹 5개 브랜드 파일의 `<span class="num">` 직접 작성 방식을 `secTitle()`/`grp-h` 방식으로 교체)은 DOM 구조 리팩토링 단계에서 함께 처리 예정.
