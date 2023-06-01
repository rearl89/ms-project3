import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EntriesContextProvider } from './context/EntryContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EntriesContextProvider>
      <App />
    </EntriesContextProvider>
  </React.StrictMode>
);

