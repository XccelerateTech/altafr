import { combineReducers } from 'redux'
import { nameReducer, SpaceState } from './link'

export interface IRootState {
    names: SpaceState
}

export const rootReducer = combineReducers <IRootState>({
    names: nameReducer
})