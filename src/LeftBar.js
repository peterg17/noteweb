import React, { Component } from 'react';
import '../node_modules/react-vis/dist/style.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class LeftBar extends Component {
  // Content on left side of screen
  constructor(props) {
    super(props);
    this.state = {title:"", note:"", nodes: this.props.state.nodes};
  }
  
  handleTitle(title){
    console.log(title);
    let stateCopy = Object.assign({}, this.state);
    this.setState(state => ({title:title, note:stateCopy.note}));
  }
  
  handleNote(note){
    console.log(note);
    let stateCopy = Object.assign({}, this.state);
    this.setState(state => ({note:note, title:stateCopy.title}));
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
          <input name="noteTitle" className="input-title" onChange={(e) => this.handleTitle(e.target.value)}/>
          <p> Note: </p>
          <textarea name="noteContent" className="input-title" onChange={(e) => this.handleNote(e.target.value)}/>
          <button name="addNote" className="input-button" onClick={() => this.props.addNote(this.state.title,this.state.note)}>Add Note</button>
          {this.state.nodes.map((value, index) => {
            return (
              <div className="leftbar-item" width="100%" key={index} onClick={() => this.props.getNote(value.id)}>
                <p>{value.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
