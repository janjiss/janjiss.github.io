import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/index.css"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      {posts.length > 0 ? (
        <ul className="post-list">
          {posts.map((post, index) => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <li
                key={post.fields.slug}
                className="post-item"
                style={{ "--i": index }}
              >
                <Link to={`${post.fields.slug}/`} className="post-link">
                  <span className="post-title">{title}</span>
                  {post.frontmatter.date && (
                    <time className="post-date">{post.frontmatter.date}</time>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      ) : (
        <p style={{ color: "var(--color-fg-muted)" }}>Nothing here yet.</p>
      )}
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>janis.wtf</title>
    <meta name="description" content="Personal site" />
  </>
)

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
`
