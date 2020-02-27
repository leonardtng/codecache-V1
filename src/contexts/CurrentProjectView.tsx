import React, { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const currentProjectView = createContext(
  { projectid: 0,
    toggleProjectid: (id: number) => {},
  } 
);

const CurrentProjectView: React.FC = (props) => {
  const location = useLocation();
  
  const ref = Number(location.pathname.split('/').slice(-2)[0]);

  const [projectid, setProjectid] = useState<number>(ref);
  const toggleProjectid = (id: number) => { 
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