import styled from "styled-components";

const AudioControlsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width:  100%;
  margin: 0 auto;
`;

const NextPrevStyled = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  & > svg {
    width: 30px;
    height: 25px;
  }
`; 

const PlayPauseStyled = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  & > svg {
    width: 35px;
    height: 30px;
  }
`;

export { AudioControlsStyled, NextPrevStyled, PlayPauseStyled };
