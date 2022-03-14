import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid } from '@material-ui/core';
import AttachmentImages from './AttachmentImages';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 24,
  },
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: '#91A3C0',
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: 'bold',
  },
  bubble: {
    background: '#F4F6FA',
    borderRadius: '10px 10px 0 10px',
  },
}));

const SenderBubble = ({ time, text, attachments }) => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction={`${attachments?.length > 1 ? 'column-reverse' : 'column'}`}
      alignItems="flex-end"
    >
      <Typography className={classes.date}>{time}</Typography>
      {attachments && (
        <AttachmentImages attachments={attachments} justifyContent="flex-end" />
      )}
      <Box className={classes.bubble}>
        {text !== '' && (
          <Typography className={classes.text}>{text}</Typography>
        )}
      </Box>
    </Grid>
  );
};

export default SenderBubble;
