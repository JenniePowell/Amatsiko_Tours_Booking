import "./Footer.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
    return (
        <footer className="footer">
            <NavLink to="/" className="footer-logo"><img src={logo} alt="Amatsiko Tours"  />
      </NavLink>

            <p>© 2026 Amatsiko Tours. All rights reserved.</p>
        
        </footer>
    );
}

export default Footer;