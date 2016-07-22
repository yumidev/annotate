import React, { Component } from 'react';
import { Link } from 'react-router';
import LyricShow from './LyricShow'


class Annotate extends Component {
  constructor() {
    super();
    console.log("Initial this");
    console.log(this);
    this.state = {
      comment: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    console.log(e);
    console.log(this);
    var comment = this.state.comment.trim();
    this.props.onAnnotateSubmit({comment: comment});
    this.setState ({
      comment: ''
    });
  }
  setValue(field, event) {
    //If the input fields were directly within this
    //this component, we could use this.refs.[FIELD].value
    //Instead, we want to save the data for when the form is submitted
    var object = {};
    object[field] = event.target.value;
    console.log(object);
    this.setState(object);
  }
  render () {
    return (
      <form className="lyricInputForm" onSubmit={this.handleSubmit}>
        <div>
          Annotate
        </div>
        <textarea
        value={this.state.comment}
        required={true}
        onChange={this.setValue.bind(this, 'comment')} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
};

Annotate.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Annotate;
