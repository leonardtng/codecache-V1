import React from 'react';
import logo from './images/codecacheLogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Logo: React.FC = () => {
  return(
    <div className="col-md-2">
      <img src={logo} alt="codecache"/>
    </div>
  )
}

const Login: React.FC = () => {
  return (
    <div className="col-md-2">
      <button type="button" className="btn btn-info">Login/Signup</button>
    </div>
  )
}

const SearchBar: React.FC = () => {
  return (
    <header>
      <nav className="navbar bg-navbar row">
        <Logo />
        <div className="col-md-8">
          <form className="form-inline">
            <input className="form-control mr-sm-2 col-md" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary my-2 my-sm-0 ntublue" type="submit">Search</button>
          </form>
        </div>
        <Login />
      </nav>
    </header>
  )
}


const App: React.FC = () => {
  return (
    <div className="App">
      <SearchBar />
      <div id="box">
        <div id="items">
          <a href="./home.html"><div className="item">Home</div></a>
          <a href="./index.html"><div className="item">Logout</div></a>
        </div>
      </div>
    </div>
  );
}

export default App;
