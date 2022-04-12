import React, { useContext } from 'react';
import { useForm, FormProvider } from 'react-hook-form'; 
import { ErrorMessage } from '@hookform/error-message';

import { TextArea, InputError, Button } from '@components';
import { Context, usePostFetch } from '@utils';
import { NewPostCardStyled } from './NewPostCard.styled';

const postRules = {
  minLength: {
    value: 3,
    message: 'Post has at least 3 characters.'
  },
  maxLength: {
    value: 1000,
    message: 'Post has 1000 characters max.'
   },
  pattern: {
    value: /^[A-Za-z0-9 ?!"'.,;:@$&%()/+-]+$/,
    message: 'Post has only alphanumeric characters'
  },
  required: 'Post is required'
};

const NewPostCard = () => {

  const { currentUser, loading, 
    setLoading, setSavingPost } = useContext(Context);
  const { savePost } = usePostFetch();

  const methods = useForm();

  const savingPost = async (post) => {
    setLoading(true);
    setSavingPost(true);
    const data = {
      userId: currentUser.userId,
      body: post.body
    };
    const postSaved = await savePost(data);
    if (postSaved) {
      setLoading(false);
      setSavingPost(false);
    }
  };

  return (
    <NewPostCardStyled>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(savingPost)}>
          <TextArea
            rows={3}
            inputName='body'
            inputLabel='New Post' 
            placeholder='Say something'
            rules={postRules}
          />
          <ErrorMessage 
            errors={methods.formState.errors}
            name='body' 
            render={({ message }) => <InputError error={message} />}
          />
          <Button 
            type='submit' 
            textButton='Save Post'
            testid='testNewPost' />
        </form>
      </FormProvider>
      {loading &&
        <h4>Loading!</h4>
      }
    </NewPostCardStyled>
  );
};

export { NewPostCard };
