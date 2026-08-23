const photos = [
  { src: "/photos/gym-floor.jpg", alt: "Gold Dozo Gym main floor with cardio and free weights" },
  { src: "/photos/brand-wall.jpg", alt: "Illuminated Gold Dozo Gym wall with framed photos" },
  { src: "/photos/equipment.jpg", alt: "Resistance machines, battle ropes and cardio zone" },
  { src: "/photos/reception.jpg", alt: "Premium reception and lobby area" },
  { src: "/photos/strength.jpg", alt: "Free weights zone with dumbbells and squat racks" },
  { src: "/photos/spacious-floor.jpg", alt: "Spacious gym floor with boxing bag and equipment" },
];

export default function Gallery() {
  return (
    <section className="section section-white" id="gallery">
      <div className="container">
        <div className="section-head" style={{ textAlign: "center" }} data-reveal>
          <span className="kicker" style={{ justifyContent: "center" }}>Inside Gold Dozo</span>
          <h2 className="section-title display">
            Step Inside <span className="red">The Gym</span>
          </h2>
        </div>

        <div className="gallery-grid">
          {photos.map((p, i) => (
            <figure
              key={i}
              className={`gallery-item gallery-item-${i}`}
              data-reveal
            >
              <img src={p.src} alt={p.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
