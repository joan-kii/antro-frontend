import styled from 'styled-components';

import { CardHeaderStyled, CardBodyStyled } from '@styles';

const SettingsHeader = styled(CardHeaderStyled)`
  padding-bottom: 1em;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;  

  @media ${props => props.theme.device.laptop} {
    flex-direction: row;
  }

  & > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.colors.secondary};

    @media ${props => props.theme.device.laptopL} {
      position: relative;
      left: 50px;
    }
  }

  & > button {
    font-size: .8rem;

    @media ${props => props.theme.device.laptopL} {
      position: relative;
      right: 50px;
    }

    @media ${props => props.theme.device.laptopL} {
      font-size: 1rem;
    }
  }
`;

const SettingsBody = styled(CardBodyStyled)`
  & > form {
    display: flex;
    flex-direction: column;

    & > label {
      margin-bottom: .5em;
    }

    &:focus-within {
      & > label {
        text-transform: uppercase;
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`;

export { SettingsHeader, SettingsBody };
