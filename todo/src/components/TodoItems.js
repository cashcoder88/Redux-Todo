import React from 'react';
import toggleTodo from '../actions';
import { connect } from 'react-redux';



class TodoItems extends React.Component {

    toggleComplete = e => {
        e.preventDefault();
        this.props.toggleTodo(this.props.index);
    }
    render() {
        return (
            <li>
                <input 
                type='checkbox'
                onChange={this.toggleComplete}
                />
                {this.props.todo.value}    
            </li>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//        todos: state.todos
//     };
//   };

export default connect(null, { toggleTodo })(TodoItems);

