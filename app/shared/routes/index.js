import React from 'react';
//import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
//import configureStore from 'store/configureStore';

import App from '../components';
import Intro from '../components/containers/Intro';
import Questions from '../components/containers/Questions';
import Question from '../components/containers/Question';

export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="questions" component={Questions} />
        <Route path="questions/:id" component={Question} />
        <IndexRoute component={Intro} />
      </Route>
    </Router>
  );
};
 