import React from "react";
import './Facilities.css'
import wifi from "../../assets/wifi.jpg";
import fac_library from '../../assets/fac_library.jpg'
import auditorium from '../../assets/auditorium.jpg'
import fac_computer from '../../assets/fac_computer.jpg'
import canteen from '../../assets/canteen.jpg'
import student_with_lap from '../../assets/student_with_lap.jpg'

const Facilities = () => {
  return (
    <>
    <div className="cintainer_box">
    <div className="text">
           <h1></h1>
           <div className="button">
            <div className="Home">Home</div>
            <div className="line"></div>
            <div className="Aboutus">Facilities</div>
           </div>
           
        </div>
    </div>

    <div className="Facilities">
      <div className="main_left_facility">
        <h1>Our Facilities</h1>

        <div className="main_description">Special wedding garments are often worn, and the ceremony is sometimes followed by a wedding reception. Music, poetry.</div>
      </div>

     {/* -----------flex---------------- */}
     
       <div className="facility_flex">
            <div className="sub_left_fac">
            <div className="sub_left_facility">
        <div className="facility_logo">
          <img src={wifi} alt="" />
        </div>

        <div className="facility_name">wifi</div>

        <div className="sub_description">
      Wifi. In order to encourage and promote the use of technology in the twin processes of teaching and learning, our college provides free and high speed Wi-Fi 
      </div>
      </div>

      


      {/* ---------------------- */}

      <div className="sub_left_facility">
        <div className="facility_logo">
          <img src={fac_library} alt="" />
        </div>

        <div className="facility_name">Library</div>

        <div className="sub_description">
      Library and Information Science are two interconnected disciplines that deal with information management. This includes organization
      </div>
      </div>

      

{/* ------------------------ */}

<div className="sub_left_facility">
        <div className="facility_logo">
          <img src={auditorium} alt="" />
        </div>

        <div className="facility_name">Auditorium</div>
        <div className="sub_description">
      AUDITORIUM. The College has a full fledged and attractive auditorium used for conducting seminars, workshops, training programmes, meetings, small functions
      </div>
      </div>

      



      <div className="sub_left_facility">
        <div className="facility_logo">
          <img src={fac_computer} alt="" />
        </div>

        <div className="facility_name">Computer Lab</div>
        <div className="sub_description">
      COMPUTER LAB. Our computer lab provides the students as well as faculty 
      with high bandwidth internet speed thereby making them proficient in keeping
      </div>
      </div>

      



      <div className="sub_left_facility">
        <div className="facility_logo">
          <img src={canteen} alt="" />
        </div>

        <div className="facility_name">Canteen</div>

        <div className="sub_description">
      CANTEEN. The College has a well equipped in-house subsidised Canteen. 
      It provides a variety of snacks, refreshments and lunch to Students and Staff
      </div>
      </div>


      <div className="sub_left_facility">
        <div className="facility_logo">
          <img src={canteen} alt="" />
        </div>

        <div className="facility_name">Academics Facility</div>

        <div className="sub_description">
        ACADEMICS FACILITIES plays a broader part in choosing the college. 
        When our parents and guardian decides to choose an institution for us, they seek academics
      </div>
      </div>

      

      


            </div>
      

      {/* --------------right section--------------------- */}
      <div className="right_facility">
       <img src={student_with_lap} alt="" />
      </div>
      </div>
    </div>
    </>
  );
};

export default Facilities;