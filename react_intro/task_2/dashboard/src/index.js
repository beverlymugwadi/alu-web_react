import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const notifRoot = document.getElementById('root-notifications');
if (notifRoot) {
  const r = createRoot(notifRoot);
  r.render(
    <React.StrictMode>
      <Notifications />
    </React.StrictMode>
  );
}
