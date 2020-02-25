import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
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
    translate: {
      transform: 'translate(0, 8vh)',
    },
  }),
);

const ProfilePage: React.FC = () => {
  const classes = useStyles();

  const [currentSearch, setCurrentSearch] = useState('');
  const changeCurrentSearch = (search: string) => {
    setCurrentSearch(search);
  }

  return (
    <div className={classes.root}>
      <NavBar currentSearch={currentSearch} changeCurrentSearch={changeCurrentSearch} />
      <div className={classes.translate}>
        <userState.Consumer>{({ username, displayName, setDisplayName, description, setDescription }) => {
          return <ProfileProjectSpace currentSearch={currentSearch} username={username} displayName={displayName} setDisplayName={setDisplayName} description={description} setDescription={setDescription} />
        }}
        </userState.Consumer>
        <Footer />
      </div >
    </div>
  );
}

export default ProfilePage;
