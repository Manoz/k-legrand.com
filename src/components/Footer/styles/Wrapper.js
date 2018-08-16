import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column wrap;

  @media (min-width: 992px) {
    flex-flow: row wrap;
  }
`;

export default Wrapper;
