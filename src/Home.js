import React from 'react'
import HeroSection from './Components/HeroSection';

const Home = () => {
  const data = {
    name:"Feynill Store"
  }
  return (
    <>
     <HeroSection mydata={data}/>
    </>
  )
};


export default Home
