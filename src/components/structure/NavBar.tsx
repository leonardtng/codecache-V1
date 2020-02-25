import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Logo from '../navigation/Logo';
import SearchBar from '../navigation/SearchBar';
import HeaderIcons from '../navigation/HeaderIcons';
import FilterButton from '../navigation/FilterButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navbar: {
      position: 'fixed',
      width: '100%',
      backgroundColor: '#ffffff',
      zIndex: 1,
    },
    navcolor: {
      backgroundColor: '#333333',
    },
    divider: {
      borderLeft: '2px solid #707070',
      height: '60%',
      margin: '10px',
      float: 'left',
    },
    filterSection: {
      position: 'relative',
      zIndex: -2,
    },
  }),
);

interface Props {
  currentSearch: string;
  changeCurrentSearch: (search: string) => void;
  filterOpen: boolean;
  handleFilterOpen: () => void;
}

const NavBar: React.FC<Props> = ({ currentSearch, changeCurrentSearch, filterOpen, handleFilterOpen }) => {
  const classes = useStyles();

  const [navFilterHeight, setNavFilterHeight] = useState(0);

  const handleNavFilterOpen = () => {
    filterOpen ? setNavFilterHeight(0) : setNavFilterHeight(60);
  }

  return (
    <Grid container spacing={0} className={classes.navbar}>
      <Grid item xs={1} className={classes.navcolor}>
        <Logo />
      </Grid>
      <Grid item xs={3} className={classes.navcolor}>
        <div className={classes.divider} />
        <SearchBar currentSearch={currentSearch} changeCurrentSearch={changeCurrentSearch} />
      </Grid>
      <Grid item xs={1} className={classes.navcolor}>
        <FilterButton handleFilterOpen={handleFilterOpen} handleNavFilterOpen={handleNavFilterOpen} />
      </Grid>
      <Grid item xs={4} className={classes.navcolor}>
      </Grid>
      <HeaderIcons />
      <Grid container spacing={0} className={classes.filterSection} style={{ height: navFilterHeight }}></Grid>
    </Grid>
  );
}

export default NavBar