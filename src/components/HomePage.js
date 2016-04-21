import React from 'react';

import styles from 'stylesheets/components/common/typography';

class HomePage extends React.Component {
  //----------------------------------------------------------------------------
  render() {
    return (
      <div>
        <h1 className={styles.heading}>Home</h1>
      </div>
    );
  }
}

export default HomePage;
