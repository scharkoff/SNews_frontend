import { Grid } from "@mui/material";
import React from "react";
import styles from "./MainLayout.module.scss";
import { LeftMenu } from "../../components/LeftMenu/index";
import { CommentsBlock } from "../../components/CommentsBlock/index";

interface IMainLayoutProps {
  children?: any;
  hideComments?: boolean;
  contentFullWidth?: boolean;
  className?: string;
}

export const MainLayout: React.FC<IMainLayoutProps> = ({
  children,
  contentFullWidth,
  hideComments,
  className,
}) => {
  return (
    <div>
      <Grid container spacing={2} paddingTop={2}>
        <Grid item xs={2}>
          <LeftMenu />
        </Grid>
        <Grid item xs={8} justifyContent={"center"}>
          {children}
        </Grid>
        <Grid item xs={2}>
          <CommentsBlock />
        </Grid>
      </Grid>
    </div>
  );
};
