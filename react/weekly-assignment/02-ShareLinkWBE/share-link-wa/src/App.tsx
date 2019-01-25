import * as React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line

import {
  BrowserRouter as Router, Link, Route
} from 'react-router-dom'

import Navbar from 'reactstrap/lib/Navbar';
import NavItem from 'reactstrap/lib/NavItem';
import AddButton from './component/AddButton';
import ViewLinks from './component/ViewLinks';

class App extends React.Component {
  public render() {
    return (
      <Router>
      <div className="App">
      <Navbar dark={true} >
       
          <h3>Xccelerate Links</h3>
      
          <NavItem>
          <Link to="/">Show Links</Link>
          </NavItem>
          <NavItem>
          <Link to="/addButton">Add Link</Link>
          </NavItem>
      </Navbar>
     
       <Route exact={true} path="/" component={ViewLinks} />
       <Route path="/addButton" component={AddButton} /> 
      </div>
      </Router>
    );
  }
}

export default App;
