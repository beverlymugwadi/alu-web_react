import './App/App.css';
import App from './App/App';
import Notifications from './Notifications/Notifications';

function mountApp() {
  const root = document.getElementById('root');
  // render App main layout
  const appContainer = document.createElement('div');
  appContainer.id = 'app-root';
  root.appendChild(appContainer);
  // Use simple client-side rendering by injecting HTML from App component
  // (This is a lightweight approach for the webpack demo)
  appContainer.innerHTML = '<div id="app"></div>';
  // Manually mount React-like components: insert App markup
  const appDiv = document.getElementById('app');
  if (appDiv) {
    appDiv.innerHTML = '';
    // create a placeholder that mimics App's structure
    appDiv.innerHTML = `
      <div class="App">
        <header class="App-header">
          <img src="/images/065324a4061ddbd97aec.png" class="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </header>
        <div class="App-body"><p>Login to access the full dashboard</p></div>
        <footer class="App-footer"><p>Copyright 2020 - Holberton School</p></footer>
      </div>
    `;
  }

  // append Notifications markup
  const notifications = document.createElement('div');
  notifications.innerHTML = `
    <div class="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li><strong>Urgent requirement</strong> - complete by EOD</li>
      </ul>
    </div>
  `;
  root.appendChild(notifications);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
