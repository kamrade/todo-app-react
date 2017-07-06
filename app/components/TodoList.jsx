var React = require('react');
var {connect} = require('react-redux');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var { todos } = this.props;
    var renderTodos = () => {
      if (todos.length == 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      } else {
        return todos.map((todo)=>{
          return (
            <Todo
              key={todo.id} {...todo}
            />
          );
        })
      }
    }
    return (
      <div>
        { renderTodos() }
      </div>
    );
  }
});

// Set todos to the props of our component TodoList
module.exports = connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);
