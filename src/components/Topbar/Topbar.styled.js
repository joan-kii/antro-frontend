import styled from 'styled-components';

import { ContentComponentStyled } from '@styles';

const TopbarStyled = styled(ContentComponentStyled)`
  position: absolute;
  top: 1.2em;
  padding-top: .5em;
  padding-bottom: .5em;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${props => props.theme.device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  & > div {
    justify-self: center;
    width: 50%;

    @media ${props => props.theme.device.laptop} {
      width: 75%;
    }
  }
  
  & > a {
    font-size: 1.2rem;
    font-family: Prosto One, cursive;
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    justify-self: center;
    
    &:hover {
      padding: .2em;
      color: ${props => props.theme.colors.primary};
      filter: drop-shadow(0px 0px 12px ${props => props.theme.colors.secondary});
    }

    @media ${props => props.theme.device.laptop} {
      font-size: 2rem;
    }
  }

  & > button {
    width: 80%;
    justify-self: end;
    font-size: .7rem;

    @media ${props => props.theme.device.mobileS} {
      font-size: .8rem;
    }

    @media ${props => props.theme.device.laptop} {
      width: 50%;
      justify-self: center;
      font-size: 1rem;
    }
  }
`;

export { TopbarStyled };
