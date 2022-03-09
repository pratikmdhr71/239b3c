import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Grid,
  Box,
  Typography,
  FormControl,
  TextField,
  InputAdornment
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ButtonStyled from './ButtonStyled';
import { FormHelperText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: '23.75rem',
    padding: theme.spacing(0, 4),
    [theme.breakpoints.up('lg')]: {
      width: '30rem'
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
    marginTop: theme.spacing(2),
    gridGap: theme.spacing(3.5),
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
    }
  },

  forgetPassword: {
    padding: theme.spacing(0, 2.5),
    color: theme.palette.primary.main,
    fontSize: '0.875rem',
    fontWeight: 600
  }
}));

const Form = ({
  formDetails,
  btnStyle,
  onFormSubmit,
  passwordErrorMessage
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const { formType, headerText, inputFields, passwordLength, submitBtnText } =
    formDetails;

  return (
    <Box className={classes.formContainer}>
      <Typography className={`${classes.formHeaderText}`}>
        {headerText}
      </Typography>
      <form onSubmit={onFormSubmit}>
        <Grid
          className={classes.inputFieldContainer}
          container
          direction="column"
        >
          {inputFields.map(({ id, name, label, inputType }) => (
            <FormControl
              key={id}
              margin={`${isDesktop ? 'normal' : 'dense'}`}
              required
              error={
                formType === 'signup' &&
                inputType === 'password' &&
                !!passwordErrorMessage
              }
            >
              <TextField
                label={label}
                aria-label={label}
                name={name}
                type={inputType}
                required={formType === 'signup' ? true : false}
                inputProps={
                  formType === 'signup' && inputType === 'password'
                    ? { minLength: passwordLength }
                    : {}
                }
                InputProps={
                  formType === 'login' && inputType === 'password'
                    ? {
                        endAdornment: (
                          <InputAdornment position="end">
                            <Link
                              className={classes.forgetPassword}
                              href="/register"
                              to="/register"
                            >
                              Forgot?
                            </Link>
                          </InputAdornment>
                        )
                      }
                    : {}
                }
              />
              {formType === 'signup' && inputType === 'password' && (
                <FormHelperText>{passwordErrorMessage}</FormHelperText>
              )}
            </FormControl>
          ))}
          <ButtonStyled btnStyle={btnStyle}>{submitBtnText}</ButtonStyled>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
