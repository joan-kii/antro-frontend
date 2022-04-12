import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Baloo Bhaijaan 2', cursive;
    color: ${props => props.theme.colors.black};
  }
`;

export { GlobalStyles };
