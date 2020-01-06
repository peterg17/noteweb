import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/react-vis/dist/style.css';
import { Network, Node, Edge } from 'react-vis-network';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class NoteWeb extends Component {
  // This is the main container for all content
  constructor(props) {
    super(props);
    this.state = {title: "Title", note: "This is where your note is displayed"};
    console.log(this.note)
    const Decorator = props => {
      return (
        <button
          onClick={() => this.setNote(props.label,props.content)}
        >
          Click Me
        </button>
      );
    };
    this.nodes = [
      <Node id="vader" label="Darth Vader" decorator={Decorator} content="The chosen one. Brought balance to the force. Before me thousands of Jedi, only two Sith. After me, two Jedi and two Sith. That's what you call balanced."/>,
      <Node id="luke" label="Luke Skywalker" decorator={Decorator} content="This is the Galaxy's only hope"/>,
      <Node id="leia" label="Leia Organa" decorator={Decorator} content="This is the girl who is always counted out but comes up big"/>,
      <Node id="han" label="Han Solo" decorator={Decorator} content="What is this amateur hour"/>,
      <Node id="chewy" label="Chewbacca" decorator={Decorator} content="Ahhhhhhhhhhhhh"/>,
      <Node id="obi" label="Obi-Wan Kenobi" decorator={Decorator} content="Why did you try it Anakin? I had the high ground. And I've used that exact trick on Darth Maul which I must have told you about. Did you think I wouldn't see that shit coming? Come on young padawan."/>,
      <Node id="greedo" label="Greedo" decorator={Decorator} content="The green guy who was just too slow for Han Solo. Or was I innacurate? Did I shoot or not? Idk George Lucas keeps editing my only scene"/>,
      <Node id="yoda" label="Yoda" decorator={Decorator} content="That baby me am not. Look nothing like him, I did. More handsome I am."/>,
      <Node id="boba" label="Boba Fett" decorator={Decorator} content="Still being digested to this day in The Great Pit of Carkoon"/>,
      <Node id="jabba" label="Jabba The Hutt" decorator={Decorator} content="Me want solo on my wall"/>,
      <Node id="lando" label="Lando Calrissian" decorator={Decorator} content="I'm in it for the money, and the women, and the greater good, but definitely the money"/>,
      <Node id="emporer" label="Emporer Palpatine" decorator={Decorator} content="This is the Dark Lord of the Sith"/>
    ];
    this.edges = [
      <Edge id="1" from="vader" to="luke" />,
      <Edge id="2" from="vader" to="leia" />,
      <Edge id="3" from="han" to="leia" />,
      <Edge id="4" from="han" to="chewy" />,
      <Edge id="5" from="obi" to="luke" />,
      <Edge id="6" from="leia" to="luke" />,
      <Edge id="7" from="vader" to="obi" />,
      <Edge id="8" from="obi" to="yoda" />,
      <Edge id="9" from="vader" to="yoda" />,
      <Edge id="10" from="jabba" to="han" />,
      <Edge id="11" from="jabba" to="boba" />,
      <Edge id="12" from="boba" to="han" />,
      <Edge id="13" from="han" to="greedo" />,
      <Edge id="14" from="jabba" to="greedo" />,
      <Edge id="15" from="yoda" to="luke" />,
      <Edge id="16" from="emporer" to="vader" />,
      <Edge id="17" from="emporer" to="luke" />,
      <Edge id="18" from="lando" to="han" />,
      <Edge id="19" from="yoda" to="chewy" />
    ];
    this.setNote = this.setNote.bind(this);
  }
  
  setNote(newTitle, newNote){
    this.setState(state => ({
        title: newTitle,
        note: newNote
      }));
  }
  
  render() {
    return (
      <div className="note-web">
        <TopBar key="top"/>
        <div className="container">
          <LeftBar key="left"/>
          <div className="main-content">
            <DataScreen key="data" nodes={this.nodes} edges={this.edges} />
            <NoteScreen key="note" title={this.state.title} note={this.state.note} />
          </div>
        </div>
      </div>
    );
  }
}

class TopBar extends Component {
  // This is the header of the application
  
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

class LeftBar extends Component {
  // Content on left side of screen
  
  render() {
    return (
      <div className="leftbar">
        <p>Some leftbar stuff</p>
      </div>
    );
  }
}

class DataScreen extends Component {
  //The notes graph display
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    
    this.items = this.props.nodes.concat(this.props.edges);
    this.network = <div className="datascreen"><Network>{this.items}</Network></div>;
  } 
  
  setNetwork() {
    this.network = <div className="datascreen"><Network></Network></div>;
  }
  
  render() {
    return (
      this.network
    );
  }
}

class NoteScreen extends Component {
  // the note content display
  render() {
    return(
      <div className="notescreen">
        {/* <p>Some main datascreen stuff</p> */}
        <container width="100%" height="100%">
          <h3> {this.props.title} </h3>
          <p> {this.props.note} </p>
        </container>
      </div>
    );
  }
  
}

// ========================================

ReactDOM.render(
  <NoteWeb />,
  document.getElementById('root')
);
