/* Below is the basic way to create the redux store. Remember the store is made up of three things, the dispatcher, the reducer and the state. Also some middleware we cover later. 
The reducer is the first thing that is expected, it is just a function. 


import { createStore } from 'redux'

export const store = createStore();
==========================================================================
add reducer:

the function () => {
    return {}
}

is an empty reducer. This wont change the state and wont do anything. 

import { createStore } from 'redux'

export const store = createStore(()=> {
    return {}
});

==========================================================================
add the dispatcher, now we could add it into this file here, however this would not be meaningful, the app we are trying to build will manage a team, so in our redux we should make a new directory, teams. inside teams we should make two files, action.ts and store.ts, first we write the actions.ts

import { createStore } from 'redux'

export const store = createStore(()=> {
    return {}
});

// We have created our store, and eventually we shall place the complete store in our function following createStore above. 

=========================================================================
IT could be: if we were just making a store for the teamReducer. 

Some people try to run the redux store without even connecting to the Redux Application.  Go back to Lecture notes.


import { createStore } from 'redux'
import { teamReducer } from './teams/reducer';

export const store = createStore(teamReducer);
*/
// using the store like this isnt the best way to do it, this is because its just a variable. Also it means that we cannot make another test case as the store is hard coded. So we need to make this into a function:


import { createStore } from 'redux'
import { teamReducer } from './teams/reducer';

export const createReduxStore = () =>{
    return createStore(teamReducer)
}

// now to store.test.ts