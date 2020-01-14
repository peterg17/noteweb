import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/react-vis/dist/style.css';
import { Network, Node, Edge } from 'react-vis-network';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class NoteWeb extends Component {
  /**
   * This is the main application. Creates a network of nodes for note taking, rather than a linear set of notes. 
   * Will use machine learning on back end to automatically link notes to each other
   */
  constructor(props) {
  /**
   * Constructor for Noteweb application. Initializes nodes and edges for graph. initializes the state. binds functions. 
   */
    super(props);
    this.state = {id: "None",  title: "Title", note: "This is where your note is displayed"};
    console.log(this.note)
    const Decorator = props => {
      return (
        <button
          onClick={() => this.getNote(props.id)}
        >
          Click Me
        </button>
      );
    };
    let nodes = [
      <Node id="vader" label="Darth Vader" decorator={Decorator} content="The chosen one. Brought balance to the force. Before me thousands of Jedi, only two Sith. After me, two Jedi and two Sith. That's what you call balanced."/>,
      <Node id="luke" label="Luke Skywalker" decorator={Decorator} content="This is the Galaxy's only hope"/>,
      <Node id="leia" label="Leia Organa" decorator={Decorator} content="This is the girl who is always counted out but comes up big"/>,
      <Node id="han" label="Han Solo" decorator={Decorator} content="What is this amateur hour"/>,
      <Node id="chewy" label="Chewbacca" decorator={Decorator} content="Ahhhhhhhhhhhhh"/>,
      <Node id="obi" label="Obi-Wan Kenobi" decorator={Decorator} content="Why did you try it Anakin? I had the high ground. And I've used that exact trick on Darth Maul which I must have told you about. Did you think I wouldn't see that shit coming? Come on young padawan."/>,
      <Node id="greedo" label="Greedo" decorator={Decorator} content="The green guy who was just too slow for Han Solo. Or was I innacurate? Did I shoot or not? Idk George Lucas keeps editing my only scene"/>,
      <Node id="yoda" label="Yoda" decorator={Decorator} content="That baby me am not. Look nothing like him, I did. More handsome I am."/>,
      <Node id="boba" label="Boba Fett" decorator={Decorator} content="Still being digested to this day in The Great Pit of Carkoon"/>,
      <Node id="jabba" label="Jabba The Hutt" decorator={Decorator} content="Me want solo on my wall"/>,
      <Node id="lando" label="Lando Calrissian" decorator={Decorator} content="I'm in it for the money, and the women, and the greater good, but definitely the money"/>,
      <Node id="emporer" label="Emporer Palpatine" decorator={Decorator} content="This is the Dark Lord of the Sith"/>
    ];
    let edges = [
      <Edge id="0" from="yoda" to="chewy" />,
      <Edge id="1" from="vader" to="luke" />,
      <Edge id="2" from="vader" to="leia" />,
      <Edge id="3" from="han" to="leia" />,
      <Edge id="4" from="han" to="chewy" />,
      <Edge id="5" from="obi" to="luke" />,
      <Edge id="6" from="leia" to="luke" />,
      <Edge id="7" from="vader" to="obi" />,
      <Edge id="8" from="obi" to="yoda" />,
      <Edge id="9" from="vader" to="yoda" />,
      <Edge id="10" from="jabba" to="han" />,
      <Edge id="11" from="jabba" to="boba" />,
      <Edge id="12" from="boba" to="han" />,
      <Edge id="13" from="han" to="greedo" />,
      <Edge id="14" from="jabba" to="greedo" />,
      <Edge id="15" from="yoda" to="luke" />,
      <Edge id="16" from="emporer" to="vader" />,
      <Edge id="17" from="emporer" to="luke" />,
      <Edge id="18" from="lando" to="han" />
    ];
    this.state = {id: "vader",  title: "Darth Vader", note: "The chosen one. Brought balance to the force. Before me thousands of Jedi, only two Sith. After me, two Jedi and two Sith. That's what you call balanced.", nodes: nodes, edges: edges};
    this.setNote = this.setNote.bind(this);
    this.getNote = this.getNote.bind(this);
    this.addNote = this.addNote.bind(this);
  }
  
  getNote(newId){
    /**
     * Retreives the contents of a note and displays the contents in the NoteScreen 
     */
    console.log("get")
    console.log(this.state);
    console.log(newId);
    let stateCopy = JSON.parse(JSON.stringify(this.state));
    console.log(stateCopy);
    let newNode = stateCopy.nodes.find(x => x.props.id === newId);
    console.log(newNode);
    this.setState(state => ({
        id:newNode.props.id,
        title: newNode.props.label,
        note: newNode.props.content,
        nodes: stateCopy.nodes,
        edges: stateCopy.edges
      }));
  }
  
  addNote(title){
    /**
     * Adds a new node to the network 
     */
    console.log(title);
  }
  
  setNote(newNote){
    /**
     * Adds a new node to the network 
     */
    let stateCopy = JSON.parse(JSON.stringify(this.state));
    stateCopy.nodes.find(x => x.props.id === stateCopy.id).props.content = newNote;
    // console.log(stateCopy);
    this.setState(state => ({
        id:stateCopy.id,
        title: stateCopy.title,
        note: newNote,
        nodes: stateCopy.nodes,
        edges: stateCopy.edges
      }));
  }
  
  render() {
    /**
     * Renders the component
     */
    return (
      <div className="note-web">
        <TopBar key="top"/>
        <div className="main-content">
          <LeftBar key="left" addNote={this.addNote} state={this.state}/>
          <DataScreen key="data" state={this.state} />
          <NoteScreen key="note" state={this.state} setNote={this.setNote}/>
        </div>
      </div>
    );
  }
}

class TopBar extends Component {
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
          <h3>Noteweb v0.0</h3>
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

class LeftBar extends Component {
  // Content on left side of screen
  constructor(props) {
    super(props);
    this.state = {input:""}
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
        </div>
      </div>
    );
  }
}

class DataScreen extends Component {
  /**
   * This screen displays the network of notes and allows selection of a note to be displayed in the NoteScreen
   */
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {items:this.props.state.nodes.concat(this.props.state.edges)};
    this.network = <div className="datascreen-content"><Network>{this.state.items}</Network></div>;
  } 
  
  componentWillReceiveProps(nextProps) {
    console.log("1")
    console.log(nextProps);
    console.log("2")
    console.log(nextProps.state.nodes.concat(nextProps.state.edges));
    this.setState({ items: nextProps.state.nodes.concat(nextProps.state.edges)});
    console.log("3")
    console.log(this.state);
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

class NoteScreen extends Component {
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

// ========================================

ReactDOM.render(
  <NoteWeb key="main-app"/>,
  document.getElementById('root')
);
