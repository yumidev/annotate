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
import LyricShow from '../components/LyricShow';


const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/:keyword" component={SearchResult} />
      <Route path="/lyrics/:id" component={LyricShow} />
    </Route>
  </Router>
);

export default routes;
//
// import AddSong from '../components/AddSong';

//
// <Route path="/lyrics/new" component={AddSong} />
