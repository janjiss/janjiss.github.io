const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug =
      node.frontmatter.slug ||
      createFilePath({ node, getNode, basePath: `articles` })
    createNodeField({ node, name: `slug`, value: slug })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`, result.errors)
    return
  }

  const articleTemplate = path.resolve(`src/templates/article.js`)

  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: articleTemplate,
      context: {
        id: node.id,
      },
    })
  })
}
