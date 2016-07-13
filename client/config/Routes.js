import React from 'react';
import ReactRouter, {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import Search from '../components/Search';
import SearchResult from '../components/SearchResult';


const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/:keyword" component={SearchResult} />
    </Route>
  </Router>
);

export default routes;
//
// import AddSong from '../components/AddSong';

// import LyricShow from '../components/LyricShow';
//
// <Route path="/lyrics/new" component={AddSong} />
// <Route path="/lyrics/:id" component={LyricShow} />
