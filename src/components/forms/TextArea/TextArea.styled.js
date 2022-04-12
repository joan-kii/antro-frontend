import styled from 'styled-components';

const TextAreaStyled = styled.textarea`
  margin-bottom: .5em;
  padding-left: .5em;
  font-family: inherit;
  font-size: .9rem;
  border-radius: 4px;
  border: 2px solid ${props => props.theme.colors.white};
  resize: none;
  outline: none;
  background-color: ${props => props.theme.colors.white};

  &:focus {
    border: 2px solid ${props => props.theme.colors.secondary};
  }
`;

export { TextAreaStyled };
