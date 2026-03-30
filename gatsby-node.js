const path = require(`path`)
const fs = require(`fs`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug =
      node.frontmatter.slug ||
      createFilePath({ node, getNode, basePath: `articles` })
    createNodeField({ node, name: `slug`, value: slug })

    const words = (node.internal.content || ``).split(/\s+/).filter(Boolean).length
    const minutes = Math.max(1, Math.ceil(words / 230))
    createNodeField({ node, name: `readingTime`, value: `${minutes} min read` })
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

  const cname = path.resolve(`CNAME`)
  if (fs.existsSync(cname)) {
    fs.copyFileSync(cname, path.resolve(`public/CNAME`))
  }

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
