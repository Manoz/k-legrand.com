import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import UserBio from '../components/UserInfo/UserBio';
import Container from '../components/Container';
import BlogLayout from '../components/Layouts/BlogLayout';
import PostListing from '../components/PostListing';
import config from '../../config/SiteConfig';

class TagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <BlogLayout location={this.props.location}>
        <Container>
          <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
          <UserBio />
          <h2 style={{ marginBottom: '3rem' }}>
            Posts tagged as <span style={{ fontWeight: '400' }}>{tag}</span>:
          </h2>
          <PostListing postEdges={postEdges} />
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
            date(formatString: "DD MMMM, YYYY")
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
