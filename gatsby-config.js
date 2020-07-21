const path = require('path')
const urljoin = require('url-join')
const config = require('./config/SiteConfig')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

const cfg = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    titleAlt: config.siteTitleAlt,
    description: config.siteDescription,
    siteUrl: urljoin(config.siteUrl, pathPrefix),
    image_url: `${urljoin(config.siteUrl, pathPrefix)}${config.siteLogo}`,
    author: '@manoz',

    // rssMetadata: {
    //   site_url: urljoin(config.blogUrl, pathPrefix),
    //   feed_url: urljoin(config.blogUrl, pathPrefix, config.siteRss),
    //   title: config.blogTitle,
    //   description: config.blogDescription,
    //   image_url: `${urljoin(config.blogUrl, pathPrefix)}${config.siteLogo}`,
    //   author: config.userName,
    //   copyright: config.copyright,
    // },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.siteGATrackingID,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: 'Manoz',
        description: config.siteDescription,
        start_url: config.pathPrefix,
        theme_color: config.themeColor,
        background_color: '#fff',
        display: 'minimal-ui',
        icons: [
          {
            src: '/logos/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/logos/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Nunito:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [require('tailwindcss')],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}

if (process.env.CONTEXT === 'production') {
  const googleAnalyticsCfg = {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: config.siteGATrackingID,
      head: false,
    },
  }
  cfg.plugins.push(googleAnalyticsCfg)
}

module.exports = cfg
