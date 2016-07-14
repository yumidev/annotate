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
    const lyricid = this.props.routeParams.id;
    LyricHelpers.getOneLyric(lyricid).then(function(req) {
      debugger;
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
    var artist = this.state.lyric.artist;
    return (
      <div>
        <p>Title: {title}</p>
        <p>Artist: {artist}</p>
        <p>Lyric: {artist}</p>
        <button type="submit"><strong>EDIT LYRIC</strong></button>
        <button type="submit"><strong>DELETE LYRIC</strong></button>
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
