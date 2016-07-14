import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render () {
    return (
      // what is it that makes it happen that I can use html here? jsx??
      <div>
        <Link to="/search">
          <button className="button-primary"> Search for a song </button>
        </Link>
        <Link to="/addlyric">
          <button className="button-primary"> Add new lyric </button>
        </Link>
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
