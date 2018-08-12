import React from 'react';
import styled from 'styled-components';

import P from './styles/P';
import Nav from './styles/Nav';
import Bounce from './styles/Bounce';
import HeroWrapper from './styles/HeroWrapper';

import ArrowIcon from './arrow.svg';

const IconImg = styled.img`
  width: 17px;
`;

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      didMount: false,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => // eslint-disable-next-line
      this.setState(prevState => ({ didMount: !prevState.test })), 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { didMount } = this.state;

    return (
      <div style={{ position: 'relative' }}>
        <HeroWrapper className={`${didMount && 'loaded'}`}>
          <div style={{ padding: '70px 0' }}>
            <P style={{
              fontFamily: 'var(--fontTitle)',
              fontWeight: '200',
              textAlign: 'center',
            }}>
              Ahoy! My name is <span style={{ fontWeight: '300' }}>Kevin Legrand</span><br />
              <span style={{
                fontSize: '2.1875rem',
                lineHeight: '1.37143',
              }}>I&apos;m a french front end developer</span>
            </P>
            <Nav />
          </div>
        </HeroWrapper>
        <div className="arrow">
          <Bounce className={`${didMount && 'loaded'}`}>
            <a
              style={{
                display: 'inline-block',
                padding: '9px',
              }}
              href="#ido" title="Do a barrel scroll"
            >
              <IconImg src={ArrowIcon} alt="arrow icon" />
            </a>
          </Bounce>
        </div>
      </div>
    );
  }
}

export default Hero;
