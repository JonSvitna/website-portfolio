# Day Fleet — Red Interior Asset Swap

## Context

The day-side Fleet section at `/day` displays two stitched images: exterior and interior. The interior pane references `/uploads/fleet-bmw-interior.png` with alt text claiming "Cognac Red leather," but the actual image shows beige/cream quilted leather with a golden-hour waterfront view.

The night side consistently brands the vehicle as red leather (`site.ts`, `/night/cabin-rear.png`, cabin video). The day side should match.

## Goal

Replace the beige interior stock photo with a red luxury leather interior that preserves the editorial rear-cabin feel: warm daylight, luxury sedan, optional scenic view through windows.

## Requirements

### Must have

- Red luxury leather, clearly readable in daylight (cognac/burgundy or cherry/bright red — either acceptable)
- Rear cabin / back-seat perspective matching the current Fleet pane composition
- Free commercial-use license (Pexels primary, Unsplash fallback)
- Same file path: `sites/ryan-2.0/public/uploads/fleet-bmw-interior.png`

### Nice to have

- Warm golden-hour or natural daylight lighting
- City or waterfront visible through windows
- Luxury sedan aesthetic (BMW 750 not required)

### Out of scope

- Night-side assets (`/night/cabin-rear.png`, cabin video)
- AI recolor or compositing of the existing beige image
- Fleet section layout or CSS changes (unless crop adjustment is needed)

## Approach

**Direct stock swap (Pexels → Unsplash fallback)**

1. Search Pexels: `luxury car red leather interior rear`, `red leather back seat car`, `BMW red interior`
2. If no strong match, search Unsplash with the same terms
3. Shortlist 2–3 candidates; pick best against priority table
4. Download highest free resolution, resize to ~1600px wide, export optimized PNG
5. Replace `fleet-bmw-interior.png` in place

### Selection priority

| Priority | Criterion |
|----------|-----------|
| Required | Red luxury leather visible in daylight |
| Required | Rear cabin / back-seat angle |
| Preferred | Warm natural or golden-hour light |
| Preferred | Scenic view through windows |
| Acceptable | Generic luxury sedan (not necessarily BMW 750) |

## Files

| File | Change |
|------|--------|
| `sites/ryan-2.0/public/uploads/fleet-bmw-interior.png` | Replace with red interior stock photo |
| `sites/ryan-2.0/components/ryan/day-app.tsx` | Update alt text if red tone differs from "Cognac" |

No other files reference `fleet-bmw-interior.png`.

## Layout notes

Fleet interior pane CSS (`app/day/day.css`):

- `.fleet-images img` uses `object-fit: contain` and `object-position: center`
- If the new image letterboxes awkwardly, add a one-line inline `objectPosition` on the interior `<img>` only — no layout refactor

## Verification

1. `cd sites/ryan-2.0 && npm run dev`
2. Open `http://localhost:3000/day`, scroll to Fleet section
3. Confirm interior pane shows red leather (not beige)
4. Check responsive at 900px and 1200px breakpoints
5. Confirm day and night sides both read as "red leather interior"

## License

Pexels and Unsplash photos are free for commercial use; attribution not required. Record source URL in implementation notes for internal reference.
