import React from 'react';
import TodoItems from './TodoItems';


const TodoList = (props) => {
    return (
        <ul>
            {props.todos.map((todo, i) => <TodoItems todo={todo} key={i} index={i}/> ) }
        </ul>
    )
}

export default TodoList;