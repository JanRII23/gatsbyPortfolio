import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  const image = getImage(post.frontmatter.featuredImage)

  return (
    <div>
      <Link to="/blog">BLOG HOME</Link>
      <h1>{post.frontmatter.title}</h1>
      <GatsbyImage image = {image} alt={post.frontmatter.author} />
      <small>{post.frontmatter.date}</small>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
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
