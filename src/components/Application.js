import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { routeActions } from 'react-router-redux';

class Application extends React.Component {
  //----------------------------------------------------------------------------
  constructor(props) {
    super(props);
  }

  //----------------------------------------------------------------------------
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Project</Link></li>
          <li><Link to="/courses">Courses</Link></li>
        </ul>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default connect(
  null,
  { routeActions }
)(Application);
