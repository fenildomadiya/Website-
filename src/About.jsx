import React from 'react'
import HeroSection from './Components/HeroSection'
import Footer from './Components/Footer'

const About = () => {

  const data = {
    name:"Feynill E-Commerce"
  }
  return (
    <div>
      <HeroSection mydata={data}/>
    </div>
  )
}

export default About
