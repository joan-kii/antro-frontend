import React, { useContext, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form'; 
import { ErrorMessage } from '@hookform/error-message';
import { Link } from 'react-router-dom';

import { TextArea, InputError, Button, CommentCard } from '@components';
import { PostCardStyled, PostHeader, PostBody } from './PostCard.styled';
import { Context, usePostFetch, getFormattedDate } from '@utils';
import { PicLinkStyled, LinkStyled } from '@styles';
import { ReactComponent as HeartButton } from '@assets/heart.svg';

const commentRules = {
  minLength: {
    value: 3,
    message: 'Comment has at least 3 characters.'
  },
  maxLength: {
    value: 100,
    message: 'Comment has 100 characters max.'
   },
  pattern: {
    value: /^[A-Za-z0-9 ?!"'.,;:@$&%()/+-]+$/,
    message: 'Comment has only alphanumeric characters.'
  },
  required: 'Comment is required.'
};

const PostCard = ({ post, user }) => {

  const [likes, setLikes] = useState(post.likes.length);
  
  const { deletePost, saveComment, addLike, removeLike } = usePostFetch();
  
  const { currentUser, setLoading, 
    setDeletingPost, setSavingPost,
    setIsProfile } = useContext(Context);
  
  const [userLikes, setUserLikes] = useState(post.likes.includes(currentUser?.userId));
  const methods = useForm();

  const renderComments = post.comments.length > 0 ? true : false;
  const likeText = {
    zeroLikes: 'Be the first to like this',
    oneLike: 'Someone like this',
    onlyUser: 'You like this',
    crowd: `${likes} people like this`,
    userAndCrowd: `You and ${likes} people like this`,
    userAndSomeone: 'You and someone else like this'
  };

  const removePost = async (postId, comments) => {
    setLoading(true);
    setDeletingPost(true);
    let commentsIds = [];
    if (comments.length > 0) {
      commentsIds = comments.map((comment) => comment._id);
    }
    const data = {
      postId, 
      commentsIds
    };
    const postDeleted = await deletePost(data);
    if (postDeleted) {
      setLoading(false);
      setDeletingPost(false);
    }
  };

  const savingComment = async (comment) => {

    setLoading(true);
    setSavingPost(true);
    const data = {
      postId: post._id,
      userId: currentUser.userId,
      comment: comment.comment
    };
    const commentSaved = await saveComment(data);
    if (commentSaved) {
      setLoading(false);
      setSavingPost(false);
      methods.reset();
    }
  };

  const handleLike = async () => {
    if (userLikes) {
      setUserLikes(false);
      setLikes(likes - 1);
      await removeLike(post._id, currentUser.userId);
    } else {
      setUserLikes(true);
      setLikes(likes + 1);
      await addLike(post._id, currentUser.userId);
    }
  };

  return (
    <PostCardStyled>
      <PostHeader>
        <PicLinkStyled>
          <Link to={"/profile/" + user.username} onClick={() => setIsProfile(true)}>
            <img alt='user' src={user.profilePicture} /> 
          </Link>
        </PicLinkStyled>
        <div>
          <LinkStyled>
            <Link to={"/profile/" + user.username} onClick={() => setIsProfile(true)}>
              <h4>{user.username}</h4>
            </Link>
          </LinkStyled>
          <p>Posted: {getFormattedDate(post.timestamp)}</p>
        </div>
      </PostHeader>
      <PostBody>
        <p>{post.body}</p>
        <div>
          <HeartButton onClick={handleLike} className={userLikes ? 'liked' : ''} />
          {likes === 0 && <p>{likeText.zeroLikes}</p>}
          {likes === 1 && !userLikes && <p>{likeText.oneLike}</p>}
          {likes === 1 && userLikes && <p>{likeText.onlyUser}</p>}
          {likes > 1 && !userLikes && <p>{likeText.crowd}</p>}
          {likes === 2 && userLikes && <p>{likeText.userAndSomeone}</p>}
          {likes > 2 && userLikes && <p>{likeText.userAndCrowd}</p>}
        </div>
      </PostBody>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(savingComment)}>
          <TextArea 
            rows={1}
            inputName='comment' 
            placeholder='Leave a comment'
            type='text'
            rules={commentRules}
          />
          <ErrorMessage 
            errors={methods.formState.errors}
            name='comment' 
            render={({ message }) => <InputError error={message} />}
          />
          <Button type='submit' textButton='Comment' />
        </form>
      </FormProvider>
      {renderComments &&
        post.comments.map((comment, key) => {
          return <CommentCard key={key} comment={comment} />
        })
      }
      {user._id === currentUser?.userId &&
        <Button 
          type='button' 
          onClick={() => removePost(post._id, post.comments)} 
          textButton='Delete Post'
        />
      }
    </PostCardStyled>
  );
};

export { PostCard };
