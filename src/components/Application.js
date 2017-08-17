import React from 'react';
import { Link, Route } from 'react-router-dom';

import styles from '../stylesheets/components/application';
import Courses from './Courses';
import Home from './Home';

const Application = () =>
  <div className={styles.root}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li>
    </ul>
    <main>
      <Route exact path="/" component={Home} />
      <Route path="/courses" component={Courses} />
    </main>
  </div>;

export default Application;
