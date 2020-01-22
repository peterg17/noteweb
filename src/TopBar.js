import React, { Component } from 'react';
import '../node_modules/react-vis/dist/style.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default class TopBar extends Component {
  /**
   * This is the header of the application. displays name of application. later will be used to access login and account.
   */
  render() {
    /**
     * Renders the component
     */
    return (
      <div className="topbar">
        <div className="topbar-content">
          <h3>NoteWeb Version 0.0</h3>
          <FontAwesomeIcon icon="faCoffee" />
        </div>
        <div className="blank-space">
        </div>
        <div className="account">
          <h3 className="account-content">log in</h3>
        </div>
      </div>
    );
  }
}
