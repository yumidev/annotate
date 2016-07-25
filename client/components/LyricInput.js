import React, { Component } from 'react';
import { Link } from 'react-router';
import LyricHelpers from '../utils/LyricHelpers';
import LyricInputForm from './LyricInputForm'

class LyricInput extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      artist: '',
      content: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    var data = e
    LyricHelpers.addLyric(data).then(function(req) {
      this.context.router.push( `/` );
    }.bind(this));
  }
  render () {
    return (
      <div className="lyricInput">
        <Link to="/">
          <button className="button-primary"> Home </button>
        </Link>
        <Link to="/search">
          <button className="button-primary"> Search for a song </button>
        </Link>
        <h2>Add Song</h2>
        <LyricInputForm onLyricSubmit={this.handleSubmit} />
      </div>
    );
  }
};

LyricInput.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default LyricInput;
