import React from 'react'
import styled from 'styled-components'

import { AiOutlineGithub } from "react-icons/ai"
import { FaLinkedinIn } from 'react-icons/fa'
// import { IoIosArrowUp } from 'react-icons/io'
import { BiUpArrowCircle } from 'react-icons/bi'
import { SiBuymeacoffee } from 'react-icons/si'

import resume from "../assets/images/Jan_Rejas_Resume.pdf"


const SocialFooter = () => {
  return (
    
    // <Test001>Sticky Test</Test001>

    <SocialContainer>

        <SocialWrap>

        <a href="#top" >
            <BiUpArrowCircle css={`color: white; font-size: 2rem;

              &:hover{
                cursor: pointer;
              }

            `}/>
            </a>

            

          <a href="https://github.com/JanRII23" target="_blank" rel = "noopener noreferrer" >
            <AiOutlineGithub css={`color: white; font-size: 2rem;

              &:hover{
                cursor: pointer;
              }

            `}/>
            </a>

            <a href = "https://www.linkedin.com/in/janrejasii" target="_blank" rel = "noopener noreferrer" > 
  
            <FaLinkedinIn css={`color: white; font-size: 2rem;
              &:hover{
                cursor: pointer;
              }

            `} />
                        
            </a>
            
            <a href = "https://www.buymeacoffee.com/jrejasii" target="_blank" rel = "noopener noreferrer" > 
  
            <SiBuymeacoffee css={`color: white; font-size: 2rem;
              &:hover{
                cursor: pointer;
              }

            `} />
                        
            </a>

            <a href={resume} target = "_blank" rel = "noopener noreferrer" >
              <CVDiv><h2>CV</h2></CVDiv>
            </a>

            {/* <VerticalLine></VerticalLine> */}
        </SocialWrap>

    </SocialContainer>
  )
}


export default SocialFooter

// const VerticalLine = styled.div`
//     width: 5%;
//     height: 25%;
//     border: .5px solid white;
// `

const CVDiv = styled.div`
    color: white;
    text-decoration: none;
`

const SocialWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    /* border: 2px solid blue; */
    height: 100%;
    

    a{
      text-decoration: none;
    }


`

const SocialContainer = styled.div`
    position: fixed;
    top: auto;
    bottom: 0px;
    right: 0px;
    left: auto;
    width: 5%;
    height: 30%;
    background: transparent;
    z-index: 10;
    /* border: 2px solid green; */


    @media screen and (max-width: 768px){
    display: none;
  }
`

