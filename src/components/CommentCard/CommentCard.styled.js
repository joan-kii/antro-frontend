import styled from "styled-components";

import { CardHeaderStyled, CardBodyStyled } from "@styles";

const CommentCardStyled = styled.div`
  margin: 0 0 0 auto;
  width: 75%;
`;
const CommentHeader = styled(CardHeaderStyled)``;
const CommentBody = styled(CardBodyStyled)``;

export { CommentCardStyled, CommentHeader, CommentBody };
