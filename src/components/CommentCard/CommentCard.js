import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CommentCardStyled, CommentHeader, CommentBody } from './CommentCard.styled';
import { getFormattedDate, Context } from '@utils';
import { PicLinkStyled, LinkStyled } from '@styles';

const CommentCard = ({ comment }) => {

  const { user_id, timestamp, body } = comment;
  const { setIsProfile } = useContext(Context);
  
  return (
    <CommentCardStyled>
      <CommentHeader>
        <PicLinkStyled>
          <Link to={"/profile/" + user_id.username} onClick={() => setIsProfile(true)}>
            <img alt='user' src={user_id.profilePicture} />  
          </Link>
        </PicLinkStyled>
        <div>
          <LinkStyled>
            <Link to={"/profile/" + user_id.username} onClick={() => setIsProfile(true)}> 
              <h4>{user_id.username}</h4>
            </Link>
          </LinkStyled>
          <p>Commented: {getFormattedDate(timestamp)}</p>
        </div>
      </CommentHeader>
      <CommentBody>
        <p>{body}</p>
      </CommentBody>
    </CommentCardStyled>
  );
};

export { CommentCard };
