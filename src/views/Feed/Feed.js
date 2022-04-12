import React, { useContext, useState, useEffect } from 'react';

import { NewPostCard, PostCard, NoticeComponent } from '@components';

import { Context, useUserFetch } from '@utils';

const Feed = () => {
  
  const { fetchUserFeed } = useUserFetch();
  const { currentUser, loading, 
    setLoading, savingPost,
    deletingPost } = useContext(Context);

  const [userFeed, setUserFeed] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getFeed = async () => {
      const feed = await fetchUserFeed(currentUser?.userId);
      setUserFeed(feed);
      setLoading(false);
    };
    
    getFeed();
    // eslint-disable-next-line
  }, [savingPost, deletingPost])

  return (
    <>
      {loading ? 
        <NoticeComponent text="Loading..." /> :
        <div>
          <NewPostCard />
          {userFeed?.length > 0 ? userFeed.map((post, key) => {
            return (
              <PostCard key={key} post={post} user={post.user_id} />
            )
          }) : <NoticeComponent text='There are no posts to show' />}
        </div>
      }
    </>
  )
};

export { Feed };
