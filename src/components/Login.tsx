import logo from './logo.svg';
import '../App.css';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
  // React States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    // Prevent page reload
    event.preventDefault();

    // Make API request
    const apiUrl = "https://professionista-ai.com/wp-json/jwt-auth/v1/token";

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response data
        console.log(data);
        if(data.status == 200)
        {
            window.localStorage.setItem("token", data.token);
            navigate("/Main");
        }
        else {
            alert(data.code);
        }
      })
      .catch((error) => {
        // Handle any error that occurs during the API request
        console.error("Error:", error);
      });
  };

  return (
      <div className="login-form">
        <div className="title">Sign In</div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
  );
}

export default Login;
