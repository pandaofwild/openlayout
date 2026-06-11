# OpenDesignLab Style Sample One-by-One Continuation Guide

## Original objective to preserve

> 아냐, 하나씩 다시 짚어서 봐줘. 너무 한꺼번에 했어. 다시 모든 스타일을 하나씩 웹스타일을 살펴보는 문서를 만들어주고, 그걸 기반으로 하나씩 체크하면서 하나하나 제대로 퀼리티를 높여서 샘플 웹을 만들어줘. 제대로 하나가 프로급 웹 샘플로 만들어져야해. 한꺼번에 진행하지마. 하나씩. 그리고 image gen이 필요하면 사용해.

## Current status snapshot

- Workspace: `F:\coding\design_pan`
- Main rule: do not batch multiple styles. Pick one style slug, inspect it, improve it, validate it, then move to the next slug.
- Verified through: No. 26, `bauhaus`
- Next style to handle: No. 27, `futurism`
- Current active category: `미래 / 디지털`
- Completed category blocks:
  - `모던 / 미니멀`: complete, 9 of 9
  - `강렬 / 실험`: complete, 8 of 8
  - `레트로 / 빈티지`: complete, 9 of 9

## Completed so far

| No. | Style slug | Category | Current status | Visible markers or final distinction |
| --- | --- | --- | --- | --- |
| 01 | `minimalism` | 모던 / 미니멀 | Verified | blank-space ratio, product-first composition, thin-rule material index |
| 02 | `modernism` | 모던 / 미니멀 | Verified | rational grid, primary accents, functional geometry |
| 03 | `swiss-design` | 모던 / 미니멀 | Verified | baseline grid, red signal bars, objective typography |
| 04 | `international-style` | 모던 / 미니멀 | Verified | universal signage modules, neutral information system |
| 05 | `scandinavian` | 모던 / 미니멀 | Verified | bright Nordic product commerce, light wood, practical warmth |
| 06 | `japandi` | 모던 / 미니멀 | Verified | low horizontal rhythm, muted wood, ceramic quietness |
| 07 | `warm-minimal` | 모던 / 미니멀 | Verified | cream warmth, approachable premium product hierarchy |
| 08 | `soft-minimal` | 모던 / 미니멀 | Verified | low contrast, gentle rounded UI, frosted paper softness |
| 09 | `high-end-minimal` | 모던 / 미니멀 | Verified | gallery spacing, severe product crop, quiet luxury commerce |
| 10 | `brutalism` | 강렬 / 실험 | Verified | exposed structure, raw blocks, hard poster energy |
| 11 | `new-brutalism` | 강렬 / 실험 | Verified | native web controls, thick borders, raw app UI |
| 12 | `anti-design` | 강렬 / 실험 | Verified | broken convention, off-grid navigation, deliberate awkwardness |
| 13 | `maximalism` | 강렬 / 실험 | Verified | dense layers, abundant pattern, overloaded discovery |
| 14 | `glitch-art` | 강렬 / 실험 | Verified | net-art error surface, ASCII rupture feed, codec forensics rail |
| 15 | `deconstructivism` | 강렬 / 실험 | Verified | structural fault, fracture section index, displaced project axis |
| 16 | `avant-garde` | 강렬 / 실험 | Verified | manifesto program, critical lecture rail, art-into-life agenda |
| 17 | `postmodernism` | 강렬 / 실험 | Verified | classical quote, mixed-era object index, Memphis anti-functional shop |
| 18 | `retro` | 레트로 / 빈티지 | Verified | `RETRO BROADCAST SHOP`, time-travel media dial, analog merch queue |
| 19 | `vintage` | 레트로 / 빈티지 | Verified | `PAPER CATALOG`, repair ticket ledger, patina material register |
| 20 | `seventies-retro` | 레트로 / 빈티지 | Verified | `GROOVY LANDING`, wavy campaign shelf, corduroy product rhythm |
| 21 | `eighties-retro` | 레트로 / 빈티지 | Verified | `SYNTH CONSOLE`, arcade control strip, VHS mix queue |
| 22 | `nineties-graphic` | 레트로 / 빈티지 | Verified | `DESKTOP ZINE`, sticker link grid, halftone scrap wall |
| 23 | `y2k` | 레트로 / 빈티지 | Verified | `GLOSS PORTAL`, bubble widget stack, sparkle guestbook rail |
| 24 | `retro-futurism` | 레트로 / 빈티지 | Verified | `FLIGHT DECK`, destination poster rail, chrome capsule timetable |
| 25 | `mid-century-modern` | 레트로 / 빈티지 | Verified | `MIDCENTURY STUDIO`, walnut slat product rail, Girard textile swatch wall |
| 26 | `bauhaus` | 레트로 / 빈티지 | Verified | `BAUHAUS SCHOOL`, workshop method grid, circle square triangle lab |

## Immediate queue

Continue in this order unless `src/data/designStyles.ts` has changed:

1. `futurism`
2. Then continue through `미래 / 디지털` in `docs/style-sample-web-review-log.md`

For `futurism`, compare directly against `retro-futurism`, `high-tech`, `ai-aesthetic`, and `cyberpunk`. The existing distinction row says:

| Style slug | Core identity | Moodboard signals | Reference-site UI grammar | Easy overlap | Must differ by | Current marker |
| --- | --- | --- | --- | --- | --- | --- |
| `futurism` | Aerospace velocity | aluminum, carbon, launch diagrams | mission hero, launch window, telemetry strip | `retro-futurism`, `high-tech` | orbital civic-science framing | `ORBITAL` |

Do not decide the final implementation before re-opening the moodboard and current reference sites. `ORBITAL` can remain the primary marker, but add two more visible markers after inspecting the real refs.

## Files to inspect before each style

Read these before changing a style:

| File | Why it matters |
| --- | --- |
| `F:\coding\design_pan\AGENTS.md` | Local repo instructions and Next.js warning. |
| `F:\coding\design_pan\node_modules\next\dist\docs\...` | Required before code changes. Use the relevant guide, usually the CSS/App Router docs for renderer work. |
| `F:\coding\design_pan\docs\style-moodboard-imagegen-guidelines.md` | Required before creating or replacing moodboard images. |
| `F:\coding\design_pan\src\data\designStyles.ts` | Style source of truth: category, traits, moodboard captions, tokens, sample type. |
| `F:\coding\design_pan\scripts\style-references.json` | Reference-site source of truth. Keep it synced with style metadata. |
| `F:\coding\design_pan\src\components\design-style\DesignStyleSampleRenderer.tsx` | Main sample implementation. Most style UI changes happen here. |
| `F:\coding\design_pan\docs\style-category-distinction-table.md` | Category-level comparison table. Update this when a style's distinction changes. |
| `F:\coding\design_pan\docs\style-sample-web-review-log.md` | One-by-one progress log. Update only after validating that style. |
| `F:\coding\design_pan\scripts\check-data.mjs` | Data integrity check. |
| `F:\coding\design_pan\scripts\check-style-references.mjs` | Reference-site and metadata consistency check. |
| `F:\coding\design_pan\scripts\check-style-distinction.mjs` | Marker check for style distinction. Add each style's markers here. |
| `F:\coding\design_pan\scripts\check-cute-casual.mjs` | Category-specific validation when in `귀여움 / 캐주얼`. |
| `F:\coding\design_pan\scripts\check-future-digital.mjs` | Category-specific validation when in `미래 / 디지털`. |
| `F:\coding\design_pan\scripts\check-street-subculture.mjs` | Category-specific validation when in `스트리트 / 서브컬처`. |

## One-style workflow

Use this checklist for every single style. Do not start the next style until this list is done for the current one.

1. Pick exactly one style slug from `docs/style-sample-web-review-log.md`.
2. Read that style's entry in `src/data/designStyles.ts`.
3. Read that style's entry in `scripts/style-references.json`.
4. Find the matching renderer function in `DesignStyleSampleRenderer.tsx`.
5. Read the style's category row in `docs/style-category-distinction-table.md`.
6. Re-open the neighboring styles in the same category and list what they already own. The goal is to avoid overlap, not just to make the current style prettier.
7. Inspect the moodboard image under `public/generated/moodboards/`. Translate it into UI material: surface, border, image crop, texture, density, and decorative logic.
8. Open each `referenceSites` URL. Extract web UI grammar only: navigation rhythm, section order, card/list shape, hero behavior, CTA placement, and information density. Do not copy the visual composition.
9. Capture before screenshots for desktop and mobile.
10. Define three visible markers for the current style. One should be a main identity marker, and two should be structural or material markers. These markers must appear in the main sample surface, not only elsewhere on the detail page.
11. Add the markers to `scripts/check-style-distinction.mjs`.
12. Run `npm run check:style-distinction` once before implementation and confirm the current style fails for the missing new markers. This proves the marker check is meaningful.
13. Improve only that style's sample implementation in `DesignStyleSampleRenderer.tsx`.
14. If needed, make minimal supporting edits in `src/data/designStyles.ts`, `scripts/style-references.json`, `docs/style-category-distinction-table.md`, and `docs/style-sample-web-review-log.md`.
15. Capture after screenshots for desktop and mobile.
16. Inspect text overflow, clipped labels, broken compact/card/detail states, and repeated generic SaaS/dashboard patterns.
17. Run the required validation commands.
18. Mark the style verified in the review log only after the browser view and checks pass.
19. Write a short note in the review log about what changed and which adjacent styles it now differs from.
20. Only then move to the next style.

## Screenshot and browser QA targets

Use Playwright or the in-app browser to inspect these for each style:

- `/en/styles`
- `/en/styles?category=<category-slug-or-filter-used-by-app>`
- `/en/styles/<style-slug>`
- Desktop viewport: at least `1440x1000`
- Mobile viewport: at least `390x844`

Suggested local screenshot paths:

```text
F:\coding\design_pan\output\playwright\per-style-review\<style-slug>\before\desktop.png
F:\coding\design_pan\output\playwright\per-style-review\<style-slug>\before\mobile.png
F:\coding\design_pan\output\playwright\per-style-review\<style-slug>\after\desktop.png
F:\coding\design_pan\output\playwright\per-style-review\<style-slug>\after\mobile.png
```

Important QA note: a style detail page can include neighboring cards and related style text. Do not rely on whole-page text search alone. Verify that the markers are visible in the main sample/body itself.

## Validation commands

Run these after every style:

```powershell
npm run check:data
npm run check:style-refs
npm run check:style-distinction
npm run lint
npm run build
```

Run category scripts when applicable:

```powershell
node --experimental-strip-types --no-warnings=ExperimentalWarning scripts/check-cute-casual.mjs
node --experimental-strip-types --no-warnings=ExperimentalWarning scripts/check-future-digital.mjs
node --experimental-strip-types --no-warnings=ExperimentalWarning scripts/check-street-subculture.mjs
```

If Git rejects commands because of ownership checks in this Windows checkout, use:

```powershell
git -c safe.directory=F:/coding/design_pan status --short
```

## Quality bar for each finished style

A style is not done unless all of these are true:

- It is recognizable without reading the style title.
- It differs from adjacent styles by layout grammar, information density, component structure, type rhythm, card geometry, image treatment, and decorative principle.
- It is not only a recolor of a shared template.
- Moodboard signals are translated into UI materials and surfaces, not copied as a picture.
- Reference-site influence is visible as web structure, not as a clone.
- `representativeTraits` are visible in the sample.
- `avoidTraits` are intentionally avoided.
- Compact, card, and detail states have no text overlap, overflow, or clipped labels.
- The sample is strong enough to be used as a professional style reference.
- It does not collapse into generic AI dashboard, generic SaaS card, generic pastel cute UI, or generic dark neon panel.

## When to use image generation

Use image generation only when a moodboard is missing, too generic, or materially insufficient for the style decision. Before doing so:

1. Read `docs/style-moodboard-imagegen-guidelines.md`.
2. Follow its prompt structure.
3. Save generated assets to the expected moodboard path.
4. Update the relevant data entry only as much as needed.
5. Re-check that the sample UI translates the moodboard rather than copying it.

## Common pitfalls to avoid

- Do not edit two or more styles in the same implementation pass.
- Do not call a category complete just because the markers pass.
- Do not use color as the main distinction.
- Do not skip the before screenshot.
- Do not skip the red-check step for new markers.
- Do not trust old screenshots after changing responsive structure.
- Do not add new dependencies unless a specific style genuinely requires it.
- Do not copy reference sites literally.
- Do not rely on `uppercase` styling for marker text if the check expects lowercase text.
- Do not mark the overall goal complete while unverified styles remain.

## Next exact handoff

Start with `futurism`.

First pass questions:

1. What does the moodboard actually show: aerospace velocity, launch mission, aerodynamic product, carbon/aluminum material, or generic sci-fi dashboard?
2. Which reference sites provide the strongest web grammar: mission hero, launch window, engineering product page, telemetry strip, or civic-science program?
3. How will it avoid looking like `retro-futurism` travel poster, `high-tech` infrastructure control plane, `ai-aesthetic` model workspace, or `cyberpunk` city neon?
4. Which three markers will be visible inside the main sample?
5. What must be added to `check-style-distinction.mjs` before the implementation starts?

Do that style to completion before touching `cyberpunk`.
