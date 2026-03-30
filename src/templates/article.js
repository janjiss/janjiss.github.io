import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ReadingProgress from "../components/reading-progress"
import "../styles/article.css"

const ArticleTemplate = ({ data }) => {
  const post = data.markdownRemark
  const title = post.frontmatter.title
  const date = post.frontmatter.date
  const readingTime = post.fields.readingTime
  const authorName = data.site.siteMetadata.author.name

  return (
    <Layout>
      <ReadingProgress />
      <article className="article">
        <header className="article-header">
          {title && <h1 className="article-title">{title}</h1>}
          <div className="article-meta">
            <span className="article-author">{authorName}</span>
            <span className="article-meta-sep">/</span>
            {date && <time className="article-date">{date}</time>}
            {readingTime && (
              <>
                <span className="article-meta-sep">/</span>
                <span className="article-reading-time">{readingTime}</span>
              </>
            )}
          </div>
        </header>
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </Layout>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        author {
          name
        }
        siteUrl
        title
        description
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(pruneLength: 160)
      fields {
        slug
        readingTime
      }
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }) => {
  const post = data.markdownRemark
  const site = data.site.siteMetadata
  const title = post.frontmatter.title
    ? `${post.frontmatter.title} · ${site.title}`
    : site.title
  const description = post.excerpt || site.description
  const url = `${site.siteUrl}${post.fields?.slug || ""}`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.frontmatter.title || site.title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={site.title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={post.frontmatter.title || site.title} />
      <meta name="twitter:description" content={description} />
    </>
  )
}
