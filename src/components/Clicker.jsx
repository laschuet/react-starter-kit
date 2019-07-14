import React, { useEffect, useState } from 'react';

import styles from '../stylesheets/components/common/typography.css';

const Clicker = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return (
    <>
      <h1 className={styles.heading}>Clicker</h1>
      <div>{clicks} clicks</div>
    </>
  );
};

export default Clicker;
