import React from "react";
import faq from "../data/faq";

export default function FAQ() {
  return (
    <section className="section" data-reveal>
      <header className="section-head">
        <h2>FAQ</h2>
        <p>Quick answers to common questions</p>
      </header>
      <dl className="faq">
        {faq.map((f, i) => (
          <div key={i} className="faq-item">
            <dt>{f.q}</dt>
            <dd>{f.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
