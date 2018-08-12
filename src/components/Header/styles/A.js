import styled from 'styled-components';

const A = styled.a`
  display: inline-block;
  color: white !important;
  flex: 0 0 auto;
  align-self: center;
  color: white !important;
  line-height: 1;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover {
    color: var(--colorPink) !important;
    text-decoration: none !important;
  }
`;

export default A;
