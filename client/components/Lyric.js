import React, { Component } from 'react';
import LyricHelpers from '../utils/LyricHelpers';


class Lyric extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }
  componentWillMount() {
    console.log(this);
    const lyricname = this.props.routeParams.id;
    LyricHelpers.getLyricData(lyricname).then(function(req) {
      console.log(req);
    })
  }

  render () {
    return (
      <div>
      <p>something</p>
      </div>
    );
  }
};

Lyric.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Lyric;

// constructor() {
//   super();
//   this.state = {
//     user: {}
//   };
// }
// componentWillMount() {
//   console.log(this);
// }
