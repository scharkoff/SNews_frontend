import React from 'react';
import { Avatar, Button, Paper } from '@mui/material';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import styles from './FullPost.module.scss';
import Image from 'next/image';
import { PostActions } from '../PostActions/index';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { SmsOutlined as MessageIcon } from '@mui/icons-material';
import { CommentsBlock } from '../CommentsBlock/index';

export const FullPost: React.FC = () => {
  return (
    <div>
      <Paper elevation={0} className={styles.post}>
        <Typography variant="h4" marginBottom={2} className={styles.postTitle}>
          Колос является одной из разновидностей соцветий покрытосеменных
          культур и состоит из удлинённой основной оси с находящимися на ней
          цветками.
        </Typography>

        <Typography variant="subtitle1" marginBottom={2}>
          От числа цветков зависит тип колоса. К простому типу относят колос с
          присутствием одиночных цветов, а сложный представлен уже несколькими
          цветками. От числа цветков зависит тип колоса. К простому типу относят
          колос с присутствием одиночных цветов, а сложный представлен уже
          несколькими цветками. От числа цветков зависит тип колоса. К простому
          типу относят колос с присутствием одиночных цветов, а сложный
          представлен уже несколькими цветками.
        </Typography>

        <div className={styles.imageWrapper}>
          <Image
            src="https://wallscloud.net/img/resize/1920/1440/MM/2023-02-01-summer-morning-1-57108.jpeg"
            width={1100}
            height={600}
            alt="image"
          />
        </div>

        <PostActions maxWidth={250} />

        <div className={styles.authorActions}>
          <div className={styles.authorWrapper}>
            <Avatar
              sx={{ width: 35, height: 35 }}
              alt={'Alex'}
              variant="rounded"
            />
            <Typography className={styles.authorName}>Алекс Хоппер</Typography>
            <Typography className={styles.authorSubs} variant="subtitle1">
              +1963
            </Typography>
          </div>

          <div className={styles.actionsWrapper}>
            <Button
              size="small"
              color="secondary"
              variant="contained"
              sx={{ boxShadow: 1, marginRight: 2 }}
            >
              <MessageIcon fontSize="medium" />
            </Button>

            <Button
              size="small"
              color="secondary"
              variant="contained"
              sx={{ boxShadow: 1, textTransform: 'none' }}
            >
              <PersonAddIcon sx={{ marginRight: 1 }} fontSize="medium" />
              Подписаться
            </Button>
          </div>
        </div>
      </Paper>

      <Paper elevation={0} className={styles.comments}>
        <CommentsBlock isFullPost={true} hideComments={false} />
      </Paper>
    </div>
  );
};
