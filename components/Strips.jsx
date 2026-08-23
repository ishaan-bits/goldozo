import Ico from "./Ico";

export function InfoStrip() {
  return (
    <div className="strip">
      <div className="container strip-inner">
        <div className="strip-item">
          <span className="strip-icon">
            <Ico name="pin" size={22} />
          </span>
          <div>
            <h4>Bhavya Iconic Tower, 4th Floor</h4>
            <p>Gola Road Crossing, Bailey Road, Patna — 801503</p>
          </div>
        </div>
        <div className="strip-item">
          <span className="strip-icon">
            <Ico name="clock" size={22} />
          </span>
          <div>
            <h4>Open 6 Days · 5:30 AM – 10 PM</h4>
            <p>Sunday hours vary — please call before visiting</p>
          </div>
        </div>
        <div className="strip-item">
          <span className="strip-icon">
            <Ico name="phone" size={20} />
          </span>
          <div>
            <h4>+91 70702 59222</h4>
            <p>Landline: 0612-350 7056</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const items = [
  "Strength & Cardio",
  "Boxing",
  "Yoga",
  "Zumba",
  "Pilates",
  "Calisthenics",
  "Functional Training",
  "Steam & Sauna",
  "Nutrition Café",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
