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
    rssMetadata: {
      site_url: urljoin(config.blogUrl, pathPrefix),
      feed_url: urljoin(config.blogUrl, pathPrefix, config.siteRss),
      title: config.blogTitle,
      description: config.blogDescription,
      image_url: `${urljoin(config.blogUrl, pathPrefix)}${config.siteLogo}`,
      author: config.userName,
      copyright: config.copyright,
    },
    image_url: `${urljoin(config.siteUrl, pathPrefix)}${config.siteLogo}`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-lodash',
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
        path: `${__dirname}/static/`,
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
    'gatsby-plugin-catch-links',
    'gatsby-plugin-twitter',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata;
          ret.allMarkdownRemark = ref.query.allMarkdownRemark;
          ret.generator = 'Kevin Legrand (a.k.a Manoz)';
          return ret;
        },
        query: `
        {
          site {
            siteMetadata {
              rssMetadata {
                site_url
                feed_url
                title
                description
                image_url
                author
                copyright
              }
            }
          }
        }
      `,
        feeds: [
          {
            serialize(ctx) {
              const { rssMetadata } = ctx.query.site.siteMetadata;
              return ctx.query.allMarkdownRemark.edges.map(edge => ({
                categories: edge.node.frontmatter.tags,
                date: edge.node.fields.date,
                title: edge.node.frontmatter.blogTitle,
                description: edge.node.excerpt,
                author: rssMetadata.author,
                url: rssMetadata.site_url + edge.node.fields.slug,
                guid: rssMetadata.site_url + edge.node.fields.slug,
                custom_elements: [{ 'content:encoded': edge.node.html }],
              }));
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [fields___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    timeToRead
                    fields {
                      slug
                      date
                    }
                    frontmatter {
                      title
                      cover
                      date
                      category
                      tags
                    }
                  }
                }
              }
            }
          `,
            output: config.siteRss,
          },
        ],
      },
    },
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
