import React, { Component } from 'react';
import LyricHelpers from '../utils/LyricHelpers';

class LyricInput extends Component {
  constructor() {
    super();
    this.state = {
      content: ''
    };
  }
  updateAdding(e) {
    console.log(e.currentTarget.value);
    debugger;
    this.setState({
      content: e.currentTarget.value
    });
  }
  componentWillMount() {
    console.log(this);
    debugger;
    // const data = this.props.routeParams.id;
    LyricHelpers.createLyric(data).then(function(req) {

    }.bind(this));
  }
  render () {
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
// 여긴 아마 다른건 할 필요도 없고 헬퍼 이용해서 포스트 하는 거만 하면 될걸걸??
// <input
//   type="submit"
//   className="button-primary"
//   onClick={this.handleSubmit}
//   value={`Search for ${this.state.search}`}  />
