import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
        fbAppID
        defaultLang: lang
      }
    }
  }
`

const SEO = ({ title, description, image, lang }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    fbAppID,
    defaultLang,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    lang: lang || defaultLang,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    fbAppID,
  }

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{ lang }}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* Facebook Metas tags */}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.fbAppID && <meta property="fb:app_id" content={seo.fbAppID} />}
      <meta name="og:type" content="website" />
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.title && <meta property="og:site_name" content={seo.title} />}

      {/* Twitter Metas tags */}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      <meta
        name="twitter:image:alt"
        content="Screenshot of my website's homepage"
      ></meta>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: 'en',
  title: null,
  description: null,
  image: null,
  fbAppID: null,
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
}

export default SEO
