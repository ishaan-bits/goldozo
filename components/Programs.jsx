import Ico from "./Ico";

const programs = [
  {
    ico: "dumbbell",
    tag: "Iron",
    title: "Strength Training",
    text: "Free weights, plate-loaded stations and modern resistance machines for every level.",
    img: "/photos/programs/strength.jpg",
  },
  {
    ico: "pulse",
    tag: "Engine",
    title: "Cardio Zone",
    text: "Treadmills, cycles and cross-trainers to build endurance and burn calories.",
    img: "/photos/programs/cardio.jpg",
  },
  {
    ico: "glove",
    tag: "Combat",
    title: "Boxing",
    text: "Pad work, bag work and conditioning at a gym listed as a dedicated boxing studio.",
    img: "/photos/programs/boxing.jpg",
  },
  {
    ico: "lotus",
    tag: "Mind",
    title: "Yoga",
    text: "Guided sessions for flexibility, mobility and recovery in a calm setting.",
    img: "/photos/programs/yoga.jpg",
  },
  {
    ico: "note",
    tag: "Dance",
    title: "Zumba",
    text: "High-energy dance cardio that never feels like a chore.",
    img: "/photos/programs/zumba.jpg",
  },
  {
    ico: "rings",
    tag: "Core",
    title: "Pilates",
    text: "Controlled, low-impact training for posture, core strength and alignment.",
    img: "/photos/programs/pilates.jpg",
  },
  {
    ico: "bar",
    tag: "Bodyweight",
    title: "Calisthenics",
    text: "Pull-ups, dips and skill work — master your own bodyweight.",
    img: "/photos/programs/calisthenics.jpg",
  },
  {
    ico: "kettlebell",
    tag: "Athletic",
    title: "Functional Training",
    text: "Kettlebells, sleds and movement patterns that carry into real life.",
    img: "/photos/programs/functional.jpg",
  },
];

export default function Programs() {
  return (
    <section className="section section-dark" id="programs">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="kicker">Train Your Way</span>
          <h2 className="section-title display">
            Programs &amp; <span className="red">Classes</span>
          </h2>
          <p className="section-desc">
            One membership. Every format. Whether you chase strength,
            stamina, skill or stillness — there&rsquo;s a floor for it here.
          </p>
        </div>

        <div className="cards-grid">
          {programs.map((p) => (
            <article className="card card-img" key={p.title} data-reveal>
              <div className="card-img-wrap">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="card-img-overlay" />
                {p.tag && <span className="card-tag">{p.tag}</span>}
              </div>
              <div className="card-body">
                <span className="card-ico">
                  <Ico name={p.ico} size={26} />
                </span>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
