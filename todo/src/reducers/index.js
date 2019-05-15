import {ADD_TODO, TOGGLE_TODO} from '../actions';

const initialState = {
    todos: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state.todos, action.payload]
        case TOGGLE_TODO:
            state.todos[action.payload].complete = !state.todos[action.payload].complete;
            return state.todos;
        default:
          return state;
    }
}