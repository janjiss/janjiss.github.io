import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <h1
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.6rem",
          fontWeight: 500,
          marginBottom: "1rem",
        }}
      >
        Page not found
      </h1>
      <p style={{ color: "var(--color-fg-muted)" }}>
        Nothing here. <Link to="/">Go back home</Link>.
      </p>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found · janis.wtf</title>
