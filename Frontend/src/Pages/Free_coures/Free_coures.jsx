import React from 'react';
import './Free_coures.css';
import { HiOutlineUsers } from "react-icons/hi2";
import { FcLike } from "react-icons/fc";
import { Link } from 'react-router-dom';



const courses = [
  {
    id: 1,
    CourseName: "Java",
    img: "https://kvch.in:859/uploads/1733993607521-java_full_stack_development_course.webp",
   
    
    like:25,
    user:75,
  },
  {
    id: 2,
    CourseName: "Python",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0O5vslvPjLxhZipJqxdR_a2mBE7f3fQoP4DFZroef8nN1ISjcArlaRfT7EE6QpNOwS8&usqp=CAU",
    like:34,
    user:67,
  },
  {
    id: 3,
    CourseName: "Oracle",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdh3kzZzQUxhYC06S88bF-lXyonvv62i1TB8sWEPzDuxfX8iSqQ8btjOSBLKssxm5sMI8&usqp=CAU",
    like:29,
    user:48,
  },
  {
    id: 4,
    CourseName: "AI",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxm1tS0g9qbhuHCitP0mpY3fRiAmLlAU8zw&s",
    like:15,
    user:55,
  },
  {
    id: 5,
    CourseName: "HTML",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUgdDWCZtoif5bdJmw-DIoDHdtfNcVc0cQj5AUqs8hwLyH4J4Dem1htd53ieh4rAY5Dy0&usqp=CAU",
    like:23,
    user:50,
  },
  {
    id: 6,
    CourseName: "CSS",
    img: "https://img-c.udemycdn.com/course/240x135/1561458_7f3b_2.jpg",
    like:18,
    user:80,
  },
  {
    id: 7,
    CourseName: "Advanced Java",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeo1uoyb6oQS7eePlZNsnk0W_4aB-AbcQ9A&s",
    like:10,
    user:80,
  },
];

const FreeCourses = () => {
  return (
    <>
   <div className="wallpaper">
             
             <div className="overlay-text"> </div>
           </div>
    <div className="main_cont">
      <div className="heading">
        <h1>Free Courses</h1>
      </div>
      <div className="class-list">
        {courses.map((item) => (
          <div className="class-item" key={item.id}>
            
            <div className="class-image">
              
              <Link to='/javacode'><img src={item.img} /></Link>
            </div>
            <div className="info">
              <div className="class-name">Name: {item.CourseName}</div>
              <div className="text-data">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Aspernatur fugiat dolor commodi eligendi sint.
              </div>
              <div className="icons">
              <div className="user"><HiOutlineUsers size={17}/>  {item.user}</div>
              <div className="like"><FcLike  />   {item.like}</div>
             
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default FreeCourses;