import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, FETCH_TODOS } from './actionTypes';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text,
    completed: false,
  }
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://64c4e9d8c853c26efada4a9e.mockapi.io/todos/todosText');
      const data = await response.json();

      dispatch({ type: FETCH_TODOS, payload: data });
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };
};

