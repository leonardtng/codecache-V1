import React, { createContext, useState } from 'react';

export const userState = createContext(
  { isLoggedIn: false,
    toggleLogin: () => {},
    username: '', 
    displayName: '', 
    setDisplayName: (newDisplayName: string) => {}, 
    description: '', 
    setDescription: (newDescription: string) => {},
  } 
);

const UserState: React.FC = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const toggleLogin = () => { isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true); };

  const username = 'serenetay'; //Get from github

  const [displayName, setDisplayName] = useState<string>(username);
  const changeDisplayName = (newDisplayName: string) => { setDisplayName(newDisplayName) };

  const [description, setDescription] = useState<string>(
    'Currently working in a fintech company and learning about IT. I can code in Python, Javascript, PHP, C++, C#, HTML, CSS. Looking for part-time opportunities for me to practice my skills.'
    ); //Get from github?
  const changeDescription = (newDescription: string) => { setDescription(newDescription) };

  return (
    <userState.Provider 
    value={{ 
     isLoggedIn: isLoggedIn,
     toggleLogin: toggleLogin,
     username: username, 
     displayName: displayName, 
     setDisplayName: changeDisplayName, 
     description: description, 
     setDescription: changeDescription }}
    >
      {props.children}
    </userState.Provider>
  )
}

export default UserState;