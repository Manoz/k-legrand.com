import styled from 'styled-components';

const P = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  line-height: 1.71429;
  text-align: center;

  @media (min-width: 992px) {
    text-align: left;
  }
`;

export default P;
