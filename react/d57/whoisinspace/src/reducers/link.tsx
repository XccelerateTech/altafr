import { ADD_SPACEMAN, LOAD_SPACEMAN_FAILURE, LOAD_SPACEMAN_SUCCESS, SpaceActions} from '../actions/link';

export type SpaceState = Array<{name: string}>

export const nameReducer = (state: SpaceState = [], action: SpaceActions) : SpaceState => {
    switch(action.type){
    case ADD_SPACEMAN:
        return state.concat([action.person])
    case LOAD_SPACEMAN_FAILURE:
        return [];
    case LOAD_SPACEMAN_SUCCESS:
        return action.people
        default:
        return state;
    }
}