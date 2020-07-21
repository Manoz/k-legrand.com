import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

const About = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="max-w-60 px-4 mx-auto text-gray-700 font-light flex flex-col items-center">
      <h1 className="text-3xl md:text-4 font-medium">About me</h1>

      <p className="mb-4 text-xl font-normal">Coming soon...</p>
    </div>
  </Layout>
)

export default About
