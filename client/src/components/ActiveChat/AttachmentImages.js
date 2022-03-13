import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  singleImage: {
    marginBottom: theme.spacing(0.5),
    '& img': {
      objectFit: 'cover',
      width: '9.375rem',
      height: '9.375rem',
      borderRadius: theme.spacing(2.5, 2.5, 0, 2.5),
    },
  },
  multipleImage: {
    margin: theme.spacing(2.5, 0, 1.5),
    gridGap: 6,
    maxWidth: '22rem',
    '& img': {
      objectFit: 'cover',
      width: '6.5rem',
      height: '5rem',
      borderRadius: theme.spacing(1.5, 1.5, 0, 1.5),
    },
  },
}));

const AttachmentImages = ({ attachments, justifyContent }) => {
  const classes = useStyles();
  return (
    <Grid
      className={`${
        attachments?.length > 1 ? classes.multipleImage : classes.singleImage
      }`}
      container
      justifyContent={justifyContent}
    >
      {attachments.map((attachment) => (
        <img
          src={attachment}
          alt="attached pictures"
          loading="lazy"
          key={Math.random()}
        />
      ))}
    </Grid>
  );
};

export default React.memo(AttachmentImages);
