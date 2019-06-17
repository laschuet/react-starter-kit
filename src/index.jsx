import 'core-js/stabel';
import 'react-hot-loader';
import 'regenerator-runtime/runtime';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import Application from './components/Application';
import createRootReducer from './reducers/index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createBrowserHistory();
const store = createStore(
  createRootReducer(history),
  composeEnhancer(applyMiddleware(thunk, routerMiddleware(history))),
);

const domElement = document.getElementById('react');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Application />
      </ConnectedRouter>
    </Provider>,
    domElement,
  );
};

render();
