import React from 'react';

import CourseContainerRoot from 'components/CourseContainerRoot';
import styles from 'stylesheets/components/common/typography';

const CoursesPage = () => (
  <div>
    <h1 className={styles.heading}>Courses</h1>
    <CourseContainerRoot />
  </div>
);

export default CoursesPage;
