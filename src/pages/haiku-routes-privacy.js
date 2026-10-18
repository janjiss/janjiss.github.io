import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/article.css"

const HaikuRoutesPrivacyPage = () => (
  <Layout>
    <article className="article">
      <header className="article-header">
        <h1 className="article-title">Haiku Routes — Privacy Policy</h1>
        <p className="article-meta">
          <span className="article-date">Last updated: October 18, 2026</span>
        </p>
      </header>
      <div className="article-body">
        <p>
          Haiku Routes (Android package <code>com.haikuroutes.app</code>) is
          provided by Janis Miezitis. This policy explains how the app handles
          location, routes, recordings, and information you choose to share.
          For privacy questions or deletion requests, email{" "}
          <a href="mailto:janjiss@gmail.com">janjiss@gmail.com</a>.
        </p>

        <h2>Accounts, advertising, and analytics</h2>
        <p>
          No account or payment is required. The app does not contain ads,
          advertising identifiers, or an analytics service. We do not sell your
          personal information or use your tracks for advertising or profiling.
        </p>

        <h2>Location and hike recordings</h2>
        <p>
          With your permission, the app uses your precise location to show your
          position, find nearby routes, measure progress, and record a hike that
          you start. A recording includes GPS coordinates, timestamps, distance,
          duration, and elevation information available from your device.
        </p>
        <p>
          When you start recording on Android, a foreground service with a
          persistent recording notification allows the track to continue while
          the screen is off or another app is open. You can pause or finish a
          recording in the app. The app does not need Android's "Allow all the
          time" location permission for this foreground-service recording.
        </p>
        <p>
          Recordings and imported routes are stored in the app's local storage.
          The app does not automatically upload your recorded GPS track, hike
          history, or imported route files to us. You can browse the map and use
          imported routes without granting location access; location-dependent
          features require that permission.
        </p>

        <h2>Maps, route downloads, and network requests</h2>
        <p>
          Maps are based on OpenStreetMap data and loaded from OpenFreeMap.
          Nearby route information is downloaded from our static route catalog
          hosted on GitHub Pages. Requests for map tiles and route index tiles
          identify the map area you are viewing or downloading. When the map is
          centered on your GPS position, that area may reveal your
          location. Requests also reach the providers with your IP address and
          ordinary technical request information. Offline map downloads use
          the same services when you download a region.
        </p>
        <p>
          These providers process requests and may retain technical logs under
          their own policies. See the{" "}
          <a href="https://openfreemap.org/privacy/">OpenFreeMap privacy policy</a>,{" "}
          <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
            GitHub privacy statement
          </a>, and{" "}
          <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare privacy policy</a>
          {" "}for CDN processing where used. The app's map and catalog requests
          use HTTPS. These requests do not include your saved GPX recordings.
        </p>

        <h2>Sharing, route suggestions, and external navigation</h2>
        <p>
          Exporting or sharing a GPX file sends it only to the app or recipient
          you select. GPX files contain geographic coordinates and may contain
          timestamps. Opening directions in an external maps app passes the
          selected route destination to that app; its own privacy policy applies.
        </p>
        <p>
          If you choose to suggest a route, Haiku Routes opens an email draft
          addressed to the developer with route details and the selected GPX
          attachment. Sending the email is your choice. We receive the message,
          attachment, and sender information from your email provider so we can
          review and respond to the suggestion. A suggested public trail may be
          added to the route catalog; your email address is not part of published
          route data. Contact us if you want a suggestion or message deleted.
        </p>

        <h2>Retention and deletion</h2>
        <p>
          You can remove routes and recordings from the app's library and delete
          downloaded map regions in Offline maps. Clearing the app's storage or
          uninstalling it removes its internal files and preferences, subject to
          the operating system's backup and restore behavior. Files you exported
          elsewhere and information sent to another service remain under your
          control or that service's policy. Device backups, if enabled by your
          operating system, follow your device and backup-provider settings.
        </p>
        <p>
          To ask about information you have sent to the developer, or request
          access, correction, or deletion, email{" "}
          <a href="mailto:janjiss@gmail.com">janjiss@gmail.com</a>. The app has no
          user account to delete. Map and hosting providers handle their own
          technical logs as described in their linked policies.
        </p>

        <h2>Children</h2>
        <p>
          Haiku Routes is intended for a general hiking audience and is not
          directed at children under 13. We do not knowingly request personal
          information from children. Contact us if a child has sent information
          to the developer so we can address it.
        </p>

        <h2>Changes and contact</h2>
        <p>
          We may update this policy as the app or its services change. The date
          at the top identifies the latest revision. For questions, email{" "}
          <a href="mailto:janjiss@gmail.com">janjiss@gmail.com</a> or visit{" "}
          <a href="https://janis.wtf/">janis.wtf</a>.
        </p>
      </div>
    </article>
  </Layout>
)

export default HaikuRoutesPrivacyPage

export const Head = ({ data }) => {
  const title = "Haiku Routes Privacy Policy · janis.wtf"
  const description = "Privacy policy for Haiku Routes: location, local GPX recordings, maps, sharing, and deletion."
  const url = `${data.site.siteMetadata.siteUrl}/haiku-routes-privacy/`
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
