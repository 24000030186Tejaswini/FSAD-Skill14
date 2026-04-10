import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      <h2>Home Page</h2>
      <h3>Welcome, {user} 👋</h3>

      <button onClick={() => navigate("/profile")}>Profile</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;