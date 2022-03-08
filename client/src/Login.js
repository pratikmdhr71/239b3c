import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  Hidden
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BgImage from './assets/images/bg-img.png';
import BgImageMobile from './assets/images/bg-img-mobile.png';
import ChatBubble from './assets/images/bubble.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    '& a': { textDecoration: 'none' },
    '& button': {
      height: '54px',
      minWidth: '160px',
      padding: theme.spacing(0, 8.5),
      [theme.breakpoints.down('sm')]: {
        height: '48px',
        minWidth: '140px',
        padding: theme.spacing(0, 4)
      }
    }
  },

  headerText: {
    fontSize: '1.625rem',
    lineHeight: 1.54
  },
  bold: {
    fontWeight: 600
  },

  sideBanner: {
    position: 'relative',
    background: `url(${BgImage}) no-repeat top`,
    backgroundSize: 'cover'
  },

  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0px',
    left: '0px',
    background: 'linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)',
    opacity: '0.85',
    textAlign: 'center'
  },
  chatBubble: {
    width: theme.spacing(16.75),
    height: theme.spacing(16.5),
    marginBottom: theme.spacing(8.5)
  },
  overlayText: {
    position: 'absolute',
    top: '30%',
    color: 'white',
    maxWidth: theme.spacing(67.25)
  },

  rightContainer: {
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 10.5),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 8)
    }
  },

  topContainer: {
    position: 'absolute',
    top: '0',
    right: '0',
    textDecoration: 'none',
    padding: theme.spacing(7.5, 10.5),
    gridGap: theme.spacing(7.5),
    flexWrap: 'nowrap',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(7.5, 8),
      gridGap: theme.spacing(4),
      background: `url(${BgImageMobile}) no-repeat top`,
      backgroundSize: 'cover',
      height: theme.spacing(32)
    }
  },

  helperText: {
    color: theme.palette.secondary.main,
    [theme.breakpoints.down('xs')]: {
      color: 'white',
      fontWeight: 600
    }
  },

  secondaryButton: {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'white',
      color: theme.palette.primary.main,
      '&:hover': {
        color: 'white'
      }
    }
  },

  primaryButton: {
    margin: theme.spacing(7, 'auto', 0)
  },

  formContainer: {
    width: '380px',
    [theme.breakpoints.up('lg')]: {
      width: '480px'
    }
  },

  inputFieldContainer: {
    marginTop: theme.spacing(2),
    gridGap: theme.spacing(3.5),
    '& label': {
      color: theme.palette.secondary.main,
      fontSize: '1.15rem'
    },
    '& input': {
      paddingTop: theme.spacing(5),
      [theme.breakpoints.down('xs')]: {
        paddingTop: theme.spacing(3)
      }
    }
  }
}));

const formInputs = [
  { id: 0, name: 'username', label: 'Username', type: 'text' },
  { id: 1, name: 'password', label: 'Password', type: 'password' }
];

const Login = ({ user, login }) => {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Grid className={classes.root} container justifyContent="center">
      <Hidden xsDown>
        <Grid className={classes.sideBanner} sm={5} item>
          <Grid
            className={classes.overlay}
            container
            item
            direction="column"
            alignItems="center"
          >
            <Box className={classes.overlayText}>
              <img className={classes.chatBubble} src={ChatBubble} alt="" />
              <Typography className={classes.headerText}>
                Converse with anyone with any language
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Hidden>
      <Grid
        className={classes.rightContainer}
        xs={12}
        sm={7}
        container
        item
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          className={classes.topContainer}
          container
          item
          justifyContent="flex-end"
          alignItems="center"
        >
          <Typography className={classes.helperText} variant="body2">
            Don't have an account?
          </Typography>
          <Link href="/register" to="/register">
            <Button
              className={classes.secondaryButton}
              variant={`${isMobile ? 'contained' : 'text'}`}
              color="primary"
            >
              Create Account
            </Button>
          </Link>
        </Grid>
        <Box className={classes.formContainer}>
          <Typography className={`${classes.headerText} ${classes.bold}`}>
            Welcome Back!
          </Typography>
          <form onSubmit={handleLogin}>
            <Grid
              className={classes.inputFieldContainer}
              container
              direction="column"
            >
              {formInputs.map(({ id, name, label, type }) => (
                <FormControl
                  key={id}
                  margin={`${isDesktop ? 'normal' : 'dense'}`}
                  required
                >
                  <TextField
                    label={label}
                    aria-label={name}
                    name={name}
                    type={type}
                  />
                </FormControl>
              ))}
              <Button
                className={classes.primaryButton}
                type="submit"
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
