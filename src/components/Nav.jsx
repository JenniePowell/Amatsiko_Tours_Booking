import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import logo from "../assets/logo.png";
import "./Nav.css";

function Nav() {
  const { isAuthenticated, isLoading, user, logout } = useAuth0();

  return (
    <header>
      <nav>
        <NavLink to="/" className="logo"><img src={logo} alt="Amatsiko Tours" /></NavLink>

        <div className='nav-links'>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/tours">Tours</NavLink>
          <NavLink to="/my-bookings">My Bookings</NavLink>

          {!isLoading && isAuthenticated && (
            <>
              <span className="nav-user">{user?.name}</span>
              <button
                type="button"
                className="nav-link-btn"
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              >
                Log Out
              </button>
            </>
          )}

          {!isLoading && !isAuthenticated && (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Nav;