import React from 'react';
import './result.css';

const Result = () => {
  const students = [
    {
      image: 'https://www.shutterstock.com/image-photo/young-brunette-businesswoman-student-girl-260nw-488205880.jpg',
      name: 'kedar yelewar',
      cgpa: 8.7,
      year:2017
    },
    {
      image: 'https://www.shutterstock.com/image-photo/young-brunette-businesswoman-student-girl-260nw-488205880.jpg',
      name: 'kedar yelewar',
      cgpa: 9.1,
      year:2018
    },
    {
        image: 'https://www.shutterstock.com/image-photo/young-brunette-businesswoman-student-girl-260nw-488205880.jpg',
        name: 'kedar yelewar',
        cgpa: 9,
        year:2019
      },
      {
        image: 'https://www.shutterstock.com/image-photo/young-brunette-businesswoman-student-girl-260nw-488205880.jpg',
        name: 'kedar yelewar',
        cgpa: 9.1,
        year:2020
      },
      {
        image: 'https://www.shutterstock.com/image-photo/young-brunette-businesswoman-student-girl-260nw-488205880.jpg',
        name: 'kedar yelewar',
        cgpa: 9.1,
        year:2021
      },
      {
        image: 'https://www.shutterstock.com/image-photo/young-brunette-businesswoman-student-girl-260nw-488205880.jpg',
        name: 'kedar yelewar',
        cgpa: 9.1,
        year:2022
      }, 
      {
        image: 'https://www.shutterstock.com/image-photo/young-brunette-businesswoman-student-girl-260nw-488205880.jpg',
        name: 'kedar yelewar ',
        cgpa: 9.1,
        year:2023
      },
      {
        image: 'https://www.shutterstock.com/image-photo/young-brunette-businesswoman-student-girl-260nw-488205880.jpg',
        name: 'kedar yelewar',
        cgpa: 9.1,
        year:2024
      },
  ];

  return (
    <>
   <div className="wallpaper-container">
   <div className="text">
           <h1></h1>
           <div className="button">
            <div className="Home">Home</div>
            <div className="line"></div>
            <div className="Aboutus">Result</div>
           </div>
           
        </div>
        </div>
  
   <div className="heading">
   <h1> College Topper List</h1>
   </div>
    <div className="mark-container">
      
      <table className="result-table">
        <thead>
          <tr>
            <th>Student Image</th>
            <th>Student Name</th>
            <th>Marks (CGPA)</th>
            <th>year</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td className="student-image">
                <img src={student.image} alt={student.name} />
              </td>
              <td className="student-name">{student.name}</td>
              <td className="mark-cgpa">{student.cgpa}</td>
              <td className='year'>{student.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Result;
