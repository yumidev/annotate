import React, { Component } from 'react';
import LyricHelpers from '../utils/LyricHelpers';

class Lyric extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    const pageNumber = e.currentTarget.className
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
      // console.log(result);
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
