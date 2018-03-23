import React from 'react';

import Repository from '../components/Repository';

const RepositoryContainer = props =>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {props.repositories.map(repo =>
        <Repository
          key={repo.id}
          name={repo.name}
          description={repo.description}
        />,
      )}
    </tbody>
  </table>;

export default RepositoryContainer;
