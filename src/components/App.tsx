import React from 'react';
import TodoContext from '../contexts/TodoContext';
import Navbar from './Navbar';
import TodoList from './TodoList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTodo from './AddTodo';

/* 
 * - react-router-dom v6 replaced Switch with Routes 
 * - Routes must be declared from more specific to more generic 
 */

function App() {
  return (
    <TodoContext>
      <Router>
        <Navbar />
        <br />
        <div className="uk-container">
          <Routes>
            <Route path="/create" element={<AddTodo />} />
            <Route path="/" element={
              <div>
                <h4>Minha lista de tarefas</h4>
                <TodoList />
              </div>
            }
            />
          </Routes>
        </div>
      </Router>
    </TodoContext>
  );
}

export default App;