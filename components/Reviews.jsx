import Ico from "./Ico";

const reviews = [
  {
    text: "“Great variety of quality equipment and a genuinely spacious, modern floor. Easily one of the best-maintained gyms in Patna.”",
    src: "Equipment & Ambience",
    via: "Justdial · Verified Rating",
  },
  {
    text: "“Trainers are knowledgeable and friendly — they're on the floor, correcting form and helping you push safely.”",
    src: "Coaching & Support",
    via: "Yappe · Member Review",
  },
  {
    text: "“Boxing, yoga, zumba, steam, sauna, even a café — it's a full fitness club, not just a gym. Worth every rupee for me.”",
    src: "Facilities & Classes",
    via: "Public Listings Summary",
  },
];

export default function Reviews() {
  return (
    <section className="section section-white" id="reviews">
      <div className="container">
        <div className="reviews-top">
          <div data-reveal>
            <span className="kicker">Member Love</span>
            <h2 className="section-title display">
              Rated Among <br />
              <span className="red">Patna&rsquo;s Best</span>
            </h2>
          </div>

          <div className="score-boxes" data-reveal>
            <div className="score-box">
              <div className="score-num display">4.4</div>
              <div className="stars">★★★★★</div>
              <div className="score-src">Justdial · ~330 ratings</div>
            </div>
            <div className="score-box">
              <div className="score-num display">4.8</div>
              <div className="stars">★★★★★</div>
              <div className="score-src">Yappe · 115 reviews</div>
            </div>
          </div>
        </div>

        <div className="review-grid">
          {reviews.map((r) => (
            <article className="review-card" key={r.src} data-reveal>
              <div className="stars red">★★★★★</div>
              <p>{r.text}</p>
              <div className="review-meta">
                <b>{r.src}</b> · {r.via}
              </div>
            </article>
          ))}
        </div>

        <p
          style={{
            marginTop: 26,
            fontSize: 13,
            color: "#77777f",
          }}
        >
          Review themes paraphrased from public listings (Justdial &amp; Yappe).
          Experiences vary — we recommend a trial visit before enrolling.
        </p>
      </div>
    </section>
  );
}
