import React, { Component } from 'react';
import LyricHelpers from '../utils/LyricHelpers';
import { Link } from 'react-router';

class SearchResult extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(e) {
    const pageNumber = e.currentTarget.className // Is it right way to use const??
    this.context.router.push( `/lyrics/${pageNumber}` );
  }
  componentWillMount() {
    // console.log(this);
    const lyricname = this.props.routeParams.keyword;
    LyricHelpers.getLyricData(lyricname).then(function(req) {
      var lyrics = req.data
      var result = [];
      // debugger;
      var findLyric = function (lyric) {
        var loweredTitle = lyric.title.toLowerCase();
        if(loweredTitle.indexOf(lyricname.toLowerCase()) > -1) {
          result.push(lyric)
        }
      }
      lyrics.forEach(findLyric)
      this.setState({
        result:result
      });
    }.bind(this));
  }
  render () {
    if ( !this.state.result ) {
      return ( <div>Loading...</div> );
    }
    var titleResult = this.state.result.map((result) => {
      return (
        <li key={result.id} onClick={this.handleSelect} className={result.id} >
          <div>Title: {result.title}</div>
          <div>Artist: {result.artist}</div>
        </li>

      );
    });
    return (
      <div>
        <Link to="/">
          <button className="button-primary"> Home </button>
        </Link>
        <Link to="/search">
          <button className="button-primary"> Search for a new song </button>
        </Link>
        <h2>Search Result</h2>
        <ul>
          {titleResult}
        </ul>
      </div>
    );
  }
};

SearchResult.contextTypes = {
  router: React.PropTypes.object.isRequired
};
// make the react do the validation for developers - setting the type of the Props

export default SearchResult;
