var React = require('react');


var Card = React.createClass({
  render:function(){
    return (<div className="card" onClick={this.props.onClicked}>
      <img src={this.props.addicon} />
      <p>{this.props.name}</p>
    </div>);
  }
});


export default Card
