import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import LoginButton from '../login/LoginButton';
import HomeButton from './HomeButton';
import AddProjectButton from './AddProjectButton';
import ProfileButton from './ProfileButton';
import NotificationButton from './NotificationButton';
import MenuButton from './MenuButton';
import Grid from '@material-ui/core/Grid';
import { userState } from '../../contexts/UserState';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navcolor: {
      backgroundColor: '#333333',
    },
    divider: {
      borderLeft: '2px solid #707070',
      height: '60.51%',
      margin: '10px 0',
      float: 'left',
    },
  }),
);

const HeaderIcons: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid item xs={3} className={classes.navcolor}>
      <userState.Consumer>{({ isLoggedIn, toggleLogin }) => {
        if (isLoggedIn) {
          return <Grid container spacing={0}>
            <Grid item xs={8}>
              <Grid container spacing={0}>
                <Grid item xs={4}>
                  <HomeButton />
                </Grid>
                <Grid item xs={4}>
                  <AddProjectButton />
                </Grid>
                <Grid item xs={4}>
                  <ProfileButton />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container spacing={0}>
                <Grid item xs={1}>
                  <div className={classes.divider}></div>
                </Grid>
                <Grid item xs={4}>
                  <NotificationButton />
                </Grid>
                <Grid item xs={4}>
                  <MenuButton />
                </Grid>
                <Grid item xs={3}>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        }
        return <LoginButton />
      }}
      </userState.Consumer>
    </Grid>
  )
}

export default HeaderIcons;
