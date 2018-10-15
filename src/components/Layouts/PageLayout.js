import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IndexSEO from '../SEO/IndexSEO';
import Header from '../Header';
import Footer from '../Footer';

import { IconsFont, GlobalStyles, SanitizeCss } from '../styles';

const Main = styled.main`
  margin-top: 85px;

  @media (min-width: 768px) {
    margin-top: 120px;
  }
`;

class PageLayout extends React.Component {
  render() {
    const { children, pageSEO } = this.props;

    return (
      <div className="wrapper">
        <SanitizeCss />
        <IconsFont />
        <GlobalStyles />
        <IndexSEO customTitle={pageSEO ? true : null} />
        <Header />
        <Main role="main">{children}</Main>
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
