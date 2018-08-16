import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 60px 0;
  justify-content: center;
`;

const Col = styled.div`
  padding-bottom: 60px;
  flex-basis: 90%;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  border-bottom: 2px dotted #387cc6;

  @media (min-width: 992px) {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    width: 90%;
  }
`;

const Section = ({ children }) => (
  <StyledSection>
    <Col>{children}</Col>
  </StyledSection>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
