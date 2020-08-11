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
        frontmatter: { slug, title },
      },
    }) => ({
      to: `${BASE_URL}/${slug}`,
      title,
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
