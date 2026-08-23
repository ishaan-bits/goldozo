import Ico from "./Ico";

export default function CTABand() {
  return (
    <section className="cta-band">
      <div className="container">
        <h2 className="display" data-reveal>
          Your First Rep <br />
          Starts Here
        </h2>
        <p data-reveal>
          Walk in for a free trial. No commitment, no pressure — just Gold
          Dozo and the equipment to prove it.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }} data-reveal>
          <a className="btn btn-light" href="tel:+917070259222">
            <Ico name="phone" size={18} /> Call +91 70702 59222
          </a>
          <a
            className="btn btn-outline"
            href="https://www.google.com/maps/dir/?api=1&destination=Gold+Dozo+Gym+Bhavya+Iconic+Tower+Bailey+Road+Patna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Ico name="pin" size={18} /> Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
