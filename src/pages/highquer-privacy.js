import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/article.css"

const HighQuerPrivacyPage = () => {
  return (
    <Layout>
      <article className="article">
        <header className="article-header">
          <h1 className="article-title">HighQuer — Privacy Policy</h1>
          <p className="article-meta">
            <span className="article-date">Last updated: April 15, 2026</span>
          </p>
        </header>
        <div className="article-body">
          <p>
            HighQuer (“the app”) is provided by Janis Miezitis. This policy
            describes how the app handles information when you use it on your
            Android device.
          </p>

          <h2>Summary</h2>
          <p>
            HighQuer is built for viewing GPX routes and recording outdoor
            tracks. We do not require an account. Location and your routes are
            processed on your device; we do not operate our own servers to
            collect your personal data for advertising or profiling.
          </p>

          <h2>Information the app accesses</h2>
          <h3>Location</h3>
          <p>
            The app uses your device’s location to show your position on the
            map, compute distance to a route, and record GPS tracks when you
            start recording. With your permission, location may be collected in
            the background so recording can continue when the screen is off or
            while you use other apps.
          </p>
          <p>
            Location data from recording is stored locally on your device (for
            example as part of saved GPX files and app storage). It is not
            sent to servers we control.
          </p>

          <h3>Files and storage</h3>
          <p>
            When you import or save GPX files, the app stores them on your
            device. You can delete routes and recordings from within the app.
            Uninstalling the app removes app data subject to your device’s
            behavior.
          </p>

          <h3>Maps and network</h3>
          <p>
            Map tiles and styles are loaded from third-party providers over the
            internet (see below). When you use “offline maps,” map data is
            downloaded to your device for later use without a network
            connection. Those downloads still originate from the map provider’s
            servers when you are online.
          </p>

          <h2>Third-party services</h2>
          <ul>
            <li>
              <strong>OpenStreetMap / map hosting:</strong> The app displays
              maps using services that host OpenStreetMap-based tiles and
              styles (for example OpenFreeMap). Requests may include standard
              technical data such as IP address as received by those providers.
              See their respective policies and terms.
            </li>
            <li>
              <strong>Google Play:</strong> Google processes information in
              connection with app distribution and updates according to
              Google’s policies.
            </li>
          </ul>

          <h2>Sharing</h2>
          <p>
            The app does not upload your tracks to our servers. If you use
            system features such as “Share” or “Export,” you choose where files
            go (e.g. another app, email, or cloud storage). That sharing is
            between you and the service you select.
          </p>

          <h2>Children</h2>
          <p>
            The app is not directed at children under 13, and we do not
            knowingly collect personal information from children.
          </p>

          <h2>Changes</h2>
          <p>
            We may update this policy from time to time. The “Last updated” date
            at the top will change when we do. Continued use of the app after
            changes means you accept the updated policy.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy questions about HighQuer, contact the developer through
            the support channel listed on this app’s Google Play store listing,
            or visit{" "}
            <a href="https://janis.wtf/">janis.wtf</a>.
          </p>
        </div>
      </article>
    </Layout>
  )
}

export default HighQuerPrivacyPage

export const Head = ({ data }) => {
  const siteUrl = data.site.siteMetadata.siteUrl
  const title = "HighQuer Privacy Policy · janis.wtf"
  const description =
    "Privacy policy for the HighQuer Android app (GPX routes and outdoor recording)."
  const url = `${siteUrl}/highquer-privacy/`
  return (
    <>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
