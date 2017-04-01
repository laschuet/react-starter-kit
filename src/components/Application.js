import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import CoursesPage from 'components/CoursesPage';
import HomePage from 'components/HomePage';
import styles from 'stylesheets/components/application';

const Application = () => (
  <div className={styles.root}>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/courses">Courses</Link></li>
    </ul>
    <main>
      <Route exact path="/" component={HomePage} />
      <Route path="/courses" component={CoursesPage} />
    </main>
  </div>
);

export default connect(
)(Application);
