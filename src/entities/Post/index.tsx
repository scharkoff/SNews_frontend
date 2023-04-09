import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Typography from '@mui/material/Typography';
import styles from './Post.module.scss';
import Image from 'next/image';
import { PostActions } from '../../shared/PostActions/index';

export const Post: React.FC = () => {
  return (
    <Paper elevation={0} className={styles.post}>
      <Typography variant="h6" marginBottom={2} className={styles.postTitle}>
        <Link href="/post/test-123">
          Колос является одной из разновидностей соцветий покрытосеменных
          культур и состоит из удлинённой основной оси с находящимися на ней
          цветками.{' '}
        </Link>
      </Typography>

      <Typography variant="subtitle1">
        От числа цветков зависит тип колоса. К простому типу относят колос с
        присутствием одиночных цветов, а сложный представлен уже несколькими
        цветками.
      </Typography>

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
          <ListItemText primary="Алекс Хоппер" secondary="9 января, 2014" />
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
