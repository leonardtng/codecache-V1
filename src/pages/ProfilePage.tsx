import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/structure/NavBar';
import ProfileProjectSpace from '../components/profile/ProfileProjectSpace';
import { userState } from '../contexts/UserState';
import Footer from '../components/structure/Footer';
import { currentProfileView } from '../contexts/CurrentProfileView';
import accountsList from '../data/accountsList';

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

  const [height, setHeight] = useState<number>(50);
  const [filterOpen, setFilterOpen] = useState<boolean>(false);

  const handleFilterOpen = () => {
    setFilterOpen(prev => !prev);
    filterOpen ? setHeight(50) : setHeight(100);
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
      <currentProfileView.Consumer>{({ profileid, toggleProfileid }) => {
        return <userState.Consumer>{({ id, username, displayName, setDisplayName, description, setDescription, profileImage, totalCommits, totalViews, totalLikes }) => {
          if (profileid === id) {
            return <ProfileProjectSpace
            currentSearch={currentSearch}
            currentFilter={currentFilter}
            currentSort={currentSort}
            username={username}
            displayName={displayName}
            setDisplayName={setDisplayName}
            description={description}
            setDescription={setDescription}
            profileImage={profileImage}
            totalCommits={totalCommits}
            totalViews={totalViews}
            totalLikes={totalLikes}
          />
          } else {
            const profile = accountsList[profileid];
            return <ProfileProjectSpace
            currentSearch={currentSearch}
            currentFilter={currentFilter}
            currentSort={currentSort}
            username={profile.username}
            displayName={profile.username}
            setDisplayName={setDisplayName}
            description={profile.description}
            setDescription={setDescription}
            profileImage={profile.img}
            totalCommits={profile.commits}
            totalViews={profile.views}
            totalLikes={profile.likes}
          />
          }
        }}
        </userState.Consumer>
      }}
      </currentProfileView.Consumer>
      <Footer />
    </div >
  );
}

export default ProfilePage;
