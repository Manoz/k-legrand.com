import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import urljoin from 'url-join';
import config from '../../../config/SiteConfig';

class BlogSEO extends Component {
  render() {
    const { postNode, postPath, postSEO } = this.props;
    const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
    const blogSlug = '/blog/';
    let title;
    let description;
    let image;
    let postURL;
    if (postSEO) {
      const postMeta = postNode.frontmatter;
      ({ title } = postMeta);
      description = postMeta.description
        ? config.blogDescription
        : postNode.excerpt;
      image = postMeta.cover;
      postURL = urljoin(config.siteUrl, pathPrefix, blogSlug, postPath);
    } else {
      title = `Blog | ${config.siteTitle}`;
      description = config.blogDescription;
      image = config.siteLogo;
    }

    image = urljoin(pathPrefix, image);
    const blogURL = config.blogUrl;
    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
      },
    ];
    if (postSEO) {
      schemaOrgJSONLD.push(
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': postURL,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url: blogURL,
          name: title,
          alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
        }
      );
    }
    return (
      <Helmet>
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        <meta property="og:url" content={postSEO ? postURL : blogURL} />
        {postSEO ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta
          property="fb:app_id"
          content={config.siteFBAppID ? config.siteFBAppID : ''}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:site"
          content={config.userTwitter ? config.userTwitter : ''}
        />
        <meta
          name="twitter:creator"
          content={config.userTwitter ? config.userTwitter : ''}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </Helmet>
    );
  }
}

BlogSEO.propTypes = {
  postNode: PropTypes.any,
  postSEO: PropTypes.any,
  postPath: PropTypes.string,
};

export default BlogSEO;
