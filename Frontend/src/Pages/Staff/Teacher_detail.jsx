import React from 'react'
import { useParams } from "react-router-dom";
import './teacher_detail.css'
import { staff } from "./Staff";
import { FaRegUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const Teacher_detail = () => {
    let { id } = useParams();

    const teacher = staff.find(staff => staff.id === parseInt(id));
     
      return (
        <>
        <div className="wallpaper">
      <div className="text">
           <h1></h1>
           <div className="button">
            <div className="Home">Home</div>
            <div className="line"></div>
            <div className="Aboutus">Teachers Details</div>
           </div>
           </div>
           
        </div>
        <div className="Teachers_Details">
        <div className="left_poster">
          <img src={teacher.img} alt="" />
        </div>
          <div className="teacher_info">
            <h2>Teacher Details</h2>
            <div className="title"> {teacher.Name || "Teacher Not Found"}</div>
            <div className="role"><FaRegUser color="blue"/>  {teacher.Role}</div>
            <div className="rate_review">
              <div className="review">Reviews - 999 </div>
              <div className="rate"><FaStar  color="green"/> 4.0</div>
            </div>
            <h2>Education</h2>
             <div className="educ">
             <div className="edu"><FaBookOpen/> {teacher.Education}</div>
             <div className="exp"><FaBriefcase /> {teacher.Exprience}</div>
             </div>
            <h2>Subjects</h2>
            <div className="subject_grid">
              {
                teacher.subject.map((item,indx)=>{
                  return(
                    <div className="tag">{item.sub}</div>
                  )
                })
              }
            </div>
            <h2>Contact Details</h2>
            <div className="flex_div">
              <div className="contact"> <FaPhoneAlt size={15} color="blue" /> {teacher.Mobile_no}</div>
              <div className="email"><MdEmail size={20} color="blue" /> {teacher.Email}</div>
            </div>
          </div>
        </div>
    
    </>
      );
    };

export default Teacher_detail;