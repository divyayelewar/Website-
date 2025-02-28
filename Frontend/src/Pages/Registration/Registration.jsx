import React, { useState, useEffect } from "react";
import axios from "axios";
import './Registration.css';

 const Registration = () =>{
  // Initial form data state
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "Male",
    email: "",
    phone: "",
    address: "",
    aadhar: "",
    board: "CBSE",
    schoolName: "",
    passingYear: "",
    percentage: "",
    city: "",
    userId: "", // Add userId to the formData
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); // For showing success or error message

  useEffect(() => {
    // Fetch user profile data to get the userId
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:7667/api/users/profile', { withCredentials: true });
        
        if (response.status === 200 && response.data) {
          // Assuming the response contains user details with _id or userId
          setFormData((prevData) => ({
            ...prevData,
            userId: response.data._id, // Add userId to form data
          }));
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setMessage({ type: "error", text: "Failed to fetch user profile." });
      }
    };

    fetchUserProfile();
  }, []);

  // Handle form data change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.dob ||
      !formData.phone ||
      !formData.email ||
      !formData.address ||
      !formData.aadhar ||
      !formData.schoolName ||
      !formData.passingYear ||
      !formData.percentage ||
      !formData.city ||
      !formData.userId // Ensure userId is present
    ) {
      setMessage({ type: "error", text: "Please fill out all required fields!" });
      return;
    }

    setLoading(true);
    try {
      // POST request to the backend API with userId included
      const response = await axios.post(
        'http://localhost:7667/api/course/registration/create/',
        formData
      );
      setLoading(false);

      if (response.status === 200) {
        setMessage({ type: "success", text: "Registration Successful!" });
        setFormData({}); // Reset form data after successful submission
      }
    } catch (error) {
      setLoading(false);
      setMessage({ type: "error", text: "Error occurred. Please try again." });
    }
  };

  return (
    <>
      <div className="register_container">
        <div className="button">
          <div className="Home">Home</div>
          <div className="line"></div>
          <div className="Aboutus">Registration</div>
        </div>
      </div>

      <div className="form_section">
        <form onSubmit={handleSubmit}>
          <h2>Registration Form 2024-2025</h2>

          {message && (
            <div className={`message ${message.type}`}>
              {message.text}
            </div>
          )}

          {/* First Name, Middle Name, Last Name */}
          <div className="form_group">
            <div className="input_box">
              <div className="name">First Name</div>
              <input
                type="text"
                name="firstName"
                placeholder="Enter Your First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="input_box">
              <div className="name">Middle Name</div>
              <input
                type="text"
                name="middleName"
                placeholder="Enter Your Middle Name"
                value={formData.middleName}
                onChange={handleChange}
              />
            </div>
            <div className="input_box">
              <div className="name">Last Name</div>
              <input
                type="text"
                name="lastName"
                placeholder="Enter Your Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* DOB, Gender */}
          <div className="form_group">
            <div className="input_box">
              <div className="name">DOB</div>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
            <div className="input_box">
              <div className="name">Gender</div>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Email, Phone */}
          <div className="form_group">
            <div className="input_box">
              <div className="name">Email</div>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input_box">
              <div className="name">Phone</div>
              <input
                type="text"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Address, Aadhar */}
          <div className="form_group">
            <div className="input_box">
              <div className="name">Address</div>
              <input
                type="text"
                name="address"
                placeholder="Enter Your Address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="input_box">
              <div className="name">Aadhar</div>
              <input
                type="text"
                name="aadhar"
                placeholder="Enter Your Aadhar Number"
                value={formData.aadhar}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Board, School Name */}
          <div className="form_group">
            <div className="input_box">
              <div className="name">Board</div>
              <select name="board" value={formData.board} onChange={handleChange}>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="State">State</option>
              </select>
            </div>
            <div className="input_box">
              <div className="name">School Name</div>
              <input
                type="text"
                name="schoolName"
                placeholder="Enter Your School Name"
                value={formData.schoolName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Passing Year, Percentage */}
          <div className="form_group">
            <div className="input_box">
              <div className="name">Passing Year</div>
              <input
                type="text"
                name="passingYear"
                placeholder="Enter Your Passing Year"
                value={formData.passingYear}
                onChange={handleChange}
              />
            </div>
            <div className="input_box">
              <div className="name">Percentage</div>
              <input
                type="text"
                name="percentage"
                placeholder="Enter Your Percentage"
                value={formData.percentage}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* City */}
          <div className="form_group">
            <div className="input_box">
              <div className="name">City</div>
              <input
                type="text"
                name="city"
                placeholder="Enter Your City"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="button">
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registration;
