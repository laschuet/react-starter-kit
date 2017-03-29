import createHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from 'Root';
import buildStore from 'store';

const history = createHistory();
const store = buildStore(history);

const domElement = document.getElementById('react');

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Root history={history} store={store} />
    </AppContainer>,
    domElement
  );
}

render();
if (module.hot) {
  module.hot.accept('./Root', () => { render(); });
}
