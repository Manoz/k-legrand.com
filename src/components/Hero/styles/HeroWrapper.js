import styled from 'styled-components';

const HeroWrapper = styled.div`
  position: relative;
  margin: 80px auto;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-top: 2px solid transparent;
    border-top-color: transparent;
    border-bottom: 2px solid transparent;
    width: 0;
    height: 0;
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    bottom: 0;
    right: 0;
  }

  &.loaded {

    &::before,
    &::after {
      width: 100%;
      background-position: 0 0, 100% 0;
      background-repeat: no-repeat;
      background-size: 2px 100%;
      background-image: linear-gradient(to bottom, #387cc6 0%, #c23ffd 100%), linear-gradient(to bottom, #387cc6 0%, #c23ffd 100%)
    }

    &::before {
      border-top-color: #387cc6;
      transition: width 0.6s ease-out, height 0.4s ease-out 0.6s
    }

    &::after {
      border-bottom-color: #c23ffd;
      transition: border-color 0s ease-out 1s, width 0.6s ease-out 1s, height 0.6s ease-out 1.75s
    }
  }
`;

export default HeroWrapper;
