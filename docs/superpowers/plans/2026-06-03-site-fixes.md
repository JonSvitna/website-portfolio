# Site Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix nav overlay headers on video sections, wire all booking CTAs to tr.ee, and unify phone number to 667-207-1472 across the site.

**Architecture:** Surgical edits to 7 files — no new files, no new abstractions. Phone fixes are find/replace. Nav fixes gate existing link groups behind scroll state. CTA fixes replace `href` values and swap the night-site form for a simple link.

**Tech Stack:** React/TSX (Next.js site), JSX (public static night site), Tailwind (night Next.js), BEM CSS classes (day + public night sites).

**Booking URL constant:** `https://tr.ee/GTOHjorP2S`

---

### Task 1: Fix phone numbers — day-app.tsx, RyanApp.tsx, sections.tsx

**Files:**
- Modify: `sites/ryan-2.0/components/ryan/day-app.tsx`
- Modify: `sites/ryan-2.0/components/ryan/RyanApp.tsx`
- Modify: `sites/ryan-2.0/components/ryan/sections.tsx`

- [ ] **Step 1: Fix day-app.tsx — replace wrong number in Hero (line ~199) and FinalCTA (line ~490)**

In `day-app.tsx`, find every occurrence of `(443) 973-3356` and `+14439733356` and replace:

```tsx
// Hero CTA row (~line 199):
<a className="btn-outline" href="tel:+16672071472">
  <span className="phone">{I.phone}</span>
  Call 667-207-1472
</a>

// FinalCTA (~line 490):
<a className="btn-outline" href="tel:+16672071472">
  <span className="phone">{I.phone}</span>
  Call 667-207-1472
</a>
```

- [ ] **Step 2: Fix RyanApp.tsx — replace placeholder in MobileBookBar (line ~114)**

```tsx
// MobileBookBar, line ~114:
<a className="mobile-book-bar-call" href="tel:+16672071472">
  Call
</a>
```

- [ ] **Step 3: Fix sections.tsx — update PHONE_DISPLAY and PHONE_HREF constants (lines 7-8)**

```tsx
const PHONE_DISPLAY = '667 · 207 · 1472';
const PHONE_HREF = 'tel:+16672071472';
```

- [ ] **Step 4: Commit**

```bash
git add sites/ryan-2.0/components/ryan/day-app.tsx \
        sites/ryan-2.0/components/ryan/RyanApp.tsx \
        sites/ryan-2.0/components/ryan/sections.tsx
git commit -m "fix: unify phone number to 667-207-1472 across day site"
```

---

### Task 2: Hide nav links over hero video — day-app.tsx

**Files:**
- Modify: `sites/ryan-2.0/components/ryan/day-app.tsx` — `Nav` component (~lines 125–144)

- [ ] **Step 1: Gate nav-links and nav-cta behind `pastHero`**

Replace the Nav return JSX so that `nav-links` and the CTA only render once the user has scrolled past the hero:

```tsx
return (
  <nav className={'nav day-nav' + (scrolled ? ' scrolled' : '') + (pastHero ? ' past-hero' : '')}>
    <BrandLockup href="#" variant="light" className="nav-brand" />

    {pastHero && (
      <div className="nav-links">
        <a className="nav-link active" href="#services">Services</a>
        <a className="nav-link" href="#fleet">Fleet</a>
        <a className="nav-link" href="#experience">Experience</a>
        <a className="nav-link" href="#about">About</a>
        <a className="nav-link" href="#contact">Contact</a>
      </div>
    )}

    <div className="nav-right">
      {pastHero && (
        <a className="nav-cta" href="https://tr.ee/GTOHjorP2S" target="_blank" rel="noopener noreferrer">
          Book Now
          <span className="arrow">{I.arrow}</span>
        </a>
      )}
    </div>
  </nav>
);
```

> Note: the nav-cta href is also updated to tr.ee here, since we're already touching this component for Task 5.

- [ ] **Step 2: Commit**

```bash
git add sites/ryan-2.0/components/ryan/day-app.tsx
git commit -m "fix: hide day nav links and CTA over hero video"
```

---

### Task 3: Hide nav links over hero video — night Next.js Nav.tsx

**Files:**
- Modify: `sites/ryan-2.0/components/ryan/night/Nav.tsx`

- [ ] **Step 1: Add scroll state and gate nav links + Reserve button**

The night Nav has no scroll tracking. Add a `scrolled` state (true once user scrolls 80px) and hide the nav links and Reserve button when at the top:

```tsx
'use client';

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SITE } from "./site";

const links = [
  { href: "#occasions", label: "Occasions" },
  { href: "#luxury", label: "Cabin" },
  { href: "#driver", label: SITE.driver },
  { href: "#reserve", label: "Reserve" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:px-8">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between rounded-full border border-white/10 bg-ink/70 px-5 py-3 shadow-[0_28px_80px_-24px_rgb(0_0_0/0.45)] backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <a href="/" className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist transition-colors hover:text-champagne">
            ← Back
          </a>
          <a href="#" className="group flex items-baseline gap-2">
            <span className="font-mono text-[11px] tracking-[0.28em] text-champagne">RJ</span>
            <span className="text-sm font-medium tracking-tight text-paper/90">{SITE.brand}</span>
          </a>
        </div>

        {scrolled && (
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist transition-colors hover:text-champagne"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-3">
          {scrolled && (
            <a
              href={`tel:${SITE.phoneTel}`}
              className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-mist sm:block"
            >
              {SITE.phoneDisplay}
            </a>
          )}
          {scrolled && (
            <a
              href="https://tr.ee/GTOHjorP2S"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-champagne/50 bg-champagne/10 px-4 py-2 text-xs font-medium text-champagne transition-transform active:scale-[0.98] hover:bg-champagne/20"
            >
              Reserve
            </a>
          )}
          <button
            type="button"
            className="rounded-full border border-white/15 px-3 py-2 text-xs text-paper md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-3 max-w-[1400px] rounded-2xl border border-white/10 bg-ink/95 p-4 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/90"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
```

> Note: Reserve button href is also updated to tr.ee here.

- [ ] **Step 2: Commit**

```bash
git add sites/ryan-2.0/components/ryan/night/Nav.tsx
git commit -m "fix: hide night nav links and Reserve button over hero video"
```

---

### Task 4: Hide nav links over hero video — public night site app.jsx

**Files:**
- Modify: `sites/ryan-2.0/public/night-site/app.jsx` — `Nav` component (lines 4–35)

- [ ] **Step 1: Gate nav-links and nav-cta behind `scrolled`**

```jsx
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => (e) => {
    e && e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={'nav ' + (scrolled ? 'scrolled' : '')}>
      <BrandLockup href="#hero" onClick={go('hero')} />

      {scrolled && (
        <div className="nav-links">
          <button className="nav-link" onClick={go('moments')}>Occasions</button>
          <button className="nav-link" onClick={go('interior')}>Cabin</button>
          <button className="nav-link" onClick={go('baltimore')}>Service Area</button>
          <button className="nav-link" onClick={go('book')}>Book</button>
        </div>
      )}

      {scrolled && (
        <button className="nav-cta" onClick={go('book')}>
          Book Your Night
        </button>
      )}
    </nav>
  );
};
```

- [ ] **Step 2: Commit**

```bash
git add sites/ryan-2.0/public/night-site/app.jsx
git commit -m "fix: hide public night nav links and CTA over hero video"
```

---

### Task 5: Wire booking CTAs to tr.ee — day-app.tsx

**Files:**
- Modify: `sites/ryan-2.0/components/ryan/day-app.tsx`

The nav-cta was already updated in Task 2. This task covers Hero CTA and FinalCTA "Book Now" buttons.

- [ ] **Step 1: Update Hero "Book Now" button (~line 195)**

```tsx
// Hero CTA row — replace href="#contact" with tr.ee
<a className="btn-fill" href="https://tr.ee/GTOHjorP2S" target="_blank" rel="noopener noreferrer">
  Book Now
  <span className="arrow">{I.arrow}</span>
</a>
```

- [ ] **Step 2: Update FinalCTA "Book Now" button (~line 486)**

```tsx
// FinalCTA actions — replace href="#contact" with tr.ee
<a className="btn-fill" href="https://tr.ee/GTOHjorP2S" target="_blank" rel="noopener noreferrer">
  Book Now
  <span className="arrow">{I.arrow}</span>
</a>
```

- [ ] **Step 3: Commit**

```bash
git add sites/ryan-2.0/components/ryan/day-app.tsx
git commit -m "fix: wire day site Book Now CTAs to tr.ee booking link"
```

---

### Task 6: Wire booking CTAs to tr.ee — RyanApp.tsx

**Files:**
- Modify: `sites/ryan-2.0/components/ryan/RyanApp.tsx`

- [ ] **Step 1: Update TopNav Reserve link (~line 67)**

```tsx
// TopNav — replace href="#reserve" with tr.ee
<a href="https://tr.ee/GTOHjorP2S" target="_blank" rel="noopener noreferrer" className="topnav-reserve">
  Reserve
</a>
```

Also update the nav-links Reserve anchor (~line 62):
```tsx
<a href="https://tr.ee/GTOHjorP2S" target="_blank" rel="noopener noreferrer">Reserve</a>
```

- [ ] **Step 2: Update MobileBookBar primary button (~line 111)**

Change the `<button>` to an `<a>` so it can open a new tab:

```tsx
<a
  className="mobile-book-bar-primary"
  href="https://tr.ee/GTOHjorP2S"
  target="_blank"
  rel="noopener noreferrer"
>
  Book {SITE.brand}
</a>
```

- [ ] **Step 3: Commit**

```bash
git add sites/ryan-2.0/components/ryan/RyanApp.tsx
git commit -m "fix: wire homepage Reserve and MobileBookBar CTAs to tr.ee"
```

---

### Task 7: Replace Reserve form with tr.ee CTA — sections.tsx

**Files:**
- Modify: `sites/ryan-2.0/components/ryan/sections.tsx`

- [ ] **Step 1: Update MeetRyan "Book" button to tr.ee link (~line 33)**

Replace the `<button onClick={scrollToReserve}>` with a direct tr.ee link:

```tsx
<a
  className="landing-btn-primary"
  href="https://tr.ee/GTOHjorP2S"
  target="_blank"
  rel="noopener noreferrer"
>
  Book {SITE.driver}
</a>
```

- [ ] **Step 2: Replace the Reserve form section with a tr.ee CTA block**

Remove the entire `<form>` and `useState` from `Reserve()`. Replace with:

```tsx
function Reserve() {
  return (
    <section id="reserve" className="reserve-light" data-screen-label="Reserve · Contact">
      <div className="landing-inner reserve-light-inner">
        <div className="reserve-light-copy">
          <div className="landing-eyebrow">Reserve</div>
          <h2 className="landing-h2 landing-h2-single">Book {SITE.driver}</h2>
          <p>
            For most engagements we confirm within the hour. Weddings and
            multi-car days need advance notice — we accept a small number of
            bookings each week.
          </p>
          <div className="reserve-light-contacts">
            <div className="row">
              <div className="k">Call or text</div>
              <a className="v" href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            </div>
            <div className="row">
              <div className="k">Email</div>
              <a className="v" href="mailto:ryan@ryanmotivates.co">ryan@ryanmotivates.co</a>
            </div>
            <div className="row">
              <div className="k">Based in</div>
              <div className="v">Federal Hill · Baltimore</div>
            </div>
          </div>
        </div>

        <div className="reserve-light-form">
          <div className="form-title">Ready to book?</div>
          <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem', opacity: 0.75 }}>
            Tap the button below to open the booking form — {SITE.driver} confirms personally, usually within the hour.
          </p>
          <a
            className="landing-btn-primary landing-btn-full"
            href="https://tr.ee/GTOHjorP2S"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book {SITE.driver} →
          </a>
        </div>
      </div>
    </section>
  );
}
```

Also remove the `useState` import for `submitted` since the form is gone — but keep the React import. Remove `scrollToReserve` from `MeetRyan` since it's no longer needed. Remove `scrollToReserve` function entirely if nothing else references it.

- [ ] **Step 3: Commit**

```bash
git add sites/ryan-2.0/components/ryan/sections.tsx
git commit -m "fix: replace landing reserve form with tr.ee booking CTA"
```

---

### Task 8: Replace ReserveForm with tr.ee CTA — night/ReserveForm.tsx

**Files:**
- Modify: `sites/ryan-2.0/components/ryan/night/ReserveForm.tsx`

- [ ] **Step 1: Replace the entire form card with a tr.ee CTA card**

Keep the left copy column intact. Replace the right glass card (`motion.div` with the form) with a simple card:

```tsx
'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SITE } from "./site";

export function ReserveForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="reserve" ref={ref} className="border-t border-ink/10 bg-paper py-16 text-ink md:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 md:grid-cols-2 md:gap-14 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-champagne-dim">Reserve</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:mt-4 md:text-4xl lg:text-5xl">
            Your comfort, your time — same thread from quote to curb.
          </h2>
          <p className="mt-5 max-w-[52ch] text-slate-600 md:mt-6">
            Call or text {SITE.phoneDisplay} for the fastest answer. {SITE.driver} confirms personally, usually within an hour for new requests.
          </p>
          <ul className="mt-10 space-y-4 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
            <li className="flex gap-3 border-l border-champagne/60 pl-4">01 — Pickup, timing, dress code for the cabin.</li>
            <li className="flex gap-3 border-l border-champagne/60 pl-4">02 — Direct line to {SITE.driver}; same driver end to end.</li>
            <li className="flex gap-3 border-l border-champagne/60 pl-4">03 — {SITE.vehicle} staged early; cabin reset between legs.</li>
          </ul>
          <p className="mt-10 text-sm text-slate-600">
            <span className="font-semibold text-ink">Coverage:</span> {SITE.coverage.join(" · ")}.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start justify-center rounded-[2rem] border border-slate-200/90 bg-white p-6 shadow-[0_30px_90px_-48px_rgba(15,23,42,0.45)] md:p-10"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-champagne-dim">Book now</p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight">
            Ready to reserve your ride?
          </h3>
          <p className="mt-4 text-sm text-slate-600">
            Tap below to open the booking form — {SITE.driver} confirms personally, usually within an hour.
          </p>
          <a
            href="https://tr.ee/GTOHjorP2S"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform active:scale-[0.98] hover:bg-slate-900"
          >
            Book Your Night →
          </a>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="mt-4 w-full text-center font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500 hover:text-ink transition-colors"
          >
            Or call · {SITE.phoneDisplay}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add sites/ryan-2.0/components/ryan/night/ReserveForm.tsx
git commit -m "fix: replace night reserve form with tr.ee booking CTA"
```

---

### Task 9: Replace reserve.jsx form + wire cta.jsx — public night site

**Files:**
- Modify: `sites/ryan-2.0/public/night-site/reserve.jsx`
- Modify: `sites/ryan-2.0/public/night-site/cta.jsx`

- [ ] **Step 1: Replace reserve.jsx form with tr.ee CTA**

Keep the `reserve-head` copy column intact. Replace the `<form className="book-card">` entirely:

```jsx
// reserve.jsx — full replacement
const Reserve = () => {
  return (
    <section className="reserve" id="reserve" data-screen-label="07 Reserve">
      <div className="reserve-grid">
        <div className="reserve-head">
          <div className="chapter-mark">
            <span className="rune">v</span>
            Chapter Five — Reserve
          </div>
          <h2 className="display">
            Your comfort, your time — <em>same thread to the curb.</em>
          </h2>
          <p className="lede">
            Call or text for the fastest reply. Or tap the button below — Ryan J. confirms personally, usually within an hour.
          </p>
          <div className="reserve-marks">
            <div className="reserve-mark">
              <span className="ix">01.</span>
              <span className="txt">Tell us where the evening begins and where it ends.</span>
            </div>
            <div className="reserve-mark">
              <span className="ix">02.</span>
              <span className="txt">Ryan J. calls or texts within the hour to confirm details.</span>
            </div>
            <div className="reserve-mark">
              <span className="ix">03.</span>
              <span className="txt">The sedan arrives six minutes early. Engine warm. Cabin dressed.</span>
            </div>
          </div>
        </div>

        <div className="book-card">
          <a className="book-call-primary" href="tel:+16672071472">Call or text · 667 · 207 · 1472</a>
          <div className="book-divider" aria-hidden="true">
            <span className="book-divider-line" />
            <span className="book-divider-label">Or book online</span>
            <span className="book-divider-line" />
          </div>
          <div className="book-eyebrow">The reservation</div>
          <h3>An evening, <em>composed.</em></h3>
          <p style={{ marginTop: 12, marginBottom: 32, opacity: 0.7, fontSize: 14, lineHeight: 1.6 }}>
            Tap below to open the booking form — Ryan J. confirms personally, usually within the hour.
          </p>
          <a
            className="book-submit"
            href="https://tr.ee/GTOHjorP2S"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, textDecoration: 'none' }}
          >
            <span>Book Your Night</span>
            <span className="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

window.Reserve = Reserve;
```

- [ ] **Step 2: Wire BookingCTA "Book Your Night" button in cta.jsx to tr.ee (~line 78)**

The phone link (`tel:+16672071472`) and SMS link stay unchanged. Only the "Book Your Night" `btn-primary` gets the tr.ee href:

```jsx
// BookingCTA actions (~line 77):
<div className="booking-cta-actions" data-reveal data-delay="3">
  <a href="https://tr.ee/GTOHjorP2S" target="_blank" rel="noopener noreferrer" className="btn-primary">Book Your Night</a>
  <a href="sms:+16672071472" className="btn-ghost">Text us instead</a>
</div>
```

- [ ] **Step 3: Commit**

```bash
git add sites/ryan-2.0/public/night-site/reserve.jsx \
        sites/ryan-2.0/public/night-site/cta.jsx
git commit -m "fix: replace public night reserve form with tr.ee CTA, wire BookingCTA"
```

---

## Self-Review Checklist

- **Nav overlay — day:** Task 2 ✓ gates `nav-links` + `nav-cta` behind `pastHero`
- **Nav overlay — night Next.js:** Task 3 ✓ adds scroll state, gates links + Reserve button
- **Nav overlay — night public:** Task 4 ✓ gates `nav-links` + `nav-cta` behind `scrolled`
- **Phone — day-app.tsx:** Task 1 ✓ replaces `(443) 973-3356` / `+14439733356`
- **Phone — RyanApp.tsx:** Task 1 ✓ replaces `+14105550188`
- **Phone — sections.tsx:** Task 1 ✓ replaces constants
- **CTA — day-app.tsx:** Tasks 2+5 ✓ nav-cta + Hero + FinalCTA → tr.ee
- **CTA — RyanApp.tsx:** Task 6 ✓ TopNav Reserve + MobileBookBar → tr.ee
- **CTA — sections.tsx:** Task 7 ✓ MeetRyan button + Reserve form → tr.ee
- **CTA — ReserveForm.tsx:** Task 8 ✓ form replaced with tr.ee card
- **CTA — reserve.jsx:** Task 9 ✓ form replaced with tr.ee CTA
- **CTA — cta.jsx:** Task 9 ✓ BookingCTA btn-primary → tr.ee
- **tel: links untouched:** All call/text links kept as-is ✓
