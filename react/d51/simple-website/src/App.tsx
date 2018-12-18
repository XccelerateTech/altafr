import React, { Component } from 'react';
import logo from './logo1.png'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Simple Website</h1>
        <br />
        <p>This is a simple website made without React. Try to convert this into React enabled.
</p>
        <br />

        <div>
          <ol>
            <li>First, you need to use create-react-app</li>
            <li>Second, you need to run npm start</li>
          </ol>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src={logo} />
</div>
        </div>
      </div>
    );
  }
}

export default App;
