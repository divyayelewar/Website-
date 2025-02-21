import React, { useState } from "react";
import './Registration.css'

function Admission_Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    aadhar: "",
    board: "",
    schoolName: "",
    passingYear: "",
    percentage: "",
    city: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from refreshing
    console.log("Form Data Submitted: ", formData);
    alert("Registration Successful!");
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
         <div className="text">
           
          
       
    </div>
    <div className="form_section">
      <form onSubmit={handleSubmit}>
        <h2>Registration Form 2024-2025</h2>

        <div className="form_group">
          <div className="input_box">
            <div className="name">First Name</div>
            <input type="text" name="firstName" placeholder="Enter Your First Name" value={formData.firstName} onChange={handleChange}/>
          </div>
          <div className="input_box">
            <div className="name">Middle Name</div>
            <input type="text" name="middleName" placeholder="Enter Your Middle Name" value={formData.middleName} onChange={handleChange}/>
          </div>
          <div className="input_box">
            <div className="name">Last Name</div>
            <input type="text" name="lastName" placeholder="Enter Your Last Name" value={formData.lastName} onChange={handleChange} />
          </div>
        </div>

        <div className="form_group">
          <div className="input_box">
            <div className="name">DOB</div>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
          </div>
          <div className="input_box">
            <div className="name">Gender</div>
            <select name="gender" value={formData.gender} onChange={handleChange} >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="form_group">
          <div className="input_box">
            <div className="name">Mobile Number</div>
            <input type="tel" name="phone"  placeholder="Enter your mobile no."   value={formData.phone}  onChange={handleChange}/>
          </div>
          <div className="input_box">
            <div className="name">Aadhar Number</div>
            <input type="number" name="aadhar" placeholder="Enter your Aadhar no." value={formData.aadhar} onChange={handleChange} />
          </div>
        </div>

        <div className="form_group">
          <div className="input_box">
            <div className="name">School Name</div>
            <input  type="text" name="schoolName" placeholder="Enter your school name" value={formData.schoolName} onChange={handleChange} />
          </div>
          <div className="input_box">
            <div className="name">12th Board</div>
            <select name="board" value={formData.board} onChange={handleChange} >
               <option value="Amravati">Amravati</option>
         <option value="Aurangabad">Aurangabad</option>
         <option value="Ahmednagar">Kokan</option>
      
         <option value="Buldhana">Nashik</option>
         <option value="Beed">Nagpur</option>
         <option value="Bhandara">Pune</option>

            </select>
          </div>
        </div>

        <div className="form_group">
          <div className="input_box">
            <div className="name">12th Percentage</div>
            <input type="number" name="percentage" placeholder="Enter your percentage" value={formData.percentage} onChange={handleChange} />
          </div>
          <div className="input_box">
            <div className="name">Passing Year</div>
            <input  type="date" name="passingYear" value={formData.passingYear} onChange={handleChange}  />
          </div>
        </div>

        <div className="form_group">
          <div className="input_box">
            <div className="name">City</div>
            <select name="city" value={formData.city} onChange={handleChange}
            >
               <option value="Akola">Akola</option>
       <option value="Amravati">Amravati</option>
       <option value="Aurangabad">Aurangabad</option>
       <option value="Ahmednagar">Ahmednagar</option>
     
       <option value="Buldhana">Buldhana</option>
       <option value="Beed">Beed</option>
       <option value="Bhandara">Bhandara</option>
       <option value="Chandrapur">Chandrapur</option>
       <option value="Dhule">Dhule</option>
       <option value="Gadchiroli">Gadchiroli</option>
       <option value="Gondia">Gondia</option>
       <option value="Hingoli">Hingoli</option>
       <option value="Jalna">Jalna</option>
       <option value="Jalgaon">Jalgaon</option>
       <option value="Kolhapur">Kolhapur</option>
       <option value="Latur">Latur</option>
       <option value="Mumbai Suburban">Mumbai Suburban</option>
       <option value="Mumbai city">Mumbai city</option>
       <option value="Nanded">Nanded</option>
       <option value="Nagpur">Nagpur</option>
       <option value="Nandurbar">Nandurbar</option>
       <option value="Nashik">Nashik</option>
       <option value="Osmanabad">Osmanabad</option>
       <option value="Pune">Pune</option>
       <option value="Parbhani">Parbhani</option>
       <option value="Palghar">Palghar</option>
       <option value="Raigad">Raigad</option>
       <option value="Ratnagiri">Ratnagiri</option>
       <option value="Sangli">Sangli</option>
       <option value="Satara">Satara</option>
       <option value="Solapur">Solapur</option>
       <option value="Sindhudurg">Sindhudurg</option>
       <option value="Thane">Thane</option>
       <option value="Wardha">Wardha</option>
       <option value="Yevatmal">Yevatmal</option>



            </select>
          </div>
          <div className="input_box">
            <div className="name">Email</div>
            <input type="email"  name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
          </div>
        </div>

        <div className="form_group">
          <div className="input_box">
            <div className="name">Address</div>
            <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
          </div>
        </div>

        <div className="btton">
          <button type="submit">Submit</button>
        </div>

      </form>
    </div>
    </>
  );
}

export default Admission_Form;