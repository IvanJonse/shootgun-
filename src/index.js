import reportWebVitals from './reportWebVitals';
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWrap from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render (
      <React.StrictMode>
       
          <AppWrap/>
       
      </React.StrictMode>
    );

reportWebVitals();