import React, { useEffect, useState } from "react";
import services from "../data/services";
import Modal from "./Modal";

export default function Services() {
  const [selected, setSelected] = useState(null);

  // body lock while modal open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selected]);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="services" className="section" data-reveal>
      <header className="section-head">
        <h2>Services</h2>
        <p>Click a card to learn more</p>
      </header>
      <div className="grid services">
        {services.map((s) => (
          <article
            key={s.id}
            className="card service tilt"
            onClick={() => setSelected(s)}
            tabIndex={0}
            role="button"
            aria-label={`Open ${s.title} details`}
            onKeyDown={(e) => e.key === "Enter" && setSelected(s)}
          >
            <div className="icon" aria-hidden>
              {s.icon}
            </div>
            <h3>{s.title}</h3>
            <small className="tag">{s.tag}</small>
            <p>{s.blurb}</p>
            <div className="pill-row">
              {s.badges?.map((b, i) => (
                <span className="pill" key={i}>
                  {b}
                </span>
              ))}
            </div>
            <div className="more">Learn more →</div>
          </article>
        ))}
      </div>

      {selected && (
        <Modal title={selected.title} onClose={() => setSelected(null)}>
          <div className="modal-service">
            <div className="modal-icon" aria-hidden>
              {selected.icon}
            </div>
            <p className="muted">{selected.tag}</p>
            <p>{selected.details}</p>
            <h5>Highlights</h5>
            <ul className="ticks compact">
              {selected.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            {selected.deliverables?.length > 0 && (
              <>
                <h5>Typical Deliverables</h5>
                <ul className="ticks compact">
                  {selected.deliverables.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </Modal>
      )}
    </section>
  );
}
