import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from './utils/common';
import Main from "./pages/Main";
import ProfilePage from "./pages/ProfilePage";
import ProjectPage from './pages/ProjectPage';
import UserState from './contexts/UserState';
import CurrentProjectView, { currentProjectView } from './contexts/CurrentProjectView';
import CurrentProfileView, { currentProfileView } from './contexts/CurrentProfileView';
import projectList from './data/projectList';
import accountsList from './data/accountsList';

const App: React.FC = () => {

  const handleProjectPath = (projectid: number) => {
    const path = '/' + projectList[projectid].id + '/' + projectList[projectid].name;
    return path
  };

  const handleProfilePath = (profileid: number) => {
    const path = '/' + accountsList[profileid].username;
    return path
  }

  return (
    <UserState>
      <Router>
        <ScrollToTop />
        <CurrentProfileView>
          <CurrentProjectView>
            <currentProjectView.Consumer>{(projectContext) => {
              return <currentProfileView.Consumer>{(profileContext) => {
                return <Switch>
                  <Route path={handleProjectPath(projectContext.projectid)} component={ProjectPage} />
                  <Route path={handleProfilePath(profileContext.profileid)} component={ProfilePage} />
                  <Route path="/" component={Main} />
                </Switch>
              }}
              </currentProfileView.Consumer>
            }}
            </currentProjectView.Consumer>
          </CurrentProjectView>
        </CurrentProfileView>
      </Router>
    </UserState>
  );
}

export default App;