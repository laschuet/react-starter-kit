import React from 'react';

import Course from 'components/Course';

const CourseContainer = props => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Subtitle</th>
        <th>Level</th>
      </tr>
    </thead>
    <tbody>
      {props.data.map(course => (
        <Course
          key={course.key}
          title={course.title}
          subtitle={course.subtitle}
          level={course.level}
        />
      ))}
    </tbody>
  </table>
);

export default CourseContainer;
