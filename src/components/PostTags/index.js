import React from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

class PostTags extends React.Component {
  render() {
    const { tags } = this.props;
    return (
      <div className='post-tag-container'>
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: 'none' }}
              to={`/blog/tags/${_.kebabCase(tag)}`}
            >
              | {tag} |
            </Link>
          ))}
      </div>
    );
  }
}

PostTags.propTypes = {
  tags: PropTypes.any,
};

export default PostTags;
