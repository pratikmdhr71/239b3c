import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import CancelIcon from '@material-ui/icons/Cancel';
const useStyles = makeStyles((theme) => ({
  imageContainer: {
    position: 'relative',
  },
  deleteIcon: {
    position: 'absolute',
    padding: 0,
    top: theme.spacing(0.25),
    right: theme.spacing(0.25),
    backgroundColor: '#F4F6FA',
    '& svg': {
      fontSize: '1rem',
    },
  },
  previewImages: {
    gridGap: theme.spacing(2),
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    backgroundColor: '#F4F6FA',
    '& img': {
      borderRadius: theme.spacing(1),
    },
  },
  uploading: {
    '& img': {
      opacity: 0.6,
    },
  },
  addMore: {
    width: '3.75rem',
    height: '2.8125rem',
    borderRadius: theme.spacing(1),
    backgroundColor: 'rgba(205,205,205,0.5)',

    '&:hover': {
      backgroundColor: 'rgba(233, 238, 249, 1)',
    },
  },
  imageInput: {
    display: 'none',
  },
}));

const PreviewImages = ({
  selectedImages,
  isUploading,
  addImages,
  deleteImage,
}) => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={`${classes.previewImages} ${
        isUploading ? classes.uploading : ''
      }`}
    >
      {selectedImages.map((image) => (
        <div className={classes.imageContainer} key={Math.random()}>
          <img src={URL.createObjectURL(image)} width={60} height={45} alt="" />
          {!isUploading && (
            <IconButton
              aria-label="delete"
              className={classes.deleteIcon}
              onClick={() => deleteImage(image.name)}
            >
              <CancelIcon />
            </IconButton>
          )}
        </div>
      ))}
      {!isUploading && (
        <div>
          <input
            accept="image/*"
            name="images"
            className={classes.imageInput}
            id="attach-more-image-icon"
            type="file"
            files={selectedImages}
            onChange={addImages}
            multiple
          />
          <label htmlFor="attach-more-image-icon">
            <IconButton
              className={classes.addMore}
              aria-label="upload picture"
              component="span"
            >
              <AddRoundedIcon />
            </IconButton>
          </label>
        </div>
      )}
    </Grid>
  );
};

export default React.memo(PreviewImages);
