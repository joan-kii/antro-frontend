import React from 'react';

import { NoticeComponentStyled } from './NoticeComponent.styled';

const NoticeComponent = (props) => {
  return (
    <NoticeComponentStyled>
      {props.text}
    </NoticeComponentStyled>
  )
};

export { NoticeComponent };
