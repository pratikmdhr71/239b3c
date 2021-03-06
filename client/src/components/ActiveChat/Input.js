import React, { useState, useCallback } from 'react';
import {
  Box,
  FormControl,
  FilledInput,
  InputAdornment,
  IconButton,
  InputLabel
} from '@material-ui/core';
import MuiInput from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import PreviewImages from './PreviewImages';

const useStyles = makeStyles((theme) => ({
  root: {
    justifySelf: 'flex-end',
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: '#F4F6FA',
    borderRadius: 8,
    marginBottom: 20,
    '& .MuiIconButton-root': {
      color: theme.palette.secondary.main,
      '&:hover': {
        color: 'rgba(0, 0, 0, 0.54)',
      },
    },
  },
  attachImageButton: {
    display: 'none',
  },
}));

const Input = ({
  otherUser,
  conversationId,
  user,
  postMessage,
  uploadImages,
}) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const addImages = useCallback((e) => {
    setSelectedImages((prev) => [...prev, ...e.target.files]);
    e.target.value = null;
  }, []);

  const deleteImage = useCallback((fileNameToDelete) => {
    setSelectedImages((prev) =>
      prev.filter((image) => image.name !== fileNameToDelete),
    );
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;

    if (formElements.text.value.length === 0 && selectedImages.length === 0)
      return;

    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    let attachments = null;
    if (selectedImages.length > 0) {
      setIsUploading(true);
      attachments = await uploadImages(selectedImages);
    }
    const reqBody = {
      text: formElements.text.value,
      attachments,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
    };
    await postMessage(reqBody);
    setIsUploading(false);
    setSelectedImages([]);
    setText('');
  };

  return (
    <Box className={classes.root}>
      {selectedImages.length > 0 && (
        <PreviewImages
          selectedImages={selectedImages}
          isUploading={isUploading}
          addImages={addImages}
          deleteImage={deleteImage}
        />
      )}
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth hiddenLabel>
          <FilledInput
            className={classes.input}
            disableUnderline
            placeholder="Type something..."
            value={text}
            name="text"
            disabled={isUploading}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <MuiInput
                  className={classes.attachImageButton}
                  accept="image/*"
                  name="images"
                  id="attach-image-icon"
                  type="file"
                  onChange={addImages}
                  inputProps={{ multiple: true }}
                  disabled={isUploading}
                />
                <InputLabel htmlFor="attach-image-icon">
                  <IconButton
                    aria-label="attach picture"
                    component="span"
                    disabled={isUploading}
                  >
                    <FileCopyOutlinedIcon />
                  </IconButton>
                </InputLabel>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
    </Box>
  );
};

export default Input;
