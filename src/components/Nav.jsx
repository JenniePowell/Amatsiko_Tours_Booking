import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";
import "./Nav.css";

function Nav() {
  return (
    <header>
      <nav>
        <NavLink to="/" className="logo"><img src={logo} alt="Amatsiko Tours" /></NavLink>

        <div className='nav-links'>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/tours">Tours</NavLink>
          <NavLink to="/my-bookings">My Bookings</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Nav;