import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import CatFace from './components/CatFace';
import Raccoon from './components/pages/Raccoon.js';
import CatSearch from './components/pages/CatSearch';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={CatFace}>
      <Route path='/CatSearch' component={CatSearch} />
      <Route path='/Raccoon' component={Raccoon} />
    </Route>
  </Router>

), document.getElementById('react-container'));



