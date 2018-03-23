import React from 'react';
import { connect } from 'react-redux';

import { fetchRepositories } from '../actions/repositories';
import RepositoryContainer from '../containers/RepositoryContainer';

const RepositoryContainerRoot = props => {
  const onFetchButtonClick = () => {
    props.dispatch(
      fetchRepositories('https://api.github.com/users/laschuet/repos'),
    );
  };

  return (
    <div>
      <button onClick={onFetchButtonClick}>Fetch</button>
      <br />
      <br />
      <RepositoryContainer repositories={props.repositories} />
    </div>
  );
};

export default connect(state => ({ repositories: state.repositories }))(
  RepositoryContainerRoot,
);
