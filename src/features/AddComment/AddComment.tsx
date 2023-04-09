import { Paper, TextField, Avatar } from '@mui/material';
import React from 'react';

type Props = {};

const AddComment: React.FC<Props> = () => {
  return (
    <Paper elevation={0}>
      <div>
        <Avatar alt="Alex Hopper" />
        <TextField placeholder="Введите комментарий..."></TextField>
      </div>
    </Paper>
  );
};

export default AddComment;
