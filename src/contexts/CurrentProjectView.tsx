import React, { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const currentProjectView = createContext(
  {
    navProject: false,
    handleSetNavProject: (boolean: boolean) => { },
    projectid: 0,
    toggleProjectid: (id: number) => { },
  }
);

const CurrentProjectView: React.FC = (props) => {
  const [navProject, setNavProject] = useState<boolean>(false);
  const handleSetNavProject = (boolean: boolean) => {
    setNavProject(boolean);
  }

  const location = useLocation();

  const ref = Number(location.pathname.split('/').slice(-2)[0]);

  const [projectid, setProjectid] = useState<number>(ref);
  const toggleProjectid = (id: number) => {
    setProjectid(id);
  };

  return (
    <currentProjectView.Provider
      value={{
        navProject: navProject,
        handleSetNavProject: handleSetNavProject,
        projectid: projectid,
        toggleProjectid: toggleProjectid,
      }}
    >
      {props.children}
    </currentProjectView.Provider>
  )
}

export default CurrentProjectView;