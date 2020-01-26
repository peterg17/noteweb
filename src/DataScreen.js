import React, { Component } from 'react';
import '../node_modules/react-vis/dist/style.css';
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
    this.state = {graph:this.props.graph};
    
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
        if(event.nodes.length > 0){
          this.props.getNote(event.nodes[0]);
        }
      }
    };
    // Don't call this.setState() here!
    this.state = {graph:this.props.graph};
    this.network= <Graph
      graph={this.props.graph}
      options={this.options}
      events={this.events}
    />;
    console.log(this.network)
  } 

  componentWillReceiveProps(nextProps) {
    console.log("got update!");
    console.log(nextProps.graph)
    this.setState(state => ({graph:nextProps.graph}));
    this.network= <Graph
      graph={nextProps.graph}
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
