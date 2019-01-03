import * as React from "react";
import { render } from "react-dom";
import { connect, Provider } from "react-redux";
import { Action, createStore, Dispatch } from "redux";
import  PureLinkList from './LinkList'

const ADD_LINK = 'ADD_LINK';
type ADD_LINK = typeof ADD_LINK;

const CLEAR_LINK = 'CLEAR_LINK';
type CLEAR_LINK = typeof CLEAR_LINK;

const DELETE_LINK = 'DELETE_LINK';
type DELETE_LINK = typeof DELETE_LINK;

interface IAddLinkAction extends Action {
  type: ADD_LINK;
  link: {
    id: number,
    title: string,
    url: string
  };
}

interface IClearLinkAction extends Action {
  type: CLEAR_LINK;
}

interface IDeleteLinkAction extends Action {
  type: DELETE_LINK;
  key: number;
}

type LinkActions = IAddLinkAction | IClearLinkAction | IDeleteLinkAction

interface IRootState {
    links: Array<{
      id: number,
      title: string,
      url: string
    }>
  }

  const rootReducer = (state: IRootState, action: LinkActions) => {
    switch (action.type){
      case ADD_LINK:
        return {
          links: state.links.concat([action.link])
        }
      case CLEAR_LINK:
        return {
          links: []
        }
      case DELETE_LINK:
       
          const newLinks = state.links.filter( item => {
            return item.id !== action.key
          })
          return {
            links: newLinks
        }
        default:
        return {
             links: [
               { id: 0, title: 'Google', url: 'http://www.google.com' },
               { id: 1, title: 'Yahoo', url: 'http://www.yahoo.com' },
             ]
             
    }
    // 
    // return {
    //   links: [
    //     { title: 'Google', url: 'http://www.google.com' },
    //     { title: 'Yahoo', url: 'http://www.yahoo.com' },
    //   ],
    //   
    // }
  };
}

  const store = createStore <any,any,any,any>(rootReducer);

  const mapStateToProp = (state: IRootState) => {
    return {
      links: state.links,
    }
  }

  const mapDispatchToProps = (dispatch: Dispatch<LinkActions>) =>{
    return {
      addLink: () => dispatch({
        link: {
          id: Math.random(),
          title: 'Xccelerate',
          url: 'https://www.xccelerate.co'
        },
        type: ADD_LINK
      }),
      clearLink: () => dispatch ({
        type: CLEAR_LINK
      }),
      deleteLink: (key: number) => dispatch({
        
        key,
        type: DELETE_LINK,
      })
    }
  }
  
  const LinkList = connect(mapStateToProp, mapDispatchToProps)(PureLinkList)
  
  export const App = () => (
    <Provider store={store}>
      <div>
        <h2>Links</h2>
        <LinkList />
      </div>
    </Provider>
  );
  
  render(<App />, document.getElementById("root"));
  
