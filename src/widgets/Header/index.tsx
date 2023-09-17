import styles from './Header.module.scss';
import Image from 'next/image';
import logo from '../../assets/icon.svg';
import MenuIcon from '@mui/icons-material/Menu';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Link from 'next/link';
import SearchField from '@/shared/SearchField';
import { Button, Grid } from '@mui/material';

export const Header: React.FC = () => {
  return (
    <>
      <Grid container spacing={2} className={styles.header}>
        <Grid item xs={1} sm={1} md={1} xl={1}>
          <Link href="/">
            <Image src={logo} width={50} height={50} alt="logo" />
          </Link>
        </Grid>

        <Grid item xs={9} sm={9} md={9} xl={9}>
          <SearchField />

          <Link href="/write">
            <Button
              startIcon={<AddOutlinedIcon fontSize="small" />}
              variant="contained"
              color="secondary"
              sx={{
                boxShadow: 1,
                '&:hover': { boxShadow: 1 },
                textTransform: 'none',
              }}
            >
              Создать запись
            </Button>
          </Link>
        </Grid>

        <Grid item xs={2} sm={2} md={2} xl={2}>
          <Stack direction="row" spacing={3} justifyContent={'end'}>
            <IconButton>
              <SmsIcon fontSize="large" />
            </IconButton>
            <IconButton>
              <NotificationsNoneIcon fontSize="large" />
            </IconButton>
            <Link href={'/profile/123'}>
              <Avatar variant="rounded" />
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
