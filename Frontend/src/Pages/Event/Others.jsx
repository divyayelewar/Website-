import React from 'react'
import './Other.css'
import png3 from "../../assets/png3.jpg"
import class4 from '../../assets/class4.jpg'
import class3 from '../../assets/class3.jpg'
import other2 from '../../assets/other2.jpg'
import other3 from '../../assets/other3.jpg'
import Picture from '../../assets/picture.jpg'

const Others = () => {
  return (
    <div className="collecting">
      <div className="wallpaper-container">
             
             <div className="overlay-text">Welcome to Others Photoes </div>
           </div>
          <div className="heading">
            <h1>Others Photoes</h1>
          </div>
    
          <div className="parent">
          <div className="child">
             <div className="img">
             <img src={class3} alt="" />
             </div>
            </div>
            <div className="child">
              <img src={ png3} alt="" />
            </div>
            <div className="child">
                <img src={other3} alt="" />
            </div>
            <div className="child">
                <img src={other2} alt="" />
            </div>
            <div className="child">
                <img src={Picture} alt="" />
            </div>
           
            <div className="child">
                <img src={class4} alt="" />
            </div>
           
          </div>
    
        </div>
           
  )
}

export default Others