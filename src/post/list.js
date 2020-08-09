import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../core/layout"
import SEO from "../core/seo"
import { BASE_URL } from "./constants"

export default () => {
  const {
    allFile: { nodes },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
        nodes {
          childMarkdownRemark {
            excerpt
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `)

  const posts = nodes.map(
    ({
      childMarkdownRemark: {
        excerpt,
        frontmatter: { slug, title },
      },
    }) => ({
      to: `${BASE_URL}/${slug}`,
      title,
      excerpt,
    })
  )
  // const { markdownRemark } = data // data.markdownRemark holds your post data
  // const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title="Posts index" />
      {posts.map(({ to, title }) => (
        <ul>
          <li>
            <Link to={to}>{title}</Link>
          </li>
        </ul>
      ))}
      {/* <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div> */}
      {/* </div> */}
    </Layout>
  )
}
