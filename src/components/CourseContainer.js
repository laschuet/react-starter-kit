import React from 'react';

import Course from 'components/Course';

const CourseContainer = props => {
  const courseNodes = props.data.map(course =>
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
};

export default CourseContainer;
