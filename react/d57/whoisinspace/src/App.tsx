import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import SpaceList from './components/SpaceList';
import { store } from './store'

const App = () => (
    <Provider store={store}>
    <div>
        <h2>Space People</h2>
        <SpaceList />
    </div>
    </Provider>
)

render(<App />, document.getElementById("root"))
export default App;