import React, { Component } from 'react';
import { Link } from 'react-router';
import AllSong from './AllSong'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateSearch(e) {
    this.setState({
      search: e.currentTarget.value
    });
  }
  handleSubmit(e) {
    const searchQuery = this.state.search;
    this.context.router.push( `/${this.state.search}` );
  }
  render(){
    return (
      <div>
        <Link to="/">
          <button className="button-primary"> Home </button>
        </Link>
        <Link to="/addlyric">
          <button className="button-primary"> Add new lyric </button>
        </Link>
        <h3><em>Search</em></h3>
        Title: <input
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.updateSearch}
          placeholder="eg. Lemon tree " />
        <br />
        <input
          type="submit"
          className="button-primary"
          onClick={this.handleSubmit}
          value={`Search for ${this.state.search}`}  />
        <AllSong />
      </div>
    );
  }
};

Search.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Search;
