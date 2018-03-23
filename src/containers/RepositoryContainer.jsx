import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import fetchRepositories from '../actions/repositories';
import Repository from '../components/Repository';

class RepositoryContainer extends React.Component {
  static propTypes = {
    fetchRepositories: PropTypes.func.isRequired,
    repositories: PropTypes.arrayOf(PropTypes.shape(
      Repository.propTypes,
    )).isRequired,
  };

  componentDidMount() {
    this.props.fetchRepositories('https://api.github.com/users/laschuet/repos');
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {this.props.repositories.map(repo =>
            <Repository
              key={repo.id}
              name={repo.name}
              description={repo.description}
            />,
          )}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
});

export default connect(mapStateToProps, {
  fetchRepositories,
})(RepositoryContainer);
