import React from 'react'
import './About.css'
import about3 from '../../assets/about3.jpg'


const About = () => {
  return (
    <div>
     
      <div className="cintainer_box">
         <div className="text">
           <h1></h1>
           <div className="button">
            <div className="Home">Home</div>
            <div className="line"></div>
            <div className="Aboutus">About</div>
           </div>
           
        </div>
        </div>
       
        <div className="middle_container">
        <div className="middle">
         <h1>Real Life.<span>Real Knowledge. </span> Real People.</h1>
         <p>Smart is an acronym for Specific, Measurable, Realistic and Time Sensitive.</p>
         <div className="text">
         The first thing to remember about success is that it is a process – nothing more, nothing less. 
         There is really no magic to it and it’s not reserved only for a select few people. 
         As such, success really has nothing to do with luck, coincidence or fate. 
         It really comes down to understanding the steps in the process and then executing on those steps.


         </div>
          
        </div>
        </div>

      <div className="text_info">
        <div className="history">
       <div className="horizantal"></div>
          <h1>history</h1>
          
          <p>Established in 2004, Mit College is a private human sciences school in Claremont, Calif., around 35 miles east of Los Angeles. We offer a thorough educational plan, with 48 majors in expressions of the human experience, humanities, sociologies and regular sciences.
            One of the head aesthetic sciences schools in the country, Pomona is an affectionate and assorted network of achieved researchers, researchers, business people and craftsmen who are enthusiastic about having any kind of effect on the planet. There are roughly 1,670 understudies who originated from 59 countries and each of the 50 U.S. states, just as the District of Columbia, Guam and Puerto Rico.
           With an understudy personnel proportion of 8 to 1, our understudies work intimately with their educators in the study hall, in the lab and in the field. What’s more, our area—inside an hour of Los Angeles and the mountains, desert and shorelines—gives endless chances to handle study, research and temporary positions.
           </p>
        </div>
        <div className="Alumni">
          <img src={about3} alt="" />
        </div>
      </div>

    </div>
  )
}

export default About