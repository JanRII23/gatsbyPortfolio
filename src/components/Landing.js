import React from 'react'
import styled from 'styled-components';
import { Button } from './Button';
import { StaticImage } from 'gatsby-plugin-image';
import ReactPlayer from 'react-player/lazy';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import {menuData} from '../data/MenuData'
// import { Link } from "gatsby"
// import { BrowserRouter } from "react-router-dom"
// import { HashLink } from "react-router-hash-link"

// import { AiOutlineGithub } from "react-icons/ai"
import { RiMapPinFill } from "react-icons/ri"

// import { RipMapPinAddFill } from "react-icons/ri"
// import { useStaticQuery } from 'gatsby'
// import { graphql } from 'gatsby'
// import Img from 'gatsby-image'

//rafce trick for auto populate
//change the button style, and where it points to
//pass in the pins that are hoverable
//mae sure that when clicking it just redirecfts to a part in the page and not actually a new page unless its my blog

//future add the video embedded in
//make sure to figure out how to fix the issues with minimizing vertically


   
// "deploy": "gatsby build --prefix-paths && gh-pages -d public"
    // "deploy": "gatsby-plugin-s3 deploy"

const Landing = () => {



  return (
    
    <LandingContainer id = "LandingInfo">
        <LandingBg>
            {/* <ImageBg src = {mainBackground} type ="img/png"/> */}
            <StaticImage style = { {position: 'absolute', width: '100%',
    height: '100%'} } src="../assets/images/backgroundmainOutside.png" alt="Background Img"  />
        </LandingBg>
        <LandingContent>
            <LandingItems>
                <LandingH1>Welcome</LandingH1>
                {/* <LandingP>About</LandingP> */}
                <Button primary = "true" big = "false" round = "true" smooth to="#contactInfo" stripHash>Contact</Button>

            </LandingItems>
            
                <NavMenu>
            {menuData.map((item, index)=> (
                <NavLink smooth to = {item.link} key= {index} stripHash>
                    {item.title}
                </NavLink>
            ))}
            </NavMenu>
            
          
          <LandingPinOne>
          <RiMapPinFill css={` font-size: 2.5rem;`}/>
          </LandingPinOne>

          <LandingPinTwo>
          <RiMapPinFill css={` font-size: 2.5rem;`}/>
          </LandingPinTwo>

          <LandingPinThree>
          <RiMapPinFill css={` font-size: 2.5rem;`}/>
          </LandingPinThree>

          <BackgroundVideo>

          <ReactPlayer url = 'https://youtu.be/tugXDYhF2wg' light = "https://i.ytimg.com/vi/tugXDYhF2wg/hqdefault.jpg" width = '100%' height = '100%' className = 'react-player' />

          </BackgroundVideo>
            
       
        </LandingContent>
           
    </LandingContainer>
    
    
  )
}

export default Landing


const LandingContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 0 1 rem;
    position: relative;
    margin-top: -100px;
    color: #fff;

    /* border: 2px solid green; */
    

    /* :before{
        content:"";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(
                    180deg,
                    rgba(0,0,0,0.2) 0%,
                    rgba(0,0,0,0.6) 100%
                ),
                linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    } */
    
`

const LandingBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`

// const ImageBg = styled.img`
//     width: 100%;
//     height: 100%;
//     -o-object-fit: cover;
//     object-fit: cover;

// `

// const imgStyle = styled.img`

//     width: 100%;
//     height: 100%;
//     -o-object-fit: cover;
//     object-fit: cover;
// `

//when adding the video on the side just apply same css rules i've used

const LandingItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;

    /* border: 2px solid blue; */

`

const LandingContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    min-height: 100%;
    width: 90%;
   
    /* padding: 0rem calc((100vw - 1460px) / 2); */
    /* padding: 0rem calc((100vw - 800px) / 2); */
    display: flex;
    justify-content: space-between;
    align-items: center;


    /* border: 2px solid red; */


    @media screen and (max-height: 450px){
        /* width: 1650px; */
        /* width: 1500px; */

        height: 800px;
    }
   
`

// const LandingP = styled.p`
//     font-size: clamp(1rem, 3vw, 3rem);
//     margin-bottom: 2rem;
//     font-weight: 400;

//     @media screen and (max-width: 768px){
//     display: none;
//   }

// `

const LandingH1 = styled.h1`
    font-size: clamp(2rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    font-weight: 800;
    /* line-height: 2em; */
    text-transform: uppercase;
    /* letter-spacing: 3px; */
    /* padding: 0 1rem; */

    /* &:hover{
        color: black;
        letter-spacing: 8px;
        cursor: pointer;
    } */

`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-end;
    /* margin-right: -48px; */
   


  @media screen and (max-width: 768px){
    display: none;
   }

`

const NavLink = styled(AnchorLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  /* padding: .5rem 1rem; */
  padding-top: .5rem;
  padding-bottom: .5rem;
  height: 100%;
  cursor: pointer;

  &:hover{
    color: black;
  }

  
`

const LandingPinOne = styled.div`
   position: absolute;
   padding: 0;
   left: 47%;
   margin: 0;
   color: white;
   cursor: pointer;

   &:hover{
    color: maroon;
    transition: 0.3s;
    transform: scale(1.2);
   }

   @media screen and (max-width: 500px){
        left: 52%;
   }
`

const LandingPinTwo = styled.div`
    position: absolute;
    padding: 0;
    left: 65%;
    top: 38%;
    margin: 0;
    cursor: pointer;

    &:hover{
    color: maroon;
    transition: 0.3s;
    transform: scale(1.2);
   }

   @media screen and (max-width: 500px){
    left: 71%;
    top: 38%;
   }
`

const LandingPinThree = styled.div`
    position: absolute;
    padding: 0;
    left: 61%;
    bottom: 25%;
    margin: 0;
    cursor:pointer;

    &:hover{
    color: maroon;
    transition: 0.3s;
    transform: scale(1.2);
   }
`

const BackgroundVideo = styled.div`
    position: absolute;
    right: 7%;
    bottom: 7%;
    width: 14%;
    height: 18%;
    opacity: .5;
    background-color: black;
    border: 2px solid black;

    &:hover{
        transition: 0.65s;
        transform: scale(1.25);
        cursor: pointer;

    }

    @media screen and (max-width: 1100px){
    display: none;
    }

    
`





