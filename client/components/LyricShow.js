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
      currentLine: null,
      openAnnotate: false,
      lineNumber: null,
      songId: null,
      annotateResult: [],
      annotates: []
    };
    this.showAnnotate = this.showAnnotate.bind(this);
    this.handleAnnotateSubmit = this.handleAnnotateSubmit.bind(this);
    this.getAnnotate = this.getAnnotate.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.deleteLyric = this.deleteLyric.bind(this);
  }
  deleteAnnotate(e) {
    console.log(e);
    var annotateid = parseInt(e.currentTarget.parentElement.className);
    AnnotateHelpers.deleteAnnotate(annotateid).then(function(){
    });
  }
  deleteLyric() {
    const lyricid = this.props.routeParams.id;
    LyricHelpers.deleteLyric(lyricid).then(function(){
    });
    this.context.router.push( `/` );
  }
  getAnnotate() {
    AnnotateHelpers.getAnnotateData().then(function(req){
      let annotates = req.data;
      let annotateResult = [];
      let songId = this.state.songId;
      let lineNumber = this.state.currentLine;
      let findAnnotates = function (annotate) {
        if(annotate.songId === parseInt(songId) && annotate.lineNumber === parseInt(lineNumber)) {
          annotateResult.push(annotate)
        }
      };
      annotates.forEach(findAnnotates)
      this.setState({
        annotateResult: annotateResult,
        annotates: annotates
      });
    }.bind(this));
  }
  componentDidMount() {
    //Once the component is fully loaded, we grab the annotations,
    console.log("componentDidMount");
    this.getAnnotate();
    //... and set an interval to continuously load new data:
    setInterval(this.getAnnotate, 500);
  }
  handleAnnotateSubmit (e) {
    e.preventDefault;
    var data = e
    data['lineNumber'] = this.state.currentLine;
    data['songId'] = this.state.songId;
    AnnotateHelpers.addAnnotate(data).then(function(req){
      console.log(req);
    }.bind(this));
  }
  showAnnotate(e) {
    console.log(e);
    let currentLine = parseInt(e.target.dataset.line);
    let songId = this.props.params.id;
    this.setState({
      showAnnotate: true,
      currentLine: currentLine,
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
    let openAnnotate = this.state.openAnnotate;
    let showAnnotateResult = this.state.annotateResult.map((result) => {
      return(
        <p key={result.id} className={result.id} >
          Annotation: {result.comment} <br></br><span onClick={this.deleteAnnotate}>DELETE</span>
        </p>
      )
    })
    let content = this.state.lyric.content;
    let contentArray = content.match(/[^\r\n]+/g);
    var lines = contentArray.map((line, lineNumber) => {
      var songId = parseInt(this.props.params.id);
      var annotates = this.state.annotates;
      var annotatesOnThisLine = annotates.filter(function (annotate) {
        return annotate.songId === songId && annotate.lineNumber === lineNumber
      });
      var annotated = (annotatesOnThisLine.length !== 0);
      return (
        <li key={lineNumber} >
          <span onClick={this.showAnnotate} data-line={lineNumber} style={ annotated ? {background:"gainsboro"} : null }>{ line }</span>
          { this.state.currentLine === lineNumber ? showAnnotateResult : null }
          { this.state.currentLine === lineNumber ? <Annotate onAnnotateSubmit={this.handleAnnotateSubmit}/> : null }
        </li>
      );
    }, this);
    return (
      <div>
        <Link to="/">
          <button className="button-primary"> Home </button>
        </Link>
        <br />
        <Link to="/search">
          <button className="button-primary"> Search for a song </button>
        </Link>
        <div className="songView">
          <h3>Title: {title}</h3>
          <h4>Artist: {artist}</h4>
          <div className="lyric">
            <ul>
              { lines }
            </ul>
          </div>
          <div>
          <button type="submit" onClick={this.deleteLyric}><strong>DELETE LYRIC</strong></button>
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
