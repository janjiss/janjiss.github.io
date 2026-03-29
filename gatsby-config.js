/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `janis.wtf`,
    description: `Personal site`,
    siteUrl: `https://janis.wtf`,
    author: {
      name: `Janis Miezitis`,
      url: `https://github.com/janjiss`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
