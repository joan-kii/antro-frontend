import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AccessPage, Layout, Feed, 
  Profile, Settings, Chat } from '@views';
import { RequireAuth } from '@components';
import { GlobalStyles, Theme } from '@styles';

const App = () => {

  return (
    <>
      <Theme> 
        <GlobalStyles />
        <Routes>
          <Route path='/access' element={<AccessPage />} />
          <Route element={<Layout />}>
            <Route index path='/' 
              element={ 
                <RequireAuth>
                  <Feed />
                </RequireAuth>
              } 
            />
            <Route path='/profile/:usernameParam' 
              element={ 
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              } 
            />
            <Route path='/user/settings' 
              element={ 
                <RequireAuth>
                  <Settings />
                </RequireAuth>
              } 
            />
            <Route path='/bar' 
              element={ 
                <RequireAuth>
                  <Chat />
                </RequireAuth>
              } 
            />
          </Route>
        </Routes>
      </Theme>
    </>
  );
};

export default App;
