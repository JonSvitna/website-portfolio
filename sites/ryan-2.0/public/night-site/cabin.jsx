// InteriorExperience — split editorial layout · red leather · no bullet lists
const InteriorExperience = () => {
  return (
    <section className="interior-exp" id="interior">
      <div className="interior-exp-inner">

        {/* Left — text */}
        <div data-reveal>
          <p className="interior-exp-eyebrow">The Cabin</p>
          <h2 className="interior-exp-hl">
            INSIDE,<br />
            EVERYTHING<br />
            SLOWS DOWN.
          </h2>
          <p className="interior-exp-copy">
            Red leather. Ambient lighting. Heated comfort. Private space.
            The kind of quiet that changes the night.
          </p>
          <a href="#book" className="btn-primary">Book Your Night</a>
        </div>

        {/* Right — cabin video */}
        <div className="interior-exp-img" data-reveal data-delay="2">
          <video autoPlay muted loop playsInline>
            <source src="/night-site/assets/videos/inside_car_View.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </section>
  );
};

window.InteriorExperience = InteriorExperience;
// Legacy aliases — keep these so app.jsx loads cleanly
window.Cabin = InteriorExperience;
window.CabinVideo = () => null;
