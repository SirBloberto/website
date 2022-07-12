import React from 'react';
import ReactDOM from 'react-dom/client';
import NavigationBar from './components/NavigationBar';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavigationBar/>
  </React.StrictMode>
);