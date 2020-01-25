import React, { Component } from 'react';
import '../node_modules/react-vis/dist/style.css';
import { Network, Node, Edge } from 'react-vis-network';
import Graph from 'react-graph-vis'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class DataScreen extends Component {
  /**
   * This screen displays the network of notes and allows selection of a note to be displayed in the NoteScreen
   */
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {graph:this.props.state.graph};
    
    this.options = {
      layout: {
        hierarchical: false
      },
      edges: {
        color: "#FFFFFF"
      },
      height: "800px"
    };
   
    this.events = {
      select: (event) => {
        var { nodes, edges } = event;
        this.props.getNote(event.nodes[0]);
      }
    };
    // Don't call this.setState() here!
    this.state = {graph:this.props.state.graph};
    this.network= <Graph
      graph={this.state.graph}
      options={this.options}
      events={this.events}
    />;
    console.log(this.network)
  } 

  componentWillReceiveProps(nextProps) {
    console.log("got update!");
    this.setState(state => ({graph:nextProps.state.graph}));
    this.network= <Graph
      graph={nextProps.state.graph}
      options={this.options}
      events={this.events}
    />;
  }
  
  render() {
    /**
     * Renders the component
     */
    return (
      <div className="datascreen">
        {this.network}
      </div>
    );
  }
}
