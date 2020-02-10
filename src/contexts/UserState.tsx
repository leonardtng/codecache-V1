import React, { createContext, useState } from 'react';

export const userState = createContext(
  { isLoggedIn: false,
    toggleLogin: () => {},
    username: '', 
    name: '', 
    setName: (newName: string) => {}, 
    description: '', 
    setDescription: (newDescription: string) => {},
  } 
);

const UserState: React.FC = (props) => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let toggleLogin = () => { isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true); };

  let username = 'serenetay';

  let [name, setName] = useState(username);
  let changeName = (newName: string) => { setName(newName) };

  let [description, setDescription] = useState('Currently working in a fintech company and learning about IT. I can code in Python, Javascript, PHP, C++, C#, HTML, CSS. Looking for part-time opportunities for me to practice my skills.');
  let changeDescription = (newDescription: string) => { setDescription(newDescription) };

  return (
    <userState.Provider 
    value={{ 
     isLoggedIn: isLoggedIn,
     toggleLogin: toggleLogin,
     username: username, 
     name: name, 
     setName: changeName, 
     description: description, 
     setDescription: changeDescription }}
    >
      {props.children}
    </userState.Provider>
  )
}

export default UserState;