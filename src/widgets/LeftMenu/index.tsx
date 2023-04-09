import React, { ReactComponentElement, ReactNode } from 'react';
import {
  WhatshotOutlined as FireIcon,
  SmsOutlined as MessageIcon,
  TrendingUpOutlined as TrendingIcon,
  FormatListBulletedOutlined as ListIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import styles from './LeftMenu.module.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

type TMenu = { text: string; icon: ReactNode; path: string }[];

export const LeftMenu: React.FC = () => {
  const menuList: TMenu = [
    { text: 'Лента', icon: <FireIcon />, path: '/' },
    { text: 'Сообщения', icon: <MessageIcon />, path: '/' },
    { text: 'Рейтинг RJ', icon: <TrendingIcon />, path: '/' },
    { text: 'Подписки', icon: <ListIcon />, path: '/' },
  ];
  return (
    <div>
      <List disablePadding>
        {menuList.map((menuItem, index) => {
          return (
            <ListItem className={styles.listItem} key={index}>
              <Link href={menuItem.path}>
                <ListItemButton style={{ borderRadius: 20 }}>
                  <ListItemIcon>{menuItem.icon}</ListItemIcon>
                  <ListItemText primary={menuItem.text} />
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};
