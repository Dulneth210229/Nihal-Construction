import React from "react";

export default function Footer() {
  return (
    <footer className="footer pro-footer" id="footer">
      <div className="wave" aria-hidden>
        <div className="wave1" />
        <div className="wave2" />
        <div className="wave3" />
      </div>
      <div className="foot-inner">
        <div className="foot-col brand-col">
          <div className="brand-mini">▩ RetroBuild</div>
          <p>
            RetroBuild is a full-service construction company delivering
            residential, commercial, and industrial projects across Sri Lanka.
            Since 1998 we’ve built with character, safety, and quality.
          </p>
          <div className="badges">
            <span className="badge">ISO 9001</span>
            <span className="badge">ISO 14001</span>
            <span className="badge">ISO 45001</span>
          </div>
        </div>
        <div className="foot-col">
          <h4>Quick Links</h4>
          <nav>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="foot-col">
          <h4>Services</h4>
          <ul className="foot-list">
            <li>Residential Builds</li>
            <li>Commercial Fit-outs</li>
            <li>Industrial & Civil</li>
            <li>Renovations & Heritage</li>
            <li>Design–Build (EPC)</li>
          </ul>
        </div>
        <div className="foot-col">
          <h4>Contact</h4>
          <address>
            221 Galle Road, Colombo 04
            <br />
            (+94) 11 2 345 678
            <br />
            info@retrobuild.lk
            <br />
            Mon–Fri 8:30–17:30
          </address>
          <div className="social">
            <a href="#" aria-label="Facebook">
              📘
            </a>
            <a href="#" aria-label="LinkedIn">
              💼
            </a>
            <a href="#" aria-label="Instagram">
              📸
            </a>
            <a href="#" aria-label="YouTube">
              ▶️
            </a>
          </div>
        </div>
        <div className="foot-col">
          <h4>Newsletter</h4>
          <p>Get quarterly updates on projects, insights, and openings.</p>
          <form
            className="newsform"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed!");
            }}
          >
            <input
              type="email"
              required
              placeholder="name@example.com"
              aria-label="Email address"
            />
            <button className="btn btn-primary" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="foot-bottom">
        <small>
          © {new Date().getFullYear()} RetroBuild Construction Co. All rights
          reserved.
        </small>
        <nav className="policy">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">SLA</a>
        </nav>
      </div>
    </footer>
  );
}
