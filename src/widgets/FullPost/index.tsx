import React from 'react';
import Typography from '@mui/material/Typography';
import styles from './FullPost.module.scss';
import Image from 'next/image';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddComment from '@/features/AddComment/AddComment';
import Comment from '@/entities/Comment';
import { PostActions } from '../../shared/PostActions/index';
import { Avatar, Button, Paper } from '@mui/material';
import { SmsOutlined as MessageIcon } from '@mui/icons-material';
import { PostDTO } from '@/entities/Post/types/post-dto';
import { CommentDTO } from '@/entities/Comment/types/comment-dto';

interface FullPostProps {
  post: PostDTO;
  comments: CommentDTO[];
}

export default function FullPost({ post, comments }: FullPostProps) {
  return (
    <div>
      <Paper elevation={0} className={styles.post}>
        <Typography variant="h4" marginBottom={2} className={styles.postTitle}>
          {post?.title}
        </Typography>

        <Typography variant="subtitle1" marginBottom={2}>
          {post?.body}
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
            <Typography className={styles.authorName}>
              {post?.user?.login}
            </Typography>
          </div>

          <div className={styles.actionsWrapper}>
            <Button
              size="small"
              color="secondary"
              variant="contained"
              sx={{
                boxShadow: 1,
                '&:hover': { boxShadow: 1 },
                textTransform: 'none',
              }}
            >
              <MessageIcon fontSize="medium" />
            </Button>

            <Button
              size="small"
              color="primary"
              variant="contained"
              sx={{
                boxShadow: 1,
                '&:hover': { boxShadow: 1 },
                textTransform: 'none',
                marginLeft: 2,
              }}
            >
              <PersonAddIcon sx={{ marginRight: 1 }} fontSize="medium" />
              Подписаться
            </Button>
          </div>
        </div>
      </Paper>

      <Paper elevation={0} className={styles.comments}>
        <Typography variant="h6" marginBottom={2}>
          Комментарии к записи
        </Typography>

        {comments?.map((comment) => (
          <Comment
            key={comment?.id}
            text={comment?.text}
            createdAt={comment?.createdAt}
            updatedAt={comment?.updatedAt}
            post={comment?.post}
            user={comment?.user}
            isFullPost={false}
          />
        ))}
      </Paper>
    </div>
  );
}
