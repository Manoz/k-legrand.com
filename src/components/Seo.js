import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const config = require('../../config/SiteConfig')

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
          }
        }
      }
    `
  )

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={
        title ? `%s | ${site.siteMetadata.title}` : site.siteMetadata.title
      }
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: metaTitle,
        },
        {
          property: 'og:url',
          content: config.siteUrl,
        },
        {
          property: 'fb:app_id',
          content: config.siteFBAppID,
        },
        {
          property: 'og:image',
          content: 'https://www.k-legrand.com/assets/screenshot.jpg',
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: metaTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
