import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { routeActions } from 'react-router-redux';

import styles from 'stylesheets/components/application';

class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.root}>
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
