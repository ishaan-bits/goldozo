import Ico from "./Ico";

const points = [
  {
    ico: "weights",
    title: "Quality Equipment",
    text: "A wide variety of free weights, cardio machines and modern resistance setups.",
  },
  {
    ico: "mirror",
    title: "Tech-Forward Training",
    text: "Intelligent mirror and technology-oriented fitness features across the floor.",
  },
  {
    ico: "cafe",
    title: "In-House Nutrition Café",
    text: "Refuel right after your workout — rare among Patna gyms.",
  },
  {
    ico: "coach",
    title: "Coaches On The Floor",
    text: "Knowledgeable, friendly trainers to help with form, plans and progression.",
  },
];

export default function About() {
  return (
    <section className="section section-white" id="about">
      <div className="container">
        <div className="about-grid">
          <div data-reveal>
            <div className="section-head" style={{ marginBottom: 34 }}>
              <span className="kicker">About Gold Dozo</span>
              <h2 className="section-title display">
                More Than A Gym.
                <br />
                <span className="red">A Fitness Address.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                Perched on the 4th floor of <strong>Bhavya Iconic Tower</strong>{" "}
                at Gola Road Crossing, Gold Dozo Gym is built for people who
                take training seriously — and want their gym to match. Think
                spacious, air-conditioned floors, modern interiors, and
                equipment you actually look forward to using.
              </p>
              <p>
                It&rsquo;s positioned as a{" "}
                <strong>premium, full-service fitness centre</strong> — not a
                bare-bones neighbourhood gym. Alongside strength and cardio,
                members train boxing, yoga, zumba, pilates and calisthenics,
                then recover with steam, sauna and a nutritious meal at the
                in-house café.
              </p>
            </div>

            <div className="about-points">
              {points.map((p) => (
                <div className="point" key={p.title}>
                  <span className="point-ico">
                    <Ico name={p.ico} size={22} />
                  </span>
                  <div>
                    <h5>{p.title}</h5>
                    <p>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual" data-reveal>
            <div className="about-photo-stack">
              <img
                src="/photos/brand-wall.jpg"
                alt="Gold Dozo Gym branded wall with illuminated signage"
                className="about-photo about-photo-main"
              />
              <img
                src="/photos/reception.jpg"
                alt="Gold Dozo Gym reception and lobby area"
                className="about-photo about-photo-secondary"
              />
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-num">4.4★</div>
                <div className="stat-label">Justdial · ~330 Ratings</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">445+</div>
                <div className="stat-label">Reviews Across Platforms</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">10+</div>
                <div className="stat-label">Training Formats</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">4th</div>
                <div className="stat-label">Floor · Bhavya Iconic Tower</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
