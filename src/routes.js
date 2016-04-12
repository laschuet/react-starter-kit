import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Application from 'components/Application';
import CoursesPage from 'components/CoursesPage';
import HomePage from 'components/HomePage';

const routes = (
  <Route path="/" component={Application}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
  </Route>
);

export default routes;
