import styled from 'styled-components';

const StyledLink = styled.a`
  display: inline-block;
  padding: 10px 0;
  flex: 0 0 auto;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #ed6eae !important;

  &:not(:last-child) {
    margin-right: 15px;

    @media (min-width: 992px) {
      margin-right: 20px;
    }
  }

  &:hover {
    color: var(--colorPink) !important;
    text-decoration: none !important;
    transition: color 0.2s !important;
  }

  img {
    max-width: 60px;
  }
`;

export default StyledLink;
