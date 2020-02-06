import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import logo from '../images/Codecache.svg';
import IconButton from '@material-ui/core/IconButton';
import ProfileCard from '../components/ProfileCard';
import { useHistory } from "react-router-dom";
import HeaderIcons from '../components/HeaderIcons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: 'center',
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
    emptyspace: {
      height: 75.72,
    },
    largeFont: {
      fontSize: "x-large",
    },
    profilecardspace: {
      position: 'fixed',
      top: '100px'
    },
    cardspace: {
      position: 'relative',
      top: '300px',
    },
  }),
);

const Logo: React.FC = () => {
  const classes = useStyles();
  let history = useHistory();
  const handleClick = () => { history.push("/") };
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
        <HeaderIcons />
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.emptyspace}>
          </Grid>
          <Grid item xs={1} className={classes.largeFont}>
            <b>Profile</b>
          </Grid>
          <Grid item xs={11}>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={4} className={classes.profilecardspace}>
          <ProfileCard />
        </Grid>
        <Grid item xs={8} className={classes.cardspace}>
          {/* TODO: MyProjectsSpace */}
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfilePage;
