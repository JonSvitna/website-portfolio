// BaltimoreNight — atmospheric city section
const BaltimoreNight = () => {
  return (
    <section className="baltimore-night" id="baltimore">
      {/* Background image — subtle, desaturated */}
      <div className="baltimore-night-bg">
        {/*
          Swap: /assets/bmw-exterior.png for night city/wet street atmosphere
          or leave dark if no suitable city photo is available
        */}
        <img
          src="/night-site/assets/bmw-exterior.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      </div>
      <div className="baltimore-night-overlay" />

      <div className="baltimore-night-inner">

        {/* Left — headline + copy */}
        <div data-reveal>
          <p className="baltimore-night-eyebrow">Service Area</p>
          <h2 className="baltimore-night-hl">
            BALTIMORE,<br />
            AFTER DARK.
          </h2>
          <p className="baltimore-night-copy">
            Harbor East. Inner Harbor. Fells Point. Downtown.
            Wherever the night takes you, arrive with intention.
          </p>
        </div>

        {/* Right — area list */}
        <div className="baltimore-night-right" data-reveal data-delay="2">
          <p className="baltimore-area-label">We serve</p>
          <ul className="baltimore-area-list">
            <li>Baltimore Metro</li>
            <li>Annapolis</li>
            <li>Columbia</li>
            <li>BWI · DCA · IAD</li>
            <li>Washington, D.C.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

// BookingCTA — luxury concierge close
const BookingCTA = () => {
  return (
    <section className="booking-cta" id="book">
      <div className="booking-cta-inner">

        <p className="booking-cta-eyebrow" data-reveal>Night Series · Baltimore</p>

        <h2 className="booking-cta-hl" data-reveal data-delay="1">
          Ready when<br />the night is.
        </h2>

        <p className="booking-cta-sub" data-reveal data-delay="2">
          Call or text Ryan J. to reserve your BMW 750 chauffeur experience.
        </p>

        <a
          className="booking-cta-phone"
          href="tel:+16672071472"
          data-reveal
          data-delay="2"
        >
          667 · 207 · 1472
        </a>

        <div className="booking-cta-actions" data-reveal data-delay="3">
          <a href="tel:+16672071472" className="btn-primary">Book Your Night</a>
          <a href="sms:+16672071472" className="btn-ghost">Text us instead</a>
        </div>

        <p className="booking-cta-locale" data-reveal data-delay="4">
          Serving Baltimore &amp; surrounding areas
        </p>

      </div>
    </section>
  );
};

// SiteFooter — minimal, quiet
const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <p className="site-footer-brand">Night Series</p>
          <p className="site-footer-tagline">
            Private BMW 750 chauffeur — Baltimore, BWI, DCA, IAD, and Washington.
          </p>
        </div>
        <div className="site-footer-right">
          <a className="site-footer-phone" href="tel:+16672071472">
            667 · 207 · 1472
          </a>
          <p className="site-footer-legal">
            © {new Date().getFullYear()} Ryan J. · Private hire · Baltimore, MD
          </p>
        </div>
      </div>
    </footer>
  );
};

// Legacy aliases
window.BaltimoreNight = BaltimoreNight;
window.BookingCTA = BookingCTA;
window.SiteFooter = SiteFooter;
window.CTAFooter = () => React.createElement(React.Fragment, null,
  React.createElement(BaltimoreNight),
  React.createElement(BookingCTA),
  React.createElement(SiteFooter)
);
window.Farewell = () => null;
