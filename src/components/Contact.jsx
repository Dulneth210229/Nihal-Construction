import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section alt" data-reveal>
      <header className="section-head">
        <h2>Contact</h2>
        <p>
          Tell us about your project and we’ll get back within 1 business day
        </p>
      </header>
      <form
        className="contact"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thanks! We'll be in touch.");
        }}
      >
        <div className="row">
          <label>
            <span>Name</span>
            <input required placeholder="Your name" />
          </label>
          <label>
            <span>Email</span>
            <input required type="email" placeholder="name@example.com" />
          </label>
        </div>
        <div className="row">
          <label>
            <span>Phone</span>
            <input required type="tel" placeholder="(+94) 7X XXX XXXX" />
          </label>
          <label>
            <span>Project Type</span>
            <select defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Industrial</option>
              <option>Renovation</option>
            </select>
          </label>
        </div>
        <label className="full">
          <span>Message</span>
          <textarea
            rows={5}
            placeholder="Tell us about scope, site, timeline, budget…"
          />
        </label>
        <div className="cta">
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
