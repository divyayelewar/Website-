import React, { useRef, useState } from 'react'
import './Contact.css'
import  emailjs from 'emailjs-com'
import { IoLocationOutline } from "react-icons/io5";
import { MdPhoneIphone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";



const Contact = () => {
const form = useRef();

    const [formData, setFormData] = useState({
      user_name: "",
       user_surname: "",
      user_email: "",
     user_message: "",
     user_number:""
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_fptkdco",
          "template_atkjde8",
          form.current,
         
          "m2GZDKk_oUMLG0ke0"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.error(error.text);
            alert("Failed to send message. Please try again.");
          }
        );
  
      e.target.reset(); // Reset form fields
      setFormData({ user_name: "",user_surname:"", user_email: "",user_number:"", user_message: "" }); // Reset state
    };

    
  return (
    <>
    <div className="map_container">
    <div className="button">
            <div className="Home">Home</div>
            <div className="line"></div>
            <div className="Aboutus">Contact</div>
           </div>
           
    <div className="text">
           <h1> Get on Touch</h1>
          
        </div>
       </div>

       <div class="main-containerr">
  <div class="info-item">
   <div className="icons"> < IoLocationOutline  size={40}/></div>
    <span class="location"> Mit College</span>
   <div className="location_t">
   202 Mainstreet,<br/> 2nd Floor
   New complex, NY 10013.
   </div>
  </div>
  <div class="info-item">
   <div className="icons"> <MdPhoneIphone size={40}/></div>
    <span class="location"> Let's Talk</span>
    <div className="location_t">
    Phone: (+44) 123 456 789<br/>
    Fax: 123 456 789
    </div>
  </div>
  <div class="info-item">
   <div className="icons"> <TfiEmail size={40}/></div>
    <span class="location">  E-mail Us</span>
   <div className="location_t">
   info@yourdomain.com<br/>
   hr@yourdomain.com
   </div>
  </div>
</div>




       <h1>Send your message</h1>
    <div className="form_container">
   
    
    <form ref={form} onSubmit={sendEmail} >
   
      <div className="form_group">
        
        <div className="input_box">
          <div className="name">Name</div>
          <input type="text" name="from_name" id="from_name" placeholder="Enter your name" value={formData.from_name} onChange={handleChange} required />
        </div>
         <div className="input_box">
        <div className="name">Surname</div>
        <input type="text" name="user_surname" id="user_surname" placeholder="Enter your Surname" value={formData.user_surname} onChange={handleChange} required />
        </div> 
      </div>
      <div className="form_group">
        <div className="input_box">
          <div className="name">Email</div>
          <input type="email" name="user_email" id="user_email" placeholder="Enter your email" value={formData.user_email} onChange={handleChange} required />
        </div>
       <div className="input_box">
          <div className="name">Mobile</div>
          <input type="number" name="user_number" id="user_number" placeholder="Enter your Number" value={formData.user_number} onChange={handleChange} required />

        </div> 
      </div>
     <div className="form_group">
        <div className="input_box">
          <div className="name">Message</div>
          <textarea name="user_message" id="user_message" placeholder="Write your message" value={formData.user_message} onChange={handleChange} required rows="5" ></textarea>
        </div>
      </div>
      
      <button type="submit"  >  Send </button>
    </form> 
    </div>
    <div className="map">
      <h1>MIT COLLEGE OF<br></br> COMPUTER SCIENCE & IT BASMTH </h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.978826011805!2d77.15196917259813!3d19.326725081930157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd032f3426fcae1%3A0x3cb490cd418eaea5!2sMIT%20COLLEGE%20OF%20COMPUTER%20SCIENCE%20%26%20IT%20BASMTH%20BCA%20%26%20BSc(CS)!5e0!3m2!1sen!2sin!4v1738242595400!5m2!1sen!2sin" width="100%" height="650"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </>
  
  )
}

export default Contact