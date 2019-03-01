import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import image from "./image.jpg";

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>This is the Home page.</p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>This is a page, known as About.</p>
    <img src={image} alt="this is meant to a message if the it doesnt load." />
  </div>
);

const Topic = props => (
  <div>
    <h3>{props.match.params.topicId}</h3>
  </div>
);

const Topics = props => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link
          to={`${
            props.match.url
          }/rendering additional information can go here.`}
        >
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${props.match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${props.match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={props.match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
