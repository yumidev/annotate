import React, { Component } from 'react';
import LyricHelpers from '../utils/LyricHelpers';


class LyricShow extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }
  componentWillMount() {
    debugger;
    console.log(this);
    const lyricid = this.props.routeParams.id;
    LyricHelpers.getOneLyric(lyricid).then(function(req) {
      console.log(req);
      console.log(this);
    }.bind(this));
  }

  render () {
    return (
      <div>
      <p>something</p>
      </div>
    );
  }
};

LyricShow.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default LyricShow;

// var lyrics = req.data
// var result = [];
// var findLyric = function (lyric) {
//   if(lyric.title.indexOf(lyricname) > -1) {
//     result.push(lyric)
//   }
// }
// lyrics.forEach(findLyric)
// this.setState({
//   result:result
// });


// handleSubmit(e) {
//   const searchQuery = this.state.search;
//   this.context.router.push( `/${this.state.search}` );
// }
