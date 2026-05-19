// Night Series — App assembly
const { useState, useEffect } = React;

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => (e) => {
    e && e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={'nav ' + (scrolled ? 'scrolled' : '')}>
      <a className="nav-mark" href="#hero" onClick={go('hero')}>
        <span className="nav-mono">RJ</span>
        <span className="nav-name">
          Night Series
          <em>Private Chauffeur</em>
        </span>
      </a>

      <div className="nav-links">
        <button className="nav-link" onClick={go('moments')}>Occasions</button>
        <button className="nav-link" onClick={go('interior')}>Cabin</button>
        <button className="nav-link" onClick={go('baltimore')}>Service Area</button>
        <button className="nav-link" onClick={go('book')}>Book</button>
      </div>

      <button className="nav-cta" onClick={go('book')}>
        Book Your Night
      </button>
    </nav>
  );
};

const MobileCTA = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={'mobile-cta-bar ' + (visible ? 'visible' : '')}>
      <a className="mobile-cta-call--solo" href="tel:+16672071472">
        Call or text · 667 · 207 · 1472
      </a>
    </div>
  );
};

const App = () => {
  // Scroll reveal — IntersectionObserver entrance system
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('is-visible');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="ribbon" />
      <Nav />
      <Hero />
      <ExperienceStatement />
      <Moments />
      <InteriorExperience />
      <BaltimoreNight />
      <BookingCTA />
      <SiteFooter />
      <MobileCTA />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
