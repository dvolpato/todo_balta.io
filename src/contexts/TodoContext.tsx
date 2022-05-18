import React, { createContext, useEffect, useState } from "react";
import { Todo } from "../models/Todo";
import { get, save } from "../services/TodoService";
import { TodoContextType } from "./TodoContextType";

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => { },
  removeTodo: () => { },
  toggle: () => { },
});

function TodoProvider(props: any) {
  const [todos, setTodos] = useState<Todo[]>(get);

  useEffect(() => {
    save(todos);
  }, [todos]);

  function addTodo(title: string) {
    console.log("Add: " + title);
    const todo: Todo = { id: todos.length + 1, title, done: false };
    setTodos([...todos, todo]);
  }

  function removeTodo(todo: Todo) {
    console.log("Remove: " + todo.title);
    const index = todos.indexOf(todo);
    setTodos(todos.filter((_, i) => i !== index));
  }

  function toggle(todo: Todo) {
    console.log("Toogle: " + todo.title);
    const index = todos.indexOf(todo);
    todos[index].done = !todo.done;
    setTodos([...todos]);
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggle }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;