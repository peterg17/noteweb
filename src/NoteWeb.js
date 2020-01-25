import React, { Component } from 'react';
import '../node_modules/react-vis/dist/style.css';
import { ForceGraphNode, ForceGraphLink } from 'react-vis-force';
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
    //   <Node key="vader" id= "vader" label="Darth Vader" content="The chosen one. Brought balance to the force. Before me thousands of Jedi, only two Sith. After me, two Jedi and two Sith. That's what you call balanced."/>,
    //   <Node key="luke" id= "luke" label="Luke Skywalker" content="This is the Galaxy's only hope"/>,
    //   <Node key="leia" id= "leia" label="Leia Organa" content="This is the girl who is always counted out but comes up big"/>,
    //   <Node key="han" id= "han" label="Han Solo" content="What is this amateur hour"/>,
    //   <Node key="chewy" id= "chewy" label="Chewbacca" content="Ahhhhhhhhhhhhh"/>,
    //   <Node key="obi" id= "obi" label="Obi-Wan Kenobi" content="Why did you try it Anakin? I had the high ground. And I've used that exact trick on Darth Maul which I must have told you about. Did you think I wouldn't see that shit coming? Come on young padawan."/>,
    //   <Node key="greedo" id= "greedo" label="Greedo" content="The green guy who was just too slow for Han Solo. Or was I innacurate? Did I shoot or not? Idk George Lucas keeps editing my only scene"/>,
    //   <Node key="yoda" id= "yoda" label="Yoda" content="That baby me am not. Look nothing like him, I did. More handsome I am."/>,
    //   <Node key="boba" id= "boba" label="Boba Fett" content="Still being digested to this day in The Great Pit of Carkoon"/>,
    //   <Node key="jabba" id= "jabba" label="Jabba The Hutt" content="Me want solo on my wall"/>,
    //   <Node key="lando" id= "lando" label="Lando Calrissian" content="I'm in it for the money, and the women, and the greater good, but definitely the money"/>,
    //   <Node key="emporer" id= "emporer" label="Emporer Palpatine" content="This is the Dark Lord of the Sith"/>
    // ];
    // let edges = [
    //   <Edge key="0" id= "0" source="yoda" to="chewy" />,
    //   <Edge key="1" id= "1" source="vader" to="luke" />,
    //   <Edge key="2" id= "2" source="vader" to="leia" />,
    //   <Edge key="3" id= "3" source="han" to="leia" />,
    //   <Edge key="4" id= "4" source="han" to="chewy" />,
    //   <Edge key="5" id= "5" source="obi" to="luke" />,
    //   <Edge key="6" id= "6" source="leia" to="luke" />,
    //   <Edge key="7" id= "7" source="vader" to="obi" />,
    //   <Edge key="8" id= "8" source="obi" to="yoda" />,
    //   <Edge key="9" id= "9" source="vader" to="yoda" />,
    //   <Edge key="10" id= "10" source="jabba" to="han" />,
    //   <Edge key="11" id= "11" source="jabba" to="boba" />,
    //   <Edge key="12" id= "12" source="boba" to="han" />,
    //   <Edge key="13" id= "13" source="han" to="greedo" />,
    //   <Edge key="14" id= "14" source="jabba" to="greedo" />,
    //   <Edge key="15" id= "15" source="yoda" to="luke" />,
    //   <Edge key="16" id= "16" source="emporer" to="vader" />,
    //   <Edge key="17" id= "17" source="emporer" to="luke" />,
    //   <Edge key="18" id= "18" source="lando" to="han" />
    // ];
    let nodes = [
      <ForceGraphNode node={{ key: "vader", id: "vader", label: "Darth Vader", content: "The chosen one. Brought balance to the force. Before me thousands of Jedi, only two Sith. After me, two Jedi and two Sith. That's what you call balanced."}} fill="red" zoomable/>,
      <ForceGraphNode node={{ key: "luke", id: "luke", label: "Luke Skywalker" , content: "This is the Galaxy's only hope." }} fill="blue" zoomable/>,
      <ForceGraphNode node={{ key: "leia", id: "leia", label: "Leia Organa", content: "This is the girl who is always counted out but comes up big."}} fill="red" zoomable/>,
      <ForceGraphNode node={{ key: "han", id: "han", label: "Han Solo" , content: "What is this amateur hour?" }} fill="blue" zoomable/>,
      <ForceGraphNode node={{ key: "chewy", id: "chewy", label: "Chewbacca", content: "Ahhhhhhhhhhhhh!"}} fill="red" zoomable/>,
      <ForceGraphNode node={{ key: "obi", id: "obi", label: "Obi-Wan Kenobi" , content: "Why did you try it Anakin? I had the high ground. And I've used that exact trick on Darth Maul which I must have told you about. Did you think I wouldn't see that shit coming? Come on young padawan."}} fill="blue" zoomable/>,
      <ForceGraphNode node={{ key: "greedo", id: "greedo", label: "Greed", content: "The green guy who was just too slow for Han Solo. Or was I innacurate? Did I shoot or not? Idk George Lucas keeps editing my only scene"}} fill="red" zoomable/>,
      <ForceGraphNode node={{ key: "yoda", id: "yoda", label: "Yoda" , content: "That baby me am not. Look nothing like him, I did. More handsome I am." }} fill="blue" zoomable/>,
      <ForceGraphNode node={{ key: "boba", id: "boba", label: "Boba Fett", content: "Still being digested to this day in The Great Pit of Carkoon"}} fill="red" zoomable/>,
      <ForceGraphNode node={{ key: "jabba", id: "jabba", label: "Jabba The Hutt" , content: "Me want solo on my wall." }} fill="blue" zoomable/>,
      <ForceGraphNode node={{ key: "lando", id: "lando", label: "Lando Calrissian", content: "I'm in it for the money, and the women, and the greater good, but definitely the money."}} fill="red" zoomable/>,
      <ForceGraphNode node={{ key: "emporer", id: "emporer", label: "Emporer Palpatine" , content: "This is the Dark Lord of the Sith" }} fill="blue" zoomable/>,
    ]
    
    let links = [
      <ForceGraphLink link={{ key: "0", id: "0", source:"yoda", target:"chewy" }} />,
      <ForceGraphLink link={{ key: "1", id: "1", source:"vader", target:"luke" }} />,
      <ForceGraphLink link={{ key: "2", id: "2", source:"vader", target:"leia" }} />,
      <ForceGraphLink link={{ key: "3", id: "3", source:"han", target:"leia" }} />,
      <ForceGraphLink link={{ key: "4", id: "4", source:"han", target:"chewy" }} />,
      <ForceGraphLink link={{ key: "5", id: "5", source:"obi", target:"luke" }} />,
      <ForceGraphLink link={{ key: "6", id: "6", source:"leia", target:"luke" }} />,
      <ForceGraphLink link={{ key: "7", id: "7", source:"vader", target:"obi" }} />,
      <ForceGraphLink link={{ key: "8", id: "8", source:"obi", target:"yoda" }} />,
      <ForceGraphLink link={{ key: "9", id: "9", source:"vader", target:"yoda" }} />,
      <ForceGraphLink link={{ key: "10", id: "10", source:"jabba", target:"han" }} />,
      <ForceGraphLink link={{ key: "11", id: "11", source:"jabba", target:"boba" }} />,
      <ForceGraphLink link={{ key: "12", id: "12", source:"boba", target:"han" }} />,
      <ForceGraphLink link={{ key: "13", id: "13", source:"han", target:"greedo" }} />,
      <ForceGraphLink link={{ key: "14", id: "14", source:"jabba", target:"greedo" }} />,
      <ForceGraphLink link={{ key: "15", id: "15", source:"yoda", target:"luke" }} />,
      <ForceGraphLink link={{ key: "16", id: "16", source:"emporer", target:"vader" }} />,
      <ForceGraphLink link={{ key: "17", id: "17", source:"emporer", target:"luke" }} />,
      <ForceGraphLink link={{ key: "18", id: "18", source:"lando", target:"han" }} />
    ]
    // let graph = {nodes:[],edges:[]};
    // graph.nodes.push(nodes.find(x => x.id === "vader"));
    // for (let i = 0; i < edges.length; i++) {
    //   if(edges[i].source === "vader"){
    //     graph.edges.push(edges[i]);
    //     graph.nodes.push(nodes.find(x => x.id === edges[i].to));
    //   }else if(edges[i].to === "vader"){
    //     graph.edges.push(edges[i]);
    //     graph.nodes.push(nodes.find(x => x.id === edges[i].source));
    //   }
    // }
    let thisItem = nodes[0].props.node;
    this.state = {selectedNode: thisItem, id: thisItem.id,  title: thisItem.label, note: thisItem.content, nodes: nodes, links: links}//, graph:graph};
    // this.state = {id: thisItem.props.id,  title: thisItem.props.label, note: thisItem.props.content, nodes: nodes, edges: edges, items:items, graph:{nodes:nodes, edges:edges}};
    this.setNote = this.setNote.bind(this);
    this.getNote = this.getNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.computeItems = this.computeItems.bind(this);
  }
  
  getNote(newId){
    /**
     * Retreives the contents of a note and displays the contents in the NoteScreen 
     */
    console.log("get")
    let stateCopy = JSON.parse(JSON.stringify(this.state));
    let newNode = stateCopy.nodes.find(x => x.props.node.id === newId);
    console.log("new node id: ", newNode.props.node.id);
    this.setState(state => ({
        selectedNode: newNode.props.node,
        id: newNode.props.node.id,
        title: newNode.props.node.label,
        note: newNode.props.node.content,
        nodes: stateCopy.nodes,
        links: stateCopy.links
      }));
  }
  
  computeItems(id, nodes, edges){
    /**
     * Computes the new graph to be 
     */
    let graph = [];
    graph.push(nodes.find(x => x.id === id));
    for (let i = 0; i < edges.length; i++) {
      if(edges[i].source === id){
        graph.push(edges[i]);
        graph.push(nodes.find(x => x.id === edges[i].to));
      }else if(edges[i].to === id){
        graph.push(edges[i]);
        graph.push(nodes.find(x => x.id === edges[i].source));
      }
    }
    return graph;
  }
  
  addNote(node){
    /**
     * Adds a new node to the network 
     */
    console.log("add");
    let stateCopy = JSON.parse(JSON.stringify(this.state));
  }
  
  setNote(newNote){
    /**
     * Changes content of a node in the network 
     */
    console.log("set");
    let stateCopy = JSON.parse(JSON.stringify(this.state));
    stateCopy.nodes.find(x => x.id === stateCopy.id).props.node.content = newNote;
    this.setState(state => ({
        selectedNode: stateCopy.selectedNode,
        id: stateCopy.id,
        title: stateCopy.title,
        note: newNote,
        nodes: stateCopy.nodes,
        links: stateCopy.links
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
          <DataScreen key="data" state={this.state} addNote={this.addNote} getNote={this.getNote} selectedNode={this.selectedNode}/>
          <NoteScreen key="note" state={this.state} setNote={this.setNote}/>
        </div>
      </div>
    );
  }
}
