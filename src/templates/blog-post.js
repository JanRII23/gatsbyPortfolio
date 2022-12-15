import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import styled from 'styled-components'
import Layout from "../components/layout"
import MobileSocial from "../components/MobileSocial"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  const image = getImage(post.frontmatter.featuredImage)

  return (
    <Layout>
      <BlogPostContainer>

        <BlogHeaderMain>



          <Home>
            <h1><Link to="/" css={`color: white; text-decoration: none;
&:hover{
color: black;
}
`}>HOME</Link></h1>
          </Home>

          <Posts>

            <h1>&nbsp;|&nbsp;<Link to="/blog" css={`color: white; text-decoration: none;
&:hover{
color: black;
}
`}>BLOG</Link> |</h1>

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

        <PostTitle>
        <h1>{post.frontmatter.title}</h1>
        </PostTitle>

        <BlogPostImage>
          <GatsbyImage image={image} alt={post.frontmatter.author} />

        </BlogPostImage>

        <BlogPostContent>
          {/* <small>{post.frontmatter.date}</small> */}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </BlogPostContent>

      </BlogPostContainer>
      <MobileSocial/>
    </Layout>
  )
}
// export const query = graphql`
//   query BlogQuery($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         date
//       }
//     }
//   }
// `

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 1000
                            height: 400)
          }
        }
      }
    }
  }
`

const BlogPostContainer = styled.div`
    background: rgb(145,145,145);
    min-height: 100vh;
    padding: 0 1 rem;
    position: relative;
    margin-top: -100px;
    flex-direction: column;
    padding: 5rem calc((100vw - 1300px) / 2);
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
const Posts = styled.div`

font-size: clamp(1rem, 3vw, 1.35rem);
`

const PostTitle = styled.div`
  /* border: 2px solid green; */
  display: flex;
  padding: 1rem calc((100vw - 1550px) / 2);
  color: white;

  @media screen and (max-width: 1000px){
        /* display: none; */
        /* border: 2px solid blue; */
        //justify-items: center;
        padding: 20px;
   
    }
`

const Home = styled.div`
 font-size: clamp(1rem, 2vw, 1.15rem);
`

const BlogPostContent = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  padding: 1rem calc((100vw - 1550px) / 2);
  color: white;
  

  @media screen and (max-width: 1000px){
        /* display: none; */
        /* border: 2px solid blue; */
        //justify-items: center;
        padding: 10px 80px 10px 20px;
    
   
    }
`

const BlogPostImage = styled.div`
  /* border: 2px solid red; */
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 1rem calc((100vw - 1550px) / 2);

  @media screen and (max-width: 1000px){
        /* display: none; */
        /* border: 2px solid blue; */
        //justify-items: center;
        padding: 20px;
   
    }
  /* @media screen and (max-width: 900px){
        
        width: 600px;
    } */

`

//consider changing the layout
//add margin/padding so that the content will be centered
//chang the date formatting
//bigger images
//hyperlink scientific documents, videos, etc.

//add time to read, add headers and sections, 
//@ the end of the page add about me and related articles???


//create a new components aboutMe page personalized about my lifting experience, totals, programs I've run, priorities, inspirations, etc...

//review glofox.com/blog/fitness-blogs/