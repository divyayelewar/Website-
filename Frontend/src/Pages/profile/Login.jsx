// import React, { useState } from 'react';
// import './pro.css'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', formData);
//       localStorage.setItem('token', response.data.token);
//       alert('Login successful!');
      
//       navigate('/dashboard');
//     } catch (err) {
//       alert(err.response?.data?.msg || 'Login failed');
//     }
//   };

//   return (
//     <div className="form-container">
//       <button className="close-btn" onClick={onClose}>✖</button>
        
//         {error && <p className="error-message">❌ {error}</p>}
//       <h2 className='l'>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//         <button type="submit" >Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;












import React, { useState } from "react";
import './Login.css';

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors

    try {
      const response = await fetch("http://localhost:7667/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Only sending email and password
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.name); // Store user's name
        alert(`✅ Welcome, ${data.name}! Login Successful.`);
        onClose();
      } else {
        setError(data.msg || "Invalid email or password");
      }
    } catch (error) {
      console.error("❌ Login Error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-popup">
      <div className="login-box">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Login</h2>
        {error && <p className="error-message">❌ {error}</p>}
        <form onSubmit={handleLogin}>
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
          <button type="submit" className="login-btn" disabled={loading || !email || !password}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;