import React from 'react';
import ReactDOM from 'react-dom';
import '/style.css';
import Main from './Main'; // Import your SearchBar component

ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);
