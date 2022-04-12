import styled from "styled-components";

const MainComponentStyled = ({ className, children }) => {
  return <MainWrapper className={className}>{children}</MainWrapper>
};

const ContentComponentStyled = ({ className = 'default', children }) => {
  return <ContentWrapper className={className}>{children}</ContentWrapper>
};

const FeedComponentStyled = ({ className = 'default', children }) => {
  return <FeedWrapper className={className}>{children}</FeedWrapper>
};

const CardComponentStyled = ({ className = 'default', children }) => {
  return <CardWrapper className={className}>{children}</CardWrapper>
};

const CardHeaderStyled = ({ className = 'default', children }) => {
  return <CardHeaderWrapper className={className}>{children}</CardHeaderWrapper>
};

const CardBodyStyled = ({ className = 'default', children }) => {
  return <CardBodyWrapper className={className}>{children}</CardBodyWrapper>
};

const MainWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
overflow: hidden;
background-color: ${props => props.theme.colors.darkBlack}
`;

const ContentWrapper = styled.div` 

--border-width: 6px;

position: absolute;
width: 80%;
padding: 1em;
display: flex;
flex-direction: column;
align-items: center;
border-radius: var(--border-width);
background-color: ${props => props.theme.colors.black};
transform-style: preserve-3d;
color: ${props => props.theme.colors.white};

&:after {
  position: absolute;
  content: "";
  top: calc(-1 * var(--border-width));
  left: calc(-1 * var(--border-width));
  width: calc(100% + var(--border-width) * 2);
  height: calc(100% + var(--border-width) * 2);
  background: linear-gradient(
    60deg,
    hsl(224, 85%, 66%),
    hsl(269, 85%, 66%),
    hsl(314, 85%, 66%),
    hsl(359, 85%, 66%),
    hsl(44, 85%, 66%),
    hsl(89, 85%, 66%),
    hsl(134, 85%, 66%),
    hsl(179, 85%, 66%)
  );
  background-size: 300% 300%;
  background-position: 0 50%;
  box-shadow: 2px 2px 25px rgba(255, 255, 255, 0.5);
  border-radius: calc(2 * var(--border-width));
  animation: glow 4s alternate infinite;
  transform: translateZ(-1px);
}

@keyframes glow {
  50% {
    background-position: 100% 50%;
  }
}

@media ${props => props.theme.device.mobileM} {
  width: 70%;
}

@media ${props => props.theme.device.mobileL} {
  width: 60%;
}

@media ${props => props.theme.device.laptop} {
  width: 50%;
}
`;

const FeedWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow-y: scroll;
`;

const CardWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: .5em;
  width: 80%;  
  padding: 1em;
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 4px;

  @media ${props => props.theme.device.mobileL} {
    width: 70%;
  }

  @media ${props => props.theme.device.tablet} {
    width: 50%;
  }
`;

const CardHeaderWrapper = styled.div`
  padding: .3em .3em 0 .3em;
  display: flex;
  border-radius: 4px 4px 0 0;
  background-color: ${props => props.theme.colors.softBlack};

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    } 

    & > div > p {
      font-size: .8rem;
      color: gray;

      @media ${props => props.theme.device.tablet} {
        margin-left: auto;
        align-self: flex-end;
      }
    }

  @media ${props => props.theme.device.tablet} {
    padding: .5em .5em 0 .5em;
  }
`;

const CardBodyWrapper = styled.div`
  margin-bottom: .5em;
  padding: 0 .5em .5em .5em;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 4px 4px;
  background-color: ${props => props.theme.colors.softBlack};

  & > p {
    margin-left: 10px;
    font-size: 1rem;

    @media ${props => props.theme.device.laptop} {
      margin-left: 62px;
      font-size: 1.2rem;
    }
  }
`;

const HeadingStyled = styled.h3`
  margin: .5em 0;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
`;

const PicLinkStyled = styled.div`
  & > a > img {
    margin-right: .5em;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.colors.secondary};
  }
`;

const LinkStyled = styled.div`
  & > a {
    font-size: 1rem;
    color: ${props => props.theme.colors.white};
    text-decoration: none;
  
    &:hover {
      text-decoration: underline;
    }
  
    @media ${props => props.theme.device.tablet} {
      font-size: 1.2rem;
    }
  }
`;

export { MainComponentStyled, ContentComponentStyled,
  FeedComponentStyled, CardComponentStyled,
  CardHeaderStyled, CardBodyStyled, HeadingStyled, PicLinkStyled,
  LinkStyled };
