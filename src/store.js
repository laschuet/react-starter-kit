import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

// The reducer is already the combination of all wanted reducers
import reducer from 'reducers/index';

const buildStore = (history, initialState) => {
  const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunk, routerMiddleware(history)))
  );
  return store;
}

export default buildStore;
