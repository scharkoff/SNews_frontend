import React from "react";
import {
  WhatshotOutlined as FireIcon,
  SmsOutlined as MessageIcon,
  TrendingUpOutlined as TrendingIcon,
  FormatListBulletedOutlined as ListIcon,
} from "@mui/icons-material";

import styles from "./LeftMenu.module.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export const LeftMenu: React.FC = () => {
  const menuList = [
    { text: "Лента", icon: <FireIcon />, path: "/" },
    { text: "Сообщения", icon: <MessageIcon />, path: "/" },
    { text: "Рейтинг RJ", icon: <TrendingIcon />, path: "/" },
    { text: "Подписки", icon: <ListIcon />, path: "/" },
  ];
  return (
    <div>
      <List>
        {menuList.map((obj, index) => {
          return (
            <ListItem className={styles.listItem} key={index}>
              <ListItemButton style={{ borderRadius: 20 }}>
                <ListItemIcon>{obj.icon}</ListItemIcon>
                <ListItemText primary={obj.text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};
