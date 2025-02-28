
// export default Picture
import React from 'react'
import './Picture.css'
import flags from '../../assets/flags.jpg'
import lab1 from '../../assets/lab1.jpg'
import labrary from '../../assets/labrary.jpg'
import class1 from '../../assets/class1.jpg'
import class2 from '../../assets/class2.jpg'
 import auditorium from '../../assets/auditorium.jpg'
 
const Picture = () => {
  return (
    <div>
        <div className="heading">
            <h1>college Campus images</h1>
        </div>

        <div className="parent">
           
            <div className="child">
                <img src={flags} alt="" />
                <div className="con_text">
                    <h1>flags Image</h1>
                    <p>Lorem ipsum dolor sit.
                    </p>
                </div>
            </div>
            <div className="child">
                <img src={lab1} alt="" />
            </div>

            <div className="child">
             <img src={labrary} alt="" />
            </div>
            <div className="child">
                <img src={auditorium} alt="" />
            </div>
           
            <div className="child">
                <img src={class2} alt="" />
            </div>
            <div className="child">
                <img src={class1} alt="" />
            </div>    
            
            
        </div>
       
    </div>
  )
}

export default Picture