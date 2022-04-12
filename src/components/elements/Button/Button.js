import React from 'react';

import { ButtonStyled } from './Button.styled';

const Button = (props) => {

  const { type, textButton, onClick, width, testid } = props;
  
  return (
    <ButtonStyled 
      type={type} 
      onClick={onClick}
      width={width}
      data-testid={testid} >
      {textButton}
    </ButtonStyled>
  )
};

export { Button };
