import React, { useEffect, useState } from "react";

export default function ProjectDetail({ project }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight")
        setIndex((i) => (i + 1) % project.images.length);
      if (e.key === "ArrowLeft")
        setIndex(
          (i) => (i - 1 + project.images.length) % project.images.length
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project.images.length]);

  return (
    <div className="project-detail">
      <div className="big-gallery">
        <div className="hero-shot">
          <button
            className="nav prev"
            aria-label="Previous image"
            onClick={() =>
              setIndex(
                (i) => (i - 1 + project.images.length) % project.images.length
              )
            }
          >
            ‹
          </button>
          <img
            src={project.images[index]}
            alt={`${project.title} image ${index + 1}`}
          />
          <button
            className="nav next"
            aria-label="Next image"
            onClick={() => setIndex((i) => (i + 1) % project.images.length)}
          >
            ›
          </button>
        </div>
        <div className="thumbs" role="tablist">
          {project.images.map((src, i) => (
            <button
              key={i}
              className={`thumb ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              role="tab"
              aria-selected={i === index}
              aria-label={`Show image ${i + 1}`}
            >
              <img src={src} alt="thumbnail" />
            </button>
          ))}
        </div>
      </div>

      <article className="brief">
        <header>
          <h4>Project Brief</h4>
          <p className="summary">{project.summary}</p>
        </header>

        <div className="facts">
          <dl>
            <dt>Type</dt>
            <dd>{project.type}</dd>
            <dt>Client</dt>
            <dd>{project.client}</dd>
            <dt>Location</dt>
            <dd>{project.location}</dd>
            <dt>Area</dt>
            <dd>{project.area}</dd>
          </dl>
          <dl>
            <dt>Duration</dt>
            <dd>{project.duration}</dd>
            <dt>Year</dt>
            <dd>{project.year}</dd>
            <dt>Budget</dt>
            <dd>{project.budget}</dd>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </dl>
        </div>

        <div className="cols">
          <div>
            <h5>Scope</h5>
            <ul className="ticks compact">
              {project.scope.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Team & Compliance</h5>
            <ul className="ticks compact">
              <li>Architect: {project.architect}</li>
              <li>Engineer: {project.engineer}</li>
              <li>Contract: {project.contractType}</li>
              <li>HSE KPI: {project.hse}</li>
            </ul>
          </div>
        </div>

        <div>
          <h5>Outcomes</h5>
          <ul className="ticks compact">
            {project.outcomes.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
