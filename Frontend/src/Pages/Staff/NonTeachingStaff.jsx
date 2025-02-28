import React from 'react';
import './staff.css';
import prin_sir from '../../assets/prin_sir.jpg'

const stafff = [
  {
    id: 1,
    img:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",  // Corrected path for local image
    Name: "Mr. Jamge Jagan",
    work: "O.S",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS5ue10uyLcHk1T_ZrpYebs1URKzzSX2g2mA&s",
    Name: "Ms.Bhosle Mam",
    work: "Librarian",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Name: "Mr.kshirsagar Deepik",
    work: "Clark",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Name: "Rout Pradip",
    work: "Lab Assistant",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Name: "Mr. Panchal Pavan",
    work: "Lab Assistant",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Name: "Mr. Rout Vijay",
    work: "Lab Attendant",
  },
];

const NonTeachingStaff = () => {
  return (
    <>
      <div className="main_staff">
        <div className="button">
          <div className="Home">Home</div>
          <div className="line"></div>
          <div className="Aboutus">NonTeachingStaff</div>
        </div>
      </div>
      <h1>OUR NON TEACHING STAFF</h1>
      <div className="main_non">
        {stafff.map((item) => (
          <div className="boxes" key={item.id}>
            <div className="box_imgg">
              <img src={item.img} alt={item.Name} /> {/* Alt text for accessibility */}
            </div>

            <div className="information_box">
              <div className="informa_tion">
                <div className="n_am">Name:</div>
                <div className="staff_nam">{item.Name}</div>
              </div>

              <div className="informa_tion">
                <div className="n_am">Work:</div>
                <div className="stf_workk">{item.work}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NonTeachingStaff;
