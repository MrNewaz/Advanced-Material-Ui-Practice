import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  test: {
    border: (note) => {
      if (note.category === 'work') {
        return '1px solid red';
      }
    },
  },
}));

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);
  return (
    <div>
      <Card className={classes.test}>
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
