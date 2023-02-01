import { Grid } from "@mui/material";
import React from "react";
import styles from "./MainLayout.module.scss";
import { LeftMenu } from "../../components/LeftMenu/index";

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
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <LeftMenu />
        </Grid>
        <Grid item xs={8}>
          <p>center Ssfaf</p>
        </Grid>
        <Grid item xs={2}>
          <p>rigth c</p>
        </Grid>
      </Grid>
    </div>
  );
};
