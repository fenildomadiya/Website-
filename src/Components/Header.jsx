import React from 'react'
import { NavLink, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';

const Header = () => {
  return (
    <>
    
      <MainHeader>
        <NavLink to="/">
            <img src="images/logo.png" alt="Logo-img" className='logo'/>
        </NavLink>
        <Navbar/>

      </MainHeader>
    </>
  )
};

const MainHeader = styled.header `
padding:0 4rem;
height:10rem;
background-color:${({theme}) => theme.colors.bg};
justify-content:space-between;
display:flex;
align-items:center;
position:relative;


.logo{
    height:8rem;
}

`;

export default Header
