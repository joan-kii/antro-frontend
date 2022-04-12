import React from 'react';

import { ButtonGroupStyled } from './ButtonGroup.styled';

const ButtonGroup = ({ children, justify }) => {
  return (
    <ButtonGroupStyled justify={justify}>{children}</ButtonGroupStyled>
  )
};

export { ButtonGroup };
