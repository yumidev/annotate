import React, { Component } from 'react';
import LyricHelpers from '../utils/LyricHelpers';

class LyricInputForm extends Component {
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
    e.preventDefault();
    var title = this.state.title.trim();
    var artist = this.state.artist.trim();
    var content = this.state.content.trim();
    //Here we do the final submit to the parent component
    this.props.onLyricSubmit({ title: title, artist: artist, content: content });
    this.setState({
      title: '',
      artist: '',
      content: ''
    });
  }
  setValue(field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  }
  render() {
    return (
      <form className="lyricInputForm" onSubmit={this.handleSubmit}>
        <div>
          Title:
          <input
          value={this.state.title}
          required={true}
          onChange={this.setValue.bind(this, 'title')} />
        </div>
        <div>
          Artist:
          <input
          value={this.state.artist}
          onChange={this.setValue.bind(this, 'artist')} />
        </div>
        <div>
          <textarea
          value={this.state.content}
          required={true}
          onChange={this.setValue.bind(this, 'content')} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
};

LyricInputForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default LyricInputForm;
