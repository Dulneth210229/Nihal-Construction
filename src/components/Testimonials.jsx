import React from "react";
import testimonials from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="section alt" data-reveal>
      <header className="section-head">
        <h2>What Clients Say</h2>
        <p>Real feedback from recent handovers</p>
      </header>
      <div className="testimonials">
        {testimonials.map((t, i) => (
          <figure key={i} className="card testi">
            <blockquote>“{t.quote}”</blockquote>
            <figcaption>
              <img src={t.avatar} alt="avatar" />
              <div>
                <b>{t.name}</b>
                <small>{t.role}</small>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
