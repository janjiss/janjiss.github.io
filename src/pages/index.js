import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  maxWidth: 640,
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 24,
}
const paragraphStyles = {
  marginBottom: 0,
  lineHeight: 1.5,
}
const codeStyles = {
  color: "#8A6534",
  padding: "2px 6px",
  backgroundColor: "#FFF4DB",
  fontSize: "0.95rem",
  borderRadius: 4,
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>janis.wtf</h1>
      <p style={{ ...paragraphStyles, marginBottom: 24 }}>
        <Link
          to="/when-code-becomes-a-commodity/"
          style={{ color: "#663399", fontWeight: 600 }}
        >
          When Code Becomes a Commodity: What Matters for Startup Engineering
          Teams Now
        </Link>
      </p>
      <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to build this
        page.
      </p>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>janis.wtf</title>
