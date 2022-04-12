
const usePostFetch = () => {

  const NEW_POST_URL = process.env.REACT_APP_API_NEW_POST;
  const DELETE_POST_URL = process.env.REACT_APP_API_DELETE_POST;
  const ADD_COMMENT_URL = process.env.REACT_APP_API_ADD_COMMENT;
  const ADD_LIKE_URL = process.env.REACT_APP_API_ADD_LIKE;
  const REMOVE_LIKE_URL = process.env.REACT_APP_API_REMOVE_LIKE;

  // New Post
  const savePost = async (data) => {

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors'
    };

    try {
      const response = await fetch(NEW_POST_URL, options);
      const res = await response.json();
      if (res.success) {
        return res.success;
      } else {
        console.log(res.message, 'Error: ', res.error);
        return false;
      }
    } catch(err) {
      console.log('Unfulfilled Request', err);
      return false;
    }
  };

  // Delete Post
  const deletePost = async (data) => {

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors'
    };

    try {
      const response = await fetch(DELETE_POST_URL, options);
      const res = await response.json();
      if (res.success) {
        return res.success;
      } else {
        console.log(res.message, 'Error: ', res.error);
        return false;
      }
    } catch(err) {
      console.log('Unfulfilled Request', err);
      return false;
    }
  };

  // Add Comment
  const saveComment = async (data) => {

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors'
    };

    try {
      const response = await fetch(ADD_COMMENT_URL, options);
      const res = await response.json();
      if (res.success) {
        return res.success;
      } else {
        console.log(res.message, 'Error: ', res.error);
        return false;
      }
    } catch(err) {
      console.log('Unfulfilled Request', err);
      return false;
    }
  };

  // Add like to post
  const addLike = async (postId, userId) => {

    const data = {postId, userId};

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors'
    };

    try {
      const response = await fetch(ADD_LIKE_URL, options);
      const res = await response.json();
      if (res.success) {
        return res.success;
      } else {
        console.log(res.message, 'Error: ', res.error);
        return false;
      }
    } catch(err) {
      console.log('Unfulfilled Request', err);
      return false;
    }
  };

  // Remove like from post
  const removeLike = async (postId, userId) => {

    const data = {postId, userId};

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors'
    };

    try {
      const response = await fetch(REMOVE_LIKE_URL, options);
      const res = await response.json();
      if (res.success) {
        return res.success;
      } else {
        console.log(res.message, 'Error: ', res.error);
        return false;
      }
    } catch(err) {
      console.log('Unfulfilled Request', err);
      return false;
    }
  };

  return { savePost, deletePost, saveComment, addLike, removeLike};

};

export { usePostFetch };

