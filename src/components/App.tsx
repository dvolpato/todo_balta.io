import React from 'react';
import TodoContext from '../contexts/TodoContext';
import Navbar from './Navbar';
import TodoList from './TodoList';

function App() {
  return (
    <TodoContext>
      <div className="uk-container">
        <Navbar />
        <TodoList />
      </div>
    </TodoContext>
  );
}

export default App;