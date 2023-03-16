import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import LoadingManager from './utils/LoadingManager';
import WriteManager from './utils/WriteManager';
import { IconContext } from 'react-icons';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <LoadingManager>
          <WriteManager>
            <App />
          </WriteManager>
        </LoadingManager>
      </IconContext.Provider>
    </Router>
  </React.StrictMode>
);
