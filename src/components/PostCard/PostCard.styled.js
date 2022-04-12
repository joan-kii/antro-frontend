import styled from 'styled-components';

import { CardComponentStyled, CardHeaderStyled,
  CardBodyStyled } from '@styles';

const PostCardStyled = styled(CardComponentStyled)`
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
  }
`;

const PostHeader = styled(CardHeaderStyled)``;

const PostBody = styled(CardBodyStyled)`
  & > div {
    margin-top: .5em;
    margin-left: 10px;
    display: flex;
    align-items: center;

    @media ${props => props.theme.device.laptop} {
      margin-left: 62px;
      font-size: 1.2rem;
    }
  }

  & > div > p {
    margin-left: .5em;
    font-size: .8rem;

    @media ${props => props.theme.device.laptop} {
      font-size: 1rem;
    }
  }

  & > div > svg > g > path {
    &:hover {
      opacity: .5;
      cursor: pointer;
    }
  }

  .liked > g > path {
    fill: ${props => props.theme.colors.primary};
    opacity: .6;

    &:hover {
      opacity: .6;
    }
  }
`;

export { PostCardStyled, PostHeader, PostBody };
