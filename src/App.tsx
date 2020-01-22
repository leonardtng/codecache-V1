import React from 'react';
import logo from './images/codecacheLogo.png';
import SearchBar from './components/SearchBar';
import LoginButton from './components/LoginButton';
import ProjectSpace from './components/ProjectSpace';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './App.css';

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

// const NavBar: React.FC = () => {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <Grid container spacing={0} className="navbar">
//         <Grid item xs={2}>
//           <Logo />
//         </Grid>
//         <Grid item xs={8}>
//         </Grid>
//         <Grid item xs={2}>
//           <LoginButton />
//         </Grid>
//         <Grid item xs={12}>
//           <SearchBar />
//         </Grid>
//       </Grid>
//     </div>
//   )
// }

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="App">
      <Grid container spacing={0} id="navbar">
        <Grid item xs={2}>
          <Logo />
        </Grid>
        <Grid item xs={8}>
        </Grid>
        <Grid item xs={2}>
          <LoginButton />
        </Grid>
        <Grid item xs={12}>
          <SearchBar />
        </Grid>
      </Grid>
      <ProjectSpace />
    </div>
  );
}

export default App;