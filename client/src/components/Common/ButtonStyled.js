import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  btn: {
    height: '3.375rem',
    minWidth: '10rem',
    padding: theme.spacing(0, 8.5),
    [theme.breakpoints.down('sm')]: {
      height: '3rem',
      minWidth: '8.65rem',
      padding: theme.spacing(0, 4)
    }
  },

  // The button to submit the main form
  primaryBtn: {
    margin: theme.spacing(7, 'auto', 0),
    fontSize: '1rem',
    fontWeight: 700
  },

  // The button to switch to a different page
  secondaryBtn: {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'white',
      color: theme.palette.primary.main,
      '&:hover': {
        color: 'white'
      }
    }
  }
}));

const ButtonStyled = ({ btnStyle, children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Button
      className={`
        ${classes.btn} ${
        btnStyle === 'primary' ? classes.primaryBtn : classes.secondaryBtn
      }
      `}
      type={btnStyle === 'primary' ? 'submit' : null}
      variant={btnStyle === 'secondary' && !isMobile ? 'text' : 'contained'}
      color="primary"
    >
      {children}
    </Button>
  );
};

export default ButtonStyled;
