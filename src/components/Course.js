import React from 'react';

class Course extends React.Component {
  //----------------------------------------------------------------------------
  render() {
    const { title, subtitle, level } = this.props;

    return (
      <tr>
        <td>{title}</td>
        <td>{subtitle}</td>
        <td>{level}</td>
      </tr>
    );
  }
}

export default Course;
