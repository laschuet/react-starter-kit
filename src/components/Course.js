import React from 'react';

import styles from 'stylesheets/components/course';

const Course = props => (
  <tr>
    <td>{props.title}</td>
    <td>{props.subtitle}</td>
    <td className={styles.level}>{props.level}</td>
  </tr>
);

export default Course;
