import React, { Component } from 'react';
import LyricHelpers from '../utils/LyricHelpers';

class AllSong extends Component {
  constructor() {
    super();
    this.state = {
      allLyrics: []
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    const pageNumber = e.currentTarget.className // Is it right way to use const??
    this.context.router.push( `/lyrics/${pageNumber}` );
  }
  componentWillMount() {
    LyricHelpers.getLyricData().then(function(req) {
      var allLyrics = req.data
      allLyrics = allLyrics.sort(function(a, b){
        var titleA = a.title.toUpperCase(); // ignore upper and lowercase
        var titleB = b.title.toUpperCase(); // ignore upper and lowercase
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        // names must be equal
        return 0;
      });

      debugger;
      this.setState({
        allLyrics:allLyrics
      });
    }.bind(this));
  }
  render() {
    console.log(this);
    debugger;
    var allLyricsList = this.state.allLyrics.map((lyric) => {
      return (
        <li key={lyric.id} onClick={this.handleSubmit} className={lyric.id} >
          <div>Title: {lyric.title}</div>
          <div>Artist: {lyric.artist}</div>
        </li>
      );
    });
    return (
      <div>
        <h2>All Songs</h2>
        <ul>
          {allLyricsList}
        </ul>
      </div>
    )
  }

}


AllSong.contextTypes = {
  router: React.PropTypes.object.isRequired
};
// make the react do the validation for developers - setting the type of the Props

export default AllSong;
