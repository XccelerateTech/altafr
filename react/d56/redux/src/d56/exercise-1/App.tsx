import * as React from "react";
import { render } from "react-dom";
import { connect, Provider } from "react-redux";
import { createStore } from "redux";
import  PureLinkList from './LinkList'
import PureUserList from './UsersLists';

interface IRootState {
    links: Array<{
      title: string,
      url: string
    }>,
    users: Array<{
        name: string
    }>
  }

  const rootReducer = (state: IRootState) => {
    return {
      links: [
        { title: 'Google', url: 'http://www.google.com' },
        { title: 'Yahoo', url: 'http://www.yahoo.com' },
      ],
      users: [
          { name: 'UserMan1' },
          { name: 'UserMan2' }
      ]
    }
  };

  const store = createStore <any,any,any,any>(rootReducer);

  const mapStateToProp = (state: IRootState) => {
    return {
      links: state.links,
      users: state.users
    }
  }
  
  const LinkList = connect(mapStateToProp)(PureLinkList)
  const UserList = connect(mapStateToProp)(PureUserList)
  
  export const App = () => (
    <Provider store={store}>
      <div>
        <h2>Links</h2>
        <LinkList />
        <h2>Users</h2>
        <UserList />
      </div>
    </Provider>
  );
  
  render(<App />, document.getElementById("root"));
  
