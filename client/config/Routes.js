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
import Lyric from '../components/Lyric';


const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/lyrics/:id" component={Lyric} />
    </Route>
  </Router>
);

export default routes;
