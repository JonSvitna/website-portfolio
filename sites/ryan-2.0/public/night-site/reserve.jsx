// Reserve — booking CTA
const Reserve = () => {
  return (
    <section className="reserve" id="reserve" data-screen-label="07 Reserve">
      <div className="reserve-grid">
        <div className="reserve-head">
          <div className="chapter-mark">
            <span className="rune">v</span>
            Chapter Five — Reserve
          </div>
          <h2 className="display">
            Your comfort, your time — <em>same thread to the curb.</em>
          </h2>
          <p className="lede">
            Call or text for the fastest reply. Or tap the button below — Ryan J. confirms personally, usually within an hour.
          </p>
          <div className="reserve-marks">
            <div className="reserve-mark">
              <span className="ix">01.</span>
              <span className="txt">Tell us where the evening begins and where it ends.</span>
            </div>
            <div className="reserve-mark">
              <span className="ix">02.</span>
              <span className="txt">Ryan J. calls or texts within the hour to confirm details.</span>
            </div>
            <div className="reserve-mark">
              <span className="ix">03.</span>
              <span className="txt">The sedan arrives six minutes early. Engine warm. Cabin dressed.</span>
            </div>
          </div>
        </div>

        <div className="book-card">
          <a className="book-call-primary" href="tel:+16672071472">Call or text · 667 · 207 · 1472</a>
          <div className="book-divider" aria-hidden="true">
            <span className="book-divider-line" />
            <span className="book-divider-label">Or book online</span>
            <span className="book-divider-line" />
          </div>
          <div className="book-eyebrow">The reservation</div>
          <h3>An evening, <em>composed.</em></h3>
          <p style={{ marginTop: 12, marginBottom: 32, opacity: 0.7, fontSize: 14, lineHeight: 1.6 }}>
            Tap below to open the booking form — Ryan J. confirms personally, usually within the hour.
          </p>
          <a
            className="book-submit"
            href="https://tr.ee/GTOHjorP2S"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, textDecoration: 'none' }}
          >
            <span>Book Your Night</span>
            <span className="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

window.Reserve = Reserve;
