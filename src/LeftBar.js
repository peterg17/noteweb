import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/react-vis/dist/style.css';
import { Network, Node, Edge } from 'react-vis-network';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class LeftBar extends Component {
  // Content on left side of screen
  constructor(props) {
    super(props);
    this.state = {input:"", nodes: this.props.state.nodes};
  }
  
  handleInput(input){
    console.log(input);
    this.setState(state => ({input:input}))
  }
  
  render() {
    /**
     * Renders the component
     */
    return (
      <div className="leftbar">
        <div width="100%" height="100%">
          <h3>New Note</h3>
          <p> Title: </p>
          <input name="noteTitle" className="input-title" onChange={(e) => this.handleInput(e.target.value)}/>
          <button name="addNote" className="input-button" onClick={() => this.props.addNote(this.state.input)}>Add Note</button>
          {this.state.nodes.map((value, index) => {
            return (
              <div class="leftbar-item" width="100%" key={index} onClick={() => this.props.getNote(value.props.id)}>
                <p>{value.props.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
