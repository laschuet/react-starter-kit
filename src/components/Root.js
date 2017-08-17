import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import Application from './Application';

const Root = props =>
  <Provider store={props.store}>
    <ConnectedRouter history={props.history}>
      <Application />
    </ConnectedRouter>
  </Provider>;

export default Root;
