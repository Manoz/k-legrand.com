import React from 'react';
import { Link } from 'gatsby';

import SiteLayout from '../components/Layouts/SiteLayout';

const NotFoundPage = () => (
  <SiteLayout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Back to home</Link>
  </SiteLayout>
);

export default NotFoundPage;
