# Ryan 2.0 Day Site — Cinematic Booking Journey

## Context

The `/day` experience for Ryan Motivates already has the core landing-page structure: hero, services, daytime luxury split, moments grid, fleet, trust strip, final CTA, and footer. Recent work stabilized image fit and restored the current static `day-hero.png` hero with clickable hotspots to avoid double-layered text.

The approved next visual direction is a **Cinematic Booking Journey**. The goal is to make the page feel more alive, guided, and conversion-focused while keeping the existing champagne/parchment luxury identity, BMW focus, and realistic lifestyle imagery.

This work should happen on the isolated branch:

`design/ryan-day-cinematic-booking-journey`

## Approved Direction

Rebuild the hero as live, clickable UI layers instead of relying on the baked `day-hero.png` composition. Then use bold cinematic motion and depth to guide visitors from first impression to booking.

The experience should feel like a premium chauffeur journey:

- A polished entrance into the brand.
- Clear service choices.
- A visual sense of route, arrival, and reliability.
- Stronger booking prompts without making the page feel aggressive.

## Goals

- Replace the composited hero/hotspot pattern with live nav, headline, CTA, service cards, and media layers.
- Preserve the day site's luxury visual language: warm parchment, champagne gold, refined serif display type, thin lines, and calm spacing.
- Add bold but controlled motion: staged hero entrance, layered depth, hover lift, scroll reveals, route-like transitions, and subtle image movement.
- Improve clickability and clarity by making all visible interactive elements real links/buttons.
- Keep the page responsive and readable on desktop, tablet, and mobile.
- Preserve the existing page sections and content hierarchy unless a small structure change directly supports the journey.

## Non-Goals

- Do not redesign the entire Ryan 2.0 brand system.
- Do not introduce a new routing framework, animation library, or heavy dependency unless the implementation plan proves it is necessary.
- Do not reintroduce the `homepage_hero.mp4` as the main hero unless explicitly approved later.
- Do not remove the realistic Pexels-style moments imagery direction.
- Do not make motion block page usability, keyboard navigation, or reduced-motion preferences.

## Experience Design

### Hero

The hero becomes a live layered composition:

- Fixed or overlay nav with visible, clickable links.
- Live headline and subcopy instead of text baked into an image.
- Primary booking CTA and secondary service CTA.
- A premium BMW/arrival visual layer using available day-site imagery.
- A service strip or booking preview card that feels integrated into the hero, not pasted on.

The hero should have a cinematic load sequence:

1. Warm background/light field appears.
2. Brand/nav settles in.
3. Headline and CTA rise into place.
4. Vehicle/media layer eases in.
5. Service/booking cards appear last.

If `day-hero.png` remains useful, it can inform composition, but it should not be the only visible UI layer because baked text created the double-layer issue.

### Journey Flow

The page should visually guide the user through a chauffeur booking story:

- **Services:** present the four service types as selectable journey starting points.
- **Daytime Luxury:** reinforce comfort, punctuality, privacy, and professionalism with a premium split layout.
- **Moments:** keep realistic people/lifestyle photos and add more intentional hover depth.
- **Fleet:** make the BMW section feel like the vehicle reveal moment.
- **Trust:** turn the feature strip into a confidence checkpoint.
- **Final CTA:** close with a clear booking/call action that feels like the destination of the journey.

### Motion and Depth

Motion should be bold enough to feel modern but restrained enough to stay luxury:

- Staggered section reveals using the existing `data-reveal` pattern where possible.
- Layered image/card movement on hover.
- Route-like line or progress motif used sparingly to connect the booking journey.
- Stronger card depth through shadows, borders, blur, and slight translate/scale.
- No fast, bouncy, or playful easing.
- Respect `prefers-reduced-motion` with static equivalents.

### Visual System

Keep the current day palette and refine around it:

- Warm paper backgrounds.
- Champagne/gold accents.
- Thin premium lines.
- Dark graphite text.
- Soft white/glass cards where depth helps hierarchy.

Photo treatment should stay consistent:

- Realistic moments imagery should feel human and warm.
- BMW/fleet imagery should feel crisp and premium.
- Avoid random cropping that hides important subjects.

## Implementation Shape

Expected files:

- `sites/ryan-2.0/components/ryan/day-app.tsx`
- `sites/ryan-2.0/app/day/day.css`

Likely component-level changes:

- Rework `Hero` to remove the `hero-composited` dependency and `hero-hotspots`.
- Keep `Nav`, `Services`, `Daytime`, `Moments`, `Fleet`, `Trust`, `FinalCTA`, and `Footer` as the main page sections.
- Add small presentational elements only when they support the journey: booking preview card, route line, progress accent, or service quick links.
- Keep content arrays simple and local to the component unless reuse becomes necessary.

Likely CSS changes:

- Add a live cinematic hero layout.
- Add motion/depth states to hero, service cards, moments, fleet panes, and final CTA.
- Add reduced-motion overrides.
- Tune responsive breakpoints so text and CTAs remain visible without relying on hotspots.

## Accessibility and Interaction

- Every visible nav item and CTA should be a real interactive element.
- Maintain clear focus states for keyboard users.
- Preserve meaningful alt text for photos.
- Avoid motion that changes reading order or hides content until JavaScript runs.
- Honor `prefers-reduced-motion`.

## Verification

Use focused checks during implementation:

1. Open `/day` locally and verify the hero has no double-layered text.
2. Confirm nav links, service links, booking CTA, and phone CTA are clickable.
3. Check desktop, tablet, and mobile widths.
4. Confirm all text remains visible over imagery.
5. Confirm reduced-motion mode does not depend on animation to reveal content.
6. Run focused lint/type checks for touched files where available.

## Open Assumptions

- The selected direction is option 3: **Cinematic Booking Journey**.
- The hero can be rebuilt as live UI layers instead of preserving `day-hero.png` exactly.
- The implementation should stay within the current Next.js/React/CSS setup.
- The current branch is the correct isolation branch for future work.
