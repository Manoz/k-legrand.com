import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  RedditShareButton,
  FacebookShareCount,
  GooglePlusShareCount,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  RedditIcon,
} from 'react-share';
import urljoin from 'url-join';
import config from '../../../config/SiteConfig';

class SocialLinks extends Component {
  render() {
    const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

    const { postNode, postPath, mobile } = this.props;
    const post = postNode.frontmatter;
    const url = urljoin(config.blogUrl, pathPrefix, postPath);
    const iconSize = mobile ? 36 : 48;
    const filter = count => (count > 0 ? count : '');
    const renderShareCount = count => (
      <div className="share-count">{filter(count)}</div>
    );

    return (
      <div className="social-links">
        <RedditShareButton url={url} title={post.title}>
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>
            {count => renderShareCount(count)}
          </RedditShareCount>
        </RedditShareButton>
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <GooglePlusShareButton url={url}>
          <GooglePlusIcon round size={iconSize} />
          <GooglePlusShareCount url={url}>
            {count => renderShareCount(count)}
          </GooglePlusShareCount>
        </GooglePlusShareButton>
        <FacebookShareButton url={url} quote={postNode.excerpt}>
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {count => renderShareCount(count)}
          </FacebookShareCount>
        </FacebookShareButton>
      </div>
    );
  }
}

SocialLinks.propTypes = {
  postNode: PropTypes.any,
  postPath: PropTypes.string,
  mobile: PropTypes.bool,
};

export default SocialLinks;
