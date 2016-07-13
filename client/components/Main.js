import React, { Component } from 'react';

class Main extends Component {
  render() {
    // console.log(this);
    return (
      <div className="container">
      { this.props.children }
      </div>
    );
  }
};

export default Main;
