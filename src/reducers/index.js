import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import repositoriesReducer from './repositories';

const createRootReducer = history =>
  combineReducers({
    repositories: repositoriesReducer,
    router: connectRouter(history),
  });

export default createRootReducer;
