import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { saveToken } from "../auth/auth";
import "./Login.css";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        const message =
          data.errors?.[0]?.message ||
          data.message ||
          "Registration failed. Please try again.";
        setError(message);
        return;
      }

      saveToken(data.token);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Could not reach the server. Is the backend running?");
    }
  };

  return (
  <section className="login-section">
    <div className="login-box">
      <h1>Register</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          required
          minLength={8}
        />

        {error && (
          <p className="login-error" role="alert">
            {error}
          </p>
        )}

        <button type="submit">Register</button>
      </form>

      <p className="login-register">
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  </section>
);
}

export default Register;