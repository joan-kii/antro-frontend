import React from 'react'; 
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import { NoticeComponent } from './NoticeComponent';
import { Theme } from '@styles/theme';

const NoticeComponentProvided = ({ text }) => {
  return (
    <Theme>
      <NoticeComponent text={text} />
    </Theme>
  )
};

describe('Notice component', () => {
  it('should render Notice component', () => {
    render(<NoticeComponentProvided />);
  });

  it('should render text', () => {
    render(<NoticeComponentProvided text='Test Text' />);

    expect(screen.getByText(/Test Text/i)).toBeInTheDocument();
  });
});
