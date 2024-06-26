import React, { useState } from 'react'
import RightNav from './RightNav';

import styled from 'styled-components';

// const StyledBurger = styled.div `
// width: 2rem;
// height: 2rem;
// position: fixed;
// top: 15px;
// right: 20px;
// display: flex;
// justify-content: space-around;
// flex-flow: column nowrap ;


// @media (max-width: 768px) {
//     display: flex;
//     justify-content: space-around;
//     flex-flow: column nowrap;
//   }


// div {
//   width: 2rem;
//   height: 0.25rem;
//   background-color: ${({ open }) => open ? '#ccc' : '#333'}};
//   border-radius: 10px;
//   transition: all 0.3s linear;
//   transform-origin: 1px;
  

//  div:nth-child(1){
//   transform: ${({ open }) => open ? 'rotate(45deg) translate(1em , 1em)'  : 'rotate(0)'};
 
//  }

//  div:nth-child(2){
//   transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
//   opacity: ${({open}) => open ? 0 : 1};
//  }

//  div:nth-child(3){
//   transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  
  
//  }

  


// `;

/*this one is working */
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
 
  
  

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    margin-top: 10px;
    cursor:pointer;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;





const Burger2 = () => {

  const [open, setOpen] = useState(false)


  return (
    <>
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
      </StyledBurger>
      <RightNav open={open} >

      </RightNav>
      </>
   
  )
    
}

export default Burger2
