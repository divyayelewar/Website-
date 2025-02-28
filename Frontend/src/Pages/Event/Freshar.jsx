import React from 'react'
// import './Freshar.css'
import dance2 from '../../assets/dance2.jpg'
import pic1 from '../../assets/pic1.jpg'
import png4 from '../../assets/png4.jpg'
import Wall from '../../assets/back.jpg'
import ancoring from '../../assets/ancoring.jpg'
import freshar from '../../assets/fresher.jpg'

const Freshar = () => {
  return (
    <div className="collecting">
          
     <div className="wallpaper-container">
             
             <div className="overlay-text">Welcome to Freshar's </div>
           </div>
           <div className="heading">
            <h1>Freshar's Photoes</h1>
            
          </div>
          <div className="parent">
            <div className="child">
              <img src={dance2 } alt="" />
            
            </div>
              
            <div className="child">
              <img src={ancoring} alt="" />
            </div>
            
    
            <div className="child">
              <img src={pic1} alt="" />
            </div>
            <div className="child">
              <img src={freshar} alt="" />
            </div>

            
            {/* <div className="child">
              <img src={png4} alt="" />
            </div> */}
          </div>
    
        </div>
    
  )
}

export default Freshar