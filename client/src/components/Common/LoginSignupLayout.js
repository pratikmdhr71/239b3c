import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core';
import BgImage from '../../assets/images/bg-img.png';
import ChatBubble from '../../assets/images/bubble.svg';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    '& a': { textDecoration: 'none' },
    '& button': {
      height: '3.375rem',
      minWidth: '10rem',
      padding: theme.spacing(0, 8.5),
      [theme.breakpoints.down('sm')]: {
        height: '3rem',
        minWidth: '8.65rem',
        padding: theme.spacing(0, 4)
      }
    }
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

  container: {
    backgroundColor: theme.palette.background.paper
  }
}));

const LoginSignupLayout = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Grid className={classes.root} container>
      {!isMobile && (
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
      )}
      <Grid
        className={classes.container}
        xs={12}
        sm={7}
        container
        item
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default LoginSignupLayout;
