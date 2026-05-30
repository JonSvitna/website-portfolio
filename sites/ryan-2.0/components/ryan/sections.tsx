// @ts-nocheck
'use client';

import { SITE } from './site';
import React from 'react';

const PHONE_DISPLAY = '+1 410 · 555 · 0188';
const PHONE_HREF = 'tel:+14105550188';

function scrollToReserve(e) {
  e?.preventDefault();
  document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' });
}

/* ========================================================
   Meet Ryan J.
======================================================== */
function MeetRyan() {
  return (
    <section id="about" className="meet-ryan" data-screen-label="Meet Ryan J.">
      <div className="landing-inner meet-ryan-inner">
        <div className="meet-ryan-copy">
          <div className="landing-eyebrow">{SITE.driverTitle} · Baltimore</div>
          <h2 className="landing-h2">
            <span className="landing-h2-brand">{SITE.brand}</span>
            <em>Your driver, not a dispatch.</em>
          </h2>
          <p>
            One chauffeur, one BMW 750 — written itineraries and white-glove arrivals,
            day or night. Discreet, referral-based, always person to person.
          </p>
          <div className="meet-ryan-ctas">
            <button type="button" className="landing-btn-primary" onClick={scrollToReserve}>
              Book {SITE.driver}
            </button>
            <a className="landing-phone" href={PHONE_HREF}>
              Call · {PHONE_DISPLAY}
            </a>
          </div>
          <ul className="trust-chips" aria-label="Service highlights">
            <li>BMW 750</li>
            <li>Baltimore</li>
            <li>24 / 7</li>
          </ul>
        </div>
        <div className="meet-ryan-photo">
          <img
            src="/uploads/IMG_0420.JPG"
            alt={`${SITE.driver} — executive chauffeur portrait`}
          />
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   Lifestyle band
======================================================== */
function RyanLifestyle() {
  return (
    <section className="ryan-lifestyle" data-screen-label="Lifestyle Band">
      <div className="ryan-lifestyle-media">
        <img
          src="/uploads/hero_shot.png"
          alt={`${SITE.driver} with BMW 750 at Baltimore Inner Harbor`}
        />
      </div>
      <div className="ryan-lifestyle-panel">
        <blockquote className="ryan-lifestyle-quote">
          The first impression isn&apos;t at the door.
          It&apos;s when the car arrives.
        </blockquote>
        <div className="ryan-lifestyle-attrib">
          {SITE.driver} — {SITE.driverTitle}
        </div>
        <p className="ryan-lifestyle-tagline">
          Airport · weddings · date night · corporate — one driver, one standard.
        </p>
      </div>
    </section>
  );
}

/* ========================================================
   Reserve / Contact
======================================================== */
function Reserve() {
  const [submitted, setSubmitted] = React.useState(false);

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

        <form
          className="reserve-light-form"
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
        >
          <div className="form-title">Request a reservation</div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="reserve-name">Name</label>
              <input id="reserve-name" type="text" placeholder="Full name" required />
            </div>
            <div className="form-field">
              <label htmlFor="reserve-phone">Phone</label>
              <input id="reserve-phone" type="tel" placeholder="+1" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="reserve-date">Date</label>
              <input id="reserve-date" type="date" required />
            </div>
            <div className="form-field">
              <label htmlFor="reserve-occasion">Occasion</label>
              <select id="reserve-occasion" required defaultValue="">
                <option value="" disabled>Select occasion</option>
                <option>Airport</option>
                <option>Wedding</option>
                <option>Date Night</option>
                <option>Corporate</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="reserve-notes">Notes</label>
            <input id="reserve-notes" type="text" placeholder="Pickup, itinerary, preferences…" />
          </div>

          <button type="submit" className="landing-btn-primary landing-btn-full">
            {submitted ? 'Request Received — We Will Reply Shortly' : 'Request Reservation'}
            {!submitted && <span aria-hidden="true">→</span>}
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
    <footer className="footer-light">
      <div className="landing-inner footer-light-inner">
        <div className="footer-light-brand">
          <div className="footer-brand-name">{SITE.brand}</div>
          <div className="footer-brand-role">{SITE.driverTitle}</div>
          <p className="blurb">
            Private, discreet, written-down. Baltimore born — by referral mostly.
          </p>
        </div>
        <div className="footer-light-links">
          <div className="footer-link-group">
            <h5>Site</h5>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#reserve">Reserve</a></li>
            </ul>
          </div>
          <div className="footer-link-group">
            <h5>Experiences</h5>
            <ul>
              <li><a href="/day">Day Experience</a></li>
              <li><a href="/night">Night Experience</a></li>
            </ul>
          </div>
          <div className="footer-link-group">
            <h5>Contact</h5>
            <ul>
              <li><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></li>
              <li><a href="mailto:ryan@ryanmotivates.co">ryan@ryanmotivates.co</a></li>
              <li><span>Federal Hill · Baltimore</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="landing-inner footer-light-bottom">
        <div>© MMXXVI — {SITE.brand} · {SITE.driverTitle}. All discretion reserved.</div>
      </div>
    </footer>
  );
}

export { MeetRyan, RyanLifestyle, Reserve, Footer };
