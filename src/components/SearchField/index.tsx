import React from "react";
import styles from "./SearchField.module.scss";

export const SearchField: React.FC = () => {
  return (
    <>
      <input
        type="search"
        name="searchField"
        id="searchField"
        placeholder="Поиск..."
        className={styles.searchField}
      />
    </>
  );
};
