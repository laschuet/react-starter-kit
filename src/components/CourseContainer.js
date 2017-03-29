import React from 'react';

import Course from 'components/Course';

class CourseContainer extends React.Component {
  render() {
    const courseNodes = this.props.data.map(course =>
      <Course
        key={course.key}
        title={course.title}
        subtitle={course.subtitle}
        level={course.level}
      />
    );
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Subtitle</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {courseNodes}
        </tbody>
      </table>
    );
  }
}

export default CourseContainer;
