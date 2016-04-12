import fetch from 'isomorphic-fetch';

import * as actionTypes from 'constants/actionTypes';

const requestCourses = () => ({
  type: actionTypes.COURSES_REQUEST
})

const receiveCourses = json => ({
  type: actionTypes.COURSES_SUCCESS,
  courses: json.courses
})

export const fetchCourses = url => dispatch => {
  dispatch(requestCourses);

  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receiveCourses(json)));
}
