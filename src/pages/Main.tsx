import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProjectSpace from '../components/projects/ProjectSpace';
import NavBar from '../components/structure/NavBar';
import Footer from '../components/structure/Footer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: 'center',
    },
    filterSection: {
      position: 'relative',
    },
  }),
);

const Main: React.FC = () => {
  const classes = useStyles();

  const [currentSearch, setCurrentSearch] = useState('');
  const changeCurrentSearch = (search: string) => {
    setCurrentSearch(search);
  }

  const [height, setHeight] = useState(40);
  const [filterOpen, setFilterOpen] = useState(false);

  const handleFilterOpen = () => {
    setFilterOpen(prev => !prev);
    filterOpen ? setHeight(40) : setHeight(100);
  }


  return (
    <div className={classes.root}>
      <NavBar currentSearch={currentSearch} changeCurrentSearch={changeCurrentSearch} filterOpen={filterOpen} handleFilterOpen={handleFilterOpen} />
      <Grid container spacing={0} className={classes.filterSection} style={{ height: height }}></Grid>
      <ProjectSpace currentSearch={currentSearch} />
      <Footer />
    </div>
  );
}

export default Main