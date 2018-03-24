import fetch from 'isomorphic-fetch';

import * as actionTypes from '../constants/actionTypes';

const requestRepositories = () => ({
  type: actionTypes.REPOSITORIES_REQUEST,
});

const receiveRepositories = json => ({
  type: actionTypes.REPOSITORIES_SUCCESS,
  repositories: json,
});

const failureRepositories = () => ({
  type: actionTypes.REPOSITORIES_FAILURE,
});

const fetchRepositories = url => async dispatch => {
  dispatch(requestRepositories);

  try {
    const response = await fetch(url);
    const json = await response.json();
    dispatch(receiveRepositories(json));
  } catch (e) {
    dispatch(failureRepositories);
  }
};

export default fetchRepositories;
