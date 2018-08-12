import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import config from '../../config/SiteConfig';
import BlogSEO from '../components/SEO/BlogSEO';
import PostListing from '../components/PostListing/PostListing';
import BlogLayout from '../components/Layouts/BlogLayout';
import Container from '../components/Container';

class BlogPage extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <BlogLayout location={this.props.location}>
        <Container style={{ marginTop: '60px' }}>
          <Helmet title={`Blog | ${config.siteTitle}`} />
          <BlogSEO />
          <PostListing postEdges={postEdges} />
        </Container>
      </BlogLayout>
    );
  }
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
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

BlogPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.any,
};

export default BlogPage;
