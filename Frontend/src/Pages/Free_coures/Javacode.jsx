// // import React, { useState } from 'react';
// // import './java.css';
// // import { CiUser } from "react-icons/ci";
// // import { BiLoaderAlt } from "react-icons/bi";
// // import { LiaLanguageSolid } from "react-icons/lia";
// // import { BsStopwatch } from "react-icons/bs";
// // import { FaBook } from "react-icons/fa6";
// // import { FaRegKeyboard } from "react-icons/fa";


// // const Javacode = () => {
// //   const [activeTab, setActiveTab] = useState("Information");

// //   const handleTabChange = (tab) => {
// //     setActiveTab(tab);
// //   };

// //   return (
// //     <div>
// //       <div className="wallpaper-cont">
// //         <div className="overlay-text">Course Detailes</div>
// //       </div>

// //       <div className="h2">
// //         <h2> programming for beginners</h2>
// //       </div>

// //       <div className="detail_coures">
// //         <div className="detail_img">
// //           <img src="https://kvch.in:859/uploads/1733993607521-java_full_stack_development_course.webp" alt="" />
// //         </div>
// //         <div className="feature_coures">
// //           <h4>Free Course Details</h4>
// //           <div className="line"></div>
// //           <div className="student"><CiUser size={25} color='green' /> Student: 50</div>
// //           <div className="Lessons"><BiLoaderAlt size={25} color='green' /> Lessons: 10</div>
// //           <div className="Language"><LiaLanguageSolid size={25} color='green' /> Language: English</div>
// //           <div className="Prerequisites"><BsStopwatch size={25} color='green' /> Prerequisites: No</div>
// //           <div className="Course_Capacity"><FaBook size={25} color='green' /> Course Capacity: 15</div>
// //           <div className="Start_Courses"><FaRegKeyboard size={25} color='green' /> Start Courses: 01/03/2025</div>
// //         </div>
// //       </div>

// //       <div className="info_review">
// //         <div className="tabs">
// //           <div
// //             className={`tab ${activeTab === 'Information' ? 'active' : ''}`}
// //             onClick={() => handleTabChange('Information')}
// //           >
// //             Information
// //           </div>
// //           <div
// //             className={`tab ${activeTab === 'Curriculum' ? 'active' : ''}`}
// //             onClick={() => handleTabChange('Curriculum')}
// //           >
// //             Curriculum
// //           </div>
// //           <div
// //             className={`tab ${activeTab === 'Review' ? 'active' : ''}`}
// //             onClick={() => handleTabChange('Review')}
// //           >
// //             Review
// //           </div>
// //         </div>

// //         <div className="content">
// //           {activeTab === 'Information' && (
// //             <div className="Information">
// //               <div className="lin"></div>
// //               <div className="main_information">
// //                 <div className="statement">Course Information</div>
// //                 <div className="para">
// //                   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
// //                   <br />
// //                   rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
// //                   <br /> aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
// //                 </div>
// //                 <div className="key_pont">
// //                   <li>Sadipisci velit, sed quia non numquam eius.</li>
// //                   <li>Imoditempora incidunt ut labore et dolore magnam.</li>
// //                   <li>Exercitation ullamco laboris nisi ut aliquip consequat. </li>
// //                   <li>Sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
// //                 </div>
// //               </div>
// //             </div>
// //           )}

// //           {activeTab === 'Curriculum' && (
// //             <div className="Curriculum">
// //               <div className="lin"></div>
// //               <div className="main_information">
// //                 <div className="statement">Curriculum Information</div>
// //                 <div className="para">

// //                   <table>
// //                     <thead>
// //                       <tr>
// //                         <th>#</th>
// //                         <th>Lecture</th>
// //                         <th>Time</th>
// //                         <th>Seats</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody>
// //                       <tr>
// //                         <td>1</td>
// //                         <td>Lecture 1.1</td>
// //                         <td>Time: 30 Minutes</td>
// //                         <td>Seats: 25</td>
// //                       </tr>
// //                       <tr>
// //                         <td>2</td>
// //                         <td>Lecture 1.2</td>
// //                         <td>Time: 30 Minutes</td>
// //                         <td>Seats: 25</td>
// //                       </tr>
// //                       <tr>
// //                         <td>3</td>
// //                         <td>Lecture 1.3</td>
// //                         <td>Time: 30 Minutes</td>
// //                         <td>Seats: 25</td>
// //                       </tr>
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               </div>
// //             </div>
// //           )}


// //           {activeTab === 'Review' && (
// //             <div className="Review">
// //               <div className="lin"></div>
// //               <div className="main_information">
// //                 <div className="statement">Student Reviews</div>
// //                 <div className="para">
// //                   <div className="review-item">
// //                     <div className="review-img">
// //                       <img src="https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg" alt="siya sharma" />
// //                     </div>
// //                     <div className="review-text">
// //                       <div className="name">Siya Sharma</div>
// //                       <div className="feedback">"Great course, very informative!"<br />
// //                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="review-item">
// //                     <div className="review-img">
// //                       <img src="https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg" alt="siya sharma" />
// //                     </div>
// //                     <div className="review-text">
// //                       <div className="name">Siya Sharma</div>
// //                       <div className="feedback">"Great course, very informative!"</div>
// //                     </div>
// //                   </div>

// //                   <div className="review-item">
// //                     <div className="review-img">
// //                       <img src="https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg" alt="siya sharma" />
// //                     </div>
// //                     <div className="review-text">
// //                       <div className="name">Siya Sharma</div>
// //                       <div className="feedback">"Great course, very informative!"</div>
// //                     </div>
// //                   </div>

// //                   <div className="review-form">
// //                     <div className="form-header">
// //                       <h3>Submit Your Review</h3>
// //                     </div>
// //                     <form>
// //                       <div className="form-group">
// //                         <label htmlFor="profile-image">Your Profile :</label>
// //                         <input
// //                           type="file"
// //                           id="profile-image"
// //                           name="profile-image"

// //                         />
// //                         <label htmlFor="review-name">Your Name:</label>
// //                         <input
// //                           type="text"
// //                           id="review-name"
// //                           name="name"
// //                           placeholder="Enter your name"
// //                           required
// //                         />
// //                       </div>
// //                       <div className="form-group">

// //                         <label htmlFor="review-feedback">Your Review:</label>
// //                         <textarea
// //                           id="review-feedback"
// //                           name="feedback"
// //                           placeholder="Write your review here"
// //                           required
// //                         />
// //                       </div>
// //                       <div className="form-group">
// //                         <button type="submit" className="submit-button">Submit Review</button>
// //                       </div>
// //                     </form>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // export default Javacode;





// import React, { useState } from 'react';
// import './java.css';
// import { CiUser } from "react-icons/ci";
// import { BiLoaderAlt } from "react-icons/bi";
// import { LiaLanguageSolid } from "react-icons/lia";
// import { BsStopwatch } from "react-icons/bs";
// import { FaBook } from "react-icons/fa6";
// import { FaRegKeyboard } from "react-icons/fa";
// import axios from 'axios';

// const Javacode = () => {

//   const ReviewComponent = ({ activeTab }) => {
//     const [name, setName] = useState('');
//     const [reviewText, setReviewText] = useState('');
//     const [profileImage, setProfileImage] = useState(null);
//     const [message, setMessage] = useState('');

//     const handleSubmit = async (e) => {
//       e.preventDefault();

//       if (!name || !reviewText) {
//         setMessage('Please fill in all fields');
//         return;
//       }
//       const reviewData = {
//         name,
//         userId: '67bd5ef4a5aafdcf937bfe0f', 
//         reviewText,
//       };

//       try {
//         const response = await axios.post('http://localhost:7667/api/review/add', reviewData);
//         setMessage('Review submitted successfully!');
//         console.log(response.data);
//       } catch (error) {
//         setMessage('Error submitting review. Please try again.');
//         console.error(error);
//       }

//       setName('');
//       setReviewText('');
//     };

//     return (
//       <div className="Review">
//         <div className="lin"></div>
//         <div className="main_information">
//           <div className="statement">Student Reviews</div>
//           <div className="para">
//             <div className="review-item">
//               <div className="review-img">
//                 <img src="https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg" alt="siya sharma" />
//               </div>
//               <div className="review-text">
//                 <div className="name">Siya Sharma</div>
//                 <div className="feedback">"Great course, very informative!"<br />
//                   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
//                 </div>
//               </div>
//             </div>

//             <div className="review-item">
//               <div className="review-img">
//                 <img src="https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg" alt="siya sharma" />
//               </div>
//               <div className="review-text">
//                 <div className="name">Siya Sharma</div>
//                 <div className="feedback">"Great course, very informative!"</div>
//               </div>
//             </div>

//             <div className="review-item">
//               <div className="review-img">
//                 <img src="https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg" alt="siya sharma" />
//               </div>
//               <div className="review-text">
//                 <div className="name">Siya Sharma</div>
//                 <div className="feedback">"Great course, very informative!"</div>
//               </div>
//             </div>
//           </div> {/* End of .para */}

//           {/* Review Form Section */}
//           <div className="review-form">
//             <div className="form-header">
//               <h3>Submit Your Review</h3>
//             </div>
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="profile-image">Your Profile :</label>
//                 <input
//                   type="file"
//                   id="profile-image"
//                   name="profile-image"
//                   onChange={(e) => setProfileImage(e.target.files[0])}
//                 />
//                 <label htmlFor="review-name">Your Name:</label>
//                 <input
//                   type="text"
//                   id="review-name"
//                   name="name"
//                   placeholder="Enter your name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="review-feedback">Your Review:</label>
//                 <textarea
//                   id="review-feedback"
//                   name="feedback"
//                   placeholder="Write your review here"
//                   value={reviewText}
//                   onChange={(e) => setReviewText(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <button type="submit" className="submit-button">Submit Review</button>
//               </div>
//             </form>
//             {message && <p>{message}</p>}
//           </div> 
//         </div> 
//       </div> 
//     );
//   };

//   const [activeTab, setActiveTab] = useState("Information");

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div>
//       <div className="wallpaper-cont">
//         <div className="overlay-text">Course Detailes</div>
//       </div>

//       <div className="h2">
//         <h2> programming for beginners</h2>
//       </div>

//       <div className="detail_coures">
//         <div className="detail_img">
//           <img src="https://kvch.in:859/uploads/1733993607521-java_full_stack_development_course.webp" alt="" />
//         </div>
//         <div className="feature_coures">
//           <h4>Free Course Details</h4>
//           <div className="line"></div>
//           <div className="student"><CiUser size={25} color='green' /> Student: 50</div>
//           <div className="Lessons"><BiLoaderAlt size={25} color='green' /> Lessons: 10</div>
//           <div className="Language"><LiaLanguageSolid size={25} color='green' /> Language: English</div>
//           <div className="Prerequisites"><BsStopwatch size={25} color='green' /> Prerequisites: No</div>
//           <div className="Course_Capacity"><FaBook size={25} color='green' /> Course Capacity: 15</div>
//           <div className="Start_Courses"><FaRegKeyboard size={25} color='green' /> Start Courses: 01/03/2025</div>
//         </div>
//       </div>

//       <div className="info_review">
//         <div className="tabs">
//           <div
//             className={`tab ${activeTab === 'Information' ? 'active' : ''}`}
//             onClick={() => handleTabChange('Information')}
//           >
//             Information
//           </div>
//           <div
//             className={`tab ${activeTab === 'Curriculum' ? 'active' : ''}`}
//             onClick={() => handleTabChange('Curriculum')}
//           >
//             Curriculum
//           </div>
//           <div
//             className={`tab ${activeTab === 'Review' ? 'active' : ''}`}
//             onClick={() => handleTabChange('Review')}
//           >
//             Review
//           </div>
//         </div>

//         <div className="content">
//           {activeTab === 'Information' && (
//             <div className="Information">
//                <div className="lin"></div>
//               <div className="main_information">
//                 <div className="statement">Course Information</div>
//                 <div className="para">
//                   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
//                   <br />
//                   rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
//                   <br /> aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
//                 </div>
//                 <div className="key_pont">
//                   <li>Sadipisci velit, sed quia non numquam eius.</li>
//                   <li>Imoditempora incidunt ut labore et dolore magnam.</li>
//                   <li>Exercitation ullamco laboris nisi ut aliquip consequat. </li>
//                   <li>Sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === 'Curriculum' && (
//             <div className="Curriculum">
//               <div className="lin"></div>
//               <div className="main_information">
//                 <div className="statement">Curriculum Information</div>
//                 <div className="para">
//                   <table>
//                     <thead>
//                       <tr>
//                         <th>#</th>
//                         <th>Lecture</th>
//                         <th>Time</th>
//                         <th>Seats</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <td>1</td>
//                         <td>Lecture 1.1</td>
//                         <td>Time: 30 Minutes</td>
//                         <td>Seats: 25</td>
//                       </tr>
//                       <tr>
//                         <td>2</td>
//                         <td>Lecture 1.2</td>
//                         <td>Time: 30 Minutes</td>
//                         <td>Seats: 25</td>
//                       </tr>
//                       <tr>
//                         <td>3</td>
//                         <td>Lecture 1.3</td>
//                         <td>Time: 30 Minutes</td>
//                         <td>Seats: 25</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === 'Review' && <ReviewComponent activeTab={activeTab} />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Javacode;


//---------------------------------
// 


import React, { useState } from 'react';
import './java.css';
import { CiUser } from "react-icons/ci";
import { BiLoaderAlt } from "react-icons/bi";
import { LiaLanguageSolid } from "react-icons/lia";
import { BsStopwatch } from "react-icons/bs";
import { FaBook } from "react-icons/fa6";
import { FaRegKeyboard } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { CourseDetail } from './CourseDetail';

const Javacode = () => {
  const [activeTab, setActiveTab] = useState("Information");
  const { id } = useParams();

  const course = CourseDetail.find(course => course.id === parseInt(id));

  if (!course && id) {
    return <div>Course not found</div>;
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
    <div className="wallpaper-cont">
    <div className="text">
    <h1></h1>
    <div className="button">
     <div className="Home">Home</div>
     <div className="line"></div>
     <div className="Aboutus">Coures Details</div>
    </div>
    </div>
 </div>
    <div>
      {course && (
        <div key={course.id}>
          
          

          <div className="h2">
            <h2>{course.title}</h2>
          </div>

          <div className="detail_coures">
            <div className="detail_img">
              <img src={course.imageUrl || 'default-image-url.jpg'} alt="Course" />
            </div>
            <div className="feature_coures">
              <h4>Free Course Details</h4>
              <div className="line"></div>
              <div className="student">
                <CiUser size={25} color="green" /> Students: {course.students}
              </div>
              <div className="Lessons">
                <BiLoaderAlt size={25} color="green" /> Lessons: {course.lessons}
              </div>
              <div className="Language">
                <LiaLanguageSolid size={25} color="green" /> Language: {course.language}
              </div>
              <div className="Prerequisites">
                <BsStopwatch size={25} color="green" /> Prerequisites: {course.prerequisites}
              </div>
              <div className="Course_Capacity">
                <FaBook size={25} color="green" /> Course Capacity: {course.courseCapacity}
              </div>
              <div className="Start_Courses">
                <FaRegKeyboard size={25} color="green" /> Start Date: {course.startDate}
              </div>
            </div>
          </div>

          <div className="info_review">
            <div className="tabs">
              {course.tabs && course.tabs.map((tab) => (
                <div
                  key={tab.name}
                  className={`tab-item ${activeTab === tab.name ? "active" : ""}`} // Fixed active tab logic
                  onClick={() => handleTabChange(tab.name)}
                >
                  {tab.name}
                </div>
              ))}
            </div>

            <div className="content">
              {course.tabs && course.tabs.map((tab) => {
                if (activeTab === tab.name) {
                  console.log("Current Tab:", tab.name);
                  console.log("Reviews:", tab.content?.reviews);

                  return (
                    <div key={tab.name} className="tab-content">
                      <div className="lin"></div>
                      <div className="main_information">
                        <div className="statement">{tab.content?.statement}</div>
                        <div className="para">
                          {tab.name === "Information" && tab.content?.description && (
                            <p>{tab.content.description}</p>
                          )}
                          <div className="key_ponits" >{tab.name === "Information" && tab.content?.keyPoints && (
                            <p>{tab.content.keyPoints}</p>
                          )}</div>
                          {tab.name === "Curriculum" && tab.content?.curriculum && (
                            <div className="Curriculum">
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
                                  {tab.content.curriculum.map((lecture, index) => (
                                    <tr key={index}>
                                      <td>{index + 1}</td>
                                      <td>{lecture.lecture}</td>
                                      <td>{lecture.time}</td>
                                      <td>{lecture.seats}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}


                          {tab.name === "Review" && tab.content?.reviews ? (
                            <div className="review-items">
                              {tab.content.reviews.length > 0 ? (
                                tab.content.reviews.map((review, index) => (
                                  <div key={index} className="review-item">
                                    <div className="review-img">
                                      <img src={review.profileImage} alt={review.name} />
                                    </div>
                                    <div className="review-text">
                                      <div className="name">{review.name}</div>
                                      <div className="feedback">{review.feedback}</div>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <div></div>
                              )}
                            </div>
                          ) : (
                            <div></div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Javacode;
