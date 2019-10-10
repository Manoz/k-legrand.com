import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  FacebookShareCount,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  RedditIcon,
} from 'react-share';
import urljoin from 'url-join';
import styled from 'styled-components';
import config from '../../../config/SiteConfig';

const StyledDiv = styled.div`
  display: flex;
  margin: 10px auto;
  flex-flow: row wrap;
  align-items: center;

  .SocialMediaShareButton {
    cursor: pointer;
    margin: 0 5px;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
      transition: opacity 0.2s ease;
    }
  }
`;

class SocialLinks extends React.Component {
  render() {
    const { postNode, postPath, mobile } = this.props;

    const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
    const post = postNode.frontmatter;
    const url = urljoin(config.blogUrl, pathPrefix, postPath);
    const iconSize = mobile ? 32 : 36;
    const filter = count => (count > 0 ? count : '');
    const renderShareCount = count => (
      <div className="share-count">{filter(count)}</div>
    );

    return (
      <StyledDiv className="social-links">
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <FacebookShareButton url={url} quote={postNode.excerpt}>
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {count => renderShareCount(count)}
          </FacebookShareCount>
        </FacebookShareButton>
        <RedditShareButton url={url} title={post.title}>
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>
            {count => renderShareCount(count)}
          </RedditShareCount>
        </RedditShareButton>
      </StyledDiv>
    );
  }
}

SocialLinks.propTypes = {
  postNode: PropTypes.any,
  postPath: PropTypes.string,
  mobile: PropTypes.bool,
};

export default SocialLinks;
