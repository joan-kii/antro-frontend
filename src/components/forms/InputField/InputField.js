import React from 'react';
import { useFormContext } from 'react-hook-form'; 

import { InputFieldStyled, InputStyled } from './InputField.styled';

const InputField = (props) => {

  const { register } = useFormContext();
  const { inputLabel, onFocus, inputName, type, rules } = props; 

  return (
    <InputFieldStyled>
      <label htmlFor={inputName}>
        {inputLabel}
      </label>
      <InputStyled 
        name={inputName}
        onFocus={onFocus}
        type={type} 
        placeholder={inputName}
        aria-label={inputName}
        {...register(inputName, {...rules})} 
      />
    </InputFieldStyled>
  )
};

export { InputField };
