import { Button, Grid, Paper, Tab, Tabs } from '@mui/material';
import React from 'react';
import styles from './UserProfile.module.scss';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import { Post } from '../../entities/Post';

interface UserProfileProps {
  userId: number;
}

const user = {
  login: 'Ivan Sharkov',
  subs: 100,
  registerData: '2 января 2023',
};

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
  const [value, setValue] = React.useState<number>(0);

  return (
    <Grid container maxWidth={940} margin={' 0 auto'}>
      <Grid item xs={12} sm={12} md={12} xl={12}>
        <Paper elevation={0} className={styles.profile}>
          <div>
            <Avatar variant="rounded" sx={{ width: 100, height: 100 }} />
            <Typography variant="h5" marginTop={1}>
              {user.login}
            </Typography>
            <Typography variant="subtitle1" marginTop={1}>
              {user.subs} подписчиков
            </Typography>
            <Typography variant="subtitle1" marginTop={1}>
              На проекте с {user.registerData}
            </Typography>
          </div>
          <div>
            <Button
              variant="contained"
              color="secondary"
              sx={{ boxShadow: 1, '&:hover': { boxShadow: 1 } }}
            >
              <ManageAccountsOutlinedIcon />
            </Button>
            <Button
              startIcon={<SmsOutlinedIcon />}
              variant="contained"
              color="primary"
              sx={{
                boxShadow: 1,
                '&:hover': { boxShadow: 1 },
                marginLeft: 1,
                textTransform: 'none',
              }}
            >
              Написать
            </Button>
          </div>

          <Tabs aria-label="user-tabs" value={value} className={styles.tabs}>
            <Tab label="Записи" onClick={() => setValue(0)} />
            <Tab label="Комментарии" onClick={() => setValue(1)} />
            <Tab label="Закладки" onClick={() => setValue(2)} />
          </Tabs>
        </Paper>
      </Grid>

      <Grid item xs={8} sm={8} md={8} xl={8}>
        <div className={styles.userPosts}>
          <Post />
          <Post />
          <Post />
        </div>
      </Grid>

      <Grid item xs={4} sm={4} md={4} xl={4}>
        <Paper elevation={0} className={styles.userSubs}>
          Subs
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
