import React, { useState } from "react";
import axios from "axios";
import './pro.css'; // Make sure your CSS is in place

const Signup = ({ onClose }) => {
  // State for storing form input data
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // Handle form submission
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors

    try {
      const response = await axios.post("http://localhost:7667/api/auth/signup", {
        name, 
        surname, 
        email, 
        password
      });

      setSuccess("Account created successfully! You can now log in.");
      setTimeout(() => {
        onClose(); // Close the signup form after success
      }, 2000);
    } catch (error) {
      console.error("❌ Signup Error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Failed to create an account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-popup">
      <div className="signup-box">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Sign Up</h2>
        
        {/* Show error message */}
        {error && <p className="error-message">❌ {error}</p>}
        
        {/* Show success message */}
        {success && <p className="success-message">✅ {success}</p>}
        
        {/* Signup Form */}
        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Surname</label>
            <input
              type="text"
              placeholder="Enter your surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            className="signup-btn" 
            disabled={loading || !name || !surname || !email || !password}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
