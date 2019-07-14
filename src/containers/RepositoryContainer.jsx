import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fetchRepositories from '../actions/repositories';
import Repository from '../components/Repository';

const RepositoryContainer = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.repositories.isFetching);
  const repositories = useSelector(state => state.repositories.entities);

  useEffect(() => {
    dispatch(fetchRepositories('https://api.github.com/users/laschuet/repos'));
  }, []);

  return isFetching ? (
    <div>Loading...</div>
  ) : (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {repositories.map(repo => (
          <Repository
            key={repo.id}
            name={repo.name}
            description={repo.description}
          />
        ))}
      </tbody>
    </table>
  );
};

export default RepositoryContainer;
