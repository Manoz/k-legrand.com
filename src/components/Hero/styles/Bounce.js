import styled, { keyframes } from 'styled-components';

const bouncy = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0)
  }
  40% {
    transform: translateY(-10px)
  }
  60% {
    transform: translateY(-5px)
  }
`;

const Bounce = styled.div`
  position: absolute;
  opacity: 0;
  visibility: hidden;
  margin: 0 auto;
  right: 0;
  left: 0;
  bottom: -20px;
  border-radius: 100%;
  border: 2px solid #c23ffd;
  width: 40px;
  height: 40px;
  background-color: #fff;
  animation-name: ${bouncy};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  &.loaded {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.1s linear;
    transition-delay: 0s;
    transition-delay: 1.12s;
  }
`;

export default Bounce;
