import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <MainHeader>
        
      </MainHeader>
    </>
  )
};

const MainHeader = styled.header `
padding:0 4.8 rem;
height:10rem;
background-color:${({theme}) => theme.colors.bg};
justify-content:space-between;
display:flex;
align-items:center;
position:relative;


.logo{
    height:5rem;
}

`;

export default Header
