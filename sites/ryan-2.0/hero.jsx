/* global React */
const { useState, useEffect, useRef, useMemo } = React;

/* ========================================================
   Hero — split-screen "Choose Your Experience"
======================================================== */

function Hero({ onEnter, theme, fonts, eyebrow }) {
  const [hover, setHover] = React.useState(null); // 'day' | 'night' | null
  const heroRef = React.useRef(null);
  const [mouse, setMouse] = React.useState({ x: 50, y: 50 });

  const onMove = (e) => {
    const r = heroRef.current?.getBoundingClientRect();
    if (!r) return;
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setMouse({ x, y });
    // Determine which half
    if (x < 47) setHover('day');
    else if (x > 53) setHover('night');
    else setHover(null);
  };

  // Parallax offsets
  const parallax = (depth) => ({
    transform: `translate(${(mouse.x - 50) * depth}px, ${(mouse.y - 50) * depth}px)`
  });

  // Generate twinkling pins (deterministic)
  const pins = React.useMemo(() => {
    return Array.from({ length: 28 }, (_, i) => ({
      left: 4 + ((i * 37) % 92),
      top: 8 + ((i * 53) % 50),
      delay: (i % 7) * 0.4
    }));
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero"
      data-screen-label="Hero · Choose Your Experience"
      data-hover={hover || ''}
      onMouseMove={onMove}
      onMouseLeave={() => setHover(null)}
    >
      {/* DAY HALF */}
      <div className="hero-half day" data-screen-label="Hero · Day Half">
        <div className="bg-layer" style={parallax(-0.15)} />
        <image-slot
          id="hero-day-bg"
          shape="rect"
          placeholder="DAY scene · rooftop, waterfront, champagne"
        ></image-slot>
        {/* Soft horizon hint */}
        <div className="horizon day-horizon" style={parallax(-0.08)}></div>
        <div className="sun-flare" style={parallax(-0.3)}></div>
        {/* Warm bokeh particles */}
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={'d' + i}
            className="bokeh"
            style={{
              left: `${(i * 71) % 95}%`,
              top: `${30 + (i * 23) % 60}%`,
              animationDelay: `${(i * 0.7) % 6}s`
            }}
          />
        ))}
        <div className="atmosphere"></div>
        <div className="vignette"></div>
      </div>

      {/* NIGHT HALF */}
      <div className="hero-half night" data-screen-label="Hero · Night Half">
        <div className="bg-layer" style={parallax(-0.15)} />
        <image-slot
          id="hero-night-bg"
          shape="rect"
          placeholder="NIGHT scene · wet city street, neon, VIP entrance"
        ></image-slot>
        {/* Building skyline hint */}
        <div className="skyline" style={parallax(-0.05)}></div>
        {/* City pins */}
        {pins.map((p, i) => (
          <div
            key={i}
            className="city-pin"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`
            }}
          />
        ))}
        <div className="city-glow" style={parallax(-0.2)}></div>
        <div className="wet-floor"></div>
        <div className="atmosphere"></div>
        <div className="vignette"></div>
      </div>

      {/* Center divider */}
      <div className="divider"></div>
      <div className="divider-mid"><span>OR</span></div>

      {/* Car */}
      <div className="car-stage" style={parallax(0.06)}>
        <div className="car-frame">
          <image-slot
            id="hero-car"
            shape="rect"
            fit="contain"
            placeholder="White luxury sedan · front-facing · transparent PNG"
          ></image-slot>
        </div>
      </div>

      {/* Eyebrow */}
      <div className="hero-eyebrow">{eyebrow || 'Choose Your Experience'}</div>

      {/* DAY side text */}
      <div className="hero-side-text day">
        <div className="label-big">Day</div>
        <div className="label-small">Experience</div>
        <div className="copy">
          Executive arrivals, weddings, brunch and waterfront afternoons —
          rendered in champagne light.
        </div>
        <button
          className="hero-cta"
          onClick={() => onEnter && onEnter('day')}
          aria-label="Enter the day experience"
        >
          Enter Day
          <span className="arrow"></span>
        </button>
      </div>

      {/* NIGHT side text */}
      <div className="hero-side-text night">
        <div className="label-big">Night</div>
        <div className="label-small">Experience</div>
        <div className="copy">
          Velvet-rope arrivals, late dinners, headline shows —
          curated for the city after dark.
        </div>
        <button
          className="hero-cta"
          onClick={() => onEnter && onEnter('night')}
          aria-label="Enter the night experience"
        >
          Enter Night
          <span className="arrow"></span>
        </button>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue">
        <span>Scroll to Explore</span>
        <div className="line"></div>
      </div>
    </section>
  );
}

window.Hero = Hero;
