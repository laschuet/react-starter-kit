import createHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import Root from 'components/Root';
import reducer from 'reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createHistory();
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
);

const domElement = document.getElementById('react');

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Root history={history} store={store} />
    </AppContainer>,
    domElement
  );
};

render();
if (module.hot) {
  module.hot.accept('./components/Root', () => {
    render();
  });
}
