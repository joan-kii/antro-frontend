import styled from "styled-components";

import { CardComponentStyled } from "@styles";

const ChatComponent = styled(CardComponentStyled)``;

const ChatField = styled.div`
  margin: auto;
  padding: .5em;
  width: 90%;
  height: 100%;
  border-radius: 4px;
  border: 2px solid ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.grey};

  & > form {
    margin-top: .5em;
    display: flex; 
    flex-direction: column;

    & > button {
      align-self: flex-end;
    }
  }
`;

const ChatMessage = styled.div`
  margin-bottom: .5em;
  padding: .5em;
  display: flex;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.white};

  & > img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.colors.secondary};
  }

  & > div {
    margin: 0 .5em;

    & > h4 {
      margin-bottom: .3em;
      font-size: 1.1rem;
      color: ${props => props.theme.colors.darkBlack};
    }

    & > p {
      font-size: .9rem;
    }
  } 

  &.user {
    flex-direction: row-reverse;
    background-color: ${props => props.theme.colors.green};
  }
`;

export { ChatComponent, ChatField, ChatMessage };
