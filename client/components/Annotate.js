import React, { Component } from 'react';
import { Link } from 'react-router';
import LyricShow from './LyricShow'


class Annotate extends Component {
  constructor() {
    super();
    this.state = {
      comment: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    var comment = this.state.comment.trim();
    this.props.onAnnotateSubmit({comment: comment});
    this.setState ({
      comment: ''
    });
  }
  setValue(field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  }
  render () {
    return (
      <form className="annotateInputForm" onSubmit={this.handleSubmit}>
        <div>
          Annotate
        </div>
        <textarea
        value={this.state.comment}
        required={true}
        onChange={this.setValue.bind(this, 'comment')} />
        <div>
        <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
};

Annotate.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Annotate;
