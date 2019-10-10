import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import Wrapper from './styles/Wrapper';
import P from './styles/P';
import Div from './styles/Div';

const CoffeeIcn = styled.i`
  margin-left: 6px;
`;

const GatsbyIcn = styled.i`
  display: block;
  margin-left: 6px;
  font-size: 1rem;
`;

const Footer = () => (
  <footer style={{ padding: '2em 0' }}>
    <Container>
      <Wrapper>
        <Div>
          <P style={{ display: 'inline-block' }}>
            Copyright &copy; 2018 - Kevin Legrand
            <CoffeeIcn className="icn icn-coffee"></CoffeeIcn>
            &nbsp; Fueled with{' '}
            <a
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Caffeine"
              title="Caffeine"
              target="_blank"
            >
              C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>
            </a>
          </P>
        </Div>
        <Div primary>
          <P>Built with ❤️ using</P>
          <a rel="noopener" title="Gatsbyjs" href="https://next.gatsbyjs.org/">
            <GatsbyIcn className="icn icn-gatsby"></GatsbyIcn>
          </a>
        </Div>
      </Wrapper>
    </Container>
  </footer>
);

export default Footer;
