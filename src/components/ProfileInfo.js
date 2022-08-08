import React from 'react'
import styled from 'styled-components'
// import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import Img from 'gatsby-image'
// import { FaRegLightbulb } from "react-icons/fa"
// import {GiSpartanHelmet} from "react-icons/gi"
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'

//make sure to keep names unique

//1 real photo and another one that is animated/cartoonized, bio + 

const ProfileInfo = () => {

    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: [ "AprofilePic", "AprofilePic2"]}}) {
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
    
    <AboutContainer id = "ProfileInfo" >
        {/* <TopLine>
            About
        </TopLine> */}
        <Description>
            
        </Description>
        <ContentWrapper>
            <ColumnOne>
                <Testimonial>
                {/* <GiSpartanHelmet css={`color: black; font-size: 2rem; margin-bottom: 1rem;`}/> */}
                    <h3>Jan Rejas II  </h3>
                    <p> I'm Jan Rejas II, an aspiring full-stack swe, who's passionate about implementing unique digital creative experiences with optimization in mind. Furthermore, I aim to consistently improve my technical skill and breadth of knowledge related to the ever-changing tech world
                    </p>

                   
                    
                </Testimonial>

                <Testimonial>
            
                    <h3>Programming Languages </h3>
                    
                        <ul>
                            <li>C++</li>
                            <li>Python</li>
                            <li>C#</li>
                    
                            
                
                        </ul>
                        <ul>
                            <li>R</li>
                            <li>HTML/CSS</li>
                            <li>Javascript</li>
                         
                
                        </ul>
                   

                   
                    
                </Testimonial>

                <Testimonial>
            
            <h3>Frameworks + Libraries + Tools </h3>
            
                <ul>
                    <li>jQuery</li>
                    <li>Tkinter</li>
                    <li>React.js</li>
                    <li>Gatsby</li>
                    <li>GraphQL</li>
                    <li>SQLite3</li>
                   

                </ul>

                <ul>
                    
                    <li>Git</li>
                    <li>AWS</li>
                    <li>Windows</li>
                    <li>Mac OS</li>
                    <li>Linux</li>
                   
                    <li>Unity</li>
                   
            
                </ul>

                <ul>
                    
                    <li>VSCode</li>
                    <li>Jupyter</li>
                 
                    <li>Colab</li>
            
                </ul>
            

           
            
                </Testimonial>

               
            </ColumnOne>
            <ColumnTwo>
            {data.allFile.edges.map((image,key)=> (
                 <Images key = {key} fluid={image.node.childImageSharp.fluid}/>
            ))}
               

            </ColumnTwo>
        </ContentWrapper>
    </AboutContainer>

  )
}

export default ProfileInfo

const AboutContainer = styled.div`
    width: 100%;
    background: #fcfcfc;
    /* color: #000; */
    background: rgb(145,145,145);
    padding: 5rem calc((100vw - 1300px) / 2);
    height: 100%;
    color: white;
`

// const TopLine = styled.p`
//     color: #077bf1;
//     font-size: 1rem;
//     padding-left: 2rem;
//     margin-bottom: 0.75rem;
// `

const Description = styled.p`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;
    text-transform: uppercase;
`

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`

const ColumnOne = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`

const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;
    

    h3{
        margin-bottom: 1rem;
        font-size: 2rem;
        font-style: italic;
        
    }

    p{
        color: #3b3b3b;
        color: white;
    }

    ul{
        display: inline-block;
        width: 20%;
        vertical-align: top;

        @media screen and (max-width: 500px){
        width: 30%;
    }
    }

    li{
        margin-bottom: 2px;
    }
    
`


const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 10px;

    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
        height: auto;
    }

`

const Images = styled(Img)`
    border-radius: 10px;
    height: 100%;

    @media screen and (max-width: 500px){
        
        height: 500px;
    }
    
`