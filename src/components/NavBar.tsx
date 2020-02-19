import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo';
import SearchBar from './SearchBar';
import HeaderIcons from './HeaderIcons';
import { Box } from '@material-ui/core';

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
        <Box borderRight={0}>
        <Logo />
        </Box>
      </Grid>
      <Grid item xs={2} className={classes.navcolor}>
        <SearchBar currentSearch={currentSearch} changeCurrentSearch={changeCurrentSearch} />
      </Grid>
      <Grid item xs={7} className={classes.navcolor}>
      </Grid>
      <HeaderIcons />
    </Grid>
  );
}

export default NavBar