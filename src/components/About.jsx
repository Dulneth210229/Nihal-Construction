import React from "react";

export default function About() {
  return (
    <section id="about" className="section" data-reveal>
      <header className="section-head">
        <h2>About Us</h2>
        <p>Delivering quality, safety, and character since 1998</p>
      </header>
      <div className="about">
        <div className="about-copy">
          <p>
            RetroBuild is an ISO-certified contractor with teams across civil,
            architectural, and MEP trades. We combine craftsmanship with BIM
            coordination, lean scheduling, and rigorous QA/QC.
          </p>
          <ul className="ticks">
            <li>CIDB Grade CS2 • ICTAD C1</li>
            <li>Zero-LTI safety culture</li>
            <li>Dedicated QS & planning departments</li>
            <li>In-house joinery & steel fabrication</li>
          </ul>
        </div>
        <div className="about-stats">
          <div className="stat">
            <span className="num">280+</span>
            <span className="lbl">Projects Completed</span>
          </div>
          <div className="stat">
            <span className="num">27</span>
            <span className="lbl">Years Experience</span>
          </div>
          <div className="stat">
            <span className="num">96%</span>
            <span className="lbl">On-time Delivery</span>
          </div>
          <div className="stat">
            <span className="num">0</span>
            <span className="lbl">LTIs in last 24 months</span>
          </div>
        </div>
      </div>

      <div className="certs" data-reveal>
        <div className="cert card">
          <h4>Certifications</h4>
          <ul className="ticks compact">
            <li>ISO 9001:2015 – Quality</li>
            <li>ISO 14001:2015 – Environment</li>
            <li>ISO 45001:2018 – OH&S</li>
          </ul>
        </div>
        <div className="cert card">
          <h4>Safety & Environment</h4>
          <ul className="ticks compact">
            <li>Toolbox talks • PTW</li>
            <li>Dust/noise/vibration monitoring</li>
            <li>Waste segregation & recycling</li>
          </ul>
        </div>
        <div className="cert card">
          <h4>Capabilities</h4>
          <ul className="ticks compact">
            <li>BIM LOD 300</li>
            <li>Design–Build & EPC</li>
            <li>Live progress dashboards</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
