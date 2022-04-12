import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import { CustomLink } from './CustomLink';
import { Theme } from "@styles/theme";
import { ContextProvider } from '@utils';

const CustomLinkStyled = ({ text }) => {
  return (
    <ContextProvider>
      <Theme>
        <CustomLink text={text} />
      </Theme>
    </ContextProvider>
  );
};

describe('Custom Link', () => {
  it('should render custom link', () => {

    const text = 'Your text here';

    render(<CustomLinkStyled text={text} />);

    expect(screen.getByText(/your text here/i)).toBeInTheDocument();
  })
});
