/* eslint quotes: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import IndexSEO from '../SEO/IndexSEO';
import Header from '../Header';
import Footer from '../Footer';

import '../styles';

const SiteLayout = ({ children }) => (
  <div className="wrapper">
    <IndexSEO />
    <Header />
    <main style={{ marginTop: '120px' }} role="main">
      {children}
    </main>
    <Footer />
  </div>
);

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SiteLayout;
