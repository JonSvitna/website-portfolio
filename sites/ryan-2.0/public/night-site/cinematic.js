/* cinematic.js
   BMW executive · luxury automotive cinematic experience
   HyperFrames principle: CSS owns final state · GSAP animates the journey in
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  // ── Utilities ──────────────────────────────────────────────────────────────
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  function init() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('[cinematic] GSAP / ScrollTrigger not loaded');
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    // ── Hero entrance timeline ─────────────────────────────────────────────
    // Layout Before Animation: every element is already at its final CSS
    // position. GSAP animates FROM the values below TO the CSS final state.
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out', force3D: true },
      delay: 0.1,
    });

    // Car: slow dolly-push → scale 1.06 → 1, rise 30px → 0
    tl.from('.hero-vehicle', {
      scale: 1.065,
      y: 28,
      duration: 3.4,
      ease: 'power2.inOut',
    });

    // Atmospheric layers come in behind the car
    tl.from('.hero-rain', { opacity: 0, duration: 2.0 }, 0.0);
    tl.from('.hero-fog',  { opacity: 0, duration: 3.0 }, 0.3);
    tl.from('.hero-pavement', { opacity: 0, duration: 2.4 }, 0.2);

    // Eyebrow line
    tl.from('.hero-eyebrow', { opacity: 0, y: 16, duration: 1.1 }, 0.65);

    // Headline — two lines stagger
    tl.from('.hero-display .line-1', {
      opacity: 0, y: 52, duration: 1.4, ease: 'power3.out',
    }, 0.95);
    tl.from('.hero-display .line-2', {
      opacity: 0, y: 52, duration: 1.3, ease: 'power3.out',
    }, 1.25);

    // Body copy
    tl.from('.hero-tag',     { opacity: 0, y: 22, duration: 1.0 }, 1.65);
    tl.from('.hero-tag-sub', { opacity: 0, y: 14, duration: 0.8 }, 1.90);

    // Meta row — stagger
    tl.from('.hero-meta-item', {
      opacity: 0, y: 16, duration: 0.75, stagger: 0.13,
    }, 2.05);

    // CTAs
    tl.from('.hero-cta-row > *', {
      opacity: 0, y: 14, duration: 0.72, stagger: 0.14,
    }, 2.35);

    // Scroll indicator
    tl.from('.hero-scroll', { opacity: 0, duration: 0.9 }, 2.85);


    // ── Hero scroll parallax ───────────────────────────────────────────────
    // Car drifts up slightly — creates depth as you enter the next section
    gsap.to('.hero-vehicle', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.0,
      },
      y: -120,
      scale: 0.96,
      ease: 'none',
    });

    // Copy fades and rises on scroll
    gsap.to('.hero-content', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: '45% top',
        scrub: 0.6,
      },
      y: -56,
      opacity: 0,
      ease: 'none',
    });

    // Rain recedes as you scroll away
    gsap.to('.hero-rain', {
      scrollTrigger: {
        trigger: '.hero',
        start: '20% top',
        end: 'bottom top',
        scrub: 1,
      },
      opacity: 0,
      ease: 'none',
    });

    // Pavement glow parallax (moves slower — feels grounded)
    gsap.to('.hero-pavement', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6,
      },
      y: -40,
      ease: 'none',
    });


    // ── Mouse-based parallax (desktop only) ───────────────────────────────
    const hero = $('.hero');
    if (hero && !('ontouchstart' in window)) {
      let raf = false;

      hero.addEventListener('mousemove', (e) => {
        if (raf) return;
        raf = true;
        requestAnimationFrame(() => {
          raf = false;
          const rect = hero.getBoundingClientRect();
          // Normalize -1..+1 on each axis
          const dx = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
          const dy = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;

          // Car — counterweight to cursor, slow
          gsap.to('.hero-vehicle', {
            x: dx * -22, y: dy * -11,
            duration: 1.9, ease: 'power2.out', overwrite: 'auto',
          });
          // Glows — move with cursor for depth
          gsap.to('.hero-glow:not(.b)', {
            x: dx * 30, y: dy * 16,
            duration: 2.6, ease: 'power2.out', overwrite: 'auto',
          });
          gsap.to('.hero-glow.b', {
            x: dx * -22, y: dy * -11,
            duration: 3.0, ease: 'power2.out', overwrite: 'auto',
          });
          // Headlight beam drifts with mouse
          gsap.to('.hero-beam', {
            x: dx * 14, duration: 3.4, ease: 'power2.out', overwrite: 'auto',
          });
          // Pavement — subtle horizontal drift
          gsap.to('.hero-pavement', {
            x: dx * -9, duration: 2.2, ease: 'power2.out', overwrite: 'auto',
          });
          // Fog — slowest, feels most distant
          gsap.to('.hero-fog', {
            x: dx * -5, y: dy * -4,
            duration: 3.8, ease: 'power2.out', overwrite: 'auto',
          });
        });
      }, { passive: true });

      hero.addEventListener('mouseleave', () => {
        gsap.to(['.hero-vehicle', '.hero-glow', '.hero-beam', '.hero-fog'], {
          x: 0, y: 0, duration: 2.6, ease: 'power3.out', overwrite: 'auto',
        });
      }, { passive: true });
    }


    // ── Staggered grid reveals ─────────────────────────────────────────────
    // These elements don't have [data-reveal], so no IO-observer conflict.
    // GSAP handles them with scrubbed ScrollTrigger staggers.

    // Showcase panels — slide in from opposite sides
    if ($$('.showcase-pane').length) {
      gsap.from('.showcase-pane--ext', {
        scrollTrigger: { trigger: '.showcase', start: 'top 90%', toggleActions: 'play none none none' },
        x: -60, opacity: 0, duration: 1.4, ease: 'power3.out', clearProps: 'all',
      });
      gsap.from('.showcase-pane--int', {
        scrollTrigger: { trigger: '.showcase', start: 'top 90%', toggleActions: 'play none none none' },
        x: 60, opacity: 0, duration: 1.4, ease: 'power3.out', clearProps: 'all',
      });
    }

    if ($$('.occ-item').length) {
      gsap.from('.occ-item', {
        scrollTrigger: {
          trigger: '.occasions-grid',
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        opacity: 0, y: 34,
        duration: 0.78, stagger: 0.07,
        ease: 'power3.out',
        clearProps: 'all',
      });
    }

    if ($$('.trust-item').length) {
      gsap.from('.trust-item', {
        scrollTrigger: {
          trigger: '.trust-grid',
          start: 'top 86%',
          toggleActions: 'play none none none',
        },
        opacity: 0, y: 28,
        duration: 0.72, stagger: 0.09,
        ease: 'power3.out',
        clearProps: 'all',
      });
    }

    if ($$('.exp-row').length) {
      gsap.from('.exp-row', {
        scrollTrigger: {
          trigger: '.experience-list',
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        opacity: 0, x: -22,
        duration: 0.58, stagger: 0.07,
        ease: 'power3.out',
        clearProps: 'all',
      });
    }

    if ($$('.driver-stat').length) {
      gsap.from('.driver-stat', {
        scrollTrigger: {
          trigger: '.driver-stats',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        opacity: 0, y: 24,
        duration: 0.65, stagger: 0.11,
        ease: 'power3.out',
        clearProps: 'all',
      });
    }

    // Reserve marks list
    if ($$('.reserve-mark').length) {
      gsap.from('.reserve-mark', {
        scrollTrigger: {
          trigger: '.reserve-marks',
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        opacity: 0, x: -16,
        duration: 0.65, stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'all',
      });
    }

    // Nameplate specs — subtle fade
    if ($$('.nameplate-spec').length) {
      gsap.from('.nameplate-spec', {
        scrollTrigger: {
          trigger: '.nameplate',
          start: 'top 92%',
          toggleActions: 'play none none none',
        },
        opacity: 0, y: 10,
        duration: 0.55, stagger: 0.09,
        ease: 'power2.out',
        clearProps: 'all',
      });
    }

    // Moment quote — slow cinematic reveal
    if ($('.moment-quote')) {
      gsap.from('.moment-quote', {
        scrollTrigger: {
          trigger: '.moment',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        opacity: 0, y: 48, filter: 'blur(4px)',
        duration: 1.8,
        ease: 'power3.out',
        clearProps: 'all',
      });
    }

    // Footer farewell — very slow
    if ($('.cta-display')) {
      gsap.from('.cta-display', {
        scrollTrigger: {
          trigger: '.cta-display',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
        opacity: 0, y: 60,
        duration: 1.6,
        ease: 'power3.out',
        clearProps: 'all',
      });
    }

    ScrollTrigger.refresh();
  }

  // Wait for React to render, then init
  window.addEventListener('load', function () {
    setTimeout(init, 220);
  });
})();
