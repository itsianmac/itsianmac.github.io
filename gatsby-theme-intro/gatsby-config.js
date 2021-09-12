let basePath = "/"
let contentPath = "content/"
let showThemeLogo = true
let theme = "dark-blue"

module.exports = {
  siteMetadata: {
    description: "Personal page of Ian MacPherson",
    locale: "en",
    showThemeLogo,
    title: "Ian MacPherson",
    formspreeEndpoint: "https://formspree.io/f/{your-id}",
  },
  
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss")(require("./tailwind.config")(theme)),
          require("postcss-input-range"),
          require("autoprefixer"),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentPath,
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
} 
