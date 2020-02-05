import React from 'react';
import logo from '../images/Codecache.svg';
import ProfileButton from './ProfileButton';
import MenuButton from './MenuButton';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

const Logo: React.FC = () => {
  return (
    <img src={logo} alt="codecache" />
  )
}

const ProfilePage: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="App">
      <Grid container spacing={0} id="navbar">
        <Grid item xs={2} id="nav-color">
          <Logo />
        </Grid>
        <Grid item xs={8} id="nav-color">
        </Grid>
        <Grid item xs={2} id="nav-color">
          <span id="icon-group">
            <ProfileButton />
            <MenuButton />
          </span>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfilePage;
