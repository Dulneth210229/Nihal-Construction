import React from "react";
import partners from "../data/partners";

export default function Partners() {
  return (
    <section className="section partners" data-reveal>
      <div className="marquee">
        {partners.concat(partners).map((p, i) => (
          <span key={i} className="partner">
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}
