import React from 'react';
import ReactDOM from 'react-dom';
import { Graph } from '@vx/network';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';




const nodes = [
  { x: 50, y: 20 },
  { x: 200, y: 300 },
  { x: 300, y: 40 }
];

const links = [
  { source: nodes[0], target: nodes[1] },
  { source: nodes[1], target: nodes[2] },
  { source: nodes[2], target: nodes[0] }
];

const graph = {
  nodes,
  links
};

class TopBar extends React.Component {
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

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <LeftBar />
        <DataScreen />
      </div>
    );
  }
}

class LeftBar extends React.Component {
  render() {
    return (
      <div className="leftbar">
        <p>Some leftbar stuff</p>
      </div>
    );
  }
}

class DataScreen extends React.Component {
  attachZoom() {
    console.log("hi");
  }
  
  render() {
    return (
      <div className="datascreen">
        {/* <p>Some main datascreen stuff</p> */}
        <svg width="500" height="500">
          <rect width={500} height={500} rx={14} fill="#272b4d" />
          <Graph graph={graph} />
        </svg>
      </div>
    );
  }
}

class NoteWeb extends React.Component {
  render() {
    return (
      <div className="noteweb">
        <TopBar />
        <Main />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <NoteWeb />,
  document.getElementById('root')
);
