import axios from 'axios';
import { Dispatch } from "redux";
import {ILink} from "../../models";
import {ITag} from "../../models";

export const LIST_LINKS = 'LIST-LINKS';
export type LIST_LINKS = typeof LIST_LINKS;

export const LIST_TAGS = 'LIST_TAGS';
export type LIST_TAGS = typeof LIST_TAGS;

export const ADD_LINK = 'ADD_LINK';
export type ADD_LINK = typeof ADD_LINK;

export const ADD_TAG = 'ADD_TAG';
export type ADD_TAG = typeof ADD_TAG;

export interface IListLinksAction {
    type: LIST_LINKS;
    links: ILink[];
};

export interface IAddLinkAction {
    type: ADD_LINK;
    link: ILink;
};

export interface IListTagsAction {
    type: LIST_TAGS;
    tags: ITag[];
}

export interface IAddTagAction {
    type: ADD_TAG;
    tag: ITag;
}

export function ListLinksAction(links: ILink[]):IListLinksAction{
    return {
        links,
        type: LIST_LINKS,
    }
}

export function AddLinkAction(link: ILink):IAddLinkAction{
    return {
        link,
        type: ADD_LINK,
    }
}

export function ListTagsAction(tags: ITag[]):IListTagsAction{
    return {
        tags,
        type: LIST_TAGS,
    }
}

export function AddTagAction(tag: ITag):IAddTagAction{
    return {
        tag,
        type: ADD_TAG,
    }
}

export function ListLinksFromAPIAction(search: string){
    return (dispatch: Dispatch<IListLinksAction>) => {
        axios.get(`${process.env.REACT_APP_API_SERVER}/api/links?search=${search}`).then(res => {
            dispatch(ListLinksAction(res.data));
        });
    };
}

export function ListTagFromAPIAction(search: string){
    return (dispatch: Dispatch<IListTagsAction>) => {
        axios.get(`${process.env.REACT_APP_API_SERVER}/api/links?search=${search}`).then(res => {
            dispatch(ListTagsAction(res.data));
        });
    };
}

export function AddLinkActionThunk(link: ILink){
    return (dispatch: Dispatch<IAddLinkAction>) => {
        axios.post(`${process.env.REACT_APP_API_SERVER}/api/link`, link).then(res => {
            // tslint:disable-next-line:no-console
            console.log(link);
            dispatch(AddLinkAction(link));
        });
    };
}

export function AddTagActionThunk(tag: ITag){
    return (dispatch: Dispatch<IAddTagAction>) => {
        axios.post(`${process.env.REACT_APP_API_SERVER}/api/tag`,tag).then(res => {
            dispatch(AddTagAction(tag));
        });
    };
}

