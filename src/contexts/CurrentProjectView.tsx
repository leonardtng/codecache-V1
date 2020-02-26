import React, { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const currentProjectView = createContext(
  { projectid: 0,
    toggleProjectid: (id: number) => {},
  } 
);

const CurrentProjectView: React.FC = (props) => {
  let location = useLocation();

  const ref = Number(location.pathname.split('/').slice(-2)[0]);

  let [projectid, setProjectid] = useState(ref);
  let toggleProjectid = (id: number) => { 
      setProjectid(id);
   };

  return (
    <currentProjectView.Provider 
    value={{ 
        projectid: projectid,
        toggleProjectid: toggleProjectid,
      }}
    >
      {props.children}
    </currentProjectView.Provider>
  )
}

export default CurrentProjectView;