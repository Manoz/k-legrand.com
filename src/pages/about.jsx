import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import config from '../../config/SiteConfig';
import SiteLayout from '../components/Layouts/SiteLayout';
import Container from '../components/Container';

class AboutPage extends React.Component {
  render() {
    return (
      <SiteLayout>
        <Helmet title={`About | ${config.siteTitle}`} />
        <Container>
          <h1>About Page</h1>
          <p>This is the About page</p>
          <Link to='/'>Back to home</Link>
        </Container>
      </SiteLayout>
    );
  }
}

export default AboutPage;
