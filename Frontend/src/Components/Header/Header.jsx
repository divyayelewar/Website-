import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import mit from '../../assets/mit.png'
import { MdOutlineMenu } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

import { BsFillCartFill } from "react-icons/bs";
import { FiShoppingCart } from 'react-icons/fi'
import { FaRegUser,FaRegAddressBook  } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";``
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa6";


const Header = () => {
   const [sticky, setSticky] = useState(false);
   useEffect(() => {
     window.addEventListener('scroll', () => {
       window.scrollY > 50 ? setSticky(true) : setSticky(false);
     })
   }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
   const toggleMenu = () => {
     mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
   }
   const [isEventOpen, setIsEventOpen] = useState(false);
   const [isStaffOpen, setIsStaffOpen] = useState(false);
 

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <div className="name">
        <img src={mit} alt="" className='logo' />

        <div className="text">
          <p className="college">MIT College</p>
          <p className="location">Basmath</p>
        </div>
      </div>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to="/">Home</Link></li>
        {/* <li> <Link to="/about"> About us</Link></li> */}
        <li>
        <div className="nav_con">
        <Link>About us < RiArrowDropDownLine size={35}  /></Link>
        </div>
        <div className="About_box">
          <Link to="/about">About</Link>
          <Link to="/freecoures">FreeCourses</Link>
          <Link to="/paper_pdf">paper pdf</Link>
          {/* <Link to="/syllabus">Syllabus</Link>   */}
          <Link to="/result">Result</Link>
          <Link to="/facility">facility</Link>
        </div>
        </li>
        <li><Link to="/registration">Ragistration</Link></li>
        <li>
        <div className="nav_con">
        <Link>Event < RiArrowDropDownLine size={35}  /></Link>
        </div>
          <div className="Event_box">
            <Link to="/gathering">Gathering</Link>
            <Link to="/freshar">Freshar's</Link>
            <Link to="/farewell">Farewell</Link>
            <Link to="/other">Others</Link>
            
          </div>
        </li>
        <li>
        <div className="nav_con">
        <Link>Staff< RiArrowDropDownLine size={35}  /></Link>
        </div>
          <div className="Staff_box">
            <Link to="/teachingStaff">Teaching Staff</Link>
            <Link to="/nonTeachingStaff">NonTeaching Staff </Link>
           </div>

        </li>
        <li>
           <div className="cont_act">
        <Link to="/Contact"><FaPhoneVolume size={15} color='blue'/>  Contact us</Link>

           </div>
        </li>
         
       
         

      </ul>

      <div className="profile">
           
           <div className="image">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg" alt="" />
            </div>
         
          <div className="details">
            <div className="name">hii Divya</div>
             <div className="text">My Account</div>
          </div>
          
           
         <div className="account_box">
          <Link to="/login">Login</Link>
          <div className="list"><FaRegUser/> Profile</div>
         
          <div className="list"><FaRegAddressBook />Saved Address</div>
         
          <div className="hr"></div>
          <div className="list orange"><RiLogoutBoxRLine/>Logout</div>
         </div>
          </div>
      <MdOutlineMenu className="menu-icon" size={40} color="white" onClick={toggleMenu} />
    </nav>
  )
}



export default Header



