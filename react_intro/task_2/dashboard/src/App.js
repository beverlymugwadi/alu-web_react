import React from 'react';
import logo from './assets/holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="Holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <div className="login-form">
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" />

          <label htmlFor="password">Password:</label>
          <input id="password" type="password" name="password" />

          <button>OK</button>
        </div>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
