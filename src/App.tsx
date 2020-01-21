import React from 'react';
import logo from './images/codecacheLogo.png';
import LoginButton from './components/LoginButton';
import ProjectSpace from './components/ProjectSpace';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Logo: React.FC = () => {
  return(
    <div className="col-md-2">
      <img src={logo} alt="codecache"/>
    </div>
  )
}

const SearchBar: React.FC = () => {
  return(
    <div className="col-md-8">
      <form className="form-inline">
        <input className="form-control mr-sm-2 col-md" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  )
}

const NavBar: React.FC = () => {
  return (
    <header>
      <nav className="navbar row">
        <Logo />
        <SearchBar />
        <LoginButton />
      </nav>
    </header>
  )
}

const App: React.FC = () => {
  return (
    <div className="App">     
      <div className="container-fluid">
        <NavBar />
        <ProjectSpace />
      </div>
    </div>
  );
}

export default App;
