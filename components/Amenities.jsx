import Ico from "./Ico";

const amenities = [
  { ico: "steam", label: "Steam Room" },
  { ico: "sauna", label: "Sauna" },
  { ico: "cafe", label: "Nutrition Café" },
  { ico: "coach", label: "Personal Trainers" },
  { ico: "mirror", label: "Smart Mirror Tech" },
  { ico: "pulse", label: "Fitness Consultation" },
  { ico: "weights", label: "Free Weights Zone" },
  { ico: "machines", label: "Resistance Machines" },
];

export default function Amenities() {
  return (
    <section className="section section-white" id="amenities">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="kicker">Premium Facilities</span>
          <h2 className="section-title display">
            Recover. Refuel. <span className="red">Repeat.</span>
          </h2>
          <p className="section-desc">
            Gold Dozo pairs serious training with the recovery and nutrition
            amenities you&rsquo;d expect from a top-tier fitness club.
          </p>
        </div>

        <div className="amen-grid">
          {amenities.map((a) => (
            <div className="amen" key={a.label} data-reveal>
              <span className="amen-ico">
                <Ico name={a.ico} size={21} />
              </span>
              {a.label}
            </div>
          ))}
        </div>

        <div className="amen-note" data-reveal>
          <strong>The Gold Dozo difference:</strong> the gym combines the
          training experience with <strong>nutritious meals at its in-house café</strong>{" "}
          — so your post-workout refuel is steps from the dumbbell rack.
        </div>
      </div>
    </section>
  );
}
