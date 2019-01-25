import { Action, applyMiddleware, combineReducers, compose, createStore } from 'redux';

import { ILinkListState, linkReducer } from './links/reducer';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    links: linkReducer,
});

export interface IRootState {
    links: ILinkListState,
}

declare global {
    // tslint:disable-next-line:interface-name
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createReduxStore = () => {
    return createStore<IRootState,Action,{},{}>(rootReducer, 
        composeEnhancers(
            applyMiddleware(thunk)
        )
    )
};