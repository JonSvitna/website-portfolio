// CabinVideo — HyperFrames rendered interior tour, 24s looping
const CabinVideo = () => (
  <section className="cabin-video" id="cabin-video" data-screen-label="Cabin Tour">
    <div className="cabin-video-head">
      <div className="chapter-mark">
        <span className="rune">iii·b</span>
        Interior tour
      </div>
      <h2 className="display">
        The cabin, <em>in motion.</em>
      </h2>
      <p className="lede" style={{ marginTop: 20 }}>
        Four views. One cabin. Shot in Baltimore.
      </p>
    </div>
    <div className="cabin-video-frame">
      <video
        src="/cabin-tour/cabin-tour.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-label="BMW 750 red leather interior tour"
      />
    </div>
  </section>
);

window.CabinVideo = CabinVideo;
