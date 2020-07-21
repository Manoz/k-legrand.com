import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Col = styled.div`
  flex-basis: 90%;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  border-color: #387cc6;
  border-style: dotted;
`

class Section extends React.Component {
  render() {
    const { children, isLastSection } = this.props

    return (
      <section
        className={`flex flex-wrap justify-center ${
          isLastSection ? 'mb-0' : 'mb-8'
        }`}
      >
        <Col className={isLastSection ? 'border-b-0 pb-10' : 'border-b-2 pb-8'}>
          {children}
        </Col>
      </section>
    )
  }
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  isLastSection: PropTypes.bool,
}

export default Section
