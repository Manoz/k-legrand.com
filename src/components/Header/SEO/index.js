import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import config from '../../../../config/SiteConfig';
import favicon from './favicon.png';

const SEO = (props) => {
  const { postNode, postSEO } = props;
  const realPrefix = config.pathPrefix !== '/' ? '' : config.pathPrefix;
  let title;
  let description;
  let image;

  if (postSEO) {
    const postMeta = postNode.frontmatter;

    title = postMeta.title;
    description = postNode.excerpt;
    image = config.siteBanner;
  } else {
    title = config.siteTitle;
    description = config.siteDescription;
    image = config.siteBanner;
  }

  image = config.siteUrl + realPrefix + image;
  const siteUrl = config.siteUrl + config.pathPrefix;
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: siteUrl,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ];

  if (postSEO) {
    schemaOrgJSONLD.push(
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: siteUrl,
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
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href={favicon} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

      <meta property="og:locale" content="en_EN" />
      <meta property="og:site_name" content={config.ogSiteName} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ''} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={config.siteUrl} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

SEO.propTypes = {
  postNode: PropTypes.node,
  postSEO: PropTypes.node,
};

export default SEO;
