import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ProjectSpace from '../components/ProjectSpace';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: 'center',
    },
    translate: {
      transform: 'translate(0, 22vh)',
    },
  }),
);

const Main: React.FC = () => {
  const classes = useStyles();

  const [currentSearch, setCurrentSearch] = useState('');
  const changeCurrentSearch = (search: string) => {
    setCurrentSearch(search);
  }

  return (
    <div className={classes.root}>
      <NavBar currentSearch={currentSearch} changeCurrentSearch={changeCurrentSearch} />
      <div className={classes.translate}>
        <ProjectSpace currentSearch={currentSearch} />
        <Footer />
      </div>
    </div>
  );
}

export default Main