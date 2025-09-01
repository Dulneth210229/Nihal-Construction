import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero" data-reveal>
      <div className="hero-deco" aria-hidden>
        <i className="spark s1" />
        <i className="spark s2" />
        <i className="spark s3" />
      </div>
      <div className="hero-inner">
        <div className="badge">Since ’98</div>
        <h1>
          Building the <span className="highlight">future</span>
          <br />
          with a <em>retro</em> soul
        </h1>
        <p className="lead">
          We deliver residential, commercial, industrial, and renovation
          projects across Sri Lanka— on time, safely, and with character.
        </p>
        <div className="cta">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-ghost">
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
