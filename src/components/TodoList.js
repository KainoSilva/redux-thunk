import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { toggleTodo, deleteTodo, fetchTodos } from './actions';

function TodoList({ todos, toggleTodo, deleteTodo, fetchTodos }) {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))}
      </ul>
      <TodoForm />
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = {
  toggleTodo,
  deleteTodo,
  fetchTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

