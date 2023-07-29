import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import store from './store/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <h1 className="app-title">Todo List</h1>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
