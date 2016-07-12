import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render () {
    return (
      // what is it that makes it happen that I can use html here? jsx??
      <div>
      <h1>Welcome</h1>
      <p>Hello World</p>
      </div>
    );
  }
};

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Home;
