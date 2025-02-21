import React from 'react';
import './Courses.css';
import degree2 from '../../assets/degree2.jpg';
import courses1 from '../../assets/courses1.jpg';
import courses3 from '../../assets/courses3.jpg'
import { useNavigate } from 'react-router-dom';


const Courses = () => {
  const  navigate = useNavigate();
  const handleExplore = () =>{
    navigate('/syllabus')
  }
  return (
    <>
      {/* Heading Section */}
      <div className="heading">
        <img src={degree2} alt="Background" />
        <h1>COURSES WE OFFER</h1>
      </div>

      {/* Main Courses Container */}
      <div className="courses-container">
        
        {/* Course 1: BCA */}
        <div className="course-item">
          <div className="course-content">
            {/* Image Section */}
            <div className="image-container">
              <img src={courses1} alt="BCA Course" />
            </div>

            {/* Text Section */}
            <div className="course-info">
              <h2>Bachelor of Computer Applications (BCA)</h2>
              <p>
                The BCA program is a three-year undergraduate course designed to
                provide students with foundational knowledge in computer science and
                applications. It covers programming, database management, networking,
                and web development.
              </p>
              <p><strong>Duration:</strong> 3 Years</p>
              <p><strong>Eligibility:</strong> 10+2 with Mathematics</p>
              <button onClick={handleExplore}>Explore more</button>
             
            </div>
          </div>
        </div>

        {/* Course 2: BCS */}
        <div className="course-item">
          <div className="course-content">
            {/* Image Section */}
            <div className="image-container">
              <img src={courses3}alt="BCS Course" />
            </div>

            {/* Text Section */}
            <div className="course-info">
              <h2>Bachelor of Computer Science (BCS)</h2>
              <p>
                The BCS program focuses on advanced computer science topics, including
                algorithms, data structures, software engineering, and artificial
                intelligence. It is ideal for students aiming for a career in
                technology and research.
              </p>
              <p><strong>Duration:</strong> 3 Years</p>
              <p><strong>Eligibility:</strong> 10+2 with Science</p>
              <button onClick={handleExplore}>Explore more</button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Courses;
