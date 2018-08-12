import React from 'react';

import Layout from '../components/Layout';
import Container from '../components/Container';

class BlogPage extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <h1>Blog Page</h1>
          <p>Some content</p>
        </Container>
      </Layout>
    );
  }
}

export default BlogPage;
