import React, { Component } from 'react';
import './Base.css';

class Base extends Component {

handleClick(e){
  console.log('Click handled in Base');
  this.props.onAction(e);
}

  render() {
    return (
      <div className="Base">
        <p onClick={this.handleClick.bind(this)}>Hello World</p>
      </div>
    );
  }
}

export default Base;
