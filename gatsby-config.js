require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Weird Radio',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.ACESSTOKEN,
        spaceId: process.env.SPACEID,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
  ],
}
