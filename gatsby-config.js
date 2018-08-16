const urljoin = require('url-join');
const config = require('./config/SiteConfig');

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    titleAlt: config.siteTitleAlt,
    description: config.siteDescription,
    siteUrl: urljoin(config.siteUrl, pathPrefix),
    image_url: `${urljoin(config.siteUrl, pathPrefix)}${config.siteLogo}`,

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
    'gatsby-plugin-lodash',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-eslint-v2',
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
        name: 'assets',
        path: `${__dirname}/static/assets/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.siteGATrackingID,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 920,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
        showSpinner: false,
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
        short_name: config.siteTitleAlt,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        theme_color: config.themeColor,
        background_color: config.backgroundColor,
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
          'Raleway:200,300,600',
          'Roboto',
          'Source+Serif+Pro:400,600,700',
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-twitter',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
};

// Used to load css inside our js files using raw-loader
exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'develop' || stage === 'build-javascript') {
    // Load only the raw contents of regular CSS files to support CSS-in-JS
    config.loader('css', ({ loaders, ...current }) => ({
      ...current,
      loader: 'raw',
    }));
  } else if (stage === 'build-css') {
    // Regular CSS files shall not be processed in this stage anymore
    config.loader('css', ({ loaders, ...current }) => ({
      ...current,
      loader: 'null',
    }));
  }

  return config;
};
