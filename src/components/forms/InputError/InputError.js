import React from 'react';

import { InputErrorStyled } from './InputError.styled';

const InputError = (props) => {
  
  const { error } = props;
  
  return (
    <InputErrorStyled>
      {error}
    </InputErrorStyled>
  ) 
};

export { InputError };
