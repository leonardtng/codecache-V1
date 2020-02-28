import React, { createContext, useState } from 'react';
import accountsList from '../data/accountsList';

export const userState = createContext(
  {
    id: 0,
    isLoggedIn: false,
    toggleLogin: () => { },
    username: '',
    displayName: '',
    setDisplayName: (newDisplayName: string) => { },
    description: '',
    setDescription: (newDescription: string) => { },
    profileImage: '',
    totalCommits: 0,
    totalViews: 0,
    totalLikes: 0,
  }
);

const UserState: React.FC = (props) => {
  const defaultAccount = accountsList[0]; //Get from github when user login

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const toggleLogin = () => { isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true); };

  const id = defaultAccount.id
  const username = defaultAccount.username; //Get from github

  const [displayName, setDisplayName] = useState<string>(username);
  const changeDisplayName = (newDisplayName: string) => { setDisplayName(newDisplayName) };

  const [description, setDescription] = useState<string>(
    defaultAccount.description
  ); //Get from github?
  const changeDescription = (newDescription: string) => { setDescription(newDescription) };

  const profileImage = defaultAccount.img
  const totalCommits = defaultAccount.commits;
  const totalViews = defaultAccount.views;
  const totalLikes = defaultAccount.likes;

  return (
    <userState.Provider
      value={{
        isLoggedIn: isLoggedIn,
        toggleLogin: toggleLogin,
        id: id,
        username: username,
        displayName: displayName,
        setDisplayName: changeDisplayName,
        description: description,
        setDescription: changeDescription,
        profileImage: profileImage,
        totalCommits: totalCommits,
        totalViews: totalViews,
        totalLikes: totalLikes,
      }}
    >
      {props.children}
    </userState.Provider>
  )
}

export default UserState;