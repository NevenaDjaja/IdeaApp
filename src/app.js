import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Layout from 'Layout';
import {
  Route,
  Router,
  IndexRoute,
  hashHistory
} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}/>
  </Router>,
  document.getElementById('app')
);
