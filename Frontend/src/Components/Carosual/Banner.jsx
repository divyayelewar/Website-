import React from 'react';
import './Banner.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Import images
import jadhammam from '../../assets/jadhavmam.jpg';
import kulkarni_sir from '../../assets/kulkarni_sir.jpg';
import kamble from '../../assets/kamble.jpg'

const categories = [
    {
       id: 1,
       img: jadhammam,  
       Name: "Jadhav N.R",
       Education: "b.ed & d.ed",
    },
   
    {
        id: 2,
        img: kamble,  
        Name: "Kamble M.V",
        Education: "b.ed & d.ed",
     },
     {
        id: 3,
        img: kulkarni_sir, 
        Name: "Kulkarni A.S",
        Education: "b.ed & d.ed",
     },
];

const Banner = () => {
    return (
        <div className="staff_container">
            <h1>Our Staff</h1>
            <div className="banner">
                {categories.map((item) => (
                    <div className="banner_box" key={item.id}>
                        <img src={item.img} alt={item.Name} />
                        <div className="info">
                            <div className="name">{item.Name}</div>
                            <div className="education">{item.Education}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;
