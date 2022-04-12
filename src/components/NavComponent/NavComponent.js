import React from 'react';

import { NavComponentStyled } from './NavComponent.styled';

const NavComponent = ({ children }) => {

  return (
    <NavComponentStyled>
      {children}
    </NavComponentStyled>
  )
};

export { NavComponent };
