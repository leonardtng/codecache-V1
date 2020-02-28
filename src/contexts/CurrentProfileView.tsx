import React, { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const currentProfileView = createContext(
  { profileid: 0,
    toggleProfileid: (id: number) => {},
  } 
);

const CurrentProfileView: React.FC = (props) => {
  const location = useLocation();
  
  const ref = Number(location.pathname.split('/').slice(-1)[0]);

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