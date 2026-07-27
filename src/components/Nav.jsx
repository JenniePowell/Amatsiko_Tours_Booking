import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <header>
      <nav>
        <NavLink to="/">Amatsiko Tours</NavLink>

        <div>
          <NavLink to="/">Tours</NavLink>
          <NavLink to="/my-bookings">My Bookings</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Nav;