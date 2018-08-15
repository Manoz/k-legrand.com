import React from 'react';

import coffee from './images/coffee.svg';
import gatsby from './images/gatsby.svg';
import Container from '../Container';
import Wrapper from './styles/Wrapper';
import A from './styles/A';
import P from './styles/P';
import Div from './styles/Div';
import Img from './styles/Img';

const Footer = () => (
  <footer style={{ padding: '2em 0' }}>
    <Container>
      <Wrapper>
        <Div>
          <P style={{ display: 'inline-block' }}>
            Copyright &copy; 2018 - Kevin Legrand
            <Img style={{ width: '16px' }} src={coffee} alt="Icon Coffee" />&nbsp;
            Fueled with <A href="https://en.wikipedia.org/wiki/Caffeine" title="Caffeine" target="_blank">C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub></A>
          </P>
        </Div>
        <Div primary>
          <P>Built with ❤️ using
            <a title="Gatsbyjs" href="https://next.gatsbyjs.org/">
              <Img style={{ width: '16px' }} src={gatsby} alt="Icon Gatsby" />
            </a>
          </P>
        </Div>
      </Wrapper>
    </Container>
  </footer>
);

export default Footer;
