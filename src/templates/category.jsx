import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import config from '../../config/SiteConfig';
import BlogLayout from '../components/Layouts/BlogLayout';
import PostListing from '../components/PostListing/PostListing';
import Container from '../components/Container';

class CategoryTemplate extends React.Component {
  render() {
    const { category } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <BlogLayout location={this.props.location}>
        <Container style={{ marginTop: '60px' }}>
          <div className="category-container">
            <Helmet
              title={`Posts in category "${category}" | ${config.siteTitle}`}
            />
            <PostListing postEdges={postEdges} />
          </div>
        </Container>
      </BlogLayout>
    );
  }
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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

CategoryTemplate.propTypes = {
  pageContext: PropTypes.string,
  location: PropTypes.string,
  data: PropTypes.string,
};

export default CategoryTemplate;
