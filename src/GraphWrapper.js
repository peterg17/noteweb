import React, { Component } from 'react';
import '../node_modules/react-vis/dist/style.css';
import { Network, Node, Edge } from 'react-vis-network';
import Graph from 'react-graph-vis'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class GraphWrapper extends React.Component {
    constructor(props) {
        super(props);
       var graph = {nodes: [{id: 1, label: '1'}], edges: []};
       this.state = {
          options: {},
          graph: graph
       };
    }
 
    addNode() {
        var nodesCopy = this.state.graph.nodes.slice(); // this will create a copy with the same items
        nodesCopy.push({id: 2, label: '2'});
        this.setState({ graph: {nodes: nodesCopy, edges: []}});
     }
 
    render() {
       return <div>
                 <Graph graph={this.state.graph} options={this.state.options}/>
                 <button onClick={this.addNode.bind(this)}>Add Node</button>
              </div>;
    }
 }