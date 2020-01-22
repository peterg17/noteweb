import React, { Component } from 'react';
import '../node_modules/react-vis/dist/style.css';
import { Network, Node, Edge } from 'react-vis-network';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NoteScreen extends Component {
  /**
   * This screen displays and allows editing of the content of notes in the graph
   */
  constructor(props){
    super(props);
    // this.decorator = this.props.decorator;
    // this.handleChange = this.handleChange.bind(this);
    // // this.handleClick = this.handleClick.bind(this);
  }
  
  render() {
    /**
     * Renders the component
     */
    return(
      <div className="notescreen">
        {/* <p>Some main datascreen stuff</p> */}
        <div className="notescreen-content">
          <h3> {this.props.state.title} </h3>
          <textarea name="noteInput" value={this.props.state.note} onChange={(e) => this.props.setNote(e.target.value)} className="input-note"/>
        </div>
      </div>
    );
  }
  
}
