import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './ShoppingList.js';
import NumberDescriber from './NumberDescriber.js';
import Item from './ToDoList';
import Repeat from './Repeat';
import NameForm from './NameForm';
import TextEssay from './TextEssay';




class App extends Component {

    render() {
      
      function TodoList() {
  const todos = ['Finish document', 'Submit product', 'Nag Dan to review'];
  return (
    <ul>
      {todos.map((message) => <Item key={message} message={message} />)}
    </ul>
  );
}
function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

      <div>{TodoList()}</div>
      <div>{ListOfTenThings()}</div>
      <NumberDescriber number='7' />
      <ShoppingList name='Shopping Time'/>      

      <NameForm/>
      <TextEssay />
      </div>
    );

   

  }
}

export default App;




