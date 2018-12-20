import * as React from 'react';
import AboutUsPage from './AboutUsPage';
import CounterPage from './d51/Counters/CounterPage';
import QuestionerPage from './d52/Questioner/QuestionerPage';
import FormCardPage from './d53/FormDemo/FormCardPage';
import TimerPage from './d53/Timer/TimerPage';
import Navbar from './Navbar';
import NoMatch from './NoMatch';
import Titanic from './titianic';

import {
  Route, Switch
} from 'react-router-dom';

export default class App extends React.Component{
  public render(){
    return (
      <div>
        <div>
     <Navbar />
        </div>
        <Switch>
        <Route path="/aboutus" component={AboutUsPage} />
        <Route path="/secretPage" component={Titanic} />
        <Route path="/questioner" component={QuestionerPage} />
        <Route path="/counter" component={CounterPage} />
        <Route path="/timer" component={TimerPage} />
        <Route path="/form" component={FormCardPage} />
        <Route component={NoMatch} />
        </Switch>

      </div>
    )
  }
}
