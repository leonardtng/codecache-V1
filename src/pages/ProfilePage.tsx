import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import logo from '../images/Codecache.svg';
import IconButton from '@material-ui/core/IconButton';
import ProfileButton from '../components/ProfileButton';
import MenuButton from '../components/MenuButton';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
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
  let history = useHistory();
  const handleClick = () => { history.push("/login") };
  return (
    <IconButton className={classes.logostyle} onClick={handleClick}>
      <img src={logo} alt="codecache" />
    </IconButton>
  )
}

const ProfilePage: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.navbar}>
        <Grid item xs={2} className={classes.navcolor}>
          <Logo />
        </Grid>
        <Grid item xs={8} className={classes.navcolor}>
        </Grid>
        <Grid item xs={2} className={classes.navcolor}>
          <span className={classes.icongroup}>
            <ProfileButton />
            <MenuButton />
          </span>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfilePage;
