import styled from 'styled-components';

import { MainComponentStyled, ContentComponentStyled } from '@styles';

const AccessPageStyled = styled(MainComponentStyled)``;

const AccessForms = styled(ContentComponentStyled)`

  @media ${props => props.theme.device.mobileL} {
    width: 65%;
  }

  @media ${props => props.theme.device.tablet} {
    width: 50%;
  }

  @media ${props => props.theme.device.laptop} {
    width: 33%;
  }
`;

const Form = styled.form`
  width: 75%;
`;

export { AccessPageStyled, AccessForms, Form };
