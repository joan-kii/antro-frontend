import React from 'react';
import { ThemeProvider } from 'styled-components';

const screenSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

const theme = {
  colors: {
    primary: '#ff006e',
    secondary: '#5e60ce',
    black: '#333',
    softBlack: '#565656',
    darkBlack: '#181a18',
    white: '#FBFAF5',
    grey: '#808080',
    red: '#F47174',
    green: '#98FB98'
  },
  device: {
    mobileS: `(min-width: ${screenSize.mobileS})`,
    mobileM: `(min-width: ${screenSize.mobileM})`,
    mobileL: `(min-width: ${screenSize.mobileL})`,
    tablet: `(min-width: ${screenSize.tablet})`,
    laptop: `(min-width: ${screenSize.laptop})`,
    laptopL: `(min-width: ${screenSize.laptopL})`,
    desktop: `(min-width: ${screenSize.desktop})`
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{ children }</ThemeProvider>
);

export { Theme, theme };
