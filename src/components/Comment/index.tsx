import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import styles from "./Comment.module.scss";

interface ICommentItem {
  user: {
    fullName: string;
  };
  text: string;
  post: {
    title: string;
  };
}

export const Comment: React.FC<ICommentItem> = ({ user, text, post }) => {
  return (
    <ListItem alignItems="flex-start" disablePadding className={styles.comment}>
      <ListItemAvatar>
        <Avatar
          alt={user.fullName}
          src="/static/images/avatar/1.jpg"
          variant="rounded"
        />
      </ListItemAvatar>
      <ListItemText
        primary={user.fullName}
        secondary={<React.Fragment>{text}</React.Fragment>}
      />
    </ListItem>
  );
};
