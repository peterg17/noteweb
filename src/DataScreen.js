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
    this.state = this.props.state;
    // this.network= <Graph
    //   graph={this.state.graph}
    //   options={this.options}
    //   events={this.events}
    // />;
    this.network = <InteractiveForceGraph
      simulationOptions={{ height: 800, width: 800}}
      zoomOptions={{ minScale: 200}}
      labelAttr="label"
      onSelectNode={(event,node) => {
                      this.props.getNote(node.id)}}
      selectedNode={this.props.state.selectedNode}
      highlightDependencies
      showLabels
      zoom
    >
      {this.props.state.nodes.concat(this.props.state.links)}
    </InteractiveForceGraph>
    // console.log(this.network.props.graph.nodes);
  } 
  
  // componentWillReceiveProps(nextProps) {
  //   /*
  //   * Might help propogate state change down to child from parent
  //   */
  //   console.log("1")
  //   console.log(nextProps);
  //   console.log("2")
  //   console.log(nextProps.state.items);
  //   this.setState({ items: nextProps.state.items});
  //   console.log("3")
  //   console.log(this.state);
  //   console.log(this.network);
  // }
  
  
  
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
