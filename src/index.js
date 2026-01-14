import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Auth0Provider
    domain={ process.env.REACT_APP_AUTH0_DOMAIN }
    clientId={ process.env.REACT_APP_AUTH0_CLIENTID }
    authorizationParams={{
      redirect_uri: window.location.origin // NOTE: We NEED to make sure this is wherever the login is supposed to direct to
    }}
    cacheLocation="localstorage"  // <- store tokens in localStorage
    useRefreshTokens={true}      // <- automatically refresh tokens
  >
    <App />
  </Auth0Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
