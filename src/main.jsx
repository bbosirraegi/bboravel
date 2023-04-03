import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import LoadingManager from './utils/LoadingManager';
import WriteManager from './utils/WriteManager';
import { IconContext } from 'react-icons';
import 'moment/dist/locale/ko';
import SessionManager from 'utils/SessionManager';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <SessionManager>
          <LoadingManager>
            <WriteManager>
              <App />
            </WriteManager>
          </LoadingManager>
        </SessionManager>
      </IconContext.Provider>
    </Router>
  </React.StrictMode>
);
