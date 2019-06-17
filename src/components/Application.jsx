import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Link, Route } from 'react-router-dom';

import styles from '../stylesheets/components/application.css';
import Clicker from './Clicker';
import Repositories from './Repositories';
import Home from './Home';

const Application = () => (
  <div className={styles.root}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/clicker">Clicker</Link>
      </li>
      <li>
        <Link to="/repositories">Repositories</Link>
      </li>
    </ul>
    <main>
      <Route exact path="/" component={Home} />
      <Route path="/clicker" component={Clicker} />
      <Route path="/repositories" component={Repositories} />
    </main>
  </div>
);

export default hot(Application);
