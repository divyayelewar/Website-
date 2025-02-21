import React from 'react';
import './Footer.css';
import { MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaGooglePlusG, FaPinterestP } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
  return (
    <div className="footer_section">
      <div className="footer_grid">
        <div className="grid_box">
          <h2>Get In Touch</h2>
          <p><FaLocationDot /> 123 Street, Basmath India</p>
          <p><FaPhoneAlt /> +9190876543</p>
          <p><IoMdMail /> mail@gmail.com</p>
          <div className="social_media">
            <Link to="#"><FaFacebookF /></Link>
            <Link to="#"><FaTwitter /></Link>
            <Link to="#"><FaYoutube /></Link>
            <Link to="#"><FaLinkedinIn /></Link>
          </div>
        </div>
        <div className="grid_box">
          <h2>Quick Links</h2>
          <Link to="/about"><MdChevronRight /> About Us</Link>
          <Link to="/Contact"><MdChevronRight /> Contact Us</Link>
          {/* <Link to="/jobs"><MdChevronRight /> Find Job's</Link> */}
          <Link to="/privacy-policy"><MdChevronRight /> Privacy Policy</Link>
          <Link to="/terms"><MdChevronRight /> Terms & Conditions</Link>
        </div>
        <div className="grid_box">
          <h2>Follow Us</h2>
          <Link to="#"><FaFacebookF className="icon" /> Facebook</Link>
          <Link to="#"><FaTwitter className="icon" /> Twitter</Link>
          <Link to="#"><FaYoutube className="icon" /> Youtube</Link>
          <Link to="#"><FaLinkedinIn className="icon" /> LinkedIn</Link>
          <Link to="#"><FaPinterestP className="icon" /> Pinterest</Link>
          <Link to="#"><FaGooglePlusG className="icon" /> Google+</Link>
        </div>
        <div className="grid_box">
          <h2>Newsletter</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, laudantium?</p>
          <div className="search">
            <input type="text" placeholder="Your email" />
            <button className="signup_btn">Signup</button>
          </div>
        </div>
      </div>
      <div className="bottom_footer">
        <div className="left_sect">&copy; Jober.com All Rights Reserved</div>
        <div className="right_sect">
          <Link to="/">Home</Link>
          <div className="line"></div>
          <Link to="/cookies">Cookies</Link>
          <div className="line"></div>
          <Link to="/help">Help</Link>
          <div className="line"></div>
          <Link to="/faqs">FAQs</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
