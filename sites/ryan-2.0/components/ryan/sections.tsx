// @ts-nocheck
'use client';

import { SITE } from './site';
import React from 'react';

const PHONE_DISPLAY = '667 · 207 · 1472';
const PHONE_HREF = 'tel:+16672071472';

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
            <a
              className="landing-btn-primary"
              href="https://tr.ee/GTOHjorP2S"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book {SITE.driver}
            </a>
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
          src="/uploads/group_photo_bmw.png"
          alt={`${SITE.driver} — guests with BMW 750 at Baltimore waterfront`}
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
