import React from 'react';
import { Link } from 'react-router-dom';
import './Farewell.css';
import image1 from '../../assets/image1.jpg'; 
import pic1 from '../../assets/pic1.jpg'

const Farewell = () => {
  return (
    <div className="collecting">
      <div className="wallpaper-container">
        <div className="overlay-text">Welcome to Farewell</div>
      </div>

      <div className="heading">
        <h1>Farewell Photos</h1>
      </div>

      <div className="parent">
        <div className="child">
          <Link to={`/image/${encodeURIComponent(pic1)}`}>
            <img src={pic1} alt="Anchor" />
          </Link>
        </div>
      <div className="child">
        <img src={image1} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Farewell;
