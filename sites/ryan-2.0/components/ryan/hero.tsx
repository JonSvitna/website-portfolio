// @ts-nocheck
'use client';

import React from 'react';
import { motion } from 'framer-motion';

/* ========================================================
   Hero — "Choose Your Experience" with photo background
======================================================== */

function Hero({ onEnter, eyebrow }) {
  const [hover, setHover] = React.useState(null); // 'day' | 'night' | null
  const heroRef = React.useRef(null);

  const onMove = (e) => {
    const r = heroRef.current?.getBoundingClientRect();
    if (!r) return;
    const x = ((e.clientX - r.left) / r.width) * 100;
    if (x < 47) setHover('day');
    else if (x > 53) setHover('night');
    else setHover(null);
  };

  return (
    <motion.section
      ref={heroRef}
      className="hero"
      data-hover={hover || ''}
      onMouseMove={onMove}
      onMouseLeave={() => setHover(null)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Full-bleed photo */}
      <div className="hero-photo" />

      {/* Global soft overlay for text readability */}
      <div className="hero-overlay" />

      {/* Day hover zone */}
      <div className="hero-half day">
        <div className="half-tint" />
      </div>

      {/* Night hover zone */}
      <div className="hero-half night">
        <div className="half-tint" />
      </div>

      {/* Center divider */}
      <div className="divider" />
      <div className="divider-mid"><span>OR</span></div>

      {/* Eyebrow */}
      <div className="hero-eyebrow">{eyebrow || 'Choose Your Experience'}</div>

      {/* DAY side */}
      <div className="hero-side-text day">
        <div className="label-big">Day</div>
        <div className="label-small">Experience</div>
        <div className="copy">
          Executive travel. Airport pickups.<br />Weddings. Corporate luxury.
        </div>
        <button
          className="hero-cta"
          onClick={() => onEnter && onEnter('day')}
          aria-label="Enter the day experience"
        >
          Enter Day Experience
          <span className="arrow" />
        </button>
      </div>

      {/* NIGHT side */}
      <div className="hero-side-text night">
        <div className="label-big">Night</div>
        <div className="label-small">Experience</div>
        <div className="copy">
          Nightlife. Special events. Date nights.<br />VIP treatment.
        </div>
        <button
          className="hero-cta"
          onClick={() => onEnter && onEnter('night')}
          aria-label="Enter the night experience"
        >
          Enter Night Experience
          <span className="arrow" />
        </button>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue">
        <span>Scroll to Explore</span>
        <div className="line" />
      </div>
    </motion.section>
  );
}

export { Hero };
