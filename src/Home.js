import React from 'react'
import HeroSection from './Components/HeroSection';
import Trusted from './Components/Trusted';
import Services from './Components/Services';

const Home = () => {
  const data = {
    name:"Feynill Store"
  }
  return (
    <>
     <HeroSection mydata={data}/>
     <Services/>
     <Trusted/>
    </>
  )
};


export default Home
