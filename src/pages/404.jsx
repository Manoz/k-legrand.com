import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

import PageLayout from '../components/Layouts/PageLayout';
import Container from '../components/Container';

class NotFoundPage extends React.Component {
  render() {
    return (
      <PageLayout>
        <Helmet>
          <title>404 page not found | Kevin Legrand</title>
          <meta name="description" content="404 page not found" />

          <meta property="og:title" content="404 page not found | Kevin Legrand" />
          <meta property="og:description" content="404 page not found" />

          <meta name="twitter:title" content="404 page not found | Kevin Legrand" />
          <meta name="twitter:description" content="404 page not found" />
        </Helmet>
        <Container>
          <h1>NOT FOUND</h1>
          <p>Hit the road Jack and don&#39;t you come back no more, no more, no more, no more...</p>
          <p><em>(just in case, yes, you&#39;re lost. This is a 404 page Sherlock)</em></p>
          <br />
          <Link to="/">Back to home</Link>
        </Container>
      </PageLayout>
    );
  }
}

export default NotFoundPage;
