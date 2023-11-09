import React, { useState, useEffect } from 'react';
import "./Login.css";
import { Link } from "react-router-dom";
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import Lock from './lock.png';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user") || '{}');

    if (storageUser?.email) {
      alert("You are already logged in!");
      window.location.href = "./criminalForm";
    }

  }, []);

  const handleLogin = () => {
    if(email==="admin" && password==="admin") {
        alert("Login Success!")
        window.location.href = "./criminalForm";
    }else{
        alert("Login Failure!")
    }
    
  };

  return (
    <div>
      <Navbar />
      <form className="login-form">
        <img src={Lock} className="lock-image" alt="lock" />
        <h1 className='text-center heading'>Login</h1>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button type="button" className="btn login-btn" onClick={handleLogin}>
          Login
        </button>

        <p className="text-right">
          <Link to="/signup">Create a new account?</Link>
        </p>

      </form>
      <Footer />
    </div>

  );
}

export default Login;
