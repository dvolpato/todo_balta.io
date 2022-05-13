import React from "react";
import { Todo } from "../models/Todo";

function TodoList() {
  const todos: Todo[] = [
    { id: 1, title: "Ir ao supermercado", done: false },
    { id: 2, title: "Ir a academia", done: false },
  ];

  return (
    <div>{todos[0].title}</div>
  );
}

export default TodoList;