import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import UserBio from '../components/UserInfo/UserBio';
import Container from '../components/Container';
import BlogLayout from '../components/Layouts/BlogLayout';
import PostListing from '../components/PostListing';
import config from '../../config/SiteConfig';

import favicon from '../components/SEO/favicon.png';
import screenshot from '../components/SEO/screenshot.jpg';

class Blog extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const title = config.blogTitle;
    const description = config.blogDescription;

    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: config.siteUrl + config.pathPrefix,
        name: config.siteTitle,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
        description: config.siteDescription,
      },
    ];

    return (
      <BlogLayout location={this.props.location}>
        <Container>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="shortcut icon" href={favicon} />
            <meta name="description" content={description} />
            <meta name="image" content={screenshot} />

            <meta property="og:locale" content="en_EN" />
            <meta property="og:site_name" content={config.ogSiteName} />
            <meta property="og:url" content={config.blogURL} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={screenshot} />
            <meta property="fb:app_id" content={config.siteFBAppID ? config.siteFBAppID : ''} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ''} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={screenshot} />

            <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
          </Helmet>
          <UserBio />
          <PostListing postEdges={postEdges} />
        </Container>
      </BlogLayout>
    );
  }
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(limit: 2000, sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt(pruneLength: 250)
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;

Blog.propTypes = {
  pageContext: PropTypes.object,
  location: PropTypes.object,
  data: PropTypes.object,
};

export default Blog;
