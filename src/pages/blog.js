
import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import styled from 'styled-components'
import Layout from "../components/layout"
// import { StaticImage } from 'gatsby-plugin-image';

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <div>
      <Layout>
        <BlogContainer>

        {/* <BlogBg>
            
            <StaticImage style = { {position: 'absolute', width: '100%',
    height: '100%'} } src="../assets/images/backgroundmainOutside.png" alt="Background Img"  />
        </BlogBg> */}

        <BlogHeader>

          <h1>BLOG POSTS</h1>
          <Link to="/">HOME</Link>

        </BlogHeader>

        <BlogContent>   

        {posts.map(post => (
          <article key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <small>
              {post.frontmatter.author}, {post.frontmatter.date}
            </small>
            <p>{post.excerpt}</p>
          </article>
        ))}
  

        </BlogContent>

        </BlogContainer>

      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date
          title
          author
        }
        excerpt
        id
      }
    }
  }
`

const BlogContainer = styled.div`
    background: rgb(145,145,145);
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 100vh;
    padding: 0 1 rem;
    position: relative;
    margin-top: -100px;
    flex-direction: column;
    /* border: 2px solid blue; */
   
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

`

const BlogHeader = styled.div`

  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;

`


