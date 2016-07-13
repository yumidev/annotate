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
    console.log(this);
    const lyricid = this.props.routeParams.id;
    LyricHelpers.getOneLyric(lyricid).then(function(req) {
      var lyric = req.data
      this.setState({
        lyric:lyric
      })
    }.bind(this));
  }
  render () {
    if(!this.state.lyric) {
      return(<div>Loading...</div>);
    }
    var title = this.state.lyric.title;
    var singer = this.state.lyric.singer;
    return (
      <div>
      <p>{title}</p>
      <p>{singer}</p>
      </div>
    );
  }
};

LyricShow.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default LyricShow;

// handleSubmit(e) {
//   const searchQuery = this.state.search;
//   this.context.router.push( `/${this.state.search}` );
// }
