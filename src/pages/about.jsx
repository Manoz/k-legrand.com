import React from 'react';
import Link from 'gatsby-link';

import PageLayout from '../components/Layouts/PageLayout';
import Container from '../components/Container';

class AboutPage extends React.Component {
  render() {
    return (
      <PageLayout pageSEO>
        <Container>
          <h1>About Page</h1>
          <p>This is the About page</p>
          <Link to="/">Back to home</Link>
        </Container>
      </PageLayout>
    );
  }
}

export default AboutPage;
