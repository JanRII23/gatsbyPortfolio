module.exports = {
  siteMetadata: {
    title: `Gatsby Portfolio Website`,
    description: `A Portfolio website showcasing projects, socials, & profile.`,
    author: `@JanRII`,
    siteUrl: `https://www.janrii.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    'gatsby-plugin-styled-components',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/assets/videos`,
      },
    },
  

    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },

    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'www.janrii.com',
          acl:null
      },
    },

    
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lacquer`,
          
        ],
        display: 'swap'
      },
    },


  ],
}
