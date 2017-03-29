import React from 'react';
import { connect } from 'react-redux';

import { fetchCourses } from 'actions/courses';
import CourseContainer from 'components/CourseContainer';

class CourseContainerRoot extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.onFetchButtonClick.bind(this)}>
          Fetch
        </button>
        <br /><br />
        <CourseContainer data={this.props.courses} />
      </div>
    );
  }

  onFetchButtonClick() {
    this.props.dispatch(
      fetchCourses('https://www.udacity.com/public-api/v0/courses')
    );
  }
}

export default connect(
  state => ({ courses: state.courses }),
  null
)(CourseContainerRoot);
