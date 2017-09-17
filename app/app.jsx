var React = require('react');
var ReactDOM = require('react-dom');
// var Route = require('react-router').Route;

var { Provider } = require('react-redux');
var { Router, Route, IndexRoute, Link, Navigation, browserHistory, hashHistory } = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
// reducers are imported in store
var store   = require('configureStore').configure();

store.subscribe(() => {
  console.log('new state', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('Feed the cat'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
