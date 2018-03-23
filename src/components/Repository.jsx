import PropTypes from 'prop-types';
import React from 'react';

import styles from '../stylesheets/components/repository.css';

const Repository = props =>
  <tr>
    <td className={styles.name}>
      {props.name}
    </td>
    <td>
      {props.description}
    </td>
  </tr>;

Repository.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Repository;
