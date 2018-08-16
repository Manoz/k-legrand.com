import React from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  background-color: #f5f5f5;
  color: var(--secondaryColor) !important;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin: 0 5px;
  padding: 3px 10px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: none !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease !important;
  }
`;

class PostTags extends React.Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map(tag => (
            <StyledLink key={tag} to={`/blog/tags/${_.kebabCase(tag)}`}>
              {tag}
            </StyledLink>
          ))}
      </div>
    );
  }
}

PostTags.propTypes = {
  tags: PropTypes.any,
};

export default PostTags;
