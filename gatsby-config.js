module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Weird Radio",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "",
        spaceId: "",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
  ],
};
