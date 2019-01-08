import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Board} from './TicTacToeEx';

ReactDOM.render(
  <Board />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
