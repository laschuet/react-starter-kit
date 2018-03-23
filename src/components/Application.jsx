import React from 'react';
import { Link, Route } from 'react-router-dom';

import styles from '../stylesheets/components/application.css';
import Repositories from './Repositories';
import Home from './Home';

const Application = () => (
  <div className={styles.root}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/repositories">Repositories</Link>
      </li>
    </ul>
    <main>
      <Route exact path="/" component={Home} />
      <Route path="/repositories" component={Repositories} />
    </main>
  </div>
);

export default Application;
