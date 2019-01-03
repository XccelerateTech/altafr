import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../src/d57/Ex3-thunk/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
