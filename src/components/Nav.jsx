import { NavLink, useNavigate } from 'react-router-dom';
import { isLoggedIn, clearToken } from '../auth/auth';
import logo from "../assets/logo.png";
import "./Nav.css";

function Nav() {
  const navigate = useNavigate();
  const loggedIn = isLoggedIn();

  const handleLogout = () => {
    clearToken();
    navigate("/");
  };

  return (
    <header>
      <nav>
        <NavLink to="/" className="logo"><img src={logo} alt="Amatsiko Tours" /></NavLink>

        <div className='nav-links'>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/tours">Tours</NavLink>
          <NavLink to="/my-bookings">My Bookings</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          {loggedIn && (
            <button
              type="button"
              className="nav-link-btn"
              onClick={handleLogout}
            >
              Log Out
            </button>
          )}

          {!loggedIn && (
            <>
              <NavLink to="/login" className="nav-link-btn">Log In</NavLink>
              <NavLink to="/register" className="nav-link-btn">Register</NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Nav;