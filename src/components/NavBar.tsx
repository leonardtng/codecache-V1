import React from 'react';
import logo from '../images/Codecache.svg';
import SearchBar from './SearchBar';
import CourseFilter from './CourseFilter';
import LoginButton from './LoginButton';
import ProfileButton from './ProfileButton';
import MenuButton from './MenuButton';
import Grid from '@material-ui/core/Grid';
import { userState } from '../contexts/UserState';
import '../css/NavBar.css';

const Logo: React.FC = () => {
  return (
    <img src={logo} alt="codecache" />
  )
}

const NavBar: React.FC = () => {
  return (
    <Grid container spacing={0} id="navbar">
      <Grid item xs={2} id="nav-color">
        <Logo />
      </Grid>
      <Grid item xs={8} id="nav-color">
      </Grid>
      <Grid item xs={2} id="nav-color">
        <userState.Consumer>{({ isLoggedIn, toggleLogin }) => {
          if (isLoggedIn) {
            return <span id="icon-group">
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