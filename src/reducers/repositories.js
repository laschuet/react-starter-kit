import { combineReducers } from 'redux';

import * as actionTypes from '../constants/actionTypes';

const entities = (state = [], action) => {
  switch (action.type) {
    case actionTypes.REPOSITORIES_FETCH_SUCCESS:
      return action.repositories;
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case actionTypes.REPOSITORIES_FETCH_REQUEST:
      return true;
    case actionTypes.REPOSITORIES_FETCH_FAILURE:
    case actionTypes.REPOSITORIES_FETCH_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  entities,
  isFetching,
});
