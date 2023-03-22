import React from "react";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Comment } from "../Comment/index";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const comments = [
  {
    user: {
      fullName: "Алекс Хоппер",
    },
    avatarUrl: "./",
    text: "Я написал какой-то комментарий, чтобы проверить как это будет выглядеть в дальнейшем",
    post: {
      title: "Какое-то название",
    },
  },
  {
    user: {
      fullName: "Алекс Хоппер",
    },
    avatarUrl: "./",
    text: "Я написал какой-то комментарий, чтобы проверить как это будет выглядеть в дальнейшем",
    post: {
      title: "Какое-то название",
    },
  },
  {
    user: {
      fullName: "Алекс Хоппер",
    },
    avatarUrl: "./",
    text: "Я написал какой-то комментарий, чтобы проверить как это будет выглядеть в дальнейшем",
    post: {
      title: "Какое-то название",
    },
  },
];

export const CommentsBlock: React.FC = () => {
  return (
    <div>
      <Stack direction="row" spacing={2} alignItems={"center"} marginBottom={2}>
        <Typography variant="h6">Комментарии</Typography>
        <KeyboardArrowRightIcon />
      </Stack>

      <List
        disablePadding
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        {comments.map((comment, index) => {
          return <Comment {...comment} key={index} />;
        })}
      </List>
    </div>
  );
};
