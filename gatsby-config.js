const path = require('path')

const gaTrackingId = 'UA-46691801-2'
const description = 'Front-end developer working in Lyon, France'
const name = 'Kevin Legrand'

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: name,
    titleTemplate: '%s | Front-end developer',
    description,
    siteUrl: 'https://k-legrand.com',
    image: '/assets/screenshot.png',
    twitterUsername: '@manoz',
    author: '@manoz',
    fbAppID: '1409742559286111',
    lang: 'en',
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
        trackingId: gaTrackingId || '',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name,
        short_name: 'Manoz',
        description,
        start_url: '/',
        theme_color: '#ed6eae',
        background_color: '#edf2f7',
        display: 'standalone',
        icon: 'static/logos/icon.png',
        icons: [
          {
            src: 'static/logos/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'static/logos/icon-512x512.png',
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
        postCssPlugins: [require('autoprefixer'), require('tailwindcss')],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
