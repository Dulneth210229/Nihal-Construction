import React, { useEffect, useMemo, useState } from "react";
import allProjects from "../data/projects";
import Modal from "./Modal";
import ProjectDetail from "./ProjectDetail";

const CATEGORIES = [
  "All Projects",
  "Residential",
  "Commercial",
  "Renovation",
  "Industrial",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [visibleCount, setVisibleCount] = useState(4);
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

  const filtered = useMemo(
    () =>
      activeCategory === "All Projects"
        ? allProjects
        : allProjects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const visible = filtered.slice(0, visibleCount);
  const canSeeMore = visible.length < filtered.length;

  const toggleSeeMore = () => setVisibleCount((n) => (n === 4 ? 999 : 4));

  return (
    <section id="projects" className="section alt" data-reveal>
      <header className="section-head">
        <h2>Featured Projects</h2>
        <p>
          Explore by category. Click a card for a full gallery & case study.
        </p>
      </header>

      <div className="tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`tab ${activeCategory === cat ? "active" : ""}`}
            onClick={() => {
              setActiveCategory(cat);
              setVisibleCount(4);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid projects">
        {visible.map((p) => (
          <article
            key={p.id}
            className="card project tilt"
            onClick={() => setSelected(p)}
            tabIndex={0}
            role="button"
            aria-label={`Open ${p.title} details`}
            onKeyDown={(e) => e.key === "Enter" && setSelected(p)}
          >
            <div className="cover">
              <img src={p.cover} alt={`${p.title} cover`} />
              <span className={`badge-cat ${p.category.toLowerCase()}`}>
                {p.category}
              </span>
            </div>
            <div className="meta">
              <h3>{p.title}</h3>
              <small>
                {p.type} • {p.location} • {p.year}
              </small>
            </div>
            <div className="specs">
              <span>
                Area: <b>{p.area}</b>
              </span>
              <span>
                Duration: <b>{p.duration}</b>
              </span>
              <span>
                Budget: <b>{p.budget}</b>
              </span>
            </div>
            <div className="more">View case study →</div>
          </article>
        ))}
      </div>

      <div className="see-more">
        <button className="btn btn-primary" onClick={toggleSeeMore}>
          {canSeeMore ? "See more projects" : "See fewer"}
        </button>
      </div>

      {selected && (
        <Modal title={selected.title} onClose={() => setSelected(null)} wide>
          <ProjectDetail project={selected} />
        </Modal>
      )}
    </section>
  );
}
