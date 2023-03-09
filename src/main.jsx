import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import LoadingManager from './utils/LoadingManager';
import WriteManager from './utils/WriteManager';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <LoadingManager>
        <WriteManager>
          <App />
        </WriteManager>
      </LoadingManager>
    </Router>
  </React.StrictMode>
);
