import React, { Component } from 'react';
import { Link } from 'react-router';
import AllSong from './AllSong'

class Home extends Component {
  constructor() {
    super();
  }
  render () {
    return (
      // what is it that makes it happen that I can use html here? jsx??
      <div>
        <Link to="/search">
          <button className="button-primary"> Search for a song </button>
        </Link>
        <br />
        <Link to="/addlyric">
          <button className="button-primary"> Add new lyric </button>
        </Link>
        <h1>Annotate</h1>
        <h4>Let me know the meaning of your song</h4>
        <AllSong />
      </div>
    );
  }
};

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Home;
