import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography, Hidden } from '@material-ui/core';
import BgImage from '../../assets/images/bg-img.png';
import BgImageMobile from '../../assets/images/bg-img-mobile.png';
import ChatBubble from '../../assets/images/bubble.svg';
import Form from './Form';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    ' & a': { textDecoration: 'none' }
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
    padding: theme.spacing(2),
    textAlign: 'center',
    background: 'linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)',
    opacity: '0.85'
  },

  overlayContent: {
    position: 'absolute',
    top: '30%',
    maxWidth: '16.8125rem',
    color: 'white',
    '& img': {
      width: '4.1875rem',
      height: '4.125rem',
      marginBottom: theme.spacing(8.5)
    },
    '& p': {
      fontSize: '1.625rem',
      lineHeight: 1.54,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.4rem'
      }
    }
  },

  // The main container for the right section of the page that includes the form
  primaryContainer: {
    position: 'relative',
    padding: theme.spacing(0, 10.5),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 8)
    },
    backgroundColor: theme.palette.background.paper
  },

  // The container for the button and helper text at the top of the page
  secondaryContainer: {
    position: 'absolute',
    top: '0',
    right: '0',
    padding: theme.spacing(7.5, 10.5),
    gridGap: theme.spacing(7.5),
    flexWrap: 'nowrap',
    textDecoration: 'none',

    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(7.5, 8),
      gridGap: theme.spacing(4),
      background: `url(${BgImageMobile}) no-repeat top`,
      backgroundSize: 'cover',
      height: '8rem'
    },
    '& p': {
      color: theme.palette.secondary.main,
      [theme.breakpoints.down('xs')]: {
        color: 'white',
        fontSize: '0.79rem',
        fontWeight: 600
      }
    }
  }
}));

const LoginSignupLayout = ({
  switchPageContent,
  formDetails,
  passwordErrorMessage,
  onFormSubmit
}) => {
  const classes = useStyles();
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
            <Box className={classes.overlayContent}>
              <img src={ChatBubble} alt="chat logo" />
              <Typography>Converse with anyone with any language</Typography>
            </Box>
          </Grid>
        </Grid>
      </Hidden>
      <Grid
        className={classes.primaryContainer}
        xs={12}
        sm={7}
        container
        item
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          className={classes.secondaryContainer}
          container
          item
          justifyContent="flex-end"
          alignItems="center"
        >
          {switchPageContent}
        </Grid>
        <Form
          formDetails={formDetails}
          onFormSubmit={onFormSubmit}
          passwordErrorMessage={passwordErrorMessage}
          btnStyle="primary"
        />
      </Grid>
    </Grid>
  );
};

export default LoginSignupLayout;
