import "./Footer.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <NavLink to="/" className="footer-logo">
            <img src={logo} alt="Amatsiko Tours" />
          </NavLink>
          <div className="footer-social">
            <a href="https://www.youtube.com/@amatsiko1" target="_blank" rel="noreferrer" aria-label="YouTube">
              <i className="bi bi-youtube" />
            </a>
            <a href="https://www.linkedin.com/company/amatsiko-tours/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="bi bi-linkedin" />
            </a>
            <a href="https://www.facebook.com/people/Amatsiko-Tours-Ltd/61567331122456/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <i className="bi bi-facebook" />
            </a>
            <a href="https://www.instagram.com/amatsikotours/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="bi bi-instagram" />
            </a>
            <a href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x19dc0dbc6eca36c3:0x31ec1fbcb8b62b3f!12e1?source=g.page.m._&laa=merchant-review-solicitation" target="_blank" rel="noreferrer" aria-label="Google Reviews">
              <i className="bi bi-google" />
            </a>
          </div>
        </div>

       <div className="footer-col">
          <h4>Quick Links</h4>
          <NavLink to="/how-to-book">How To Book</NavLink>
          <NavLink to="/tours">Tours</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
        </div>

        <div className="footer-col">
          <h4>Contact information</h4>
          <p>
            <a href="tel:+256777476944">+256 777 476944</a>
          </p>
          <p>
            <a href="mailto:info@amatsikotours.com">info@amatsikotours.com</a>
          </p>
          <p>Kicollege Street, Kabale, Uganda</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Amatsiko Tours. All rights reserved. Created by Martin, Dee & Jennie</span>
      </div>
    </footer>
  );
}

export default Footer;
