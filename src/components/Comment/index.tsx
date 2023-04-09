import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import styles from './Comment.module.scss';

interface ICommentItem {
  user: {
    fullName: string;
  };
  text: string;
  post: {
    title: string;
  };
  isFullPost: boolean;
}

export const Comment: React.FC<ICommentItem> = ({
  user,
  text,
  post,
  isFullPost,
}) => {
  return (
    <ListItem
      alignItems="flex-start"
      disablePadding
      className={isFullPost ? styles.fullPostComment : styles.comment}
    >
      <ListItemAvatar>
        <Avatar alt={user.fullName} variant="rounded" />
      </ListItemAvatar>
      <ListItemText
        primary={user.fullName}
        secondary={<React.Fragment>{text}</React.Fragment>}
      />
    </ListItem>
  );
};
