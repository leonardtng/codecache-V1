import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import ProfilePage from "./pages/ProfilePage";
import ProjectPage from './pages/ProjectPage';
import UserState from './contexts/UserState';
import CurrentProjectView, { currentProjectView } from './contexts/CurrentProjectView';
import projectList from './data/projectList';

const handlePath = (projectid: number) => {
  const path = '/'+ projectList[projectid].id + '/' + projectList[projectid].name;
  return path
}

const App: React.FC = () => {
  return (
    <UserState>
      <Router>
        <CurrentProjectView>
          <currentProjectView.Consumer>{({ projectid, toggleProjectid }) => {
            return <Switch>
              <Route path={handlePath(projectid)} component={ProjectPage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/" component={Main} />
            </Switch>
          }}
          </currentProjectView.Consumer>
        </CurrentProjectView>
      </Router>
    </UserState>
  );
}

export default App;