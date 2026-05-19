// @ts-nocheck
'use client';

import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';


/* ================================================================
   ICONS — Phosphor-style line icons (inline SVG)
   ================================================================ */
const I = {
  airplane: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1L15 22v-1.5L13 19v-5.5l8 2.5z"/>
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="1"/>
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>
      <path d="M3 13h18"/>
    </svg>
  ),
  ring: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="15" r="6"/>
      <path d="M9 9l3-5 3 5"/>
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="13" r="8"/>
      <path d="M12 9v4l2.5 2"/>
      <path d="M9 3h6"/>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"/>
      <path d="M9 12l2.2 2.2L15 10.5"/>
    </svg>
  ),
  user: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>
    </svg>
  ),
  car: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 13l2-5a2 2 0 0 1 1.9-1.4h10.2A2 2 0 0 1 19 8l2 5"/>
      <rect x="2" y="13" width="20" height="6" rx="1"/>
      <circle cx="7" cy="19" r="1.5"/>
      <circle cx="17" cy="19" r="1.5"/>
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="10" rx="1"/>
      <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/>
      <circle cx="12" cy="10" r="2.5"/>
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
      <path d="M5 12h14"/>
      <path d="M13 6l6 6-6 6"/>
    </svg>
  ),
  ig: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="4"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/>
    </svg>
  ),
  fb: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3h-2a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h2V3z"/>
    </svg>
  ),
  yelp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v9"/>
      <path d="M5 9l5 3"/>
      <path d="M5 17l5-2"/>
      <path d="M19 13l-5 2"/>
      <path d="M14 19v-4"/>
    </svg>
  ),
};

/* ================================================================
   LOGO — R wordmark glyph (parallel stripes through an R)
   ================================================================ */
function Logo({ size = 46 }) {
  return (
    <span className="nav-logo" style={{ width: size, height: size }}>
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="square">
        {/* Three horizontal stripes (champagne) */}
        <g stroke="var(--accent)" strokeWidth="1.3">
          <line x1="2" y1="14" x2="46" y2="14" />
          <line x1="2" y1="24" x2="46" y2="24" />
          <line x1="2" y1="34" x2="46" y2="34" />
        </g>
        {/* The R — graphite */}
        <g stroke="var(--fg-1)" strokeWidth="2.2" fill="none" strokeLinejoin="miter">
          <path d="M11 8 L11 40" />
          <path d="M11 8 L26 8 Q34 8 34 16 Q34 24 26 24 L11 24" />
          <path d="M22 24 L34 40" />
        </g>
      </svg>
    </span>
  );
}

/* ================================================================
   NAV
   ================================================================ */
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
      <a className="nav-brand" href="#">
        <Logo />
        <span className="nav-brand-text">
          <span className="nav-brand-name">Ryan Motivates</span>
          <span className="nav-brand-role">Executive Chauffeur</span>
        </span>
      </a>

      <div className="nav-links">
        <a className="nav-link active" href="#services">Services</a>
        <a className="nav-link" href="#fleet">Fleet</a>
        <a className="nav-link" href="#experience">Experience</a>
        <a className="nav-link" href="#about">About</a>
        <a className="nav-link" href="#contact">Contact</a>
      </div>

      <div className="nav-right">
        <a className="nav-cta" href="#contact">
          Book Now
          <span className="arrow">{I.arrow}</span>
        </a>
      </div>
    </nav>
  );
}

/* ================================================================
   HERO
   ================================================================ */
const HERO_SERVICES = [
  { icon: I.airplane,  name: 'Airport Transfers',   copy: 'On-time arrivals. Stress-free travel.' },
  { icon: I.briefcase, name: 'Corporate Travel',    copy: 'Professional service for business leaders.' },
  { icon: I.ring,      name: 'Weddings & Events',   copy: 'Luxury transportation for your special day.' },
  { icon: I.clock,     name: 'Hourly Chauffeur',    copy: 'Book by the hour. Your time, your way.' },
];

function Hero() {
  return (
    <section className="hero" data-screen-label="Hero — Arrive in Excellence">
      <div className="hero-canvas">
        <div className="hero-bg">
          <img
            src="/day-system/assets/editorial-waterfront.jpg"
            alt="Baltimore Inner Harbor — morning arrival"
          />
        </div>
        <div className="hero-wash" />
        <div className="hero-wash-top" />
        <div className="hero-wash-bottom" />

        <div className="hero-body">
          <div className="hero-content">
            <div className="hero-eyebrow">Executive Travel. Elevated.</div>
            <h1 className="hero-hl">
              <span className="line">Arrive in</span>
              <span className="line">Excellence.</span>
            </h1>
            <p className="hero-sub">
              Professional chauffeur service in Baltimore and beyond.
              Experience luxury, comfort, and punctuality &mdash; every time.
            </p>
            <div className="hero-cta-row">
              <a className="btn-fill" href="#services">
                Our Services
                <span className="arrow">{I.arrow}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-scroll-cue">
          <span className="dot"></span>
          <span>Scroll to Explore</span>
        </div>

        <div className="hero-pagination">
          <button className="pg" aria-label="Previous">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
          </button>
          <button className="pg active" aria-label="Next">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
        </div>

        <div className="hero-strip">
          {HERO_SERVICES.map((s) => (
            <div className="item" key={s.name}>
              <div className="item-icon">{s.icon}</div>
              <div>
                <div className="item-name">{s.name}</div>
                <div className="item-copy">{s.copy}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   SERVICES GRID
   ================================================================ */
const SERVICES = [
  {
    icon: I.airplane,
    name: 'Airport Transfers',
    copy: 'On-time arrivals, stress-free travel. We monitor your flight so you don\u2019t have to.'
  },
  {
    icon: I.briefcase,
    name: 'Corporate Travel',
    copy: 'Executive transportation for business professionals who value time.'
  },
  {
    icon: I.ring,
    name: 'Weddings & Events',
    copy: 'Arrive in style and make every moment of your special day unforgettable.'
  },
  {
    icon: I.clock,
    name: 'Hourly Chauffeur',
    copy: 'Book by the hour for meetings, errands, city tours, and flexible travel.'
  }
];

function Services() {
  return (
    <section id="services" className="section services" data-screen-label="Services">
      <div className="section-inner">
        <div className="section-head" data-reveal>
          <div className="section-eyebrow">Our Services</div>
          <h2 className="section-title">
            Exceptional Service for <em>Every Occasion.</em>
          </h2>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <article className="service-card" key={s.name} data-reveal data-delay={i + 1}>
              <div className="icon">{s.icon}</div>
              <div className="name">{s.name}</div>
              <p className="copy">{s.copy}</p>
              <a className="learn" href="#">
                Learn More
                <span className="arrow">{I.arrow}</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   DAYTIME LUXURY split
   ================================================================ */
const DAYTIME_FEATURES = [
  { icon: I.clock,  name: 'Punctual',     desc: 'Always on time, every time.' },
  { icon: I.car,    name: 'Comfortable',  desc: 'Luxury vehicles designed for you.' },
  { icon: I.lock,   name: 'Private',      desc: 'Discreet, quiet, and respectful.' },
  { icon: I.user,   name: 'Professional', desc: 'Chauffeurs who care about you.' }
];

function Daytime() {
  return (
    <section className="daytime" data-screen-label="Daytime Luxury">
      <div className="daytime-image">
        <img
          src="/day-system/assets/editorial-water-club.jpg"
          alt="Luxury hotel porte cochère — Four Seasons curbside arrival"
        />
      </div>
      <div className="daytime-text">
        <div className="daytime-eyebrow" data-reveal>The Ryan Motivates Experience</div>
        <h2 className="daytime-hl" data-reveal data-delay="1">
          Daytime Luxury,
          <em>Without the Stress.</em>
        </h2>
        <p className="daytime-copy" data-reveal data-delay="2">
          We combine elegance, punctuality, and professionalism to deliver a
          first-class experience every time you ride.
        </p>
        <div className="daytime-divider" data-reveal data-delay="2"></div>
        <div className="daytime-features">
          {DAYTIME_FEATURES.map((f, i) => (
            <div className="daytime-feature" key={f.name} data-reveal data-delay={i + 1}>
              <div className="icon">{f.icon}</div>
              <div className="name">{f.name}</div>
              <div className="desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   MOMENTS — image grid
   ================================================================ */
const MOMENTS = [
  {
    label: 'Airport Transfers',
    sub: 'BWI · IAD · DCA',
    img: '/day-system/assets/editorial-airport.jpg',
  },
  {
    label: 'Corporate Meetings',
    sub: 'Inner Harbor',
    img: 'https://images.pexels.com/photos/7433840/pexels-photo-7433840.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
  },
  {
    label: 'Wedding Arrivals',
    sub: 'Outdoor · Garden',
    img: 'https://images.pexels.com/photos/14703685/pexels-photo-14703685.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
  },
  {
    label: 'Brunch Circuits',
    sub: 'Federal Hill',
    img: 'https://images.pexels.com/photos/8922195/pexels-photo-8922195.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
  },
  {
    label: 'Family Celebrations',
    sub: 'Estate · Day',
    img: 'https://images.pexels.com/photos/36708862/pexels-photo-36708862.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
  },
  {
    label: 'Personal Shopping',
    sub: 'Harbor East',
    img: 'https://images.pexels.com/photos/5424937/pexels-photo-5424937.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
  },
  {
    label: 'Hotel Concierge',
    sub: 'Four Seasons',
    img: 'https://images.pexels.com/photos/6474532/pexels-photo-6474532.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
  },
  {
    label: 'Promenade · Day Out',
    sub: 'Pier · 14:00',
    img: 'https://images.pexels.com/photos/21724808/pexels-photo-21724808.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
  },
];

function Moments() {
  return (
    <section id="experience" className="section moments" data-screen-label="Every Moment That Matters">
      <div className="section-inner">
        <div className="section-head" data-reveal>
          <div className="section-eyebrow">Perfect For</div>
          <h2 className="section-title">
            Every Moment That <em>Matters.</em>
          </h2>
        </div>

        <div className="moments-grid">
          {MOMENTS.map((m, i) => (
            <a className="moment" href="#" key={m.label + i} data-reveal data-delay={(i % 4) + 1}>
              <img src={m.img} alt={m.label} loading="lazy" />
              <div className="moment-overlay" />
              <div className="scene-caption">
                <span className="scene-label">{m.label}</span>
                <span className="scene-sub">{m.sub}</span>
              </div>
              <span className="moment-arrow">{I.arrow}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   FLEET
   ================================================================ */
function Fleet() {
  const features = [
    'Premium Leather Interior',
    'Climate-Controlled Comfort',
    'Spacious Rear Seating',
    'Smooth, Executive Ride',
    'Impeccably Maintained'
  ];
  return (
    <section id="fleet" className="fleet" data-screen-label="Fleet — 2023 BMW 750i">
      <div className="fleet-text">
        <div className="fleet-eyebrow" data-reveal>Our Fleet</div>
        <h2 className="fleet-title" data-reveal data-delay="1">
          2023 BMW <em>750i.</em>
        </h2>
        <p className="fleet-copy" data-reveal data-delay="2">
          A perfect blend of power, elegance, and comfort. Experience a smooth,
          quiet ride in a vehicle that represents excellence.
        </p>
        <ul className="fleet-features" data-reveal data-delay="2">
          {features.map((f) => (
            <li className="fleet-feature" key={f}>{f}</li>
          ))}
        </ul>
        <div data-reveal data-delay="3">
          <a className="btn-fill" href="#contact">
            View Fleet
            <span className="arrow">{I.arrow}</span>
          </a>
        </div>
      </div>

      <div className="fleet-images">
        <div className="pane">
          <img src="/day-system/assets/bmw-exterior.png" alt="2023 BMW 750i exterior — Alpine White" />
        </div>
        <div className="pane">
          <img src="/day-system/assets/cabin-rear.png" alt="2023 BMW 750i cabin — Cognac Red leather" />
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   TRUST
   ================================================================ */
const TRUST = [
  { icon: I.shield, name: 'Always On Time',         desc: 'Your time is our priority.' },
  { icon: I.user,   name: 'Professional Chauffeurs', desc: 'Experienced, trained, and courteous.' },
  { icon: I.car,    name: 'Clean & Luxury Vehicles', desc: 'Immaculate vehicles for your comfort.' },
  { icon: I.lock,   name: 'Private & Discreet',      desc: 'Your privacy is respected.' },
  { icon: I.pin,    name: 'Baltimore & Beyond',      desc: 'Serving Baltimore and surrounding areas.' }
];

function Trust() {
  return (
    <section id="about" className="trust" data-screen-label="Trust Strip">
      <div className="trust-eyebrow" data-reveal>Trusted. Reliable. Professional.</div>
      <div className="trust-row">
        {TRUST.map((t, i) => (
          <div className="trust-feature" key={t.name} data-reveal data-delay={i + 1}>
            <div className="icon">{t.icon}</div>
            <div className="name">{t.name}</div>
            <div className="desc">{t.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================================================================
   FINAL CTA
   ================================================================ */
function FinalCTA() {
  return (
    <section id="contact" className="final-cta" data-screen-label="Final CTA">
      <div className="final-cta-text">
        <h2 className="final-cta-hl" data-reveal>
          Make the Day
          <em>Feel First Class.</em>
        </h2>
        <p className="final-cta-copy" data-reveal data-delay="1">
          Whether it&rsquo;s business, travel, brunch, or a special event,
          Ryan Motivates brings executive-level service to every ride.
        </p>
        <div className="final-cta-actions" data-reveal data-delay="2">
          <a className="btn-fill" href="#">
            Book Now
            <span className="arrow">{I.arrow}</span>
          </a>
          <a className="btn-outline" href="tel:+14439733356">
            Call (443) 973&middot;3356
          </a>
        </div>
      </div>
      <div className="final-cta-image">
        <img
          src="https://images.pexels.com/photos/30093493/pexels-photo-30093493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Baltimore waterfront skyline at golden hour"
        />
      </div>
    </section>
  );
}

/* ================================================================
   FOOTER
   ================================================================ */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#">
          <Logo size={36} />
          <span className="nav-brand-text">
            <span className="nav-brand-name">Ryan Motivates</span>
            <span className="nav-brand-role">Executive Chauffeur</span>
          </span>
        </a>

        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#fleet">Fleet</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a href="#" aria-label="Instagram">{I.ig}</a>
          <a href="#" aria-label="Facebook">{I.fb}</a>
          <a href="#" aria-label="Yelp">{I.yelp}</a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; MMXXVI &mdash; Ryan Motivates Executive Chauffeur. All rights reserved.
      </div>
    </footer>
  );
}

/* ================================================================
   APP
   ================================================================ */
function DayExperience() {
  // Scroll-reveal animation: pre-hide elements via JS only (so the page
  // is visible if JS fails). Then remove pre-reveal class on intersect.
  React.useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    els.forEach((el) => el.classList.add('pre-reveal'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.remove('pre-reveal');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => io.observe(el));
    // Safety: if IO never fires (e.g. headless/print contexts), force-reveal
    // everything after a short wait so the page is never stuck invisible.
    const safety = setTimeout(() => {
      document.querySelectorAll('.pre-reveal').forEach((el) => el.classList.remove('pre-reveal'));
    }, 4000);
    return () => { io.disconnect(); clearTimeout(safety); };
  }, []);

  return (
    <>
      <div className="ribbon" />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Daytime />
        <Moments />
        <Fleet />
        <Trust />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default function DayApp() { return <DayExperience />; }
