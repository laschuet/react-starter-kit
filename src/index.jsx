import '@babel/polyfill';
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware,
} from 'connected-react-router';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import Application from './components/Application';
import reducer from './reducers/index';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const history = createBrowserHistory();
const store = createStore(
  connectRouter(history)(reducer),
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))),
);

const domElement = document.getElementById('react');

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Application />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    domElement,
  );
};

render();

if (module.hot) {
  module.hot.accept('./components/Application', () => {
    render();
  });
}
