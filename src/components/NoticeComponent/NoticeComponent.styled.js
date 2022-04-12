import styled from "styled-components";

const NoticeComponentStyled = styled.h2`
  margin: 1em auto;
  padding: .5em;
  width: 50%;
  text-align: center;
  font-size: 1.2em;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  background-color: ${props => props.theme.colors.softBlack};
`;

export { NoticeComponentStyled };
