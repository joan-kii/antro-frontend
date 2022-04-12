import React, { useState, useEffect, useContext } from 'react';
import { useForm, FormProvider } from 'react-hook-form'; 
import { ErrorMessage } from '@hookform/error-message';

import { TextArea, InputError, Button, NoticeComponent } from '@components';
import { Context, changePictureId, useUserFetch } from '@utils';
import { CardComponentStyled, HeadingStyled } from '@styles'; 
import { SettingsHeader, SettingsBody } from './Settings.styled';

const bioRules = {
  minLength: {
    value: 1,
    message: 'Bio has at least 1 character.'
  },
  maxLength: {
    value: 50,
    message: 'Bio has 50 characters max.'
  },
  pattern: {
    value: /^[A-Za-z0-9 ?!"'.,;:@$&%()/+-]+$/,
    message: 'Bio has only alphanumeric characters.'
  },
  required: 'Bio is required.'
};

const Settings = () => {
  
  const { currentUser, loading, setLoading } = useContext(Context);
  const { changeSettings } = useUserFetch();
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser])

  const methods = useForm({
    defaultValues: {bio: user?.bio}
  });

  const [userPic, setUserPic] = useState(user?.profilePicture);
  const [newSettings, setNewSettings] = useState(false);

  const newUserPic = () => {
    setUserPic(changePictureId(user?.profilePicture));
    setNewSettings(true);
  };

  const saveSettings = async (data) => {

    setLoading(true);
    const newUserSettings = {
      ...user,
      bio: data.bio,
      profilePicture: userPic
    };
    
    const newUser = await changeSettings(newUserSettings);
    
    if (newUser) {
      setLoading(false);
      setNewSettings(false);
      return;
    };
  };

  return (
    <CardComponentStyled>
      <HeadingStyled>{user?.username}</HeadingStyled>
      <SettingsHeader>
        <img alt='User' src={userPic} />  
        <Button type='button' textButton='Change Picture' onClick={newUserPic} />
      </SettingsHeader>
      <SettingsBody>
        <FormProvider {...methods} >
          <form onSubmit={methods.handleSubmit(saveSettings)}>
            <label>About Me</label>
            <TextArea
              rows={1}
              onFocus={() => setNewSettings(true)}
              inputName='bio' 
              placeholder='About me'
              rules={bioRules}
            />
            <ErrorMessage 
              errors={methods.formState.errors}
              name='bio' 
              render={({ message }) => <InputError error={message} />}
            />
            {newSettings && 
              <Button type='submit' textButton='Save Settings' />
            }
          </form>
        </FormProvider>
      </SettingsBody>
      {loading &&
        <NoticeComponent>Loading!</NoticeComponent>
      }
    </CardComponentStyled>
  )
};

export { Settings };
