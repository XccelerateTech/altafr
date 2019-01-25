import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createReduxStore } from './redux/store';

ReactDOM.render(
  <Provider store={createReduxStore()}>
 
  <App /> 
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
