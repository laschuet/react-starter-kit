import React from 'react';

import { fetchCourses } from 'actions/courses';
import CourseContainerRoot from 'components/CourseContainerRoot';

class CoursesPage extends React.Component {
  //----------------------------------------------------------------------------
  render() {
    return (
      <div>
        <h1>Courses</h1>
        <CourseContainerRoot />
      </div>
    );
  }
}

export default CoursesPage;
