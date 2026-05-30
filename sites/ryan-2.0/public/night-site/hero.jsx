// Hero — Full viewport · BMW editorial · Left-aligned campaign composition
const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Atmosphere */}
      <div className="hero-bg" />
      <div className="hero-grad-left" />
      <div className="hero-grad-top" />
      <div className="hero-grad-bottom" />

      {/* Video replaces static car image — same position slot */}
      <div className="hero-car">
        <video
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/night-site/assets/videos/isolated_car_shot.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Editorial content — left-aligned */}
      <div className="hero-body">
        <p className="hero-eyebrow">Ryan J. · Baltimore Private Chauffeur</p>

        <h1 className="hero-hl">
          <span>THE NIGHT</span>
          <span>BEGINS</span>
          <span>BEFORE</span>
          <span>YOU ARRIVE.</span>
        </h1>

        <p className="hero-sub">
          A private BMW 750 experience with Ryan J. for nights that deserve more than a ride.
        </p>

        <div className="hero-actions">
          <a href="#book" className="btn-primary">Book Your Night</a>
          <a href="sms:+16672071472" className="btn-ghost">Text 667 · 207 · 1472</a>
        </div>

        <p className="hero-trust">Private · Professional · On Time</p>
      </div>
    </section>
  );
};

window.Hero = Hero;
