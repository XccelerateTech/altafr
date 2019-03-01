import React from 'react';
import ReactDOM from 'react-dom';
// Imports Bootstrap Css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import * as serviceWorker from './serviceWorker';

import CommentCardList from "./components/CommentCard/CommentCardList"
import Counter from "./components/Counter"

// ReactDOM.render(<CommentCardList />, document.getElementById('root'));
serviceWorker.unregister();

ReactDOM.render(<Counter name='' />, document.getElementById('root'));
