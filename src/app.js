import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Layout from 'Layout';
import Ideas from 'Ideas';
import {
  Route,
  Router,
  IndexRoute,
  browserHistory
} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Ideas}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
