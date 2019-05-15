import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import TodoList from './components/TodoList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoNew: ''
    };

  }

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo({
      value: this.state.todoNew,
      complete: false
    });
    this.setState({
      todoNew: ''
    })
  }

  handleTodoChange = e => {
    e.preventDefault();
    this.setState({
      todoNew: event.target.value
    })
  }
 
  render() {
    console.log(this.props.todos)
    return (
      <div className="App">
        <h2>Cash's To-Do List</h2>
        <form onSubmit={this.addTodo}>
          <input
          onChange={this.handleTodoChange}
          placeholder="Add A New Todo"
          value={this.state.todoNew}
          />
          <button onClick={this.addTodo}>Add Todo</button>
        </form>
        
      
        <TodoList todos={this.props.todos} />
      </div>
    );
    
  }
}

const mapStateToProps = state => {
  return {
     todos: state.todos
  };
};


export default connect(mapStateToProps, { addTodo })(App);
