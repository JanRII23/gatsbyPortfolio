import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import styled from 'styled-components'
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  const image = getImage(post.frontmatter.featuredImage)

  return (
    <Layout>
      <BlogPostContainer>

        <BlogPostHeader>
  
      
      <h1>{post.frontmatter.title}</h1>
      <Link to="/blog">BLOG HOME</Link>
     
      </BlogPostHeader>

      <BlogPostImage>
      <GatsbyImage image = {image} alt={post.frontmatter.author} />

      </BlogPostImage>

      <BlogPostContent>
      <small>{post.frontmatter.date}</small>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </BlogPostContent>

    </BlogPostContainer>
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
            gatsbyImageData(width: 200)
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
`

const BlogPostHeader = styled.div`

    font-size: clamp(1rem, 1vw, 2rem);
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    /* border: 2px solid blue; */
    padding: 3rem calc((100vw - 1300px) / 2);

`

const BlogPostContent = styled.div`

`

const BlogPostImage = styled.div`

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