import React, { createContext, useState } from 'react';

export const userState = createContext({ isLoggedIn: false, toggleLogin: () => {} });

const UserState: React.FC = (props) => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let toggleLogin = () => { isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true); };

  return (
    <userState.Provider value={{ isLoggedIn: isLoggedIn, toggleLogin: toggleLogin }}>
      {props.children}
    </userState.Provider>
  )
}

export default UserState;