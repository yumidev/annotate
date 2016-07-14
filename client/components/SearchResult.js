import React, { Component } from 'react';
import LyricHelpers from '../utils/LyricHelpers';

class SearchResult extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    const pageNumber = e.currentTarget.className // Is it right way to use const??
    this.context.router.push( `/lyrics/${pageNumber}` );
  }
  componentWillMount() {
    // console.log(this);
    const lyricname = this.props.routeParams.keyword;
    LyricHelpers.getLyricData(lyricname).then(function(req) {
      var lyrics = req.data
      var result = [];
      var findLyric = function (lyric) {
        if(lyric.title.indexOf(lyricname) > -1) {
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
    var searchResult = this.state.result.map((result) => {
      return (
        <li key={result.id} onClick={this.handleSubmit} className={result.id} >
          {result.title}
        </li>
      );
    });
    return (
      <div>
        <h2>Search Result</h2>
        <ul>
          {searchResult}
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
