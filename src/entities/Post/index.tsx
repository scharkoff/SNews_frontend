import Link from 'next/link';
import React from 'react';
import Typography from '@mui/material/Typography';
import styles from './Post.module.scss';
import Image from 'next/image';
import { PostActions } from '../../shared/PostActions/index';
import { PostDTO } from './types/post-dto';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from '@mui/material';
import formatDate from '@/utils/formatDate';

export const Post: React.FC<PostDTO> = ({
  id,
  title,
  body,
  tags,
  views,
  createdAt,
  updatedAt,
  user,
}) => {
  return (
    <Paper elevation={0} className={styles.post}>
      <Typography variant="h6" marginBottom={2} className={styles.postTitle}>
        <Link href={`/post/${id}`}>{title}</Link>
      </Typography>

      <Typography variant="subtitle1">{body?.slice(0, 50)}</Typography>

      <List
        disablePadding
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      >
        <ListItem disablePadding style={{ marginBottom: 8 }}>
          <ListItemAvatar>
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt={'Alex'}
              variant="rounded"
            />
          </ListItemAvatar>
          <ListItemText
            primary={user?.login}
            secondary={formatDate(createdAt)}
          />
        </ListItem>
      </List>

      <div className={styles.imageWrapper}>
        <Image
          src="https://wallscloud.net/img/resize/1920/1440/MM/2023-02-01-summer-morning-1-57108.jpeg"
          width={700}
          height={500}
          alt="image"
        />
      </div>

      <PostActions />
    </Paper>
  );
};
