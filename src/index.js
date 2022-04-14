import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';
import { ContextProvider } from '@utils';

const rootElement = document.getElementById('root');

render(
  <ContextProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ContextProvider>,
  rootElement
);
