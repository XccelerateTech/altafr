/*
intail code

import { store } from './redux/store';
import { ADD_TEAM } from './redux/teams/actions';

describe('store', () => {

    it('dispatch new team', () => {
        store.dispatch({
            name: 'Xccelerate',
            type: ADD_TEAM,
        });
        expect(store.getState()).toEqual({
            teamList: [
                { name: 'Xccelerate' }
            ]
        })
    });
});

*/

// After adding these lines we should be able to test our redux store. 

// what we have done is: created the redux store, in the it block, this redux store has only one reducer, which we can see in store.ts. Action.ts defines how the object should look, the main component here is still the reducer, which accepts the actions and the current state, it processes the the action, using concat to update the teamList to the newTeamList (show them reducer.ts if needed.)

// This is when in our test cases, when we dispatch the function or action, and when we get state it exactly looks like the object above, an object with and array, with one team, with the key, name, and the value of Xccelerate. 

/* This might look like a very complex code for doing this:

const store = {
    teamList: []
}

store.teamList.push({name: 'Xccelerate'})

This is what we have done. Define the state with a simple array and push into it, so why do we have to make it so complicated! 

There are two reasons:
If we just push it directly, there is no way for React or Redux to know that the state has changed and so it will not update, moreover we wont know when the store has been updated, so we need the store to be a function which uses the dispatch method to set the state so the state.

By doing it this when, when we have updated the store, but it might not have updated any state or props, so React will try to see whether the newstate is equal to the old state, if it is not equal it will update the virtual dom, which will affect change on the real dom as Reach is in control of both. 

store.getState() === oldState


By making the action definitions in actions.ts we have restrictions on how we are dispatching the action. Right now it is not the best, we need to define our own actions.... So remember we discussed about an action creator, this is what we should do now. 

import { createReduxStore } from './redux/store';
import { ADD_TEAM, addTeam } from './redux/teams/actions';

describe('store', () => {

    it('dispatch new team', () => {
        const store = createReduxStore();
        store.dispatch(addTeam('Xccelerate'));
        expect(store.getState()).toEqual({
            teamList: [
                { name: 'Xccelerate' }
            ]
        })
    });
});

// one more thing, go to the store.ts

// Now we should make more than one test test 


*/

import { createReduxStore } from './redux/store';
import { addTeam } from './redux/teams/actions';

describe('store', () => {
    it('check initial state', () => {
        const store = createReduxStore();
        expect(store.getState()).toEqual({
            teamList: []
        })
    });
    it('dispatch new team', () => {
        const store = createReduxStore();
        store.dispatch(addTeam('Xccelerate'));
        expect(store.getState()).toEqual({
            teamList: [
                { name: 'Xccelerate' }
            ]
        })
    });
});

// now we have more than one test case. Now goto lecture notes. 