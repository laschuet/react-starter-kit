import * as actionTypes from 'constants/actionTypes';

const courses = (state = [], action) => {
  switch (action.type) {
    case actionTypes.COURSES_REQUEST:
      return state;
    case actionTypes.COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}

export default courses;
