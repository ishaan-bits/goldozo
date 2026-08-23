import Ico from "./Ico";

const hours = [
  ["Mon–Sat", "5:30 AM – 10:00 PM"],
  ["Sunday", "Varies — call ahead"],
];

const contacts = [
  {
    ico: "phone",
    href: "tel:+917070259222",
    label: "Primary",
    value: "+91 70702 59222",
  },
  {
    ico: "phone",
    href: "tel:+916123507056",
    label: "Landline",
    value: "0612-350 7056",
  },
  {
    ico: "globe",
    href: "https://golddozo.com",
    label: "Website",
    value: "golddozo.com",
  },
  {
    ico: "pin",
    label: "Address",
    value: "4th Floor, Bhavya Iconic Tower, Gola Road Crossing, Bailey Road, Patna, Bihar 801503",
  },
];

const areas = [
  "Gola Road",
  "Bailey Road",
  "Danapur",
  "Ram Jaipal Nagar",
  "Shri Krishna Puram",
  "Indrapuri",
];

export default function Visit() {
  return (
    <section className="section section-dark" id="visit">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="kicker">Visit Us</span>
          <h2 className="section-title display">
            Find Us On <span className="red">Bailey Road</span>
          </h2>
          <p className="section-desc">
            Conveniently located at Gola Road Crossing — easy to reach from
            Danapur, Ram Jaipal Nagar, Shri Krishna Puram and Indrapuri.
          </p>
        </div>

        <div className="visit-grid">
          <div data-reveal>
            <div className="hours-table">
              {hours.map(([day, time]) => (
                <div className="hours-row" key={day}>
                  <span className="hours-day">{day}</span>
                  <span className={`hours-time ${day === "Sunday" ? "warn" : ""}`}>
                    {time}
                  </span>
                </div>
              ))}
            </div>

            <div className="contact-lines">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href || "#"}
                  className="contact-line"
                  target={c.href ? "_blank" : undefined}
                  rel={c.href ? "noopener noreferrer" : undefined}
                >
                  <Ico name={c.ico} size={20} />
                  <div>
                    <span>{c.label}</span>
                    {c.value}
                  </div>
                </a>
              ))}
            </div>

            <div className="area-chips">
              {areas.map((a) => (
                <span className="chip" key={a}>
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div className="map-wrap" data-reveal>
            <iframe
              className="map-frame"
              title="Gold Dozo Gym location"
              loading="lazy"
              src="https://www.google.com/maps?q=Gold%20Dozo%20Gym%2C%20Bhavya%20Iconic%20Tower%2C%20Bailey%20Road%2C%20Patna&output=embed"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-actions">
              <a
                className="btn btn-red"
                href="https://www.google.com/maps/dir/?api=1&destination=Gold+Dozo+Gym+Bhavya+Iconic+Tower+Bailey+Road+Patna"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Ico name="arrow" size={16} /> Get Directions
              </a>
              <a className="btn btn-ghost" href="tel:+917070259222">
                <Ico name="phone" size={16} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
