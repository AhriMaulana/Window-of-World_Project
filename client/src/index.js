import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserContextProvider } from "./contex/userContext";
import { Router } from 'react-router-dom';
import reportWebVitals from "./reportWebVitals";



ReactDOM.render(
  <React.StrictMode>
    
    <UserContextProvider>
        <App />
    </UserContextProvider>  
    
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();