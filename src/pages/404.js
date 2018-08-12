import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Back to home</Link>
  </Layout>
);

export default NotFoundPage;
