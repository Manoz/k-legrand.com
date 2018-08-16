import React from 'react';
import PropTypes from 'prop-types';

import ThePost from './styles/ThePost';
import Small from './styles/Small';
import StyledLink from './styles/StyledLink';

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: `blog${postEdge.node.fields.slug}`,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div className="posts-list">
        {postList.map(post => (
          <ThePost key={post.title}>
            <h3 style={{ marginBottom: '0px' }}>
              <StyledLink to={post.path} key={post.title}>
                {post.title}
              </StyledLink>
            </h3>
            <Small>
              {post.date} - <span>{post.timeToRead} min read</span>
            </Small>
            <p style={{ marginTop: '0.8rem' }}>{post.excerpt}</p>
          </ThePost>
        ))}
      </div>
    );
  }
}

PostListing.propTypes = {
  postEdges: PropTypes.any,
};

export default PostListing;
