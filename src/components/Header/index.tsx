import { Button, Grid } from "@mui/material";
import { SearchField } from "../SearchField/index";
import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "../../assets/icon.svg";
import MenuIcon from "@mui/icons-material/Menu";
import SmsIcon from "@mui/icons-material/Sms";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";

export const Header: React.FC = () => {
  return (
    <>
      <Grid container spacing={2} className={styles.header}>
        <Grid item xs={1}>
          <Stack direction="row" spacing={2} alignItems={"center"}>
            <IconButton>
              <MenuIcon fontSize="large" />
            </IconButton>
            <Link href="/">
              <Image src={logo} width={50} height={50} alt="logo" />
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <SearchField />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ boxShadow: 1, "&:hover": { boxShadow: 1 } }}
          >
            + Создать запись
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Stack direction="row" spacing={3} justifyContent={"end"}>
            <IconButton>
              <SmsIcon fontSize="large" />
            </IconButton>
            <IconButton>
              <NotificationsNoneIcon fontSize="large" />
            </IconButton>
            <Avatar variant="rounded" />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
