import PropTypes from 'prop-types';
import React from 'react';

import styles from '../stylesheets/components/repository.css';

const Repository = props => {
  const { description, name } = props;

  return (
    <tr>
      <td className={styles.name}>{name}</td>
      <td>{description}</td>
    </tr>
  );
};

Repository.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Repository;
