
import React from 'react'
import './Banner.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const categories = [
    {
       id:1,
       img:"https://t3.ftcdn.net/jpg/02/65/18/30/240_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg",
       Name:"Kale I.S",
       Education:"b.ed & d.ed",
    },

    {
        id:2,
        img:"https://t3.ftcdn.net/jpg/02/65/18/30/240_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg",
        Name:"Jadhav N.R",
        Education:"b.ed & d.ed",
     }, {
        id:3,
        img:"https://t3.ftcdn.net/jpg/02/65/18/30/240_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg",
        Name:"kamble M.V",
        Education:"b.ed & d.ed",
     },
  
];

const Banner = () => {
    return (
      <div className="staff_container">
         <h1>Our Staff</h1>
      <div className="banner">
       
      {/* //   <Carousel responsive={responsive} className='banner'> */}
            {categories.map((item)=>(
              <div className="banner_box" key={item.id}>
                 <img src={item.img}  />
                 <div className="info">
                 <div className="name">{item.Name}</div>
                 <div className="education">{item.Education}</div>
                 </div>
              </div>
            ))}
        {/* </Carousel> */}
        </div>
        </div>
    )
}

export default Banner
