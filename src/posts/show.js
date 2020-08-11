import React from "react"
import SEO from "../core/seo"
import { graphql } from "gatsby"

export default ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <SEO title={frontmatter.title} />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query PostShowQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
