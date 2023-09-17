import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import clsx from 'clsx';
import styles from './Comment.module.scss';
import { UserDTO } from '../User/types/user-dto';
import { PostDTO } from '../Post/types/post-dto';
import formatDate from '@/utils/formatDate';
import Link from 'next/link';

interface CommentProps {
  user: UserDTO;
  post: PostDTO;
  text: string;
  createdAt: string;
  updatedAt: string;
  isFullPost: boolean;
}

export default function Comment({
  user,
  text,
  post,
  createdAt,
  updatedAt,
  isFullPost,
}: CommentProps) {
  return (
    <div
      className={clsx(styles.comment, {
        [styles.fullPostComment]: isFullPost,
      })}
    >
      <ListItem alignItems="flex-start" disablePadding>
        <ListItemAvatar>
          <Avatar alt={user?.login} variant="rounded" />
        </ListItemAvatar>
        <ListItemText
          primary={user?.login}
          secondary={<React.Fragment>{text}</React.Fragment>}
        />
      </ListItem>
      <div className={styles.actions}>
        <div className={styles.time}>{formatDate(createdAt)}</div>

        <div
          className={styles.link}
          style={{ display: !isFullPost ? 'none' : 'inline-block' }}
        >
          Ответить
        </div>

        <Link href={`/post/${post?.id}`}>
          <div
            className={styles.link}
            style={{ display: isFullPost ? 'none' : 'inline-block' }}
          >
            Перейти к записи
          </div>
        </Link>
      </div>
    </div>
  );
}
