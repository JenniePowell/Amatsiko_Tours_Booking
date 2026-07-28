import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, useLocation } from 'react-router-dom';

// Guards a route: while Auth0 is checking the session, show nothing (or a
// loader). If the user isn't logged in, bounce them to /login and remember
// the page they were trying to reach so Login/Register can send them back.
function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth0();
  const location = useLocation();

  if (isLoading) {
    return <p className="auth-loading">Loading...</p>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;
