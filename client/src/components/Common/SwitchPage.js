import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BgImageMobile from '../../assets/images/bg-img-mobile.png';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '7.125rem',
    padding: theme.spacing(7.5, 10.5),
    flexWrap: 'nowrap',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(7.5, 7.5),
      background: `url(${BgImageMobile}) no-repeat top`,
      backgroundSize: 'cover'
    },

    '& p': {
      color: theme.palette.secondary.main,
      [theme.breakpoints.down('xs')]: {
        color: 'white',
        fontSize: '0.79rem',
        fontWeight: 600
      }
    }
  },
  btn: {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    marginLeft: theme.spacing(7.5),
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(5),
      backgroundColor: 'white',
      color: theme.palette.primary.main,
      '&:hover': {
        color: 'white'
      }
    }
  }
}));

const SwitchPage = ({ target, helperText, btnText }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Grid
      className={classes.container}
      container
      item
      alignItems="center"
      justifyContent="flex-end"
    >
      <Typography variant="body2">{helperText}</Typography>
      <Link href={target} to={target}>
        <Button
          className={classes.btn}
          variant={!isMobile ? 'text' : 'contained'}
          color="primary"
        >
          {btnText}
        </Button>
      </Link>
    </Grid>
  );
};

export default SwitchPage;
