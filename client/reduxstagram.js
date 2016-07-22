import React from 'react';
import { render } from 'react-dom';
import AuthService from './utils/AuthService';

// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import Login from './components/Login';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

const auth = new AuthService('sOWrDSsdKlfg55vTFUzvyMUuI0WSpJzX', 'chrisciampoli.auth0.com');

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' })
    }
}

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} auth={auth}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single} onEnter={requireAuth}></Route>
        <Route path="/login" component={Login}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
