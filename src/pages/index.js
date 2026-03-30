import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/index.css"

const formatLoginDate = () => {
  const d = new Date()
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ]
  const pad = n => String(n).padStart(2, "0")
  return `${days[d.getDay()]} ${months[d.getMonth()]} ${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())} ${d.getFullYear()}`
}

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <p className="last-login">Last login: {formatLoginDate()} on ttys000</p>
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
                  <span className="post-title">
                    <span className="post-prompt">&gt; </span>
                    {title}
                  </span>
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

export const Head = ({ data }) => {
  const site = data.site.siteMetadata
  return (
    <>
      <title>{site.title}</title>
      <meta name="description" content={site.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={site.title} />
      <meta property="og:description" content={site.description} />
      <meta property="og:url" content={site.siteUrl} />
      <meta property="og:site_name" content={site.title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={site.title} />
      <meta name="twitter:description" content={site.description} />
    </>
  )
}

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
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
