import React from 'react';
import './Gatharing.css';
import ancor from '../../assets/ancor.JPG';
import png2 from '../../assets/png2.jpg';
import shivba from '../../assets/shivba.jpg'
import rada from '../../assets/rada.jpg'
import pic5 from '../../assets/pic5.png'
import dip from '../../assets/dip.jpg'

const Gathering = () => {
  return (
    <div className="collecting">
      <div className="wallpaper-container">
       
        <div className="overlay-text">Welcome to Gathering</div>
      </div>
      <div className="heading">
        <h1>Gatharing Photos</h1>
      </div>
      <div className="parent">
        <div className="child">
        <img src={dip} alt="" />
          </div>
        <div className="child">
          <img src={ancor} alt="Anchor" />
        </div>
        <div className="child">
          <img src={shivba} alt="Example" />
        </div>
        <div className="child">
          <img src={rada} alt="Anchor" />
        </div>
        <div className="child">
          <img src={png2} alt="Example" />
        </div>
        <div className="child">
          <img src={pic5} alt="Anchor" />
        </div>
        {/* <div className="child">
          <img src={ancor} alt="Anchor" />
        </div>
        <div className="child">
          <img src={png2} alt="Example" />
        </div>
        <div className="child">
          <img src={ancor} alt="Anchor" />
        </div>
        <div className="child">
          <img src={png2} alt="Example" />
        </div>
        <div className="child">
          <img src={ancor} alt="Anchor" />
        </div>
        <div className="child">
          <img src={png2} alt="Example" /> */}
      
      </div>
    </div>
  );
};

export default Gathering;
