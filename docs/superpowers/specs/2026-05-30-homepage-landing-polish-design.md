# Homepage Landing Polish — Below-Hero Refinement

## Context

The Ryan 2.0 homepage (`/` → `RyanApp`) opens with a full-viewport **Choose Your Experience** hero (Day / Night split → `/day` / `/night`). That hero must **not** be modified.

Below the hero, a Ryan J.–focused landing was implemented: **Meet Ryan J.**, **Lifestyle band**, **Compact Reserve**, and **Footer** on a warm cream palette (spec: `2026-05-30-homepage-ryan-landing-design.md`).

User feedback: spacing, typography, transitions, and section layout feel off across the full scroll — a **general polish pass** is needed (transition, rhythm, hierarchy, and individual section layout). **Approach 1 — Editorial rhythm pass** was approved: keep the 3-block structure, fix execution via CSS and minor markup tweaks only.

## Goal

Bring the below-hero landing to life with unified editorial spacing, a clean hero→cream handoff, readable lifestyle quote treatment, and consistent reserve/footer/nav alignment — without changing hero behavior or adding new content sections.

## Constraints

### Must not change

- `components/ryan/hero.tsx` and all `.hero` CSS
- Day / Night split interaction and routing (`onEnter` → `/day` / `/night`)
- Section content meaning (Ryan J. story, booking CTA, form fields)
- Image files (no plate editing; use CSS crop only)

### Must have

- Unified landing spacing scale and single max-width (`1120px`)
- Flat cream Meet Ryan background with soft top fade (no heavy dark gradient band)
- Lifestyle band restructured: image strip + cream quote panel below (not overlay on photo)
- CSS crop on `hero_shot.png` to hide license plate (`object-position`)
- Fully scoped reserve form styles (no dark-theme `.form-field` bleed)
- Footer simplified to 2-column desktop layout
- Top nav horizontal padding aligned to sections when visible

### Out of scope

- New sections (services strip, process, fleet)
- Form backend / API
- Hero asset swaps
- Image file edits (inpaint, plate patch)
- Day / night experience pages
- Animation library additions (scroll reveal optional only if zero-deps CSS)

## Global landing system

Apply under `.landing-light` only.

### Spacing (desktop)

| Token | Value |
|-------|-------|
| Section padding | `96px` vertical, `48px` horizontal |
| Max content width | `1120px` centered |
| Column gap | `64px` |
| Internal stack gap | `24px` |
| Section separator | `1px solid rgba(26, 22, 15, 0.08)` between blocks |

### Typography

| Element | Spec |
|---------|------|
| Eyebrow | 10px sans, `0.45em` tracking, `#a47a3e` |
| H2 line 1 | `clamp(32px, 3.8vw, 52px)` serif, brand name |
| H2 line 2 / em | Italic display serif, `#8a6530`, `12px` below line 1 |
| Body | 17px serif, `1.7` line-height, max `42ch` |
| Phone secondary CTA | 13px sans, tracking, baseline-aligned with primary button |

### Hero → cream transition

- Remove multi-stop dark gradient on `.meet-ryan` background
- Section background: flat `#faf6ef`
- Top fade via `::before` on `.meet-ryan`: `120px` tall gradient from transparent → `#faf6ef` (overlaps hero bottom gently)

## Section specs

### Meet Ryan J. (`#about`)

**Markup tweaks (optional, minimal):**

- Split headline: `{SITE.brand}` on line 1, em tagline on line 2
- Trim body copy to 2 sentences (same intent)
- Phone CTA: `Call · +1 410 · 555 · 0188` with class `landing-phone`

**Layout:**

| Property | Value |
|----------|-------|
| Grid | `1.1fr 0.9fr` (55% copy / 45% portrait) |
| Portrait | `aspect-ratio 3/4`, `max-height 520px`, `1px` border `rgba(201, 169, 106, 0.35)` |
| Eyebrow → H2 | `20px` |
| H2 → body | `24px` |
| Body → CTAs | `32px` |
| Mobile | Portrait first (`order: -1`), `40px` gap |

### Lifestyle band

**Structure change:** split band (not full-bleed overlay).

```
┌─────────────────────────────────────┐
│  hero_shot — max 58vh, cover crop   │
├─────────────────────────────────────┤
│  cream panel — quote + attrib       │
└─────────────────────────────────────┘
```

| Element | Spec |
|---------|------|
| Image container | `max-height: 58vh`, overflow hidden |
| Image | `object-fit: cover`, `object-position: 50% 30%` |
| Quote panel | Background `#faf6ef`, padding `64px 48px`, centered text, max-width `640px` margin auto |
| Quote size | `clamp(28px, 3.2vw, 40px)` italic display |
| Attribution | 11px sans, tracking, `#8a6530` |
| Tagline | 16px serif italic, `--landing-text-dim` |
| Remove | White-on-photo overlay text, heavy dual gradients |

**Markup:** wrap quote block in `.ryan-lifestyle-panel` sibling below `.ryan-lifestyle-media`; remove or simplify `.ryan-lifestyle-overlay`.

### Reserve (`#reserve`)

| Element | Spec |
|---------|------|
| Grid | `1fr 1fr`, `64px` gap, `1120px` max |
| Contact rows | `12px` vertical padding per row |
| Form card | `#fff`, `40px` padding, `8px` radius, shadow `0 12px 40px rgba(26, 22, 15, 0.06)` |
| Form fields | Scoped under `.reserve-light-form` — borders, labels, selects all light-theme |
| Submit | Same dimensions as `.landing-btn-primary` |

### Footer

| Element | Spec |
|----------|-------|
| Layout | 2 columns desktop: brand + blurb \| link groups |
| Link groups | Site · Experiences · Contact as inline clusters or compact grid |
| Padding | `48px` top, `48px` horizontal |
| Background | `#f4ecdd` |
| Mobile | Single column stack |

### Top nav (when `.nav-visible` only)

- Horizontal padding: `48px` (match sections)
- Link gap: `32px` (was `44px`)
- No changes to hero-hidden behavior or fade-in threshold

## Files

| File | Change |
|------|--------|
| `components/ryan/sections.tsx` | Minor markup: headline split, lifestyle panel structure, phone CTA class, trimmed copy |
| `app/ryan.css` | Landing polish: spacing, typography, meet-ryan, lifestyle split, reserve scope, footer, nav |
| `components/ryan/RyanApp.tsx` | No hero changes; nav unchanged except CSS |

**Do not edit:** `components/ryan/hero.tsx`, hero-related CSS blocks in `ryan.css`

## Verification

1. `cd sites/ryan-2.0 && npm run dev` (port 3002)
2. Open `http://localhost:3002/`
3. **Hero:** Day/Night split unchanged — clicks route correctly
4. **Transition:** Scroll past hero — cream section fades in cleanly, no muddy dark band
5. **Meet Ryan:** Portrait/copy alignment, CTA baseline, mobile stack order
6. **Lifestyle:** Quote readable on cream panel; license plate not visible
7. **Reserve:** Form fields readable (light labels/borders); submit matches primary button
8. **Footer / nav:** Padding aligns with section edges at 1280px and 375px widths

## Success criteria

- Scroll below hero feels intentional and editorial, not bolted-on
- Consistent spacing and type rhythm across all landing blocks
- Zero regressions to Choose Your Experience hero
- No image file modifications required
