import React, { Component } from 'react';
import '../node_modules/react-vis/dist/style.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class LeftBar extends Component {
  // Content on left side of screen
  constructor(props) {
    super(props);
    this.state = {title:"", note:"", nodes: this.props.nodes};
    this.content = this.state.nodes.map((value, index) => {
      return (
        <div className="leftbar-item" width="100%" key={index} onClick={() => this.props.getNote(value.id)}>
          <p>{value.label}</p>
        </div>
      );
    })
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
  
  componentWillReceiveProps(nextProps) {
    console.log("got update!");
    console.log(nextProps.nodes)
    this.setState(state => ({nodes:nextProps.nodes}));
    this.content = nextProps.nodes.map((value, index) => {
      return (
        <div className="leftbar-item" width="100%" key={index} onClick={() => this.props.getNote(value.id)}>
          <p>{value.label}</p>
        </div>
      );
    });
  }
  
  render() {
    /**
     * Renders the component
     */
    return (
      <div className="leftbar">
        <div width="100%" height="100%">
          <button name="getNotes" className="input-button" onClick={() => this.props.fetchNotesAndEdges()}>Fetch Notes</button>
          <button name="addNote" className="input-button" onClick={() => this.props.addNote()}>Add Note</button>
          {this.content}
        </div>
      </div>
    );
  }
}
