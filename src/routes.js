import React from 'react';
import { Route } from 'react-router-dom';

import Application from 'components/Application';
import CoursesPage from 'components/CoursesPage';
import HomePage from 'components/HomePage';

const routes = (
  <div>
    <Route exact path="/" component={Application} />
    <Route exact path="/" component={HomePage} />
    <Route path="/courses" component={CoursesPage} />
  </div>
);

export default routes;
