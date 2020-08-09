module.exports = async ({ graphql, actions, reporter }) => {
  const {
    data: {
      allMarkdownRemark: { nodes },
    },
  } = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  nodes.forEach(({ id, frontmatter: { slug } }) =>
    actions.createPage({
      path: `/posts/${slug}`,
      component: require.resolve("./show.js"),
      context: { id },
    })
  )
}
