import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"
import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <Link to="/" className="site-title">
          janis.wtf
        </Link>
      </header>
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <span>&copy; {new Date().getFullYear()}</span>
      </footer>
    </div>
  )
}

export default Layout
