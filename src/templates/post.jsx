import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Container from '../components/Container';
import BlogLayout from '../components/Layouts/BlogLayout';
import UserSocial from '../components/UserInfo/UserSocial';
import PostTags from '../components/PostTags';
import SocialLinks from '../components/SocialLinks';
import BlogSEO from '../components/SEO/BlogSEO';
import Small from '../components/PostListing/Small';

import config from '../../config/SiteConfig';

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
        <Container>
          <Helmet title={`${post.title} | ${config.siteTitle}`} />
          <BlogSEO postPath={slug} postNode={postNode} postSEO />
          <div>
            <h1>{post.title}</h1>
            <Small>{post.date} - <span>{postNode.timeToRead} min read</span></Small>
            <img src={post.cover} alt=""/>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className="post-meta">
              <PostTags tags={post.tags} />
              <SocialLinks postPath={slug} postNode={postNode} />
            </div>
            <UserSocial config={config} />
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
