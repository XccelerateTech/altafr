/* 
First we write the action creators. 
So we need to define the actions that will circulate from the redux store. 
After we define the actions we can define the reducers so we can see how it is all handled so that we come out with a new state. 
*/

export const ADD_TEAM = 'ADD_TEAM';
export type ADD_TEAM = typeof ADD_TEAM;

// We add the const ADD_TEAM so that we do not have any typos, at the same time we create a new type of ADD_TEAM, anytime I define any variable using type add_team it must be a const variable with a string add_team

// If we didnt have the bottom line above then would need to pass a string below, and typescript wouldnt warn us if there is a typo. So once we have defined the type of ADD_TEAM and the associated value typescript can prompt us if we have done anything wrong. 

// Above we defined the type so now we can define the action. Below is the action we are defining. The interface below is just an object. 

export interface IAddTeamAction {
    type: ADD_TEAM;
    name: string;
}

// now for the reducer. 

// now for the action Creator. We want to make a function that will always return a proper action for me

export function addTeam(name: string): IAddTeamAction {
    return {
        name,
        type: ADD_TEAM
    };
}

// back to store.test.ts