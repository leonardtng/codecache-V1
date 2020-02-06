import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import logo from '../images/Codecache.svg';
import SearchBar from './SearchBar';
import CourseFilter from './CourseFilter';
import LoginButton from './LoginButton';
import ProfileButton from './ProfileButton';
import MenuButton from './MenuButton';
import Grid from '@material-ui/core/Grid';
import { userState } from '../contexts/UserState';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logostyle: {
      width: '85%',
      height: '85%',
      objectFit: 'contain',
    },
    navbar: {
      position: 'fixed',
      width: '100%',
      backgroundColor: '#ffffff',
      zIndex: 1,
    },
    navcolor: {
      backgroundColor: '#23343B',
    },
    icongroup: {
      marginLeft: '7vw',
    },
  }),
);

const Logo: React.FC = () => {
  const classes = useStyles();

  return (
    <img className={classes.logostyle} src={logo} alt="codecache" />
  )
}

const NavBar: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.navbar}>
      <Grid item xs={2} className={classes.navcolor}>
        <Logo />
      </Grid>
      <Grid item xs={8} className={classes.navcolor}>
      </Grid>
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
      <Grid item xs={12}>
        <SearchBar />
      </Grid>
      <CourseFilter />
    </Grid>
  );
}

export default NavBar