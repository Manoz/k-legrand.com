/* eslint no-else-return: 0 */
const { Helmet } = require('react-helmet')

/**
 * Fix an issue with <style> tag rendered before all website meta tags. Looks
 * like it's causing an issue with website's meta tags scrapers.
 */
exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}) => {
  const helmet = Helmet.renderStatic()
  setHtmlAttributes(helmet.htmlAttributes.toComponent())
  setBodyAttributes(helmet.bodyAttributes.toComponent())
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ])
}

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()

  headComponents.sort((x, y) => {
    if (x.props && x.props['data-react-helmet']) {
      return -1
    } else if (y.props && y.props['data-react-helmet']) {
      return 1
    }
    return 0
  })

  replaceHeadComponents(headComponents)
}
