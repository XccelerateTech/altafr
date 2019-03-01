import * as React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

const rootReducer = state => {
    return {
        links: [
            { title: "Google", url: "https://www.google.com" },
            { title: "Yahoo", url: "https://www.yahoo.com" },
            { title: "Facebook", url: "https://www.facebook.com" },
            { title: "HKO", url: "https://www.hko.gov.hk" },
            { title: "DuckDuckGo", url: "https://www.duckduckgo.com" }
        ],
        users: [
            {
                name: "Johnny", last: "Cash", occupation: "Musician"
            },
            {
                name: "Adolf", last: "Hitler", occupation: "Painter, Dictator"
            },
        ]
    };
};

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const PureLinkList = props => {
    return (
        <div>
            {props.links.map(l => (
                <div>
                    {l.title} - {l.url}
                </div>
            ))}
        </div>
    );
};

const PureUserList = props => {
    return (
        <div>
            {props.users.map(u => (
                <div>
                    {u.name} - {u.last} : {u.occupation}
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        links: state.links,
        users: state.users
    };
};

const LinkList = connect(mapStateToProps)(PureLinkList);
const UserList = connect(mapStateToProps)(PureUserList);

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Provider store={store}>
                <div>
                    <h2>Links</h2>
                    <LinkList />
                    <h2>Users</h2>
                    <UserList />
                </div>
            </Provider>
        )
    }
};



