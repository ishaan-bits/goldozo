const photos = [
  { src: "/photos/gym-floor.jpg", alt: "Gold Dozo Gym main floor with cardio and free weights", caption: "Main Training Floor", span: "wide" },
  { src: "/photos/brand-wall.jpg", alt: "Illuminated Gold Dozo Gym wall with framed photos", caption: "Gold Dozo Wall", span: "tall" },
  { src: "/photos/equipment.jpg", alt: "Resistance machines, battle ropes and cardio zone", caption: "Equipment Zone", span: "normal" },
  { src: "/photos/reception.jpg", alt: "Premium reception and lobby area", caption: "Reception & Lobby", span: "normal" },
  { src: "/photos/strength.jpg", alt: "Free weights zone with dumbbells and squat racks", caption: "Free Weights Area", span: "normal" },
  { src: "/photos/spacious-floor.jpg", alt: "Spacious gym floor with boxing bag and equipment", caption: "Functional Zone", span: "wide" },
];

export default function Gallery() {
  return (
    <section className="section section-dark" id="gallery">
      <div className="container">
        <div className="section-head" style={{ textAlign: "center" }} data-reveal>
          <span className="kicker" style={{ justifyContent: "center" }}>Inside Gold Dozo</span>
          <h2 className="section-title display">
            Step Inside <span className="red">The Gym</span>
          </h2>
          <p className="section-desc" style={{ marginInline: "auto" }}>
            4th floor of Bhavya Iconic Tower — where dark industrial design meets premium training.
          </p>
        </div>

        <div className="gallery-masonry">
          {photos.map((p, i) => (
            <figure
              key={i}
              className={`gallery-item gallery-${p.span}`}
              data-reveal
            >
              <img src={p.src} alt={p.alt} loading="lazy" />
              <figcaption className="gallery-caption">
                <span className="gallery-caption-text">{p.caption}</span>
                <span className="gallery-caption-line" />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
