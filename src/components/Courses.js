import React from 'react';

import styles from '../stylesheets/components/common/typography';
import CourseContainerRoot from './CourseContainerRoot';

const Courses = () =>
  <div>
    <h1 className={styles.heading}>Courses</h1>
    <CourseContainerRoot />
  </div>;

export default Courses;
