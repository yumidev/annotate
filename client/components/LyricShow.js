import React, { Component } from 'react';
import { Link } from 'react-router';
import LyricHelpers from '../utils/LyricHelpers';
import AnnotateHelpers from '../utils/AnnotateHelpers';
import Annotate from './Annotate'

class LyricShow extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      showAnnotate: false,
      currentLine: '',
      openAnnotate: false,
      lineNumber: null,
      songId: null,
      annotateResult: []
    };
    this.showAnnotate = this.showAnnotate.bind(this);
    this.handleAnnotateSubmit = this.handleAnnotateSubmit.bind(this);
    this.getAnnotate = this.getAnnotate.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  getAnnotate() {
    AnnotateHelpers.getAnnotateData().then(function(req){
      let annotates = req.data;
      let annotateResult = [];
      console.log(this);
      let songId = this.state.songId;

      let lineNumber = this.state.currentLine;
      let findAnnotates = function (annotate) {
          if(annotate.songId === parseInt(songId) && annotate.lineNumber === parseInt(lineNumber)) {
            annotateResult.push(annotate)
          }
      }
      annotates.forEach(findAnnotates)
      this.setState({
        annotateResult: annotateResult
      });
    }.bind(this));
  }
  componentDidMount() {
    //Once the component is fully loaded, we grab the donations
    console.log("componentDidMount");
    console.log(this);
    // debugger;
    this.getAnnotate();
    //... and set an interval to continuously load new data:
    setInterval(this.getAnnotate, 500);
  }
  handleAnnotateSubmit (e) {
    e.preventDefault;
    console.log(this);
    console.log(e);
    var data = e
    data['lineNumber']=this.state.currentLine.slice(0,2).trim();
    data['songId']=this.state.songId;
    AnnotateHelpers.addAnnotate(data).then(function(req){
      console.log(req);
    }.bind(this));
  }

  showAnnotate(e) {
    console.log(e);
    console.log(e.target);
    let currentLine = e.target;
    let currentLineClass= currentLine.getAttribute("class")
    let songId = this.props.params.id;
    this.setState({
      showAnnotate: true,
      currentLine: currentLineClass,
      openAnnotate: true,
      songId: songId
    });
  }
  componentWillMount() {
    const lyricid = this.props.routeParams.id;
    LyricHelpers.getOneLyric(lyricid).then(function(req) {
      let lyric = req.data
      this.setState({
        lyric:lyric
      })
    }.bind(this));
  }
  render () {
    if(!this.state.lyric) {
      return(<div>Loading...</div>);
    }
    let title = this.state.lyric.title;
    let artist = this.state.lyric.artist;
    let content = this.state.lyric.content;
    let contentArray = content.match(/[^\r\n]+/g);
    let openAnnotate = this.state.openAnnotate;
    let showAnnotateResult = this.state.annotateResult.map((result) => {
      return(
        <p key={result.id} className={result.id} >
          Annotation: {result.comment}
        </p>
      )
    })

    let line = contentArray.map((line, i) => {
      let css = `${i} lyricLine`;
      return (
        <li key={i} >
          <span onClick={this.showAnnotate} className={css}>{ line }</span>
          { this.state.currentLine === css ? showAnnotateResult : null }
          { this.state.currentLine === css ? <Annotate onAnnotateSubmit={this.handleAnnotateSubmit}/> : null }
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
        <div className="songView">
          <h3>Title: {title}</h3>
          <h4>Artist: {artist}</h4>
          <div className="lyric">
            <ul>
              { line }
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

LyricShow.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default LyricShow;
//
// render() {
//   return (
//     <div>
//       <Annotate />
//     </div>
//   );
// }

// <button type="submit"><strong>EDIT LYRIC</strong></button>
// <button type="submit"><strong>DELETE LYRIC</strong></button>

// handleSubmit(e) {
//   const searchQuery = this.state.search;
//   this.context.router.push( `/${this.state.search}` );
// }
