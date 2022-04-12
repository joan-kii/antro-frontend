import styled from 'styled-components';

const InputFieldStyled = styled.div`
  margin-bottom: 1em;
  width: 100%;
  display: flex;
  flex-direction: column;

  &:focus-within {
    & > label {
      text-transform: uppercase;
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const InputStyled = styled.input`
  margin-top: .5em;
  padding-left: 1em;
  height: 2em;
  line-height: 1.4em;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 3px;
  outline: none;
`;

export { InputFieldStyled, InputStyled };
