import React, { Component } from 'react';
import axios from 'axios'
import '../node_modules/react-vis/dist/style.css';
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
    // let nodes = [
    //   <Node key="vader" id= "vader" label="Darth Vader" decorator={Decorator} content="The chosen one. Brought balance to the force. Before me thousands of Jedi, only two Sith. After me, two Jedi and two Sith. That's what you call balanced."/>,
    //   <Node key="luke" id= "luke" label="Luke Skywalker" decorator={Decorator} content="This is the Galaxy's only hope"/>,
    //   <Node key="leia" id= "leia" label="Leia Organa" decorator={Decorator} content="This is the girl who is always counted out but comes up big"/>,
    //   <Node key="han" id= "han" label="Han Solo" decorator={Decorator} content="What is this amateur hour"/>,
    //   <Node key="chewy" id= "chewy" label="Chewbacca" decorator={Decorator} content="Ahhhhhhhhhhhhh"/>,
    //   <Node key="obi" id= "obi" label="Obi-Wan Kenobi" decorator={Decorator} content="Why did you try it Anakin? I had the high ground. And I've used that exact trick on Darth Maul which I must have told you about. Did you think I wouldn't see that shit coming? Come on young padawan."/>,
    //   <Node key="greedo" id= "greedo" label="Greedo" decorator={Decorator} content="The green guy who was just too slow for Han Solo. Or was I innacurate? Did I shoot or not? Idk George Lucas keeps editing my only scene"/>,
    //   <Node key="yoda" id= "yoda" label="Yoda" decorator={Decorator} content="That baby me am not. Look nothing like him, I did. More handsome I am."/>,
    //   <Node key="boba" id= "boba" label="Boba Fett" decorator={Decorator} content="Still being digested to this day in The Great Pit of Carkoon"/>,
    //   <Node key="jabba" id= "jabba" label="Jabba The Hutt" decorator={Decorator} content="Me want solo on my wall"/>,
    //   <Node key="lando" id= "lando" label="Lando Calrissian" decorator={Decorator} content="I'm in it for the money, and the women, and the greater good, but definitely the money"/>,
    //   <Node key="emporer" id= "emporer" label="Emporer Palpatine" decorator={Decorator} content="This is the Dark Lord of the Sith"/>
    // ];
    // let edges = [
    //   <Edge key="0" id= "0" from="yoda" to="chewy" />,
    //   <Edge key="1" id= "1" from="vader" to="luke" />,
    //   <Edge key="2" id= "2" from="vader" to="leia" />,
    //   <Edge key="3" id= "3" from="han" to="leia" />,
    //   <Edge key="4" id= "4" from="han" to="chewy" />,
    //   <Edge key="5" id= "5" from="obi" to="luke" />,
    //   <Edge key="6" id= "6" from="leia" to="luke" />,
    //   <Edge key="7" id= "7" from="vader" to="obi" />,
    //   <Edge key="8" id= "8" from="obi" to="yoda" />,
    //   <Edge key="9" id= "9" from="vader" to="yoda" />,
    //   <Edge key="10" id= "10" from="jabba" to="han" />,
    //   <Edge key="11" id= "11" from="jabba" to="boba" />,
    //   <Edge key="12" id= "12" from="boba" to="han" />,
    //   <Edge key="13" id= "13" from="han" to="greedo" />,
    //   <Edge key="14" id= "14" from="jabba" to="greedo" />,
    //   <Edge key="15" id= "15" from="yoda" to="luke" />,
    //   <Edge key="16" id= "16" from="emporer" to="vader" />,
    //   <Edge key="17" id= "17" from="emporer" to="luke" />,
    //   <Edge key="18" id= "18" from="lando" to="han" />
    // ];
    let fetch_nodes = fetch('http://localhost:5000/note/get_all',{
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Accept": "application/json"
        }  
      }).then((response) => {
        return response;
      })
      .then((myJson) => {
        console.log(myJson);
      });
    console.log("poop")
    console.log(fetch_nodes);
    console.log("jews")
    let nodes = [
      { key: "node0", id: "0", label: "Darth Vader", content: "The chosen one. Brought balance to the force. Before me thousands of Jedi, only two Sith. After me, two Jedi and two Sith. That's what you call balanced.", created:new Date().getTime()},
      { key: "node1", id: "1", label: "Emporer Palpatine" , content: "This is the Dark Lord of the Sith", created:new Date().getTime() },
      { key: "node2", id: "2", label: "Luke Skywalker" , content: "This is the Galaxy's only hope.", created:new Date().getTime()},
      { key: "node3", id: "3", label: "Leia Organa", content: "This is the girl who is always counted out but comes up big.", created:new Date().getTime()},
      { key: "node4", id: "4", label: "Han Solo" , content: "What is this amateur hour?", created:new Date().getTime() },
      { key: "node5", id: "5", label: "Chewbacca", content: "Ahhhhhhhhhhhhh!", created:new Date().getTime()},
      { key: "node6", id: "6", label: "Obi-Wan Kenobi" , content: "Why did you try it Anakin? I had the high ground. And I've used that exact trick on Darth Maul which I must have told you about. Did you think I wouldn't see that shit coming? Come on young padawan.", created:new Date().getTime() },
      { key: "node7", id: "7", label: "Greedo", content: "The green guy who was just too slow for Han Solo. Or was I innacurate? Did I shoot or not? Idk George Lucas keeps editing my only scene", created:new Date().getTime()},
      { key: "node8", id: "8", label: "Yoda" , content: "That baby me am not. Look nothing like him, I did. More handsome I am.", created:new Date().getTime() },
      { key: "node9", id: "9", label: "Boba Fett", content: "Still being digested to this day in The Great Pit of Carkoon", created:new Date().getTime()},
      { key: "node10", id: "10", label: "Jabba The Hutt" , content: "Me want solo on my wall.", created:new Date().getTime() },
      { key: "node11", id: "11", label: "Lando Calrissian", content: "I'm in it for the money, and the women, and the greater good, but definitely the money.", created:new Date().getTime()}
    ]
    
    let edges = [
      { key: "edge0", id: "0", from:"8", to:"5", created:new Date().getTime()},
      { key: "edge1", id: "1", from:"0", to:"2", created:new Date().getTime()},
      { key: "edge2", id: "2", from:"0", to:"3", created:new Date().getTime()},
      { key: "edge3", id: "3", from:"4", to:"3", created:new Date().getTime()},
      { key: "edge4", id: "4", from:"4", to:"5", created:new Date().getTime()},
      { key: "edge5", id: "5", from:"6", to:"2", created:new Date().getTime()},
      { key: "edge6", id: "6", from:"3", to:"2", created:new Date().getTime()},
      { key: "edge7", id: "7", from:"0", to:"6", created:new Date().getTime()},
      { key: "edge8", id: "8", from:"6", to:"8", created:new Date().getTime()},
      { key: "edge9", id: "9", from:"0", to:"8", created:new Date().getTime()},
      { key: "edge10", id: "10", from:"10", to:"4", created:new Date().getTime()},
      { key: "edge11", id: "11", from:"10", to:"9", created:new Date().getTime()},
      { key: "edge12", id: "12", from:"9", to:"4", created:new Date().getTime()},
      { key: "edge13", id: "13", from:"4", to:"7", created:new Date().getTime()},
      { key: "edge14", id: "14", from:"10", to:"7", created:new Date().getTime()},
      { key: "edge15", id: "15", from:"8", to:"2", created:new Date().getTime()},
      { key: "edge16", id: "16", from:"1", to:"0", created:new Date().getTime()},
      { key: "edge17", id: "17", from:"1", to:"2", created:new Date().getTime()},
      { key: "edge18", id: "18", from:"11", to:"4", created:new Date().getTime()}
    ]
    let graph = {nodes:nodes,edges:edges};
    let thisItem = graph.nodes[0];
    this.state = {id: thisItem.id,  title: thisItem.label, note: thisItem.content, nodes: nodes, edges: edges, graph:graph};
    // this.state = {id: thisItem.props.id,  title: thisItem.props.label, note: thisItem.props.content, nodes: nodes, edges: edges, items:items, graph:{nodes:nodes, edges:edges}};
    this.setNote = this.setNote.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.getNote = this.getNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.computeItems = this.computeItems.bind(this);
  }
  
  getNote(newId){
    /**
     * Retreives the contents of a note and displays the contents in the NoteScreen 
     */
    console.log("get")
    // let stateCopy = JSON.parse(JSON.stringify(this.state));
    let stateCopy = Object.assign({}, this.state);
    let newNode = stateCopy.nodes.find(x => x.id === newId);
    let graph = this.computeItems(newId, stateCopy.nodes, stateCopy.edges);
    this.setState(state => ({
        id:newNode.id,
        title: newNode.label,
        note: newNode.content,
        nodes: stateCopy.nodes,
        edges: stateCopy.edges,
        graph: graph
      }));
  }
  
  computeItems(id, nodes, edges){
    /**
     * Computes the new graph to be 
     */
    let graph = {nodes: [], edges: []};
    graph.nodes.push(nodes.find(x => x.id === id));
    for (let i = 0; i < edges.length; i++) {
      if(edges[i].from === id){
        graph.edges.push(edges[i]);
        graph.nodes.push(nodes.find(x => x.id === edges[i].to));
      }else if(edges[i].to === id){
        graph.edges.push(edges[i]);
        graph.nodes.push(nodes.find(x => x.id === edges[i].from));
      }
    }
    return graph;
  }
  
  addNote(){
    /**
     * Adds a new node to the network 
     */
    console.log("add");
    let title = "New Note"
    let note = "What's on your mind?"
    let stateCopy = Object.assign({}, this.state);
    let nodeId = (parseInt(stateCopy.nodes.slice(-1)[0].id) + 1).toString();
    let edgeId = (parseInt(stateCopy.edges.slice(-1)[0].id) + 1).toString();
    stateCopy.nodes.push({key: "node"+nodeId, id: nodeId, label: title , content: note, created:new Date().getTime()})
    stateCopy.edges.push({key: "edge"+edgeId, id: edgeId, to: nodeId , from: stateCopy.id, created:new Date().getTime()})
    let graph = this.computeItems(nodeId, stateCopy.nodes, stateCopy.edges);
    this.setState(state => ({
        id:nodeId,
        title: title,
        note: note,
        nodes: stateCopy.nodes,
        edges: stateCopy.edges,
        graph: graph
      }));
  }
  
  resetGraph(){
    /**
     * resets the graph and displays all nodes
     */
    console.log("reset");
    // let stateCopy = JSON.parse(JSON.stringify(this.state));
    let stateCopy = Object.assign({}, this.state);
    let graph = {nodes:stateCopy.nodes, edges:stateCopy.edges};
    this.setState(state => ({
        id:stateCopy.id,
        title: stateCopy.title,
        note: stateCopy.note,
        nodes: stateCopy.nodes,
        edges: stateCopy.edges,
        graph: graph
      }));
  }
  
  setNote(newNote){
    /**
     * Sets the note content of the selected node
     */
    console.log("set");
    // let stateCopy = JSON.parse(JSON.stringify(this.state));
    let stateCopy = Object.assign({}, this.state);
    stateCopy.nodes.find(x => x.id === stateCopy.id).content = newNote;
    this.setState(state => ({
        id:stateCopy.id,
        title: stateCopy.title,
        note: newNote,
        nodes: stateCopy.nodes,
        edges: stateCopy.edges,
        graph: stateCopy.graph
      }));
  }
  
  setTitle(newTitle){
    /**
     * Sets the note label of the selected node 
     */
    console.log("set");
    // let stateCopy = JSON.parse(JSON.stringify(this.state));
    let stateCopy = Object.assign({}, this.state);
    stateCopy.nodes.find(x => x.id === stateCopy.id).label = newTitle;
    this.setState(state => ({
        id:stateCopy.id,
        title: newTitle,
        note: stateCopy.note,
        nodes: stateCopy.nodes,
        edges: stateCopy.edges,
        graph: stateCopy.graph
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
          <LeftBar key="left" getNote={this.getNote} addNote={this.addNote} state={this.state}/>
          <DataScreen key="data" graph={this.state.graph} getNote={this.getNote}/>
          {/* <GraphWrapper /> */}
          <NoteScreen key="note" title={this.state.title} note={this.state.note} setNote={this.setNote} setTitle={this.setTitle}/>
        </div>
      </div>
    );
  }
}
