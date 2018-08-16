import styled from 'styled-components';

const InnerHeader = styled.div`
  padding: 0 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--colorDarkBlue);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media (min-width: 992px) {
    padding: 0 1.11112rem;
  }
`;

export default InnerHeader;
