import React, { Component } from 'react';
import LyricHelpers from '../utils/LyricHelpers';
import LyricInputForm from './LyricInputForm'

class LyricInput extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: ''
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateTitle(e) {
    console.log(e.currentTarget.value);
    console.log(this);
    // debugger;
    this.setState({
      title: e.currentTarget.value
    });
  }
  updateContent(e) {
    this.setState({
      content: e.currentTarget.value
    });
  }
  handleSubmit(e) {
    console.log(this);
    debugger;
    var title = e.title
    var content = e.content
    var data = e
    LyricHelpers.addLyric(data).then(function(req) {
      console.log(req);
      debugger;
    }.bind(this));
  }
  render () {
    return (
      <div className="lyricInput">
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

// <div>Title:
//   <input
//     type="text"
//     name="addTitle"
//     value={this.state.title}
//     onChange={this.updateTitle}
//     placeholder="Love never felt so good " />
//   <hr />
//   <div>
//     <textarea
//       type="text"
//       name="addContent"
//       value={this.state.content}
//       onChange={this.updateContent}
//       placeholder="Baby, Love never felt so good" />
//   </div>
//   <input
//     type="submit"
//     className="button-primary"
//     onClick={this.handleSubmit}
//     value={`Add Lyric`}  />
// </div>





// <input
//   type="submit"
//   className="button-primary"
//   onClick={this.handleSubmit}
//   value={`Search for ${this.state.search}`}  />
