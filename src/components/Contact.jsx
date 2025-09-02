import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "81ccfb88-33b6-4c88-84a7-a42a9879d153");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert("Thanks! We'll be in touch.");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section id="contact" className="section alt" data-reveal>
      <header className="section-head">
        <h2>Contact</h2>
        <p>
          Tell us about your project and we’ll get back within 1 business day
        </p>
      </header>
      <form className="contact" onSubmit={onSubmit}>
        <div className="row">
          <label>
            <span>Name</span>
            <input required placeholder="Your name" type="text" name="name" />
          </label>
          <label>
            <span>Email</span>
            <input
              required
              type="email"
              placeholder="name@example.com"
              name="email"
            />
          </label>
        </div>
        <div className="row">
          <label>
            <span>Phone</span>
            <input
              required
              type="tel"
              placeholder="(+94) 7X XXX XXXX"
              name="contact"
              maxLength={10}
            />
          </label>
          <label>
            <span>Project Type</span>
            <select defaultValue="" name="projectType">
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
            name="message"
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
      {/* <p>{result}</p> */}
    </section>
  );
}
