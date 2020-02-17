import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import ProfilePage from "./pages/ProfilePage";
import UserState from './contexts/UserState';

const App: React.FC = () => {
  return (
    <UserState>
      <Router>
        <Switch>
          <Route path="/profile" component={ProfilePage} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </UserState>
  );
}

export default App;