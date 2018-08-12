import React from 'react';
import Link from 'gatsby-link';

import Layout from '../components/Layout';
import Container from '../components/Container';

class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <h1>About Page</h1>
          <p>This is the About page</p>
          <Link to='/'>Back to home</Link>
        </Container>
      </Layout>
    );
  }
}

export default AboutPage;
