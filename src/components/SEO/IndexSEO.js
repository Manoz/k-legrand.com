import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import screenshot from './screenshot.jpg';
import favicon from './favicon.png';
import config from '../../../config/SiteConfig';

class IndexSEO extends React.Component {
  render() {
    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: config.siteUrl + config.pathPrefix,
        name: config.siteTitle,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
        description: config.siteDescription,
      },
    ];

    const { customTitle } = this.props;
    let title;
    let description;
    const siteUrl = config.siteUrl + config.pathPrefix;

    if (customTitle === true) {
      title = `About | ${config.siteTitle}`;
      description = 'About Kevin Legrand';
    } else {
      title = config.siteTitle;
      description = config.siteDescription;
    }

    return (
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href={favicon} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={screenshot} />

        <meta property="og:locale" content="en_EN" />
        <meta property="og:site_name" content={config.ogSiteName} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={screenshot} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ''} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:url" content={config.siteUrl} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={screenshot} />

        <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      </Helmet>
    );
  }
}

IndexSEO.propTypes = {
  customTitle: PropTypes.bool,
};

export default IndexSEO;
