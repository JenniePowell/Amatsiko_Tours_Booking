import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";

function Register() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const location = useLocation();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect({
        authorizationParams: { screen_hint: "signup" },
        appState: { returnTo: location.state?.from?.pathname || "/" },
      });
    }
  }, [isLoading, isAuthenticated, loginWithRedirect, location]);

  return (
    <section style={{ maxWidth: "400px", margin: "40px auto", textAlign: "center" }}>
      <p className="auth-loading">Redirecting...</p>
    </section>
  );
}

export default Register;
