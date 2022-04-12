import styled from 'styled-components';

const AudioPlayerStyled = styled.div`
  display: none;
  
  @keyframes blinker {
    0% {
      box-shadow: none;
    }
    25% {
      box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.5);
      border: 2px solid ${props => props.theme.colors.white};
    }
    50% {
      box-shadow: none;
    } 
    75% {
      box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5);
      border: 2px solid ${props => props.theme.colors.white};
    }
    100% {
      box-shadow: none;
    }
  }

  @media ${props => props.theme.device.tablet} {
    display: block;
    min-width: 150px; 
    padding: .5em 2em 0;
    border-radius: 3px;
    color: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.artistColor};
    animation: ${props => props.isPlaying === true ? 'blinker 1s linear infinite' : ''};
  }
`;

const TrackInfoStyled = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  text-align: center;

  & > h2 {
    display: block;
    text-transform: uppercase;
    margin-bottom: 4px;
    font-size: 1rem;
  }

  & > h3 {
    display: block;
    margin-top: 0;
    margin-bottom: 4px;
    font-size: .85rem;
  }
`;

export { AudioPlayerStyled, TrackInfoStyled };
