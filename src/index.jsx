import '@babel/polyfill';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import Application from './components/Application';
import createRootReducer from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createBrowserHistory();
const store = createStore(
  createRootReducer(history),
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
