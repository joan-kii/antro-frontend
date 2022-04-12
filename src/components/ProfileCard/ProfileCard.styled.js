import styled from "styled-components";

import { CardComponentStyled, CardHeaderStyled } from "@styles";

const ProfileCardStyled = styled(CardComponentStyled)``;
const ProfileHeaderStyled = styled(CardHeaderStyled)`
  display: flex;
  justify-content: space-around;
  border-radius: 4px;

  & > div > h2, 
  & > div > h3, 
  & > div > h4 {
    margin: .4em 0;
    font-weight: bold;
    font-size: .8rem;

    @media ${props => props.theme.device.tablet} {
      font-size: 1rem;
    }
  }

  & > div > h2 > span, 
  & > div > h3 > span, 
  & > div > h4 > span {
    text-align: right;
    font-weight: normal;
  }
`;

const FriendsList = styled(CardHeaderStyled)`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  
  & > div {
    display: grid;
    grid-template-columns: 1fr;
  }

  & > div > div {
    margin-bottom: .5em;
    display: flex;
    align-items: center;
  }

  @media ${props => props.theme.device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const RequestStyled = styled.div`
  padding: .5em;
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${props => props.theme.colors.softBlack};
  border-radius: 4px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > button {
      font-size: .8rem;

      @media ${props => props.theme.device.laptop} {
        font-size: .95rem;
      }
    }
  }

  @media ${props => props.theme.device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export { ProfileCardStyled, ProfileHeaderStyled, FriendsList, RequestStyled };
