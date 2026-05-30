// Driver — intimate portrait + quote
const Driver = () => {
  return (
    <section className="driver" id="driver" data-screen-label="06 Driver">
      <div className="driver-grid" data-reveal>
        <div className="driver-portrait">
          <image-slot
            id="driver-ryan-v2"
            src="/night-site/assets/ryan-portrait.png"
            placeholder="Ryan J. portrait"
            shape="rect"
          ></image-slot>
        </div>
        <div className="driver-quote">
          <div className="chapter-mark">
            <span className="rune">iv</span>
            Chapter Four — The Driver
          </div>
          <span className="mark">&#x201C;</span>
          <p className="driver-quote-text">
            Your comfort. Your time. <em>My priority.</em>
          </p>
          <span className="mark mark--close">&#x201D;</span>
          <div className="driver-sig">
            <span className="line" />
            <span className="name">
              Driven by professionalism
              <em>— Ryan J., Chauffeur</em>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

window.Driver = Driver;
