# Ryan 2.0 Lightside Landing Page — Open-Design Remodel

## Context

The day/lightside experience at `/day` (`sites/ryan-2.0/app/day/`) is structurally implemented but doesn't fully match the desired design. A full-page reference mockup exists at `sites/ryan-2.0/uploads/pasted-1779151793162-0.png` (also served as `/uploads/pasted-1779151793162-0.png`). The goal is to use `/open-design` to generate a browser prototype from that mockup, then sync the resulting design back into the Next.js day page — remodeling the entire page as necessary.

## Reference

**Mockup image:** `sites/ryan-2.0/uploads/pasted-1779151793162-0.png`

The mockup shows the complete lightside page:
- Hero: full-bleed photo, nav overlay, "Arrive in Excellence." headline, two CTAs
- Services: 4 cards — Airport Transfers, Corporate Travel, Weddings & Events, Hourly Chauffeur
- Daytime Luxury: BMW image left / text right split
- Moments Grid: 8 photo cards 4×2
- Fleet: 2023 BMW 750i text + 2 stitched images
- Trust Strip: 5 features horizontal
- Final CTA: text left, image right
- Footer

## Approach: Open-Design Full Remodel

### Step 1 — Invoke `/open-design`

- Use the `open-design` skill with `pasted-1779151793162-0.png` as the reference image
- Generate a live browser prototype of the full page
- Iterate until the prototype matches the mockup

### Step 2 — Diff prototype against current code

| Area | Current | Target |
|---|---|---|
| Hero background image | `/uploads/choose_experience_hero_2.png` | Photographic outdoor BMW scene |
| Hero canvas height | `min(92vh, 920px)` | Match reference proportions |
| Section spacing/sizing | Existing `day.css` values | Match prototype output |

### Step 3 — Apply changes to Next.js files

**Files to modify:**
- `sites/ryan-2.0/components/ryan/day-app.tsx` — JSX, image `src` values, component structure
- `sites/ryan-2.0/app/day/day.css` — Sizing, spacing, layout overrides

**Preserve these existing patterns:**
- CSS tokens from `day.css` `:root` (color variables, `--px`, `--maxw`)
- Scroll-reveal system (`data-reveal`, `data-delay`, `pre-reveal`)
- `Logo`, `Nav`, `Footer` components (unless prototype changes them)
- Ken Burns animation on `.hero-bg-photo`

**Image note:** `pasted-1779151793162-0.png` is already in `public/uploads/` — reference as `/uploads/pasted-1779151793162-0.png`.

### Step 4 — Resize/rescale

Update section heights, max-widths, and breakpoints in `day.css` to match the prototype. Derive values from the prototype output — don't invent them.

## Verification

1. `cd sites/ryan-2.0 && npm run dev`
2. Open `http://localhost:3000/day`
3. Compare side-by-side with `pasted-1779151793162-0.png`
4. Confirm: hero image loads, sections match proportions, no regressions
5. Check responsive at 900px and 1200px breakpoints
