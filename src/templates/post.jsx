import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import config from '../../config/SiteConfig';
import BlogLayout from '../components/Layouts/BlogLayout';
import PostTags from '../components/PostTags';
import SocialLinks from '../components/SocialLinks';
import BlogSEO from '../components/SEO/BlogSEO';
import Container from '../components/Container';

import './one-dark-pro.css';

class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <BlogLayout location={this.props.location}>
        <Container style={{ marginTop: '60px' }}>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <BlogSEO postPath={slug} postNode={postNode} postSEO />
          <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className="post-meta">
              <PostTags tags={post.tags} />
              <SocialLinks postPath={slug} postNode={postNode} />
            </div>
          </div>
        </Container>
      </BlogLayout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;

PostTemplate.propTypes = {
  pageContext: PropTypes.object,
  location: PropTypes.object,
  data: PropTypes.object,
};

export default PostTemplate;
