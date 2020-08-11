const { BASE_URL } = require("./constants")

module.exports = async ({ graphql, actions, reporter }) => {
  const {
    data: {
      allFile: { nodes },
    },
  } = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
        nodes {
          childMarkdownRemark {
            id
            excerpt
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  actions.createPage({
    path: BASE_URL,
    component: require.resolve("./list.js"),
  })

  nodes
    .map(({ childMarkdownRemark }) => childMarkdownRemark)
    .forEach(({ id, frontmatter: { slug } }) =>
      actions.createPage({
        path: `${BASE_URL}/${slug}`,
        component: require.resolve("./show.js"),
        context: { id },
      })
    )
}
