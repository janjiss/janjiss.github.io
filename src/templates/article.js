import * as React from "react"
import { graphql, Link } from "gatsby"
import "../styles/article.css"

const mainStyle = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  maxWidth: "42rem",
  margin: "0 auto",
  padding: "2.5rem 1.5rem 4rem",
  lineHeight: 1.65,
}

const metaStyle = {
  marginTop: "3rem",
  paddingTop: "1.5rem",
  borderTop: "1px solid #e8e8ef",
  fontSize: "0.875rem",
  color: "#555",
}

const ArticleTemplate = ({ data }) => {
  const post = data.markdownRemark

  return (
    <main style={mainStyle}>
      <p style={{ marginBottom: "2rem", fontSize: "0.95rem" }}>
        <Link
          to="/"
          style={{ color: "#663399", fontWeight: 600, textDecoration: "none" }}
        >
          ← Home
        </Link>
      </p>
      <article
        className="article-prose"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      {post.frontmatter.source_url ? (
        <footer style={metaStyle}>
          <a
            href={post.frontmatter.source_url}
            rel="noopener noreferrer"
            style={{ color: "#663399", fontWeight: 600 }}
          >
            Originally on GitHub Gist
          </a>
          {post.frontmatter.date ? (
            <span style={{ color: "#777" }}> · {post.frontmatter.date}</span>
          ) : null}
        </footer>
      ) : null}
    </main>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      headings(depth: h1) {
        value
      }
      frontmatter {
        date
        source_url
      }
    }
  }
`

export const Head = ({ data }) => {
  const post = data.markdownRemark
  const h1 = post.headings?.[0]?.value
  const title = h1 ? `${h1} · janis.wtf` : `janis.wtf`
  const desc =
    "When code becomes a commodity, judgment, validation, and trust matter more for startup engineering teams."
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={desc} />
    </>
  )
}
