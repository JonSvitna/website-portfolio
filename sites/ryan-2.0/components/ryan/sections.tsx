// @ts-nocheck
'use client';

import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';

/* Supporting sections — Transition, Fleet, Experiences, Showcase, Process, Reserve, Footer */

/* ========================================================
   Transition band — "evening unfolding"
======================================================== */
function TransitionBand() {
  return (
    <section className="transition-band" data-screen-label="Transition Band">
      <div className="transition-content">
        <div className="tag">An Evening, Unfolding</div>
        <h2>
          A single car. <em>Two atmospheres.</em><br/>
          One unforgettable arrival.
        </h2>
        <p>
          From the first warm glance of morning at the Inner Harbor, through
          twilight at Federal Hill, into a candlelit Fells Point booth —
          your chauffeur stays one step ahead of the night.
        </p>
      </div>
    </section>
  );
}

/* ========================================================
   Fleet
======================================================== */
const FLEET = [
  {
    class: 'Executive · Day',
    model: 'The Saloon',
    desc: 'A discreet, glass-roofed flagship sedan. Hand-stitched leather, cooled rear seating, and a privacy partition for unbroken focus.',
    seats: '3',
    use: 'Executive · Airport',
    slot: 'fleet-1',
    placeholder: 'White luxury sedan · daylight'
  },
  {
    class: 'Signature · Night',
    model: 'The Coupé',
    desc: 'A two-tone GT for entrances that matter. Champagne service drawer, ambient cabin lighting, soundproofed for the journey home.',
    seats: '2',
    use: 'Date Night · Premiere',
    slot: 'fleet-2',
    placeholder: 'Black luxury coupé · night'
  },
  {
    class: 'Reserve · Group',
    model: 'The Estate',
    desc: 'A long-wheelbase SUV finished in obsidian. Four captain chairs, a full bar, and twin 4K screens — for the party that begins on the way.',
    seats: '6',
    use: 'Bachelor · VIP Tour',
    slot: 'fleet-3',
    placeholder: 'Black luxury SUV · estate'
  }
];

function Fleet() {
  return (
    <section id="fleet" className="section fleet" data-screen-label="Fleet">
      <div className="section-head">
        <div>
          <div className="num">Chapter 01 — The Fleet</div>
          <h2>Quiet machines for <em>loud occasions.</em></h2>
        </div>
        <div className="lede">
          Every vehicle is detailed before each engagement.
          Climate, scent, and music tuned to your itinerary before
          the rear door ever opens.
        </div>
      </div>

      <div className="fleet-grid">
        {FLEET.map((v) => (
          <article key={v.slot} className="fleet-card">
            <div className="fleet-image">
              <image-slot
                id={v.slot}
                shape="rect"
                placeholder={v.placeholder}
              ></image-slot>
            </div>
            <div className="fleet-body">
              <div className="class">{v.class}</div>
              <div className="model">{v.model}</div>
              <div className="desc">{v.desc}</div>
              <div className="spec-row">
                <div className="spec">
                  <div className="spec-label">Seats</div>
                  <div className="spec-val">{v.seats}</div>
                </div>
                <div className="spec">
                  <div className="spec-label">Best For</div>
                  <div className="spec-val">{v.use}</div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ========================================================
   Signature Experiences
======================================================== */
const EXPERIENCES = [
  {
    icon: 'I',
    title: 'Executive',
    em: 'Travel',
    desc: 'BWI, IAD, DCA, private terminals. Flight-tracked, weather-aware. Your seat is climate-conditioned to the minute of arrival.',
    tags: ['Airport', 'Same-Day', 'Hourly']
  },
  {
    icon: 'II',
    title: 'The Wedding',
    em: 'Day',
    desc: 'White-glove choreography from suite to ceremony. A second car for the bridal party. A single point of contact who never sleeps.',
    tags: ['Couples', 'Bridal', 'Multi-Car']
  },
  {
    icon: 'III',
    title: 'Date',
    em: 'Night',
    desc: 'A bottle waiting on ice. A route past the harbor lights. A discreet text the moment your table is ready.',
    tags: ['Dining', 'Theatre', 'Late-Night']
  },
  {
    icon: 'IV',
    title: 'VIP',
    em: 'Nightlife',
    desc: 'Reservation lists, doormen on first-name terms, an early extraction if the room turns. The night, choreographed.',
    tags: ['Clubs', 'Premieres', 'After-Hours']
  },
  {
    icon: 'V',
    title: 'Brunch',
    em: 'Circuit',
    desc: 'Three rooftops, two restaurants, one chilled bench seat between each. The kind of Sunday that ends well after dinner.',
    tags: ['Rooftops', 'Day-Party', 'Group']
  },
  {
    icon: 'VI',
    title: 'Corporate',
    em: 'Hospitality',
    desc: 'Hosting a client or a board? We hold the door for everyone. Branded itineraries, NDA-trained drivers, expense-friendly receipts.',
    tags: ['Boards', 'Clients', 'Roadshow']
  }
];

function SignatureExperiences() {
  return (
    <section id="experience" className="section signature" data-screen-label="Signature Experiences">
      <div className="section-head">
        <div>
          <div className="num">Chapter 02 — Signature Experiences</div>
          <h2>Six occasions. <em>One standard.</em></h2>
        </div>
        <div className="lede">
          Each engagement is built around a single host and a written
          itinerary. There is no upsell, no upcharge, no surprise.
        </div>
      </div>

      <div className="experiences">
        {EXPERIENCES.map((e, i) => (
          <article key={i} className="exp-cell">
            <div className="exp-icon">{e.icon}</div>
            <div className="exp-body">
              <h3>{e.title} <em>{e.em}</em></h3>
              <p>{e.desc}</p>
              <div className="tags">
                {e.tags.map((t, j) => (
                  <span key={j}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ========================================================
   Cinematic Showcase / Quote
======================================================== */
function Showcase() {
  return (
    <section className="showcase" data-screen-label="Showcase Quote">
      <div className="showcase-bg"></div>
      <image-slot
        id="showcase-bg"
        shape="rect"
        placeholder="Wide cinematic moment — driver opening rear door at a venue, optional"
      ></image-slot>

      <div className="showcase-text">
        <div className="quote">
          The first impression is not made at the door.<br/>
          It is made the moment the car arrives.
        </div>
        <div className="attrib">Ryan — Founder &amp; Principal Chauffeur</div>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          <span>Baltimore</span>
          <span>Washington D.C.</span>
          <span>Annapolis</span>
          <span>Philadelphia</span>
          <span>New York</span>
          <span>Discretion</span>
          <span>Timekeeping</span>
          <span>Baltimore</span>
          <span>Washington D.C.</span>
          <span>Annapolis</span>
          <span>Philadelphia</span>
          <span>New York</span>
          <span>Discretion</span>
          <span>Timekeeping</span>
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   Process
======================================================== */
const STEPS = [
  {
    n: 'I',
    title: 'The Brief',
    body: 'A short call, a written itinerary. We learn the night before so the day plays effortlessly.'
  },
  {
    n: 'II',
    title: 'The Curation',
    body: 'Vehicle paired to the occasion. Cabin scent, music, beverage — confirmed in writing.'
  },
  {
    n: 'III',
    title: 'The Arrival',
    body: 'Two-minute pre-positioning. The door opens before you reach for the handle.'
  },
  {
    n: 'IV',
    title: 'The Evening',
    body: 'One number. One driver. Real-time adjustments without a single explanation needed.'
  }
];

function Process() {
  return (
    <section className="section process" data-screen-label="Process">
      <div className="section-head">
        <div>
          <div className="num">Chapter 03 — How We Work</div>
          <h2>An evening in <em>four movements.</em></h2>
        </div>
        <div className="lede">
          We do not run a dispatch. We run a service —
          person to person, written down, rehearsed.
        </div>
      </div>

      <div className="process-steps">
        {STEPS.map((s, i) => (
          <div key={i} className="step">
            <div className="dot"></div>
            <div className="num">Movement {s.n}</div>
            <h4>{s.title}</h4>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ========================================================
   Reserve / Contact
======================================================== */
function Reserve() {
  const [exp, setExp] = React.useState('day');
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <section id="contact" className="reserve" data-screen-label="Reserve · Contact">
      <div className="reserve-inner">
        <div>
          <div className="num" style={{
            fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '0.5em',
            color: 'var(--champagne)', marginBottom: 24,
            display: 'inline-flex', alignItems: 'center', gap: 14
          }}>
            <span style={{ width: 36, height: 1, background: 'var(--champagne)' }}></span>
            Reserve
          </div>
          <h2>Begin the <em>evening.</em></h2>
          <p>
            For most engagements we confirm within the hour. For weddings,
            premieres, and multi-car days, please write us a fortnight ahead —
            we accept a small number of bookings each week.
          </p>

          <div className="reserve-contacts">
            <div className="row">
              <div className="k">Direct</div>
              <div className="v">+1 410 · 555 · 0188</div>
            </div>
            <div className="row">
              <div className="k">Concierge</div>
              <div className="v">ryan@ryanmotivates.co</div>
            </div>
            <div className="row">
              <div className="k">Garage</div>
              <div className="v">Federal Hill · Baltimore</div>
            </div>
            <div className="row">
              <div className="k">Hours</div>
              <div className="v">Discretion, 24 / 7</div>
            </div>
          </div>
        </div>

        <form
          className="reserve-form"
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
        >
          <div className="form-title">Request the Evening</div>

          <div className="experience-toggle">
            <button
              type="button"
              className={exp === 'day' ? 'active' : ''}
              onClick={() => setExp('day')}
            >Day Experience</button>
            <button
              type="button"
              className={exp === 'night' ? 'active' : ''}
              onClick={() => setExp('night')}
            >Night Experience</button>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Name</label>
              <input type="text" placeholder="Full name" required />
            </div>
            <div className="form-field">
              <label>Phone</label>
              <input type="tel" placeholder="+1" required />
            </div>
          </div>

          <div className="form-field">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Date</label>
              <input type="date" required />
            </div>
            <div className="form-field">
              <label>Occasion</label>
              <select required>
                <option>Executive Travel</option>
                <option>Wedding</option>
                <option>Date Night</option>
                <option>VIP Nightlife</option>
                <option>Brunch Circuit</option>
                <option>Corporate</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label>Notes for the Chauffeur</label>
            <input type="text" placeholder="Itinerary, music, beverage preferences…" />
          </div>

          <button type="submit" className="submit-btn">
            {submitted ? 'Request Received — We Will Reply Shortly' : 'Send Request'}
            {!submitted && <span style={{ fontSize: 14 }}>→</span>}
          </button>
        </form>
      </div>
    </section>
  );
}

/* ========================================================
   Footer
======================================================== */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div style={{ fontFamily: 'var(--serif-display)', fontSize: 26, color: 'var(--ivory)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Ryan Motivates
          </div>
          <div style={{ fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.4em', color: 'var(--champagne)', marginTop: 6, textTransform: 'uppercase' }}>
            Executive Chauffeur
          </div>
          <p className="blurb">
            Private, discreet, written-down. A two-car service for the
            mid-Atlantic — Baltimore born, by referral mostly.
          </p>
        </div>
        <div>
          <h5>Experience</h5>
          <ul>
            <li><a href="#fleet">The Fleet</a></li>
            <li><a href="#experience">Signature</a></li>
            <li><a href="#">Wedding Programme</a></li>
            <li><a href="#">Corporate Accounts</a></li>
          </ul>
        </div>
        <div>
          <h5>Routes</h5>
          <ul>
            <li><a href="#">Baltimore</a></li>
            <li><a href="#">Washington D.C.</a></li>
            <li><a href="#">Annapolis</a></li>
            <li><a href="#">Philadelphia</a></li>
          </ul>
        </div>
        <div>
          <h5>Office</h5>
          <ul>
            <li><a href="#">+1 410 · 555 · 0188</a></li>
            <li><a href="#">ryan@ryanmotivates.co</a></li>
            <li><a href="#">Federal Hill · Baltimore</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© MMXXVI — Ryan Motivates Executive Chauffeur. All discretion reserved.</div>
        <div style={{ display: 'flex', gap: 28 }}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Press</a>
        </div>
      </div>
    </footer>
  );
}

export {
  TransitionBand, Fleet, SignatureExperiences,
  Showcase, Process, Reserve, Footer,
};
