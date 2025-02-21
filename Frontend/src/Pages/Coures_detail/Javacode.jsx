import React, { useState } from 'react';
import './java.css';
import { CiUser } from "react-icons/ci";
import { BiLoaderAlt } from "react-icons/bi";
import { LiaLanguageSolid } from "react-icons/lia";
import { BsStopwatch } from "react-icons/bs";
import { FaBook } from "react-icons/fa6";
import { FaRegKeyboard } from "react-icons/fa";

const Javacode = () => {
  const [activeTab, setActiveTab] = useState("Information");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="wallpaper-cont">
        <div className="overlay-text">Course Detailes</div>
      </div>

      <div className="h2">
        <h2> programming for beginners</h2>
      </div>

      <div className="detail_coures">
        <div className="detail_img">
          <img src="https://kvch.in:859/uploads/1733993607521-java_full_stack_development_course.webp" alt="" />
        </div>
        <div className="feature_coures">
          <h4>Free Course Details</h4>
          <div className="line"></div>
          <div className="student"><CiUser size={25} color='green' /> Student: 50</div>
          <div className="Lessons"><BiLoaderAlt size={25} color='green' /> Lessons: 10</div>
          <div className="Language"><LiaLanguageSolid size={25} color='green' /> Language: English</div>
          <div className="Prerequisites"><BsStopwatch size={25} color='green' /> Prerequisites: No</div>
          <div className="Course_Capacity"><FaBook size={25} color='green' /> Course Capacity: 15</div>
          <div className="Start_Courses"><FaRegKeyboard size={25} color='green' /> Start Courses: 01/03/2025</div>
        </div>
      </div>

      <div className="info_review">
        <div className="tabs">
          <div
            className={`tab ${activeTab === 'Information' ? 'active' : ''}`}
            onClick={() => handleTabChange('Information')}
          >
            Information
          </div>
          <div
            className={`tab ${activeTab === 'Curriculum' ? 'active' : ''}`}
            onClick={() => handleTabChange('Curriculum')}
          >
            Curriculum
          </div>
          <div
            className={`tab ${activeTab === 'Review' ? 'active' : ''}`}
            onClick={() => handleTabChange('Review')}
          >
            Review
          </div>
        </div>

        <div className="content">
          {activeTab === 'Information' && (
            <div className="Information">
               <div className="lin"></div>
              <div className="main_information">
                <div className="statement">Course Information</div>
                <div className="para">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                  <br />
                  rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  <br /> aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </div>
                <div className="key_pont">
                  <li>Sadipisci velit, sed quia non numquam eius.</li>
                  <li>Imoditempora incidunt ut labore et dolore magnam.</li>
                  <li>Exercitation ullamco laboris nisi ut aliquip consequat. </li>
                  <li>Sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Curriculum' && (
            <div className="Curriculum">
              <div className="lin"></div>
              <div className="main_information">
                <div className="statement">Curriculum Information</div>
                <div className="para">
                 
                  <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Lecture</th>
              <th>Time</th>
              <th>Seats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Lecture 1.1</td>
              <td>Time: 30 Minutes</td>
              <td>Seats: 25</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Lecture 1.2</td>
              <td>Time: 30 Minutes</td>
              <td>Seats: 25</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Lecture 1.3</td>
              <td>Time: 30 Minutes</td>
              <td>Seats: 25</td>
            </tr>
          </tbody>
        </table>
                </div>
              </div>
            </div>
          )}

{/* {activeTab === 'Review' && (
  <div className="Review">
    <div className="lin"></div>
    <div className="main_information">
      <div className="statement">Student Reviews</div>
      <div className="para">
        <div className="review-item">
          <div className="review-img">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg" alt="siya sharma" />
          </div>
          <div className="review-text">
            <div className="name">Siya Sharma</div>
            <div className="feedback">"Great course, very informative!"<br/>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            
            </div>
          </div>
        </div>

        <div className="review-item">
          <div className="review-img">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg" alt="siya sharma" />
          </div>
          <div className="review-text">
            <div className="name">Siya Sharma</div>
            <div className="feedback">"Great course, very informative!"</div>
          </div>
        </div>

        <div className="review-item">
          <div className="review-img">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg" alt="siya sharma" />
          </div>
          <div className="review-text">
            <div className="name">Siya Sharma</div>
            <div className="feedback">"Great course, very informative!"</div>
          </div>
        </div>
      </div>
    </div>
  </div>
)} */}
{activeTab === 'Review' && (
  <div className="Review">
    <div className="lin"></div>
    <div className="main_information">
      <div className="statement">Student Reviews</div>
      <div className="para">
        <div className="review-item">
          <div className="review-img">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg" alt="siya sharma" />
          </div>
          <div className="review-text">
            <div className="name">Siya Sharma</div>
            <div className="feedback">"Great course, very informative!"<br/>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            </div>
          </div>
        </div>

        <div className="review-item">
          <div className="review-img">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg" alt="siya sharma" />
          </div>
          <div className="review-text">
            <div className="name">Siya Sharma</div>
            <div className="feedback">"Great course, very informative!"</div>
          </div>
        </div>

        <div className="review-item">
          <div className="review-img">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg" alt="siya sharma" />
          </div>
          <div className="review-text">
            <div className="name">Siya Sharma</div>
            <div className="feedback">"Great course, very informative!"</div>
          </div>
        </div>

        <div className="review-form">
          <div className="form-header">
            <h3>Submit Your Review</h3>
          </div>
          <form>
            <div className="form-group">
            <label htmlFor="profile-image">Your Profile :</label>
                        <input
                          type="file"
                          id="profile-image"
                          name="profile-image"
                          
                        />
              <label htmlFor="review-name">Your Name:</label>
              <input
                type="text"
                id="review-name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
           
              <label htmlFor="review-feedback">Your Review:</label>
              <textarea
                id="review-feedback"
                name="feedback"
                placeholder="Write your review here"
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" className="submit-button">Submit Review</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)}


        </div>
      </div>
    </div>
  );
}
export default Javacode;
