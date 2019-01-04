import axios from 'axios';
import { Action, Dispatch } from 'redux';

export interface IPeople {
    name: string
}

export const ADD_SPACEMAN = 'ADD_SPACEMAN';
type ADD_SPACEMAN = typeof ADD_SPACEMAN;

export interface IAddSpaceManAction extends Action {
    type: ADD_SPACEMAN;
    person: {
        name: string
    }
}

export const LOAD_SPACEMAN_FAILURE = 'LOAD_SPACEMAN_FAILURE';
export type LOAD_SPACEMAN_FAILURE = typeof LOAD_SPACEMAN_FAILURE;

export interface ILoadSpaceManFailureAction extends Action {
    type: LOAD_SPACEMAN_FAILURE
}

export const LOAD_SPACEMAN_SUCCESS = 'LOAD_SPACEMAN_SUCCESS';
export type LOAD_SPACEMAN_SUCCESS = typeof LOAD_SPACEMAN_SUCCESS;

export interface ILoadSpaceManSuccessAction extends Action {
    people: IPeople[],
    type: LOAD_SPACEMAN_SUCCESS
}

export function loadSpaceMenSuccess(people: IPeople[]): ILoadSpaceManSuccessAction {
    return {
        people,
        type: LOAD_SPACEMAN_SUCCESS
    }
}

export function loadSpaceMenFailure(): ILoadSpaceManFailureAction {
    return {
        type: LOAD_SPACEMAN_FAILURE
    }
}

export function whoIsInSpace(): any {
    return (dispatch: Dispatch<ILoadSpaceManSuccessAction | ILoadSpaceManFailureAction>) => {
        return axios('http://api.open-notify.org/astros.json').then((res) => {
          
            const peeps = res.data;
            const people = peeps.people.map((t:any) => ({
                name: t.name
            }));
            dispatch(loadSpaceMenSuccess(people));
        }).catch((err)=> {
            // tslint:disable-next-line:no-console
            console.log(err);
            dispatch(loadSpaceMenFailure())
        })
    }
}

export function addSpaceman(name: string): IAddSpaceManAction {
    return {
        person: {
            name
        },
        type: ADD_SPACEMAN
    }
}

export type SpaceActions = IAddSpaceManAction | ILoadSpaceManSuccessAction | ILoadSpaceManFailureAction;