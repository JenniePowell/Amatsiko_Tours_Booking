import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { saveToken } from "../auth/auth";

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
    <section style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

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
          minLength={8}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Register</button>
      </form>

      <p style={{ marginTop: "1rem" }}>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </section>
  );
}

export default Register;