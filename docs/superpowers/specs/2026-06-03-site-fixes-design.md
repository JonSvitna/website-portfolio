# Site Fixes Design — Ryan J. Portfolio

**Date:** 2026-06-03

## Overview

Three targeted fixes across the day and night experiences of the Ryan J. executive chauffeur site.

---

## Fix 1 — Nav links hidden over hero video

### Problem
Both the day and night navs render their link items (Services / Fleet / Experience / About / Contact on day; Occasions / Cabin / Service Area / Book on night) as a permanent overlay on the hero video section, creating unwanted "headers" floating over the video.

### Solution
Conditionally hide nav-links and the nav CTA button when the nav is in its "at top" state (not yet scrolled past the hero). Only the brand lockup remains visible at the top of the video. Both sites already track scroll position — we add a CSS class guard or conditional render on the link group.

### Files
- `sites/ryan-2.0/components/ryan/day-app.tsx` — `Nav` component, suppress `nav-links` + `nav-cta` when `!pastHero`
- `sites/ryan-2.0/public/night-site/app.jsx` — `Nav` component, suppress `nav-links` + `nav-cta` when `!scrolled`
- `sites/ryan-2.0/components/ryan/night/Nav.tsx` — Next.js night nav, same scroll-gate logic

---

## Fix 2 — All CTAs open `https://tr.ee/GTOHjorP2S` in new tab

### Problem
"Book Now", "Reserve", and "Book Your Night" buttons either scroll to an embedded form (`#contact`, `#reserve`) or have placeholder destinations. The embedded reservation form on the night site should be removed.

### Solution
- Every booking/reserve/book CTA button gets `href="https://tr.ee/GTOHjorP2S" target="_blank" rel="noopener noreferrer"`
- The night site embedded reservation form (`ReserveForm.tsx`, `reserve.jsx`) is replaced with a simple section containing a prominent "Book Your Night →" link to tr.ee
- Phone `tel:` links (call/text buttons) are left unchanged — those remain direct-dial

### Files
- `sites/ryan-2.0/components/ryan/day-app.tsx` — "Book Now" buttons in hero, final CTA
- `sites/ryan-2.0/components/ryan/RyanApp.tsx` — `TopNav` Reserve link, `MobileBookBar` primary button
- `sites/ryan-2.0/components/ryan/sections.tsx` — Reserve section, any booking CTAs
- `sites/ryan-2.0/components/ryan/night/ReserveForm.tsx` — replace form with tr.ee CTA
- `sites/ryan-2.0/public/night-site/reserve.jsx` — replace form with tr.ee CTA
- `sites/ryan-2.0/public/night-site/cta.jsx` — "Book Your Night" and "Text us instead" buttons

---

## Fix 3 — Phone number: uniform `667-207-1472`

### Problem
Day-side files contain two wrong numbers:
- `(443) 973-3356` / `tel:+14439733356` — hardcoded in `day-app.tsx`
- Placeholder `+14105550188` — in `RyanApp.tsx` and `sections.tsx`

Night-side files already use the correct number throughout — no changes needed.

### Correct values
- Display: `667-207-1472`
- `tel:` href: `tel:+16672071472`

### Files
- `sites/ryan-2.0/components/ryan/day-app.tsx` — replace all instances of `(443) 973-3356` / `+14439733356`
- `sites/ryan-2.0/components/ryan/RyanApp.tsx` — replace `+14105550188`
- `sites/ryan-2.0/components/ryan/sections.tsx` — replace `+14105550188`

---

## Success Criteria
- No nav link text appears over hero videos on either day or night site
- Every booking/reserve button on both sites opens `https://tr.ee/GTOHjorP2S` in a new tab
- Phone number `667-207-1472` appears uniformly on all pages; no old numbers remain
- `tel:` call links still work as direct-dial
