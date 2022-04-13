import React, { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = (props) => { 

  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('antroUser')));
  const [toggleAccess, setToggleAccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [savingPost, setSavingPost] = useState(false);
  const [deletingPost, setDeletingPost] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isFeed, setIsFeed] = useState(false);

  const value = {
    currentUser, setCurrentUser,
    toggleAccess, setToggleAccess,
    loading, setLoading,
    savingPost, setSavingPost,
    deletingPost, setDeletingPost,
    isProfile, setIsProfile,
    isFeed, setIsFeed
  };

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  )
};

export { Context, ContextProvider };
