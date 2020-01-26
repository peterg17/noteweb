import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/react-vis/dist/style.css';
import NoteWeb from './NoteWeb.js'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// ========================================

ReactDOM.render(
  <NoteWeb key="main-app"/>,
  document.getElementById('root')
);
