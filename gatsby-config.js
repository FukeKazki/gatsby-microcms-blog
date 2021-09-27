require("dotenv").config({
  path: ".env"
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby-microcms-blog",
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: "fukkeblog",
        apis: [{
          endpoint: "techblog"
        }]
      }
    },
    {
      resolve: `gatsby-plugin-typegen`
    }
  ],
};
