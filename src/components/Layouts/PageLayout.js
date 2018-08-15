import React from 'react';
import PropTypes from 'prop-types';

import IndexSEO from '../SEO/IndexSEO';
import Header from '../Header';
import Footer from '../Footer';

import '../styles';

class PageLayout extends React.Component {
  render() {
    const { children, pageSEO } = this.props;

    return (
      <div className="wrapper">
        <IndexSEO customTitle={pageSEO ? true : null} />
        <Header />
        <main style={{ marginTop: '120px' }} role="main">
          {children}
        </main>
        <Footer />
      </div>
    );
  }
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageSEO: PropTypes.bool,
};

export default PageLayout;
