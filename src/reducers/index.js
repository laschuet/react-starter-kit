import { combineReducers } from 'redux';

import repositoriesReducer from './repositories';

const reducers = {
  repositories: repositoriesReducer,
};

const reducer = combineReducers(reducers);

export default reducer;
