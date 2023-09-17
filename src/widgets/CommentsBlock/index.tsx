import React from 'react';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styles from './CommentsBlock.module.scss';
import Comment from '@/entities/Comment';
import { CommentDTO } from '@/entities/Comment/types/comment-dto';

interface CommentsBlockProps {
  isFullPost: boolean;
  lastComments: CommentDTO[];
}

export const CommentsBlock: React.FC<CommentsBlockProps> = ({
  isFullPost,
  lastComments,
}) => {
  return (
    <div>
      <Stack direction="row" spacing={2} alignItems={'center'} marginBottom={2}>
        <Typography variant="h6">Последние комментарии</Typography>
        <KeyboardArrowRightIcon />
      </Stack>

      <List
        disablePadding
        className={
          isFullPost ? styles.fullPostCommentsBlock : styles.commentsBlock
        }
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}
      >
        {lastComments?.map((comment, index) => {
          return <Comment {...comment} key={index} isFullPost={isFullPost} />;
        })}
      </List>
    </div>
  );
};
