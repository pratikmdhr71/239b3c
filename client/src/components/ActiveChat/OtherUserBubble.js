import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar, Grid } from '@material-ui/core';
import AttachmentImages from './AttachmentImages';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    marginTop: 24,
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  usernameDate: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bubble: {
    backgroundImage: 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
    borderRadius: '0 10px 10px 10px',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: -0.2,
    padding: 8,
  },
}));

const OtherUserBubble = ({ text, time, otherUser, attachments }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Grid
        className={classes.messageContent}
        container
        direction={`${attachments?.length > 1 ? 'column-reverse' : 'column'}`}
        alignItems="flex-start"
      >
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>
        {attachments && (
          <AttachmentImages
            attachments={attachments}
            justifyContent="flex-start"
          />
        )}
        {text !== '' && (
          <Box className={classes.bubble}>
            <Typography className={classes.text}>{text}</Typography>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default OtherUserBubble;
