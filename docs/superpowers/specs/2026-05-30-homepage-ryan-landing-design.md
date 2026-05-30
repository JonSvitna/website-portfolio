# Homepage Below-Hero — Ryan J. Landing

## Context

The Ryan 2.0 homepage (`/` → `RyanApp`) opens with a full-viewport **Choose Your Experience** hero: a Day / Night split that routes to `/day` and `/night`. That hero must **not** be modified.

Everything scrollable below the hero is generic chauffeur content on a near-black palette (`--page-bg: #060604`): TransitionBand, Fleet (three fictional vehicles), Signature Experiences (six cells), Showcase quote, Process (four steps), Reserve form, and Footer. It does not center Ryan J. or use the owner photography in `public/uploads/`.

Two Ryan J. photos are available:

| File | Use |
|------|-----|
| `public/uploads/IMG_0420.JPG` | Event portrait — tan suit, champagne, editorial |
| `public/uploads/hero_shot.png` | Waterfront golden hour with white BMW 750 |

## Goal

Replace the below-hero scroll with a **tight, Ryan J.–focused landing** (2–3 sections + light footer) on a **warm cream palette**, with a **quick booking path**: primary “Book Ryan J.” scroll-to-form CTA and phone as secondary.

## Constraints

### Must not change

- `components/ryan/hero.tsx` and all Choose Your Experience hero behavior (Day / Night split, assets, CSS scoped to `.hero`)
- Hero routing (`onEnter` → `/day` / `/night`)

### Must have

- Three new content blocks: **Meet Ryan J.**, **Lifestyle quote band**, **Compact Reserve**
- Light backgrounds below hero (cream/paper, not `#060604`)
- Primary CTA: **Book Ryan J.** → smooth scroll to `#reserve`
- Secondary CTA: tap-to-call phone `+1 410 · 555 · 0188`
- Compact reserve form: Name, Phone, Date, Occasion (dropdown), Notes (optional)
- Both Ryan photos wired as `<img>` (not `image-slot` placeholders)
- Brand tokens from `components/ryan/site.ts` (`Ryan J.`, Executive Chauffeur)
- Footer updated for new anchors and lighter styling

### Nice to have

- Soft gradient transition from dark hero into first cream section
- Crop `hero_shot.png` to hide “RYAN MOTIVATES” license plate
- Slim sticky “Book Ryan J.” bar after scrolling past hero (only if it does not conflict with existing top nav fade-in)

### Out of scope

- Hero redesign or new hero assets
- Backend / API for form submission (keep client-side success state as today)
- Day or night experience page changes
- Email domain change (`ryan@ryanmotivates.co` stays unless requested later)
- Removing or restyling the tweaks panel

## Approach

**Editorial portrait → lifestyle band → reserve** (recommended in brainstorm; user approved)

1. **Meet Ryan J.** — cream section with portrait + bio + scroll CTA  
2. **Lifestyle band** — full-bleed `hero_shot.png` with quote overlay and warm bottom fade  
3. **Reserve** — two-column compact form + contact reassurance  
4. **Footer** — light refresh, updated links  

Remove from `RyanApp` composition: `TransitionBand`, `Fleet`, `SignatureExperiences`, `Showcase`, `Process`. Keep simplified `Reserve` and `Footer` (refactored in place or as new exports).

## Section specs

### Section 1 — Meet Ryan J. (`#about`)

**Replaces:** TransitionBand, Fleet, SignatureExperiences, Process

| Element | Spec |
|---------|------|
| Background | `#f4ecdd` / `#faf6ef` (warm cream) |
| Top edge | Soft gradient from hero black into cream |
| Layout | Desktop: copy left, `IMG_0420.JPG` right. Mobile: image top, copy below |
| Eyebrow | `Executive Chauffeur · Baltimore` |
| Headline | **Ryan J.** — *Your driver, not a dispatch.* |
| Body | 2–3 sentences: personal BMW 750 service, day and night, discretion, referral-based |
| Primary CTA | Button `Book Ryan J.` → `#reserve` (smooth scroll) |
| Secondary CTA | `+1 410 · 555 · 0188` (tel link on mobile) |

### Section 2 — Lifestyle band

**Replaces:** Showcase + marquee

| Element | Spec |
|---------|------|
| Image | `/uploads/hero_shot.png` full-bleed, `object-fit: cover` |
| Plate | Crop to exclude license plate text (“RYAN MOTIVATES”) |
| Overlay | Light warm gradient at bottom into cream; minimal scrim for text legibility |
| Quote | *The first impression isn’t at the door. It’s when the car arrives.* |
| Attribution | **Ryan J.** — Executive Chauffeur |
| Tagline | *Airport · weddings · date night · corporate — one driver, one standard.* |

No scrolling marquee. No dark `#060604` showcase panel.

### Section 3 — Reserve (`#reserve`)

**Replaces:** existing Reserve section (simplified)

| Element | Spec |
|---------|------|
| Background | Same cream family as Section 1 |
| Layout | Desktop: reassurance left, form right. Mobile: stacked |
| Eyebrow | `Reserve` |
| Headline | **Book Ryan J.** |
| Copy | Confirm within the hour for most trips; advance notice for weddings / multi-car |
| Phone | `+1 410 · 555 · 0188` — “Call or text” |
| Email | `ryan@ryanmotivates.co` |

**Form fields:**

1. Name (required)  
2. Phone (required)  
3. Date (required)  
4. Occasion — select: Airport · Wedding · Date Night · Corporate · Other  
5. Notes (optional, single line)  

**Submit:** `Request Reservation` — `preventDefault` + success state (existing pattern).

**Remove:** Day / Night experience toggle on this form (user already chose in hero).

### Section 4 — Footer

- Match cream palette, dark warm text (`#1a160f` range)  
- Links: `#about`, `#reserve`, `/day`, `/night`  
- Remove dead Fleet / Experience chapter links  
- Copyright: Ryan J. · Executive Chauffeur  

## Navigation

Update `TopNav` in `RyanApp.tsx`:

| Old anchor | New anchor |
|------------|------------|
| `#services` | `#about` or remove |
| `#fleet` | `#about` |
| `#experience` | `#about` or remove |
| `#contact` | `#reserve` |

Suggested nav links: **About** (`#about`) · **Reserve** (`#reserve`) · **Day** (`/day`) · **Night** (`/night`).

## Palette (below-hero only)

Add scoped CSS variables or a wrapper class (e.g. `.landing-light`) so hero dark tokens stay untouched:

```css
--landing-bg: #faf6ef;
--landing-bg-alt: #f4ecdd;
--landing-text: #1a160f;
--landing-text-dim: rgba(26, 22, 15, 0.72);
--landing-accent: var(--champagne); /* #c9a96a */
```

Body `--page-bg` below hero should read light when scrolling; hero section remains self-contained.

## Files

| File | Change |
|------|--------|
| `components/ryan/RyanApp.tsx` | New section composition; update TopNav anchors |
| `components/ryan/sections.tsx` | Add `MeetRyan`, `RyanLifestyle`, refactor `Reserve` + `Footer`; remove or stop exporting unused sections |
| `app/ryan.css` | Light section styles; hero styles unchanged |
| `sections.jsx` | Mirror changes if legacy bundle still used (check `index.html` / static entry) |

**Do not edit:** `components/ryan/hero.tsx`

## Verification

1. `cd sites/ryan-2.0 && npm run dev` (port 3002)  
2. Open `http://localhost:3002/`  
3. **Hero:** Day / Night split unchanged — click still routes to `/day` and `/night`  
4. **Scroll:** Cream Meet Ryan section appears; both photos load  
5. **Book Ryan J.:** scrolls to `#reserve`; form submits to success state  
6. **Phone:** tel link works on mobile or simulator  
7. **Responsive:** 375px, 768px, 1280px — portrait stacks on mobile, form readable  
8. **Nav:** links resolve to `#about` / `#reserve` / experience routes  

## Success criteria

- User sees Ryan J. as the subject within one scroll of the hero  
- Page feels materially lighter below the fold  
- Booking path is obvious: one primary button + phone fallback  
- Zero regressions to Choose Your Experience hero  
