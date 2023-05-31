import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EntriesContext } from './context/EntriesContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EntriesContext.Provider>
      <App />
    </EntriesContext.Provider>
  </React.StrictMode>
);

