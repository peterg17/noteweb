import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/react-vis/dist/style.css';
import { Network, Node, Edge } from 'react-vis-network';
import NoteWeb from './NoteWeb.js'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// ========================================

ReactDOM.render(
  <NoteWeb key="main-app"/>,
  document.getElementById('root')
);
