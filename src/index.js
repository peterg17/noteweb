import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';
import { Network, Node, Edge } from 'react-vis-network';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class NoteWeb extends React.Component {
  // This is the main container for all content
  constructor(props) {
    super(props);
    this.state = {title: "Title", note: "This is where your note is displayed"};
    const Decorator = props => {
      return (
        <button
          onClick={() => this.setNote(props.label,props.content)}
        >
          Click Me
        </button>
      );
    };
    this.nodes = [
      <Node id="vader" label="Darth Vader" decorator={Decorator} content="This is the Dark Lord of the Sith"/>,
      <Node id="luke" label="Luke Skywalker" decorator={Decorator} content="This is the Galaxy's only hope"/>,
      <Node id="leia" label="Leia Organa" decorator={Decorator} content="This is the girl who is always counted out but comes up big"/>,
      <Node id="han" label="Han Solo" decorator={Decorator} content="What is this amateur hour"/>,
      <Node id="chewy" label="Chewbacca" decorator={Decorator} content="Ahhhhhhhhhhhhh"/>,
      <Node id="obi" label="Obi-Wan Kenobi" decorator={Decorator} content="This is the old master who has a chance at redemption"/>
    ];
    this.edges = [
      <Edge id="1" from="vader" to="luke" />,
      <Edge id="2" from="vader" to="leia" />,
      <Edge id="3" from="han" to="leia" />,
      <Edge id="4" from="han" to="chewy" />,
      <Edge id="5" from="obi" to="luke" />,
      <Edge id="6" from="leia" to="luke" />,
      <Edge id="7" from="vader" to="obi" />
    ];
    this.top = <TopBar />;
    this.left = <LeftBar />;
    this.data = <DataScreen nodes={this.nodes} edges={this.edges} />;
    this.note = <NoteScreen title={this.state.title} note={this.state.note}/>;
  }
  
  setNote(title,note){
    console.log("set state")
    this.setState({title: title, note: note})
  }
  
  render() {
    return (
      <div className="noteweb">
        {this.top}
        <div className="container">
          {this.left}
          <div className="main-content">
            {this.data}
            {this.note}
          </div>
        </div>
      </div>
    );
  }
}

class TopBar extends React.Component {
  // This is the header of the application
  render() {
    return (
      <div>
        <div className="container">
          <div className="topbar">
            <h1>Noteweb v0.0</h1>
          </div>
          <div className="account">
          </div>
        </div>
      </div>
    );
  }
}

class LeftBar extends React.Component {
  // Content on left side of screen
  render() {
    return (
      <div className="leftbar">
        <p>Some leftbar stuff</p>
      </div>
    );
  }
}

class DataScreen extends React.Component {
  //The notes graph display
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    
    this.items = this.props.nodes.concat(this.props.edges);
    this.network = <div className="datascreen"><Network>{this.items}</Network></div>;
  } 
  
  setNetwork() {
    this.network = <div className="datascreen"><Network></Network></div>;
  }
  
  render() {
    return (
      this.network
    );
  }
}

class NoteScreen extends React.Component {
  // the note content display
  render() {
    return(
      <div className="notescreen">
        {/* <p>Some main datascreen stuff</p> */}
        <container width="100%" height="100%">
          <h3> {this.props.title} </h3>
          <p> {this.props.note} </p>
        </container>
      </div>
    );
  }
  
}

// ========================================

ReactDOM.render(
  <NoteWeb />,
  document.getElementById('root')
);
