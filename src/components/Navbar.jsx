import React from "react";
import logo from "../images/logo.png";

export default function Navbar({ mobileNavOpen, setMobileNavOpen }) {
  return (
    <header className="nav">
      <a href="#home" className="brand">
        {/* <span span className="brand-mark" aria-hidden></span> */}
        <img src={logo} style={{ width: "2rem" }}></img>
        Nihal
        <span>Construction</span>
      </a>
      <button
        aria-label="Toggle navigation"
        className={`hamburger ${mobileNavOpen ? "is-open" : ""}`}
        onClick={() => setMobileNavOpen((s) => !s)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        className={`links ${mobileNavOpen ? "open" : ""}`}
        onClick={() => setMobileNavOpen(false)}
      >
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#process">Process</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
