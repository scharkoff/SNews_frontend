import React from 'react';
import styles from './MainLayout.module.scss';
import { Grid } from '@mui/material';
import { LeftMenu } from '../../widgets/LeftMenu/index';
import { CommentsBlock } from '../../widgets/CommentsBlock/index';
import { CommentDTO } from '@/entities/Comment/types/comment-dto';

interface IMainLayoutProps {
  children: any;
  lastComments?: CommentDTO[];
  contentFullWidth?: boolean;
}

export const MainLayout: React.FC<IMainLayoutProps> = ({
  children,
  lastComments,
  contentFullWidth = false,
}) => {
  return (
    <div className={styles.main}>
      <Grid container spacing={2} paddingTop={2}>
        {!contentFullWidth && (
          <Grid item xs={12} md={3} xl={3}>
            <LeftMenu />
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={contentFullWidth ? 12 : 6}
          xl={contentFullWidth ? 12 : 6}
        >
          {children}
        </Grid>
        {!contentFullWidth && (
          <Grid item xs={12} md={3} xl={3}>
            <CommentsBlock
              lastComments={lastComments || []}
              isFullPost={contentFullWidth}
            />
          </Grid>
        )}
      </Grid>
    </div>
  );
};
