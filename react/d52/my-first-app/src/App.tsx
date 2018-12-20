import * as React from 'react';
import AboutUsPage from './AboutUsPage';
import CounterPage from './d51/Counters/CounterPage';
import QuestionerPage from './d52/Questioner/QuestionerPage';
import TimerPage from './d53/Timer/TimerPage';
import Titanic from './titianic';

import {
  Link, Route
} from 'react-router-dom';

export default class App extends React.Component{
  public render(){
    return (
      <div>
        <div>
          <Link to="/aboutus">About Us</Link>
          <Link to="/counter">Counters</Link>
          <Link to="/questioner">Questioner</Link>
          <Link to="/timer">Timer</Link>
        </div>

        <Route path="/aboutus" component={AboutUsPage} />
        <Route path="/secretPage" component={Titanic} />
        <Route path="/questioner" component={QuestionerPage} />
        <Route path="/counter" component={CounterPage} />
        <Route path="/timer" component={TimerPage} />


      </div>
    )
  }
}
