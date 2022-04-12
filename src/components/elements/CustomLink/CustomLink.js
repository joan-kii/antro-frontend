import React, { useContext } from 'react';

import { Context } from '@utils';
import { CustomLinkStyled } from './CustomLink.styled';

const CustomLink = ({ text }) => {
  
  const { toggleAccess, setToggleAccess } = useContext(Context);

  const toggleForm = () => {
    setToggleAccess(!toggleAccess);
  };

  return (
    <CustomLinkStyled onClick={toggleForm}>{text}</CustomLinkStyled>
  )
};

export { CustomLink };
