import React from 'react';
import {render} from 'react-dom';
import Panel from './panel.js';
import Devtools from './devtools.js';
const electron = require('electron');
const remote = electron.remote;

var Home = React.createClass({
  
  render: function(){
    return(<div>
      <Panel name="Developer Tools" onClicked={this.props.devclick}/>
      <Panel name="Extras" onClicked={this.props.exclick}/>
    </div>);
  }
});

export default Home;
