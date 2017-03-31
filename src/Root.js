import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import Application from 'components/Application';

class Root extends React.Component {
  render() {
    const { history, store } = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          <Application />
        </Router>
      </Provider>
    );
  }
}

export default Root;
