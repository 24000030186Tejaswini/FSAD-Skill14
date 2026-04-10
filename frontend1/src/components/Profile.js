import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const username = localStorage.getItem("user");

  useEffect(() => {
    if (!username) {
      navigate("/");
    }

    axios.get(`http://localhost:8080/api/user/${username}`)
      .then(res => setUser(res.data));
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Profile</h2>

      <p><b>Username:</b> {user.username}</p>
      <p><b>Email:</b> {user.email}</p>

      <button onClick={() => navigate("/home")}>Home</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;