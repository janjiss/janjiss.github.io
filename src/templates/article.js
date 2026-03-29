import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/article.css"

const ArticleTemplate = ({ data }) => {
  const post = data.markdownRemark
  const title = post.frontmatter.title
  const date = post.frontmatter.date
  const authorName = data.site.siteMetadata.author.name

  return (
    <Layout>
      <article className="article">
        <header className="article-header">
          {title && <h1 className="article-title">{title}</h1>}
          <div className="article-meta">
            <span className="article-author">{authorName}</span>
            {date && (
              <>
                <span className="article-meta-sep">/</span>
                <time className="article-date">{date}</time>
              </>
            )}
          </div>
        </header>
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        {post.frontmatter.source_url && (
          <footer className="article-footer">
            <a href={post.frontmatter.source_url} rel="noopener noreferrer">
              View original on GitHub
            </a>
          </footer>
        )}
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
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        source_url
      }
    }
  }
`

export const Head = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title
  return <title>{title ? `${title} · janis.wtf` : `janis.wtf`}</title>
}
