# Site-Wide Brand Unity, Back-Nav Fix, and Homepage CTA Pop

## Context

The Ryan 2.0 site has three surfaces:

| Route | Experience |
|-------|------------|
| `/` | Choose Your Experience hero (Day/Night split) + Ryan J. landing below |
| `/day` | Day editorial experience |
| `/night` | Static night-site (redirect to `/night-site/index.html`) |

**User-reported issues:**

1. **Back button:** Navigating from `/day` or `/night` back to `/` shows a blank page until hard refresh.
2. **Logo inconsistency:** Home uses `R` in a square box; Day uses stripe-R SVG; Night uses `RJ` mono badge.
3. **Typography drift:** Home (`ryan.css` — Manrope/Italiana/Cormorant), Day/Night (`colors_and_type.css` — Geist/DM Mono/Cormorant).
4. **Homepage CTA feels basic:** Needs a standout Ryan-focused feature below the hero.
5. **Mobile:** Landing sections need touch and spacing optimization.

**Prior specs (still valid where not contradicted):**

- `2026-05-30-homepage-ryan-landing-design.md` — landing structure
- `2026-05-30-homepage-landing-polish-design.md` — spacing/type polish

**Hard constraint:** Do **not** modify the Choose Your Experience hero (`hero.tsx`, `.hero` CSS, Day/Night split behavior).

## Goal

Fix back-navigation to homepage, unify logo and typography across home/day/night nav, enhance the homepage below-hero with a trust card + mobile sticky book bar (Option D), and optimize landing for mobile.

## Approach

**Approach 1 — Shared brand kit + surgical fixes** (approved)

- Fix `RyanSite` render gate
- Extract shared `BrandLockup` component (day stripe-R SVG)
- Bridge homepage landing CSS to `colors_and_type.css` tokens
- Trust card + mobile sticky bar on homepage landing
- Night nav markup aligned to shared lockup
- Mobile polish pass on landing sections

## Part 1 — Back button + brand + typography

### Back-navigation fix

**Root cause:** `RyanSite.tsx` gates rendering on `image-slot.js` `onLoad`. Cached script on browser back does not re-fire `onLoad`, leaving `ready === false` and a blank page.

**Fix (preferred):** Remove the gate entirely — landing sections no longer use `image-slot`.

**Fallback (if script still needed elsewhere):** On mount, set `ready = true` if script tag exists and `complete`, or after `requestAnimationFrame` timeout.

**Success:** `/` → `/day` → browser back → homepage renders immediately with hero + landing.

### Unified logo — `BrandLockup`

**Canonical mark:** Day site stripe-R SVG (`components/ryan/day-app.tsx` `Logo`).

**New file:** `components/ryan/BrandLockup.tsx`

```tsx
// Props: size?, variant?: 'dark' | 'light', href?, className?
// Renders: [SVG mark] + SITE.brand + SITE.driverTitle
```

**Consumers:**

| Location | Action |
|----------|--------|
| `RyanApp.tsx` `TopNav` | Replace `brand-mark` / `brand-text` |
| `day-app.tsx` `Nav` | Replace inline `Logo` + text; import shared component |
| `public/night-site/app.jsx` `Nav` | Replace `RJ` mono + text with inline SVG matching lockup (static JSX) |

Home hero unchanged — no logo added to hero if not present today.

### Typography unification

**Source of truth:** `app/day/colors_and_type.css`

| Token | Use |
|-------|-----|
| `--f-display` | Headlines (Cormorant Garamond) |
| `--f-body` | Body (Geist) |
| `--f-mono` | Eyebrows, nav links, chips (DM Mono) |
| `--t-cap`, `--tr-mono-cap` | Micro-caps |
| `--t-body`, `--lh-body` | Body copy |

**Home landing (`app/ryan.css`):**

- Import `colors_and_type.css` or map landing vars to shared tokens
- Eyebrows → mono caps per design system
- Body → `--f-body`, `--t-body`
- Headlines → `--f-display`

**Root layout (`app/layout.tsx`):**

- Extend Google Fonts link to include Geist + DM Mono (Cormorant already loaded)

**Day / Night:** Verify nav and eyebrows use token classes; fix obvious drift only — no full night CSS rewrite.

## Part 2 — Homepage pop (Option D)

### Meet Ryan trust card

Enhance `#about` section (no hero changes):

**Layout:** Portrait + copy grid with trust signals below CTAs.

| Element | Spec |
|---------|------|
| Portrait | Champagne `1px` border, `--accent-wash` background |
| Trust chips | 3 mono-caps pills: **BMW 750** · **Baltimore** · **24 / 7** |
| Chip style | `--f-mono`, `--t-cap-sm`, border `--line`, padding `8px 14px` |
| Divider | Thin champagne rule above chip row |
| CTAs | Existing Book + Call row unchanged in behavior |

**Markup addition in `sections.tsx`:**

```tsx
<ul className="trust-chips" aria-label="Service highlights">
  <li>BMW 750</li>
  <li>Baltimore</li>
  <li>24 / 7</li>
</ul>
```

### Mobile sticky book bar

**New component:** `MobileBookBar` in `RyanApp.tsx` (or separate file)

| Property | Value |
|----------|-------|
| Visibility | `max-width: 720px` only |
| Trigger | `scrollY > window.innerHeight * 0.85` |
| Hide when | `#reserve` intersecting viewport (optional) |
| Position | `fixed` bottom, `z-index: 40` |
| Content | **Book Ryan J.** (scroll to `#reserve`) + **Call** (`tel:+14105550188`) |
| Safe area | `padding-bottom: env(safe-area-inset-bottom)` |

Desktop: component not rendered or `display: none`.

## Part 3 — Mobile polish (landing)

| Section | Mobile fix |
|---------|------------|
| Meet Ryan | Portrait `max-height: 380px`; chips wrap; CTAs stack under `480px` |
| Lifestyle | Image `min-height: 200px`; panel padding `40px 22px`; quote min `24px` |
| Reserve | Form full-width; contact rows label-above-value; inputs ≥ `44px` tap height |
| Footer | Single column stack; copyright centered |
| Top nav | At 720px: brand lockup + optional **Reserve** link (nav links stay hidden) |
| Custom cursor | Disable on `(pointer: coarse)` or `@media (hover: none)` |

## Files

| File | Change |
|------|--------|
| `components/ryan/RyanSite.tsx` | Remove/fix image-slot gate |
| `components/ryan/BrandLockup.tsx` | **New** shared logo lockup |
| `components/ryan/RyanApp.tsx` | BrandLockup in TopNav; MobileBookBar |
| `components/ryan/day-app.tsx` | Use BrandLockup; remove duplicate Logo |
| `components/ryan/sections.tsx` | Trust chips markup |
| `app/ryan.css` | Token bridge, trust card, sticky bar, mobile, cursor disable |
| `app/layout.tsx` | Geist + DM Mono fonts |
| `public/night-site/app.jsx` | Unified nav lockup |
| `public/night-site/styles.css` | Nav lockup styles aligned to BrandLockup |

**Do not edit:** `components/ryan/hero.tsx`, hero CSS blocks in `ryan.css`

## Verification

1. `npm run dev` (port 3002)
2. **Back nav:** `/` → `/day` → browser back → homepage loads without refresh
3. **Logo:** Compare home scrolled nav, day nav, night nav — same mark + text hierarchy
4. **Type:** Eyebrows mono-caps, body Geist, headlines Cormorant on home landing
5. **Trust card:** Chips visible below Meet Ryan CTAs
6. **Sticky bar:** Mobile viewport — scroll past hero, bar appears; tap Book scrolls to form
7. **Hero regression:** Day/Night split unchanged on `/`
8. **Touch:** No custom cursor on mobile; tap targets feel comfortable

## Success criteria

- Back button returns to a fully rendered homepage
- One recognizable logo lockup on all three experiences
- Typography feels like one brand system
- Homepage below-hero has a clear “pop” (trust card + mobile sticky CTA)
- Mobile landing is usable without horizontal scroll or tiny tap targets
- Choose Your Experience hero untouched
