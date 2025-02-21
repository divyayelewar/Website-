import React from 'react'
import './staff.css'
import { Link } from "react-router-dom";
import { staff } from "./Staff"; // Ensure staff is correctly imported
import { IoIosArrowRoundForward } from "react-icons/io";

const  TeachingStaff = () => {
  return (
    <>
    <div className="main_staff">
    <div className="button">
            <div className="Home">Home</div>
            <div className="line"></div>
            <div className="Aboutus">TeachingStaff</div>
           </div>
    </div>
    <h1>OUR  TEACHING  STAFF</h1>
    <div className="main_box">
        {staff.map((ittem) => (
          <div className="box" key={ittem.id}>
            <div className="box_img">
              <img src={ittem.img} />
            </div>
            <div className="info_box">
              <div className="information">
                <div className="n_ame">Name:</div>
                <div className="staff_name">{ittem.Name}</div>
              </div>

              <div className="information">
                <div className="n_ame">Education:</div>
                <div className="stf_education">{ittem.Education}</div>
              </div>

              <div className="buttonnn">
              <Link to={`/teacher/${ittem.id}`}>
                  <button className="e">
                    Explore <IoIosArrowRoundForward size={22} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default TeachingStaff