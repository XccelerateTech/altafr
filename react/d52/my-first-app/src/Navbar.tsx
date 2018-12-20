import * as React from 'react';

import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
    public render() {
        return (
        <div className="ui inverted tiny five item menu">
            <Link className="item" to="/aboutus">About Us</Link>
            <Link className="item" to="/counter">Counters</Link>
            <Link className="item" to="/questioner">Questioner</Link>
            <Link className="item" to="/timer">Timer</Link>
            <Link className="item" to="/form">FormCards</Link>
        </div>

        )
    }
}