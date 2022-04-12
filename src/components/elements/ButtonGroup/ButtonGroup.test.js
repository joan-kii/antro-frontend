import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import { ButtonGroup } from './ButtonGroup';
import { Theme } from "@styles/theme";

const ButtonGroupStyled = () => {
  return (
    <Theme>
      <ButtonGroup />
    </Theme>
  );
};

describe('Button', () => {
  it('should render button', () => {
    render(<ButtonGroupStyled />);
  })
});
