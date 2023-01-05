
import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import styled from 'styled-components'
import Layout from "../components/layout"

// import { GiBleedingEye } from "react-icons/gi"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { FaLinkedinIn } from 'react-icons/fa'

// import { BsCalendarWeek } from "react-icons/bs"
// import { GiWeightLiftingUp } from 'react-icons/gi'

import { useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import MobileSocial from "../components/MobileSocial"


// import { StaticImage } from 'gatsby-plugin-image';

export default function Blog({ data }) {
  const { posts } = data.blog



  // const image = getImage(posts.frontmatter.featuredImage)  


  return (
    <div>
      <Layout>
        
        <BlogContainer>


          {/* <BlogBg>
            
            <StaticImage style = { {position: 'absolute', width: '100%',
    height: '100%'} } src="../assets/images/backgroundmainOutside.png" alt="Background Img"  />
        </BlogBg> */}

          {/* <BlogHeader>

            </BlogHeader> */}

          <BlogHeaderMain>



            <Home>
              <h1><Link to="/" css={`color: white; text-decoration: none;
          &:hover{
            color: black;
          }
          `}>HOME</Link></h1>
            </Home>

            <Posts>

              <h1>&nbsp;|&nbsp;BLOG |</h1>

            </Posts>

            <Posts>
              <h1>&nbsp;SEARCH</h1>

              {/* <FaLinkedinIn css={`color: white; font-size: 2rem;
              &:hover{
                cursor: pointer;
              }

            `} />*/ }
            </Posts>

          </BlogHeaderMain>

          <NewBlogHeaderMain>

            <Information>

              <Button>OWASP Top 10</Button>
              <Button>Penetration Testing</Button>
              <Button>Network Based Attacks</Button>
              <Button>Malware Analysis</Button>

            </Information>


            {data.allFile.edges.map((image, key) => (
              <BlogImages key={key} fluid={image.node.childImageSharp.fluid} />
            ))}

            <Information>

              <Button>Powerlifting</Button>
              <Button>Calisthenics</Button>
              <Button>Triathlon</Button>
              <Button>Flow Movement</Button>

            </Information>


          </NewBlogHeaderMain>

          <BlogContent>

            {posts.map(post => (

              <BlogCard key={post.id}>

                <BlogImage>

                <Link to={post.fields.slug}>
                  <GatsbyImage image={getImage(post.frontmatter.featuredImage)} alt={post.frontmatter.author} />
                  {/* <div>Scientific References</div> */}
                  
                  </Link>
                </BlogImage>

                <BlogInfo>
                  <Link to={post.fields.slug} css={`color: white; text-decoration: none; padding: 5px;`}>
                    <h2>{post.frontmatter.title}

                      {/* <GiBleedingEye css={`
                  color: white;
                  font-size: 1.5rem;
                  padding-top: 2px;
                  &:hover{
                    cursor: pointer;
                  }              
              `} /> */}

                    </h2>

                  </Link>

                </BlogInfo>
                <TextWrap>

                  <Coheader>
                    <div>
                      {/* {post.frontmatter.author},  */}
                      {/* <BsCalendarWeek css={`
                  color: white;
                  font-size: 2rem;
                  
                
              `} /> */}

                  
                      {post.frontmatter.author}&nbsp;
                      {/* {post.frontmatter.date} */}



                    </div>
                    {/* <GiWeightLiftingUp css={`
                  color: white;
                  font-size: 2rem;
                  
               
              `} /> */}



                  </Coheader>

                  {/* <br></br> */}
                  <Link to={post.fields.slug} css={`color: white; text-decoration: none;`}>
                    
                  <p>{post.excerpt}</p>
                  </Link>

                </TextWrap>

                

                <Link to={post.fields.slug} css={`color: white; text-decoration: none; padding: 5px; display: flex; justify-content: space-between; align-items: center;`}>

                  <ButtonTwo>{post.frontmatter.keyword}</ButtonTwo>

                  <h3>READ MORE

                  </h3>

                </Link>

              </BlogCard>
            ))}




          </BlogContent>



        </BlogContainer>
        <MobileSocial/>
      </Layout>
    </div>
  )
}

// export const pageQuery = graphql`
//   query MyQuery {
//     blog: allMarkdownRemark(
//       filter: {frontmatter: {}}
//       sort: {fields: frontmatter___date, order: DESC}
//     ) {
//       posts: nodes {
//         fields {
//           slug
//         }
//         frontmatter {
//           date(fromNow: true)
//           title
//           author
//         }
//         excerpt(pruneLength: 480)
//         id
//       }
//     }
//   }

// `

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark(
      filter: {frontmatter: {}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title 
          author
          keyword
          featuredImage{
            childImageSharp {
              gatsbyImageData(width: 500
                              height: 280)
            }
          }
        }
        excerpt(pruneLength: 270)
        id
      }
    }

    allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: [ "cyberSecurity", "powMovement"]}}) {
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

`





const BlogCard = styled.div`
  /* border: 1px solid white;
  border-radius: 12px; */
  /* background: white; */
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: rgb(145,145,145);

  width: 500px;
  height: 500px;

  /* border: 2px solid white;
  border-radius: 12px; */
  border: 3px solid white;
  box-shadow: 12px 12px rgba(0,0,0,.15);
  transition: all .4s ease;

  &:hover{
    //border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%;
    box-shadow: 8px 8px rgba(0,0,0,.25);
    border: 3px solid rgba(0,0,0,.15);
  }


  @media screen and (max-width: 1200px) {
        width: 400px;
        height: 510px;
        /* border: 0px; */
        
    }

  @media screen and (max-width: 550px){
        width: 310px;
        height: 510px;
        justify-content: space-between;
       
    }

`

const Coheader = styled.small`
  /* border: 2px solid white; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;

`

const BlogImage = styled.div`
  /* border: 2px solid red; */
  //border-radius: 12px;
  display: flex;
  //justify-content: space-evenly;
  align-items: center;
  /* background-color: black; */
  border-bottom: 3px solid white;
  transition: all .4s ease;

  &:hover{
    //border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%;
 
    border-bottom: 3px solid rgba(0,0,0,.15);
  }


  @media screen and (max-width: 1200px){
        /* margin-bottom: 3rem; */
        /* padding-top: 10px; */
        
        
    }



`

const BlogInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    
    background: rgb(145,145,145);

    /* border: 2px solid blue; */

 

    @media screen and (max-width: 280px){
        padding: 0 1rem;
    }

`

const TextWrap = styled.div`

    /* align-items: center; */
    /* text-align: center; */
    /* position: absolute; */
    top: 375px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    height: 180px;
    padding: 8px;
    /* border: 2px solid purple; */
`

const BlogContainer = styled.div`
    background: rgb(145,145,145);
    min-height: 100vh;
    padding: 0 1 rem;
    position: relative;
    margin-top: -100px;
    flex-direction: column;
    padding: 5rem calc((100vw - 1300px) / 2);
   
`


//make sure this is grid style
const BlogContent = styled.div`
    display: grid;
    
    grid-template-columns: repeat(2,1fr);
    grid-gap: 30px 0px;
    justify-items: center;
    padding: 0 2rem;
    /* border: 2px solid purple; */
    /* padding: 20px; */
    

    @media screen and (max-width: 1800px) {
        grid-template-columns: 1fr 1fr;
        
    }

    @media screen and (max-width: 868px){
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 280px){
        padding: 0 1rem;
    }

`



const BlogHeaderMain = styled.div`

    font-size: clamp(1rem, 1vw, 2rem);
    text-align: center;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: row ;
    margin-bottom: 1rem;
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    
    /* border: 2px solid red; */
    padding: 1rem calc((100vw - 1300px) / 2);


`

// const BlogHeaderMain =styled.div`
//     font-size: clamp(1rem, 1vw, 2rem);
//     text-align: center;
//     display: flex;
//     align-self: flex-end;
//     flex-direction: row;
//     margin-bottom: 1rem;
//     color: white;
//     text-transform: uppercase;
//     font-weight: 600;

//     border: 2px solid green;
//     padding: 2rem calc((100vw - 1300px) / 2);
// `

const Posts = styled.div`

font-size: clamp(1rem, 3vw, 1.35rem);
`

const Home = styled.div`
 font-size: clamp(1rem, 2vw, 1.15rem);
`


const NewBlogHeaderMain = styled.div`
    /* border: 2px solid blue; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: flex-start;
    align-items: center;
    margin-top: 2rem;
    grid-gap: 20px;
    padding: 30px;

    @media screen and (max-width: 900px){
        /* display: none; */
        /* border: 2px solid blue; */
        justify-items: center;
        grid-template-columns: 1.5fr 1.5fr;
    }
    
`

const BlogImages = styled(Img)`
    border-radius: 5px;
    /* height: 100%; */
    width: 100%;
  
    @media screen and (max-width: 900px){
        
        display: none;

        /* border: 2px solid green; */
    }
`

const Button = styled.div`
  background: rgb(145,145,145);
  color: white;
  padding: 10px 10px;
  text-align: center;
  border: 2px solid rgba(0,0,0,.25);
  border-radius: 12px;
`

const ButtonTwo = styled.button`
  background: rgb(145,145,145);
  border: 2px solid white;
  color: white;
  padding: 5px 5px;
  border-radius: 5px;

`



const Information = styled.div`
    /* border-radius: 10px;
    color: white;
    width: 100%;
    height: 100%;
    border: 2px solid green;
    text-align: center;
    display:flex;
    justify-content:center;
    align-items: center; */

    width: 100%;
    height: 100%;
    /* border: 2px solid green; */
    color: white;
    padding: 16px 26px;
    display: flex;
    flex-direction: column;
    
    justify-content: space-evenly;

    @media screen and (max-width: 1200px){
        
        /* display: none; */
        /* border: 2px solid green; */
        padding: 16px 16px;
        gap: 5px;
        font-size: clamp(0.8rem, 1vw, 1.2rem);
    }

   

`