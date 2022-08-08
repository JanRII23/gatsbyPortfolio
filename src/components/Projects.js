import React from 'react'
import styled from 'styled-components'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
// import { Button } from './Button';
// import { ImLocation } from "react-icons/im"

import { HiExternalLink } from "react-icons/hi"

//make sure that for the unity project it has the unity logo playing and on hover it switches over to gallery and video link/view
    //actually on hover showcase images, but button click it lazy loads a ut video
//make sure to add a github link to the projects & also make sure to refine description
//keep it at four for now, but for sure have Unity, ehr/emr, rest are opacity in progres sbackground in hover shows the current stack being implemented

//link the videos to the unlitsed yt video , but later on add a onclick event that hover as a cinema view liek youtube
//on hover add a description, but on phone view have it as different

const Projects = ({heading}) => {

    const data = useStaticQuery(graphql`

    query ProjectsQuery {
        allProjectsJson {
          edges {
            node {
              alt
              button
              link
              name
              img {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      
    `)

    function getProjects(data){
        const projectsArray = [];
        data.allProjectsJson.edges.forEach((item, index) => {
            projectsArray.push(
                <ProjectCard key = {index}>
               
                    <ProjectImg 
                    // src={item.node.img.childImageSharp.fluid.src}
                        fluid= {item.node.img.childImageSharp.fluid} 
                        alt = {item.node.alt}
                        />
                    <ProjectInfo>
                        <TextWrap>
                            <a href = {item.node.link} el = "noopener noreferrer">
                            <HiExternalLink css={`color: white; font-size: 1.5rem;
                                &:hover{
                                    cursor: pointer;
                                }
                            `}/>
                            </a>
                            <ProjectTitle>{item.node.name}</ProjectTitle>
                        </TextWrap>
                        {/* <Button to ="/projects" primary = "true" round = "true" css={`position: absolute; top: 420px; font-size: 14px;`}>{item.node.button}</Button> */}
                    </ProjectInfo>
                </ProjectCard>
            )
        })

        return projectsArray;
    }

  return (
    <ProjectsContainer id = "ProjectInfo">
        <ProjectsHeading>
            {heading}
        </ProjectsHeading>

        <ProjectsWrapper>
            {getProjects(data)}
        
        </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects

const ProjectsContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: rgb(145,145,145);
    /* color: white; */
    

`

const ProjectsHeading = styled.div`

    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: white;
    text-transform: uppercase;
    font-weight: 600;
`

const ProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;
    /* border: 2px solid blue; */

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
        
    }

    @media screen and (max-width: 868px){
        grid-template-columns: 1fr;
    }

`

const ProjectCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease;
`
const ProjectImg = styled(Img)`
    height: 100%;
    max-width: 100%;
    position: relative;
    border-radius: 10px;
    filter: brightness(70%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    

    &:hover{
        filter: brightness(100%);
        
    }

    @media screen and (max-width: 768px){

        
        
    }
`

const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;

    @media screen and (max-width: 280px){
        padding: 0 1rem;
    }
`
const TextWrap = styled.div`

    display: flex;
    align-items: center;
    position: absolute;
    top: 375px;

`
const ProjectTitle = styled.div`

    font-weight: 400;
    font-size: 1rem;
    margin: 0.5rem;
    color: white;
`