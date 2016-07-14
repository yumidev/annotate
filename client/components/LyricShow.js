import React, { Component } from 'react';
import { Link } from 'react-router';
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
    var content = this.state.lyric.content;
    var contentArray = content.match(/[^\r\n]+/g);
    var line = contentArray.map((line, i) => {
      return (
        <li key={i} onClick={this.showAnnotate} className={i}>
          {line}
        </li>
      );
    });

    return (
      <div>
        <Link to="/">
          <button className="button-primary"> Home </button>
        </Link>
        <Link to="/search">
          <button className="button-primary"> Search for a song </button>
        </Link>
        <div>
          <p>Title: {title}</p>
          <p>Artist: {artist}</p>
          <p>Lyric: </p>
            <ul>
              {line}
            </ul>
        </div>
      </div>
    );
  }
};

LyricShow.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default LyricShow;

// <button type="submit"><strong>EDIT LYRIC</strong></button>
// <button type="submit"><strong>DELETE LYRIC</strong></button>

// handleSubmit(e) {
//   const searchQuery = this.state.search;
//   this.context.router.push( `/${this.state.search}` );
// }
