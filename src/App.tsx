import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ProjectSpace from './components/ProjectSpace';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: 'center',
    },
  }),
);

const App: React.FC = () => {
  const classes = useStyles();

  const [currentSearch, setCurrentSearch] = useState('');
  const changeCurrentSearch = (search: string) => {
    setCurrentSearch(search);
  }

  return (
    <div className={classes.root}>
      <NavBar handleSearch={changeCurrentSearch}/>
      <ProjectSpace currentSearch={currentSearch}/>
      <Footer />
    </div>
  );
}

export default App;