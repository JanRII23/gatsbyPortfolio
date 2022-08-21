
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
          <BlogCard key={post.id}>
            <BlogInfo>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            </BlogInfo>
            <TextWrap>
            <small>
              {post.frontmatter.author}, {post.frontmatter.date}
            </small>
            <p>{post.excerpt}</p>
            </TextWrap>
          </BlogCard>
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

const BlogCard = styled.div`
  border: 2px solid white;
`

const BlogInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;

    @media screen and (max-width: 280px){
        padding: 0 1rem;
    }

`

const TextWrap = styled.div`

    /* align-items: center; */
    text-align: center;
    /* position: absolute; */
    top: 375px;
`

const BlogContainer = styled.div`
    background: rgb(145,145,145);
    /* display: flex;
    justify-content: space-around;
    align-items: center; */
    min-height: 100vh;
    padding: 0 1 rem;
    position: relative;
    margin-top: -100px;
    flex-direction: column;
    border: 2px solid blue;
   
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
    grid-template-columns: repeat(4,1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;
 

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
        
    }

    @media screen and (max-width: 868px){
        grid-template-columns: 1fr;
    }

`

const BlogHeader = styled.div`

    font-size: clamp(1rem, 1vw, 2rem);
    text-align: center;
    margin-bottom: 5rem;
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    border: 2px solid blue;
    padding: 5rem calc((100vw - 1300px) / 2);

`


