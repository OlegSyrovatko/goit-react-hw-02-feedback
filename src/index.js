import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App initialGood = {0} initialNeutral = {0} initialBad = {0} />
  </React.StrictMode>
);
