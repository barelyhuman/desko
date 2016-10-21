import React from 'react';
import Panel from './panel.js';
import Card from './card.js';
import deskoInstall from './extract.js';

// const spawn = require('child_process').spawn;
// const {dialog} = require('electron').remote;

const Devtools = React.createClass({
  eclipse:function(){
	deskoInstall('../archives/eclipse.tar.gz', process.env.HOME);
    },
  render:function(){
    return <div><h1 id="pageTitle">Developer Tools</h1>
    <div className="cardContainer">
    <Card name="Eclipse" onClicked={this.eclipse}/>
    <Card name="PyCharm" onClicked={this.eclipse}/>
    <Card name="Flask-Python" onClicked={this.eclipse}/>
    </div>
    <Panel name="Back" onClicked={this.props.backHome} className="backButton"/>
    </div>
  }
});

export default Devtools;
