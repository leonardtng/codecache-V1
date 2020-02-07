import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import LoginButton from './LoginButton';
import ProfileButton from './ProfileButton';
import MenuButton from './MenuButton';
import Grid from '@material-ui/core/Grid';
import { userState } from '../contexts/UserState';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navcolor: {
      backgroundColor: '#23343B',
    },
    icongroup: {
      marginLeft: '7vw',
    },
  }),
);

const HeaderIcons = () => {
  const classes = useStyles();
  
  return (
    <Grid item xs={2} className={classes.navcolor}>
      <userState.Consumer>{({ isLoggedIn, toggleLogin }) => {
        if (isLoggedIn) {
          return <span className={classes.icongroup}>
            <ProfileButton />
            <MenuButton />
          </span>
        }
        return <LoginButton />
      }}
      </userState.Consumer>
    </Grid>
  )
}

export default HeaderIcons;
