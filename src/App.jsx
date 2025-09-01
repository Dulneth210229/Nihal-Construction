import React, { useEffect, useState } from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // scroll reveal observer (adds .is-revealed to [data-reveal])
  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("is-revealed")
        ),
      { threshold: 0.1 }
    );
    items.forEach((i) => io.observe(i));
    return () => io.disconnect();
  }, []);

  return (
    <main className="site">
      <Navbar
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <Hero />
      <Services />
      <Projects />
      <Process />
      <About />
      <Testimonials />
      <Partners />
      <FAQ />
      <Contact />
      <section className="cta-banner" data-reveal>
        <p>
          <b>Ready to build?</b> We can mobilize in as little as 14 days.
          <a href="#contact" className="btn btn-primary">
            Start your project
          </a>
        </p>
      </section>
      <Footer />
    </main>
  );
}
