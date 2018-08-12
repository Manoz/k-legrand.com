/* eslint quotes: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import SEO from './Header/SEO';
import Header from './Header';
import Footer from './Footer';

import './styles';

const Layout = ({ children }) => (
  <div className="wrapper">
    <SEO />
    <Header />
    <main style={{ marginTop: '120px' }} role="main">
      {children}
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
