import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "../styles/global.css"
import "../styles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            name
            url
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata.author

  return (
    <div className="site-wrapper">
      <header className="site-header">
        <Link to="/" className="site-title">
          janis.wtf
        </Link>
      </header>
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <span>
          &copy; {new Date().getFullYear()}{" "}
          <a href={author.url} className="footer-author">
            {author.name}
          </a>
        </span>
      </footer>
    </div>
  )
}

export default Layout
