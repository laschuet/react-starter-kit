import React from 'react';

import styles from '../stylesheets/components/common/typography.css';
import RepositoryContainerRoot from './RepositoryContainerRoot';

const Repositories = () =>
  <div>
    <h1 className={styles.heading}>Repositories</h1>
    <RepositoryContainerRoot />
  </div>;

export default Repositories;
