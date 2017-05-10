import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import coursesReducer from '../reducers/courses';

const reducers = {
  courses: coursesReducer,
  router: routerReducer
};

const reducer = combineReducers(reducers);

export default reducer;
