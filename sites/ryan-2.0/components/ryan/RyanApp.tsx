// @ts-nocheck
'use client';

import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Hero } from './hero';
import {
  TransitionBand, Fleet, SignatureExperiences,
  Showcase, Process, Reserve, Footer,
} from './sections';
import {
  useTweaks, TweaksPanel, TweakSection, TweakRow,
  TweakSlider, TweakToggle, TweakRadio, TweakSelect,
  TweakText, TweakColor,
} from './tweaks-panel';

/* Main App composition */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "serifFamily": "Cormorant Garamond",
  "displayFamily": "Italiana",
  "sansFamily": "Manrope",
  "accent": "#c9a96a",
  "showCursor": true,
  "dividerStyle": "glow",
  "heroEyebrow": "Choose Your Experience"
}/*EDITMODE-END*/;

const SERIF_OPTIONS = ['Cormorant Garamond', 'Marcellus', 'Italiana', 'EB Garamond'];
const DISPLAY_OPTIONS = ['Italiana', 'Cormorant Garamond', 'Marcellus'];
const SANS_OPTIONS = ['Manrope', 'Inter', 'Outfit'];
const ACCENT_OPTIONS = ['#c9a96a', '#d8b97b', '#b89668', '#a47a3e', '#e3cda1'];
const DIVIDER_OPTIONS = ['glow', 'hairline', 'beam'];

/* ========================================================
   Top Navigation — hidden over the hero (nav is in the image),
   fades in once the user scrolls past the first viewport
======================================================== */
function TopNav() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={'topnav' + (visible ? ' nav-visible' : '')}>
      <a href="#" className="brand">
        <div className="brand-mark">R</div>
        <div className="brand-text">
          <div className="name">Ryan Motivates</div>
          <div className="role">Executive Chauffeur</div>
        </div>
      </a>
      <nav className="nav-links">
        <a href="#services">Services</a>
        <a href="#fleet">Fleet</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

/* ========================================================
   Custom cursor — pointer reactive
======================================================== */
function CustomCursor({ enabled }) {
  const ringRef = React.useRef(null);
  const dotRef = React.useRef(null);
  const [hover, setHover] = React.useState(false);

  React.useEffect(() => {
    if (!enabled) return;
    let mx = 0, my = 0, rx = 0, ry = 0, dx = 0, dy = 0;
    let raf;
    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    const tick = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      dx += (mx - dx) * 0.45;
      dy += (my - dy) * 0.45;
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px';
        ringRef.current.style.top = ry + 'px';
      }
      if (dotRef.current) {
        dotRef.current.style.left = dx + 'px';
        dotRef.current.style.top = dy + 'px';
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);

    const onOver = (e) => {
      const t = e.target;
      if (!t || !t.closest) return;
      setHover(!!t.closest('button, a, .fleet-card, .exp-cell, image-slot'));
    };
    document.addEventListener('mouseover', onOver);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className={'cursor' + (hover ? ' expand' : '')}></div>
      <div ref={dotRef} className="cursor-dot"></div>
    </>
  );
}

/* ========================================================
   Tweaks panel
======================================================== */
function Tweaks({ t, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Typography">
        <TweakSelect
          label="Body Serif"
          value={t.serifFamily}
          onChange={(v) => setTweak('serifFamily', v)}
          options={SERIF_OPTIONS}
        />
        <TweakSelect
          label="Display Serif"
          value={t.displayFamily}
          onChange={(v) => setTweak('displayFamily', v)}
          options={DISPLAY_OPTIONS}
        />
        <TweakSelect
          label="Sans"
          value={t.sansFamily}
          onChange={(v) => setTweak('sansFamily', v)}
          options={SANS_OPTIONS}
        />
      </TweakSection>

      <TweakSection label="Atmosphere">
        <TweakColor
          label="Accent"
          value={t.accent}
          onChange={(v) => setTweak('accent', v)}
          options={ACCENT_OPTIONS}
        />
        <TweakRadio
          label="Divider"
          value={t.dividerStyle}
          onChange={(v) => setTweak('dividerStyle', v)}
          options={DIVIDER_OPTIONS}
        />
      </TweakSection>

      <TweakSection label="Copy">
        <TweakText
          label="Hero Eyebrow"
          value={t.heroEyebrow}
          onChange={(v) => setTweak('heroEyebrow', v)}
        />
      </TweakSection>

      <TweakSection label="Interface">
        <TweakToggle
          label="Custom Cursor"
          value={t.showCursor}
          onChange={(v) => setTweak('showCursor', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

/* ========================================================
   App
======================================================== */
export default function RyanApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [loaded, setLoaded] = React.useState(false);
  const [enterTheme, setEnterTheme] = React.useState(null);

  // Apply tweak vars to :root
  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--serif', `'${t.serifFamily}', serif`);
    r.style.setProperty('--serif-display', `'${t.displayFamily}', serif`);
    r.style.setProperty('--sans', `'${t.sansFamily}', system-ui, sans-serif`);
    r.style.setProperty('--champagne', t.accent);
  }, [t.serifFamily, t.displayFamily, t.sansFamily, t.accent]);

  // Divider style
  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-divider', t.dividerStyle);
  }, [t.dividerStyle]);

  // Preload removal
  React.useEffect(() => {
    const id = setTimeout(() => setLoaded(true), 1600);
    return () => clearTimeout(id);
  }, []);

  // After "enter" CTA — gently scroll into the page
  const router = useRouter();
  const onEnter = (which) => {
    setEnterTheme(which);
    if (which === 'day') {
      router.push('/day');
      return;
    }
    const el = document.querySelector('.transition-band');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <div className={'preload' + (loaded ? ' gone' : '')}>
        <div className="preload-mark">Ryan</div>
      </div>

      <CustomCursor enabled={!!t.showCursor} />

      <TopNav />

      <main>
        <Hero
          onEnter={onEnter}
          theme={enterTheme}
          eyebrow={t.heroEyebrow}
          fonts={{ serif: t.serifFamily, display: t.displayFamily, sans: t.sansFamily }}
        />

        <TransitionBand />
        <Fleet />
        <SignatureExperiences />
        <Showcase />
        <Process />
        <Reserve />
        <Footer />
      </main>

      <Tweaks t={t} setTweak={setTweak} />
    </>
  );
}
