import React from 'react'
import Msg from '../../Components/Principal_Msg/Msg'
import Banner from '../../Components/Carosual/banner'
import Student_Msg from '../../Components/Student_Msg/Student_Msg'
import Picture from '../../Components/AboutUs/Picture'
import Hero from '../../Components/Hero/Hero'
import Courses from '../../Components/Courses/Coures'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Courses/>
        <Msg/>
        <Banner />
        <Student_Msg />
        <Picture />
      </div>
  )
}

export default Home