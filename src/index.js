import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './features/app';
import Welcome from './features/welcome';

import './assets/css/main.css';

import { SessionToken } from './utils/session';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" render={() => SessionToken.get() ? <App />  : <Redirect to="/auth" />} />
        <Route path="/auth" render={() => SessionToken.get() ? <Redirect to="/" /> : <Welcome />} />
      </div>
    </ConnectedRouter>
  </Provider>,
  target,
);
