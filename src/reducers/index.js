import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import repositoriesReducer from '../reducers/repositories';

const reducers = {
  repositories: repositoriesReducer,
  router: routerReducer,
};

const reducer = combineReducers(reducers);

export default reducer;
