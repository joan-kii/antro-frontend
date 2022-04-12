import styled from 'styled-components';

const ButtonStyled = styled.button`
  margin: .5em 0;
  padding: .3em 1em;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};
  border: none;
  outline: none;
  border-radius: 3px;
  font-family: inherit;
  font-size: .95rem;
  width: ${props => props.width};
  letter-spacing: 1px;

  &:hover {
    text-transform: uppercase;
    letter-spacing: 0;
    background-color: ${props => props.theme.colors.primary};
    cursor: pointer;
    filter: drop-shadow(0 5px 6px ${props => props.theme.colors.secondary}); 
    transform: translateY(-0.12em);
  }
`;

export { ButtonStyled };
