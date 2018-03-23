import * as actionTypes from '../constants/actionTypes';

const repositories = (state = [], action) => {
  switch (action.type) {
    case actionTypes.REPOSITORIES_REQUEST:
      return state;
    case actionTypes.REPOSITORIES_SUCCESS:
      return action.repositories;
    default:
      return state;
  }
};

export default repositories;
