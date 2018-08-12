import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import config from '../../config/SiteConfig';
import BlogLayout from '../components/Layouts/BlogLayout';
import PostListing from '../components/PostListing/PostListing';
import Container from '../components/Container';

class TagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <BlogLayout location={this.props.location}>
        <Container style={{ marginTop: '60px' }}>
          <div className="tag-container">
            <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
            <PostListing postEdges={postEdges} />
          </div>
        </Container>
      </BlogLayout>
    );
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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

TagTemplate.propTypes = {
  pageContext: PropTypes.object,
  location: PropTypes.object,
  data: PropTypes.object,
};

export default TagTemplate;
