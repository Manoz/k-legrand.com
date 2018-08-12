import styled from 'styled-components';

const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;

  @media (min-width: 768px) {
    max-width: 740px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
`;

export default Container;
