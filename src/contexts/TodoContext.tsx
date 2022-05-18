import React, { createContext } from "react";
import { Todo } from "../models/Todo";
import { TodoContextType } from "./TodoContextType";

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => { },
  removeTodo: () => { },
  toggle: () => { },
});

function TodoProvider(props: any) {
  const todos = [
    { id: 1, title: "Ir ao supermercado", done: true },
    { id: 2, title: "Ir a academia", done: false },
  ];

  function addTodo(title: string) {
    console.log("Add: " + title);
  }
  function removeTodo(todo: Todo) {
    console.log("Remove: " + todo.title);
  }
  function toggle(todo: Todo) {
    console.log("Toogle: " + todo.title);

  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggle }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;