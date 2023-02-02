import React from "react";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Comment } from "../Comment/index";

export const CommentsBlock: React.FC = () => {
  const comments = [
    {
      avatarUrl: "./",
      userName: "Алекс Хоппер",
      text: "Я написал какой-то комментарий, чтобы проверить как это будет выглядеть в дальнейшем",
    },
    {
      avatarUrl: "./",
      userName: "Алекс Хоппер",
      text: "Я написал какой-то комментарий, чтобы проверить как это будет выглядеть в дальнейшем",
    },
    {
      avatarUrl: "./",
      userName: "Алекс Хоппер",
      text: "Я написал какой-то комментарий, чтобы проверить как это будет выглядеть в дальнейшем",
    },
  ];
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
          return (
            <Comment
              userName={comment.userName}
              text={comment.text}
              key={index}
            />
          );
        })}
      </List>
    </div>
  );
};
