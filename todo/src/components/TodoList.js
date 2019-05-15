import React from 'react';
import TodoItems from './TodoItems';


const TodoList = (props) => {
    const todos = props.todos.map((todo, i) => <TodoItems todo={todo} key={i} index={i} />);
    return (
        <ul>
            {todos}
        </ul>
    )
}

export default TodoList;

