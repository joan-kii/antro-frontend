import styled from 'styled-components';

const ButtonGroupStyled = styled.div`
  margin-bottom: 1em;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => {
    if (props.justify === 'center') {
      return 'center';
    } else {
      return 'space-' + props.justify;
    }
  }};
  align-items: stretch;
  
  & > a > button {
    width: 100%;
  }

  @media ${props => props.theme.device.laptopL} {
    flex-direction: row;
  }
`;

export { ButtonGroupStyled };
