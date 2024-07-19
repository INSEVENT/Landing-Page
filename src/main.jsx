import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
    <GoogleOAuthProvider clientId='583131874063-d6k4b6adc6l9flpq3snv8gds0s1n7j0h.apps.googleusercontent.com'>
      <AuthProvider>
        <App />
      </AuthProvider>
    </GoogleOAuthProvider>
    </React.StrictMode>
  </BrowserRouter>
);
