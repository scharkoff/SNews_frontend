import React from 'react';
import styles from './MainLayout.module.scss';
import { Grid } from '@mui/material';
import { LeftMenu } from '../../widgets/LeftMenu/index';
import { CommentsBlock } from '../../widgets/CommentsBlock/index';

interface IMainLayoutProps {
  children?: any;
  hideComments?: boolean;
  contentFullWidth?: boolean;
  className?: string;
}

export const MainLayout: React.FC<IMainLayoutProps> = ({
  children,
  contentFullWidth = false,
  hideComments,
  className,
}) => {
  return (
    <div>
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
            <CommentsBlock isFullPost={contentFullWidth} hideComments />
          </Grid>
        )}
      </Grid>
    </div>
  );
};
