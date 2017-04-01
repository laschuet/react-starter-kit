import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import Application from 'components/Application';

const Root = props => (
  <Provider store={props.store}>
    <Router history={props.history}>
      <Application />
    </Router>
  </Provider>
);

export default Root;
