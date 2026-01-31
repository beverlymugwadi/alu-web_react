import React from 'react';
import AppContext from '../App/AppContext';
import './Footer.css';

function Footer() {
  return (
    <AppContext.Consumer>
      {value => (
        <footer className="App-footer">
          <p>Copyright - Holberton School</p>
          {value && value.user && value.user.isLoggedIn && (
            <p>
              <a href="#contact">Contact us</a>
            </p>
          )}
        </footer>
      )}
    </AppContext.Consumer>
  );
}

export default Footer;
