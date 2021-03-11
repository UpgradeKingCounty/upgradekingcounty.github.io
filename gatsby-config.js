const path = require("path");

let pathPrefix = "/";

if (
  process.env.GITHUB_REPOSITORY_OWNER &&
  process.env.GITHUB_REPOSITORY_OWNER != "UpgradeKingCounty"
) {
  // If we are running on a GitHub Action and it’s not the main repository, set
  // the path prefix so that resources will load properly when you view the site
  // at https://<YOUR_NAME>.github.io/upgradekingcounty.github.io/
  pathPrefix = "/upgradekingcounty.github.io";
}

module.exports = {
  siteMetadata: {
    title: "Upgrade King County",
    description: "Internet access for all.",
    author: "Share the Cities",
  },
  pathPrefix,
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: path.resolve("./src/components/layout.js") },
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-default-mdx-basic",
        short_name: "starter",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "minimal-ui",
        icon: "src/images/upgrade-seattle-stc-logo.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-postcss",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
