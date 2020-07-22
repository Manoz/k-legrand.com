import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

import gifUrl from '../images/lost.gif'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="max-w-60 px-4 mx-auto text-gray-700 font-light flex flex-col items-center">
      <h1 className="text-3xl md:text-4 font-medium">404 not found</h1>
      <img
        className="my-8 md:my-16"
        src={gifUrl}
        alt="Gif not found"
        style={{ width: '24rem' }}
      />

      <p className="mb-4 text-xl font-normal">
        Hit the road Jack and don{`'`}t you come back no more, no more, no more,
        no more...
      </p>

      <p className="mb-4 text-xl font-normal">
        (just in case, yes, you{`'`}re lost)
      </p>

      <Link
        className="text-xl font-normal text-grad1 hover:text-grad2 underline transition-colors duration-300 ease-in-out"
        to="/"
      >
        Back to homepage
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
