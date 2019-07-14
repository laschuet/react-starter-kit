import React from 'react';

import RepositoryContainer from '../containers/RepositoryContainer';
import styles from '../stylesheets/components/common/typography.css';

const Repositories = () => (
  <>
    <h1 className={styles.heading}>Repositories</h1>
    <RepositoryContainer />
  </>
);

export default Repositories;
