import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import { InputError } from './InputError';
import { Theme } from "@styles/theme";

const InputErrorStyled = ({ error }) => {
  return (
    <Theme>
      <InputError error={error} />
    </Theme>
  );
};

describe('Error Input', () => {
  it('should render error input', () => {

    const error = 'Your error here';

    render(<InputErrorStyled error={error} />);

    expect(screen.getByText(/your error here/i)).toBeInTheDocument();
  })
});
