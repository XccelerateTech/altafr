import { createStore } from "redux";
import { rootReducer } from './reducers'

export const store = createStore<any,any,any,any>(rootReducer);