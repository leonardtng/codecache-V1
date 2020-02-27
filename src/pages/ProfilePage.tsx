import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/structure/NavBar';
import ProfileProjectSpace from '../components/profile/ProfileProjectSpace';
import { userState } from '../contexts/UserState';
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

const ProfilePage: React.FC = () => {
  const classes = useStyles();

  const [currentSearch, setCurrentSearch] = useState<string>('');
  const changeCurrentSearch = (search: string) => {
    setCurrentSearch(search);
  }
  

  const [currentFilter, setCurrentFilter] = useState<Array<string>>([]);
  const newFilter: Array<string> = [];
  const changeCurrentFilter = (filter: string) => {
    if (filter === '') {
      setCurrentFilter([]);
    } else {
      newFilter.push(filter);
      setCurrentFilter(newFilter);
    }
  }

  const [currentSort, setCurrentSort] = useState<string>('Popular');
  const changeCurrentSort = (sort: string) => {
    setCurrentSort(sort);
  }

  const [height, setHeight] = useState<number>(40);
  const [filterOpen, setFilterOpen] = useState<boolean>(false);

  const handleFilterOpen = () => {
    setFilterOpen(prev => !prev);
    filterOpen ? setHeight(40) : setHeight(100);
  }

  return (
    <div className={classes.root}>
      <NavBar
        currentSearch={currentSearch}
        changeCurrentSearch={changeCurrentSearch}
        currentFilter={currentFilter}
        changeCurrentFilter={changeCurrentFilter}
        currentSort={currentSort}
        changeCurrentSort={changeCurrentSort}
        filterOpen={filterOpen}
        handleFilterOpen={handleFilterOpen}
      />
      <Grid container spacing={0} className={classes.filterSection} style={{ height: height }}></Grid>
      <userState.Consumer>{({ username, displayName, setDisplayName, description, setDescription }) => {
        return <ProfileProjectSpace
          currentSearch={currentSearch}
          currentFilter={currentFilter}
          username={username}
          displayName={displayName}
          setDisplayName={setDisplayName}
          description={description}
          setDescription={setDescription}
        />
      }}
      </userState.Consumer>
      <Footer />
    </div >
  );
}

export default ProfilePage;
