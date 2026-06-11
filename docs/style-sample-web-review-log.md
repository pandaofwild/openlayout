# OpenDesignLab Style Sample Web Review Log

이 문서는 88개 디자인 스타일 샘플 웹을 한 번에 묶어 처리하지 않고, 하나씩 프로급 웹 샘플로 점검하고 개선하기 위한 작업대장이다.

## 진행 원칙

- 한 번에 하나의 style slug만 구현 변경한다.
- 각 style은 개선 전에 현재 샘플 화면, moodboard 신호, referenceSites의 웹 문법, 같은 category 안의 차이를 먼저 기록한다.
- 샘플 개선은 색상 변경만으로 인정하지 않는다. layout grammar, 정보 밀도, 카드 형태, 타이포 리듬, 장식 원리, 컴포넌트 구조 중 최소 3개 이상이 해당 style 정체성을 보여야 한다.
- 개선 후 desktop/mobile detail page를 확인하고, 가로 overflow와 텍스트 잘림을 검사한다.
- 다음 style로 넘어가기 전에 이 문서에 결과와 남은 의심점을 적는다.

## 상태 값

- `queued`: 아직 개별 리뷰 전.
- `reviewing`: 레퍼런스/무드보드/현재 샘플을 보는 중.
- `implemented`: 샘플 코드 개선 완료.
- `verified`: check, lint/build, browser QA까지 완료.
- `needs-revisit`: 구현했지만 시각 QA가 약하거나 인접 style과 헷갈릴 위험이 남음.

## 전체 순회 큐

| No. | category | style slug | sampleType | status | 이번 패스에서 확인할 핵심 |
| ---: | --- | --- | --- | --- | --- |
| 01 | 모던 / 미니멀 | minimalism | minimal-editorial | verified | blank-space ratio, product-first composition, thin-rule material index |
| 02 | 모던 / 미니멀 | modernism | minimal-editorial | verified | rational grid, primary accents, functional geometry |
| 03 | 모던 / 미니멀 | swiss-design | magazine-layout | verified | baseline grid, red signal bars, objective typography |
| 04 | 모던 / 미니멀 | international-style | minimal-editorial | verified | universal signage modules, neutral information system |
| 05 | 모던 / 미니멀 | scandinavian | organic-brand | verified | bright Nordic product commerce, light wood, practical warmth |
| 06 | 모던 / 미니멀 | japandi | minimal-editorial | verified | low horizontal rhythm, muted wood, ceramic quietness |
| 07 | 모던 / 미니멀 | warm-minimal | minimal-editorial | verified | cream warmth, approachable premium product hierarchy |
| 08 | 모던 / 미니멀 | soft-minimal | minimal-editorial | verified | low contrast, gentle rounded UI, frosted paper softness |
| 09 | 모던 / 미니멀 | high-end-minimal | luxury-product | verified | gallery spacing, severe product crop, quiet luxury commerce |
| 10 | 강렬 / 실험 | brutalism | brutalist-poster | verified | exposed structure, raw blocks, hard poster energy |
| 11 | 강렬 / 실험 | new-brutalism | brutalist-poster | verified | native web controls, thick borders, raw app UI |
| 12 | 강렬 / 실험 | anti-design | magazine-layout | verified | broken convention, off-grid navigation, deliberate awkwardness |
| 13 | 강렬 / 실험 | maximalism | street-campaign | verified | dense layers, abundant pattern, overloaded discovery |
| 14 | 강렬 / 실험 | glitch-art | cyber-dashboard | verified | net-art error surface, ASCII rupture feed, codec forensics rail |
| 15 | 강렬 / 실험 | deconstructivism | brutalist-poster | verified | structural fault, fracture section index, displaced project axis |
| 16 | 강렬 / 실험 | avant-garde | magazine-layout | verified | manifesto program, critical lecture rail, art-into-life agenda |
| 17 | 강렬 / 실험 | postmodernism | retro-commerce | verified | classical quote, mixed-era object index, Memphis anti-functional shop |
| 18 | 레트로 / 빈티지 | retro | retro-commerce | verified | retro broadcast shop, time-travel media dial, analog merch queue |
| 19 | 레트로 / 빈티지 | vintage | retro-commerce | verified | paper catalog, repair ticket ledger, patina material register |
| 20 | 레트로 / 빈티지 | seventies-retro | retro-commerce | verified | groovy landing, wavy campaign shelf, corduroy product rhythm |
| 21 | 레트로 / 빈티지 | eighties-retro | cyber-dashboard | verified | synth console, VHS mix queue, arcade control strip |
| 22 | 레트로 / 빈티지 | nineties-graphic | street-campaign | verified | DESKTOP ZINE, sticker link grid, halftone scrap wall |
| 23 | 레트로 / 빈티지 | y2k | cyber-dashboard | verified | GLOSS PORTAL, bubble widget stack, sparkle guestbook rail |
| 24 | 레트로 / 빈티지 | retro-futurism | retro-commerce | verified | FLIGHT DECK, destination poster rail, chrome capsule timetable |
| 25 | 레트로 / 빈티지 | mid-century-modern | minimal-editorial | verified | MIDCENTURY STUDIO, walnut slat product rail, Girard textile swatch wall |
| 26 | 레트로 / 빈티지 | bauhaus | magazine-layout | verified | BAUHAUS SCHOOL, workshop method grid, circle square triangle lab |
| 27 | 미래 / 디지털 | futurism | cyber-dashboard | queued | speed, forward motion, aerodynamic information flow |
| 28 | 미래 / 디지털 | cyberpunk | cyber-dashboard | queued | night-market city, commerce, neon worldbuilding |
| 29 | 미래 / 디지털 | neon-noir | cyber-dashboard | queued | cinematic dark, noir contrast, restrained neon |
| 30 | 미래 / 디지털 | techwear | cyber-dashboard | queued | modular gear, tactical panels, fabric/strap logic |
| 31 | 미래 / 디지털 | high-tech | saas-landing | queued | precision instrumentation, engineering surfaces |
| 32 | 미래 / 디지털 | ai-aesthetic | saas-landing | queued | model workspace, generated system artifacts, calm intelligence |
| 33 | 미래 / 디지털 | hologram-style | cyber-dashboard | queued | translucent spectral layers, prism depth, not chrome |
| 34 | 미래 / 디지털 | chromecore | luxury-product | queued | reflective Y2K metal, molded hardware, specular flash |
| 35 | 미래 / 디지털 | metaverse-style | cyber-dashboard | queued | spatial avatar/world UI, virtual economy, 3D scene logic |
| 36 | 럭셔리 / 클래식 | classic | luxury-product | queued | symmetrical heritage, serif restraint, traditional trust |
| 37 | 럭셔리 / 클래식 | neoclassic | luxury-product | queued | columns, museum spacing, disciplined ornament |
| 38 | 럭셔리 / 클래식 | luxury | luxury-product | queued | premium product reveal, rich material, controlled opulence |
| 39 | 럭셔리 / 클래식 | old-money | luxury-product | queued | understated heritage, club tone, quiet affluence |
| 40 | 럭셔리 / 클래식 | art-deco | luxury-product | queued | stepped geometry, metallic rhythm, deco symmetry |
| 41 | 럭셔리 / 클래식 | art-nouveau | organic-brand | queued | flowing botanical line, ornamental frame, organic luxury |
| 42 | 럭셔리 / 클래식 | baroque | luxury-product | queued | dramatic ornament, theatrical depth, heavy composition |
| 43 | 럭셔리 / 클래식 | rococo | luxury-product | queued | pastel shell curves, playful ornament, salon delicacy |
| 44 | 럭셔리 / 클래식 | gothic | street-campaign | queued | vertical stone, pointed arches, dark ecclesiastical rhythm |
| 45 | 자연 / 수공예 | organic-design | organic-brand | queued | biomorphic forms, earthy product system, rounded nature logic |
| 46 | 자연 / 수공예 | natural | organic-brand | queued | landscape material, earth palette, broad outdoor calm |
| 47 | 자연 / 수공예 | botanical | organic-brand | queued | leaf detail, herbarium structure, plant-specific grid |
| 48 | 자연 / 수공예 | eco-design | organic-brand | queued | circular system, recycled materials, trust hierarchy |
| 49 | 자연 / 수공예 | rustic | organic-brand | queued | rough local material, weathered wood, hospitality warmth |
| 50 | 자연 / 수공예 | kinfolk | minimal-editorial | queued | slow lifestyle editorial, linen, natural-light commerce |
| 51 | 자연 / 수공예 | handmade | organic-brand | queued | small-batch irregularity, thread, torn paper, maker shop |
| 52 | 자연 / 수공예 | craft | organic-brand | queued | workshop process, durable material skill, methodical craft |
| 53 | 자연 / 수공예 | wabi-sabi | minimal-editorial | queued | patina, asymmetry, raw surfaces, contemplative spacing |
| 54 | 귀여움 / 캐주얼 | kitsch | kawaii-app | queued | intentionally tacky mix, souvenir color, awkward charm |
| 55 | 귀여움 / 캐주얼 | kawaii | kawaii-app | queued | mascot softness, sticker UI, cute product flow |
| 56 | 귀여움 / 캐주얼 | dopamine-design | kawaii-app | queued | bright reward loops, energetic color therapy |
| 57 | 귀여움 / 캐주얼 | pop-art | street-campaign | queued | comic commercial punch, halftone, bold commodity rhythm |
| 58 | 귀여움 / 캐주얼 | comic-book-style | kawaii-app | queued | panels, speech blocks, action hierarchy |
| 59 | 귀여움 / 캐주얼 | toy-design | kawaii-app | queued | molded plastic, toy shelf, playful product object |
| 60 | 귀여움 / 캐주얼 | playful-design | kawaii-app | queued | friendly motion, asymmetric fun, approachable app UI |
| 61 | 귀여움 / 캐주얼 | pastel-style | kawaii-app | queued | pale soft palette, airy cute restraint, no generic candy overload |
| 62 | 귀여움 / 캐주얼 | bubble-design | kawaii-app | queued | inflated shapes, bubble volume, soft rounded depth |
| 63 | 스트리트 / 서브컬처 | streetwear | street-campaign | queued | drop commerce, label blocks, product wall |
| 64 | 스트리트 / 서브컬처 | graffiti | street-campaign | queued | wall mark energy, spray layers, urban authorship |
| 65 | 스트리트 / 서브컬처 | hiphop-style | street-campaign | queued | music culture, rhythm, poster/album commerce |
| 66 | 스트리트 / 서브컬처 | skate-culture | street-campaign | queued | deck catalog, spot map, sticker scrape |
| 67 | 스트리트 / 서브컬처 | punk | street-campaign | queued | zine aggression, torn paper, anti-authority UI |
| 68 | 스트리트 / 서브컬처 | grunge | street-campaign | queued | distressed texture, muted dirt, rough band archive |
| 69 | 스트리트 / 서브컬처 | indie-sleaze | street-campaign | queued | flash-photo nightlife, messy blog commerce |
| 70 | 스트리트 / 서브컬처 | rave-style | cyber-dashboard | queued | event energy, laser color, club schedule system |
| 71 | 스트리트 / 서브컬처 | lo-fi | retro-commerce | queued | low-resolution warmth, tape hiss, quiet analog UI |
| 72 | 편집 / 타이포그래피 | typography-focused | magazine-layout | queued | type scale specimen, baseline rhythm, font pairing shelf |
| 73 | 편집 / 타이포그래피 | editorial-design | magazine-layout | queued | longform article desk, pull quote, photo essay stack |
| 74 | 편집 / 타이포그래피 | magazine-style | magazine-layout | queued | issue browser, cover wall, department navigation |
| 75 | 편집 / 타이포그래피 | posterism | brutalist-poster | queued | single-message poster wall, campaign impact |
| 76 | 편집 / 타이포그래피 | grid-system | magazine-layout | queued | column ruler, module matrix, layout method |
| 77 | 편집 / 타이포그래피 | collage | magazine-layout | queued | cut paper desk, tape layers, mixed media |
| 78 | 편집 / 타이포그래피 | photomontage | magazine-layout | queued | photo collision, masks, campaign narrative |
| 79 | 편집 / 타이포그래피 | experimental-type | brutalist-poster | queued | glyph mutation, variable forms, type as material |
| 80 | 편집 / 타이포그래피 | newspaper-style | magazine-layout | queued | masthead, headline stack, dense columns |
| 81 | UI / 웹 | flat-design | saas-landing | queued | solid fill modules, no-depth buttons, simple icon logic |
| 82 | UI / 웹 | material-design | saas-landing | queued | elevation stack, state layers, component physics |
| 83 | UI / 웹 | neumorphism | saas-landing | queued | inset controls, double shadow, tone-on-tone tactile UI |
| 84 | UI / 웹 | glassmorphism | saas-landing | queued | frosted cards, blur depth, translucent layering |
| 85 | UI / 웹 | claymorphism | kawaii-app | queued | puffy 3D modules, pastel extrusion, playful app commerce |
| 86 | UI / 웹 | dark-mode-design | cyber-dashboard | queued | readable dark ops, contrast ladder, focus states |
| 87 | UI / 웹 | saas-style | saas-landing | queued | operations home, product proof grid, pricing matrix |
| 88 | UI / 웹 | startup-landing-page | saas-landing | queued | conversion story, hero CTA ladder, funnel sequence |

## 01. minimalism

Status: `verified`

### 현재 샘플 진단

- 현재 샘플은 깔끔한 SaaS landing + dashboard mockup 구조다.
- 장점: muted palette, 넓은 좌측 hero, 얇은 border, 낮은 shadow, 적은 CTA.
- 약점: 작은 dashboard 카드와 metric tiles가 많아 `SaaS Style`과 헷갈릴 수 있다.
- 약점: moodboard의 warm white studio table, paper/cotton/stone, thin-rule editorial grid가 샘플 표면에 충분히 번역되지 않았다.
- 약점: Apple식 product-first composition보다 B2B dashboard proof가 더 먼저 읽힌다.

### 레퍼런스에서 가져올 웹 UI 문법

- Linear: muted product surface, almost invisible separators, tiny navigation, calm issue rows.
- Apple: large blank space, product object as hero, copy restraint, one strong focal surface.
- Stripe: exact section rhythm, hairline dividers, restrained proof modules, controlled accent.

### 샘플 목표

- Generic SaaS dashboard를 줄이고, 하나의 큰 product canvas와 thin-rule material index를 중심으로 재구성한다.
- 고유 마커: `MINIMAL PRODUCT CANVAS`, `negative-space product stage`, `thin-rule material index`.
- 화면에서 제목을 읽지 않아도 minimalism으로 보이도록 넓은 빈 공간, 한 개의 중심 제품 표면, 얇은 구분선, tactile neutral swatches를 노출한다.

### 검증 계획

- `npm run check:style-distinction`가 minimalism 고유 마커를 요구하도록 먼저 실패시킨다.
- 구현 후 `npm run check:style-distinction`, `npm run lint`, minimalism desktop/mobile browser QA를 실행한다.
- 결과 스크린샷: `output/playwright/per-style-review/minimalism/after/`.

### 구현 결과

- 기존 SaaS dashboard proof를 제거하고 하나의 큰 product canvas 중심으로 재구성했다.
- `MINIMAL PRODUCT CANVAS`, `negative-space product stage`, `thin-rule material index`를 실제 샘플 화면에 노출했다.
- moodboard의 paper, stone, cotton, graphite 재료감을 material index로 번역했다.
- Linear/Apple/Stripe에서 가져온 문법은 작은 navigation, 큰 여백, 제품 중심 hero, 얇은 rule, 제한된 copy로 반영했다.
- 같은 category 안에서 `modernism`의 강한 기능적 그리드/primary accent, `swiss-design`의 typographic grid, `high-end-minimal`의 luxury product crop과 구분되도록 dashboard/metric 밀도를 낮췄다.

### 검증 결과

- RED: `npm run check:style-distinction` 실패 확인. 이유: minimalism marker 3개 누락.
- GREEN: `npm run check:style-distinction` 통과.
- `npm run lint` 통과.
- `npm run build` 통과. Next.js static pages `580/580`.
- `npm run check:data` 통과. 88 styles, 10 categories.
- `npm run check:style-refs` 통과. 88 styles covered.
- Browser QA: `/en/styles/minimalism` desktop/mobile에서 marker 3개와 horizontal overflow `0` 확인.
- Before screenshots: `output/playwright/per-style-review/minimalism/before/`.
- After screenshots: `output/playwright/per-style-review/minimalism/after/`.

### 남은 의심점

- 없음. 다음 패스는 `modernism`만 따로 리뷰하고 구현한다.

## 02. modernism

Status: `verified`

### 현재 샘플 진단

- 현재 샘플은 검정 구조선, primary red/blue/yellow, 비대칭 그리드가 보여서 기본 방향은 맞다.
- 약점: 샘플이 단일 제품 카드와 작은 방문/컬렉션 리스트에 머물러 실제 웹 샘플보다 포스터형 카드에 가깝다.
- 약점: Bauhaus-Archiv와 MoMA에서 보이는 프로그램/전시/컬렉션의 기관형 정보 구조가 충분히 반영되지 않았다.
- 약점: Vitra의 제품 카테고리 그리드, AIM의 현대적 번호/인덱스 실험이 화면 구조로 드러나지 않는다.
- 약점: `minimalism`과 비교하면 색과 굵은 선은 다르지만, 더 큰 시스템성과 기능적 모듈 논리가 필요하다.

### 레퍼런스에서 가져올 웹 UI 문법

- Bauhaus-Archiv: 방문, 참여, 발견, 연구 같은 큰 섹션을 프로그램 카드로 나누는 기관형 정보 구조.
- MoMA: 방문/전시/아트/스토어로 나뉘는 직접적인 대형 내비게이션과 이벤트/컬렉션 모듈.
- Vitra: 제품 카테고리 목록, 오브젝트 중심 사진, product/furniture taxonomy.
- AIM: 숫자 인덱스, 실험/갤러리 구조, modernist graphic composition의 현대적 재해석.

### 샘플 목표

- 단일 상품 카드가 아니라 `functional program grid`를 중심으로 한 웹 샘플로 만든다.
- 고유 마커: `MODERNIST PROGRAM GRID`, `function-led object index`, `primary geometry modules`.
- 화면에서 제목을 읽지 않아도 rational grid, primary accent, numbered modules, architecture/object taxonomy가 보이게 한다.
- Swiss Design의 신문/정보 객관성, International Style의 중립 시스템, Minimalism의 빈 여백과 다르게 더 적극적인 구조선과 색면을 사용한다.

### 검증 계획

- `npm run check:style-distinction`가 modernism 고유 마커 3개를 요구하도록 먼저 실패시킨다.
- 구현 후 `npm run check:style-distinction`, `npm run lint`, `npm run build`, modernism desktop/mobile browser QA를 실행한다.
- 결과 스크린샷: `output/playwright/per-style-review/modernism/after/`.

### 구현 결과

- 기존 단일 제품 카드 중심 샘플을 기관형 `MODERNIST PROGRAM GRID`로 재구성했다.
- Bauhaus-Archiv/MoMA에서 가져온 방문, 오브젝트, 실험, 연구 섹션 구조를 상단 프로그램 모듈로 반영했다.
- Vitra식 object taxonomy를 `function-led object index`로 반영하고, 제품/건축/학교 아카이브를 한 화면에 묶었다.
- AIM의 현대적 번호 인덱스와 실험형 구성은 번호 코드, 압축된 그리드, `primary geometry modules`로 번역했다.
- `minimalism`과 달리 빈 여백보다 굵은 구조선, 원색 기능 블록, 프로그램 밀도를 전면에 두었다.

### 검증 결과

- RED: `npm run check:style-distinction` 실패 확인. 이유: modernism marker 3개 누락.
- GREEN: `npm run check:style-distinction` 통과.
- `npm run lint` 통과.
- `npm run build` 통과. Next.js static pages `580/580`.
- `npm run check:data` 통과. 88 styles, 10 categories.
- `npm run check:style-refs` 통과. 88 styles covered.
- Browser QA: `/en/styles/modernism` desktop/mobile에서 marker 3개와 horizontal overflow `0` 확인.
- Before screenshots: `output/playwright/per-style-review/modernism/before/`.
- After screenshots: `output/playwright/per-style-review/modernism/after/`.

### 남은 의심점

- 없음. 다음 패스는 `swiss-design`만 따로 리뷰하고 구현한다.

## 03. swiss-design

Status: `verified`

### 현재 샘플 진단

- 현재 샘플은 기사/출발 정보 레이아웃과 red marker가 있어 Swiss 방향은 이미 있다.
- 약점: 중앙 샘플이 하나의 뉴스 카드처럼 보이며, baseline grid와 column guide가 샘플 안에서 충분히 구조화되어 보이지 않는다.
- 약점: SWI의 다국어/섹션형 공공 뉴스 구조와 SBB의 timetable/ticket purchase 문법이 동시에 보이기에는 departures rail이 작다.
- 약점: Web Design Lookbook이 말하는 grid first/type leads 특성이 마커 수준으로 드러나지 않는다.
- 약점: `modernism`과 비교하면 red accent와 굵은 선은 다르지만, Swiss 특유의 objective typography와 measured rhythm이 더 분명해야 한다.

### 레퍼런스에서 가져올 웹 UI 문법

- SWI swissinfo.ch: 다국어 선택, 섹션 navigation, Top Stories, newsletter, topic blocks처럼 정보가 공공 서비스 구조로 나뉜다.
- SBB: timetable/ticket purchase, language selection, help/contact 같은 즉시 목적형 정보 rail.
- Web Design Lookbook: grid first, type leads, modular systems, neutral base with measured red accent.

### 샘플 목표

- 기사 카드 하나가 아니라 `SWISS BASELINE GRID`가 보이는 정보 시스템 샘플로 만든다.
- 고유 마커: `SWISS BASELINE GRID`, `multilingual public-service nav`, `timetable information rail`.
- 헤드라인, 섹션, 시간표, 언어, 기사 row가 같은 column/baseline 규칙 안에 정렬되어야 한다.
- `modernism`보다 원색 기하학을 줄이고, `international-style`보다 red signal과 typography-led editorial rhythm을 더 강하게 둔다.

### 검증 계획

- `npm run check:style-distinction`가 swiss-design 고유 마커 3개를 요구하도록 먼저 실패시킨다.
- 구현 후 `npm run check:style-distinction`, `npm run lint`, `npm run build`, swiss-design desktop/mobile browser QA를 실행한다.
- 결과 스크린샷: `output/playwright/per-style-review/swiss-design/after/`.

### 구현 결과

- 기존 기사 카드 중심 샘플을 `SWISS BASELINE GRID`가 보이는 공공 정보 시스템으로 재구성했다.
- SWI swissinfo.ch의 다국어 선택과 섹션형 public-service navigation을 상단 utility/nav와 numbered section column으로 반영했다.
- SBB의 즉시 목적형 timetable 문법을 오른쪽 `timetable information rail`로 키워서 기사 row와 다른 기능 레이어로 보이게 했다.
- Web Design Lookbook의 grid first/type leads 원칙을 baseline overlay, column guide, objective headline rhythm, measured red signal로 번역했다.
- `modernism`보다 primary geometry와 오브젝트 taxonomy를 줄이고, `international-style`보다 red signal과 editorial information density를 명확히 두었다.

### 검증 결과

- RED: `npm run check:style-distinction` 실패 확인. 이유: swiss-design marker 3개 누락.
- GREEN: `npm run check:style-distinction` 통과.
- `npm run lint` 통과.
- `npm run build` 통과. Next.js static pages `580/580`.
- `npm run check:data` 통과. 88 styles, 10 categories.
- `npm run check:style-refs` 통과. 88 styles covered.
- Browser QA: `/en/styles/swiss-design` desktop/mobile에서 marker 3개와 horizontal overflow `0` 확인.
- Before screenshots: `output/playwright/per-style-review/swiss-design/before/`.
- After screenshots: `output/playwright/per-style-review/swiss-design/after/`.

### 남은 의심점

- 없음. 다음 패스는 `international-style`만 따로 리뷰하고 구현한다.

## 04. international-style

Status: `verified`

### 현재 샘플 진단

- 현재 샘플은 neutral grid, blue accent, component list를 갖고 있어 방향은 맞다.
- 약점: IBM Carbon 데모 화면처럼 보이는 단일 design-system landing에 머물러, International Style의 보편적 운영/시장/문서 시스템성이 약하다.
- 약점: moodboard의 transport-blue wayfinding, steel/acrylic standard panels, map-like grid가 실제 UI 재료감으로 충분히 번역되지 않았다.
- 약점: MoMA식 기관형 information architecture가 hero 이후의 cross-content modules로 보이지 않는다.
- 약점: `swiss-design`과 비교하면 red signal은 없지만, 둘 다 typography grid 카드로 읽힐 수 있어 global system matrix와 표준 컴포넌트 rail이 더 필요하다.

### 레퍼런스에서 가져올 웹 UI 문법

- IBM Design Language: Switch sites, Foundations, Implementation, Practices, typography/color/2x grid/iconography 같은 대형 design-system navigation.
- IBM Layout overview: essential content strategy, simple structure, systematic logic, alignment to an underlying grid, repeated measurements and proportions.
- MoMA: Visit, exhibitions/events, art/collection, store, membership처럼 서로 다른 목적의 기관 정보를 동일한 navigation shell 안에 묶는 구조.

### 샘플 목표

- 단일 Carbon-style 카드가 아니라 `GLOBAL SYSTEM PORTAL`이 보이는 국제 표준 운영 샘플로 만든다.
- 고유 마커: `GLOBAL SYSTEM PORTAL`, `2x component rail`, `cross-market content matrix`.
- global locale/status, product standards, market readiness, institution content modules가 같은 중립 grid 안에서 반복되어야 한다.
- `swiss-design`보다 red editorial signal과 포스터 리듬을 줄이고, `modernism`보다 primary geometry를 줄이며, `scandinavian`/`japandi`처럼 생활감 있는 소재와 곡선을 피한다.

### 검증 계획

- `npm run check:style-distinction`가 international-style 고유 마커 3개를 요구하도록 먼저 실패시킨다.
- 구현 후 `npm run check:style-distinction`, `npm run lint`, `npm run build`, `npm run check:data`, `npm run check:style-refs`, international-style desktop/mobile browser QA를 실행한다.
- 결과 스크린샷: `output/playwright/per-style-review/international-style/after/`.

### 구현 결과

- 기존 Carbon-style landing을 `GLOBAL SYSTEM PORTAL`이 보이는 국제 표준 운영 포털로 재구성했다.
- IBM Design Language의 switch sites, foundations/implementation/practices, 2x grid 문법을 상단 system shell과 `2x component rail`로 번역했다.
- IBM Layout overview의 systematic logic, repeated measurements, grid alignment를 market table, component rail, module cards의 반복 규칙으로 반영했다.
- MoMA의 visit/events/collection/member 같은 기관형 information architecture를 하단 content module strip으로 반영했다.
- moodboard의 transport-blue, steel/acrylic, map-like grid는 blue action strip, grid overlay, material cells, neutral panel system으로 번역했다.
- `swiss-design`과 달리 red editorial signal과 poster rhythm을 제거하고, 시장/locale/status 중심 `cross-market content matrix`를 전면에 두었다.

### 검증 결과

- RED: `npm run check:style-distinction` 실패 확인. 이유: international-style marker 3개 누락.
- GREEN: `npm run check:style-distinction` 통과.
- `npm run lint` 통과.
- `npm run build` 통과. Next.js static pages `580/580`.
- `npm run check:data` 통과. 88 styles, 10 categories.
- `npm run check:style-refs` 통과. 88 styles covered.
- Browser QA: `/en/styles/international-style` desktop/mobile에서 marker 3개와 horizontal overflow `0` 확인.
- Browser QA: `/en/styles` desktop/mobile에서 International Style card 존재와 horizontal overflow `0` 확인.
- Before screenshots: `output/playwright/per-style-review/international-style/before/`.
- After screenshots: `output/playwright/per-style-review/international-style/after/`.

### 남은 의심점

- 없음. 다음 패스는 `scandinavian`만 따로 리뷰하고 구현한다.

## 05. scandinavian

Status: `verified`

### 현재 샘플 진단

- 현재 샘플은 밝은 room hero, product cards, oak/sage palette를 갖고 있어 Scandinavian 방향은 이미 강하다.
- 약점: hero 이미지와 제품 카드 3개 중심이라, IKEA/Nordic Nest식 room-by-room category navigation과 실용적인 shopping hierarchy가 약하다.
- 약점: Muuto식 product family/category taxonomy가 화면에 드러나지 않아 단순 홈 스타일링 카드처럼 보일 수 있다.
- 약점: moodboard의 birch/linen/wool/ceramic/material chips가 UI 컴포넌트의 표면, category shelf, utility controls로 충분히 번역되지 않았다.
- 약점: `japandi`와 비교하면 더 밝고 커머스적이지만, 첫 화면 구조가 여전히 조용한 인테리어 editorial처럼 읽힐 수 있다.

### 레퍼런스에서 가져올 웹 UI 문법

- IKEA: room/story cards, small-space ideas, designer stories처럼 생활 장면과 실용 팁을 카드형으로 이어가는 친근한 홈 탐색.
- Muuto: seating, sofas, tables, storage, lighting, accessories, product families처럼 제품 taxonomy가 상세하게 나뉘는 구조.
- Nordic Nest: shop by category, offers, new arrivals, room categories, Scandinavian design icons처럼 쇼핑 목적과 lifestyle discovery가 함께 있는 구조.

### 샘플 목표

- 단일 lifestyle hero가 아니라 `NORDIC ROOM SHOP`이 보이는 밝은 홈 커머스 샘플로 만든다.
- 고유 마커: `NORDIC ROOM SHOP`, `room-by-room category shelf`, `soft utility product cards`.
- room cards, category icons, product family rows, offer badge, practical price/action hierarchy가 같은 화면에 보여야 한다.
- `japandi`보다 밝고 빠른 쇼핑 흐름, `warm-minimal`보다 실용적이고 commerce-heavy한 카드 밀도, `international-style`보다 소재감과 생활 이미지가 강해야 한다.

### 검증 계획

- `npm run check:style-distinction`가 scandinavian 고유 마커 3개를 요구하도록 먼저 실패시킨다.
- 구현 후 `npm run check:style-distinction`, `npm run lint`, `npm run build`, `npm run check:data`, `npm run check:style-refs`, scandinavian desktop/mobile browser QA를 실행한다.
- 결과 스크린샷: `output/playwright/per-style-review/scandinavian/after/`.

### 구현 결과

- 기존 room hero + product cards 구성을 `NORDIC ROOM SHOP`이 보이는 밝은 홈 커머스 화면으로 재조직했다.
- IKEA의 room/story cards와 small-space ideas 문법을 hero badge, room CTA, practical offer badge로 반영했다.
- Muuto의 seating/tables/lighting/storage/product family taxonomy를 product families rail로 반영했다.
- Nordic Nest의 shop by category, new arrivals, room shopping hierarchy를 `room-by-room category shelf`와 offer/product card grid로 번역했다.
- moodboard의 birch, linen, wool, ceramic material signal은 rounded shelf chips, soft product surfaces, material color beads로 옮겼다.
- `japandi`보다 빠른 쇼핑 흐름과 밝은 room/card density를 강화하고, `warm-minimal`보다 제품/가격/action 중심의 실용 커머스 구조를 전면에 두었다.

### 검증 결과

- RED: `npm run check:style-distinction` 실패 확인. 이유: scandinavian marker 3개 누락.
- GREEN: `npm run check:style-distinction` 통과.
- `npm run lint` 통과.
- `npm run build` 통과. Next.js static pages `580/580`.
- `npm run check:data` 통과. 88 styles, 10 categories.
- `npm run check:style-refs` 통과. 88 styles covered.
- Browser QA: `/en/styles/scandinavian` desktop/mobile에서 marker 3개와 horizontal overflow `0` 확인.
- Browser QA: `/en/styles` desktop/mobile에서 Scandinavian card와 `NORDIC ROOM SHOP` marker, horizontal overflow `0` 확인.
- Before screenshots: `output/playwright/per-style-review/scandinavian/before/`.
- After screenshots: `output/playwright/per-style-review/scandinavian/after/`.

### 남은 의심점

- 없음. 다음 패스는 `japandi`만 따로 리뷰하고 구현한다.

## 06. japandi

Status: `verified`

### 현재 샘플 진단

- 현재 샘플은 muted wood, rice-paper panel, shoji light, material study가 있어 Japandi 방향은 강하다.
- 약점: Karimoku Case/Norm Architects에서 보이는 case-study project meta, creator/artisan context, image index 구조가 약하다.
- 약점: 긴 이미지 블록과 조용한 material panel은 있지만, `scandinavian`과 비교해 쇼핑이 아니고 느린 공간 기록이라는 차이가 더 명확해야 한다.
- 약점: `warm-minimal`의 interior studio 카드와 구분하려면 상담/CTA보다 장소, 연도, 재료, case index가 더 전면에 있어야 한다.
- 약점: moodboard의 shoji paper, ash wood, ceramic, woven textile이 단순 palette가 아니라 UI의 index/sequence/field note로 번역되어야 한다.

### 레퍼런스에서 가져올 웹 UI 문법

- Karimoku Case: About/Cases/Collection/Artisans/Creators, 다국어 nav, creators bio/Q&A처럼 제작자와 재료 배경을 느리게 읽게 하는 구조.
- Norm Azabu Residence: location, photography, category, year 같은 project meta와 긴 서술, 이미지 index 01-30의 case-study archive 문법.
- Norm Soft Minimal: human-centric restraint, tactility, natural light, soft-minimal storytelling.

### 샘플 목표

- 단일 interior hero가 아니라 `LOW HORIZONTAL RESIDENCE`가 보이는 조용한 case-study 웹 샘플로 만든다.
- 고유 마커: `LOW HORIZONTAL RESIDENCE`, `shoji material index`, `slow case-study sequence`.
- 장소/연도/분야 project meta, 낮은 수평 공간 패널, shoji/wood/ceramic material index, 이미지 sequence가 같이 보여야 한다.
- `scandinavian`보다 제품/가격/카테고리를 줄이고, `warm-minimal`보다 스튜디오 CTA를 줄이며, `wabi-sabi`보다 더 polished하고 refined한 재료감을 유지한다.

### 검증 계획

- `npm run check:style-distinction`가 japandi 고유 마커 3개를 요구하도록 먼저 실패시킨다.
- 구현 후 `npm run check:style-distinction`, `npm run lint`, `npm run build`, `npm run check:data`, `npm run check:style-refs`, japandi desktop/mobile browser QA를 실행한다.
- 결과 스크린샷: `output/playwright/per-style-review/japandi/after/`.

### 구현 결과

- 기존 quiet interior landing을 `LOW HORIZONTAL RESIDENCE`가 보이는 case-study sample로 재구성했다.
- Karimoku Case의 Cases/Collection/Artisans/Creators 구조와 제작자/재료 맥락을 nav와 creator note로 반영했다.
- Norm Azabu Residence의 location/category/year project meta와 image index 문법을 meta grid와 `slow case-study sequence`로 번역했다.
- Norm Soft Minimal의 human-centric restraint와 tactility는 낮은 대비, 작은 CTA, `shoji material index`, soft image fields로 반영했다.
- moodboard의 shoji paper, ash wood, ceramic, moss ink는 material index와 sequence thumbnail의 표면 처리로 옮겼다.
- `scandinavian`과 달리 가격/장바구니/room shopping을 제거하고, `warm-minimal`과 달리 상담 CTA보다 장소/연도/재료/sequence를 전면에 두었다.

### 검증 결과

- RED: `npm run check:style-distinction` 실패 확인. 이유: japandi marker 3개 누락.
- GREEN: `npm run check:style-distinction` 통과.
- `npm run lint` 통과.
- `npm run build` 통과. Next.js static pages `580/580`.
- `npm run check:data` 통과. 88 styles, 10 categories.
- `npm run check:style-refs` 통과. 88 styles covered.
- Browser QA: `/en/styles/japandi` desktop/mobile에서 marker 3개와 horizontal overflow `0` 확인.
- Browser QA: `/en/styles` desktop/mobile에서 Japandi card와 `LOW HORIZONTAL RESIDENCE` marker, horizontal overflow `0` 확인.
- Before screenshots: `output/playwright/per-style-review/japandi/before/`.
- After screenshots: `output/playwright/per-style-review/japandi/after/`.

### 남은 의심점

- 없음. 다음 패스는 `warm-minimal`만 따로 리뷰하고 구현한다.

## 07. warm-minimal

Status: `verified`

### 현재 샘플 진단

- 현재 샘플은 cream/taupe warmth, terracotta CTA, soft project cards가 있어 Warm Minimal 방향은 이미 강하다.
- 약점: 고유한 studio portfolio flow가 marker 수준으로 고정되어 있지 않아 `soft-minimal`의 상담 서비스 화면과 일부 겹칠 수 있다.
- 약점: QUQU의 Selected Works 01-16와 consultation form 문법, Vellum의 WORK portfolio nav가 더 구조적으로 보여야 한다.
- 약점: moodboard의 linen, terracotta, brass, clay material signal이 project stack과 CTA 주변 표면 처리로 더 번역될 필요가 있다.
- 약점: `japandi`와 비교하면 따뜻하고 CTA가 있지만, 장소/재료 case-study가 아니라 스튜디오 포트폴리오라는 차이를 더 전면화해야 한다.

### 레퍼런스에서 가져올 웹 UI 문법

- QUQU Design Studio: Studio/Portfolio/Contact/PL-EN nav, Selected Works 01-16, room project cards, consultation form.
- Vellum Studio: HOME/WORK/CONTACT/ABOUT nav, residential project list, warm tranquil statement, newsletter/contact module.
- Norm Soft Minimal: tactile neutrals, slower reading rhythm, human-centered restraint.

### 샘플 목표

- 단일 따뜻한 interior card가 아니라 `WARM STUDIO PORTFOLIO`가 보이는 스튜디오 포트폴리오 샘플로 만든다.
- 고유 마커: `WARM STUDIO PORTFOLIO`, `terracotta consultation CTA`, `linen project stack`.
- selected works, project list, rounded image card, consultation CTA, linen/brass/clay material cues가 같이 보여야 한다.
- `soft-minimal`보다 색 온도와 terracotta CTA를 강하게, `japandi`보다 문의/포트폴리오 흐름을 강하게, `scandinavian`보다 제품/가격 밀도를 낮게 둔다.

### 검증 계획

- `npm run check:style-distinction`가 warm-minimal 고유 마커 3개를 요구하도록 먼저 실패시킨다.
- 구현 후 `npm run check:style-distinction`, `npm run lint`, `npm run build`, `npm run check:data`, `npm run check:style-refs`, warm-minimal desktop/mobile browser QA를 실행한다.
- 결과 스크린샷: `output/playwright/per-style-review/warm-minimal/after/`.

### 구현 결과

- 기존 warm interior card를 `WARM STUDIO PORTFOLIO`가 보이는 스튜디오 포트폴리오 샘플로 보강했다.
- QUQU Design Studio의 Selected Works 01-16과 consultation flow를 hero badge와 `terracotta consultation CTA`로 반영했다.
- Vellum Studio의 WORK 중심 주거 프로젝트 list 문법을 `linen project stack`과 둥근 project rows로 번역했다.
- Norm Soft Minimal의 tactile neutral rhythm은 cream/taupe surface, soft image crop, 작은 material strip으로 유지했다.
- moodboard의 linen, brass, clay, terracotta signal은 CTA, project stack, warm material beads로 옮겼다.
- `soft-minimal`보다 terracotta와 portfolio/project 흐름을 강하게, `japandi`보다 상담/스튜디오 전환을 강하게 두었다.

### 검증 결과

- RED: `npm run check:style-distinction` 실패 확인. 이유: warm-minimal marker 3개 누락.
- GREEN: `npm run check:style-distinction` 통과.
- `npm run lint` 통과.
- `npm run build` 통과. Next.js static pages `580/580`.
- `npm run check:data` 통과. 88 styles, 10 categories.
- `npm run check:style-refs` 통과. 88 styles covered.
- Browser QA: `/en/styles/warm-minimal` desktop/mobile에서 marker 3개와 horizontal overflow `0` 확인.
- Browser QA: `/en/styles` desktop/mobile에서 Warm Minimal card와 `WARM STUDIO PORTFOLIO` marker, horizontal overflow `0` 확인.
- Before screenshots: `output/playwright/per-style-review/warm-minimal/before/`.
- After screenshots: `output/playwright/per-style-review/warm-minimal/after/`.

### 남은 의심점

- 없음. 다음 패스는 `soft-minimal`만 따로 리뷰하고 구현한다.

## 08. soft-minimal

Status: `verified`

### 현재 샘플 진단

- 현재 샘플은 low-contrast hero, rounded consultation card, service rail이 있어 Soft Minimal 방향은 강하다.
- 약점: `warm-minimal`과 비교해 더 조용한 서비스 flow라는 marker가 명시적으로 고정되어 있지 않다.
- 약점: Norm Soft Minimal의 human-centered essay/index와 Vellum의 calm service/contact rhythm이 상담 flow 구조로 더 드러나야 한다.
- 약점: Toogood의 sculptural off-white rhythm은 표면과 카드 형태로만 희미하게 보이며, product/furniture 느낌으로 흐르지 않게 서비스 맥락을 강화해야 한다.
- 약점: moodboard의 frosted vellum, translucent cards, pill controls, tactile samples가 실제 UI state rail로 번역되어야 한다.

### 레퍼런스에서 가져올 웹 UI 문법

- Norm Soft Minimal: human-centric restraint, tactile imagery, slow essay and index rhythm.
- Vellum Studio: calm HOME/WORK/CONTACT/ABOUT nav, warm residential statement, quiet contact/newsletter module.
- Toogood: softened editorial minimalism, sculptural off-white product rhythm, restrained object storytelling.

### 샘플 목표

- 단일 rounded landing이 아니라 `SOFT SERVICE FLOW`가 보이는 저압 상담/서비스 샘플로 만든다.
- 고유 마커: `SOFT SERVICE FLOW`, `frosted consultation card`, `low-contrast session rail`.
- consultation card, package/session rows, soft metric, muted CTA가 낮은 대비 안에서도 명확하게 읽혀야 한다.
- `warm-minimal`보다 terracotta와 portfolio 흐름을 줄이고, `japandi`보다 case-study/wood index를 줄이며, `high-end-minimal`보다 훨씬 친근하고 rounded service UI로 둔다.

### 검증 계획

- `npm run check:style-distinction`가 soft-minimal 고유 마커 3개를 요구하도록 먼저 실패시킨다.
- 구현 후 `npm run check:style-distinction`, `npm run lint`, `npm run build`, `npm run check:data`, `npm run check:style-refs`, soft-minimal desktop/mobile browser QA를 실행한다.
- 결과 스크린샷: `output/playwright/per-style-review/soft-minimal/after/`.

### 구현 결과

- 기존 rounded consultation landing을 `SOFT SERVICE FLOW`가 보이는 저압 상담/서비스 샘플로 고정했다.
- Norm Soft Minimal의 human-centered restraint와 slow essay rhythm은 낮은 대비 제목, 짧은 설명, muted CTA로 반영했다.
- Vellum Studio의 quiet contact/service pacing은 `frosted consultation card`와 calm package rows로 번역했다.
- Toogood의 sculptural off-white restraint는 frosted image surface와 pill-shaped session UI로 제한적으로 반영했다.
- moodboard의 frosted vellum, translucent cards, pill controls는 `low-contrast session rail`과 rounded service cards로 옮겼다.
- `warm-minimal`과 달리 terracotta/portfolio 열기를 줄이고, `high-end-minimal`보다 훨씬 친근한 상담 UI 밀도를 유지했다.

### 검증 결과

- RED: `npm run check:style-distinction` 실패 확인. 이유: soft-minimal marker 3개 누락.
- GREEN: `npm run check:style-distinction` 통과.
- `npm run lint` 통과.
- `npm run build` 통과. Next.js static pages `580/580`.
- `npm run check:data` 통과. 88 styles, 10 categories.
- `npm run check:style-refs` 통과. 88 styles covered.
- Browser QA: `/en/styles/soft-minimal` desktop/mobile에서 marker 3개와 horizontal overflow `0` 확인.
- Browser QA: `/en/styles` desktop/mobile에서 Soft Minimal card와 `SOFT SERVICE FLOW` marker, horizontal overflow `0` 확인.
- Before screenshots: `output/playwright/per-style-review/soft-minimal/before/`.
- After screenshots: `output/playwright/per-style-review/soft-minimal/after/`.

### 남은 의심점

- 없음. 다음 패스는 `high-end-minimal`만 따로 리뷰하고 구현한다.

## 09. high-end-minimal

Status: `verified`

### 현재 샘플 진단

- 현재 샘플은 product crop, black/ivory hierarchy, reserved CTA가 있어 high-end minimal 방향은 강하다.
- 약점: Aesop의 category/product taxonomy와 Jil Sander의 엄격한 luxury commerce nav가 marker 수준으로 드러나지 않는다.
- 약점: moodboard의 crop marks, black stone, marble, brushed metal, satin material signals가 product detail rail로 더 명확해야 한다.
- 약점: `minimalism`과 비교해 단순 여백이 아니라 구매 가능한 luxury detail page라는 차이를 더 전면화해야 한다.
- 약점: `luxury` category와 겹치지 않게 장식적 고급감보다 exact spacing과 severe product crop을 강조해야 한다.

### 레퍼런스에서 가져올 웹 UI 문법

- Aesop: product category taxonomy, disciplined product storytelling, refined spacing, muted material color, controlled interaction detail.
- Jil Sander: ready-to-wear/accessories mega navigation, severe neutral composition, quiet product commerce hierarchy.
- Toteme: image-led restraint, exact spacing, black-and-cream editorial commerce modules.

### 샘플 목표

- 단일 제품 hero가 아니라 `QUIET COMMERCE FRAME`이 보이는 럭셔리 상품 상세 샘플로 만든다.
- 고유 마커: `QUIET COMMERCE FRAME`, `severe product crop`, `material provenance rail`.
- product crop, edition/price/reserve, material provenance, restrained taxonomy가 정교한 비례 안에 보여야 한다.
- `minimalism`보다 구매/상품 정보가 분명하고, `soft-minimal`보다 둥근 서비스 UI를 줄이며, `luxury`보다 장식보다 절제/여백/정확성을 우선한다.

### 검증 계획

- `npm run check:style-distinction`가 high-end-minimal 고유 마커 3개를 요구하도록 먼저 실패시킨다.
- 구현 후 `npm run check:style-distinction`, `npm run lint`, `npm run build`, `npm run check:data`, `npm run check:style-refs`, high-end-minimal desktop/mobile browser QA를 실행한다.
- 결과 스크린샷: `output/playwright/per-style-review/high-end-minimal/after/`.

### 구현 결과

- 기존 product hero를 `QUIET COMMERCE FRAME`이 보이는 luxury product detail sample로 고정했다.
- Aesop의 product taxonomy와 restrained interaction detail은 edition, price, reserve, material detail의 조용한 hierarchy로 반영했다.
- Jil Sander의 severe neutral commerce structure는 `severe product crop`, strict nav, small labels, black reserve CTA로 번역했다.
- Toteme의 image-led restraint와 exact spacing은 large image/detail split과 thin pager로 유지했다.
- moodboard의 crop marks, stone, marble, brushed metal signal은 `material provenance rail`과 product crop 주변의 fine label로 옮겼다.
- `minimalism`과 달리 구매/가격/예약 정보가 분명하고, `soft-minimal`과 달리 rounded service card를 쓰지 않는 restrained luxury commerce로 유지했다.

### 검증 결과

- RED: `npm run check:style-distinction` 실패 확인. 이유: high-end-minimal marker 3개 누락.
- GREEN: `npm run check:style-distinction` 통과.
- `npm run lint` 통과.
- `npm run build` 통과. Next.js static pages `580/580`.
- `npm run check:data` 통과. 88 styles, 10 categories.
- `npm run check:style-refs` 통과. 88 styles covered.
- Browser QA: `/en/styles/high-end-minimal` desktop/mobile에서 marker 3개와 horizontal overflow `0` 확인.
- Before screenshots: `output/playwright/per-style-review/high-end-minimal/before/`.
- After screenshots: `output/playwright/per-style-review/high-end-minimal/after/`.

### 남은 의심점

- 없음. 모던 / 미니멀 category 9개 스타일의 필터 QA까지 완료했다.

## 모던 / 미니멀 category QA

Status: `verified`

### 구분 결과

- `minimalism`: blank product canvas, negative-space stage, thin material index.
- `modernism`: primary-color functional program grid, numbered object taxonomy.
- `swiss-design`: red signal, public information baseline grid, timetable/news rail.
- `international-style`: blue global system portal, cross-market matrix, 2x component rail.
- `scandinavian`: bright room-commerce shelf, product family rail, soft utility cards.
- `japandi`: low horizontal residence case study, shoji material index, slow image sequence.
- `warm-minimal`: warm studio portfolio, terracotta consultation CTA, linen project stack.
- `soft-minimal`: low-contrast service flow, frosted consultation card, rounded session rail.
- `high-end-minimal`: severe product crop, quiet commerce frame, material provenance rail.

### category 검증 결과

- Browser QA: `/en/styles?category=%EB%AA%A8%EB%8D%98+%2F+%EB%AF%B8%EB%8B%88%EB%A9%80` desktop/mobile에서 9개 card만 표시됨.
- Browser QA: category filter desktop/mobile에서 9개 style marker 모두 존재, horizontal overflow `0`.
- Category screenshots: `output/playwright/category-review/modern-minimal/desktop-filtered.png`, `output/playwright/category-review/modern-minimal/mobile-filtered.png`.
- 다음 category는 `강렬 / 실험`이며 첫 style은 `brutalism`이다.

## 10. brutalism

Status: `verified`

### 현재 진단

- Before screenshots: `output/playwright/per-style-review/brutalism/before/desktop.png`, `output/playwright/per-style-review/brutalism/before/mobile.png`.
- 기존 샘플은 underlined links, table, email input을 갖고 있지만 첫 화면 마커가 약하고 작은 포스터 카드처럼 읽힌다.
- `new-brutalism`과 분리하려면 두꺼운 그림자/장난감 컴포넌트가 아니라 실제 문서형 웹, 기본 폼, raw directory, 기관 링크맵이 보여야 한다.

### referenceSites에서 가져올 웹 문법

- Brutalist Websites: 거친 사이트들을 긴 이미지/텍스트 목록으로 나열하는 archive rhythm, 편안함보다 raw exposure를 앞세우는 태도.
- Brutalist Web Design: 읽을 수 있는 콘텐츠, underlined hyperlinks, 버튼처럼 보이는 버튼, 스크롤 가능한 문서, 필요한 장식만 남기는 원칙.
- Secession: 기관형 메뉴, 티켓/언어/뉴스/전시/아카이브가 한 화면에 빽빽하게 이어지는 plain link map과 전시 일정 리스트.

### 목표

- 샘플 고유 마커: `RAW WEB INDEX`, `default submit queue`, `institutional link map`.
- 정보 구조: masthead -> raw link map -> directory table -> default submit form -> status footer.
- 시각 처리: monochrome, link blue/visited purple, red warning strip, no radius, no shadow, table rows, exposed image proof.

### 검증 계획

- `npm run check:style-distinction` RED 확인 후 GREEN.
- `/en/styles/brutalism` desktop/mobile marker presence, horizontal overflow `0`.
- `/en/styles` card에서 `RAW WEB INDEX` marker 확인.

### 구현 결과

- Hero sample을 `RAW WEB INDEX` masthead, 기관형 link map, directory table, proof scan, `default submit queue` form, raw status rows로 재구성했다.
- `new-brutalism`과 헷갈리는 thick shadow, rounded app card, saturated toy UI를 피하고, link blue/visited purple/red status/monochrome table row 중심으로 분리했다.
- Next.js Server Component 경계 오류를 확인해 event handler 없는 정적 HTML form으로 조정했다.

### 검증 결과

- RED: `npm run check:style-distinction`가 `RAW WEB INDEX`, `default submit queue`, `institutional link map` 누락으로 실패함.
- GREEN: `npm run check:style-distinction` 통과.
- Browser QA: `/en/styles/brutalism` desktop/mobile에서 세 marker 모두 존재, horizontal overflow `0`.
- Browser QA: `/en/styles` desktop card에서 `Brutalism`, `RAW WEB INDEX` 존재, horizontal overflow `0`.
- Screenshots: `output/playwright/per-style-review/brutalism/after/desktop.png`, `output/playwright/per-style-review/brutalism/after/mobile.png`, `output/playwright/per-style-review/brutalism/after/styles-list.png`.
- Final commands: `npm run check:data`, `npm run check:style-refs`, `npm run check:style-distinction`, `npm run lint`, `npm run build` 모두 통과.
- 다음 style은 `new-brutalism`이다.

## 11. new-brutalism

Status: `verified`

### 현재 진단

- Before screenshots: `output/playwright/per-style-review/new-brutalism/before/desktop.png`, `output/playwright/per-style-review/new-brutalism/before/mobile.png`.
- 기존 샘플은 thick border, hard shadow, component controls는 좋지만 제품 판매 흐름보다 UI kit demo에 가깝다.
- `brutalism`과 분리하려면 raw HTML directory가 아니라 Gumroad식 creator storefront, 가격/구매 CTA, checkout controls, app component grammar가 보여야 한다.

### referenceSites에서 가져올 웹 문법

- Gumroad: creator commerce hero, start selling CTA, marketplace/search, product category chips, creator income/proof 흐름.
- Neubrutalism Guide: 3px border, 5px hard shadow, zero radius, flat categorical colors, bold type, productized anti-design dialect.
- Neo Brutalism UI: login, form, alert, OTP, buttons, toggle, component docs처럼 실제 앱 컴포넌트가 한 화면에 모이는 구조.

### 목표

- 샘플 고유 마커: `CREATOR STOREFRONT KIT`, `thick-border checkout`, `hard-shadow toggle stack`.
- 정보 구조: product nav -> creator sales hero -> storefront product card -> checkout/pricing box -> toggles/status controls.
- 시각 처리: off-white base, black 3px borders, zero-blur offset shadows, flat yellow/coral/blue panels, oversized controls.

### 검증 계획

- `npm run check:style-distinction` RED 확인 후 GREEN.
- `/en/styles/new-brutalism` desktop/mobile marker presence, horizontal overflow `0`.
- `/en/styles` card에서 `CREATOR STOREFRONT KIT` marker 확인.

### 구현 결과

- 기존 UI kit demo를 `CREATOR STOREFRONT KIT` 중심의 creator commerce sample로 재구성했다.
- Gumroad식 selling CTA/product card 흐름, `thick-border checkout`, `hard-shadow toggle stack`, pricing/native control labels를 한 화면에 배치했다.
- `brutalism`과 달리 raw directory/table보다 productized app UI, flat color panels, 3px outlines, hard offset shadows를 전면에 두었다.

### 검증 결과

- RED: `npm run check:style-distinction`가 `CREATOR STOREFRONT KIT`, `thick-border checkout`, `hard-shadow toggle stack` 누락으로 실패함.
- GREEN: `npm run check:style-distinction` 통과.
- Browser QA: `/en/styles/new-brutalism` desktop/mobile에서 `CREATOR STOREFRONT KIT`, `RAW COMPONENT KIT`, `native form controls`, `pricing table`, `thick-border checkout`, `hard-shadow toggle stack` 모두 존재, horizontal overflow `0`.
- Browser QA: `/en/styles` desktop card에서 `New Brutalism`, `CREATOR STOREFRONT KIT` 존재, horizontal overflow `0`.
- Screenshots: `output/playwright/per-style-review/new-brutalism/after/desktop.png`, `output/playwright/per-style-review/new-brutalism/after/mobile.png`, `output/playwright/per-style-review/new-brutalism/after/styles-list.png`.
- Final commands: `npm run check:data`, `npm run check:style-refs`, `npm run check:style-distinction`, `npm run lint`, `npm run build` 모두 통과.
- 다음 style은 `anti-design`이다.

## 12. anti-design

Status: `verified`

### 현재 진단

- Before screenshots: `output/playwright/per-style-review/anti-design/before/desktop.png`, `output/playwright/per-style-review/anti-design/before/mobile.png`.
- 기존 샘플은 hand-drawn gesture, irregular panel, raw UI는 강하지만 프로젝트 포트폴리오 구조가 약해 단순 콜라주처럼 보일 위험이 있다.
- `new-brutalism`과 달리 정돈된 앱 UI가 아니어야 하고, `maximalism`과 달리 dense product world가 아니라 의도적으로 어긋난 creative portfolio shell이어야 한다.

### referenceSites에서 가져올 웹 문법

- Bryantcodes: 프로젝트 중심 포트폴리오, case title, client/design/meta, wild prototype story, contact flow.
- Superbad: 이미지 중심의 낯선 링크 구조, awkward navigation, anti-polished browsing.
- The HTML Review: issue/archive/list가 이상한 순서로 펼쳐지는 handcrafted web journal rhythm.

### 목표

- 샘플 고유 마커: `OFF-GRID PORTFOLIO`, `wrong-way project rail`, `scribble navigation path`.
- 정보 구조: title bar -> off-grid portfolio hero -> project cards/meta -> wrong-way nav rail -> contact/footer.
- 시각 처리: white canvas, dark irregular hero, neon scribble path, skewed cards, readable weirdness, no cute component order.

### 검증 계획

- `npm run check:style-distinction` RED 확인 후 GREEN.
- `/en/styles/anti-design` desktop/mobile marker presence, horizontal overflow `0`.
- `/en/styles` card에서 `OFF-GRID PORTFOLIO` marker 확인.

### 구현 결과

- 기존 collage board를 `OFF-GRID PORTFOLIO` title bar, `scribble navigation path`, case intro, project card, `wrong-way project rail`, crooked portfolio footer로 보강했다.
- `new-brutalism`의 정돈된 app component grammar와 분리되도록 rounded/product UI 대신 skewed project cards, neon scribble, irregular dark hero, awkward route labels를 유지했다.
- 모바일에서 큰 헤드라인이 잘리는 문제를 줄이기 위해 anti-design의 크롭 감각은 유지하되 font scale을 낮췄다.

### 검증 결과

- RED: `npm run check:style-distinction`가 `OFF-GRID PORTFOLIO`, `wrong-way project rail`, `scribble navigation path` 누락으로 실패함.
- GREEN: `npm run check:style-distinction` 통과.
- Browser QA: `/en/styles/anti-design` desktop/mobile에서 세 marker 모두 존재, horizontal overflow `0`.
- Browser QA: `/en/styles` desktop card에서 `Anti-Design`, `OFF-GRID PORTFOLIO` 존재, horizontal overflow `0`.
- Screenshots: `output/playwright/per-style-review/anti-design/after/desktop.png`, `output/playwright/per-style-review/anti-design/after/mobile.png`, `output/playwright/per-style-review/anti-design/after/styles-list.png`.
- Final commands: `npm run check:data`, `npm run check:style-refs`, `npm run check:style-distinction`, `npm run lint`, `npm run build` 모두 통과.
- 다음 style은 `maximalism`이다.

## 13. maximalism

Status: `verified`

### 현재 진단

- Before screenshots: `output/playwright/per-style-review/maximalism/before/desktop.png`, `output/playwright/per-style-review/maximalism/before/mobile.png`.
- 기존 샘플은 패턴 밀도, 상품 카드, 배지, CTA가 이미 강하지만, fabric/category navigation과 campaign-commerce 층위가 자동 검증 기준으로는 약하다.
- `anti-design`처럼 어긋난 포트폴리오가 아니라, 풍부하지만 큐레이션된 product world로 읽혀야 한다.

### referenceSites에서 가져올 웹 문법

- FARM Rio: 프로모션 바, collection/drop hierarchy, product grid, product price, Shop the edit CTA.
- Meow Wolf: 장소/티켓/이벤트가 촘촘하게 쌓이는 experience-led navigation과 dense worldbuilding.
- Liberty London: fabric, pattern, room, usage category가 깊게 갈라지는 ornamental commerce navigation.

### 목표

- 샘플 고유 마커: `PATTERN MARKET`, `campaign tile stack`, `ornamental category wall`.
- 정보 구조: promo/nav -> layered campaign hero -> product cards -> dense category wall -> CTA.
- 시각 처리: saturated jewel palette, textile pattern density, ribbons/badges, compact commerce modules, clear high-contrast action.

### 검증 계획

- `npm run check:style-distinction` RED 확인 후 GREEN.
- `/en/styles/maximalism` desktop/mobile marker presence, horizontal overflow `0`.
- `/en/styles` card에서 `PATTERN MARKET` marker 확인.

### 구현 결과

- 기존 dense campaign composition에 `PATTERN MARKET`, `campaign tile stack`, `ornamental category wall`을 추가해 product-world 구조를 더 명확히 했다.
- FARM Rio식 collection/product/price/CTA, Meow Wolf식 dense worldbuilding, Liberty식 fabric/pattern category wall 문법을 샘플에 번역했다.
- `anti-design`처럼 일부러 어긋난 포트폴리오가 아니라, 포화된 패턴과 상품 탐색이 큐레이션된 커머스 화면으로 읽히게 했다.

### 검증 결과

- RED: `npm run check:style-distinction`가 `PATTERN MARKET`, `campaign tile stack`, `ornamental category wall` 누락으로 실패함.
- GREEN: `npm run check:style-distinction` 통과.
- Browser QA: `/en/styles/maximalism` desktop/mobile에서 세 marker 모두 존재, horizontal overflow `0`.
- Browser QA: `/en/styles` desktop card에서 `Maximalism`, `PATTERN MARKET` 존재, horizontal overflow `0`.
- Screenshots: `output/playwright/per-style-review/maximalism/after/desktop.png`, `output/playwright/per-style-review/maximalism/after/mobile.png`, `output/playwright/per-style-review/maximalism/after/styles-list.png`.
- Final commands: `npm run check:data`, `npm run check:style-refs`, `npm run check:style-distinction`, `npm run lint`, `npm run build` 모두 통과.
- 다음 style은 `glitch-art`이다.

## 14. glitch-art

Status: `verified`

### 현재 진단

- Before screenshots: `output/playwright/per-style-review/glitch-art/before/desktop.png`, `output/playwright/per-style-review/glitch-art/before/mobile.png`.
- 기존 샘플은 `SIGNAL DAMAGE`, checksum, macroblock, codec fault가 이미 강하지만 JODI식 net-art/code-as-surface 신호가 약하다.
- `cyberpunk`/`high-tech`와 분리하려면 도시 네온이나 polished HUD가 아니라 browser/code artifact, ASCII rupture, codec forensics가 화면 구조에 보여야 한다.
- 현재 moodboard는 diagnostic panels, RGB acetate, macroblocks, scanline material이 잘 보여 image gen 교체는 필요하지 않다.

### referenceSites에서 가져올 웹 문법

- Net-Art.org JODI: browser art, ASCII noise, JavaScript, 인터넷 자체를 재료로 쓰는 설명 구조.
- JODI: 거대한 ASCII/code surface, 기계적 기호와 링크가 화면 대부분을 차지하는 raw browser artifact.
- 404.zero: dark generative art index, releases/software/installations가 짧은 항목으로 쌓이는 audiovisual archive.

### 목표

- 샘플 고유 마커: `NET ART ERROR SURFACE`, `ASCII rupture feed`, `codec forensics rail`.
- 정보 구조: net-art error masthead -> signal headline -> ASCII rupture feed -> macroblock panel -> codec forensics rail.
- 시각 처리: dark diagnostic surface, RGB channel drift, scanlines, code fragments, macroblocks, checksum/codec logs.

### 검증 계획

- `npm run check:style-distinction` RED 확인 후 GREEN.
- `/en/styles/glitch-art` desktop/mobile marker presence, horizontal overflow `0`.
- `/en/styles` card에서 `NET ART ERROR SURFACE` marker 확인.

### 구현 및 검증 결과

- `GlitchArtInterface`를 JODI식 browser/code artifact가 보이는 net-art error surface로 보강했다.
- 기존 `SIGNAL DAMAGE` headline과 macroblock grid는 유지하되, `NET ART ERROR SURFACE` masthead, `ASCII rupture feed`, `codec forensics rail`을 실제 화면 구조에 추가했다.
- RED: `npm run check:style-distinction`가 `NET ART ERROR SURFACE`, `ASCII rupture feed`, `codec forensics rail` 누락으로 실패함.
- GREEN: `npm run check:style-distinction` 통과.
- Browser QA: `/en/styles/glitch-art` desktop/mobile에서 `NET ART ERROR SURFACE`, `SIGNAL DAMAGE`, `ASCII rupture feed`, `macroblock map`, `codec forensics rail` 모두 존재, horizontal overflow `0`.
- Browser QA: `/en/styles` desktop card에서 `Glitch Art`, `NET ART ERROR SURFACE` 존재, horizontal overflow `0`.
- Screenshots: `output/playwright/per-style-review/glitch-art/after/desktop.png`, `output/playwright/per-style-review/glitch-art/after/mobile.png`, `output/playwright/per-style-review/glitch-art/after/styles-list.png`.
- Final commands: `npm run check:data`, `npm run check:style-refs`, `npm run check:style-distinction`, `npm run lint`, `npm run build` 모두 통과.
- 다음 style은 `deconstructivism`이다.

## 15. deconstructivism

Status: `verified`

### 현재 진단

- Before screenshots: `output/playwright/per-style-review/deconstructivism/before/desktop.png`, `output/playwright/per-style-review/deconstructivism/before/mobile.png`.
- 기존 샘플은 ZHA식 건축 포트폴리오 이미지는 있으나, `deconstructivism`의 핵심인 apparent instability, displaced structural grid, fractured-yet-designed archive가 화면 구조에서 충분히 검증되지 않는다.
- `anti-design`과 구분하려면 의도적 엉킴이 아니라 설계된 구조 결함, 도면 좌표, 프로젝트 필터, 전시/아카이브 문법이 보여야 한다.
- `avant-garde`와 구분하려면 문화 선언문/타이포 포스터보다 건축 프로젝트 인덱스, 절단면, 도면형 구성선, built/not-broken 긴장이 우선되어야 한다.
- 현재 moodboard는 fractured layout proofs, tracing-paper overlays, concrete samples, red-blue construction tension이 잘 보여 image gen 교체는 필요하지 않다.

### referenceSites에서 가져올 웹 문법

- MoMA Deconstructivist Architecture: 전시 기록, publication, installation images, artists가 묶인 archive/exhibition detail 구조.
- MoMA press release: twisted volumes, warped planes, clashed lines, apparent instability but structurally sound라는 핵심 원리.
- Zaha Hadid Architects: archive search, category filters, budget/location/date/size/status 필터, 프로젝트 규모 수치와 Enter Archive 리듬.
- Coop Himmelb(l)au: categories, project status filter, project cards with location/year/view project, 반복 quote/news stack.

### 목표

- 샘플 고유 마커: `STRUCTURAL FAULT`, `fracture section index`, `displaced project axis`.
- 정보 구조: archive/filter masthead -> fractured hero blueprint -> displaced project axis -> MoMA-style exhibition notes -> Coop-style project status index.
- 시각 처리: concrete paper surface, black construction lines, clipped architectural image slabs, red collision marker, blueprint-blue axis, offset project modules.

### 검증 계획

- `npm run check:style-distinction` RED 확인 후 GREEN.
- `/en/styles/deconstructivism` desktop/mobile marker presence, horizontal overflow `0`.
- `/en/styles` card에서 `STRUCTURAL FAULT` marker 확인.

### 구현 및 검증 결과

- `DeconstructiveExhibition`을 건축 아카이브/전시 기록 웹 샘플로 재구성했다.
- ZHA식 archive/filter bank, MoMA식 exhibition record, Coop Himmelb(l)au식 project status list를 `STRUCTURAL FAULT` 도면 표면 안에 결합했다.
- `anti-design`과 겹치지 않도록 무작위 혼란 대신 built-not-broken 구조 결함, 도면 좌표선, red-blue construction axis를 사용했다.
- `avant-garde`와 겹치지 않도록 선언문/문화 포스터보다 프로젝트 인덱스, clipped architecture slab, archive filter/status 문법을 전면에 두었다.
- 긴 단일 단어 스타일명(`Deconstructivism`)이 detail hero에서 강제 줄바꿈되지 않도록 long display name 크기 보정도 함께 적용했다.
- RED: `npm run check:style-distinction`가 `STRUCTURAL FAULT`, `fracture section index`, `displaced project axis` 누락으로 실패함.
- GREEN: `npm run check:style-distinction` 통과.
- Browser QA: `/en/styles/deconstructivism` desktop/mobile에서 세 marker 모두 존재, horizontal overflow `0`, detail title line count `1`.
- Browser QA: `/en/styles` desktop card에서 `Deconstructivism`, `STRUCTURAL FAULT` 존재, horizontal overflow `0`.
- Screenshots: `output/playwright/per-style-review/deconstructivism/after/desktop.png`, `output/playwright/per-style-review/deconstructivism/after/mobile.png`, `output/playwright/per-style-review/deconstructivism/after/styles-list.png`.
- Final commands: `npm run check:data`, `npm run check:style-refs`, `npm run check:style-distinction`, `npm run lint`, `npm run build` 모두 통과.
- 다음 style은 `avant-garde`이다.

## 16. avant-garde

Status: `verified`

### 현재 진단

- Before screenshots: `output/playwright/per-style-review/avant-garde/before/desktop.png`, `output/playwright/per-style-review/avant-garde/before/mobile.png`.
- 기존 샘플은 constructivist image hero와 what&apos;s-on rail이 강하지만, 아직 `posterism`처럼 하나의 선언형 포스터가 중심으로 읽힐 수 있다.
- `postmodernism`과 구분하려면 역사/상품/아이러니 리믹스가 아니라 전통에 맞서는 문화 프로그램, 비평 실천, 전시/이벤트/작가 모듈이 보여야 한다.
- `brutalism`과 구분하려면 raw web table이나 default UI가 아니라 의도적으로 구성된 manifesto typography, primary color block, program agenda가 보여야 한다.
- 현재 moodboard는 constructivist planes, abstract manifesto blocks, program modules, photomontage fragments가 충분해 image gen 교체는 필요하지 않다.

### referenceSites에서 가져올 웹 문법

- National Galleries of Scotland Avant-garde: 전통에 맞서는 실험/혁신, social agenda를 가진 문화 실천이라는 정의.
- MoMA A Revolutionary Impulse: painting, drawing, sculpture, prints, book/graphic design, film, photography, architecture가 교차하는 전시 구조와 events/artists rail.
- MoMA Liubov Popova: Art into Life, 생산/기술/유틸리티 디자인으로 이어지는 선언적 실천.
- Walker Art Center Critical Graphic Design Practice: graphic design이 자체 자원으로 의미를 만들고, 비평/연구/조직을 디자인 실천으로 삼는 논리.

### 목표

- 샘플 고유 마커: `MANIFESTO PROGRAM`, `critical lecture rail`, `art-into-life agenda`.
- 정보 구조: museum/program masthead -> manifesto hero -> events/lecture rail -> art-into-life agenda -> artist/discourse index.
- 시각 처리: constructivist red/black/blue/yellow planes, photomontage slab, manifesto type, cultural program cards, critical note blocks.

### 검증 계획

- `npm run check:style-distinction` RED 확인 후 GREEN.
- `/en/styles/avant-garde` desktop/mobile marker presence, horizontal overflow `0`.
- `/en/styles` card에서 `MANIFESTO PROGRAM` marker 확인.

### 구현 및 검증 결과

- `AvantGardeEditorial`을 단일 포스터형 이미지 중심에서 문화기관 프로그램 웹 샘플로 재구성했다.
- `MANIFESTO PROGRAM` masthead, `critical lecture rail`, `art-into-life agenda`, artists/events/essays index를 실제 화면 구조에 배치했다.
- National Galleries의 avant-garde 정의를 반영해 전통에 맞서는 실험/혁신의 cultural practice로 보이게 했다.
- MoMA Russian avant-garde 전시의 painting, graphic design, film, photography, architecture 교차성과 events/artists rail을 프로그램 구조로 번역했다.
- Popova의 Art into Life와 Walker의 critical graphic design practice는 하단 agenda와 lecture rail에 반영했다.
- `posterism`과 겹치지 않도록 하나의 포스터 메시지보다 전시/강연/비평/작가 rail을 중심으로 두었다.
- RED: `npm run check:style-distinction`가 `MANIFESTO PROGRAM`, `critical lecture rail`, `art-into-life agenda` 누락으로 실패함.
- GREEN: `npm run check:style-distinction` 통과.
- Browser QA: `/en/styles/avant-garde` desktop/mobile에서 세 marker 모두 존재, horizontal overflow `0`, detail title line count `1`.
- Browser QA: `/en/styles` desktop card에서 `Avant-Garde`, `MANIFESTO PROGRAM` 존재, horizontal overflow `0`.
- Screenshots: `output/playwright/per-style-review/avant-garde/after/desktop.png`, `output/playwright/per-style-review/avant-garde/after/mobile.png`, `output/playwright/per-style-review/avant-garde/after/styles-list.png`.
- Final commands: `npm run check:data`, `npm run check:style-refs`, `npm run check:style-distinction`, `npm run lint`, `npm run build` 모두 통과.
- 다음 style은 `postmodernism`이다.

## 17. postmodernism

Status: `verified`

### 현재 진단

- Before screenshots: `output/playwright/per-style-review/postmodernism/before/desktop.png`, `output/playwright/per-style-review/postmodernism/before/mobile.png`.
- 기존 샘플은 `CLASSICAL QUOTE`, culture collage, ironic object index가 보이지만, MoMA식 works index와 Memphis/Vitra식 anti-functional object shop 문법이 아직 얕다.
- `new-brutalism`과 구분하려면 컴포넌트 kit, native form controls, pricing table이 아니라 역사 인용, 오브젝트 아카이브, 아이러니한 상품/전시 포털이 보여야 한다.
- `maximalism`과 구분하려면 패턴 과잉이 아니라 mixed-era cultural portal, quote module, curated object shelf가 중심이어야 한다.
- `avant-garde`와 구분하려면 사회적 선언/문화 프로그램보다 historical remix, popular culture, kitsch/elegance, object commerce가 우선되어야 한다.
- 현재 moodboard는 classical column fragments, Memphis accent shapes, object cards, terrazzo/laminate samples가 충분해 image gen 교체는 필요하지 않다.

### referenceSites에서 가져올 웹 문법

- MoMA Postmodernism: 작품 6개가 있는 Art terms/Works index 구조, Michael Graves, Aldo Rossi, Warhol, Koons처럼 건축/사진/대중문화 오브젝트가 함께 놓이는 혼합성.
- Vitra Design Museum Memphis: functionalism dogma를 벗어나려는 그룹, garish colours, wild patterns, popular culture, advertising aesthetics, kitsch and elegance.
- Memphis Milano: category/filter/shop처럼 오브젝트를 분류하고, icon product와 designer attribution을 전면에 두는 product archive 문법.

### 목표

- 샘플 고유 마커: `CLASSICAL QUOTE`, `mixed-era object index`, `Memphis anti-functional shop`.
- 정보 구조: quote masthead -> mixed-era hero -> MoMA-style works/object index -> Memphis anti-functional shop shelf -> culture collage note.
- 시각 처리: classical column/serif quotation, Memphis accent geometry, mismatched cards, object shelf, pop-art commerce label, warm cream museum base.

### 검증 계획

- `npm run check:style-distinction` RED 확인 후 GREEN.
- `/en/styles/postmodernism` desktop/mobile marker presence, horizontal overflow `0`.
- `/en/styles` card에서 `CLASSICAL QUOTE` marker 확인.

### 구현 및 검증 결과

- `PostmodernArchivePortal`을 classical quote hero 중심에서 mixed-era cultural commerce portal로 보강했다.
- MoMA식 works/object index를 `mixed-era object index` 모듈로 번역하고, Graves/Warhol/Koons처럼 건축, 대중문화, 오브젝트가 함께 보이게 했다.
- Vitra Design Museum의 Memphis 해석을 반영해 `Memphis anti-functional shop` shelf를 추가하고 Beverly sideboard, Super lamp, Bel-Air chair 같은 object-commerce 리듬을 넣었다.
- 기존 postmodern marker인 `CLASSICAL QUOTE`, `culture collage`, `ironic object index`는 유지하면서 new-brutalist component kit나 pricing table과 겹치지 않게 했다.
- `maximalism`과 겹치지 않도록 패턴 밀도보다 quote, works index, shop shelf, kitsch/elegance footer를 중심으로 뒀다.
- RED: `npm run check:style-distinction`가 `mixed-era object index`, `Memphis anti-functional shop` 누락으로 실패함.
- GREEN: `npm run check:style-distinction` 통과.
- Browser QA: `/en/styles/postmodernism` desktop/mobile에서 세 marker 모두 존재, horizontal overflow `0`, detail title line count `1`.
- Browser QA: `/en/styles` desktop card에서 `Postmodernism`, `CLASSICAL QUOTE` 존재, horizontal overflow `0`.
- Screenshots: `output/playwright/per-style-review/postmodernism/after/desktop.png`, `output/playwright/per-style-review/postmodernism/after/mobile.png`, `output/playwright/per-style-review/postmodernism/after/styles-list.png`.
- Final commands: `npm run check:data`, `npm run check:style-refs`, `npm run check:style-distinction`, `npm run lint`, `npm run build` 모두 통과.
- 다음 style은 `retro`이다.

## 18. retro

### 현재 판정

- Status: `verified`.
- Before screenshots: `output/playwright/per-style-review/retro/before/desktop.png`, `output/playwright/per-style-review/retro/before/mobile.png`.
- 기존 샘플은 Poolside FM식 플레이어 창 하나에 의미가 집중되어 있어 실제 웹 랜딩/상점 구조가 약했다.
- `vintage`와 구분하려면 aged paper catalog, serif heritage, patina가 아니라 밝은 방송형 노스탤지어와 상품 큐가 중심이어야 한다.
- `seventies-retro`와 구분하려면 70s wavy/groovy hero가 아니라 decade dial, media player, broad retro commerce가 보여야 한다.
- `eighties-retro`와 구분하려면 dark neon console이 아니라 warm cream/mustard broadcast shop이어야 한다.
- 현재 moodboard는 faded commerce modules, analog product crops, halftone paper, warm color blocking이 충분해 image gen 교체는 필요하지 않다.

### referenceSites에서 가져올 웹 문법

- Poolsuite/Poolside FM: retro radio/media interface, warm leisure tone, broadcast/player window grammar.
- Radiooooo: country/decade selection에서 오는 time-travel navigation rhythm.
- Web Design Museum: 오래된 웹/앱/소프트웨어를 스크린샷과 카테고리로 보여주는 archive/gallery rhythm.

### 목표

- 샘플 고유 마커: `RETRO BROADCAST SHOP`, `time-travel media dial`, `analog merch queue`.
- 정보 구조: broadcast shop header -> media landing/photo module -> time-travel decade dial -> analog merch queue -> small archive/station cards.
- 시각 처리: warm cream and mustard base, teal broadcast header, rounded controls, halftone/grid paper texture, clean nostalgic commerce cards.

### 검증 계획

- `npm run check:style-distinction` RED 확인 후 GREEN.
- `/en/styles/retro` desktop/mobile marker presence, horizontal overflow `0`, detail title line count `1`.
- `/en/styles` card에서 `Retro`, `RETRO BROADCAST SHOP` marker 확인.

### 구현 및 검증 결과

- `RetroDinerShop`을 단일 플레이어 창에서 broadcast shop 랜딩으로 재구성했다.
- Radiooooo식 decade 선택을 `time-travel media dial`로 번역하고, Poolside식 미디어 감각을 상단 broadcast/player 구조로 유지했다.
- `analog merch queue`를 추가해 실제 커머스/굿즈 화면처럼 보이게 하고, `vintage`의 종이 카탈로그나 `70s Retro`의 groovy card와 구분했다.
- `designStyles.ts`와 `scripts/style-references.json`의 retro 설명을 새 화면 문법에 맞게 보강했다.
- RED: `npm run check:style-distinction`가 `RETRO BROADCAST SHOP`, `time-travel media dial`, `analog merch queue` 누락으로 실패함.
- GREEN: `npm run check:style-distinction` 통과.
- Browser QA: `/en/styles/retro` desktop/mobile에서 세 marker 모두 존재, horizontal overflow `0`, detail title line count `1`.
- Browser QA: `/en/styles` desktop card에서 `Retro`, `RETRO BROADCAST SHOP` 존재, horizontal overflow `0`.
- Screenshots: `output/playwright/per-style-review/retro/after/desktop.png`, `output/playwright/per-style-review/retro/after/mobile.png`, `output/playwright/per-style-review/retro/after/styles-list.png`.
- 다음 style은 `vintage`이다.

## 19. vintage

### 현재 판정

- Status: `verified`.
- Before screenshots: `output/playwright/per-style-review/vintage/before/desktop.png`, `output/playwright/per-style-review/vintage/before/mobile.png`.
- 기존 샘플은 aged paper catalog 분위기는 있으나, 제품 카드 3개와 보증 띠 중심이라 실제 헤리티지 웹 샘플의 정보 구조가 얕았다.
- `retro`와 구분하려면 밝은 방송/머치 큐가 아니라 aged paper, muted ink, repair record, material patina가 중심이어야 한다.
- `seventies-retro`와 구분하려면 따뜻한 곡선과 라이프스타일 상품 카드보다, 직선적인 카탈로그 행과 수선 기록이 먼저 보여야 한다.
- `rustic`과 구분하려면 거친 lodge/wood commerce가 아니라 종이 아카이브, 수선 티켓, muted ink catalog가 중심이어야 한다.
- 현재 moodboard는 foxed paper, sepia archive crops, letterpress texture, cloth, brass, dark wood가 충분해 image gen 교체는 필요하지 않다.

### referenceSites에서 가져올 웹 문법

- Filson: category-heavy heritage navigation, Tin Cloth/Rugged Twill 같은 material categories, repairs/guarantee support, Unfailing Goods since 1897.
- Filson Repairs/Restoration: darning, binding, panel replacement, visible repair marks, lifetime guarantee, restoration workshop story.
- Levi Strauss archive: 501 history, mended/reused/patched product story, archival article structure.
- Web Design Museum: old websites/apps/software archive rhythm and document-like gallery structure.

### 목표

- 샘플 고유 마커: `PAPER CATALOG`, `repair ticket ledger`, `patina material register`.
- 정보 구조: paper catalog masthead -> material photo proof -> heritage catalog rows -> patina material register -> repair ticket ledger -> guarantee/archive footer.
- 시각 처리: aged ivory paper, muted ink, brown/olive register chips, serif masthead, table rows, visible mending badge, quiet archive density.

### 검증 계획

- `npm run check:style-distinction` RED 확인 후 GREEN.
- `/en/styles/vintage` desktop/mobile marker presence, horizontal overflow `0`, detail title line count `1`.
- `/en/styles` card에서 `Vintage`, `PAPER CATALOG` marker 확인.

### 구현 및 검증 결과

- `VintagePaperCatalog`을 단순 3상품 카탈로그에서 repair/material/archive를 포함한 heritage catalog sample로 재구성했다.
- Filson의 repair/guarantee 문법을 `repair ticket ledger`로, Tin Cloth/Rugged Twill 같은 소재 문법을 `patina material register`로 번역했다.
- Levi Strauss archive의 patched/reused 501 story 방향을 `501 Archive Jean`, visible mending footer, archive issue cue로 반영했다.
- `retro`의 broadcast shop이나 `70s Retro`의 groovy product card와 겹치지 않도록 직선 표, 세리프 masthead, aged paper texture, muted ink를 중심으로 뒀다.
- `designStyles.ts`와 `scripts/style-references.json`의 vintage 설명을 새 화면 문법에 맞게 보강했다.
- RED: `npm run check:style-distinction`가 `PAPER CATALOG`, `repair ticket ledger`, `patina material register` 누락으로 실패함.
- GREEN: `npm run check:style-distinction` 통과.
- Browser QA: `/en/styles/vintage` desktop/mobile에서 세 marker 모두 존재, horizontal overflow `0`, detail title line count `1`.
- Browser QA: `/en/styles` desktop card에서 `Vintage`, `PAPER CATALOG` 존재, horizontal overflow `0`.
- Screenshots: `output/playwright/per-style-review/vintage/after/desktop.png`, `output/playwright/per-style-review/vintage/after/mobile.png`, `output/playwright/per-style-review/vintage/after/styles-list.png`.
- 다음 style은 `seventies-retro`이다.

## 20. seventies-retro

### 현재 판정

- Status: `verified`.
- Before screenshots: `output/playwright/per-style-review/seventies-retro/before/desktop.png`, `output/playwright/per-style-review/seventies-retro/before/mobile.png`.
- 기존 샘플은 따뜻한 색, 둥근 카드, Houseplant식 상품 방향은 보였지만, 70s 소재감과 campaign/story 구조가 약했다.
- `retro`와 구분하려면 broadcast shop이나 decade dial이 아니라 wavy shelf, groovy hero, corduroy/walnut/amber 소재 신호가 중심이어야 한다.
- `vintage`와 구분하려면 aged paper catalog와 repair ledger가 아니라 따뜻한 곡선, 아치형 제품 카드, lifestyle commerce가 먼저 보여야 한다.
- `mid-century-modern`과 구분하려면 정제된 furniture catalog보다 더 둥글고 느긋한 70s campaign rhythm이 보여야 한다.
- 현재 moodboard는 wavy stripe, corduroy, walnut, amber plastic, rounded product-card studies가 충분해 image gen 교체는 필요하지 않다.

### referenceSites에서 가져올 웹 문법

- Houseplant: collection navigation, product carousel rhythm, warm object commerce, story module.
- Rolling Stone: music/culture magazine identity and bold editorial hierarchy for 70s cultural energy.
- Web Design Museum: historical/period interpretation cues and old interface rhythm.

### 목표

- 샘플 고유 마커: `GROOVY LANDING`, `wavy campaign shelf`, `corduroy product rhythm`.
- 정보 구조: groovy landing nav -> wavy hero campaign -> rounded campaign shelf -> corduroy/walnut/amber product rhythm -> lounge/story image -> material chips.
- 시각 처리: mustard/orange base, avocado accent, rounded arch cards, wave pattern, sunburst disk, corduroy/walnut/amber material labels.

### 검증 계획

- `npm run check:style-distinction` RED 확인 후 GREEN.
- `/en/styles/seventies-retro` desktop/mobile marker presence, horizontal overflow `0`, detail title line count `1`.
- `/en/styles` card에서 `70s Retro`, `GROOVY LANDING` marker 확인.

### 구현 및 검증 결과

- `SeventiesGroovyLanding`을 단순 hero + product cards에서 groovy campaign landing으로 재구성했다.
- Houseplant식 collection/product/story 흐름을 `wavy campaign shelf`와 arched product rhythm으로 번역했다.
- moodboard의 corduroy, walnut, amber material signal을 `corduroy product rhythm`과 material chip footer로 화면에 노출했다.
- Rolling Stone식 문화/음악 느낌은 `Records`, `side A`, `weekend soul` 같은 magazine/music labels로 과하지 않게 반영했다.
- `retro`의 broadcast shop, `vintage`의 paper catalog, `80s Retro`의 neon console과 겹치지 않도록 따뜻한 곡선/소재/느긋한 commerce rhythm을 중심으로 뒀다.
- `designStyles.ts`와 `scripts/style-references.json`의 seventies-retro 설명을 새 화면 문법에 맞게 보강했다.
- RED: `npm run check:style-distinction`가 `GROOVY LANDING`, `wavy campaign shelf`, `corduroy product rhythm` 누락으로 실패함.
- GREEN: `npm run check:style-distinction` 통과.
- Browser QA: `/en/styles/seventies-retro` desktop/mobile에서 세 marker 모두 존재, horizontal overflow `0`, detail title line count `1`.
- Browser QA: `/en/styles` desktop card에서 `70s Retro`, `GROOVY LANDING` 존재, horizontal overflow `0`.
- Screenshots: `output/playwright/per-style-review/seventies-retro/after/desktop.png`, `output/playwright/per-style-review/seventies-retro/after/mobile.png`, `output/playwright/per-style-review/seventies-retro/after/styles-list.png`.
- 다음 style은 `eighties-retro`이다.

## 21. eighties-retro

### 현재 판정

- Status: `verified`.
- Before screenshots: `output/playwright/per-style-review/eighties-retro/before/desktop.png`, `output/playwright/per-style-review/eighties-retro/before/mobile.png`.
- 기존 샘플은 네온 그리드, retro sun, EQ 패널은 있었지만, `80s Retro`만의 웹 구조가 hero + 작은 EQ에 머물러 제목을 가리면 generic dark neon sample로 읽힐 위험이 있었다.
- `seventies-retro`와 구분하려면 따뜻한 곡선/제품 리듬이 아니라 야간 미디어 콘솔, VHS 큐, 아케이드 버튼이 중심이어야 한다.
- `nineties-graphic`과 구분하려면 초기 웹 창/스티커/패턴보다 더 정돈된 synth media deck과 grid perspective가 보여야 한다.
- `y2k`와 구분하려면 glossy bubble/plastic portal이 아니라 검은 플라스틱 status bay와 각진 neon console이 먼저 보여야 한다.
- 현재 moodboard는 neon grid, VHS, glossy black plastic, magenta/cyan acetate, chrome chips가 충분해 image gen 교체는 필요하지 않다.

### referenceSites에서 가져올 웹 문법

- Poolside/Poolsuite: retro music station, Classic Mac/old device interaction, channel queue, bitmapped nostalgia, playful media controls.
- Cyberpunk 2077 official: dark campaign hierarchy, high-contrast digital modules, product/news/newsletter CTA rhythm. 단, Night City worldbuilding은 `cyberpunk`로 남긴다.
- Windows 93: retro OS/window framing, pixel controls, playful desktop-web interaction. 단, 90s chaotic desktop density는 `nineties-graphic`으로 남긴다.

### 목표

- 샘플 고유 마커: `SYNTH CONSOLE`, `VHS mix queue`, `arcade control strip`.
- 정보 구조: SYNTH CONSOLE nav -> night-drive media deck -> VHS mix queue -> black plastic status bay -> arcade control strip.
- 시각 처리: dark navy/black base, magenta/cyan/yellow neon, skewed grid floor, mono labels, square borders, VHS cassette rows, physical arcade buttons.

### 검증 계획

- `npm run check:style-distinction` RED 확인 후 GREEN.
- `/en/styles/eighties-retro` desktop/mobile marker presence, horizontal overflow `0`, detail title line count `1`.
- `/en/styles` card에서 `80s Retro`, `SYNTH CONSOLE` marker 확인.

### 구현 및 검증 결과

- `EightiesSynthConsole`을 단순 neon hero + EQ 패널에서 synth-era media console web sample로 재구성했다.
- Poolside/Poolsuite의 retro music station/channel interaction을 `VHS mix queue`와 night-drive deck으로 번역했다.
- Cyberpunk 2077식 dark campaign contrast는 빌려오되, 도시/디스토피아가 아니라 neon console과 product/news module 같은 어두운 정보 패널 리듬만 반영했다.
- Windows 93의 retro desktop/window cue는 작은 boxed nav, pixel-like control rows, square border로만 반영하고 90s chaotic window stack은 피했다.
- moodboard의 검은 플라스틱, VHS, neon grid, magenta/cyan acetate를 `black plastic status bay`, skewed grid floor, arcade control strip으로 화면에 노출했다.
- `designStyles.ts`, `scripts/style-references.json`, `style-category-distinction-table.md`의 eighties-retro 설명을 새 화면 문법에 맞게 보강했다.
- RED: `npm run check:style-distinction`가 `SYNTH CONSOLE`, `arcade control strip`, `VHS mix queue` 누락으로 실패함.
- GREEN: `npm run check:style-distinction` 통과.
- Browser QA: `/en/styles/eighties-retro` desktop/mobile에서 세 marker 모두 존재, horizontal overflow `0`, detail title line count `1`.
- Browser QA: `/en/styles` desktop card에서 `80s Retro`, `SYNTH CONSOLE` 존재, horizontal overflow `0`.
- Screenshots: `output/playwright/per-style-review/eighties-retro/after/desktop.png`, `output/playwright/per-style-review/eighties-retro/after/mobile.png`, `output/playwright/per-style-review/eighties-retro/after/styles-list.png`.
- 다음 style은 `nineties-graphic`이다.

## 22. nineties-graphic

### 현재 판정

- Status: `verified`.
- Before screenshots: `output/playwright/per-style-review/nineties-graphic/before/desktop.png`, `output/playwright/per-style-review/nineties-graphic/before/mobile.png`.
- 기존 샘플은 1996 Space Jam식 별 배경과 행성 링크를 거의 그대로 떠올리게 해서, 레퍼런스를 웹 문법으로 추출하기보다 특정 사이트를 재현하는 쪽에 가까웠다.
- `eighties-retro`와 구분하려면 neon synth grid나 미디어 콘솔이 아니라 밝은 초기 웹 창, 스티커 링크, 하프톤/체커보드 그래픽이 중심이어야 한다.
- `y2k`와 구분하려면 glossy bubble/chrome portal이 아니라 거칠고 납작한 zine window, 찢어진 종이, visitor counter가 먼저 보여야 한다.
- `street-campaign`과 구분하려면 현대 스트리트 포스터/드롭이 아니라 90s browser frame 안의 early-web campaign navigation이어야 한다.
- 현재 moodboard는 checkerboard, halftone, photocopy grain, torn arrows, saturated chips, plastic folder scraps가 충분해 image gen 교체는 필요하지 않다.

### referenceSites에서 가져올 웹 문법

- Space Jam 1996: image-heavy navigation, odd destination labels, site-map rhythm, early entertainment web composition. 단, 행성/캐릭터/사이트 구조는 그대로 복제하지 않는다.
- Web Design Museum 90s exhibition: 1990s web archive density, old website galleries, historical browser-era UI evidence.
- Netscape Navigator 2.0 / Windows 93: browser/window chrome, pixel-era controls, playful desktop framing. 단, Y2K chrome gloss나 80s neon은 제외한다.

### 목표

- 샘플 고유 마커: `DESKTOP ZINE`, `sticker link grid`, `halftone scrap wall`.
- 정보 구조: DESKTOP ZINE browser frame -> campaign ticker -> halftone scrap wall hero -> sticker link grid -> browser scraps -> visitor/webring footer.
- 시각 처리: teal base, violet title bar, acid yellow sticker panel, orange/violet/cyan scraps, black halftone wall, thick 3px borders, checkerboard background.

### 검증 계획

- `npm run check:style-distinction` RED 확인 후 GREEN.
- `/en/styles/nineties-graphic` desktop/mobile marker presence, horizontal overflow `0`, detail title line count `1`.
- `/en/styles` card에서 `90s Graphic`, `DESKTOP ZINE` marker 확인.

### 구현 및 검증 결과

- `NinetiesGraphicZine`을 Space Jam식 행성 링크 화면에서 90s early-web zine campaign sample로 재구성했다.
- Space Jam의 image-heavy navigation과 사이트맵 리듬은 `sticker link grid`로 번역했고, 특정 행성/영화 사이트 복제는 제거했다.
- Web Design Museum의 90s archive/browser-era 문법은 `DESKTOP ZINE` 창, ticker, visitor counter, webring footer로 반영했다.
- moodboard의 하프톤, 체크보드, 찢어진 종이, 플라스틱 스크랩은 `halftone scrap wall`, checkerboard background, torn sticker shapes로 화면에 노출했다.
- `designStyles.ts`, `scripts/style-references.json`, `style-category-distinction-table.md`의 nineties-graphic 설명을 새 화면 문법에 맞게 보강했다.
- RED: `npm run check:style-distinction`가 `DESKTOP ZINE`, `sticker link grid`, `halftone scrap wall` 누락으로 실패함.
- GREEN: `npm run check:style-distinction` 통과.
- Browser QA: `/en/styles/nineties-graphic` desktop/mobile에서 세 marker 모두 존재, horizontal overflow `0`, detail title line count `1`.
- Browser QA: `/en/styles` desktop card에서 `90s Graphic`, `DESKTOP ZINE` 존재, horizontal overflow `0`.
- Screenshots: `output/playwright/per-style-review/nineties-graphic/after/desktop.png`, `output/playwright/per-style-review/nineties-graphic/after/mobile.png`, `output/playwright/per-style-review/nineties-graphic/after/styles-list.png`.
- 다음 style은 `y2k`이다.

## 23. y2k

### 현재 판정

- Status: `verified`.
- Before screenshots: `output/playwright/per-style-review/y2k/before/desktop.png`, `output/playwright/per-style-review/y2k/before/mobile.png`.
- 기존 샘플은 glossy/pastel 표면은 있었지만 `Thank u! See u soon!` 중심의 단일 coming-soon 카드라 포털, 프로필, 위젯, 게스트북 같은 Y2K 웹 문법이 약했다.
- `nineties-graphic`과 구분하려면 거친 DESKTOP ZINE, 스티커 링크, 하프톤 벽이 아니라 반짝이고 둥근 포털 위젯과 젤리 캡슐 도크가 중심이어야 한다.
- `chromecore`와 구분하려면 molded silver hardware나 금속 제품 스테이지가 아니라 pastel cyber gloss, profile skin, glitter portal이 중심이어야 한다.
- `retro-futurism`과 구분하려면 space-age travel poster가 아니라 early-2000s profile portal과 bubble widgets가 실제 화면 구조가 되어야 한다.
- 현재 moodboard는 chrome jelly plastic, capsule UI, pearly surfaces, holographic chips, translucent acetate가 충분해 image gen 교체는 필요하지 않다.

### referenceSites에서 가져올 웹 문법

- Web Design Museum Y2K: translucent, iridescent, playful, shiny surfaces, Flash-era/y2k portal examples.
- Blingee/Glitter Graphics 계열: glitter graphics, stamps, profile customization, guestbook/social sharing culture.
- Windows 93: legacy desktop/window framing and playful app-like web surfaces. 단, 90s chaotic desktop은 `nineties-graphic`으로 남긴다.

### 목표

- 샘플 고유 마커: `GLOSS PORTAL`, `bubble widget stack`, `sparkle guestbook rail`.
- 정보 구조: GLOSS PORTAL header -> cyberpop profile hub -> bubble widget stack -> sparkle guestbook rail -> jelly capsule dock.
- 시각 처리: pearl/ice blue base, bubblegum pink and lime accents, translucent rounded panels, glossy capsule buttons, subtle sparkle texture, soft chrome edge highlights.

### 검증 계획

- `npm run check:style-distinction` RED 확인 후 GREEN.
- `/en/styles/y2k` desktop/mobile marker presence, horizontal overflow `0`, detail title line count `1`.
- `/en/styles` card에서 `Y2K`, `GLOSS PORTAL` marker 확인.

### 구현 및 검증 결과

- `Y2KGlossPortal`을 단일 coming-soon card에서 early-2000s profile portal sample로 재구성했다.
- Web Design Museum의 translucent/iridescent/playful/shiny 문법을 rounded portal frame, pearl surface, bubble widgets로 번역했다.
- Blingee/Glitter Graphics 계열의 profile customization과 stamp/guestbook 문법은 `sparkle guestbook rail`, `profile skin`, `glitter code`로 반영했다.
- Windows 93의 playful app framing은 header/status/dock 구조로만 반영하고, 90s desktop chaos는 피했다.
- moodboard의 젤리 플라스틱, 캡슐 카드, 홀로그래픽 칩, 파스텔 아세테이트를 `bubble widget stack`, `jelly capsule dock`, translucent gloss로 화면에 노출했다.
- `designStyles.ts`, `scripts/style-references.json`, `style-category-distinction-table.md`의 y2k 설명을 새 화면 문법에 맞게 보강했다.
- RED: `npm run check:style-distinction`가 `GLOSS PORTAL`, `bubble widget stack`, `sparkle guestbook rail` 누락으로 실패함.
- GREEN: `npm run check:style-distinction` 통과.
- Browser QA: `/en/styles/y2k` desktop/mobile에서 세 marker 모두 존재, horizontal overflow `0`, detail title line count `1`.
- Browser QA: `/en/styles` desktop card에서 `Y2K`, `GLOSS PORTAL` 존재, horizontal overflow `0`.
- Screenshots: `output/playwright/per-style-review/y2k/after/desktop.png`, `output/playwright/per-style-review/y2k/after/mobile.png`, `output/playwright/per-style-review/y2k/after/styles-list.png`.
- 다음 style은 `retro-futurism`이다.

## 24. retro-futurism

### 현재 판정

- Status: `verified`.
- Before screenshots: `output/playwright/per-style-review/retro-futurism/before/desktop.png`, `output/playwright/per-style-review/retro-futurism/before/mobile.png`.
- 기존 샘플은 Space Age travel card와 ticket CTA는 있었지만, `FLIGHT DECK` 자체가 보이지 않았고 JPL식 destination poster gallery, moodboard의 chrome/aluminum/acrylic capsule hardware, 실제 timetable UI가 약했다.
- `y2k`와 구분하려면 jelly gloss, profile portal, bubble widgets가 아니라 cream poster surface, travel bureau, capsule hardware가 중심이어야 한다.
- `eighties-retro`와 구분하려면 dark synth/VHS console이 아니라 밝은 travel poster와 rounded Space Age timetable이어야 한다.
- `futurism`과 구분하려면 live telemetry나 high-speed aerospace dashboard가 아니라 past-imagined space tourism과 optimistic poster CTA가 중심이어야 한다.
- 현재 moodboard는 space-age architecture crops, vintage control panels, chrome/aluminum, acrylic domes, orbit-line shapes가 충분해 image gen 교체는 필요하지 않다.

### referenceSites에서 가져올 웹 문법

- NASA JPL Visions of the Future: destination poster gallery, travel bureau framing, named planetary stops, science-backed imaginative tourism.
- Paleofuture: past visions archive feed, historical future narrative, blog/archive cadence.
- Web Design Museum: old-web archive navigation and historical digital index structure.
- retro-futurism.com: 현재 password page라 visual grammar source로 사용하지 않는다.

### 목표

- 샘플 고유 마커: `FLIGHT DECK`, `destination poster rail`, `chrome capsule timetable`.
- 정보 구조: travel bureau header -> FLIGHT DECK poster landing -> destination poster rail -> chrome capsule timetable -> reserve passage CTA.
- 시각 처리: cream poster surface, tomato/coral and teal destination chips, navy ink, atomic starburst, orbit-line composition, chrome/aluminum/acrylic material rail.

### 검증 계획

- `npm run check:style-distinction` RED 확인 후 GREEN.
- `/en/styles/retro-futurism` desktop/mobile marker presence, horizontal overflow `0`, detail title line count `1`.
- `/en/styles?q=retro%20futurism` card에서 `Retro Futurism`, `FLIGHT DECK`, `destination poster rail`, `chrome capsule timetable` marker 확인.

### 구현 및 검증 결과

- `RetroFuturismFlightDeck`을 단순 Grand Tour card에서 Space Age travel bureau web sample로 재구성했다.
- JPL의 destination poster gallery와 travel bureau 문법은 `FLIGHT DECK` poster landing, destination cards, reserve passage CTA로 번역했다.
- Paleofuture와 Web Design Museum의 archive/history 문법은 footer source rail과 old-future travel index rhythm으로 반영했다.
- moodboard의 chrome, aluminum, acrylic dome, orbit-line, capsule module 신호를 `chrome capsule timetable`, orbit display, material rail로 화면에 노출했다.
- `designStyles.ts`, `scripts/style-references.json`, `style-category-distinction-table.md`의 retro-futurism 설명을 새 화면 문법에 맞게 보강했다.
- RED: `npm run check:style-distinction`가 `FLIGHT DECK`, `destination poster rail`, `chrome capsule timetable` 누락으로 실패함.
- GREEN: `npm run check:style-distinction` 통과.
- Browser QA: `/en/styles/retro-futurism` desktop/mobile에서 세 marker 모두 존재, horizontal overflow `0`, detail title line count `1`.
- Browser QA: `/en/styles?q=retro%20futurism` desktop card에서 `Retro Futurism`과 세 marker 모두 존재, horizontal overflow `0`.
- Final commands: `npm run check:data`, `npm run check:style-refs`, `npm run check:style-distinction`, `npm run lint`, `npm run build` 모두 통과. Next.js static pages `580/580`.
- Screenshots: `output/playwright/per-style-review/retro-futurism/after/desktop.png`, `output/playwright/per-style-review/retro-futurism/after/mobile.png`, `output/playwright/per-style-review/retro-futurism/after/styles-list.png`.
- 다음 style은 `mid-century-modern`이다.

## 25. mid-century-modern

### 현재 판정

- Status: `verified`.
- Before screenshots: `output/playwright/per-style-review/mid-century-modern/before/desktop.png`, `output/playwright/per-style-review/mid-century-modern/before/mobile.png`.
- 기존 detail 샘플은 가구 쇼룸 물성이 이미 있었지만, compact/card 상태는 상단 hero 이미지와 넓은 빈 베이지 영역에 그쳐 목록에서 구분력이 약했다.
- `seventies-retro`와 구분하려면 groovy campaign shelf나 corduroy rhythm이 아니라 가구 쇼룸, 월넛 슬랫, 유리 테이블, textile swatch가 중심이어야 한다.
- `retro-futurism`과 구분하려면 Space Age poster나 capsule timetable이 아니라 실제 furniture product catalog와 material rail이어야 한다.
- `bauhaus`와 구분하려면 primary geometry poster가 아니라 생활감 있는 molded plywood, walnut, textile, object label 구조여야 한다.
- 현재 moodboard는 walnut, interior product proofs, modular commerce grid, woven/boucle swatches, brass, muted chips가 충분해 image gen 교체는 필요하지 않다.

### referenceSites에서 가져올 웹 문법

- MoMA Eames Lounge Chair: object record, material metadata, molded plywood/leather/cast aluminum object identity.
- Herman Miller Nelson Platform Bench: product overview, spec/resource tabs, slat detail, practical product storytelling.
- MoMA Noguchi Coffee Table: collection record and sculptural glass/wood object framing.
- Vitra Design Museum Alexander Girard: textiles, coordinated interiors, color/pattern archive, design universe framing.

### 목표

- 샘플 고유 마커: `MIDCENTURY STUDIO`, `walnut slat product rail`, `Girard textile swatch wall`.
- 정보 구조: MIDCENTURY STUDIO nav -> molded plywood lounge hero -> walnut slat product rail -> object list -> Girard textile swatch wall.
- 시각 처리: cream paper, walnut/espresso linework, tomato orange, deep teal, mustard textile blocks, furniture photography, thin catalog borders.

### 검증 계획

- `npm run check:style-distinction` RED 확인 후 GREEN.
- `/en/styles/mid-century-modern` desktop/mobile marker presence, horizontal overflow `0`, detail title stable 2-line wrap.
- `/en/styles?q=mid-century%20modern` card에서 `Mid-Century Modern`, `MIDCENTURY STUDIO`, `walnut slat product rail`, `Girard textile swatch wall` marker 확인.

### 구현 및 검증 결과

- `MidCenturyModernStudio`을 detail 전용 이미지 중심 샘플에서 compact/card까지 같은 catalog grammar를 공유하는 furniture showroom sample로 재구성했다.
- MoMA Eames object record는 molded plywood lounge hero와 material metadata로 번역했다.
- Herman Miller Nelson bench의 slat/product flow는 `walnut slat product rail`과 product list로 반영했다.
- Noguchi glass table과 Girard textile archive는 hero image crop, palette chips, `Girard textile swatch wall`로 화면에 노출했다.
- `designStyles.ts`, `scripts/style-references.json`, `style-category-distinction-table.md`의 mid-century-modern 설명을 새 화면 문법에 맞게 보강했다.
- RED: `npm run check:style-distinction`가 `MIDCENTURY STUDIO`, `walnut slat product rail`, `Girard textile swatch wall` 누락으로 실패함.
- GREEN: `npm run check:style-distinction` 통과.
- Browser QA: `/en/styles/mid-century-modern` desktop/mobile에서 세 marker 모두 존재, horizontal overflow `0`, detail title은 긴 이름이라 안정적 2-line wrap.
- Browser QA: `/en/styles?q=mid-century%20modern` desktop card에서 `Mid-Century Modern`과 세 marker 모두 존재, horizontal overflow `0`.
- Final commands: `npm run check:data`, `npm run check:style-refs`, `npm run check:style-distinction`, `npm run lint`, `npm run build` 모두 통과. Next.js static pages `580/580`.
- Screenshots: `output/playwright/per-style-review/mid-century-modern/after/desktop.png`, `output/playwright/per-style-review/mid-century-modern/after/mobile.png`, `output/playwright/per-style-review/mid-century-modern/after/styles-list.png`.
- 다음 style은 `bauhaus`이다.

## 26. bauhaus

### 현재 판정

- Status: `verified`.
- Before screenshots: `output/playwright/per-style-review/bauhaus/before/desktop.png`, `output/playwright/per-style-review/bauhaus/before/mobile.png`.
- 기존 샘플은 원색 기하학 포스터처럼 보였지만 실제 학교, 워크숍, 아카이브, 프로그램 탐색 흐름이 약했다.
- `mid-century-modern`과 구분하려면 가구 쇼룸, walnut slat, textile swatch가 아니라 기본 조형 수업과 workshop method가 중심이어야 한다.
- `swiss-design`과 구분하려면 중립적 공공 정보 grid보다 원, 사각형, 삼각형, 원색, 교육 실험의 구조가 더 앞에 보여야 한다.
- `modernism`과 구분하려면 broad rational grid가 아니라 BAUHAUS SCHOOL이라는 institution과 shape lab 맥락이 보여야 한다.
- `posterism`과 구분하려면 한 문장짜리 벽보가 아니라 Visit, Join in, Discover, Research 같은 웹 탐색 모듈이 있어야 한다.
- 현재 moodboard는 primary shape cut-paper, strict grid proofs, black rule-line studies, workshop crops가 충분해 image gen 교체는 필요하지 않다.

### referenceSites에서 가져올 웹 문법

- Bauhaus-Archiv: Visit, Join in, Discover, Research로 이어지는 institution navigation, archive/object modules, functional hierarchy.
- Bauhaus Kooperation: modular archive navigation, black-white-primary contrast, rational cards, institution-scale object grid.
- Harvard Art Museums Bauhaus: archival object sequencing, spare metadata blocks, disciplined reading flow.

### 목표

- 샘플 고유 마커: `BAUHAUS SCHOOL`, `workshop method grid`, `circle square triangle lab`.
- 정보 구조: BAUHAUS SCHOOL header -> circle square triangle lab -> shape exercise grid -> workshop method grid -> Visit/Join in/Discover/Research cards.
- 시각 처리: off-white paper, black rule grid, primary red/blue/yellow, square corners, shape exercises, strict module density.

### 검증 계획

- `npm run check:style-distinction` RED 확인 후 GREEN.
- `/en/styles/bauhaus` desktop/mobile marker presence, horizontal overflow `0`, detail title line count `1`.
- `/en/styles?q=bauhaus` card에서 `Bauhaus`, `BAUHAUS SCHOOL`, `workshop method grid`, `circle square triangle lab` marker 확인.

### 구현 및 검증 결과

- `BauhausSchool`을 단순 geometry poster에서 institution/workshop sample로 재구성했다.
- Bauhaus-Archiv의 institution navigation은 Visit, Join in, Discover, Research 카드로 반영했다.
- Bauhaus Kooperation의 modular archive grammar는 black-rule `workshop method grid`와 shape exercise modules로 반영했다.
- Harvard Art Museums의 object sequencing은 spare metadata와 disciplined reading flow로 반영했다.
- `scripts/style-references.json`, `style-category-distinction-table.md`, `designStyles.ts`의 Bauhaus 설명을 새 화면 문법에 맞게 보강했다.
- RED: `npm run check:style-distinction`가 `BAUHAUS SCHOOL`, `workshop method grid`, `circle square triangle lab` 누락으로 실패함.
- GREEN: `npm run check:style-distinction` 통과.
- Browser QA: `/en/styles/bauhaus` desktop/mobile에서 세 marker 모두 존재, horizontal overflow `0`, detail title line count `1`.
- Browser QA: `/en/styles?q=bauhaus` desktop card에서 `Bauhaus`와 세 marker 모두 존재, horizontal overflow `0`.
- Final commands: `npm run check:data`, `npm run check:style-refs`, `npm run check:style-distinction`, `npm run lint`, `npm run build` 모두 통과. Next.js static pages `580/580`.
- Screenshots: `output/playwright/per-style-review/bauhaus/after/desktop.png`, `output/playwright/per-style-review/bauhaus/after/mobile.png`, `output/playwright/per-style-review/bauhaus/after/styles-list.png`.
- 다음 style은 `futurism`이다.
