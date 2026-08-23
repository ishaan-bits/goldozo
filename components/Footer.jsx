import Logo from "./Logo";

const explore = [
  ["About", "#about"],
  ["Programs", "#programs"],
  ["Amenities", "#amenities"],
  ["Membership", "#membership"],
  ["Reviews", "#reviews"],
  ["Visit Us", "#visit"],
];

const classLinks = [
  ["Boxing", "#programs"],
  ["Yoga", "#programs"],
  ["Zumba", "#programs"],
  ["Pilates", "#programs"],
  ["Calisthenics", "#programs"],
  ["Functional Training", "#programs"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" aria-label="Gold Dozo Gym home">
              <Logo markSize={38} />
            </a>
            <p>
              Patna&rsquo;s premium full-service fitness centre — strength
              &amp; cardio, boxing, yoga, zumba, pilates, calisthenics, steam,
              sauna, and an in-house nutrition café.
            </p>
          </div>

          <div>
            <h6>Explore</h6>
            <ul className="footer-links">
              {explore.map(([label, href]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6>Programs</h6>
            <ul className="footer-links">
              {classLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6>Contact</h6>
            <div className="footer-contact">
              <div>
                <b>Phone:</b>{" "}
                <a href="tel:+917070259222" style={{ color: "#ff3b41" }}>
                  +91 70702 59222
                </a>
              </div>
              <div>
                <b>Landline:</b>{" "}
                <a href="tel:+916123507056" style={{ color: "#c9c9d1" }}>
                  0612-350 7056
                </a>
              </div>
              <div>
                <b>Website:</b>{" "}
                <a
                  href="https://golddozo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#c9c9d1" }}
                >
                  golddozo.com
                </a>
              </div>
              <div>
                <b>Address:</b> 4th Floor, Bhavya Iconic Tower, Gola Road
                Crossing, Bailey Road, Patna, Bihar 801503
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Gold Dozo Gym · Bailey Road, Patna
          </span>
          <span>
            Listed on{" "}
            <a
              href="https://about.me/golddozogym"
              target="_blank"
              rel="noopener noreferrer"
            >
              about.me/golddozogym
            </a>{" "}
            ·{" "}
            <a
              href="https://golddozo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              golddozo.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
