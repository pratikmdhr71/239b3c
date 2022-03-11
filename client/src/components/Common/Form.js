import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    maxWidth: '23.75rem',
    flexGrow: 1,
    padding: theme.spacing(0, 4, 20),
    [theme.breakpoints.up('lg')]: {
      maxWidth: '30rem'
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(8, 7.5, 20)
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#D5DFEE',
      borderWidth: '1.5px'
    }
  },

  formHeaderText: {
    fontSize: '1.625rem',
    lineHeight: 1.54,
    fontWeight: 600
  },

  inputFieldContainer: {
    margin: theme.spacing(8, 0, 13),
    gridGap: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(6, 0, 8),
      gridGap: theme.spacing(6)
    },
    '& label': {
      color: theme.palette.secondary.main,
      paddingLeft: theme.spacing(1),
      fontSize: '1.18rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.0rem'
      }
    },
    '& input': {
      paddingTop: theme.spacing(5),
      paddingLeft: theme.spacing(1),
      [theme.breakpoints.down('md')]: {
        paddingTop: theme.spacing(3)
      }
    },
    '& a': {
      padding: theme.spacing(0, 2.5),
      color: theme.palette.primary.main,
      fontSize: '0.875rem',
      fontWeight: 600
    }
  },

  btn: {
    display: 'flex',
    margin: theme.spacing(0, 'auto'),
    fontSize: '1rem',
    fontWeight: 700
  }
}));

const Form = ({ headerText, onFormSubmit, btnText, children }) => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.formContainer}
      container
      item
      direction="column"
      justifyContent="center"
    >
      <Typography className={classes.formHeaderText}>{headerText}</Typography>
      <form onSubmit={onFormSubmit}>
        <Grid
          className={classes.inputFieldContainer}
          container
          direction="column"
        >
          {children}
        </Grid>
        <Button
          className={classes.btn}
          type="submit"
          variant="contained"
          color="primary"
        >
          {btnText}
        </Button>
      </form>
    </Grid>
  );
};

export default Form;
