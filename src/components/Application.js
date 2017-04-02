import React from 'react';
import { Link, Route } from 'react-router-dom';

import Courses from 'components/Courses';
import Home from 'components/Home';
import styles from 'stylesheets/components/application';

const Application = () => (
  <div className={styles.root}>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/courses">Courses</Link></li>
    </ul>
    <main>
      <Route exact path="/" component={Home} />
      <Route path="/courses" component={Courses} />
    </main>
  </div>
);

export default Application;
