import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import { Button } from './Button';
import { Theme } from "@styles/theme";

const ButtonStyled = ({ textButton }) => {
  return (
    <Theme>
      <Button textButton={textButton} />
    </Theme>
  );
};

describe('Button', () => {
  it('should render button', () => {
    render(<ButtonStyled textButton='Click Me' />);

    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  })
});
