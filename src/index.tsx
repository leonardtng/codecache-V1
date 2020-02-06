import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import * as serviceWorker from './serviceWorker';
import UserLoggedIn from './pages/UserLoggedIn';
import UserState from './contexts/UserState';

ReactDOM.render(
  <UserState>
    <Router>
      <Switch>
        <Route path="/login" component={UserLoggedIn} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </UserState>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
