import { Grid } from '@mui/material';
import React from 'react';
import styles from './MainLayout.module.scss';
import { LeftMenu } from '../../components/LeftMenu/index';
import { CommentsBlock } from '../../components/CommentsBlock/index';

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
        <Grid item md={3} xl={2}>
          <LeftMenu />
        </Grid>
        <Grid item md={6} xl={8}>
          {children}
        </Grid>
        <Grid item md={3} xl={2}>
          <CommentsBlock isFullPost={contentFullWidth} hideComments />
        </Grid>
      </Grid>
    </div>
  );
};
