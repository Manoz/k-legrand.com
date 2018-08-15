import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import config from '../../../config/SiteConfig';

class BlogLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
    const currentPath = this.props.location.pathname.replace(pathPrefix, '').replace('/', '');
    let title = '';
    if (currentPath === '') {
      title = 'Home';
    } else if (currentPath === 'tags/') {
      title = 'Tags';
    } else if (currentPath === 'categories/') {
      title = 'Categories';
    } else if (currentPath === 'about/') {
      title = 'About';
    } else if (currentPath === 'blog') {
      title = 'Blog';
    } else if (currentPath.indexOf('posts')) {
      title = 'Article';
    } else if (currentPath.indexOf('tags/')) {
      const tag = currentPath
        .replace('tags/', '')
        .replace('/', '')
        .replace('-', ' ');
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.indexOf('categories/')) {
      const category = currentPath
        .replace('categories/', '')
        .replace('/', '')
        .replace('-', ' ');
      title = `${capitalize(category)}`;
    }
    return title;
  }

  render() {
    const { children } = this.props;
    return (
      <div className="wrapper">
        <Helmet>
          <title>{`${this.getLocalTitle()} | ${config.siteTitle}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Header />
        <main style={{ marginTop: '120px' }} role="main">
          {children}
        </main>
        <Footer />
      </div>
    );
  }
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
};

export default BlogLayout;
