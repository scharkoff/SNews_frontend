import { TextField } from "@mui/material";
import React from "react";
import styles from "./SearchField.module.scss";

export default function SearchField() {
  return (
    <>
      <TextField
        variant="outlined"
        id="search"
        label="Поиск..."
        value=""
        className={styles.searchField}
      />
    </>
  );
}
