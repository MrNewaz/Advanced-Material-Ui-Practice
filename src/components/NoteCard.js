import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import React from 'react';

const NoteCard = ({ note, handleDelete }) => {
  return (
    <div>
      <Card>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
