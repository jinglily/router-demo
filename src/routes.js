import React from 'react';
import { Router, Route, hashHistory,IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import Blog from './Blog';
import Work from './Work';
import About from './About';


class Routes extends React.Component {
  render () {
    return(
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/Blog' component={Blog} />
        <Route path='/Work' component={Work} />
        <Route path='/About' component={About} />

      </Route>

    </Router>
    )
  }
}

export default Routes;
