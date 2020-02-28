import React, { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import accountsList from '../data/accountsList';

export const currentProfileView = createContext(
  {
    profileid: 0,
    toggleProfileid: (id: number) => { },
  }
);

const CurrentProfileView: React.FC = (props) => {
  const location = useLocation();

  const getid = () => {
    for (let account of accountsList) {
      if (account.username === location.pathname.split('/')[1]) {
        return account.id
      } else {
        continue
      }
    }
    return 0
  }

  const ref = getid();

  const [profileid, setProfileid] = useState<number>(ref);
  const toggleProfileid = (id: number) => {
    setProfileid(id);
  };

  return (
    <currentProfileView.Provider
      value={{
        profileid: profileid,
        toggleProfileid: toggleProfileid,
      }}
    >
      {props.children}
    </currentProfileView.Provider>
  )
}

export default CurrentProfileView;