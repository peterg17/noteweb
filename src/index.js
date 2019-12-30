import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class TopBar extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="topbar">
            <p>Some topbar text</p>
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
  render() {
    return (
      <div className="datascreen">
        <p>Some main datascreen stuff</p>
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
