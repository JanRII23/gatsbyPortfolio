import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa' //this is how you import some icons from react
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
// import {menuData} from '../data/MenuData'
// import {Button} from "./Button"


//note that styles could technically be placed in a different file
//use graphql to add the logo image, and the misc, make sure to keep the button for phone view, otherwise just use the img

//how do i add a sticky vertical social?

const Header = () => {

  const data = useStaticQuery(graphql`

    query{
      allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["circularLogo"]}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  
  `)




  return (
    <Nav>
        <NavLink to="#ProfileInfo">JANRII</NavLink>
        <Bars />
        {/* <NavMenu>
          {menuData.map((item, index)=> (
              <NavLink to = {item.link} key= {index}>
                {item.title}
              </NavLink>
          ))}
        </NavMenu> */}
        {/* <NavBtn>
          <Button primary = "true" round = "true" to= "/trips">Explore</Button>
        </NavBtn> */}
        <NavImg>

          {data.allFile.edges.map((image,key)=> (
                 <Images key = {key} fluid={image.node.childImageSharp.fluid}/>
            ))}

        </NavImg>
    </Nav>
  )
  
}


export default Header

const Nav = styled.nav`
  background: transparent;
  height: 100px;
  display: flex;
  justify-content: space-between;
  /* padding: 0.5rem calc((100vw - 1300px) / 2); */
  padding: 0.75rem calc((100vw - 1720px) / 2);

  z-index: 100;
  position: relative;
  /* border: 2px solid blue; */
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  font-size: clamp(1rem, 3vw, 1.35rem);
  cursor: pointer;
  /* border: 2px solid green; */
  font-weight: 600;

  &:hover{
    color: black;
  }
  
`

//Bars will not be shown on the desktop
const Bars = styled(FaBars)`
  display: none;
  color: #fff; 
  /* border: 2px solid red; */

  @media screen and (max-width: 768px){
    display: none;
    /* display: block; */
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

// const NavMenu = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: -48px;

//   border: 2px solid red;

//   @media screen and (max-width: 768px){
//     display: none;
//   }

// `

// const NavBtn = styled.div`
  
//   display: flex;
//   align-items: center;
//   margin-right: 24px;
//   @media screen and (max-width: 768px){
//     display: none;
//   }
// `

const NavImg = styled.div`
    /* width: 40%; */
    height: 100%;
    margin-right: 24px;
    /* border: 2px solid red; */
    display: flex;
    justify-content: center;
    align-items: flex-start;
   
   @media screen and (max-width: 768px){
     display: none;
   }
`

const Images = styled(Img)`

    width: 70px;
    height: 72px;
    

`