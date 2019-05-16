import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    };
  }

  addTodo = event => {
    event.preventDefault();
    this.props.addTodo({
      value: this.state.newTodo,
      complete: false
    });
    this.setState({
      newTodo: ''
    });
  }

  handleTodoChange = event => {
    this.setState({
      newTodo: event.target.value
    });
  }
 
  render() {
    return (
      <div className="App">
      <h2>Cash's Todo Form</h2>
        <form onSubmit={this.addTodo}>
          <input
            onChange={this.handleTodoChange}
            placeholder="new todo"
            value={this.state.newTodo}
          />
          <button onClick={this.addTodo}>Add New Todo</button>
        </form>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};


export default connect(mapStateToProps, { addTodo })(App);

