import React from 'react';
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
  }),
);

interface Props {
  currentSearch: string;
  changeCurrentSearch: (search: string) => void;
}

const NavBar: React.FC<Props> = ({ currentSearch, changeCurrentSearch }) => {
  const classes = useStyles();

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
        <FilterButton />
      </Grid>
      <Grid item xs={4} className={classes.navcolor}>
      </Grid>
      <HeaderIcons />
    </Grid>
  );
}

export default NavBar