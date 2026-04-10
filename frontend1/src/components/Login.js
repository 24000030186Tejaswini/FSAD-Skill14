import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post("http://localhost:8080/api/login", {
      username,
      password
    })
    .then(res => {
      // ✅ extra safety check
      if (res.data && res.data.username) {
        localStorage.setItem("user", res.data.username);
        navigate("/home");
      } else {
        alert("Invalid credentials");
      }
    })
    .catch(() => {
      alert("Invalid credentials");
    });
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p><Link to="/register">Go to Register</Link></p>
    </div>
  );
}

export default Login;