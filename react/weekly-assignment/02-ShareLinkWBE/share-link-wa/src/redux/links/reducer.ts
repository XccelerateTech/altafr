import { ILink } from "../../models";
import { ADD_LINK, IAddLinkAction, IListLinksAction, LIST_LINKS } from "./actions";


 export interface ILinkListState{
     linkList: ILink[];
 }

 const initialState = {
     linkList: []
 }

 export function linkReducer(state: ILinkListState = initialState,action: IAddLinkAction | IListLinksAction){
     switch (action.type){
         case LIST_LINKS:
            return {
                linkList: action.links
            }
            break;
            case ADD_LINK:
                return{
                    linkList: state.linkList.concat([action.link])
                }
     }
     return state;
 }