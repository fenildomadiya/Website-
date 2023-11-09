import React from "react";
import styled from "styled-components";


import { TfiAndroid } from "react-icons/tfi";

import { DiNodejs,DiApple,DiBootstrap,DiStackoverflow,DiDjango } from "react-icons/di";

import { BiCoinStack } from "react-icons/bi";

const Services = () => {
  return (
    <>
      

<Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          <TfiAndroid className="icon" />
          <DiNodejs className="icon" />
          <BiCoinStack className="icon" />
          <DiApple className="icon" />
          <DiDjango className="icon" />
          <DiBootstrap className="icon" />
          <DiStackoverflow className="icon" />
        </div>
      </div>
    </Wrapper>


 
    </>
  );
};
const Wrapper = styled.section`

padding:5rem 0;
background-color:${({theme})=> theme.colors.bg};

.brand-section{
    padding:12rem 0 0;
}

  h3 {
    font-weight:bold;
    text-align:center;
    text-transform:capitalize;
    color:${({theme})=> theme.colors.text};
    font-size: 2rem;

   }

  .icon{
     min-width:10rem;
     height:8rem;
     margin-top:50px;
  }

  .brand-section-slider{
    display:flex;
    margin-top:3.2rem;
    justify-content:space-between;
    align-itams:center;
    flex-direction:row;
   }


@media (max-width: ${({ theme }) => theme.media.mobile}) {
   .brand-section-slider{
    margin-top:3.2rem;
    display:grid;
    grid-template-columns:1fr 1fr;
    text-align:center;
   }
  }

`;



export default Services;
