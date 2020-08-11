import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
  return (
    <>
      <SEO title="Posts index" />
      {posts.map(({ to, title }) => (
        <ul key={to}>
          <li>
            <Link to={to}>{title}</Link>
          </li>
        </ul>
      ))}
    </>
  )
}
