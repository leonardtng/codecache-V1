import React from 'react';
import ProjectSpace from './components/ProjectSpace';
import NavBar from './components/NavBar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import UserState from './contexts/UserState';
import './App.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

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