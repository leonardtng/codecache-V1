import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import logo from '../images/Codecache.svg';
import SearchBar from './SearchBar';
import CourseFilter from './CourseFilter';
import HeaderIcons from './HeaderIcons';
import { useHistory } from "react-router-dom";

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
  }),
);

const Logo: React.FC = () => {
  const classes = useStyles();
  let history = useHistory();
  const handleClick = () => { history.push("/") }
  return (
    <IconButton className={classes.logostyle} onClick={handleClick}>
      <img src={logo} alt="codecache" />
    </IconButton>
  );
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
      <HeaderIcons />
      <Grid item xs={12}>
        <SearchBar />
      </Grid>
      <CourseFilter />
    </Grid>
  );
}

export default NavBar