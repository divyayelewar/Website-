import React from 'react'
import './Paper.css'

const Paper = () => {
  return (
    <div>
<div className="wall_paper"></div>
     <div className='pdf'>
       <a href="https://drive.google.com/file/d/1Dr0OKbSgGrpVS947px8yOUux2wDP556k/view?usp=drivesdk"
       download={true}
       className="pdf"
      
       >
       <div className="b_t">
       <button>Download PDF</button>
       </div>
               </a>
    </div>
      </div>



  
  )
}

export default Paper