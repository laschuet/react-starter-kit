import React from 'react';

import styles from 'stylesheets/components/course';

class Course extends React.Component {
  //----------------------------------------------------------------------------
  render() {
    const { title, subtitle, level } = this.props;

    return (
      <tr>
        <td>{title}</td>
        <td>{subtitle}</td>
        <td className={styles.level}>{level}</td>
      </tr>
    );
  }
}

export default Course;
