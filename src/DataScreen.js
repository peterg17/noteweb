import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/react-vis/dist/style.css';
import { Network, Node, Edge } from 'react-vis-network';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class DataScreen extends Component {
  /**
   * This screen displays the network of notes and allows selection of a note to be displayed in the NoteScreen
   */
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {items:this.props.state.items};
    this.network = <div className="datascreen-content"><Network>{this.state.items}</Network></div>;
  } 
  
  componentWillReceiveProps(nextProps) {
    /*
    * Might help propogate state change down to child from parent
    */
    console.log("1")
    console.log(nextProps);
    console.log("2")
    console.log(nextProps.state.items);
    this.setState({ items: nextProps.state.items});
    console.log("3")
    console.log(this.state);
    console.log(this.network);
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
