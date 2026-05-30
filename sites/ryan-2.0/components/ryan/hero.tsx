// @ts-nocheck
'use client';

import React from 'react';
import { motion } from 'framer-motion';

function Hero({ onEnter, eyebrow }) {
  const heroRef = React.useRef(null);

  const onClick = (e) => {
    const r = heroRef.current?.getBoundingClientRect();
    if (!r) return;
    const relX = (e.clientX - r.left) / r.width;
    const relY = (e.clientY - r.top) / r.height;
    const stacked = window.matchMedia('(max-width: 720px)').matches;
    const side = stacked
      ? (relY < 0.5 ? 'day' : 'night')
      : (relX < 0.5 ? 'day' : 'night');
    onEnter?.(side);
  };

  return (
    <motion.section
      ref={heroRef}
      className="hero"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <img
        className="hero-video-bg"
        src="/uploads/blank_homepage.png"
        alt=""
      />

      <div className="hero-overlay" />

      <div className="hero-eyebrow">{eyebrow || 'Choose Your Experience'}</div>

      <div className="hero-side-text day">
        <div className="label-big">Day</div>
        <div className="label-small">Experience</div>
        <p className="copy">Executive travel. Airport packages. Weddings. Corporate luxury.</p>
        <button className="hero-cta" onClick={(e) => { e.stopPropagation(); onEnter?.('day'); }}>
          Enter Day <span className="arrow" />
        </button>
      </div>

      <div className="hero-side-text night">
        <div className="label-big">Night</div>
        <div className="label-small">Experience</div>
        <p className="copy">Nightlife. Special events. Date nights. VIP treatment.</p>
        <button className="hero-cta" onClick={(e) => { e.stopPropagation(); onEnter?.('night'); }}>
          Enter Night <span className="arrow" />
        </button>
      </div>

      <div className="divider" style={{ left: '50%' }} />
      <div className="divider-mid" style={{ left: '50%' }}>
        <span>OR</span>
      </div>
    </motion.section>
  );
}

export { Hero };
