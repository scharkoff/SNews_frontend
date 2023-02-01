import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

interface IComment {
  userName: string;
  text: string;
}

export const Comment: React.FC<IComment> = ({ userName, text }) => {
  return (
    <ListItem alignItems="flex-start" disablePadding>
      <ListItemAvatar>
        <Avatar
          alt={userName}
          src="/static/images/avatar/1.jpg"
          variant="rounded"
        />
      </ListItemAvatar>
      <ListItemText
        primary={userName}
        secondary={<React.Fragment>{text}</React.Fragment>}
      />
    </ListItem>
  );
};
