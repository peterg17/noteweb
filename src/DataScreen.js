import React, { Component } from 'react';
import '../node_modules/react-vis/dist/style.css';
import { InteractiveForceGraph} from 'react-vis-force';
// import { InteractiveForceGraph, ForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class DataScreen extends Component {
  /**
   * This screen displays the network of notes and allows selection of a note to be displayed in the NoteScreen
   */
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {items: this.props.items.nodes.concat(this.props.items.links), selectedNode: this.props.selectedNode};
    // this.network= <Graph
    //   graph={this.state.graph}
    //   options={this.options}
    //   events={this.events}
    // />;
    this.network = <InteractiveForceGraph
      simulationOptions={{ animate:true, height: 800, width: 800}}
      zoomOptions={{ minScale: 200}}
      labelAttr="label"
      onSelectNode={(event,node) => {
                      this.props.getNote(node.id)}}
      selectedNode={this.state.selectedNode}
      highlightDependencies
      showLabels
      zoom
    >
      {this.state.items}
    </InteractiveForceGraph>
    // console.log(this.network.props.graph.nodes);
  } 
  
  static getDerivedStateFromProps(props, state) {
    /*
    * Might help propogate state change down to child from parent
    */
    if (props.selectedNode !== state.selectedNode) {
      console.log("poop");
      return {
        items:props.items.nodes.concat(props.items.links),
        selectedNode: props.selectedNode
      };
    }
    console.log("peter");
    return null;
  }
  
  
  
  render() {
    /**
     * Renders the component
     */
    return (
      <div className="datascreen">
        <div className="datascreen-content">
          {this.network}
        </div>
      </div>
    );
  }
}
