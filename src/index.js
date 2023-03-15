import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Background } from 'components/Background/Background';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Background />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// basename = '/goit-react-hw-05-movies/';
