import React from 'react'
import styled from 'styled-components'

import { AiOutlineGithub } from "react-icons/ai"
import { FaLinkedinIn } from 'react-icons/fa'


const SocialFooter = () => {
  return (
    
    // <Test001>Sticky Test</Test001>

    <SocialContainer>

        <SocialWrap>
          <a href="https://github.com/JanRII23" rel = "noopener noreferrer" >
            <AiOutlineGithub css={`color: white; font-size: 2rem;

              &:hover{
                cursor: pointer;
              }

            `}/>
            </a>
            <a href = "https://www.linkedin.com/in/janrejasii" rel = "noopener noreferrer" > 
  
            <FaLinkedinIn css={`color: white; font-size: 2rem;
              &:hover{
                cursor: pointer;
              }

            `} />
                        
            </a>
            <VerticalLine></VerticalLine>
        </SocialWrap>

    </SocialContainer>
  )
}


export default SocialFooter

const VerticalLine = styled.div`
    width: 5%;
    height: 40%;
    border: .5px solid white;
`

const SocialWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* border: 2px solid blue; */
    height: 100%;

`

const SocialContainer = styled.div`
    position: fixed;
    top: auto;
    bottom: 0px;
    right: 0px;
    left: auto;
    width: 5%;
    height: 20%;
    background: transparent;
    z-index: 10;
    /* border: 2px solid green; */

    @media screen and (max-width: 768px){
    display: none;
  }
`

