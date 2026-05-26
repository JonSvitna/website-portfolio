# Ryan Day Cinematic Booking Journey Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Ryan 2.0 `/day` hero as live clickable layers and add a bold, polished cinematic booking journey through the existing page.

**Architecture:** Keep the current Next.js client component and page CSS architecture. Modify `Hero` and small presentational pieces in `day-app.tsx`, then add scoped CSS in `day.css` for live hero layers, journey accents, depth, responsive behavior, and reduced-motion support. Avoid new dependencies and preserve existing section components and content arrays.

**Tech Stack:** Next.js 16.2.6 App Router, React 19.2.4 client component, TypeScript/TSX, plain CSS, existing local assets in `sites/ryan-2.0/public/uploads`.

---

## File Structure

- Modify `sites/ryan-2.0/components/ryan/day-app.tsx`
  - Replace the baked/composited `Hero` implementation with live nav/text/CTA/media/booking layers.
  - Add small presentational data/components only if they support the journey story.
  - Keep `Nav`, `Services`, `Daytime`, `Moments`, `Fleet`, `Trust`, `FinalCTA`, and `Footer` as the main page structure.
- Modify `sites/ryan-2.0/app/day/day.css`
  - Remove or neutralize `hero-composited` and `hero-hotspot` usage.
  - Add live cinematic hero layout styles.
  - Add journey/depth polish for cards, images, route accents, responsive breakpoints, and `prefers-reduced-motion`.
- Do not create new runtime files unless implementation proves the existing files become too hard to reason about.

## Preconditions

- Work on branch `design/ryan-day-cinematic-booking-journey`.
- The approved spec is `docs/superpowers/specs/2026-05-23-ryan-day-cinematic-booking-journey-design.md`.
- The local `node_modules/next/dist/docs/` directory was not present when this plan was written. If it exists when executing, read the relevant App Router/client component/CSS docs before editing.
- The Ryan app has no `*.test.*` or `*.spec.*` files at plan time, so verification is lint/build/manual visual review rather than automated unit tests.

## Task 1: Baseline And Safety Check

**Files:**
- Read: `docs/superpowers/specs/2026-05-23-ryan-day-cinematic-booking-journey-design.md`
- Read: `sites/ryan-2.0/components/ryan/day-app.tsx`
- Read: `sites/ryan-2.0/app/day/day.css`
- Read: `sites/ryan-2.0/package.json`

- [ ] **Step 1: Confirm branch and dirty state**

Run:

```bash
git status --short --branch
```

Expected: branch is `design/ryan-day-cinematic-booking-journey`. Existing modified files may include `sites/ryan-2.0/app/day/day.css`, `sites/ryan-2.0/components/ryan/day-app.tsx`, the approved spec, `.superpowers/`, and `sites/ryan-2.0/public/uploads/homepage_hero.mp4`.

- [ ] **Step 2: Read local Next.js docs if available**

Run:

```bash
ls sites/ryan-2.0/node_modules/next/dist/docs
```

Expected: If the directory exists, read the relevant App Router/client component/CSS docs before editing. If it does not exist, continue with the existing local component/CSS patterns and note that docs were unavailable.

- [ ] **Step 3: Start or reuse the Ryan dev server**

Before starting a new server, check existing terminals or running processes. If no Ryan dev server is healthy, run:

```bash
npm run dev:ryan
```

Expected: Next.js starts the Ryan app on `http://localhost:3002`.

- [ ] **Step 4: Capture baseline behavior**

Open:

```text
http://localhost:3002/day
```

Expected: Current page loads. Note current hero behavior: static `day-hero.png`, hidden live hero UI, and invisible clickable hotspots.

## Task 2: Rebuild Hero JSX As Live Layers

**Files:**
- Modify: `sites/ryan-2.0/components/ryan/day-app.tsx`

- [ ] **Step 1: Replace the current `Hero` function**

In `sites/ryan-2.0/components/ryan/day-app.tsx`, replace the full `Hero` function with:

```tsx
function Hero() {
  return (
    <section className="hero hero-cinematic" data-screen-label="Hero — Cinematic Booking Journey">
      <div className="hero-canvas">
        <div className="hero-atmosphere" aria-hidden="true">
          <span className="hero-orb hero-orb-one" />
          <span className="hero-orb hero-orb-two" />
          <span className="hero-route-line" />
        </div>

        <div className="hero-bg hero-live-media" aria-hidden="true">
          <img
            src="/uploads/hero_shot.png"
            alt=""
            className="hero-bg-photo"
          />
        </div>

        <div className="hero-wash" />

        <div className="hero-body">
          <div className="hero-content">
            <div className="hero-eyebrow">Executive Travel. Elevated.</div>
            <h1 className="hero-hl">
              <span className="line">From request</span>
              <span className="line">to arrival.</span>
            </h1>
            <p className="hero-sub">
              Professional chauffeur service in Baltimore and beyond.
              Book a polished, punctual ride for business, airports, events, and everyday luxury.
            </p>
            <div className="hero-cta-row">
              <a className="btn-fill" href="#contact">
                Book Now
                <span className="arrow">{I.arrow}</span>
              </a>
              <a className="btn-outline" href="#services">
                View Services
                <span className="arrow">{I.arrow}</span>
              </a>
            </div>
          </div>
        </div>

        <aside className="hero-booking-card" aria-label="Booking journey preview">
          <div className="booking-card-kicker">Your Ride</div>
          <div className="booking-card-title">Luxury in motion</div>
          <div className="booking-steps">
            <span>Choose service</span>
            <span>Confirm time</span>
            <span>Arrive first class</span>
          </div>
          <a className="booking-card-link" href="#contact">
            Start Booking
            <span className="arrow">{I.arrow}</span>
          </a>
        </aside>

        <div className="hero-scroll-cue">
          <span className="dot" />
          <span>Scroll to Explore</span>
        </div>

        <div className="hero-strip">
          {HERO_SERVICES.map((s) => (
            <a className="hero-strip-item" href="#services" key={s.name}>
              <div className="item-icon">{s.icon}</div>
              <div>
                <div className="item-name">{s.name}</div>
                <div className="item-copy">{s.copy}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify no `hero-hotspot` JSX remains**

Run:

```bash
rg "hero-hotspot|hero-composited" sites/ryan-2.0/components/ryan/day-app.tsx
```

Expected: no matches.

- [ ] **Step 3: Save and check the page compiles**

With the dev server running, open:

```text
http://localhost:3002/day
```

Expected: the page compiles. The hero may look rough until CSS is updated, but there should be no React runtime error.

## Task 3: Add Live Cinematic Hero CSS

**Files:**
- Modify: `sites/ryan-2.0/app/day/day.css`

- [ ] **Step 1: Remove obsolete composited/hotspot styles**

In `day.css`, remove the rules that target:

```css
.hero-composited .hero-canvas
.hero-composited .hero-bg
.hero-composited .hero-bg img.hero-bg-photo
.hero-hotspots
.hero-hotspot
.hero-hotspot:focus-visible
.hero-hotspot-services-nav
.hero-hotspot-fleet-nav
.hero-hotspot-experience-nav
.hero-hotspot-about-nav
.hero-hotspot-contact-nav
.hero-hotspot-book
.hero-hotspot-services-cta
.hero-hotspot-airport
.hero-hotspot-corporate
.hero-hotspot-weddings
.hero-hotspot-hourly
.hero-composited .hero-wash
.hero-composited .hero-body
.hero-composited .hero-scroll-cue
.hero-composited .hero-pagination
.hero-composited .hero-strip
```

Expected: `hero-composited` and `hero-hotspot` are no longer used in CSS.

- [ ] **Step 2: Add cinematic hero styles after the base `.hero-bg img.hero-bg-photo` rule**

Add:

```css
.hero-cinematic .hero-canvas {
  min-height: 100svh;
  height: min(100svh, 920px);
  background:
    radial-gradient(circle at 78% 18%, rgba(216, 185, 123, 0.32), transparent 18%),
    linear-gradient(135deg, #fffaf0 0%, #f2ead8 48%, #dec994 100%);
  isolation: isolate;
}

.hero-atmosphere {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(201, 169, 106, 0.42);
  background: rgba(255, 255, 255, 0.18);
  filter: blur(0.2px);
}

.hero-orb-one {
  width: clamp(160px, 18vw, 280px);
  height: clamp(160px, 18vw, 280px);
  right: 10%;
  top: 16%;
}

.hero-orb-two {
  width: clamp(280px, 34vw, 520px);
  height: clamp(280px, 34vw, 520px);
  right: -12%;
  bottom: -18%;
  opacity: 0.72;
}

.hero-route-line {
  position: absolute;
  left: var(--px);
  right: var(--px);
  bottom: 118px;
  height: 1px;
  background: linear-gradient(90deg, rgba(201, 169, 106, 0), rgba(201, 169, 106, 0.62), rgba(201, 169, 106, 0));
  transform-origin: left;
}

.hero-live-media {
  left: auto;
  right: clamp(24px, 7vw, 108px);
  top: 17%;
  bottom: 18%;
  width: min(52vw, 720px);
  border: 1px solid rgba(255, 255, 255, 0.58);
  box-shadow: 0 34px 90px -34px rgba(21, 23, 29, 0.34);
  background: rgba(255, 255, 255, 0.24);
}

.hero-live-media img.hero-bg-photo {
  object-fit: cover;
  object-position: center;
  transform: scale(1.02);
}

.hero-cinematic .hero-wash {
  z-index: 2;
  background: linear-gradient(
    90deg,
    rgba(255, 252, 246, 0.92) 0%,
    rgba(255, 252, 246, 0.76) 28%,
    rgba(255, 252, 246, 0.34) 48%,
    transparent 72%
  );
}

.hero-cinematic .hero-body {
  z-index: 4;
  padding-bottom: 180px;
}

.hero-cinematic .hero-content {
  max-width: 610px;
}

.hero-cinematic .hero-sub {
  max-width: 52ch;
}

.hero-booking-card {
  position: absolute;
  right: clamp(28px, 7vw, 112px);
  bottom: 154px;
  z-index: 6;
  width: min(360px, 28vw);
  padding: 26px;
  border: 1px solid rgba(201, 169, 106, 0.36);
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(18px) saturate(135%);
  -webkit-backdrop-filter: blur(18px) saturate(135%);
  box-shadow: 0 28px 70px -34px rgba(21, 23, 29, 0.42);
}

.booking-card-kicker {
  font-family: var(--f-mono);
  font-size: 10px;
  letter-spacing: 0.36em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 12px;
}

.booking-card-title {
  font-family: var(--f-display);
  font-size: 30px;
  line-height: 1;
  color: var(--fg-1);
  margin-bottom: 20px;
}

.booking-steps {
  display: grid;
  gap: 10px;
  margin-bottom: 22px;
}

.booking-steps span {
  position: relative;
  padding-left: 22px;
  font-family: var(--f-body);
  font-size: 13px;
  color: var(--fg-2);
}

.booking-steps span::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.72em;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px rgba(201, 169, 106, 0.12);
}

.booking-card-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: var(--f-mono);
  font-size: 10px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--fg-1);
  border-bottom: 1px solid var(--accent);
  padding-bottom: 8px;
}

.booking-card-link .arrow {
  transition: transform 0.4s var(--ease);
}

.booking-card-link:hover .arrow {
  transform: translateX(5px);
}
```

- [ ] **Step 3: Add entrance animation styles**

Add after the hero cinematic styles:

```css
.hero-cinematic .nav,
.hero-cinematic .hero-eyebrow,
.hero-cinematic .hero-hl,
.hero-cinematic .hero-sub,
.hero-cinematic .hero-cta-row,
.hero-live-media,
.hero-booking-card,
.hero-cinematic .hero-strip,
.hero-route-line {
  animation: cinematicEnter 0.9s var(--ease-slow) both;
}

.hero-cinematic .hero-eyebrow { animation-delay: 0.08s; }
.hero-cinematic .hero-hl { animation-delay: 0.16s; }
.hero-cinematic .hero-sub { animation-delay: 0.26s; }
.hero-cinematic .hero-cta-row { animation-delay: 0.36s; }
.hero-live-media { animation-delay: 0.24s; }
.hero-booking-card { animation-delay: 0.48s; }
.hero-cinematic .hero-strip { animation-delay: 0.58s; }
.hero-route-line { animation-name: routeDraw; animation-delay: 0.5s; }

@keyframes cinematicEnter {
  from {
    opacity: 0;
    transform: translateY(26px) scale(0.985);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes routeDraw {
  from {
    opacity: 0;
    transform: scaleX(0);
  }
  to {
    opacity: 1;
    transform: scaleX(1);
  }
}
```

- [ ] **Step 4: Verify hero visually**

Open:

```text
http://localhost:3002/day
```

Expected:
- No double-layered text.
- Nav, Book Now, View Services, hero service strip, and booking preview link are visible and clickable.
- Hero has a cinematic layered look without relying on invisible hotspots.

## Task 4: Add Journey Depth To Existing Sections

**Files:**
- Modify: `sites/ryan-2.0/components/ryan/day-app.tsx`
- Modify: `sites/ryan-2.0/app/day/day.css`

- [ ] **Step 1: Add a journey marker to `Services`**

In the `Services` section, directly after the closing `</div>` for `.services-grid`, add:

```tsx
        <div className="journey-marker" data-reveal data-delay="3">
          <span className="journey-dot" />
          <span className="journey-label">Choose the ride purpose</span>
          <span className="journey-line" />
        </div>
```

- [ ] **Step 2: Add a journey marker to `Fleet`**

In the `Fleet` section, inside `.fleet-text` after the fleet CTA wrapper, add:

```tsx
        <div className="fleet-journey-note" data-reveal data-delay="4">
          <span className="journey-dot" />
          <span>Vehicle confirmed for a first-class arrival.</span>
        </div>
```

- [ ] **Step 3: Add a journey marker to `FinalCTA`**

In `.final-cta-actions`, after the phone CTA, add:

```tsx
          <span className="final-journey-note">
            Request. Confirm. Arrive.
          </span>
```

- [ ] **Step 4: Add section depth CSS**

Add before the `TRUST STRIP` section in `day.css`:

```css
.journey-marker {
  margin: 42px auto 0;
  max-width: 720px;
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  gap: 14px;
  color: var(--fg-2);
}

.journey-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 7px rgba(201, 169, 106, 0.12);
}

.journey-label {
  font-family: var(--f-mono);
  font-size: 10px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--fg-2);
}

.journey-line {
  height: 1px;
  background: linear-gradient(90deg, var(--line-2), transparent);
}

.service-card,
.moment,
.fleet-images .pane,
.final-cta-image {
  will-change: transform;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 34px 84px -36px rgba(21, 23, 29, 0.28);
}

.moment:hover {
  transform: translateY(-7px) scale(1.01);
  box-shadow: 0 32px 72px -34px rgba(21, 23, 29, 0.36);
}

.fleet-images .pane {
  border: 1px solid rgba(201, 169, 106, 0.24);
  box-shadow: 0 24px 70px -42px rgba(21, 23, 29, 0.32);
}

.fleet-journey-note {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  margin-top: 10px;
  font-family: var(--f-body);
  font-size: 13px;
  color: var(--fg-2);
}

.final-journey-note {
  align-self: center;
  font-family: var(--f-mono);
  font-size: 10px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--fg-2);
}
```

- [ ] **Step 5: Verify journey story**

Open:

```text
http://localhost:3002/day
```

Expected:
- Services has a small route/journey accent after the cards.
- Fleet includes the confidence note.
- Final CTA includes “Request. Confirm. Arrive.”
- Existing sections remain in the same order and do not feel redesigned into a different brand.

## Task 5: Responsive And Reduced-Motion Hardening

**Files:**
- Modify: `sites/ryan-2.0/app/day/day.css`

- [ ] **Step 1: Replace obsolete responsive hero-composited rule**

In the `@media (max-width: 900px)` block, remove:

```css
  .hero-composited .hero-canvas { min-height: 100svh; }
```

- [ ] **Step 2: Add tablet/mobile cinematic hero rules**

Inside `@media (max-width: 900px)`, add:

```css
  .hero-cinematic .hero-canvas {
    height: auto;
    min-height: 100svh;
    padding-bottom: 0;
  }

  .hero-live-media {
    position: relative;
    inset: auto;
    width: auto;
    height: 320px;
    margin: 96px var(--px) 0;
  }

  .hero-cinematic .hero-wash {
    background: linear-gradient(180deg, rgba(255, 252, 246, 0.94) 0%, rgba(255, 252, 246, 0.72) 48%, transparent 100%);
  }

  .hero-cinematic .hero-body {
    position: relative;
    padding: 54px var(--px) 32px;
  }

  .hero-booking-card {
    position: relative;
    right: auto;
    bottom: auto;
    width: auto;
    margin: 0 var(--px) 28px;
  }

  .hero-route-line {
    bottom: 24px;
  }

  .hero-cinematic .hero-strip {
    position: relative;
  }

  .journey-marker {
    grid-template-columns: auto 1fr;
    text-align: left;
  }

  .journey-line {
    grid-column: 1 / -1;
  }

  .final-journey-note {
    width: 100%;
  }
```

- [ ] **Step 3: Add small-screen rules**

After the existing `@media (max-width: 900px)` block, add:

```css
@media (max-width: 620px) {
  .hero-live-media {
    height: 260px;
    margin-top: 76px;
  }

  .hero-booking-card {
    padding: 22px;
  }

  .booking-card-title {
    font-size: 26px;
  }

  .hero-cinematic .hero-cta-row {
    align-items: stretch;
  }

  .hero-cinematic .btn-fill,
  .hero-cinematic .btn-outline {
    width: 100%;
    justify-content: center;
  }

  .journey-label,
  .final-journey-note {
    letter-spacing: 0.22em;
  }
}
```

- [ ] **Step 4: Add reduced-motion rules**

At the end of `day.css`, add:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.001ms !important;
  }

  [data-reveal].pre-reveal {
    opacity: 1;
    transform: none;
  }

  .hero-live-media img.hero-bg-photo,
  .moment:hover img,
  .fleet-images .pane:hover img,
  .final-cta:hover .final-cta-image img {
    transform: none;
  }
}
```

- [ ] **Step 5: Verify responsive behavior**

Open browser responsive tools for:

```text
1440px wide
1024px wide
900px wide
620px wide
390px wide
```

Expected:
- Text is visible.
- CTAs are reachable.
- Hero media does not cover copy.
- Booking card does not overflow.
- Moments grid, fleet, and final CTA remain readable.

## Task 6: Focused Verification And Cleanup

**Files:**
- Verify: `sites/ryan-2.0/components/ryan/day-app.tsx`
- Verify: `sites/ryan-2.0/app/day/day.css`

- [ ] **Step 1: Search for obsolete hero implementation**

Run:

```bash
rg "hero-composited|hero-hotspot|hero-hotspots" sites/ryan-2.0/components/ryan/day-app.tsx sites/ryan-2.0/app/day/day.css
```

Expected: no matches.

- [ ] **Step 2: Check for whitespace errors**

Run:

```bash
git diff --check -- sites/ryan-2.0/components/ryan/day-app.tsx sites/ryan-2.0/app/day/day.css
```

Expected: no output and exit code 0.

- [ ] **Step 3: Run focused lint where possible**

Run:

```bash
npm run lint -w ryan-2.0 -- sites/ryan-2.0/components/ryan/day-app.tsx
```

Expected: either pass, or fail only on known pre-existing repo lint rules such as `@ts-nocheck` if still present. Do not broaden scope to unrelated files unless the failure points to the current edits.

- [ ] **Step 4: Run build check**

Run:

```bash
npm run build -w ryan-2.0
```

Expected: build completes or reaches the known pre-existing TypeScript setup issue. If it fails for a new `day-app.tsx` or `day.css` issue, fix that before continuing.

- [ ] **Step 5: Manual click verification**

Open:

```text
http://localhost:3002/day
```

Click:

```text
Services nav link
Fleet nav link
Experience nav link
About nav link
Contact nav link
Book Now nav CTA
Hero Book Now CTA
Hero View Services CTA
Hero booking-card Start Booking link
Final CTA Book Now
Final CTA phone link
```

Expected: all visible interactive elements navigate or open phone intent correctly.

- [ ] **Step 6: Commit implementation if requested**

Only commit if the user explicitly asks. If asked, stage only relevant files:

```bash
git add sites/ryan-2.0/components/ryan/day-app.tsx sites/ryan-2.0/app/day/day.css docs/superpowers/specs/2026-05-23-ryan-day-cinematic-booking-journey-design.md docs/superpowers/plans/2026-05-24-ryan-day-cinematic-booking-journey.md
git commit -m "$(cat <<'EOF'
Design Ryan day cinematic booking journey

EOF
)"
```

Expected: commit succeeds. Do not include `.superpowers/` or unrelated assets unless the user asks.

## Self-Review

- Spec coverage: Hero rebuild, clickability, cinematic motion/depth, existing page hierarchy, responsive behavior, reduced motion, and verification are all covered by Tasks 2-6.
- Placeholder scan: No unfinished markers or open-ended implementation placeholders are intended in this plan.
- Type consistency: New JSX uses existing `I.arrow`, `HERO_SERVICES`, existing button classes, and new CSS classes defined in the plan.
