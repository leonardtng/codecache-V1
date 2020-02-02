import React from 'react';
import logo from './images/Codecache.svg';
import SearchBar from './components/SearchBar';
import CourseFilter from './components/CourseFilter';
import LoginButton from './components/LoginButton';
import ProjectSpace from './components/ProjectSpace';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './App.css';
import UserState, { userState } from './contexts/UserState';

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

const NavBar: React.FC = () => {
  return (
    <Grid container spacing={0} id="navbar">
      <Grid item xs={2} id="navcolor">
        <Logo />
      </Grid>
      <Grid item xs={8} id="navcolor">
      </Grid>
      <Grid item xs={2} id="navcolor">
      <userState.Consumer>{({ isLoggedIn, toggleLogin }) => {
        if (isLoggedIn){
          return
        }
        return <LoginButton />}}
      </userState.Consumer>
      </Grid>
      <Grid item xs={12}>
        <SearchBar />
      </Grid>
      <CourseFilter />
    </Grid>
  )
}

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <UserState>
      <div className={classes.root} id="App">
        <NavBar />
        <ProjectSpace />
      </div>
    </UserState>
  );
}

export default App;