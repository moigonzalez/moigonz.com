module.exports = {
  siteMetadata: {
    title: 'moigonz',
    description: 'Photography & Web Development',
    author: '@moigonz',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pictures',
        path: `${__dirname}/static/img`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'moigonz',
        short_name: 'moigonz',
        start_url: '/',
        background_color: '#CC2800',
        theme_color: '#CC2800',
        display: 'minimal-ui',
        icon: 'src/images/moigonz-logo-tiny.png', // This path is relative to the root of the site.
      },
    },
    // Enable if one day I'd like a blog
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/content/blog`,
    //     name: 'blog',
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/masonry`,
        name: 'masonry',
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-remark',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
