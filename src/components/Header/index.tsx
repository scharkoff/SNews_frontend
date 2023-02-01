import { Button, Grid } from "@mui/material";
import SearchField from "../SearchField/index";
import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "../../assets/logo512.png";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <>
      <Grid container spacing={2} className={styles.header}>
        <Grid item xs={2} style={{ display: "flex", alignItems: "center" }}>
          <MenuIcon
            fontSize="large"
            style={{ marginRight: 20, cursor: "pointer" }}
          />
        </Grid>
        <Grid item xs={4} textAlign="center">
          <SearchField />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="secondary">
            + Создать запись
          </Button>
        </Grid>
        <Grid item xs={2}>
          <h1>Item</h1>
        </Grid>
      </Grid>
    </>
  );
}
