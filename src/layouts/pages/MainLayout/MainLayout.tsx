import { Grid } from "@mui/material";
import React from "react";
import styles from "./MainLayout.module.scss";

export default function MainLayout() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <p>left c</p>
        </Grid>
        <Grid item xs={8}>
          <p>center c</p>
        </Grid>
        <Grid item xs={2}>
          <p>rigth c</p>
        </Grid>
      </Grid>
    </div>
  );
}
