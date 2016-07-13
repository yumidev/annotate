import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    // setInitialState
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
    this.context.router.push( `/lyrics/${this.state.search}` );
  }
  render(){
    console.log( this );
    return (
      <div>
        <p>Hi</p>
        <h3><em>Search</em></h3>
        <input
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.updateSearch}
          placeholder="Username: " />
        <br />
        <input
          type="submit"
          className="button-primary"
          onClick={this.handleSubmit}
          value={`Search for ${this.state.search}`}  />
      </div>
    );
  }
};

Search.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Search;
