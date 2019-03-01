import { ITeam } from 'src/models';
import { ADD_TEAM, IAddTeamAction } from './actions';

/* 
Imagine this is the app state that we defined in the link List assignment, but we extract the state here. 


This is the first code we show.

export interface ITeamStates{
    teamList: Array<{name:string}>
}

const initialState = {
    teamList: []
}

==========================================================================
A better way to define this teamList is to create a models.ts in our folder. 

*/

export interface ITeamState{
    teamList: ITeam[]
}

const initialState = {
    teamList: []
}

// Now we define our reducer. If we have nothing to process we just return the state. But if we do have changes we will need to set up a switch case

// This is similar logic to how we do it in plain react, but we extract the information without even touching react. 

export function teamReducer(state: ITeamState = initialState, action: IAddTeamAction): ITeamState {
    switch (action.type){
        case ADD_TEAM:
        const newTeamList = state.teamList.concat([{
            name: action.name
        }]);
            return {
                teamList: newTeamList
            };
    }
    return state;

}

// We did this in the weekly assignment as well. We currently havent touched TSX 