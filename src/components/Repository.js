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

export default Repository;
