import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from 'routes';

class Root extends React.Component {
  render() {
    const { history, store } = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
      </Provider>
    );
  }
}

export default Root;
