import React from "react";
import styles from "./PostActions.module.scss";

import IconButton from "@mui/material/IconButton";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";

export const PostActions: React.FC = () => {
  return (
    <div className={styles.actionsWrapper}>
      <IconButton>
        <ChatBubbleOutlineIcon />
      </IconButton>
      <IconButton>
        <RepeatIcon />
      </IconButton>
      <IconButton>
        <BookmarkBorderIcon />
      </IconButton>
      <IconButton>
        <ShareIcon />
      </IconButton>
    </div>
  );
};
