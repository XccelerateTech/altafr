import { applyMiddleware, createStore,  } from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { rootReducer } from './reducers'

export const store = createStore<any,any,any,any>(
  rootReducer,
  applyMiddleware(thunk, logger)
);