import styled from 'styled-components';

const CustomLinkStyled = styled.p`
  margin: .5em auto;
  color: ${props => props.theme.colors.secondary};
  text-decoration: underline;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    text-transform: uppercase;
    letter-spacing: 0;
    color: ${props => props.theme.colors.primary};
    border-radius: 3px;
    background: rgba(58,134,255, .3);
    box-shadow: 0 0 12px .5em rgba(58,134,255, .3);
  }
`;

export { CustomLinkStyled };
