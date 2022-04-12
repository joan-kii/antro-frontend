import React from 'react';
import { useFormContext } from 'react-hook-form';

import { TextAreaStyled } from './TextArea.styled';

const TextArea = (props) => {

  const { register } = useFormContext();
  const { onFocus, inputName, inputLabel, placeholder, 
    rows, rules } = props; 

  return (
    <>
      <label htmlFor={inputName}>{inputLabel}</label>
      <TextAreaStyled
        rows={rows}
        name={inputName}
        onFocus={onFocus}
        placeholder={placeholder}
        aria-label={inputName}
        {...register(inputName, {...rules})}
      />
    </>
  )
};


export { TextArea };
