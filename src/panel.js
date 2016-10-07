import React from 'react';
import { render } from 'react-dom';


var Panel = React.createClass({
  render: function(){
    return (<div className="panel" onClick={this.props.onClicked}>
      <p>{this.props.name}</p>
    </div>);}
});

 export default Panel
