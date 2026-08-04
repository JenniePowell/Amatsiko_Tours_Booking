import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { saveToken } from "../auth/auth";
import "./Login.css";


function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed. Please try again.");
        return;
      }

      saveToken(data.token);
      navigate(redirectTo);
    } catch (err) {
      console.error(err);
      setError("Could not reach the server. Is the backend running?");
    }
  };

  return (
    <section className="login-section">
  <div className="login-box">
    <h1>Log In</h1>

    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {error && (
        <p className="login-error" role="alert">
          {error}
        </p>
      )}

      <button type="submit">Log In</button>
    </form>

    <p className="login-register">
      Don&apos;t have an account? <Link to="/register">Register</Link>
    </p>
  </div>
</section>
  );
}

export default Login;