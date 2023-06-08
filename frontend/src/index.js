import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EntriesContextProvider } from './context/EntryContext';
import { AuthContextProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <EntriesContextProvider>
        <App />
      </EntriesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);