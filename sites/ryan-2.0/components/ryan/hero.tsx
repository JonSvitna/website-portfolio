// @ts-nocheck
'use client';

import React from 'react';
import { motion } from 'framer-motion';

/* ========================================================
   Hero — photo-only with interactive sliding divider
   All text/nav/buttons are baked into the background image.
   Only the divider, hover tints, and click zones are HTML.
======================================================== */

function Hero({ onEnter }) {
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
      {/* Full-bleed photo — contains all visible text */}
      <div className="hero-photo" />

      {/* Subtle global overlay for depth */}
      <div className="hero-overlay" />

      {/* Day click + hover zone */}
      <div
        className="hero-half day"
        onClick={() => onEnter && onEnter('day')}
        role="button"
        aria-label="Enter the day experience"
        style={{ cursor: 'pointer' }}
      >
        <div className="half-tint" />
      </div>

      {/* Night click + hover zone */}
      <div
        className="hero-half night"
        onClick={() => onEnter && onEnter('night')}
        role="button"
        aria-label="Enter the night experience"
        style={{ cursor: 'pointer' }}
      >
        <div className="half-tint" />
      </div>

      {/* Sliding divider — the only interactive HTML element */}
      <div className="divider" />
      <div className="divider-mid"><span>OR</span></div>
    </motion.section>
  );
}

export { Hero };
