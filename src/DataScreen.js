import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../node_modules/react-vis/dist/style.css';
import {VisNetwork, Network, Node, Edge } from 'react-vis-network';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class DataScreen extends Component {
  /**
   * This screen displays the network of notes and allows selection of a note to be displayed in the NoteScreen
   */
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {items:this.props.items};
    this.network = <div className="datascreen-content"><VisNetwork>{this.state.items}</VisNetwork></div>;
  } 
  
  static getDerivedStateFromProps(props, state) {
    /*
    * Might help propogate state change down to child from parent
    */
    if (props.items !== state.items) {
      return {
        items:props.items
      };
    }
    return null;
  }
  
  render() {
    /**
     * Renders the component
     */
    return (
      <div className="datascreen">
        <div>
          <p>HELLO</p>
        </div>
        {this.network}
      </div>
    );
  }
}

DataScreen.propTypes = {
  items: PropTypes.arrayOf(PropTypes.oneOfType([Node,Edge]))
}
