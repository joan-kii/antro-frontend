import styled from 'styled-components';

import { CardComponentStyled } from '@styles';

const NewPostCardStyled = styled(CardComponentStyled)`

  & > form {
    display: flex;
    flex-direction: column;

    & > button {
      align-self: flex-end;
      font-size: .6rem;

      @media ${props => props.theme.device.mobileL} {
        font-size: .7rem;
      }
    
      @media ${props => props.theme.device.tablet} {
        font-size: .8rem;
      }

      @media ${props => props.theme.device.tablet} {
        font-size: .9rem;
      }
    }

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

export { NewPostCardStyled };
