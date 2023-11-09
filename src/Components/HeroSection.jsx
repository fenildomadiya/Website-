import React from 'react'
import styled from 'styled-components'
import {Button } from "../styles/Button";
import { NavLink } from 'react-router-dom';

const HeroSection = ({mydata}) => {
  return (
    <>
      <Wrapper>
          <div className='container'>
            <div className="grid grid-two-column">

                    <div className='hero-section-data'>

                        <p className='intro-data'>
                            Welcome To
                        </p>
                        <h1>{mydata.name}</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda deleniti voluptates ipsam blanditiis consequuntur culpa quae dicta in quaerat quo.</p>
                        <NavLink>
                            <Button>
                                Shop Now 
                            </Button>
                        </NavLink>
                    </div>
                    {/* Home Page Image */}

                    <div className='hero-section=-img'>
                        <figure>
                            <img src="images/hero.jpg" alt="Her0-Img" className='img-style'/>
                        </figure>
                    </div>
            </div>
          </div>

      </Wrapper>
    </>
  )
}

const Wrapper = styled.section `

padding:12rem 0;

img{
    min-width:10rem;
    height:10rem;
}

.hero-section-data{
    p{
        margin:2rem 0;
    }
    h1{
        text-transform:capitalze;
        font-weight:bold;
    }
    .intro-data{
        margin-bottom:0px;
    }
}

.hero-section-image{
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
}

figure{
    position:relative;
}

figure::after{
     content:"";
    width:100%;
    height:80%;
    background: rgba(81,56,238,0.4);
    left:50%;
    top:-3rem;
    z-index:1;  

}

.img-style{
    width:95%;
    height:auto;
}

@media(max-width:${({theme})=>theme.media.mobile})
{
    .grid{
        gap:10rem;
    }
    figure::after{
        content:" ";
        width:50%;
        height:100%;
        left:0%;
        top:10%;
        background-color:rgba(81,56,238,0.4);
    }
}
`;

export default HeroSection
