import { MainLayout } from '@/layouts/MainLayout';
import React from 'react';
import styles from './write.module.scss';
import { Button } from '@mui/material';

type Props = {};

const Write = (props: Props) => {
  const [title, setTitle] = React.useState('');
  return (
    <MainLayout contentFullWidth>
      <div className={styles.write}>
        <input type="text" placeholder="Заголовок" className={styles.title} />

        <div className={styles.writeActions}>
          <Button
            size="small"
            color="primary"
            variant="contained"
            sx={{
              boxShadow: 1,
              '&:hover': { boxShadow: 1 },
              textTransform: 'none',
            }}
          >
            Создать
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Write;
