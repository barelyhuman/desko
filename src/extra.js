import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './panel.js'
import Card from './card.js'

var Extra = React.createClass({
  render: function(){
    return(
      <div><h1 id="pageTitle">Extras</h1>
      <div className="cardContainer">
      <Card name="Atom Editor" onClicked={this.eclipse}/>
      <Card name="Sublime Editor" onClicked={this.eclipse}/>
      </div>
      <Panel name="Back" onClicked={this.props.backHome} className="backButton"/>
      </div>
    );
  }
});

export default Extra;
