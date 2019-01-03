import {ADD_LINK, CLEAR_LINK, LinkActions} from '../actions/link'

export type LinkState = Array<{
    title: string,
    url: string
  }>
  
export const linkReducer = (state: LinkState = [], action: LinkActions) : LinkState => {
    // Use switch to handle different actions
    switch (action.type) {
      case ADD_LINK:
        return state.concat([action.link]) // Use concat to add a new link
      case CLEAR_LINK:
        return [] // Reset the link
      default:
        return state; // Do not change the state in case of any other actions
    }
};