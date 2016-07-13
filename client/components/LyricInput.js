import React, { Component } from 'react';
import LyricHelpers from '../utils/LyricHelpers';

class LyricInput extends Component {
  constructor() {
    super();
    this.state = {
      content: ''
    };
    this.updateAdding = this.updateAdding.bind(this);

  }
  updateAdding(e) {
    console.log("This");
    console.log(e.currentTarget.value);
    console.log(e);
    console.log(this);
    debugger;
    this.setState({
      content: e.currentTarget.value
    });
  }
  render () {
    console.log("Work>???");
    console.log(this);
    return (
      <div>
        <input
          type="text"
          name="addLyric"
          value={this.state.content}
          onChange={this.updateAdding}
          placeholder="Title: " />
        <br />
        <input
          type="submit"
          className="button-primary"
          onClick={this.handleSubmit}
          value={`Add Lyric`}  />
      </div>
    );
  }
};

LyricInput.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default LyricInput;

// this.handleSubmit = this.handleSubmit.bind(this);


// <input
//   type="submit"
//   className="button-primary"
//   onClick={this.handleSubmit}
//   value={`Search for ${this.state.search}`}  />
