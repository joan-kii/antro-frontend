import styled from 'styled-components';

import { MainComponentStyled, ContentComponentStyled,
  FeedComponentStyled } from '@styles';

const LayoutStyled = styled(MainComponentStyled)`
  margin-right: .3em;
  display: flex;
  flex-direction: column;
`;

const LayoutContent = styled(ContentComponentStyled)`
  margin-top: 3.5em;
  height: 75vh;

  @media ${props => props.theme.device.mobileS} {
    margin-top: 5em;
  }

  @media ${props => props.theme.device.mobileM} {
    margin-top: 4em;
  }

  @media ${props => props.theme.device.tablet} {
    top: 5.5em;
    height: 70vh
  }
`;

const MainContentStyled = styled(FeedComponentStyled)`
  ::-webkit-scrollbar {
    width: 8px;
  } 

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.black};
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.secondary};
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.primary};
  }
`;

export { LayoutStyled, LayoutContent, MainContentStyled };
