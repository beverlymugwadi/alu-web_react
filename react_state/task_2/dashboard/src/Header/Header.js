import React from 'react';
import AppContext from '../App/AppContext';
import './Header.css';

class Header extends React.Component {
  render() {
    const { user, logOut } = this.context;
    const { email, isLoggedIn } = user;

    return (
      <>
        <header className="App-header">
          <img src="/logo192.png" className="App-logo" alt="logo" />
          <h1>School Dashboard</h1>
        </header>
        {isLoggedIn && (
          <p id="logoutSection">
            Welcome <strong>{email}</strong> (
            <a href="#logout" onClick={logOut}>
              Log out
            </a>)
          </p>
        )}
      </>
    );
  }
}

Header.contextType = AppContext;

export default Header;
