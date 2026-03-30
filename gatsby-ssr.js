const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement("link", {
      key: "favicon",
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    }),
  ])
}
