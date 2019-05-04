module.exports = {
  siteMetadata: {
    title: `TrickiT - Abs Workout`,
    description: `TrickiT Workout, YouTube Channel.`,
    author: `@denis`,
    siteUrl: `https://trickit.netlify.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `trickit workout`,
        short_name: `trickit workout`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: '#000000',
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-139534998-1",
      },
    },
  ],
}
