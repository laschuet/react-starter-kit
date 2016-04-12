import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import coursesReducer from 'reducers/courses';

const reducers = {
  courses: coursesReducer,
  form: formReducer,
  routing: routerReducer
}

const reducer = combineReducers(reducers);

export default reducer;
