import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Quote = styled.blockquote`
  padding: 0.5em 10px;
  margin: 1.5rem 0;
  font-size: 86%;
  border-left: 5px solid #ccc;

  &:before {
    content: '\u201C';
    margin-right: 0.1em;
    color: #ccc;
    font-size: 4em;
    font-family: Georgia, Cambria, 'Times New Roman', Times, serif !important;
    line-height: 0.1em;
    vertical-align: -0.4em;
  }
`

class Blockquote extends React.Component {
  render() {
    const { quote, author } = this.props

    return (
      <Quote>
        {quote}
        <cite className="block ml-8 text-gray-600">— {author}</cite>
      </Quote>
    )
  }
}

Blockquote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default Blockquote
