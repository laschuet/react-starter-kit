import fetch from 'isomorphic-fetch';

import * as actionTypes from '../constants/actionTypes';

const requestRepositories = () => ({
  type: actionTypes.REPOSITORIES_REQUEST,
});

const receiveRepositories = json => ({
  type: actionTypes.REPOSITORIES_SUCCESS,
  repositories: json,
});

const fetchRepositories = url => dispatch => {
  dispatch(requestRepositories);

  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receiveRepositories(json)));
};

export default fetchRepositories;
