import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../node_modules/react-vis/dist/style.css';
import { Network, Node, Edge } from 'react-vis-network';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoteScreen from './NoteScreen.js'
import DataScreen from './DataScreen.js'
import TopBar from './TopBar.js'
import LeftBar from './LeftBar.js'

export default class NoteWeb extends Component {
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
      <Node key="vader" id="vader" label="Darth Vader" decorator={Decorator} content="The chosen one. Brought balance to the force. Before me thousands of Jedi, only two Sith. After me, two Jedi and two Sith. That's what you call balanced."/>,
      <Node key="luke" id="luke" label="Luke Skywalker" decorator={Decorator} content="This is the Galaxy's only hope"/>,
      <Node key="leia" id="leia" label="Leia Organa" decorator={Decorator} content="This is the girl who is always counted out but comes up big"/>,
      <Node key="han" id="han" label="Han Solo" decorator={Decorator} content="What is this amateur hour"/>,
      <Node key="chewy" id="chewy" label="Chewbacca" decorator={Decorator} content="Ahhhhhhhhhhhhh"/>,
      <Node key="obi" id="obi" label="Obi-Wan Kenobi" decorator={Decorator} content="Why did you try it Anakin? I had the high ground. And I've used that exact trick on Darth Maul which I must have told you about. Did you think I wouldn't see that shit coming? Come on young padawan."/>,
      <Node key="greedo" id="greedo" label="Greedo" decorator={Decorator} content="The green guy who was just too slow for Han Solo. Or was I innacurate? Did I shoot or not? Idk George Lucas keeps editing my only scene"/>,
      <Node key="yoda" id="yoda" label="Yoda" decorator={Decorator} content="That baby me am not. Look nothing like him, I did. More handsome I am."/>,
      <Node key="boba" id="boba" label="Boba Fett" decorator={Decorator} content="Still being digested to this day in The Great Pit of Carkoon"/>,
      <Node key="jabba" id="jabba" label="Jabba The Hutt" decorator={Decorator} content="Me want solo on my wall"/>,
      <Node key="lando" id="lando" label="Lando Calrissian" decorator={Decorator} content="I'm in it for the money, and the women, and the greater good, but definitely the money"/>,
      <Node key="emporer" id="emporer" label="Emporer Palpatine" decorator={Decorator} content="This is the Dark Lord of the Sith"/>
    ];
    let edges = [
      <Edge key="0" id="0" from="yoda" to="chewy" />,
      <Edge key="1" id="1" from="vader" to="luke" />,
      <Edge key="2" id="2" from="vader" to="leia" />,
      <Edge key="3" id="3" from="han" to="leia" />,
      <Edge key="4" id="4" from="han" to="chewy" />,
      <Edge key="5" id="5" from="obi" to="luke" />,
      <Edge key="6" id="6" from="leia" to="luke" />,
      <Edge key="7" id="7" from="vader" to="obi" />,
      <Edge key="8" id="8" from="obi" to="yoda" />,
      <Edge key="9" id="9" from="vader" to="yoda" />,
      <Edge key="10" id="10" from="jabba" to="han" />,
      <Edge key="11" id="11" from="jabba" to="boba" />,
      <Edge key="12" id="12" from="boba" to="han" />,
      <Edge key="13" id="13" from="han" to="greedo" />,
      <Edge key="14" id="14" from="jabba" to="greedo" />,
      <Edge key="15" id="15" from="yoda" to="luke" />,
      <Edge key="16" id="16" from="emporer" to="vader" />,
      <Edge key="17" id="17" from="emporer" to="luke" />,
      <Edge key="18" id="18" from="lando" to="han" />
    ];
    
    this.computeItems = this.computeItems.bind(this);
    
    let items = this.computeItems("obi",nodes,edges);
    this.state = {id: "vader",  title: "Darth Vader", note: "The chosen one. Brought balance to the force. Before me thousands of Jedi, only two Sith. After me, two Jedi and two Sith. That's what you call balanced.", nodes: nodes, edges: edges, items:items};
    this.setNote = this.setNote.bind(this);
    this.getNote = this.getNote.bind(this);
    this.addNote = this.addNote.bind(this);
    console.log(this.state);
  }
  
  getNote(newId){
    /**
     * Retreives the contents of a note and displays the contents in the NoteScreen 
     */
    console.log("get")
    let stateCopy = Object.assign({}, this.state);
    console.log(stateCopy);
    let newNode = stateCopy.nodes.find(x => x.props.id === newId);
    let items = this.computeItems(newId, stateCopy.nodes, stateCopy.edges);
    console.log(items);
    this.setState(state => ({
        id:newNode.props.id,
        title: newNode.props.label,
        note: newNode.props.content,
        nodes: stateCopy.nodes,
        edges: stateCopy.edges,
        items: items
      }));
  }
  
  computeItems(id, nodes, edges){
    /**
     * Computes the new items to be 
     */
    let items = [];
    items.push(nodes.find(x => x.props.id === id));
    for (let i = 0; i < edges.length; i++) {
      if(edges[i].props.from == id){
        items.push(edges[i]);
        items.push(nodes.find(x => x.props.id === edges[i].props.to));
      }else if(edges[i].props.to == id){
        items.push(edges[i]);
        items.push(nodes.find(x => x.props.id === edges[i].props.from));
      }
    }
    return items;
  }
  
  addNote(title){
    /**
     * Adds a new node to the network 
     */
    console.log("add")
    let stateCopy = Object.assign({}, this.state);
    console.log(title);
  }
  
  setNote(newNote){
    /**
     * Adds a new node to the network 
     */
    let stateCopy = Object.assign({}, this.state);
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
          <LeftBar key="left" getNote={this.getNote} addNote={this.addNote} nodes={this.state.nodes}/>
          <DataScreen key="data" items={this.state.items} />
          <NoteScreen key="note" note={this.state.note} title={this.state.title} setNote={this.setNote}/>
        </div>
      </div>
    );
  }
}
