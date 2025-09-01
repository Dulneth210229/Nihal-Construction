import React from "react";

export default function Process() {
  return (
    <section id="process" className="section process" data-reveal>
      <header className="section-head">
        <h2>Our Process</h2>
        <p>Transparent, collaborative, and schedule-driven.</p>
      </header>
      <ol className="timeline">
        <li>
          <h4>01 • Discovery</h4>
          <p>
            Site visit, requirements, and budget alignment. We map constraints
            and opportunities.
          </p>
        </li>
        <li>
          <h4>02 • Design & Pre-Con</h4>
          <p>
            Architect/engineer coordination, value engineering, and milestone
            planning.
          </p>
        </li>
        <li>
          <h4>03 • Build</h4>
          <p>
            Daily QA/QC & HSE. Weekly updates with progress photos and
            look-aheads.
          </p>
        </li>
        <li>
          <h4>04 • Handover</h4>
          <p>
            Snag rectification, as-builts, O&M manuals, and operator training.
          </p>
        </li>
      </ol>
    </section>
  );
}
