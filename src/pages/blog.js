
import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import styled from 'styled-components'
import Layout from "../components/layout"

import { GiBleedingEye } from "react-icons/gi"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'


// import { StaticImage } from 'gatsby-plugin-image';

export default function Blog({ data }) {
  const { posts } = data.blog



  // const image = getImage(posts.frontmatter.featuredImage)  


  return (
    <div>
      <Layout>
        <BlogContainer>
          <ContentWrapper>

            {/* <BlogBg>
            
            <StaticImage style = { {position: 'absolute', width: '100%',
    height: '100%'} } src="../assets/images/backgroundmainOutside.png" alt="Background Img"  />
        </BlogBg> */}

            {/* <BlogHeader>

            </BlogHeader> */}

            <BlogHeaderMain>

          <Posts>
          <h2>BLOG POSTS  |  </h2>
      
          </Posts>
          <Home>
          <h2><Link to="/" css={`color: white; text-decoration: none;
          &:hover{
            color: black;
          }
          `}>&nbsp;HOME</Link></h2>
          </Home>
        </BlogHeaderMain>

            <NewBlogHeaderMain>




              {data.allFile.edges.map((image, key) => (
                <BlogImages key={key} fluid={image.node.childImageSharp.fluid} />
              ))}



            </NewBlogHeaderMain>

            <BlogContent>

              {posts.map(post => (

                <BlogCard key={post.id}>

                  <BlogInfo>
                    <Link to={post.fields.slug} css={`color: black; text-decoration: none; padding: 5px;`}>
                      <h2>{post.frontmatter.title} <GiBleedingEye css={`
                  color: black;
                  font-size: 1.5rem;
                  padding-top: 2px;
                  &:hover{
                    cursor: pointer;
                  }              
              `} /></h2>

                    </Link>

                  </BlogInfo>
                  <TextWrap>
                    <small>
                      {post.frontmatter.author}, {post.frontmatter.date}
                    </small>
                    <br></br>
                    <p>{post.excerpt}</p>

                  </TextWrap>
                  <BlogImage>
                    <GatsbyImage image={getImage(post.frontmatter.featuredImage)} alt={post.frontmatter.author} />
                    {/* <div>Scientific References</div> */}
                  </BlogImage>
                </BlogCard>
              ))}


            </BlogContent>

          </ContentWrapper>

        </BlogContainer>

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
          featuredImage{
            childImageSharp {
              gatsbyImageData(width: 350
                              height: 200)
            }
          }
        }
        excerpt(pruneLength: 480)
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
const NewBlogHeaderMain = styled.div`
    /* border: 2px solid blue; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 20px;
    padding: 40px;

    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
        height: auto;
    }
    
`

const BlogImages = styled(Img)`
    border-radius: 10px;
    height: 100%;

    @media screen and (max-width: 500px){
        
        display: none;
    }
`

const ContentWrapper = styled.div`


`


const BlogCard = styled.div`
  border: 2px solid black;
  border-radius: 12px;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 450px;
  height: 500px;

  @media screen and (max-width: 1200px) {
        width: 400px;
        height: 550px;
        
    }

`

const BlogImage = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 868px){
        /* margin-bottom: 3rem; */
        padding-top: 10px;
    }

`

const BlogInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;

    /* border: 2px solid green; */

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
    justify-content: space-between;
    height: 220px;
    padding: 8px;
    /* border: 2px solid blue; */
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

// const BlogBg = styled.div`
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     right: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;


// `


//make sure this is grid style
const BlogContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 30px 0px;
    justify-items: center;
    padding: 0 2rem;
    border: 2px solid green;
    

    @media screen and (max-width: 1800px) {
        grid-template-columns: 1fr 1fr;
        
    }

    @media screen and (max-width: 868px){
        grid-template-columns: 1fr;
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

   // border: 2px solid green;
`

const Home = styled.div`
 // border: 2px solid green;
`


