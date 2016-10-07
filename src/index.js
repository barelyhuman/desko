import React from 'react';
import {render} from 'react-dom';
import Home from './home.js';
import Devtools from './devtools.js';
import Extra from './extra.js';

var Root = React.createClass({
  getInitialState:function(){
    return{
      currentView: 'home'
    };
  },
  backHome:function(){
    this.setState({
      currentView: 'home'
    });
  },
  devClicked: function(){
    this.setState({
      currentView: 'devtools'
    });
  },
  exClicked: function(){
    this.setState({
      currentView: 'extra'
    });
  },
  render: function(){
    if(this.state.currentView==='devtools'){
      return <Devtools backHome={this.backHome}/>
    }
    else if(this.state.currentView==='extra') {
      return <Extra backHome={this.backHome} />
    }
    else{
      return <Home devclick={this.devClicked} exclick={this.exClicked}/>
    }
  }
});

render(<Root/>,document.getElementById("content"));
