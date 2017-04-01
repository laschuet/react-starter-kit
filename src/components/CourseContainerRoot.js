import React from 'react';
import { connect } from 'react-redux';

import { fetchCourses } from 'actions/courses';
import CourseContainer from 'components/CourseContainer';

const CourseContainerRoot = (props) => {
  const onFetchButtonClick = () => {
    props.dispatch(
      fetchCourses('https://www.udacity.com/public-api/v0/courses')
    );
  };

  return (
    <div>
      <button onClick={onFetchButtonClick}>
        Fetch
      </button>
      <br /><br />
      <CourseContainer data={props.courses} />
    </div>
  );
};

export default connect(
  state => ({ courses: state.courses })
)(CourseContainerRoot);
