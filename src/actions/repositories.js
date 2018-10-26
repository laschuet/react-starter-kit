import * as actionTypes from '../constants/actionTypes';

const fetchRepositoriesRequest = () => ({
  type: actionTypes.REPOSITORIES_FETCH_REQUEST,
});

const fetchRepositoriesSuccess = json => ({
  type: actionTypes.REPOSITORIES_FETCH_SUCCESS,
  repositories: json,
});

const fetchRepositoriesFailure = () => ({
  type: actionTypes.REPOSITORIES_FETCH_FAILURE,
});

const fetchRepositories = url => async dispatch => {
  dispatch(fetchRepositoriesRequest());

  try {
    const response = await fetch(url);
    const json = await response.json();
    dispatch(fetchRepositoriesSuccess(json));
  } catch (e) {
    dispatch(fetchRepositoriesFailure());
  }
};

export default fetchRepositories;
