import React from 'react'
import './Paper.css'

const Paper = () => {
  return (
    <div>
<div className="wall_paper">
<div className="text">
           <h1></h1>
           <div className="button">
            <div className="Home">Home</div>
            <div className="line"></div>
            <div className="Aboutus">Paper pdf</div>
           </div>
           
        </div>
        
       
</div>
    <div className="syll_paper">
    <div className="paper">
    <h3> First Second and Thired year paper pdf </h3>
    <div className='pdf'>
       <a href="https://drive.google.com/file/d/13y-WZG5J1u2QI8Q2eTJA7ARcGwzCOl7d/view?usp=drivesdk"
       download={true}
       className="pdf"
      
       >
       <div className="b_t">
      
       <button>FIRST Yr PDF</button>
       </div>
               </a>
    </div>
    <div className='pdf'>
       <a href="https://drive.google.com/file/d/1Dr0OKbSgGrpVS947px8yOUux2wDP556k/view?usp=drivesdk"
       download={true}
       className="pdf"
      
       >
       <div className="b_t">
       <button>THIRD Yr PDF</button>
       </div>
               </a>
    </div><div className='pdf'>
       <a href="https://drive.google.com/file/d/1dKtbmklLKgQwNJ-UbGhM6fDfwFPpsO1u/view?usp=drivesdk"
       download={true}
       className="pdf"
      
       >
       <div className="b_t">
       <button>THIRD Yr PDF</button>
       </div>
               </a>
    </div>
   
    </div>


<div className="Syllabuss">
    <h3>first Second and Thired year syllabus pdf</h3>
    
  
  <div className='pdf'>
       <a href="https://drive.google.com/file/d/1ekd_O3aVdl250yJg8sQEAEiLTMj2nh6u/view?usp=drivesdk"
       download={true}
       className="pdf"
      
       >
       <div className="b_t">
       <button>BCA SYLLABUS</button>
       </div>
               </a>
    </div>
    <div className='pdf'>
       <a href="https://drive.google.com/file/d/1ekd_O3aVdl250yJg8sQEAEiLTMj2nh6u/view?usp=drivesdk"
       download={true}
       className="pdf"
      
       >
       <div className="b_t">
       <button>BCS SYLLABUS</button>
       </div>
               </a>
    </div>
    </div>

    </div>

    </div>
  
  )
}

export default Paper