import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from './actions';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  const { id, text, completed } = todo;

  const handleToggle = () => {
    toggleTodo(id);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <li onClick={handleToggle} className={`todo-item ${completed ? 'completed' : ''}`}>
      <span>{text}</span>
      <button className="delete-button" onClick={handleDelete}>
        &times;
      </button>
    </li>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
  };
};

export default connect(null, mapDispatchToProps)(TodoItem);
