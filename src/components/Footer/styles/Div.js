import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.primary ? 'flex-end' : 'flex-start')};
`;

export default Div;
